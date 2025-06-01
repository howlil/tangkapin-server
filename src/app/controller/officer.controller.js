const officerService = require('../service/officer.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class OfficerController {
    getDashboardCounts = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getDashboardCounts();
        return Http.Response.success(res, result, 'Data dashboard berhasil diambil');
    });

    getCaseStatusCount = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getCaseStatusCount();
        return Http.Response.success(res, result, 'Data status kasus berhasil diambil');
    });

    getLatestReports = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getLatestReports(req.query);
        return Http.Response.success(res, result, 'Daftar laporan terbaru berhasil diambil');
    });

    getNotifications = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getOfficerNotifications(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar notifikasi berhasil diambil');
    });

    verifyReport = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.verifyReport(
            req.params.report_id,
            req.user.id,
            req.body.status
        );
        return Http.Response.success(res, result, 'Laporan berhasil diverifikasi');
    });

    assignOfficer = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.assignOfficerToReport(
            req.params.report_id,
            req.body.officer_id,
            req.user.id
        );
        return Http.Response.created(res, result, 'Petugas berhasil ditugaskan');
    });

    getAvailableOfficers = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getAvailableOfficers();
        return Http.Response.success(res, result, 'Daftar petugas tersedia berhasil diambil');
    });

    getCurrentIncidentMap = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getCurrentIncidentMap();
        return Http.Response.success(res, result, 'Data peta insiden berhasil diambil');
    });

    getRecentAlerts = ErrorHandler.asyncHandler(async (req, res) => {
        const { limit = 10 } = req.query;
        const result = await officerService.getRecentAlerts(parseInt(limit));
        return Http.Response.success(res, result, 'Recent alerts berhasil diambil');
    });

    getPoliceList = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await officerService.getPoliceList(req.query);
        return Http.Response.success(res, result, 'Daftar polisi berhasil diambil');
    });
}

module.exports = new OfficerController();