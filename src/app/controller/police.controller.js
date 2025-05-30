const policeService = require('../service/police.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class PoliceController {
    getDashboard = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.getDashboard(req.user.id);
        return Http.Response.success(res, result, 'Data dashboard berhasil diambil');
    });

    getActiveReports = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.getActiveReports(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar laporan aktif berhasil diambil');
    });

    getReportDetail = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.getReportDetail(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Detail laporan berhasil diambil');
    });

    getReportTracking = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.getReportTracking(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Data tracking laporan berhasil diambil');
    });

    getNotifications = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.getNotifications(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar notifikasi berhasil diambil');
    });

    updateReportStatus = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.updateReportStatus(
            req.params.id,
            req.user.id,
            req.body.status,
            req.body.description
        );
        return Http.Response.success(res, result, 'Status laporan berhasil diperbarui');
    });

    updateTracking = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await policeService.updateTracking(
            req.params.id,
            req.user.id,
            req.body
        );
        return Http.Response.created(res, result, 'Data tracking berhasil diperbarui');
    });
}

module.exports = new PoliceController();