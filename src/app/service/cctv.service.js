const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');

class CCTVService {
    async countCCTVAndReports(ownerId) {
        try {
            const [cctvCount, reportCount] = await Promise.all([
                prisma.cctv.count({
                    where: { ownerId }
                }),
                prisma.report.count({
                    where: {
                        cctv: {
                            ownerId
                        }
                    }
                })
            ]);

            return { cctv_count: cctvCount, report_count: reportCount };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getCCTVPreview(cctvId, ownerId) {
        try {
            const cctv = await prisma.cctv.findFirst({
                where: {
                    id: cctvId,
                    ownerId
                }
            });

            if (!cctv) {
                throw new NotFoundError('CCTV tidak ditemukan');
            }

            return {
                preview_url: cctv.stream_url,
                name_cctv: cctv.name,
                status: cctv.status,
                location: cctv.location,
                description: cctv.description
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async addCCTV(cctvData, ownerId) {
        try {
            const cctv = await prisma.cctv.create({
                data: {
                    ...cctvData,
                    ownerId,
                    status: 'ACTIVE',
                    stream_url: `rtsp://${cctvData.IP}/stream`
                }
            });

            return {
                id: cctv.id,
                name: cctv.name,
                location: cctv.location,
                status: cctv.status
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async listCCTVs(ownerId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (page - 1) * limit;

        try {
            const where = {
                ownerId,
                ...(status && { status }),
                ...(search && {
                    OR: [
                        { name: { contains: search } },
                        { location: { contains: search } }
                    ]
                })
            };

            const [cctvs, total] = await Promise.all([
                prisma.cctv.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    select: {
                        id: true,
                        name: true,
                        location: true,
                        IP: true,
                        stream_url: true,
                        camera_type: true,
                        status: true
                    }
                }),
                prisma.cctv.count({ where })
            ]);

            return {
                data: cctvs,
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

    async getCCTVDetail(cctvId, ownerId) {
        try {
            const cctv = await prisma.cctv.findFirst({
                where: {
                    id: cctvId,
                    ownerId
                },
                include: {
                    reports: {
                        select: {
                            id: true,
                            title: true,
                            status: true,
                            createdAt: true
                        },
                        orderBy: {
                            createdAt: 'desc'
                        },
                        take: 10
                    }
                }
            });

            if (!cctv) {
                throw new NotFoundError('CCTV tidak ditemukan');
            }

            return {
                id: cctv.id,
                name: cctv.name,
                location: cctv.location,
                IP: cctv.IP,
                stream_url: cctv.stream_url,
                camera_type: cctv.camera_type,
                status: cctv.status,
                description: cctv.description,
                reports: cctv.reports
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async updateCCTV(cctvId, updateData, ownerId) {
        try {
            const cctv = await prisma.cctv.findFirst({
                where: {
                    id: cctvId,
                    ownerId
                }
            });

            if (!cctv) {
                throw new NotFoundError('CCTV tidak ditemukan');
            }

            if (updateData.IP) {
                updateData.stream_url = `rtsp://${updateData.IP}/stream`;
            }

            const updatedCCTV = await prisma.cctv.update({
                where: { id: cctvId },
                data: updateData
            });

            return {
                id: updatedCCTV.id,
                name: updatedCCTV.name,
                location: updatedCCTV.location,
                status: updatedCCTV.status,
                updatedAt: updatedCCTV.updatedAt
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new CCTVService(); 