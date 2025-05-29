const { createCCTVFactory } = require('../factories/cctv.factory');

/**
 * Seed CCTV data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} owners - Array of owner objects
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created CCTVs
 */
async function seedCCTVs(prisma, owners, count = 25) {
  console.log(`Creating ${count} CCTVs...`);
  
  const cctvFactory = createCCTVFactory(owners);
  const cctvs = [];
  
  for (const owner of owners) {
    // Create at least one CCTV per owner
    const cctvData = {
      ownerId: owner.id,
      name: `CCTV-${owner.name.split(' ')[0]}-1`,
      location: 'Lokasi Utama',
      description: 'CCTV utama untuk monitoring',
      IP: '192.168.1.100',
      cameraType: 'Hikvision Dome 1080p',
      streamUrl: 'http://192.168.1.100:554/video',
      status: 'online',
      createdAt: new Date()
    };
    
    const cctv = await prisma.CCTV.create({ data: cctvData });
    cctvs.push(cctv);
  }
  
  // Create remaining CCTVs randomly distributed
  const remainingCount = count - owners.length;
  
  for (let i = 0; i < remainingCount; i++) {
    const cctvData = cctvFactory();
    const cctv = await prisma.CCTV.create({ data: cctvData });
    cctvs.push(cctv);
  }
  
  console.log(`Created ${cctvs.length} CCTVs`);
  return cctvs;
}

module.exports = { seedCCTVs };