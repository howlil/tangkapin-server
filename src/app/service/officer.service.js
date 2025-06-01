const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError, BadRequestError, ConflictError, handlePrismaError } = require('../../libs/http/error.handler.http');

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
                if (assignment.trackings.length > 0 && assignment.assignedAt) {
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
                        { title: { contains: search, mode: 'insensitive' } },
                        { location: { contains: search, mode: 'insensitive' } }
                    ]
                })
            };

            const [reports, total] = await Promise.all([
                prisma.report.findMany({
                    where,
                    skip,
                    take: parseInt(limit),
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
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total_pages: Math.ceil(total / parseInt(limit))
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

    async assignOfficerToReport(reportId, policeId, assignedByOfficerId) {
        try {
            const [report, police] = await Promise.all([
                prisma.report.findUnique({ where: { id: reportId } }),
                prisma.police.findUnique({ where: { id: policeId } }) // Changed from officer to police
            ]);

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            if (!police) {
                throw new NotFoundError('Police tidak ditemukan');
            }

            if (report.isAssigned) {
                throw new ConflictError('Laporan sudah ditugaskan');
            }

            const result = await prisma.$transaction(async (tx) => {
                // Create assignment
                const assignment = await tx.assignment.create({
                    data: {
                        reportId,
                        officerId: policeId, // This maps to police ID based on schema
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

                // Update police status
                await tx.police.update({
                    where: { id: policeId },
                    data: { status: 'busy' }
                });

                // Create notifications
                await tx.notification.createMany({
                    data: [
                        {
                            ownerId: report.ownerId,
                            title: 'Petugas Ditugaskan',
                            message: `Petugas ${police.name} ditugaskan untuk menangani laporan Anda`,
                            type: 'assignment',
                            status: 'unread',
                            reportId,
                            createdAt: new Date(),
                            isRead: false
                        },
                        {
                            policeId: policeId,
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
            const policeOfficers = await prisma.police.findMany({
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

            return policeOfficers.map(police => ({
                id: police.id,
                name: police.name,
                phone: police.phone,
                status: police.status,
                location: {
                    latitude: police.latitude,
                    longitude: police.longitude
                }
            }));
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getCurrentIncidentMap() {
        try {
            // Get active reports (new, assigned, in_progress)
            const activeReports = await prisma.report.findMany({
                where: {
                    status: {
                        in: ['new', 'assigned', 'in_progress']
                    }
                },
                select: {
                    id: true,
                    title: true,
                    location: true,
                    incidentType: true,
                    status: true,
                    createdAt: true,
                    cctv: {
                        select: {
                            name: true,
                            location: true
                        }
                    },
                    owner: {
                        select: {
                            latitude: true,
                            longitude: true
                        }
                    }
                }
            });

            // Get active officers/police
            const activeOfficers = await prisma.police.findMany({
                where: {
                    status: {
                        in: ['available', 'busy']
                    }
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                    latitude: true,
                    longitude: true,
                    assignments: {
                        where: {
                            report: {
                                status: {
                                    in: ['assigned', 'in_progress']
                                }
                            }
                        },
                        select: {
                            reportId: true,
                            trackings: {
                                orderBy: {
                                    createdAt: 'desc'
                                },
                                take: 1,
                                select: {
                                    latitude: true,
                                    longitude: true,
                                    estimatedTime: true
                                }
                            }
                        }
                    }
                }
            });

            // Format crime locations
            const crimeLocations = activeReports.map(report => {
                const latitude = report.owner?.latitude;
                const longitude = report.owner?.longitude;

                return {
                    id: report.id,
                    title: report.title,
                    location: report.location,
                    incident_type: report.incidentType,
                    status: report.status,
                    coordinates: {
                        latitude,
                        longitude
                    },
                    created_at: report.createdAt,
                    source: report.cctv ? 'cctv' : 'manual',
                    cctv_name: report.cctv?.name
                };
            }).filter(location => location.coordinates.latitude && location.coordinates.longitude);

            // Format active officers
            const officers = activeOfficers.map(officer => {
                const assignment = officer.assignments[0];
                const tracking = assignment?.trackings[0];

                return {
                    id: officer.id,
                    name: officer.name,
                    status: officer.status,
                    coordinates: {
                        latitude: tracking?.latitude || officer.latitude,
                        longitude: tracking?.longitude || officer.longitude
                    },
                    assigned_to: assignment?.reportId || null,
                    estimated_arrival: tracking?.estimatedTime || null
                };
            }).filter(officer => officer.coordinates.latitude && officer.coordinates.longitude);

            // Calculate summary statistics
            const summary = {
                total_incidents: crimeLocations.length,
                active_officers: officers.filter(o => o.status === 'available').length,
                busy_officers: officers.filter(o => o.status === 'busy').length,
                incident_types: {
                    knife: crimeLocations.filter(c => c.incident_type === 'knife').length,
                    gun: crimeLocations.filter(c => c.incident_type === 'gun').length,
                    other: crimeLocations.filter(c => c.incident_type === 'other').length
                }
            };

            return {
                summary,
                crime_locations: crimeLocations,
                active_officers: officers
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getRecentAlerts(limit = 10) {
        try {
            const recentReports = await prisma.report.findMany({
                where: {
                    status: {
                        in: ['new', 'assigned', 'in_progress']
                    },
                    incidentType: {
                        in: ['knife', 'gun']
                    }
                },
                orderBy: { createdAt: 'desc' },
                take: limit,
                select: {
                    id: true,
                    title: true,
                    location: true,
                    incidentType: true,
                    status: true,
                    createdAt: true,
                    cctv: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            const recentNotifications = await prisma.notification.findMany({
                where: {
                    type: {
                        in: ['report', 'assignment']
                    },
                    createdAt: {
                        gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
                    }
                },
                orderBy: { createdAt: 'desc' },
                take: limit,
                select: {
                    id: true,
                    title: true,
                    message: true,
                    type: true,
                    createdAt: true,
                    reportId: true,
                    report: {
                        select: {
                            location: true,
                            incidentType: true,
                            status: true
                        }
                    }
                }
            });

            const alerts = [];

            recentReports.forEach(report => {
                const timeAgo = this.getTimeAgo(report.createdAt);
                const priority = this.getPriority(report.incidentType, report.status);

                alerts.push({
                    id: report.id,
                    type: 'incident',
                    title: this.getAlertTitle(report.incidentType, report.status),
                    priority: priority.level,
                    priority_label: priority.label,
                    location: report.location,
                    location_code: this.generateLocationCode(report.location),
                    time_ago: timeAgo,
                    status: report.status,
                    incident_type: report.incidentType,
                    source: report.cctv ? `CCTV ${report.cctv.name}` : 'Manual Report',
                    created_at: report.createdAt
                });
            });

            recentNotifications.forEach(notification => {
                if (notification.report && ['knife', 'gun'].includes(notification.report.incidentType)) {
                    const timeAgo = this.getTimeAgo(notification.createdAt);

                    alerts.push({
                        id: notification.id,
                        type: 'notification',
                        title: notification.title,
                        priority: 'high',
                        priority_label: 'Emergency',
                        location: notification.report.location,
                        location_code: this.generateLocationCode(notification.report.location),
                        time_ago: timeAgo,
                        message: notification.message,
                        incident_type: notification.report.incidentType,
                        created_at: notification.createdAt
                    });
                }
            });

            const sortedAlerts = alerts
                .sort((a, b) => {
                    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
                    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];

                    if (priorityDiff !== 0) return priorityDiff;
                    return new Date(b.created_at) - new Date(a.created_at);
                })
                .slice(0, limit);

            return {
                alerts: sortedAlerts,
                total_alerts: alerts.length,
                critical_count: alerts.filter(a => a.priority === 'critical').length,
                high_count: alerts.filter(a => a.priority === 'high').length
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - new Date(date);
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }

    getPriority(incidentType, status) {
        if (incidentType === 'gun') {
            return { level: 'critical', label: 'Emergency' };
        }

        if (incidentType === 'knife') {
            if (status === 'new') return { level: 'critical', label: 'Emergency' };
            return { level: 'high', label: 'Urgent' };
        }

        if (status === 'new') return { level: 'high', label: 'Urgent' };
        return { level: 'medium', label: 'Important' };
    }

    getAlertTitle(incidentType, status) {
        const incident = incidentType === 'gun' ? 'Armed Robbery' :
            incidentType === 'knife' ? 'Armed Assault' : 'Security Alert';

        const statusLabel = status === 'new' ? 'Emergency' :
            status === 'assigned' ? 'Response Active' :
                status === 'in_progress' ? 'In Progress' : 'Alert';

        return `${incident} - ${statusLabel}`;
    }

    generateLocationCode(location) {
        if (!location) return '#000';

        const words = location.split(' ').filter(w => w.length > 2);
        const prefix = words.slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('');
        const number = Math.floor(Math.random() * 999) + 1;

        return `#${prefix}${number.toString().padStart(3, '0')}`;
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
                        officeName: true
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
                office_name: police.officeName
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