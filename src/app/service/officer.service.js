const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');

class OfficerService {
    async getDashboardCounts() {
        try {
            // Get total reports
            const totalReports = await prisma.report.count();

            // Get active police count
            const activePolice = await prisma.police.count({
                where: { status: 'available' }
            });

            // Calculate average response time
            const assignments = await prisma.assignment.findMany({
                include: {
                    trackings: {
                        where: { status: 'arrived' },
                        orderBy: { createdAt: 'asc' },
                        take: 1
                    }
                }
            });

            let totalResponseTime = 0;
            let countWithResponse = 0;

            assignments.forEach(assignment => {
                if (assignment.trackings.length > 0) {
                    const responseTime = (assignment.trackings[0].createdAt - assignment.assignedAt) / (1000 * 60);
                    totalResponseTime += responseTime;
                    countWithResponse++;
                }
            });

            const avgResponseTime = countWithResponse > 0 ? Math.round(totalResponseTime / countWithResponse) : 0;

            // Calculate resolution rate
            const completedReports = await prisma.report.count({
                where: { status: 'completed' }
            });

            const resolveCase = totalReports > 0 ? Math.round((completedReports / totalReports) * 100) : 0;

            return {
                response_time: avgResponseTime,
                resolve_Case: resolveCase,
                total_report: totalReports,
                active_police: activePolice
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getCaseStatusCount() {
        try {
            const [total, statusCounts] = await Promise.all([
                prisma.report.count(),
                prisma.report.groupBy({
                    by: ['status'],
                    _count: true
                })
            ]);

            // Initialize case status object
            const caseStatus = {
                new: 0,
                assigned: 0,
                in_progress: 0,
                verified: 0,
                completed: 0
            };

            // Fill in actual counts
            statusCounts.forEach(item => {
                if (caseStatus.hasOwnProperty(item.status)) {
                    caseStatus[item.status] = item._count;
                }
            });

            const completed = caseStatus.completed;
            const resolutionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

            return {
                total_case: total,
                resolution_rate: resolutionRate,
                case_status: caseStatus
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getLatestReports(query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                ...(status && { status }),
                ...(search && {
                    OR: [
                        { title: { contains: search } },
                        { location: { contains: search } }
                    ]
                })
            };

            const [reports, total] = await Promise.all([
                prisma.report.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        cctv: {
                            select: {
                                name: true
                            }
                        }
                    }
                }),
                prisma.report.count({ where })
            ]);

            const formattedReports = reports.map(report => ({
                id: report.id,
                title: report.title,
                status: report.status,
                location: report.location,
                created_at: report.createdAt,
                report_image: report.reportImage,
                incident_type: report.incidentType,
                cctv_name: report.cctv?.name || null
            }));

            return {
                data: formattedReports,
                pagination: {
                    total,
                    page,
                    limit,
                    total_pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getOfficerNotifications(officerId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                officerId,
                ...(status && { status }),
                ...(search && {
                    OR: [
                        { title: { contains: search } },
                        { message: { contains: search } }
                    ]
                })
            };

            const [notifications, total] = await Promise.all([
                prisma.notification.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        report: {
                            select: {
                                location: true
                            }
                        }
                    }
                }),
                prisma.notification.count({ where })
            ]);

            const formattedNotifications = notifications.map(notification => ({
                id: notification.id,
                title: notification.title,
                message: notification.message,
                location: notification.report?.location || null,
                type: notification.type,
                status: notification.status,
                created_at: notification.createdAt
            }));

            return {
                data: formattedNotifications,
                pagination: {
                    total,
                    page,
                    limit,
                    total_pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async verifyReport(reportId, officerId, status) {
        try {
            const report = await prisma.report.findUnique({
                where: { id: reportId }
            });

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            const validStatuses = ['verified', 'in_progress', 'completed'];
            if (!validStatuses.includes(status)) {
                throw new BadRequestError('Status tidak valid');
            }

            // Update report status
            const updatedReport = await prisma.report.update({
                where: { id: reportId },
                data: {
                    status,
                    updatedAt: new Date()
                }
            });

            // Create audit log
            await prisma.auditLog.create({
                data: {
                    entity: 'Report',
                    entityId: reportId,
                    action: 'VERIFY',
                    actorOfficerId: officerId,
                    description: `Laporan diverifikasi dengan status: ${status}`,
                    createdAt: new Date()
                }
            });

            return {
                id: updatedReport.id,
                status: updatedReport.status,
                updated_at: updatedReport.updatedAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async assignOfficerToReport(reportId, officerId, assignedByOfficerId) {
        try {
            const [report, officer] = await Promise.all([
                prisma.report.findUnique({ where: { id: reportId } }),
                prisma.officer.findUnique({ where: { id: officerId } })
            ]);

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            if (!officer) {
                throw new NotFoundError('Officer tidak ditemukan');
            }

            if (report.isAssigned) {
                throw new ConflictError('Laporan sudah ditugaskan');
            }

            const result = await prisma.$transaction(async (tx) => {
                // Create assignment
                const assignment = await tx.assignment.create({
                    data: {
                        reportId,
                        officerId,
                        assignedBy: assignedByOfficerId,
                        assignedAt: new Date()
                    }
                });

                // Update report
                await tx.report.update({
                    where: { id: reportId },
                    data: {
                        isAssigned: true,
                        status: 'assigned',
                        updatedAt: new Date()
                    }
                });

                // Update officer status
                await tx.officer.update({
                    where: { id: officerId },
                    data: { status: 'busy' }
                });

                // Create notifications
                await tx.notification.createMany({
                    data: [
                        {
                            ownerId: report.ownerId,
                            title: 'Petugas Ditugaskan',
                            message: `Petugas ${officer.name} ditugaskan untuk menangani laporan Anda`,
                            type: 'assignment',
                            status: 'unread',
                            reportId,
                            createdAt: new Date(),
                            isRead: false
                        },
                        {
                            policeId: officerId,
                            title: 'Penugasan Baru',
                            message: `Anda ditugaskan untuk menangani laporan di ${report.location}`,
                            type: 'assignment',
                            status: 'unread',
                            reportId,
                            createdAt: new Date(),
                            isRead: false
                        }
                    ]
                });

                return assignment;
            });

            return {
                id: result.id,
                report_id: result.reportId,
                officer_id: result.officerId,
                assigned_at: result.assignedAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getAvailableOfficers() {
        try {
            const officers = await prisma.officer.findMany({
                where: { status: 'available' },
                select: {
                    id: true,
                    name: true,
                    phone: true,
                    status: true,
                    latitude: true,
                    longitude: true
                }
            });

            return officers.map(officer => ({
                id: officer.id,
                name: officer.name,
                phone: officer.phone,
                status: officer.status,
                location: {
                    latitude: officer.latitude,
                    longitude: officer.longitude
                }
            }));
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getPoliceList(query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                ...(status && { status }),
                ...(search && {
                    OR: [
                        { name: { contains: search } },
                        { phone: { contains: search } }
                    ]
                })
            };

            const [policeOfficers, total] = await Promise.all([
                prisma.police.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        status: true,
                        latitude: true,
                        longitude: true,
                        vehicleType: true,
                        licensePlate: true
                    }
                }),
                prisma.police.count({ where })
            ]);

            const formattedPolice = policeOfficers.map(police => ({
                id: police.id,
                name: police.name,
                phone: police.phone,
                status: police.status,
                location: {
                    latitude: police.latitude,
                    longitude: police.longitude
                },
                vehicle_type: police.vehicleType,
                license_plate: police.licensePlate
            }));

            return {
                data: formattedPolice,
                pagination: {
                    total,
                    page,
                    limit,
                    total_pages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new OfficerService();