import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../src/generated/client/index.js'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

try {
  const existing = await prisma.wedding.findUnique({ where: { key: 'rama' } })
  const wedding = existing || await prisma.wedding.create({
    data: {
      key: 'rama',
      name: 'The Wedding of Rama & Mita',
      groomShortName: 'Rama',
      brideShortName: 'Mita',
      groomFullName: 'I Putu Rama Anadya, S.Kom.',
      brideFullName: 'Ni Putu Mita Pramesti, S.Kom.',
      groomParents: 'I Wayan Sutarjana & Ni Komang Sumerti',
      brideParents: 'I Putu Suastika & Ni Made Ariasih',
      groomChildOrder: 'Anak kelima dari',
      brideChildOrder: 'Anak pertama dari',
      eventDate: new Date('2026-08-22T15:00:00+08:00'),
      dateLabel: 'Sabtu, 22 Agustus 2026',
      timeLabel: '15.00 WITA – Selesai',
      venueName: 'Pura Siwa',
      venueAddress: 'Banjar Dinas Margasari, Desa Pujungan, Kecamatan Pupuan, Kabupaten Tabanan, Bali 82163',
      mapUrl: 'https://maps.app.goo.gl/pbg97NqcpT4rkQ7k7',
      template: 'RAMA',
      isPublished: true,
    },
  })

  const defaultGuest = await prisma.weddingGuest.findUnique({ where: { slug: 'tamu' } })
  const legacyDefaultGuest = await prisma.weddingGuest.findUnique({ where: { slug: 'Tamu' } })
  if (legacyDefaultGuest && !defaultGuest) {
    await prisma.weddingGuest.update({ where: { id: legacyDefaultGuest.id }, data: { slug: 'tamu' } })
  }

  await prisma.weddingGuest.upsert({
    where: { slug: 'tamu' },
    update: { weddingId: wedding.id, name: 'Tamu Terhormat', isActive: true },
    create: {
      weddingId: wedding.id,
      slug: 'tamu',
      name: 'Tamu Terhormat',
      groupName: 'Umum',
    },
  })
} finally {
  await prisma.$disconnect()
}
