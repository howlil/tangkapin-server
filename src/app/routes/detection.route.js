const { Router } = require('express');
const detectionController = require('../controller/detection.controller');
const validationMiddleware = require('../middleware/validation.middleware');
const detectionValidation = require('../validation/detection.validation');

const router = Router();

router.post('/v1/deteksi',
    validationMiddleware.validateBody(detectionValidation.detect()),
    detectionController.detect
);

module.exports = router; 