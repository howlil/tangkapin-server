const { createOfficerFactory } = require('../factories/officer.factory');

/**
 * Seed Officer data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created officers
 */
async function seedOfficers(prisma, count = 5) {
  console.log(`Creating ${count} officers...`);
  
  const officerFactory = createOfficerFactory();
  const officers = [];
  
  // Create a default officer for testing
  const defaultOfficer = await prisma.officer.create({
    data: {
      name: 'Default Officer',
      email: 'officer@example.com',
      phone: '+6281234567891',
      address: 'Jl. Kantor Polisi No. 1, Jakarta Pusat',
      passwordHash: await require('../factories/utils.factory').hashPassword('@Test123'),
      latitude: -6.1751,
      longitude: 106.8650,
      vehicleType: 'SUV',
      licensePlate: 'B 1234 POL',
      status: 'available',
      createdAt: new Date()
    }
  });
  
  officers.push(defaultOfficer);
  
  // Create random officers
  for (let i = 0; i < count - 1; i++) {
    const officerData = await officerFactory();
    const officer = await prisma.officer.create({ data: officerData });
    officers.push(officer);
  }
  
  console.log(`Created ${officers.length} officers`);
  return officers;
}

module.exports = { seedOfficers };