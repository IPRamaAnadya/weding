import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminSession } from '@/lib/admin'
import { normalizeGuestSlug } from '@/lib/guest-slug'
import { invitationLocaleValues } from '@/lib/invitation-locale'
import { normalizeIndonesianPhone } from '@/lib/phone'
import { prisma } from '@/lib/prisma'

const guestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  slug: z.string().trim().min(1).max(80),
  phone: z.string().trim().max(30).optional(),
  locale: z.enum(invitationLocaleValues).default('id'),
})

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const guests = await prisma.weddingGuest.findMany({
    where: { weddingId: id },
    orderBy: { createdAt: 'desc' },
    include: { rsvp: true, _count: { select: { analytics: { where: { event: 'OPEN_INVITATION' } } } } },
  })
  return NextResponse.json(guests)
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params
    const input = guestSchema.parse(await request.json())
    const wedding = await prisma.wedding.findUnique({ where: { id }, select: { id: true } })
    if (!wedding) return NextResponse.json({ error: 'Wedding tidak ditemukan.' }, { status: 404 })
    const slug = normalizeGuestSlug(input.slug)
    if (!slug) return NextResponse.json({ error: 'Slug tamu tidak valid.' }, { status: 400 })
    const existingSlug = await prisma.weddingGuest.findUnique({ where: { slug }, select: { id: true } })
    if (existingSlug) return NextResponse.json({ error: 'Slug sudah digunakan. Silakan ubah slug tamu.' }, { status: 409 })

    const phone = normalizeIndonesianPhone(input.phone)
    if (input.phone && !phone) {
      return NextResponse.json({ error: 'Nomor HP harus berupa nomor Indonesia yang valid.' }, { status: 400 })
    }

    const guest = await prisma.weddingGuest.create({
      data: {
        weddingId: id,
        slug,
        name: input.name,
        phone,
        locale: input.locale,
        groupName: null,
        maxGuests: 1,
      },
    })
    return NextResponse.json(guest, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Data tamu tidak valid.' }, { status: 400 })
    return NextResponse.json({ error: 'Tamu belum berhasil ditambahkan.' }, { status: 500 })
  }
}
