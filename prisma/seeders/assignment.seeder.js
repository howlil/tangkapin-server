const { createAssignmentFactory } = require('../factories/assignment.factory');

/**
 * Seed Assignment data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} reports - Array of report objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @returns {Promise<Array>} - Array of created assignments
 */
async function seedAssignments(prisma, reports, officers, police) {
  console.log(`Creating assignments for reports...`);
  
  const assignableReports = reports.filter(report => 
    report.isAssigned || 
    ['assigned', 'in_progress', 'completed'].includes(report.status)
  );
  
  console.log(`Found ${assignableReports.length} assignable reports`);
  
  if (assignableReports.length === 0) {
    console.log('No assignable reports found, skipping assignment creation');
    return [];
  }
  
  const assignments = [];
  
  // Create one assignment for each assignable report
  for (const report of assignableReports) {
    const officer = officers[Math.floor(Math.random() * officers.length)];
    const assignedByPolice = police[Math.floor(Math.random() * police.length)];
    
    // Create assignment between report creation date and now
    const assignedAt = new Date(
      report.createdAt.getTime() + 
      Math.random() * (Date.now() - report.createdAt.getTime())
    );
    
    const assignmentData = {
      reportId: report.id,
      officerId: officer.id,
      assignedBy: assignedByPolice.id,
      assignedAt
    };
    
    try {
      const assignment = await prisma.assignment.create({ data: assignmentData });
      assignments.push(assignment);
      
      // Update officer status to busy for some officers
      if (Math.random() > 0.5) {
        await prisma.officer.update({
          where: { id: officer.id },
          data: { status: 'busy' }
        });
      }
    } catch (error) {
      console.error(`Failed to create assignment for report ${report.id}:`, error);
    }
  }
  
  console.log(`Created ${assignments.length} assignments`);
  return assignments;
}

module.exports = { seedAssignments };