const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError } = require('../../libs/http/error.handler.http');
const { handlePrismaError } = require('../../libs/http/error.handler.http');

class ReportService {
    async listReports(ownerId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                cctv: {
                    ownerId
                },
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
                                name: true,
                                location: true
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
                report_image: report.report_image,
                incident_type: report.incident_type,
                cctv_name: report.cctv.name,
                cctv_location: report.cctv.location,
                is_assigned: !!report.officerId
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

    async getReportDetail(reportId, ownerId) {
        try {
            const report = await prisma.report.findFirst({
                where: {
                    id: reportId,
                    cctv: {
                        ownerId
                    }
                },
                include: {
                    cctv: {
                        select: {
                            id: true,
                            name: true,
                            location: true
                        }
                    },
                    evidences: true,
                    assignments: {
                        include: {
                            officer: {
                                select: {
                                    id: true,
                                    name: true
                                }
                            },
                            trackings: {
                                orderBy: {
                                    createdAt: 'desc'
                                },
                                take: 1,
                                select: {
                                    id: true,
                                    estimatedTime: true,
                                    distance: true
                                }
                            }
                        }
                    }
                }
            });

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            // Extract officer information from the first assignment if it exists
            const assignment = report.assignments && report.assignments.length > 0
                ? report.assignments[0]
                : null;

            const officerInfo = assignment?.officer
                ? {
                    id: assignment.officer.id,
                    name: assignment.officer.name,
                    tracking: assignment.trackings && assignment.trackings.length > 0
                        ? assignment.trackings[0]
                        : null
                }
                : null;

            return {
                id: report.id,
                title: report.title,
                description: report.description,
                status: report.status,
                location: report.location,
                report_image: report.reportImage,
                incident_type: report.incidentType,
                created_at: report.createdAt,
                cctv: report.cctv,
                is_assigned: !!assignment,
                assigned_to: officerInfo
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
    async getReportTracking(reportId, ownerId) {
        try {
            const report = await prisma.report.findFirst({
                where: {
                    id: reportId,
                    cctv: {
                        ownerId
                    }
                },
                include: {
                    // Include assignments which contain officer information
                    assignments: {
                        include: {
                            officer: {
                                select: {
                                    id: true,
                                    name: true,
                                    phone: true,
                                    licensePlate: true,  // Camel case instead of snake case
                                    vehicleType: true,   // Camel case instead of snake case
                                    status: true
                                }
                            },
                            // Include trackings through the assignment
                            trackings: {
                                orderBy: {
                                    createdAt: 'desc'
                                },
                                select: {
                                    id: true,
                                    latitude: true,
                                    longitude: true,
                                    timestamp: true,
                                    distance: true,
                                    estimatedTime: true, // Camel case instead of snake case
                                    status: true,
                                    description: true
                                }
                            }
                        }
                    }
                }
            });

            if (!report) {
                throw new NotFoundError('Laporan tidak ditemukan');
            }

            // Check if there's an assignment (and thus an officer)
            const assignment = report.assignments && report.assignments.length > 0
                ? report.assignments[0]
                : null;

            if (!assignment) {
                throw new NotFoundError('Belum ada petugas yang ditugaskan');
            }

            const officer = assignment.officer;
            const trackings = assignment.trackings || [];

            return {
                id: report.id,
                title_report: report.title,
                is_nearby: trackings.length > 0 && trackings[0].distance < 100, // within 100 meters
                officer: officer,
                tracking: trackings
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async createManualReport(reportData, ownerId) {
        try {
            let timestamp = new Date();
            if (reportData.date) {
                timestamp = new Date(reportData.date);
                if (reportData.time) {
                    const [hours, minutes] = reportData.time.split(':');
                    timestamp.setHours(parseInt(hours, 10), parseInt(minutes, 10));
                }
            }

            if (reportData.cctv_id) {
                const cctv = await prisma.cctv.findFirst({
                    where: {
                        id: reportData.cctv_id,
                        ownerId
                    }
                });

                if (!cctv) {
                    throw new NotFoundError('CCTV tidak ditemukan');
                }
            }

            const result = await prisma.$transaction(async (tx) => {
                const report = await tx.report.create({
                    data: {
                        title: reportData.title,
                        description: reportData.description,
                        location: reportData.location,
                        incident_type: reportData.incident_type,
                        status: 'NEW',
                        cctvId: reportData.cctv_id,
                        timestamp
                    }
                });

                const evidence = await tx.evidence.create({
                    data: {
                        reportId: report.id,
                        imageUrl: reportData.report_image,
                        type: 'IMAGE'
                    }
                });

                return { report, evidence };
            });

            return {
                id: result.report.id,
                title: result.report.title,
                status: result.report.status,
                created_at: result.report.createdAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new ReportService(); 