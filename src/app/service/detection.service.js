const { prisma } = require('../../libs/configs/prisma.config');
const { pusher } = require('../../libs/configs/pusher.config');
const { NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');
const { logger } = require('../../libs/configs/logger.config');

class DetectionService {
    async #createEvidence(reportId, imageData) {
        return prisma.evidence.create({
            data: {
                reportId,
                fileUrl: imageData,
                type: 'IMAGE'
            }
        });
    }

    async #findNearestPoliceStation(latitude, longitude) {
        const policeStation = await prisma.officer.findFirst({
            where: {
                status: 'available'
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
                incidentType: report.incidentType,
                location: report.location,
                timestamp: report.createdAt
            });

            // Notify on CCTV channel for real-time monitoring
            await pusher.notifyDetection(cctv.id, {
                reportId: report.id,
                incidentType: report.incidentType,
                evidenceUrl: evidence.fileUrl
            });
        } catch (error) {
            logger.error('Error sending notifications:', error);
            // Don't throw error here, as the detection was still successful
        }
    }

    async detect(detectionData) {
        try {

            // harusnya detection data ini hanya nginmkan ipnya apa dan image nya apa, baru generate lapornaya disini
            // Find CCTV by IP instead of ID
            const cctv = await prisma.cCTV.findUnique({
                where: { IP: detectionData.cctv_ip },
                include: { owner: true }
            });

            if (!cctv) {
                throw new NotFoundError('CCTV dengan IP tersebut tidak ditemukan');
            }

            // Check if CCTV is active
            if (cctv.status !== 'online') {
                throw new BadRequestError('CCTV tidak aktif');
            }

            const nearestPolice = await this.#findNearestPoliceStation(
                cctv.owner.latitude,
                cctv.owner.longitude
            );

            const result = await prisma.$transaction(async (tx) => {
                // Create report
                const report = await tx.report.create({
                    data: {
                        title: detectionData.report.title,
                        description: detectionData.report.description,
                        location: detectionData.report.location,
                        incidentType: detectionData.report.incident_type,
                        status: 'new',
                        cctvId: cctv.id,
                        ownerId: cctv.ownerId,
                        reportImage: detectionData.report.report_image,
                        createdAt: detectionData.timestamp ? new Date(detectionData.timestamp) : new Date()
                    }
                });

                // Create evidence
                const evidence = await tx.evidence.create({
                    data: {
                        reportId: report.id,
                        fileUrl: detectionData.report.report_image,
                        type: 'IMAGE'
                    }
                });

                // Create notification for owner
                await tx.notification.create({
                    data: {
                        ownerId: cctv.ownerId,
                        title: 'Deteksi Senjata Baru',
                        message: `Sistem mendeteksi ${detectionData.report.incident_type === 'knife' ? 'pisau' : 'senjata api'} di ${detectionData.report.location}`,
                        type: 'report',
                        status: 'unread',
                        image: detectionData.report.report_image,
                        reportId: report.id,
                        createdAt: new Date(),
                        isRead: false
                    }
                });

                // If nearest police found, create notification
                if (nearestPolice) {
                    await tx.notification.create({
                        data: {
                            officerId: nearestPolice.id,
                            title: 'Laporan Baru Memerlukan Verifikasi',
                            message: `Deteksi ${detectionData.report.incident_type === 'knife' ? 'pisau' : 'senjata api'} di ${detectionData.report.location}`,
                            type: 'report',
                            status: 'unread',
                            reportId: report.id,
                            createdAt: new Date(),
                            isRead: false
                        }
                    });
                }

                return { report, evidence };
            });

            // Send real-time notifications
            await this.#notifyStakeholders(result.report, cctv, result.evidence);

            logger.info(`Weapon detection reported for CCTV IP: ${detectionData.cctv_ip}`);

            return {
                id: result.report.id,
                status: result.report.status,
                incident_type: result.report.incidentType,
                location: result.report.location,
                evidence_url: result.evidence.fileUrl,
                cctv_ip: cctv.IP
            };
        } catch (error) {
            logger.error('Error in detection service:', error);
            throw handlePrismaError(error);
        }
    }
}

module.exports = new DetectionService();