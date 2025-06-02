const { prisma } = require('../src/libs/configs/prisma.config'); // Sesuaikan path jika perlu
const bcrypt = require('bcryptjs');

async function main() {
  // Hash password sekali saja, gunakan untuk semua user demo
  const passwordPlain = '@Test123';
  const passwordHash = await bcrypt.hash(passwordPlain, 10);

  // 1. Owner
  const owner = await prisma.owner.upsert({
    where: { email: 'owner@example.com' },
    update: {},
    create: {
      name: "Owner Satu",
      email: "owner@example.com",
      phone: "081234567891",
      address: "Kota Padang",
      passwordHash,
      latitude: -0.94924,
      longitude: 100.35427,
    },
  });

  // 2. Officer
  const officer = await prisma.officer.upsert({
    where: { email: 'officer@example.com' },
    update: {},
    create: {
      name: "Officer Satu",
      email: "officer@example.com",
      phone: "081234567892",
      address: "Kota Padang",
      passwordHash,
      latitude: -0.94934,
      longitude: 100.35437,
      vehicleType: "Motor",
      licensePlate: "BA1234XX",
      status: "available",
    },
  });

  // 3. Police
  const police = await prisma.police.upsert({
    where: { email: 'police@example.com' },
    update: {},
    create: {
      name: "Police Satu",
      email: "police@example.com",
      phone: "081234567893",
      address: "Kota Padang",
      passwordHash,
      latitude: -0.94954,
      longitude: 100.35457,
      officeName: "Polres Padang",
      status: "available",
    },
  });

  // 4. CCTV (milik owner)
  const cctv = await prisma.cCTV.upsert({
    where: { IP: "192.168.0.16" },
    update: {},
    create: {
      name: "CCTV Utama",
      ownerId: owner.id,
      location: "Depan Rumah",
      description: "CCTV Depan",
      IP: "192.168.0.16",
      cameraType: "IP Camera",
      streamUrl: "rtsp://192.168.0.16/stream",
      status: "online",
    }
  });

  // 5. Tambah beberapa report dari owner
  for (let i = 1; i <= 3; i++) {
    const report = await prisma.report.create({
      data: {
        cctvId: cctv.id,
        ownerId: owner.id,
        title: `Kejadian ${i}`,
        description: `Deskripsi laporan ke-${i}`,
        status: "new",
        location: `Jl. Padang No. ${10 + i}`,
        reportImage: `https://dummyimage.com/600x400/000/fff&text=Report+${i}`,
        incidentType: i % 2 === 0 ? "knife" : "gun",
        isAssigned: false,
      }
    });

    // 6. Evidence untuk tiap report
    await prisma.evidence.createMany({
      data: [
        {
          reportId: report.id,
          fileUrl: `https://dummyimage.com/400x300/000/fff&text=Evidence+${i}.1`,
          type: "photo"
        },
        {
          reportId: report.id,
          fileUrl: `https://dummyimage.com/400x300/000/fff&text=Evidence+${i}.2`,
          type: "video"
        },
      ]
    });

    // 7. Assignment officer ke report
    await prisma.assignment.create({
      data: {
        reportId: report.id,
        officerId: officer.id,
        assignedBy: police.id,
        assignedAt: new Date(),
      }
    });
  }

  // 8. Tracking (hanya untuk assignment pertama)
  const firstAssignment = await prisma.assignment.findFirst({ where: { officerId: officer.id } });
  if (firstAssignment) {
    await prisma.tracking.createMany({
      data: [
        {
          assignmentId: firstAssignment.id,
          officerId: officer.id,
          latitude: -0.95000,
          longitude: 100.35500,
          timestamp: new Date(),
          status: "on_the_way",
          description: "Menuju lokasi"
        },
        {
          assignmentId: firstAssignment.id,
          officerId: officer.id,
          latitude: -0.95010,
          longitude: 100.35510,
          timestamp: new Date(),
          status: "arrived",
          description: "Sudah sampai"
        }
      ]
    });
  }

  // 9. Notification
  await prisma.notification.createMany({
    data: [
      {
        ownerId: owner.id,
        title: "Laporan Diterima",
        message: "Laporan anda sedang diproses.",
        type: "report",
        status: "unread",
        image: "",
        isRead: false,
      },
      {
        officerId: officer.id,
        title: "Penugasan Baru",
        message: "Anda mendapat tugas baru.",
        type: "assignment",
        status: "unread",
        image: "",
        isRead: false,
      },
      {
        policeId: police.id,
        title: "Verifikasi Laporan",
        message: "Mohon verifikasi laporan masuk.",
        type: "report",
        status: "unread",
        image: "",
        isRead: false,
      }
    ]
  });

  // 10. AuditLog
  await prisma.auditLog.createMany({
    data: [
      {
        entity: "Report",
        entityId: "dummy-id-report",
        action: "CREATE",
        actorOwnerId: owner.id,
        description: "Owner membuat laporan"
      },
      {
        entity: "Assignment",
        entityId: "dummy-id-assignment",
        action: "ASSIGN",
        actorOfficerId: officer.id,
        description: "Officer menerima tugas"
      }
    ]
  });
}

main()
  .then(() => {
    console.log('Seeding selesai!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
