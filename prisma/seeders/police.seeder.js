const { createPoliceFactory } = require('../factories/police.factory');

/**
 * Seed Police data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created police officers
 */
async function seedPolice(prisma, count = 15) {
  console.log(`Creating ${count} police officers...`);
  
  const policeFactory = createPoliceFactory();
  const policeOfficers = [];
  
  // Create a default police officer for testing
  const defaultPolice = await prisma.police.create({
    data: {
      name: 'Default Police',
      email: 'police@example.com',
      phone: '+6281234567892',
      address: 'Jl. Patroli No. 5, Jakarta Pusat',
      passwordHash: await require('../factories/utils.factory').hashPassword('password123'),
      latitude: -6.1850,
      longitude: 106.8400,
      officeName: 'Polres Jakarta Pusat',
      status: 'available',
      createdAt: new Date()
    }
  });
  
  policeOfficers.push(defaultPolice);
  
  // Create random police officers
  for (let i = 0; i < count - 1; i++) {
    const policeData = await policeFactory();
    const police = await prisma.police.create({ data: policeData });
    policeOfficers.push(police);
  }
  
  console.log(`Created ${policeOfficers.length} police officers`);
  return policeOfficers;
}

module.exports = { seedPolice };