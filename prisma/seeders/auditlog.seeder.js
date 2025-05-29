const { createAuditLogFactory } = require('../factories/auditlog.factory');

/**
 * Seed AuditLog data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} owners - Array of owner objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @param {Array} reports - Array of report objects
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created audit logs
 */
async function seedAuditLogs(prisma, owners, officers, police, reports, count = 150) {
  console.log(`Creating ${count} audit logs...`);
  
  const auditLogFactory = createAuditLogFactory(owners, officers, police, reports);
  const auditLogs = [];
  
  // Create audit logs for report status changes
  for (const report of reports) {
    // Skip for 'new' reports as they haven't had status changes
    if (report.status === 'new') continue;
    
    // Find actor based on report status
    let actorOwnerId = null;
    let actorOfficerId = null;
    let actorPoliceId = null;
    
    if (['verified', 'rejected'].includes(report.status)) {
      // Officers verify or reject reports
      actorOfficerId = officers[Math.floor(Math.random() * officers.length)].id;
    } else if (['assigned', 'in_progress', 'completed'].includes(report.status)) {
      // Police update report status once assigned
      actorPoliceId = police[Math.floor(Math.random() * police.length)].id;
    }
    
    // Create audit log for report creation
    const creationLog = await prisma.auditLog.create({
      data: {
        entity: 'Report',
        entityId: report.id,
        action: 'CREATE',
        actorOwnerId: report.ownerId,
        description: 'Laporan baru dibuat',
        createdAt: report.createdAt
      }
    });
    auditLogs.push(creationLog);
    
    // Create audit log for status change
    if (report.status !== 'new') {
      const statusLog = await prisma.auditLog.create({
        data: {
          entity: 'Report',
          entityId: report.id,
          action: 'UPDATE_STATUS',
          actorOwnerId,
          actorOfficerId,
          actorPoliceId,
          description: `Status laporan diubah menjadi ${report.status}`,
          createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 3600000) // 1 hour after creation if no update time
        }
      });
      auditLogs.push(statusLog);
    }
    
    // Create audit log for assignment if applicable
    if (report.isAssigned) {
      const assignment = await prisma.assignment.findFirst({
        where: { reportId: report.id }
      });
      
      if (assignment) {
        const assignmentLog = await prisma.auditLog.create({
          data: {
            entity: 'Assignment',
            entityId: assignment.id,
            action: 'CREATE',
            actorOfficerId: officers[Math.floor(Math.random() * officers.length)].id,
            description: 'Petugas ditugaskan ke laporan',
            createdAt: assignment.assignedAt
          }
        });
        auditLogs.push(assignmentLog);
      }
    }
  }
  
  // Create audit logs for user logins
  for (const owner of owners) {
    const loginLog = await prisma.auditLog.create({
      data: {
        entity: 'Owner',
        entityId: owner.id,
        action: 'LOGIN',
        actorOwnerId: owner.id,
        description: 'User logged in',
        createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000) // Random time in the last week
      }
    });
    auditLogs.push(loginLog);
  }
  
  for (const officer of officers) {
    const loginLog = await prisma.auditLog.create({
      data: {
        entity: 'Officer',
        entityId: officer.id,
        action: 'LOGIN',
        actorOfficerId: officer.id,
        description: 'Officer logged in',
        createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000) // Random time in the last week
      }
    });
    auditLogs.push(loginLog);
  }
  
  for (const policeOfficer of police) {
    const loginLog = await prisma.auditLog.create({
      data: {
        entity: 'Police',
        entityId: policeOfficer.id,
        action: 'LOGIN',
        actorPoliceId: policeOfficer.id,
        description: 'Police officer logged in',
        createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000) // Random time in the last week
      }
    });
    auditLogs.push(loginLog);
  }
  
  // Create remaining random audit logs
  const remainingCount = count - auditLogs.length;
  
  for (let i = 0; i < remainingCount; i++) {
    try {
      const auditLogData = auditLogFactory();
      const auditLog = await prisma.auditLog.create({ data: auditLogData });
      auditLogs.push(auditLog);
    } catch (error) {
      console.error(`Error creating audit log ${i}:`, error);
    }
  }
  
  console.log(`Created ${auditLogs.length} audit logs`);
  return auditLogs;
}

module.exports = { seedAuditLogs };