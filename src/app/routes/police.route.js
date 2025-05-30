const { Router } = require('express');
const policeController = require('../controller/police.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const policeValidation = require('../validation/police.validation');

const router = Router();

// Apply authentication and authorization middleware to all routes
router.use(authMiddleware.authenticate);
router.use(authMiddleware.authorize('POLICE'));

// Dashboard
router.get('/police/dashboard',
    policeController.getDashboard
);

// Reports management
router.get('/police/report/active',
    validationMiddleware.validateQuery(policeValidation.listActiveReports()),
    policeController.getActiveReports
);

router.get('/police/report/:id',
    policeController.getReportDetail
);

router.get('/police/report/:id/track',
    policeController.getReportTracking
);

// Notifications
router.get('/police/notification',
    validationMiddleware.validateQuery(policeValidation.listNotifications()),
    policeController.getNotifications
);

// Report updates
router.post('/police/report/:id/status',
    validationMiddleware.validateBody(policeValidation.updateReportStatus()),
    policeController.updateReportStatus
);

router.post('/police/report/:id/track',
    validationMiddleware.validateBody(policeValidation.updateTracking()),
    policeController.updateTracking
);

module.exports = router;