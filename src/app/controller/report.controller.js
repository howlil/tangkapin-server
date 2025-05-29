const reportService = require('../service/report.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class ReportController {
    list = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await reportService.listReports(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar laporan berhasil diambil');
    });

    getDetail = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await reportService.getReportDetail(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Detail laporan berhasil diambil');
    });

    getTracking = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await reportService.getReportTracking(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Data tracking laporan berhasil diambil');
    });

    createManual = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await reportService.createManualReport(req.body, req.user.id);
        return Http.Response.created(res, result, 'Laporan manual berhasil dibuat');
    });
}

module.exports = new ReportController(); 