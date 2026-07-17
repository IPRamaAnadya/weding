import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminSession } from '@/lib/admin'
import { prisma } from '@/lib/prisma'

const updateSchema = z.object({
  name: z.string().trim().min(3).max(100),
  groomShortName: z.string().trim().min(1).max(60),
  brideShortName: z.string().trim().min(1).max(60),
  groomFullName: z.string().trim().min(1).max(120),
  brideFullName: z.string().trim().min(1).max(120),
  groomParents: z.string().trim().max(200).nullable().optional(),
  brideParents: z.string().trim().max(200).nullable().optional(),
  groomChildOrder: z.string().trim().max(80).nullable().optional(),
  brideChildOrder: z.string().trim().max(80).nullable().optional(),
  eventDate: z.string().datetime().nullable().optional(),
  dateLabel: z.string().trim().max(100).nullable().optional(),
  timeLabel: z.string().trim().max(100).nullable().optional(),
  venueName: z.string().trim().max(150).nullable().optional(),
  venueAddress: z.string().trim().max(300).nullable().optional(),
  mapUrl: z.string().url().nullable().optional(),
  isPublished: z.boolean(),
})

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdminSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params
    const input = updateSchema.parse(await request.json())

    const wedding = await prisma.wedding.update({
      where: { id },
      data: {
        ...input,
        eventDate: input.eventDate ? new Date(input.eventDate) : null,
      },
    })
    return NextResponse.json(wedding)
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Data tidak valid.', details: error.issues }, { status: 400 })
    return NextResponse.json({ error: 'Perubahan belum berhasil disimpan.' }, { status: 500 })
  }
}
