const { prisma } = require('../../libs/configs/prisma.config');
const { pusher } = require('../../libs/configs/pusher.config');
const { NotFoundError, BadRequestError } = require('../../libs/http/errors.http');
const { handlePrismaError } = require('../../libs/http/error.handler.http');
const { logger } = require('../../libs/configs/logger.config');

class DetectionService {
    async #findNearestPoliceStation(latitude, longitude) {
        // Find available officer (police station admin)
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

    async #generateReportData(cctvData, detectionType, evidence) {
        const incidentMap = {
            'knife': {
                title: `Deteksi Pisau - ${cctvData.name}`,
                description: `Sistem deteksi senjata mendeteksi pisau di lokasi ${cctvData.location}. Deteksi dilakukan oleh CCTV ${cctvData.name} pada ${new Date().toLocaleString('id-ID')}. Diperlukan verifikasi dan tindakan segera.`,
                incident_type: 'knife'
            },
            'gun': {
                title: `Deteksi Senjata Api - ${cctvData.name}`,
                description: `Sistem deteksi senjata mendeteksi senjata api di lokasi ${cctvData.location}. Deteksi dilakukan oleh CCTV ${cctvData.name} pada ${new Date().toLocaleString('id-ID')}. PRIORITAS TINGGI - Diperlukan respons darurat.`,
                incident_type: 'gun'
            },
            'guns': {
                title: `Deteksi Senjata Api - ${cctvData.name}`,
                description: `Sistem deteksi senjata mendeteksi senjata api di lokasi ${cctvData.location}. Deteksi dilakukan oleh CCTV ${cctvData.name} pada ${new Date().toLocaleString('id-ID')}. PRIORITAS TINGGI - Diperlukan respons darurat.`,
                incident_type: 'guns'
            },
            'pistol': { // ML model might send 'pistol'
                title: `Deteksi Senjata Api - ${cctvData.name}`,
                description: `Sistem deteksi senjata mendeteksi senjata api di lokasi ${cctvData.location}. Deteksi dilakukan oleh CCTV ${cctvData.name} pada ${new Date().toLocaleString('id-ID')}. PRIORITAS TINGGI - Diperlukan respons darurat.`,
                incident_type: 'gun'
            }
        };

        return incidentMap[detectionType] || {
            title: `Deteksi Senjata - ${cctvData.name}`,
            description: `Sistem deteksi senjata mendeteksi objek mencurigakan di lokasi ${cctvData.location}. Diperlukan verifikasi segera.`,
            incident_type: 'other'
        };
    }

    async #notifyStakeholders(report, cctv, evidence, nearestPolice) {
        try {
            // Notify owner
            await pusher.notifyOwner(cctv.ownerId, 'weapon-detected', {
                reportId: report.id,
                cctvId: cctv.id,
                incidentType: report.incidentType,
                location: report.location,
                timestamp: report.createdAt,
                evidenceUrl: evidence.fileUrl,
            });

            // Notify officer (police station) for verification
            if (nearestPolice) {
                await pusher.notifyPolice(nearestPolice.id, 'new-incident', {
                    reportId: report.id,
                    incidentType: report.incidentType,
                    location: report.location,
                    cctvName: cctv.name,
                    evidenceUrl: evidence.fileUrl,
                    timestamp: report.createdAt
                });
            }

            // Notify on CCTV channel for real-time monitoring
            await pusher.notifyDetection(cctv.id, {
                reportId: report.id,
                incidentType: report.incidentType,
                evidenceUrl: evidence.fileUrl,
                location: report.location
            });

            // Broadcast to all officers channel for dashboard updates
            await pusher.notify('officers-dashboard', 'incident-update', {
                reportId: report.id,
                incidentType: report.incidentType,
                location: report.location,
                status: 'new',
                evidenceUrl: evidence.fileUrl,
                timestamp: report.createdAt,
                priority: report.incidentType === 'gun' ? 'critical' : 'high'
            });

            logger.info(`Real-time notifications sent for report ${report.id} to owner and officers`);
        } catch (error) {
            logger.error('Error sending notifications:', error);
            // Don't throw error here, as the detection was still successful
        }
    }

    async detect(detectionData) {
        try {
            // Simple validation
            if (!detectionData.cctv_ip || !detectionData.evidence_image || !detectionData.weapon_type) {
                throw new BadRequestError('Data deteksi tidak lengkap. Diperlukan: cctv_ip, evidence_image, weapon_type');
            }

            // Find CCTV by IP
            const cctv = await prisma.cCTV.findUnique({
                where: { IP: detectionData.cctv_ip },
                include: { owner: true }
            });

            if (!cctv) {
                throw new NotFoundError(`CCTV dengan IP ${detectionData.cctv_ip} tidak ditemukan`);
            }

            // Check if CCTV is active
            if (cctv.status !== 'online') {
                logger.warn(`CCTV ${detectionData.cctv_ip} is not online, status: ${cctv.status}`);
                throw new BadRequestError('CCTV tidak aktif atau offline');
            }

            // Generate report data based on detection
            const reportData = await this.#generateReportData(cctv, detectionData.weapon_type, detectionData.evidence_image);

            // Find nearest police station
            const nearestPolice = await this.#findNearestPoliceStation(
                cctv.owner.latitude,
                cctv.owner.longitude
            );

            const result = await prisma.$transaction(async (tx) => {
                // Create report with auto-generated data
                const report = await tx.report.create({
                    data: {
                        title: reportData.title,
                        description: reportData.description,
                        location: cctv.location,
                        incidentType: reportData.incident_type,
                        status: 'new',
                        cctvId: cctv.id,
                        ownerId: cctv.ownerId,
                        reportImage: detectionData.evidence_image,
                        createdAt: detectionData.timestamp ? new Date(detectionData.timestamp) : new Date()
                    }
                });

                // Create evidence
                const evidence = await tx.evidence.create({
                    data: {
                        reportId: report.id,
                        fileUrl: detectionData.evidence_image,
                        type: 'IMAGE'
                    }
                });

                // Create notification for owner
                await tx.notification.create({
                    data: {
                        ownerId: cctv.ownerId,
                        title: 'Deteksi Senjata Baru',
                        message: `Sistem mendeteksi ${reportData.incident_type === 'knife' ? 'pisau' : reportData.incident_type === 'gun' ? 'senjata api' : 'senjata berbahaya'} di ${cctv.location}`,
                        type: 'report',
                        status: 'unread',
                        image: detectionData.evidence_image,
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
                            message: `Deteksi ${reportData.incident_type === 'knife' ? 'pisau' : reportData.incident_type === 'gun' ? 'senjata api' : 'senjata berbahaya'} di ${cctv.location}. Diperlukan verifikasi segera.`,
                            type: 'report',
                            status: 'unread',
                            reportId: report.id,
                            createdAt: new Date(),
                            isRead: false
                        }
                    });
                }

                // Create audit log
                await tx.auditLog.create({
                    data: {
                        entity: 'Report',
                        entityId: report.id,
                        action: 'CREATE_AUTO',
                        description: `Laporan otomatis dibuat dari deteksi ${reportData.incident_type} oleh CCTV ${cctv.name}`,
                        createdAt: new Date()
                    }
                });

                return { report, evidence };
            });

            // Send real-time notifications
            await this.#notifyStakeholders(result.report, cctv, result.evidence, nearestPolice);

            logger.info(`Weapon detection processed successfully for CCTV IP: ${detectionData.cctv_ip}, Type: ${detectionData.weapon_type}`);

            return {
                success: true,
                report_id: result.report.id,
                status: result.report.status,
                incident_type: result.report.incidentType,
                location: result.report.location,
                cctv_name: cctv.name,
                cctv_ip: cctv.IP,
                created_at: result.report.createdAt
            };
        } catch (error) {
            logger.error('Error in detection service:', error);
            throw handlePrismaError(error);
        }
    }
}

module.exports = new DetectionService();