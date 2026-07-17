import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const trackSchema = z.object({
  event: z.enum(['PAGE_VIEW', 'OPEN_INVITATION', 'MAP_CLICK', 'CALENDAR_CLICK']),
  sessionKey: z.string().max(100).optional(),
})

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const [{ slug }, input] = await Promise.all([params, request.json().then((body) => trackSchema.parse(body))])
    const guest = await prisma.weddingGuest.findFirst({
      where: { slug, isActive: true, wedding: { isPublished: true } },
      select: { id: true, weddingId: true },
    })
    if (!guest) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    await prisma.weddingAnalytics.create({
      data: {
        weddingId: guest.weddingId,
        guestId: guest.id,
        event: input.event,
        sessionKey: input.sessionKey || null,
      },
    })
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Invalid event' }, { status: 400 })
    return NextResponse.json({ error: 'Unable to track event' }, { status: 500 })
  }
}
