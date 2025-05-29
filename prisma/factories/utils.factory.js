const { faker } = require('@faker-js/faker/locale/id_ID');
const bcrypt = require('bcrypt');

// Common password for all test users
const DEFAULT_PASSWORD = 'password123';

/**
 * Hash a password using bcrypt
 * @param {string} password - The password to hash
 * @returns {Promise<string>} - The hashed password
 */
async function hashPassword(password = DEFAULT_PASSWORD) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Generate random GPS coordinates within Indonesia
 * @returns {Object} - Object containing latitude and longitude
 */
function generateIndonesianCoordinates() {
  // Indonesia's approximate boundaries
  const minLat = -11.0;
  const maxLat = 6.0;
  const minLng = 95.0;
  const maxLng = 141.0;
  
  return {
    latitude: faker.location.latitude({ min: minLat, max: maxLat, precision: 6 }),
    longitude: faker.location.longitude({ min: minLng, max: maxLng, precision: 6 })
  };
}

/**
 * Generate an Indonesian IP address
 * @returns {string} - IP address
 */
function generateIndonesianIP() {
  // Some common Indonesian IP ranges
  const indonesianIPRanges = [
    '103.10.',
    '103.28.',
    '111.94.',
    '114.4.',
    '118.96.',
    '125.160.',
    '182.23.',
    '202.43.',
    '202.152.',
    '203.142.'
  ];
  
  const ipPrefix = faker.helpers.arrayElement(indonesianIPRanges);
  return `${ipPrefix}${faker.number.int({ min: 1, max: 254 })}.${faker.number.int({ min: 1, max: 254 })}`;
}

/**
 * Generate a list of Indonesian locations
 * @returns {Array} - Array of location names
 */
function getIndonesianLocations() {
  return [
    'Mall Kelapa Gading, Jakarta Utara',
    'Stasiun Gambir, Jakarta Pusat',
    'Bandara Soekarno-Hatta, Tangerang',
    'Mall Taman Anggrek, Jakarta Barat',
    'Plaza Indonesia, Jakarta Pusat',
    'Grand Indonesia, Jakarta Pusat',
    'Terminal Purabaya, Surabaya',
    'Mall Ciputra, Surabaya',
    'Universitas Indonesia, Depok',
    'Institut Teknologi Bandung, Bandung',
    'Malioboro, Yogyakarta',
    'Pasar Baru, Bandung',
    'Trans Studio Mall, Makassar',
    'Plaza Medan Fair, Medan',
    'Mal Ratu Indah, Makassar',
    'Bandara Ngurah Rai, Denpasar',
    'Kuta Beach, Bali',
    'Kawasan Industri Jababeka, Bekasi',
    'Kawasan Industri MM2100, Bekasi',
    'Kawasan Industri Cikarang, Bekasi'
  ];
}

/**
 * Generate an RTSP URL from an IP address
 * @param {string} ip - IP address
 * @returns {string} - RTSP URL
 */
function generateRtspUrl(ip) {
  const ports = ['554', '8554', '1935'];
  const paths = ['stream', 'live', 'cam', 'video', 'main', 'channel1'];
  
  const port = faker.helpers.arrayElement(ports);
  const path = faker.helpers.arrayElement(paths);
  
  return `rtsp://${ip}:${port}/${path}`;
}

/**
 * Generate camera types
 * @returns {string} - Camera type
 */
function generateCameraType() {
  const brands = ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Panasonic', 'Samsung', 'Sony', 'Vivotek'];
  const types = ['Dome', 'Bullet', 'PTZ', 'Turret', 'Thermal', 'Fisheye', 'Box'];
  const resolutions = ['1080p', '4K', '2MP', '5MP', '8MP'];
  
  return `${faker.helpers.arrayElement(brands)} ${faker.helpers.arrayElement(types)} ${faker.helpers.arrayElement(resolutions)}`;
}

/**
 * Generate a report title based on incident type
 * @param {string} incidentType - Type of incident
 * @returns {string} - Report title
 */
function generateReportTitle(incidentType) {
  const titles = {
    knife: [
      'Deteksi pisau di area publik',
      'Terdeteksi senjata tajam',
      'Peringatan pisau terdeteksi',
      'Deteksi benda tajam mencurigakan',
      'Laporan pisau di keramaian'
    ],
    gun: [
      'Deteksi senjata api',
      'Terlihat benda mirip pistol',
      'Peringatan senjata api terdeteksi',
      'Terdeteksi pistol di lokasi',
      'Tanda bahaya: senjata api'
    ],
    other: [
      'Deteksi senjata berbahaya',
      'Benda mencurigakan terdeteksi',
      'Peringatan keamanan',
      'Pelanggaran keamanan terdeteksi',
      'Potensi ancaman terlihat'
    ]
  };
  
  return faker.helpers.arrayElement(titles[incidentType] || titles.other);
}

/**
 * Generate a report description based on incident type and location
 * @param {string} incidentType - Type of incident
 * @param {string} location - Location of incident
 * @returns {string} - Report description
 */
function generateReportDescription(incidentType, location) {
  const weaponType = incidentType === 'knife' ? 'pisau' : incidentType === 'gun' ? 'senjata api' : 'senjata';
  
  return `Sistem deteksi senjata mendeteksi ${weaponType} di ${location}. Terdeteksi pada ${faker.date.recent().toLocaleString('id-ID')}. Level kepercayaan deteksi: ${faker.number.int({ min: 75, max: 99 })}%. Tindakan segera diperlukan untuk verifikasi dan penanganan.`;
}

module.exports = {
  DEFAULT_PASSWORD,
  hashPassword,
  generateIndonesianCoordinates,
  generateIndonesianIP,
  getIndonesianLocations,
  generateRtspUrl,
  generateCameraType,
  generateReportTitle,
  generateReportDescription
};