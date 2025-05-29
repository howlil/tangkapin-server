const detectionService = require('../service/detection.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class DetectionController {
    detect = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await detectionService.detect(req.body);
        return Http.Response.created(res, result, 'Deteksi senjata berhasil dilaporkan');
    });
}

module.exports = new DetectionController(); 