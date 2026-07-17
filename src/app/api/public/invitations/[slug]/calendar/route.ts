import { NextResponse } from 'next/server'
import { normalizeGuestSlugParam } from '@/lib/guest-slug'
import { normalizeInvitationLocale } from '@/lib/invitation-locale'
import { prisma } from '@/lib/prisma'

function icsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function safeText(value: string) {
  return value.replace(/[\r\n]+/g, ' ').replace(/([,;\\])/g, '\\$1')
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const normalizedSlug = normalizeGuestSlugParam(slug)
  const invitation = await prisma.weddingGuest.findFirst({
    where: { slug: { equals: normalizedSlug, mode: 'insensitive' }, isActive: true, wedding: { isPublished: true } },
    include: { wedding: true },
  })
  const eventDate = invitation?.wedding.eventDate
  if (!eventDate) return new NextResponse('Calendar not available', { status: 404 })

  const wedding = invitation.wedding
  const locale = normalizeInvitationLocale(invitation.locale)
  const calendarCopy = {
    id: {
      summary: `Pawiwahan ${wedding.groomShortName} & ${wedding.brideShortName}`,
      description: `Pawiwahan ${wedding.groomFullName} dan ${wedding.brideFullName}`,
    },
    en: {
      summary: `Wedding of ${wedding.groomShortName} & ${wedding.brideShortName}`,
      description: `Wedding celebration of ${wedding.groomFullName} and ${wedding.brideFullName}`,
    },
    yue: {
      summary: `${wedding.groomShortName} 與 ${wedding.brideShortName} 嘅婚禮`,
      description: `誠邀您出席 ${wedding.groomFullName} 與 ${wedding.brideFullName} 嘅婚禮`,
    },
    ja: {
      summary: `${wedding.groomShortName}と${wedding.brideShortName}の結婚式`,
      description: `${wedding.groomFullName}と${wedding.brideFullName}の結婚式のご案内`,
    },
  }[locale]
  const endDate = new Date(eventDate.getTime() + 8 * 60 * 60 * 1000)
  const calendar = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedin//Wedding Invitation//ID',
    'BEGIN:VEVENT',
    `UID:${wedding.id}@wedin`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(eventDate)}`,
    `DTEND:${icsDate(endDate)}`,
    `SUMMARY:${safeText(calendarCopy.summary)}`,
    `LOCATION:${safeText([wedding.venueName, wedding.venueAddress].filter(Boolean).join(', '))}`,
    `DESCRIPTION:${safeText(calendarCopy.description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return new NextResponse(calendar, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="rama-mita-wedding.ics"',
    },
  })
}
