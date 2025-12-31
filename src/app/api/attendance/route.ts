import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const attendanceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
  status: z.enum(['HADIR', 'TIDAK_HADIR', 'BELUM_TAHU']),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = attendanceSchema.parse(body)

    const attendance = await prisma.attendance.create({
      data: validatedData,
    })

    return NextResponse.json(attendance, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const attendances = await prisma.attendance.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(attendances)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
