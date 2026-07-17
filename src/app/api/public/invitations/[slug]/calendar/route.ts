import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

function icsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function safeText(value: string) {
  return value.replace(/[\r\n]+/g, ' ').replace(/([,;\\])/g, '\\$1')
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const invitation = await prisma.weddingGuest.findFirst({
    where: { slug, isActive: true, wedding: { isPublished: true } },
    include: { wedding: true },
  })
  const wedding = invitation?.wedding
  if (!wedding?.eventDate) return new NextResponse('Calendar not available', { status: 404 })

  const endDate = new Date(wedding.eventDate.getTime() + 8 * 60 * 60 * 1000)
  const calendar = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedin//Wedding Invitation//ID',
    'BEGIN:VEVENT',
    `UID:${wedding.id}@wedin`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(wedding.eventDate)}`,
    `DTEND:${icsDate(endDate)}`,
    `SUMMARY:${safeText(wedding.name)}`,
    `LOCATION:${safeText([wedding.venueName, wedding.venueAddress].filter(Boolean).join(', '))}`,
    `DESCRIPTION:${safeText(`Pawiwahan ${wedding.groomFullName} dan ${wedding.brideFullName}`)}`,
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
