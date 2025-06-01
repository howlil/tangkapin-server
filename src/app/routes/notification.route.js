const { Router } = require('express');
const notificationController = require('../controller/notification.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const notificationValidation = require('../validation/notification.validation');

const router = Router();


router.get('/v1/notification',
authMiddleware.authenticate,
    validationMiddleware.validateQuery(notificationValidation.list()),
    notificationController.list
);

router.patch('/v1/notification/:id/read',
    authMiddleware.authenticate,        
    notificationController.markAsRead
);

router.patch('/v1/notification/read-all',
    authMiddleware.authenticate,
    notificationController.markAllAsRead
);

module.exports = router; 