const { prisma } = require('../../libs/configs/prisma.config');
const { NotFoundError } = require('../../libs/http/error.handler.http');
const { handlePrismaError } = require('../../libs/http/error.handler.http');

class CCTVService {
    async countCCTVAndReports(ownerId) {
        try {
       
            const [cctvCount, reportCount] = await Promise.all([
                prisma.CCTV.count({  // Use uppercase as in your schema
                    where: { ownerId }
                }),
                prisma.Report.count({  // Use uppercase as in your schema
                    where: {
                        cctv: {
                            ownerId
                        }
                    }
                })
            ]);

            return { cctv_count: cctvCount, report_count: reportCount };
        } catch (error) {
            console.error('Error in countCCTVAndReports:', error);
            throw new Error(`Failed to count CCTVs and reports: ${error.message}`);
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
            console.log('Prisma client:', prisma); // Debug log to check the client
            console.log('Available models:', Object.keys(prisma)); // Check available models

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

            // Use the correct model name - it should match your Prisma schema
            // If CCTV is defined in your schema, it might be accessed as prisma.CCTV or prisma.cctv
            const [cctvs, total] = await Promise.all([
                prisma.CCTV.findMany({  // Try using uppercase CCTV instead of lowercase
                    where,
                    skip,
                    take: limit,
                    orderBy: { createdAt: 'desc' },
                    select: {
                        id: true,
                        name: true,
                        location: true,
                        IP: true,
                        streamUrl: true,  // Should match your schema (likely camelCase)
                        cameraType: true, // Should match your schema (likely camelCase)
                        status: true
                    }
                }),
                prisma.CCTV.count({ where })  // Also update this to match
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
            console.error('Error in listCCTVs:', error);
            throw new Error(`Failed to list CCTVs: ${error.message}`);
        }
    }

async getCCTVDetail(cctvId, ownerId) {
    try {
        // Debug to inspect the Prisma client
        console.log('Available models on prisma:', Object.keys(prisma));
        
        // Use CCTV (uppercase) to match your schema
        const cctv = await prisma.CCTV.findFirst({
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

        // The property names in the response should match what's returned from Prisma
        // Use camelCase for these properties to match your schema
        return {
            id: cctv.id,
            name: cctv.name,
            location: cctv.location,
            IP: cctv.IP,  // Keep as is if this matches your schema
            streamUrl: cctv.streamUrl,  // Changed from stream_url to streamUrl to match schema
            cameraType: cctv.cameraType,  // Changed from camera_type to cameraType to match schema
            status: cctv.status,
            description: cctv.description,
            reports: cctv.reports
        };
    } catch (error) {
        console.error('Error in getCCTVDetail:', error);
        throw new Error(`Failed to get CCTV detail: ${error.message}`);
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