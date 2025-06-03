const { Router } = require('express');
const officerController = require('../controller/officer.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const officerValidation = require('../validation/officer.validation');

const router = Router();


// Dashboard endpoints
router.get('/v1/officer/count',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getDashboardCounts
);

router.get('/v1/officer/case-status',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getCaseStatusCount
);

// Reports management
router.get('/v1/officer/latest-report',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getLatestReports
);

// Notifications
router.get('/v1/officer/notification',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    validationMiddleware.validateQuery(officerValidation.listNotifications()),
    officerController.getNotifications
);

// Report actions
router.post('/v1/officer/verify/:report_id',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    validationMiddleware.validateBody(officerValidation.verifyReport()),
    officerController.verifyReport
);

router.post('/v1/officer/assign/:report_id',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    validationMiddleware.validateBody(officerValidation.assignOfficer()),
    officerController.assignOfficer
);

// Officers management
router.get('/v1/officer/available',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getAvailableOfficers
);

router.get('/v1/officer/incident-map',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getCurrentIncidentMap
);

router.get('/v1/officer/recent-alerts',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getRecentAlerts
);

router.get('/v1/officer/police',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getPoliceList
);

router.get('/v1/officer/report/:reportId',
    authMiddleware.authenticate,
    authMiddleware.authorize('OFFICER'),
    officerController.getReportDetail
);

module.exports = router;