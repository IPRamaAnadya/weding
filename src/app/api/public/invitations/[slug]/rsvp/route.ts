import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { normalizeGuestSlugParam } from '@/lib/guest-slug'
import { normalizeIndonesianPhone } from '@/lib/phone'
import { prisma } from '@/lib/prisma'

const rsvpSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().max(30).optional(),
  status: z.enum(['HADIR', 'TIDAK_HADIR', 'BELUM_TAHU']),
  message: z.string().trim().max(1000).optional(),
  guestCount: z.coerce.number().int().min(1).max(20).optional(),
})

async function findGuest(slug: string) {
  const normalizedSlug = normalizeGuestSlugParam(slug)
  return prisma.weddingGuest.findFirst({
    where: { slug: { equals: normalizedSlug, mode: 'insensitive' }, isActive: true, wedding: { isPublished: true } },
  })
}

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guest = await findGuest(slug)
  if (!guest) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const rsvps = await prisma.weddingRsvp.findMany({
    where: { weddingId: guest.weddingId, isHidden: false, message: { not: null } },
    orderBy: { createdAt: 'desc' },
    take: 30,
    select: { id: true, name: true, status: true, message: true },
  })
  return NextResponse.json(rsvps.map((rsvp) => ({ ...rsvp, message: rsvp.message || '' })))
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const [{ slug }, input] = await Promise.all([params, request.json().then((body) => rsvpSchema.parse(body))])
    const guest = await findGuest(slug)
    if (!guest) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const phone = normalizeIndonesianPhone(input.phone) || guest.phone
    if (input.phone && !normalizeIndonesianPhone(input.phone)) {
      return NextResponse.json({ error: 'Nomor HP harus berupa nomor Indonesia yang valid.' }, { status: 400 })
    }

    const data = {
      weddingId: guest.weddingId,
      name: guest.name,
      phone: phone || null,
      status: input.status,
      message: input.message || null,
      guestCount: Math.min(input.guestCount || 1, guest.maxGuests),
    }
    const rsvp = await prisma.weddingRsvp.upsert({
      where: { guestId: guest.id },
      update: data,
      create: { ...data, guestId: guest.id },
    })

    await prisma.weddingAnalytics.create({ data: { weddingId: guest.weddingId, guestId: guest.id, event: 'RSVP_SUBMIT' } })
    return NextResponse.json(rsvp, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Data konfirmasi tidak valid.' }, { status: 400 })
    return NextResponse.json({ error: 'Konfirmasi belum berhasil disimpan.' }, { status: 500 })
  }
}
