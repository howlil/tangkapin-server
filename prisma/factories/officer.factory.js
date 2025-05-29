const { faker } = require('@faker-js/faker/locale/id_ID');
const { hashPassword, generateIndonesianCoordinates } = require('./utils.factory');

/**
 * Create a factory function for Officer model
 * @returns {Function} - Factory function
 */
function createOfficerFactory() {
  return async () => {
    const { latitude, longitude } = generateIndonesianCoordinates();
    const statuses = ['available', 'busy', 'offline'];
    
    return {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number('+62###########'),
      address: faker.location.streetAddress(true),
      passwordHash: await hashPassword(),
      latitude,
      longitude,
      vehicleType: faker.helpers.arrayElement(['Sedan', 'SUV', 'Motor', 'Van']),
      licensePlate: `${faker.helpers.arrayElement(['B', 'D', 'A', 'F', 'T', 'AB', 'AD', 'AE'])} ${faker.number.int({ min: 1000, max: 9999 })} ${faker.helpers.arrayElement(['PQR', 'NHK', 'WXY', 'ZQP', 'ABC'])}`,
      status: faker.helpers.arrayElement(statuses),
      createdAt: faker.date.past({ years: 1 })
    };
  };
}

module.exports = { createOfficerFactory };