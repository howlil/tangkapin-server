// src/app/routes/index.js
const { Router } = require('express');
const cctvRoutes = require('./cctv.route');
const reportRoutes = require('./report.route');
const notificationRoutes = require('./notification.route');
const authRoutes = require('./auth.route');
const detectionRoutes = require('./detection.route');
const officerRoutes = require('./officer.route');
const policeRoutes = require('./police.route');

const router = Router();

// Apply routes
router.use(authRoutes);    // Auth routes (some public, some protected)
router.use(detectionRoutes); 
router.use(cctvRoutes);    // Protected routes
router.use(reportRoutes);  // Protected routes
router.use(notificationRoutes); // Protected routes
router.use(officerRoutes); // Protected routes
router.use(policeRoutes);  // Protected routes

module.exports = router;