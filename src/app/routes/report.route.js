const { Router } = require('express');
const reportController = require('../controller/report.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const reportValidation = require('../validation/report.validation');

const router = Router();

router.use(authMiddleware.authenticate);

router.get('/v1/report',
    validationMiddleware.validateQuery(reportValidation.list()),
    reportController.list
);

router.get('/v1/report/:id',
    reportController.getDetail
);

router.get('/v1/report/:id/track',
    reportController.getTracking
);

router.post('/v1/report',
    validationMiddleware.validateBody(reportValidation.createManual()),
    reportController.createManual
);

module.exports = router; 