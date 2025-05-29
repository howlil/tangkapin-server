const { prisma } = require('../../libs/configs/prisma.config');
const { pusher } = require('../../libs/configs/pusher.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');
const { logger } = require('../../libs/configs/logger.config');

class DetectionService {
    async #createEvidence(reportId, imageData) {
        return prisma.evidence.create({
            data: {
                reportId,
                imageUrl: imageData,
                type: 'IMAGE'
            }
        });
    }

    async #findNearestPoliceStation(latitude, longitude) {
    
        const policeStation = await prisma.officer.findFirst({
            where: {
                status: 'AVAILABLE'
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
                incidentType: report.incident_type,
                location: report.location,
                timestamp: report.createdAt
            });

            // If police station is assigned, notify them
            if (report.officerId) {
                await pusher.notifyPolice(report.officerId, 'new-incident', {
                    reportId: report.id,
                    location: report.location,
                    incidentType: report.incident_type,
                    evidenceUrl: evidence.imageUrl
                });
            }

            // Notify on CCTV channel for real-time monitoring
            await pusher.notifyDetection(cctv.id, {
                reportId: report.id,
                incidentType: report.incident_type,
                evidenceUrl: evidence.imageUrl
            });
        } catch (error) {
            logger.error('Error sending notifications:', error);
            // Don't throw error here, as the detection was still successful
        }
    }

    async detect(detectionData) {
        try {
            const cctv = await prisma.cctv.findUnique({
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
                // Create report
                const report = await tx.report.create({
                    data: {
                        title: detectionData.report.title,
                        description: detectionData.report.description,
                        location: detectionData.report.location,
                        incident_type: detectionData.report.incident_type,
                        status: 'NEW',
                        cctvId: cctv.id,
                        officerId: nearestPolice?.id,
                        timestamp: detectionData.timestamp || new Date()
                    }
                });

                // Create evidence
                const evidence = await tx.evidence.create({
                    data: {
                        reportId: report.id,
                        imageUrl: detectionData.report.report_image,
                        type: 'IMAGE'
                    }
                });

                return { report, evidence };
            });

            // Send notifications
            await this.#notifyStakeholders(result.report, cctv, result.evidence);

            return {
                id: result.report.id,
                status: result.report.status,
                incident_type: result.report.incident_type,
                location: result.report.location,
                evidence_url: result.evidence.imageUrl,
                is_assigned: !!result.report.officerId
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new DetectionService(); 