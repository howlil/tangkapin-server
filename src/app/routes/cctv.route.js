const { Router } = require('express');
const cctvController = require('../controller/cctv.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const cctvValidation = require('../validation/cctv.validation');


const router = Router();

// Apply authentication middleware to all routes
router.use(authMiddleware.authenticate);

router.get('/v1/count',
    cctvController.getCounts
);

router.get('/v1/cctv/preview/:id',
    cctvController.getPreview
);

router.post('/v1/cctv',
    validationMiddleware.validateBody(cctvValidation.create()),
    cctvController.create
);

router.get('/v1/cctv',
    validationMiddleware.validateQuery(cctvValidation.list()),
    cctvController.list
);

router.get('/v1/cctv/:id',
    cctvController.getDetail
);

router.patch('/v1/cctv/:id',
    validationMiddleware.validateBody(cctvValidation.update()),
    cctvController.update
);

module.exports = router; 