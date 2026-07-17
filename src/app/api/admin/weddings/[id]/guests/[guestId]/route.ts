import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminSession } from '@/lib/admin'
import { normalizeGuestSlug } from '@/lib/guest-slug'
import { invitationLocaleValues } from '@/lib/invitation-locale'
import { normalizeIndonesianPhone } from '@/lib/phone'
import { prisma } from '@/lib/prisma'

const updateSchema = z.union([
  z.object({ isSent: z.boolean() }),
  z.object({
    name: z.string().trim().min(1).max(120),
    slug: z.string().trim().min(1).max(80),
    phone: z.string().trim().max(30).optional(),
    locale: z.enum(invitationLocaleValues),
  }),
])

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string; guestId: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const [{ id, guestId }, input] = await Promise.all([params, request.json().then((body) => updateSchema.parse(body))])
    const existingGuest = await prisma.weddingGuest.findFirst({
      where: { id: guestId, weddingId: id },
      select: { id: true },
    })
    if (!existingGuest) return NextResponse.json({ error: 'Tamu tidak ditemukan.' }, { status: 404 })

    if ('isSent' in input) {
      await prisma.weddingGuest.update({
        where: { id: guestId },
        data: { isSent: input.isSent, sentAt: input.isSent ? new Date() : null },
      })
      return NextResponse.json({ ok: true })
    }

    const slug = normalizeGuestSlug(input.slug)
    if (!slug) return NextResponse.json({ error: 'Slug tamu tidak valid.' }, { status: 400 })
    const duplicateSlug = await prisma.weddingGuest.findFirst({
      where: { slug: { equals: slug, mode: 'insensitive' }, NOT: { id: guestId } },
      select: { id: true },
    })
    if (duplicateSlug) return NextResponse.json({ error: 'Slug sudah digunakan oleh tamu lain.' }, { status: 409 })

    const phone = normalizeIndonesianPhone(input.phone)
    if (input.phone && !phone) {
      return NextResponse.json({ error: 'Nomor HP harus berupa nomor Indonesia yang valid.' }, { status: 400 })
    }

    const guest = await prisma.weddingGuest.update({
      where: { id: guestId },
      data: { name: input.name, slug, phone, locale: input.locale },
    })
    return NextResponse.json(guest)
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Data tamu tidak valid.' }, { status: 400 })
    return NextResponse.json({ error: 'Perubahan tamu belum berhasil disimpan.' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string; guestId: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, guestId } = await params
  const result = await prisma.weddingGuest.updateMany({
    where: { id: guestId, weddingId: id },
    data: { isActive: false },
  })
  if (!result.count) return NextResponse.json({ error: 'Tamu tidak ditemukan.' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
