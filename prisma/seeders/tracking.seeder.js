const { createTrackingFactory } = require('../factories/tracking.factory');

/**
 * Seed Tracking data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} assignments - Array of assignment objects
 * @param {Array} officers - Array of officer objects
 * @param {number} tracksPerAssignment - Number of tracking records per assignment
 * @returns {Promise<Array>} - Array of created tracking records
 */
async function seedTracking(prisma, assignments, officers, tracksPerAssignment = 3) {
  console.log(`Creating tracking data for assignments...`);
  
  if (assignments.length === 0) {
    console.log('No assignments found, skipping tracking creation');
    return [];
  }
  
  const trackingFactory = createTrackingFactory(assignments, officers);
  const trackings = [];
  
  // Create tracking records for each assignment
  for (const assignment of assignments) {
    // Number of tracking points varies per assignment
    const numTracks = Math.floor(Math.random() * tracksPerAssignment) + 1;
    
    // Find the officer for this assignment
    const officer = officers.find(o => o.id === assignment.officerId);
    
    if (!officer) {
      console.error(`Officer not found for assignment ${assignment.id}`);
      continue;
    }
    
    // Determine if this assignment has been completed
    const reportStatus = await prisma.Report.findUnique({
      where: { id: assignment.reportId },
      select: { status: true }
    });
    
    const isCompleted = reportStatus?.status === 'completed';
    
    // Create tracking points with decreasing distance
    for (let i = 0; i < numTracks; i++) {
      // For completed assignments, the last track should be "arrived" or "completed"
      let forcedStatus = null;
      if (isCompleted && i === numTracks - 1) {
        forcedStatus = Math.random() > 0.5 ? 'completed' : 'arrived';
      } else if (i === 0) {
        forcedStatus = 'on_the_way';
      }
      
      // Generate base tracking data
      const trackingData = trackingFactory();
      
      // Adjust distance based on tracking position (closer as i increases)
      const distanceMultiplier = 1 - (i / numTracks);
      const distance = trackingData.distance * distanceMultiplier;
      
      // Override status if needed
      const status = forcedStatus || trackingData.status;
      
      // Create timestamps in sequence
      const timeOffset = i * (Math.random() * 30 + 10) * 60 * 1000; // 10-40 minutes between points
      const timestamp = new Date(assignment.assignedAt.getTime() + timeOffset);
      
      // Calculate estimated time based on distance
      const speed = 30; // km/h average speed
      const estimatedTimeMinutes = Math.ceil((distance / 1000) / speed * 60);
      
      // Update tracking data
      const updatedTrackingData = {
        ...trackingData,
        assignmentId: assignment.id,
        officerId: officer.id,
        distance,
        status,
        timestamp,
        estimatedTime: `${estimatedTimeMinutes} menit`,
        description: status === 'completed' ? 'Petugas telah tiba dan menyelesaikan penanganan' :
                    status === 'arrived' ? 'Petugas telah tiba di lokasi' :
                    status === 'on_the_way' ? 'Petugas sedang menuju lokasi' :
                    'Penugasan dibatalkan',
        createdAt: timestamp,
        updatedAt: timestamp
      };
      
      try {
        const tracking = await prisma.Tracking.create({ data: updatedTrackingData });
        trackings.push(tracking);
      } catch (error) {
        console.error(`Failed to create tracking for assignment ${assignment.id}:`, error);
      }
    }
  }
  
  console.log(`Created ${trackings.length} tracking records`);
  return trackings;
}

module.exports = { seedTracking };