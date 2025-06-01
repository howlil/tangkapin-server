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
  
  const usedIPs = new Set();
  const cctvFactory = createCCTVFactory(owners, usedIPs);
  const cctvs = [];
  
  // Create at least one CCTV per owner with unique IPs
  for (let i = 0; i < owners.length; i++) {
    const owner = owners[i];
    const uniqueIP = `192.168.1.${100 + i}`; // Sequential IPs starting from 192.168.1.100
    
    const cctvData = {
      ownerId: owner.id,
      name: `CCTV-${owner.name.split(' ')[0]}-1`,
      location: 'Lokasi Utama',
      description: 'CCTV utama untuk monitoring',
      IP: uniqueIP,
      cameraType: 'Hikvision Dome 1080p',
      streamUrl: `http://${uniqueIP}:554/video`,
      status: 'online',
      createdAt: new Date()
    };
    
    usedIPs.add(uniqueIP);
    const cctv = await prisma.CCTV.create({ data: cctvData });
    cctvs.push(cctv);
  }
  
  // Create remaining CCTVs randomly distributed
  const remainingCount = count - owners.length;
  
  for (let i = 0; i < remainingCount; i++) {
    try {
      const cctvData = cctvFactory();
      const cctv = await prisma.CCTV.create({ data: cctvData });
      cctvs.push(cctv);
    } catch (error) {
      if (error.code === 'P2002') {
        console.warn(`Skipping CCTV creation due to duplicate IP: ${error.meta?.target}`);
        continue;
      }
      throw error;
    }
  }
  
  console.log(`Created ${cctvs.length} CCTVs`);
  return cctvs;
}

module.exports = { seedCCTVs };