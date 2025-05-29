const { faker } = require('@faker-js/faker/locale/id_ID');
const { hashPassword, generateIndonesianCoordinates } = require('./utils.factory');

/**
 * Create a factory function for Police model
 * @returns {Function} - Factory function
 */
function createPoliceFactory() {
  return async () => {
    const { latitude, longitude } = generateIndonesianCoordinates();
    const statuses = ['available', 'busy', 'offline'];
    const policeStations = [
      'Polsek Gambir',
      'Polres Jakarta Pusat',
      'Polsek Tanah Abang',
      'Polres Jakarta Utara',
      'Polsek Kebayoran Baru',
      'Polres Jakarta Selatan',
      'Polsek Kelapa Gading',
      'Polres Bandung',
      'Polsek Sukajadi',
      'Polres Surabaya',
      'Polda Metro Jaya',
      'Polda Jawa Barat',
      'Polda Jawa Timur',
      'Polres Denpasar',
      'Polres Makassar'
    ];
    
    return {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number('+62###########'),
      address: faker.location.streetAddress(true),
      passwordHash: await hashPassword(),
      latitude,
      longitude,
      officeName: faker.helpers.arrayElement(policeStations),
      status: faker.helpers.arrayElement(statuses),
      createdAt: faker.date.past({ years: 1 })
    };
  };
}

module.exports = { createPoliceFactory };