const { Router } = require('express');
const policeController = require('../controller/police.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const policeValidation = require('../validation/police.validation');

const router = Router();

// Dashboard
router.get('/police/dashboard',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    policeController.getDashboard
);

// Reports management
router.get('/police/report/active',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    validationMiddleware.validateQuery(policeValidation.listActiveReports()),
    policeController.getActiveReports
);

router.get('/police/report/:id',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    policeController.getReportDetail
);

router.get('/police/report/:id/track',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    policeController.getReportTracking
);

// Notifications
router.get('/police/notification',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    validationMiddleware.validateQuery(policeValidation.listNotifications()),
    policeController.getNotifications
);

// Report updates
router.post('/police/report/:id/status',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    validationMiddleware.validateBody(policeValidation.updateReportStatus()),
    policeController.updateReportStatus
);

router.post('/police/report/:id/track',
    authMiddleware.authenticate,
    authMiddleware.authorize('POLICE'),
    validationMiddleware.validateBody(policeValidation.updateTracking()),
    policeController.updateTracking
);

module.exports = router;