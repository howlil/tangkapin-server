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
 * @param {Set} usedIPs - Set to track used IP addresses
 * @returns {Function} - Factory function
 */
function createCCTVFactory(owners, usedIPs = new Set()) {
  return () => {
    let ip;
    let attempts = 0;
    const maxAttempts = 100;
    
    // Generate unique IP
    do {
      ip = generateIndonesianIP();
      attempts++;
    } while (usedIPs.has(ip) && attempts < maxAttempts);
    
    if (attempts >= maxAttempts) {
      // Fallback to timestamp-based IP if we can't generate unique
      const timestamp = Date.now();
      const lastOctet = timestamp % 254 + 1;
      const thirdOctet = Math.floor(timestamp / 254) % 254 + 1;
      ip = `192.168.${thirdOctet}.${lastOctet}`;
    }
    
    usedIPs.add(ip);
    
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