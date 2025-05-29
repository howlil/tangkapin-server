const { faker } = require('@faker-js/faker/locale/id_ID');

/**
 * Create a factory function for AuditLog model
 * @param {Array} owners - Array of owner objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @param {Array} reports - Array of report objects
 * @returns {Function} - Factory function
 */
function createAuditLogFactory(owners, officers, police, reports) {
  return () => {
    const entities = ['Report', 'CCTV', 'Assignment', 'Owner', 'Officer', 'Police', 'Notification'];
    const actions = ['CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'VERIFY', 'ASSIGN'];
    
    const entity = faker.helpers.arrayElement(entities);
    const action = faker.helpers.arrayElement(actions);
    
    // Select a random entity ID based on the entity type
    let entityId;
    if (entity === 'Report') {
      entityId = faker.helpers.arrayElement(reports).id;
    } else {
      entityId = faker.string.uuid();
    }
    
    // Determine the actor type randomly
    const actorType = faker.helpers.arrayElement(['owner', 'officer', 'police']);
    let actorOwnerId = null;
    let actorOfficerId = null;
    let actorPoliceId = null;
    
    if (actorType === 'owner') {
      actorOwnerId = faker.helpers.arrayElement(owners).id;
    } else if (actorType === 'officer') {
      actorOfficerId = faker.helpers.arrayElement(officers).id;
    } else {
      actorPoliceId = faker.helpers.arrayElement(police).id;
    }
    
    // Generate description based on entity and action
    let description;
    
    switch (action) {
      case 'CREATE':
        description = `${entity} baru telah dibuat`;
        break;
      case 'UPDATE':
        description = `${entity} telah diperbarui`;
        break;
      case 'DELETE':
        description = `${entity} telah dihapus`;
        break;
      case 'LOGIN':
        description = `${actorType} telah masuk ke sistem`;
        break;
      case 'LOGOUT':
        description = `${actorType} telah keluar dari sistem`;
        break;
      case 'VERIFY':
        description = `Laporan telah diverifikasi`;
        break;
      case 'ASSIGN':
        description = `Petugas telah ditugaskan ke laporan`;
        break;
    }
    
    return {
      entity,
      entityId,
      action,
      actorOwnerId,
      actorOfficerId,
      actorPoliceId,
      description,
      createdAt: faker.date.recent({ days: 30 })
    };
  };
}

module.exports = { createAuditLogFactory };