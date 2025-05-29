const { faker } = require('@faker-js/faker/locale/id_ID');
const { 
  generateReportTitle,
  generateReportDescription,
  getIndonesianLocations
} = require('./utils.factory');

/**
 * Create a factory function for Report model
 * @param {Array} owners - Array of owner objects
 * @param {Array} cctvs - Array of CCTV objects
 * @returns {Function} - Factory function
 */
function createReportFactory(owners, cctvs) {
  return () => {
    const incidentTypes = ['knife', 'gun', 'other'];
    const statuses = ['new', 'assigned', 'in_progress', 'verified', 'completed', 'rejected'];
    const incidentType = faker.helpers.arrayElement(incidentTypes);
    const locations = getIndonesianLocations();
    const owner = faker.helpers.arrayElement(owners);
    
    // 80% of reports are from CCTVs, 20% manual
    const isCctvReport = faker.helpers.arrayElement([true, true, true, true, false]);
    const cctv = isCctvReport ? 
      faker.helpers.arrayElement(cctvs.filter(c => c.ownerId === owner.id) || cctvs) : 
      null;
    
    const location = cctv ? cctv.location : faker.helpers.arrayElement(locations);
    const title = generateReportTitle(incidentType);
    const description = generateReportDescription(incidentType, location);
    const createdAt = faker.date.recent({ days: 30 });
    
    // Generate a fake image URL for report evidence
    const imageWidth = faker.number.int({ min: 800, max: 1200 });
    const imageHeight = faker.number.int({ min: 600, max: 900 });
    const reportImage = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}?${incidentType},weapon`;
    
    return {
      cctvId: cctv?.id || null,
      ownerId: owner.id,
      title,
      description,
      status: faker.helpers.arrayElement(statuses),
      location,
      reportImage,
      incidentType,
      createdAt,
      updatedAt: faker.date.between({ from: createdAt, to: new Date() }),
      isAssigned: faker.helpers.arrayElement([true, false])
    };
  };
}

module.exports = { createReportFactory };