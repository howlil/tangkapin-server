const { faker } = require('@faker-js/faker/locale/id_ID');

/**
 * Create a factory function for Assignment model
 * @param {Array} reports - Array of report objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @returns {Function} - Factory function
 */
function createAssignmentFactory(reports, officers, police) {
  return () => {
    // Only use reports that are marked as assigned
    const assignableReports = reports.filter(report => report.isAssigned);
    
    if (assignableReports.length === 0) {
      throw new Error('No assignable reports found for creating assignments');
    }
    
    const report = faker.helpers.arrayElement(assignableReports);
    const officer = faker.helpers.arrayElement(officers);
    const assignedByPolice = faker.helpers.arrayElement(police);
    const assignedAt = faker.date.between({ from: report.createdAt, to: new Date() });
    
    return {
      reportId: report.id,
      officerId: officer.id,
      assignedBy: assignedByPolice.id,
      assignedAt
    };
  };
}

module.exports = { createAssignmentFactory };