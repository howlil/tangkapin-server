const { seedOwners } = require('./seeders/owner.seeder');
const { seedOfficers } = require('./seeders/officer.seeder');
const { seedPolice } = require('./seeders/police.seeder');
const { seedCCTVs } = require('./seeders/cctv.seeder');
const { seedReports } = require('./seeders/report.seeder');
const { seedEvidence } = require('./seeders/evidence.seeder');
const { seedAssignments } = require('./seeders/assignment.seeder');
const { seedTracking } = require('./seeders/tracking.seeder');
const { seedNotifications } = require('./seeders/notification.seeder');
const { seedAuditLogs } = require('./seeders/auditlog.seeder');
const {prisma} = require('../src/libs/configs/prisma.config'); // Adjust the path as necessary

async function main() {
  console.log('🌱 Starting database seeding...');
  
  try {
    console.log('Cleaning up existing data...');
    // Clear existing data (in reverse order of dependencies)
    await prisma.$transaction([
      prisma.$executeRaw`TRUNCATE TABLE "AuditLog" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Notification" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Tracking" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Assignment" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Evidence" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Report" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "CCTV" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Police" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Officer" CASCADE;`,
      prisma.$executeRaw`TRUNCATE TABLE "Owner" CASCADE;`
    ]);
    
    console.log('Database cleaned successfully');

    // Seed data (in order of dependencies)
    console.log('Seeding Owners...');
    const owners = await seedOwners(prisma);
    
    console.log('Seeding Officers...');
    const officers = await seedOfficers(prisma);
    
    console.log('Seeding Police...');
    const police = await seedPolice(prisma);
    
    console.log('Seeding CCTVs...');
    const cctvs = await seedCCTVs(prisma, owners);
    
    console.log('Seeding Reports...');
    const reports = await seedReports(prisma, owners, cctvs);
    
    console.log('Seeding Evidence...');
    await seedEvidence(prisma, reports);
    
    console.log('Seeding Assignments...');
    const assignments = await seedAssignments(prisma, reports, officers, police);
    
    console.log('Seeding Tracking...');
    await seedTracking(prisma, assignments, officers);
    
    console.log('Seeding Notifications...');
    await seedNotifications(prisma, owners, officers, police, reports);
    
    console.log('Seeding Audit Logs...');
    await seedAuditLogs(prisma, owners, officers, police, reports);
    
    console.log('🌱 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during database seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => {
    console.log('Seed script executed successfully');
    process.exit(0);
  })
  .catch((e) => {
    console.error('Error executing seed script:', e);
    process.exit(1);
  });