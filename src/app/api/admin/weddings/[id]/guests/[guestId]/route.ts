import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminSession } from '@/lib/admin'
import { prisma } from '@/lib/prisma'

const updateSchema = z.object({ isSent: z.boolean() })

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string; guestId: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const [{ id, guestId }, input] = await Promise.all([params, request.json().then((body) => updateSchema.parse(body))])
    const result = await prisma.weddingGuest.updateMany({
      where: { id: guestId, weddingId: id },
      data: { isSent: input.isSent, sentAt: input.isSent ? new Date() : null },
    })
    if (!result.count) return NextResponse.json({ error: 'Tamu tidak ditemukan.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Status tidak valid.' }, { status: 400 })
    return NextResponse.json({ error: 'Status belum berhasil diubah.' }, { status: 500 })
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
