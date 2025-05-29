const { faker } = require('@faker-js/faker/locale/id_ID');

/**
 * Create a factory function for Notification model
 * @param {Array} owners - Array of owner objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @param {Array} reports - Array of report objects
 * @returns {Function} - Factory function
 */
function createNotificationFactory(owners, officers, police, reports) {
  return () => {
    const types = ['report', 'cctv', 'assignment', 'tracking'];
    const statuses = ['read', 'unread'];
    const type = faker.helpers.arrayElement(types);
    const report = faker.helpers.arrayElement(reports);
    
    // Determine recipient based on notification type
    let ownerId = null;
    let officerId = null;
    let policeId = null;
    
    const recipientType = faker.helpers.arrayElement(['owner', 'officer', 'police']);
    
    if (recipientType === 'owner') {
      ownerId = faker.helpers.arrayElement(owners).id;
    } else if (recipientType === 'officer') {
      officerId = faker.helpers.arrayElement(officers).id;
    } else {
      policeId = faker.helpers.arrayElement(police).id;
    }
    
    // Generate notification title and message based on type
    let title, message;
    let image = null;
    
    switch (type) {
      case 'report':
        title = 'Laporan Baru Terdeteksi';
        message = `Sistem mendeteksi ${report.incidentType === 'knife' ? 'pisau' : report.incidentType === 'gun' ? 'senjata api' : 'senjata'} di ${report.location}`;
        image = report.reportImage;
        break;
      case 'cctv':
        title = 'Status CCTV Berubah';
        message = 'Salah satu CCTV Anda mengalami perubahan status menjadi offline';
        break;
      case 'assignment':
        title = 'Penugasan Baru';
        message = `Anda ditugaskan untuk menangani laporan ${report.title} di ${report.location}`;
        break;
      case 'tracking':
        title = 'Pembaruan Pelacakan';
        message = 'Petugas sedang dalam perjalanan menuju lokasi insiden';
        break;
    }
    
    return {
      ownerId,
      officerId,
      policeId,
      title,
      message,
      type,
      status: faker.helpers.arrayElement(statuses),
      image,
      reportId: type === 'report' || type === 'assignment' ? report.id : null,
      createdAt: faker.date.recent({ days: 14 }),
      isRead: faker.helpers.arrayElement(statuses) === 'read'
    };
  };
}

module.exports = { createNotificationFactory };