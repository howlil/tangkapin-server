const { Router } = require('express');
const notificationController = require('../controller/notification.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const notificationValidation = require('../validation/notification.validation');

const router = Router();

// Apply authentication middleware to all routes
router.use(authMiddleware.authenticate);

router.get('/v1/notification',
    validationMiddleware.validateQuery(notificationValidation.list()),
    notificationController.list
);

router.patch('/v1/notification/:id/read',
    notificationController.markAsRead
);

router.patch('/v1/notification/read-all',
    notificationController.markAllAsRead
);

module.exports = router; 