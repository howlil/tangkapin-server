const { Router } = require('express');
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const authValidation = require('../validation/auth.validation');

const router = Router();

router.post('/v1/login',
    validationMiddleware.validateBody(authValidation.login()),
    authController.login
);

router.post('/v1/register',
    validationMiddleware.validateBody(authValidation.register()),
    authController.register
);

router.post('/v1/logout',
    authMiddleware.authenticate,
    authController.logout
);

router.get('/v1/me',
    authMiddleware.authenticate,
    authController.getCurrentUser
);

module.exports = router; 