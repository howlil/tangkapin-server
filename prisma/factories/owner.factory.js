const { faker } = require('@faker-js/faker/locale/id_ID');
const { hashPassword, generateIndonesianCoordinates } = require('./utils.factory');

/**
 * Create a factory function for Owner model
 * @returns {Function} - Factory function
 */
function createOwnerFactory() {
  return async () => {
    const { latitude, longitude } = generateIndonesianCoordinates();
    
    return {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number('+62###########'),
      address: faker.location.streetAddress(true),
      passwordHash: await hashPassword(),
      latitude,
      longitude,
      createdAt: faker.date.past({ years: 1 })
    };
  };
}

module.exports = { createOwnerFactory };