const { prisma } = require('../../libs/configs/prisma.config');
const { pusher } = require('../../libs/configs/pusher.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');
const { logger } = require('../../libs/configs/logger.config');

class DetectionService {
    async #createEvidence(reportId, imageData) {
        return prisma.evidence.create({
            data: {
                reportId,
                fileUrl: imageData, // Changed from imageUrl to fileUrl based on error message
                type: 'IMAGE'
            }
        });
    }

    async #findNearestPoliceStation(latitude, longitude) {
        const policeStation = await prisma.officer.findFirst({
            where: {
                status: 'available' // Make sure it matches your enum in schema (lowercase)
            }
        });

        if (!policeStation) {
            logger.warn('No available police stations found');
            return null;
        }

        return policeStation;
    }

    async #notifyStakeholders(report, cctv, evidence) {
        try {
            await pusher.notifyOwner(cctv.ownerId, 'weapon-detected', {
                reportId: report.id,
                cctvId: cctv.id,
                incidentType: report.incidentType, // Changed from snake_case to camelCase
                location: report.location,
                timestamp: report.createdAt
            });

            // If police station is assigned, notify them
            if (report.officerId) {
                await pusher.notifyPolice(report.officerId, 'new-incident', {
                    reportId: report.id,
                    location: report.location,
                    incidentType: report.incidentType, // Changed from snake_case to camelCase
                    evidenceUrl: evidence.fileUrl // Changed from imageUrl to fileUrl
                });
            }

            // Notify on CCTV channel for real-time monitoring
            await pusher.notifyDetection(cctv.id, {
                reportId: report.id,
                incidentType: report.incidentType, // Changed from snake_case to camelCase
                evidenceUrl: evidence.fileUrl // Changed from imageUrl to fileUrl
            });
        } catch (error) {
            logger.error('Error sending notifications:', error);
            // Don't throw error here, as the detection was still successful
        }
    }

    async detect(detectionData) {
        try {
            // Convert incoming snake_case to camelCase for Prisma
            const reportData = {
                title: detectionData.report.title,
                description: detectionData.report.description,
                location: detectionData.report.location,
                incidentType: detectionData.report.incident_type, // Convert snake_case to camelCase
                reportImage: detectionData.report.report_image // Convert snake_case to camelCase
            };

            const cctv = await prisma.cCTV.findUnique({
                where: { id: detectionData.cctv_id },
                include: { owner: true }
            });

            if (!cctv) {
                throw new NotFoundError('CCTV tidak ditemukan');
            }

            const nearestPolice = await this.#findNearestPoliceStation(
                cctv.latitude,
                cctv.longitude
            );

            const result = await prisma.$transaction(async (tx) => {
                // Create report with proper camelCase field names
                const report = await tx.report.create({
                    data: {
                        title: reportData.title,
                        description: reportData.description,
                        location: reportData.location,
                        incidentType: reportData.incidentType, // Use camelCase here
                        status: 'new', // Make sure it matches your enum case in schema
                        cctvId: cctv.id,
                        ownerId: cctv.ownerId,
                        officerId: nearestPolice?.id,
                        createdAt: detectionData.timestamp || new Date(),
                        reportImage: reportData.reportImage // Correct field name
                    }
                });

                // Create evidence with proper field names
                const evidence = await tx.evidence.create({
                    data: {
                        reportId: report.id,
                        fileUrl: reportData.reportImage, // Use fileUrl instead of imageUrl
                        type: 'IMAGE'
                    }
                });

                return { report, evidence };
            });

            // Send notifications
            await this.#notifyStakeholders(result.report, cctv, result.evidence);

            // Return data matching the API contract (snake_case for response)
            return {
                id: result.report.id,
                status: result.report.status,
                incident_type: result.report.incidentType, // Convert back to snake_case for API response
                location: result.report.location,
                evidence_url: result.evidence.fileUrl, // Convert back to snake_case for API response
                is_assigned: !!result.report.officerId
            };
        } catch (error) {
            logger.error('Prisma error:', error);
            throw handlePrismaError(error);
        }
    }
}

module.exports = new DetectionService();