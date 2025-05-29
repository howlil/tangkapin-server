const { faker } = require('@faker-js/faker/locale/id_ID');
const { generateIndonesianCoordinates } = require('./utils.factory');

/**
 * Create a factory function for Tracking model
 * @param {Array} assignments - Array of assignment objects
 * @param {Array} officers - Array of officer objects
 * @returns {Function} - Factory function
 */
function createTrackingFactory(assignments, officers) {
  return () => {
    const assignment = faker.helpers.arrayElement(assignments);
    const officer = officers.find(o => o.id === assignment.officerId);
    
    if (!officer) {
      throw new Error(`Officer not found for assignment ${assignment.id}`);
    }
    
    const { latitude, longitude } = generateIndonesianCoordinates();
    const statuses = ['on_the_way', 'arrived', 'completed', 'cancelled'];
    const status = faker.helpers.arrayElement(statuses);
    const createdAt = faker.date.between({ from: assignment.assignedAt, to: new Date() });
    
    // Generate reasonable distance and estimated time
    const distance = faker.number.float({ min: 0.1, max: 10, precision: 0.1 }) * 1000; // in meters
    const speed = 30; // km/h average speed
    const estimatedTimeMinutes = Math.ceil((distance / 1000) / speed * 60); // convert to minutes
    
    return {
      assignmentId: assignment.id,
      officerId: officer.id,
      latitude,
      longitude,
      timestamp: createdAt,
      distance, // in meters
      estimatedTime: `${estimatedTimeMinutes} menit`,
      status,
      description: status === 'completed' ? 'Petugas telah tiba dan menyelesaikan penanganan' :
                  status === 'arrived' ? 'Petugas telah tiba di lokasi' :
                  status === 'on_the_way' ? 'Petugas sedang menuju lokasi' :
                  'Penugasan dibatalkan',
      createdAt,
      updatedAt: faker.date.between({ from: createdAt, to: new Date() })
    };
  };
}

module.exports = { createTrackingFactory };