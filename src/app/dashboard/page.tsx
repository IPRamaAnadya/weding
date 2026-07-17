import { notFound } from 'next/navigation'
import { normalizeInvitationLocale } from '@/lib/invitation-locale'
import { prisma } from '@/lib/prisma'
import WeddingManager from './weddings/[id]/wedding-manager'

export default async function DashboardPage() {
  const weddingRecord = await prisma.wedding.findFirst({ select: { id: true }, orderBy: { createdAt: 'asc' } })
  if (!weddingRecord) notFound()
  const id = weddingRecord.id

  const [wedding, pageViews, opens, uniqueSessions] = await Promise.all([
    prisma.wedding.findUnique({
      where: { id },
      include: {
        guests: {
          orderBy: { createdAt: 'desc' },
          include: { rsvp: true, _count: { select: { analytics: { where: { event: 'OPEN_INVITATION' } } } } },
        },
        rsvps: { orderBy: { createdAt: 'desc' } },
      },
    }),
    prisma.weddingAnalytics.count({ where: { weddingId: id, event: 'PAGE_VIEW' } }),
    prisma.weddingAnalytics.count({ where: { weddingId: id, event: 'OPEN_INVITATION' } }),
    prisma.weddingAnalytics.findMany({
      where: { weddingId: id, event: 'PAGE_VIEW', sessionKey: { not: null } },
      distinct: ['sessionKey'],
      select: { sessionKey: true },
    }),
  ])

  if (!wedding) notFound()

  return <WeddingManager wedding={{
    ...wedding,
    eventDate: wedding.eventDate?.toISOString() || null,
    createdAt: wedding.createdAt.toISOString(),
    updatedAt: wedding.updatedAt.toISOString(),
    guests: wedding.guests.map((guest) => ({
      ...guest,
      locale: normalizeInvitationLocale(guest.locale),
      sentAt: guest.sentAt?.toISOString() || null,
      createdAt: guest.createdAt.toISOString(),
      updatedAt: guest.updatedAt.toISOString(),
      rsvp: guest.rsvp ? { ...guest.rsvp, createdAt: guest.rsvp.createdAt.toISOString(), updatedAt: guest.rsvp.updatedAt.toISOString() } : null,
    })),
    rsvps: wedding.rsvps.map((rsvp) => ({ ...rsvp, createdAt: rsvp.createdAt.toISOString(), updatedAt: rsvp.updatedAt.toISOString() })),
  }} analytics={{ pageViews, opens, uniqueViews: uniqueSessions.length }} />
}
