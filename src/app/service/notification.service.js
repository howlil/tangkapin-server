const { prisma } = require('../../libs/configs/prisma.config');
const { handlePrismaError } = require('../../libs/http/error.handler.http');

class NotificationService {
    async listNotifications(ownerId, query) {
        const { page = 1, limit = 10, status, search } = query;
        const skip = (parseInt(page) - 1) * parseInt(limit);

        try {
            const where = {
                ownerId,
                ...(status && { status }),
                ...(search && {
                    OR: [
                        { title: { contains: search } },
                        { message: { contains: search } }
                    ]
                })
            };

            const [notifications, total] = await Promise.all([
                prisma.Notification.findMany({
                    where,
                    skip,
                    take: parseInt(limit),
                    orderBy: { createdAt: 'desc' },
                    select: {
                        id: true,
                        title: true,
                        message: true,
                        type: true,
                        status: true,
                        image: true,
                        reportId: true,
                        createdAt: true,
                        isRead: true
                    }
                }),
                prisma.Notification.count({ where })
            ]);

            return {
                data: notifications,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total_pages: Math.ceil(total / parseInt(limit))
                }
            };
        } catch (error) {
            console.error('Error in listNotifications:', error);
            throw handlePrismaError(error);
        }
    }

    async markAsRead(notificationId, ownerId) {
        try {
            await prisma.notification.updateMany({
                where: {
                    id: notificationId,
                    ownerId
                },
                data: {
                    isRead: true,
                    status: 'READ'
                }
            });

            return true;
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async markAllAsRead(ownerId) {
        try {
            await prisma.notification.updateMany({
                where: {
                    ownerId,
                    isRead: false
                },
                data: {
                    isRead: true,
                    status: 'READ'
                }
            });

            return true;
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new NotificationService(); 