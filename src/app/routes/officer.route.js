const { Router } = require('express');
const officerController = require('../controller/officer.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const officerValidation = require('../validation/officer.validation');

const router = Router();

// Apply authentication and authorization middleware to all routes
router.use(authMiddleware.authenticate);
router.use(authMiddleware.authorize('OFFICER'));

// Dashboard endpoints
router.get('/officer/count',
    officerController.getDashboardCounts
);

router.get('/officer/case-status',
    officerController.getCaseStatusCount
);

// Reports management
router.get('/officer/latest-report',
    validationMiddleware.validateQuery(officerValidation.listReports()),
    officerController.getLatestReports
);

// Notifications
router.get('/officer/notification',
    validationMiddleware.validateQuery(officerValidation.listNotifications()),
    officerController.getNotifications
);

// Report actions
router.post('/officer/verify/:report_id',
    validationMiddleware.validateBody(officerValidation.verifyReport()),
    officerController.verifyReport
);

router.post('/officer/assign/:report_id',
    validationMiddleware.validateBody(officerValidation.assignOfficer()),
    officerController.assignOfficer
);

// Officers management
router.get('/officer/available',
    officerController.getAvailableOfficers
);

router.get('/officer/police',
    validationMiddleware.validateQuery(officerValidation.listPolice()),
    officerController.getPoliceList
);

module.exports = router;