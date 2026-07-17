import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminSession } from '@/lib/admin'
import { prisma } from '@/lib/prisma'

const updateSchema = z.object({
  isHidden: z.boolean().optional(),
  status: z.enum(['HADIR', 'TIDAK_HADIR', 'BELUM_TAHU']).optional(),
})

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string; rsvpId: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const [{ id, rsvpId }, input] = await Promise.all([params, request.json().then((body) => updateSchema.parse(body))])
    const result = await prisma.weddingRsvp.updateMany({ where: { id: rsvpId, weddingId: id }, data: input })
    if (!result.count) return NextResponse.json({ error: 'RSVP tidak ditemukan.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Perubahan tidak valid.' }, { status: 400 })
    return NextResponse.json({ error: 'RSVP belum berhasil diubah.' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string; rsvpId: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, rsvpId } = await params
  const result = await prisma.weddingRsvp.deleteMany({ where: { id: rsvpId, weddingId: id } })
  if (!result.count) return NextResponse.json({ error: 'RSVP tidak ditemukan.' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
