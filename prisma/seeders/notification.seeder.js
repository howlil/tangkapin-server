const { createNotificationFactory } = require('../factories/notification.factory');

/**
 * Seed Notification data
 * @param {PrismaClient} prisma - Prisma client instance
 * @param {Array} owners - Array of owner objects
 * @param {Array} officers - Array of officer objects
 * @param {Array} police - Array of police objects
 * @param {Array} reports - Array of report objects
 * @param {number} count - Number of records to create
 * @returns {Promise<Array>} - Array of created notifications
 */
async function seedNotifications(prisma, owners, officers, police, reports, count = 100) {
  console.log(`Creating notifications for the system...`);
  
  const notificationFactory = createNotificationFactory(owners, officers, police, reports);
  const notifications = [];
  
  // Process notifications for reports based on their status
  console.log(`Creating status-based notifications for reports...`);
  for (const report of reports) {
    try {
      // Create notifications for new reports (weapon detection)
      if (report.status === 'new') {
        // Notify owner about the detection
        const ownerNotification = await prisma.notification.create({
          data: {
            ownerId: report.ownerId,
            title: 'Deteksi Senjata Baru',
            message: `Sistem mendeteksi ${report.incidentType === 'knife' ? 'pisau' : report.incidentType === 'gun' ? 'senjata api' : 'senjata berbahaya'} di ${report.location}. Segera laporkan ke petugas keamanan terdekat.`,
            type: 'report',
            status: 'unread',
            image: report.reportImage,
            reportId: report.id,
            createdAt: report.createdAt,
            isRead: false
          }
        });
        notifications.push(ownerNotification);
        
        // Notify random officer for verification
        const officer = officers[Math.floor(Math.random() * officers.length)];
        const officerNotification = await prisma.notification.create({
          data: {
            officerId: officer.id,
            title: 'Laporan Baru Memerlukan Verifikasi',
            message: `Deteksi ${report.incidentType === 'knife' ? 'pisau' : report.incidentType === 'gun' ? 'senjata api' : 'senjata berbahaya'} di ${report.location}. Diperlukan verifikasi segera.`,
            type: 'report',
            status: 'unread',
            reportId: report.id,
            createdAt: new Date(report.createdAt.getTime() + 60000), // 1 minute after report
            isRead: Math.random() > 0.5
          }
        });
        notifications.push(officerNotification);
        
        // Also notify a second officer as backup
        if (officers.length > 1) {
          let secondOfficer;
          do {
            secondOfficer = officers[Math.floor(Math.random() * officers.length)];
          } while (secondOfficer.id === officer.id);
          
          const backupNotification = await prisma.notification.create({
            data: {
              officerId: secondOfficer.id,
              title: 'Laporan Deteksi Senjata',
              message: `Laporan baru terdeteksi di ${report.location}. Level urgensi: Tinggi.`,
              type: 'report',
              status: 'unread',
              reportId: report.id,
              createdAt: new Date(report.createdAt.getTime() + 120000), // 2 minutes after report
              isRead: false
            }
          });
          notifications.push(backupNotification);
        }
      }
      
      // Create notifications for verified reports
      if (report.status === 'verified') {
        // Find a random officer to be the verifier
        const verifier = officers[Math.floor(Math.random() * officers.length)];
        
        // Notify owner about verification
        const ownerNotification = await prisma.notification.create({
          data: {
            ownerId: report.ownerId,
            title: 'Laporan Telah Diverifikasi',
            message: `Laporan deteksi ${report.incidentType} di ${report.location} telah diverifikasi oleh petugas. Sedang menunggu penugasan.`,
            type: 'report',
            status: 'unread',
            reportId: report.id,
            createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 1800000), // 30 minutes after creation if no update time
            isRead: Math.random() > 0.4
          }
        });
        notifications.push(ownerNotification);
        
        // Notify other officers about verification
        for (const otherOfficer of officers.filter(o => o.id !== verifier.id)) {
          if (Math.random() > 0.7) { // Only notify some officers
            const officerNotification = await prisma.notification.create({
              data: {
                officerId: otherOfficer.id,
                title: 'Laporan Terverifikasi',
                message: `Laporan di ${report.location} telah diverifikasi dan memerlukan penugasan.`,
                type: 'report',
                status: 'unread',
                reportId: report.id,
                createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 1900000), // 31-32 minutes after creation
                isRead: Math.random() > 0.5
              }
            });
            notifications.push(officerNotification);
          }
        }
      }
      
      // Create notifications for assigned reports
      if (report.status === 'assigned' || report.isAssigned) {
        // Find the assignment for this report
        const assignment = await prisma.assignment.findFirst({
          where: { reportId: report.id },
          include: { 
            officer: true,
            assignedByPolice: true
          }
        });
        
        if (assignment) {
          // Notify owner about assignment
          const ownerNotification = await prisma.notification.create({
            data: {
              ownerId: report.ownerId,
              title: 'Petugas Ditugaskan ke Laporan Anda',
              message: `Petugas ${assignment.officer.name} telah ditugaskan untuk menangani laporan Anda di ${report.location}. Estimasi waktu tiba: 15-20 menit.`,
              type: 'assignment',
              status: 'unread',
              reportId: report.id,
              createdAt: assignment.assignedAt,
              isRead: Math.random() > 0.3
            }
          });
          notifications.push(ownerNotification);
          
          // Notify assigned police
          const policeNotification = await prisma.notification.create({
            data: {
              policeId: assignment.officer.id,
              title: 'Penugasan Baru',
              message: `Anda telah ditugaskan untuk menangani laporan ${report.incidentType === 'knife' ? 'pisau' : report.incidentType === 'gun' ? 'senjata api' : 'senjata'} di ${report.location}. Prioritas: Tinggi.`,
              type: 'assignment',
              status: 'unread',
              reportId: report.id,
              createdAt: assignment.assignedAt,
              isRead: Math.random() > 0.2 // Police are likely to check notifications quickly
            }
          });
          notifications.push(policeNotification);
          
          // Additional reminder notification after some time
          const reminderTime = new Date(assignment.assignedAt.getTime() + 600000); // 10 minutes after assignment
          if (reminderTime < new Date()) { // Only if the reminder time is in the past
            const reminderNotification = await prisma.notification.create({
              data: {
                policeId: assignment.officer.id,
                title: 'Pengingat Penugasan',
                message: `Pengingat: Anda memiliki penugasan aktif di ${report.location}. Harap berikan update status.`,
                type: 'assignment',
                status: 'unread',
                reportId: report.id,
                createdAt: reminderTime,
                isRead: Math.random() > 0.5
              }
            });
            notifications.push(reminderNotification);
          }
          
          // Notify officer who assigned the task
          if (assignment.assignedByPolice) {
            const officerNotification = await prisma.notification.create({
              data: {
                officerId: officers[Math.floor(Math.random() * officers.length)].id,
                title: 'Penugasan Berhasil',
                message: `Petugas ${assignment.officer.name} telah ditugaskan untuk laporan di ${report.location}.`,
                type: 'assignment',
                status: 'unread',
                reportId: report.id,
                createdAt: new Date(assignment.assignedAt.getTime() + 60000), // 1 minute after assignment
                isRead: Math.random() > 0.6
              }
            });
            notifications.push(officerNotification);
          }
        }
      }
      
      // Create notifications for in-progress reports
      if (report.status === 'in_progress') {
        // Find the assignment and tracking data
        const assignment = await prisma.assignment.findFirst({
          where: { reportId: report.id },
          include: { 
            officer: true,
            trackings: {
              orderBy: { createdAt: 'desc' },
              take: 1
            }
          }
        });
        
        if (assignment) {
          // Notify owner about progress
          const ownerNotification = await prisma.notification.create({
            data: {
              ownerId: report.ownerId,
              title: 'Petugas Sedang Menuju Lokasi',
              message: `Petugas ${assignment.officer.name} sedang menuju lokasi insiden di ${report.location}.${assignment.trackings.length > 0 ? ` Estimasi waktu tiba: ${assignment.trackings[0].estimatedTime}.` : ''}`,
              type: 'tracking',
              status: 'unread',
              reportId: report.id,
              createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 2400000), // 40 minutes after creation if no update
              isRead: Math.random() > 0.2 // Owners are likely to check these notifications
            }
          });
          notifications.push(ownerNotification);
          
          // Notify officer about updates
          const officerUpdateNotification = await prisma.notification.create({
            data: {
              officerId: officers[Math.floor(Math.random() * officers.length)].id,
              title: 'Update Status Penanganan',
              message: `Petugas sedang menuju lokasi untuk laporan di ${report.location}. Status: In Progress.`,
              type: 'tracking',
              status: 'unread',
              reportId: report.id,
              createdAt: new Date(report.updatedAt?.getTime() || report.createdAt.getTime() + 2500000), // Slightly after the status update
              isRead: Math.random() > 0.5
            }
          });
          notifications.push(officerUpdateNotification);
        }
      }
      
      // Create notifications for completed reports
      if (report.status === 'completed') {
        // Find the assignment
        const assignment = await prisma.assignment.findFirst({
          where: { reportId: report.id },
          include: { 
            officer: true
          }
        });
        
        // Notify owner about completion
        const ownerNotification = await prisma.notification.create({
          data: {
            ownerId: report.ownerId,
            title: 'Laporan Telah Diselesaikan',
            message: `Laporan insiden di ${report.location} telah ditangani dan diselesaikan${assignment ? ` oleh petugas ${assignment.officer.name}` : ''}.`,
            type: 'report',
            status: Math.random() > 0.5 ? 'read' : 'unread',
            reportId: report.id,
            createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 3600000), // 1 hour after creation if no update
            isRead: Math.random() > 0.5
          }
        });
        notifications.push(ownerNotification);
        
        // Notify officers about completion
        const randomOfficer = officers[Math.floor(Math.random() * officers.length)];
        const officerCompletionNotification = await prisma.notification.create({
          data: {
            officerId: randomOfficer.id,
            title: 'Laporan Selesai Ditangani',
            message: `Laporan insiden di ${report.location} telah berhasil ditangani dan diselesaikan.`,
            type: 'report',
            status: 'unread',
            reportId: report.id,
            createdAt: new Date(report.updatedAt?.getTime() || report.createdAt.getTime() + 3660000), // 1 hour 1 minute after creation
            isRead: Math.random() > 0.5
          }
        });
        notifications.push(officerCompletionNotification);
        
        // Notify police about report summary if assigned
        if (assignment) {
          const policeSummaryNotification = await prisma.notification.create({
            data: {
              policeId: assignment.officer.id,
              title: 'Ringkasan Penanganan Laporan',
              message: `Penanganan laporan di ${report.location} telah selesai. Terima kasih atas respons cepat Anda.`,
              type: 'report',
              status: 'unread',
              reportId: report.id,
              createdAt: new Date(report.updatedAt?.getTime() || report.createdAt.getTime() + 3720000), // 1 hour 2 minutes after creation
              isRead: Math.random() > 0.4
            }
          });
          notifications.push(policeSummaryNotification);
        }
      }
      
      // Create notifications for rejected reports
      if (report.status === 'rejected') {
        // Notify owner about rejection
        const ownerNotification = await prisma.notification.create({
          data: {
            ownerId: report.ownerId,
            title: 'Laporan Tidak Diverifikasi',
            message: `Laporan deteksi di ${report.location} tidak dapat diverifikasi. Kemungkinan false positive atau situasi telah berubah.`,
            type: 'report',
            status: 'unread',
            reportId: report.id,
            createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 1800000), // 30 minutes after creation if no update
            isRead: Math.random() > 0.6
          }
        });
        notifications.push(ownerNotification);
        
        // Notify the rejecting officer (random officer)
        const rejector = officers[Math.floor(Math.random() * officers.length)];
        const rejectionConfirmation = await prisma.notification.create({
          data: {
            officerId: rejector.id,
            title: 'Konfirmasi Penolakan Laporan',
            message: `Anda telah menolak laporan di ${report.location}. Laporan telah diarsipkan.`,
            type: 'report',
            status: 'read', // Assumed read since they made the action
            reportId: report.id,
            createdAt: report.updatedAt || new Date(report.createdAt.getTime() + 1860000), // 31 minutes after creation
            isRead: true
          }
        });
        notifications.push(rejectionConfirmation);
      }
      
    } catch (error) {
      console.error(`Error creating notifications for report ${report.id}:`, error);
    }
  }
  
  // Create CCTV status notifications
  console.log(`Creating CCTV status notifications...`);
  try {
    // Get all CCTVs
    const cctvs = await prisma.cCTV.findMany({
      where: {
        status: { in: ['offline', 'inactive'] }
      },
      include: {
        owner: true
      }
    });
    
    for (const cctv of cctvs) {
      // Only create notifications for offline/inactive CCTVs
      if (cctv.status === 'offline' || cctv.status === 'inactive') {
        const cctvNotification = await prisma.notification.create({
          data: {
            ownerId: cctv.ownerId,
            title: `CCTV ${cctv.status === 'offline' ? 'Offline' : 'Tidak Aktif'}`,
            message: `CCTV ${cctv.name} di ${cctv.location} ${cctv.status === 'offline' ? 'sedang offline' : 'tidak aktif'}. Mohon periksa koneksi dan perangkat.`,
            type: 'cctv',
            status: 'unread',
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)), // Random time in the last week
            isRead: Math.random() > 0.5
          }
        });
        notifications.push(cctvNotification);
      }
    }
  } catch (error) {
    console.error(`Error creating CCTV notifications:`, error);
  }
  
  // Create system notifications
  console.log(`Creating system notifications...`);
  try {
    // System update notification for owners
    for (const owner of owners) {
      if (Math.random() > 0.7) { // Only for some owners
        const systemNotification = await prisma.notification.create({
          data: {
            ownerId: owner.id,
            title: 'Pembaruan Sistem Deteksi',
            message: 'Sistem deteksi senjata telah diperbarui dengan algoritma baru yang meningkatkan akurasi hingga 15%. Tidak diperlukan tindakan dari Anda.',
            type: 'report',
            status: 'unread',
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 14 * 24 * 60 * 60 * 1000)), // Random time in the last 2 weeks
            isRead: Math.random() > 0.5
          }
        });
        notifications.push(systemNotification);
      }
    }
    
    // Maintenance notification for officers
    for (const officer of officers) {
      if (Math.random() > 0.5) { // Only for some officers
        const maintenanceNotification = await prisma.notification.create({
          data: {
            officerId: officer.id,
            title: 'Jadwal Pemeliharaan Sistem',
            message: 'Akan dilakukan pemeliharaan sistem pada tanggal 5 Juni 2025 pukul 02:00-04:00 WIB. Beberapa fitur mungkin tidak tersedia selama periode tersebut.',
            type: 'report',
            status: 'unread',
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 3 * 24 * 60 * 60 * 1000)), // Random time in the last 3 days
            isRead: Math.random() > 0.3
          }
        });
        notifications.push(maintenanceNotification);
      }
    }
    
    // Status report notification for police
    for (const policeOfficer of police) {
      if (Math.random() > 0.6) { // Only for some police
        const statusNotification = await prisma.notification.create({
          data: {
            policeId: policeOfficer.id,
            title: 'Laporan Kinerja Mingguan',
            message: 'Laporan kinerja mingguan Anda telah tersedia. Total penugasan: 12, Waktu respons rata-rata: 8 menit, Tingkat penyelesaian: 98%.',
            type: 'report',
            status: 'unread',
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)), // Random time in the last week
            isRead: Math.random() > 0.4
          }
        });
        notifications.push(statusNotification);
      }
    }
  } catch (error) {
    console.error(`Error creating system notifications:`, error);
  }
  
  // Create remaining random notifications if needed
  console.log(`Creating additional random notifications...`);
  const remainingCount = Math.max(0, count - notifications.length);
  
  for (let i = 0; i < remainingCount; i++) {
    try {
      const notificationData = notificationFactory();
      const notification = await prisma.notification.create({ data: notificationData });
      notifications.push(notification);
    } catch (error) {
      console.error(`Error creating random notification ${i}:`, error);
    }
  }
  
  console.log(`Created ${notifications.length} notifications in total`);
  return notifications;
}

module.exports = { seedNotifications };