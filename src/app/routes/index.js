const { Router } = require('express');
const cctvRoutes = require('./cctv.route');
const reportRoutes = require('./report.route');
const notificationRoutes = require('./notification.route');
const authRoutes = require('./auth.route')

const router = Router();

router.use(cctvRoutes);
router.use(reportRoutes);
router.use(notificationRoutes);
router.use(authRoutes);

module.exports = router;