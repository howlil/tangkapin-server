const cctvService = require('../service/cctv.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class CCTVController {
    getCounts = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.countCCTVAndReports(req.user.id);
        return Http.Response.success(res, result, 'Data jumlah CCTV dan laporan berhasil diambil');
    });

    getPreview = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.getCCTVPreview(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Preview CCTV berhasil diambil');
    });

    create = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.addCCTV(req.body, req.user.id);
        return Http.Response.created(res, result, 'CCTV berhasil ditambahkan');
    });

    list = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.listCCTVs(req.user.id, req.query);
        return Http.Response.success(res, result, 'Daftar CCTV berhasil diambil');
    });

    getDetail = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.getCCTVDetail(req.params.id, req.user.id);
        return Http.Response.success(res, result, 'Detail CCTV berhasil diambil');
    });

    update = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await cctvService.updateCCTV(req.params.id, req.body, req.user.id);
        return Http.Response.success(res, result, 'CCTV berhasil diperbarui');
    });
}

module.exports = new CCTVController(); 