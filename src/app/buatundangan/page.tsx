import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { isAdminSession } from '@/lib/admin'
import { normalizeInvitationLocale } from '@/lib/invitation-locale'
import { prisma } from '@/lib/prisma'
import GuestForm from './guest-form'

export const metadata: Metadata = {
  title: 'Tambah Tamu | Rama & Mita',
  description: 'Tambahkan tamu dan buat pesan undangan personal Rama & Mita.',
  robots: { index: false, follow: false },
}

export default async function BuatUndanganPage() {
  if (!await isAdminSession()) redirect('/admin/login?callbackUrl=/buatundangan')

  const wedding = await prisma.wedding.findFirst({
    orderBy: { createdAt: 'asc' },
    include: {
      guests: {
        where: { isActive: true },
        orderBy: { createdAt: 'desc' },
        take: 8,
        select: {
          id: true,
          name: true,
          phone: true,
          slug: true,
          locale: true,
          isSent: true,
          sentAt: true,
          createdAt: true,
        },
      },
    },
  })

  if (!wedding) redirect('/dashboard')

  return (
    <GuestForm
      weddingId={wedding.id}
      recentGuests={wedding.guests.map((guest) => ({
        ...guest,
        locale: normalizeInvitationLocale(guest.locale),
        sentAt: guest.sentAt?.toISOString() || null,
        createdAt: guest.createdAt.toISOString(),
      }))}
      wedding={{
        groomName: wedding.groomShortName,
        brideName: wedding.brideShortName,
        groomFullName: wedding.groomFullName,
        brideFullName: wedding.brideFullName,
        eventDate: wedding.eventDate?.toISOString() || '',
        dateLabel: wedding.dateLabel || '-',
        timeLabel: wedding.timeLabel || '-',
        venueName: wedding.venueName || '-',
        venueAddress: wedding.venueAddress || '-',
        mapUrl: wedding.mapUrl || '-',
      }}
    />
  )
}
