const { Router } = require('express');
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const authValidation = require('../validation/auth.validation');

const router = Router();

router.post('/auth/login',
    validationMiddleware.validateBody(authValidation.login()),
    authController.login
);

router.post('/auth/register',
    validationMiddleware.validateBody(authValidation.register()),
    authController.register
);

router.post('/auth/logout',
    authMiddleware.authenticate,
    authController.logout
);

router.get('/auth/me',
    authMiddleware.authenticate,
    authController.getCurrentUser
);

module.exports = router; 