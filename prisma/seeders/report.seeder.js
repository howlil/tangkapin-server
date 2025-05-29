const { createReportFactory } = require('../factories/report.factory');

/**
 * Seed Report data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} owners - Array of owner objects
 * @param {Array} cctvs - Array of CCTV objects
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created reports
 */
async function seedReports(prisma, owners, cctvs, count = 50) {
  console.log(`Creating ${count} reports...`);
  
  const reportFactory = createReportFactory(owners, cctvs);
  const reports = [];
  
  // Create sample reports for each status
  const statuses = ['new', 'assigned', 'in_progress', 'verified', 'completed', 'rejected'];
  const incidentTypes = ['knife', 'gun', 'other'];
  
  // Create one report for each status and incident type combination
  for (const status of statuses) {
    for (const incidentType of incidentTypes) {
      const owner = owners[0]; // Use the default owner
      const cctv = cctvs.find(c => c.ownerId === owner.id);
      
      const reportData = {
        cctvId: cctv?.id || null,
        ownerId: owner.id,
        title: `Sample ${incidentType} report - ${status}`,
        description: `This is a sample ${incidentType} detection report with status "${status}"`,
        status,
        location: cctv?.location || 'Sample Location',
        reportImage: `https://source.unsplash.com/random/800x600?${incidentType},weapon`,
        incidentType,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date in the last 30 days
        updatedAt: new Date(),
        isAssigned: ['assigned', 'in_progress', 'completed'].includes(status)
      };
      
      const report = await prisma.report.create({ data: reportData });
      reports.push(report);
    }
  }
  
  // Create remaining reports randomly
  const remainingCount = count - (statuses.length * incidentTypes.length);
  
  for (let i = 0; i < remainingCount; i++) {
    const reportData = reportFactory();
    const report = await prisma.report.create({ data: reportData });
    reports.push(report);
  }
  
  console.log(`Created ${reports.length} reports`);
  return reports;
}

module.exports = { seedReports };