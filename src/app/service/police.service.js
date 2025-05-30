const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');

class PoliceService {
    async getDashboard(policeId) {
        try {
            // Get active reports assigned to this police officer
            const activeReports = await prisma.assignment.count({
                where: {
                    officerId: policeId,
                    report: {
                        status: {
                            in: ['assigned', 'in_progress']
                        }
                    }
                }
            });

            // Get total and resolved cases for this police officer
            const [totalAssigned, resolvedCases] = await Promise.all([
                prisma.assignment.count({
                    where: { officerId: policeId }
                }),
                prisma.assignment.count({
                    where: {
                        officerId: policeId,
                        report: {
                            status: 'completed'
                        }
                    }
                })
            ]);

            const resolvedPercentage = totalAssigned > 0 
                ? Math.round((resolvedCases / totalAssigned) * 100) 
                : 0;

            return {
                active_report: activeReports,
                resolved_case: resolvedPercentage
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getActiveReports(policeId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                assignments: {
                    some: {
                        officerId: policeId
                    }
                },
                status: {
                    in: status ? [status] : ['assigned', 'in_progress']
                },
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
                    select: {
                        id: true,
                        title: true,
                        status: true,
                        location: true,
                        createdAt: true
                    }
                }),
                prisma.report.count({ where })
            ]);

            const formattedReports = reports.map(report => ({
                id: report.id,
                title: report.title,
                status: report.status,
                location: report.location,
                created_at: report.createdAt
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

    async getReportDetail(reportId, policeId) {
        try {
            // Verify police has access to this report
            const assignment = await prisma.assignment.findFirst({
                where: {
                    reportId,
                    officerId: policeId
                }
            });

            if (!assignment) {
                throw new NotFoundError('Laporan tidak ditemukan atau Anda tidak memiliki akses');
            }

            const report = await prisma.report.findUnique({
                where: { id: reportId },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    status: true,
                    location: true,
                    reportImage: true,
                    incidentType: true,
                    createdAt: true
                }
            });

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            return {
                id: report.id,
                title: report.title,
                description: report.description,
                status: report.status,
                location: report.location,
                report_image: report.reportImage,
                incident_type: report.incidentType,
                created_at: report.createdAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getReportTracking(reportId, policeId) {
        try {
            // Verify police has access to this report
            const assignment = await prisma.assignment.findFirst({
                where: {
                    reportId,
                    officerId: policeId
                },
                include: {
                    report: {
                        select: {
                            title: true
                        }
                    },
                    officer: {
                        select: {
                            id: true,
                            name: true,
                            phone: true,
                            licensePlate: true,
                            vehicleType: true,
                            status: true,
                            latitude: true,
                            longitude: true
                        }
                    },
                    trackings: {
                        orderBy: { createdAt: 'desc' },
                        take: 1
                    }
                }
            });

            if (!assignment) {
                throw new NotFoundError('Laporan tidak ditemukan atau Anda tidak memiliki akses');
            }

            // Calculate if officer is nearby (within 100 meters)
            let isNearby = false;
            if (assignment.trackings.length > 0) {
                const lastTracking = assignment.trackings[0];
                isNearby = lastTracking.distance < 100;
            }

            return {
                id: reportId,
                title_report: assignment.report.title,
                is_nearby: isNearby,
                officer: {
                    id: assignment.officer.id,
                    name: assignment.officer.name,
                    phone: assignment.officer.phone,
                    license_plate: assignment.officer.licensePlate,
                    vehicle_type: assignment.officer.vehicleType,
                    status: assignment.officer.status
                }
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getNotifications(policeId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                policeId,
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
                    select: {
                        id: true,
                        title: true,
                        message: true,
                        type: true,
                        status: true
                    }
                }),
                prisma.notification.count({ where })
            ]);

            return {
                data: notifications,
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

    async updateReportStatus(reportId, policeId, status, description) {
        try {
            // Verify police has access to this report
            const assignment = await prisma.assignment.findFirst({
                where: {
                    reportId,
                    officerId: policeId
                }
            });

            if (!assignment) {
                throw new NotFoundError('Laporan tidak ditemukan atau Anda tidak memiliki akses');
            }

            const result = await prisma.$transaction(async (tx) => {
                // Update report status
                const report = await tx.report.update({
                    where: { id: reportId },
                    data: {
                        status,
                        updatedAt: new Date()
                    }
                });

                // Create audit log
                await tx.auditLog.create({
                    data: {
                        entity: 'Report',
                        entityId: reportId,
                        action: 'UPDATE_STATUS',
                        actorPoliceId: policeId,
                        description: description || `Status laporan diubah menjadi ${status}`,
                        createdAt: new Date()
                    }
                });

                return report;
            });

            return {
                id: result.id,
                status: result.status,
                updated_at: result.updatedAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async updateTracking(reportId, policeId, trackingData) {
        try {
            // Verify police has access to this report
            const assignment = await prisma.assignment.findFirst({
                where: {
                    reportId,
                    officerId: policeId
                },
                include: {
                    report: {
                        select: {
                            location: true,
                            latitude: true,
                            longitude: true
                        }
                    }
                }
            });

            if (!assignment) {
                throw new NotFoundError('Laporan tidak ditemukan atau Anda tidak memiliki akses');
            }

            // Calculate distance if report has coordinates
            let distance = null;
            if (assignment.report.latitude && assignment.report.longitude) {
                // Simple distance calculation (in meters)
                const R = 6371000; // Earth's radius in meters
                const dLat = (trackingData.latitude - assignment.report.latitude) * Math.PI / 180;
                const dLon = (trackingData.longitude - assignment.report.longitude) * Math.PI / 180;
                const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(assignment.report.latitude * Math.PI / 180) * 
                    Math.cos(trackingData.latitude * Math.PI / 180) *
                    Math.sin(dLon/2) * Math.sin(dLon/2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                distance = R * c;
            }

            // Create tracking record
            const tracking = await prisma.tracking.create({
                data: {
                    assignmentId: assignment.id,
                    officerId: policeId,
                    latitude: trackingData.latitude,
                    longitude: trackingData.longitude,
                    timestamp: new Date(),
                    distance,
                    estimatedTime: trackingData.estimatedTime,
                    status: trackingData.status,
                    description: trackingData.description,
                    createdAt: new Date()
                }
            });

            // Update assignment if arrived or completed
            if (trackingData.status === 'arrived' || trackingData.status === 'completed') {
                await prisma.report.update({
                    where: { id: reportId },
                    data: {
                        status: trackingData.status === 'completed' ? 'completed' : 'in_progress',
                        updatedAt: new Date()
                    }
                });
            }

            return {
                id: tracking.id,
                status: tracking.status,
                created_at: tracking.createdAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new PoliceService();