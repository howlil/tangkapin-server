const { createEvidenceFactory } = require('../factories/evidence.factory');

/**
 * Seed Evidence data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} reports - Array of report objects
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created evidence
 */
async function seedEvidence(prisma, reports, count = 75) {
  console.log(`Creating evidence for reports...`);
  
  const evidenceFactory = createEvidenceFactory(reports);
  const evidences = [];
  
  // Create at least one evidence for each report
  for (const report of reports) {
    const evidenceData = {
      reportId: report.id,
      fileUrl: report.reportImage, // Use the same image as in the report
      type: 'IMAGE',
      createdAt: report.createdAt
    };
    
    const evidence = await prisma.evidence.create({ data: evidenceData });
    evidences.push(evidence);
  }
  
  // Add extra evidence randomly to some reports
  const remainingCount = count - reports.length;
  
  for (let i = 0; i < remainingCount; i++) {
    const evidenceData = evidenceFactory();
    const evidence = await prisma.evidence.create({ data: evidenceData });
    evidences.push(evidence);
  }
  
  console.log(`Created ${evidences.length} pieces of evidence`);
  return evidences;
}

module.exports = { seedEvidence };