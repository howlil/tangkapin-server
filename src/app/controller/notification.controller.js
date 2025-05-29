const notificationService = require('../service/notification.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class NotificationController {
    list = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await notificationService.listNotifications(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar notifikasi berhasil diambil');
    });

    markAsRead = ErrorHandler.asyncHandler(async (req, res) => {
        await notificationService.markAsRead(req.params.id, req.user.id);
        return Http.Response.success(res, null, 'Notifikasi berhasil ditandai sebagai telah dibaca');
    });

    markAllAsRead = ErrorHandler.asyncHandler(async (req, res) => {
        await notificationService.markAllAsRead(req.user.id);
        return Http.Response.success(res, null, 'Semua notifikasi berhasil ditandai sebagai telah dibaca');
    });
}

module.exports = new NotificationController(); 