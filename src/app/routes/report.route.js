const { Router } = require('express');
const reportController = require('../controller/report.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const reportValidation = require('../validation/report.validation');

const router = Router();


router.get('/v1/report',
    authMiddleware.authenticate,
    validationMiddleware.validateQuery(reportValidation.list()),
    reportController.list
);

router.get('/v1/report/:id',
    authMiddleware.authenticate,
    reportController.getDetail
);

router.get('/v1/report/:id/track',
    authMiddleware.authenticate,
    reportController.getTracking
);

router.post('/v1/report',
    authMiddleware.authenticate,
    validationMiddleware.validateBody(reportValidation.createManual()),
    reportController.createManual
);

module.exports = router; 