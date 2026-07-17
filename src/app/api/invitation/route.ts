import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { normalizeIndonesianPhone } from '@/lib/phone'

const invitationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = invitationSchema.parse(body)
    const phone = normalizeIndonesianPhone(validatedData.phone)
    if (validatedData.phone && !phone) {
      return NextResponse.json({ error: 'Nomor HP harus berupa nomor Indonesia yang valid.' }, { status: 400 })
    }

    const invitation = await prisma.invitation.create({
      data: { ...validatedData, phone },
    })

    return NextResponse.json(invitation, { status: 201 })
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
    const invitations = await prisma.invitation.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(invitations)
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
