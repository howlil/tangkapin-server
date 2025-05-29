const { createOwnerFactory } = require('../factories/owner.factory');


async function seedOwners(prisma, count = 10) {
  console.log(`Creating ${count} owners...`);
  
  const ownerFactory = createOwnerFactory();
  const owners = [];
  
  // Create a default owner for testing
  const defaultOwner = await prisma.owner.create({
    data: {
      name: 'Default Owner',
      email: 'owner@example.com',
      phone: '+6281234567890',
      address: 'Jl. Contoh No. 123, Jakarta',
      passwordHash: await require('../factories/utils.factory').hashPassword('owner123'),
      latitude: -6.2088,
      longitude: 106.8456,
      createdAt: new Date()
    }
  });
  
  owners.push(defaultOwner);
  
  // Create random owners
  for (let i = 0; i < count - 1; i++) {
    const ownerData = await ownerFactory();
    const owner = await prisma.owner.create({ data: ownerData });
    owners.push(owner);
  }
  
  console.log(`Created ${owners.length} owners`);
  return owners;
}

module.exports = { seedOwners };