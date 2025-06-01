const { Router } = require('express');
const cctvController = require('../controller/cctv.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const cctvValidation = require('../validation/cctv.validation');


const router = Router();

router.get('/v1/count',
        authMiddleware.authenticate,
    cctvController.getCounts
);

router.get('/v1/cctv/preview/:id',
    authMiddleware.authenticate,
    cctvController.getPreview
);

router.post('/v1/cctv',
    validationMiddleware.validateBody(cctvValidation.create()),
    authMiddleware.authenticate,
    cctvController.create
);

router.get('/v1/cctv',
    validationMiddleware.validateQuery(cctvValidation.list()),
    authMiddleware.authenticate,
    cctvController.list
);

router.get('/v1/cctv/:id',
    authMiddleware.authenticate,
    cctvController.getDetail
);

router.patch('/v1/cctv/:id',
    validationMiddleware.validateBody(cctvValidation.update()),
    authMiddleware.authenticate,
    cctvController.update
);

module.exports = router; 