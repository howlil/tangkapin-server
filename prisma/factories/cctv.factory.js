const { faker } = require('@faker-js/faker/locale/id_ID');
const { 
  generateIndonesianIP, 
  getIndonesianLocations,
  generateRtspUrl,
  generateCameraType
} = require('./utils.factory');

/**
 * Create a factory function for CCTV model
 * @param {Array} owners - Array of owner objects
 * @returns {Function} - Factory function
 */
function createCCTVFactory(owners) {
  return () => {
    const ip = generateIndonesianIP();
    const locations = getIndonesianLocations();
    const location = faker.helpers.arrayElement(locations);
    const statuses = ['online', 'offline', 'inactive'];
    const owner = faker.helpers.arrayElement(owners);
    
    return {
      ownerId: owner.id,
      name: `CCTV-${faker.number.int({ min: 1, max: 999 })}`,
      location,
      description: faker.lorem.sentence(),
      IP: ip,
      cameraType: generateCameraType(),
      streamUrl: generateRtspUrl(ip),
      status: faker.helpers.arrayElement(statuses),
      createdAt: faker.date.past({ years: 1 })
    };
  };
}

module.exports = { createCCTVFactory };