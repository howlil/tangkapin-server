const { faker } = require('@faker-js/faker/locale/id_ID');

/**
 * Create a factory function for Evidence model
 * @param {Array} reports - Array of report objects
 * @returns {Function} - Factory function
 */
function createEvidenceFactory(reports) {
  return () => {
    const report = faker.helpers.arrayElement(reports);
    const evidenceTypes = ['IMAGE', 'VIDEO'];
    const type = faker.helpers.arrayElement(evidenceTypes);
    
    // Generate URLs based on type
    let fileUrl;
    if (type === 'IMAGE') {
      const imageWidth = faker.number.int({ min: 800, max: 1200 });
      const imageHeight = faker.number.int({ min: 600, max: 900 });
      fileUrl = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}?${report.incidentType},weapon`;
    } else {
      fileUrl = `https://example.com/videos/evidence_${faker.string.uuid()}.mp4`;
    }
    
    return {
      reportId: report.id,
      fileUrl,
      type,
      createdAt: faker.date.between({ from: report.createdAt, to: new Date() })
    };
  };
}

module.exports = { createEvidenceFactory };