import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { normalizeIndonesianPhone } from '@/lib/phone'

const attendanceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
  status: z.enum(['HADIR', 'TIDAK_HADIR', 'BELUM_TAHU']),
  message: z.string().optional(),
})

async function sendAdminNotification(attendance: {
  name: string
  phone: string | null
  status: 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU'
  message: string | null
}) {
  try {
    const adminNumber = '6289638435307'
    const adminNumber2 = '6287784790482'
    const token = process.env.FONNTE_API_TOKEN

    if (!adminNumber || !token) {
      console.log('Admin WhatsApp number or Fonnte token not configured')
      return
    }

    const statusText = {
      HADIR: '✅ Akan Hadir',
      TIDAK_HADIR: '❌ Tidak Dapat Hadir',
      BELUM_TAHU: '❓ Belum Tahu',
    }

    const message = `🔔 *Konfirmasi Kehadiran Baru*

Nama: ${attendance.name}
Status: ${statusText[attendance.status as keyof typeof statusText]}
Telepon: ${attendance.phone || '-'}
Pesan: ${attendance.message || '-'}

Waktu: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`

    const formData = new FormData()
    formData.append('target', adminNumber)
    formData.append('message', message)
    formData.append('countryCode', '62')

    const response = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: formData,
    })

    const formData2 = new FormData()
    formData2.append('target', adminNumber2)
    formData2.append('message', message)
    formData2.append('countryCode', '62')

    const response2 = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: formData2,
    })

    if (!response.ok) {
      console.error('Failed to send WhatsApp notification:', await response.text())
    }
    if (!response2.ok) {
      console.error('Failed to send second WhatsApp notification:', await response2.text())
    }
  } catch (error) {
    console.error('Error sending admin notification:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = attendanceSchema.parse(body)
    const phone = normalizeIndonesianPhone(validatedData.phone)
    if (validatedData.phone && !phone) {
      return NextResponse.json({ error: 'Nomor HP harus berupa nomor Indonesia yang valid.' }, { status: 400 })
    }

    const attendance = await prisma.attendance.create({
      data: { ...validatedData, phone },
    })

    // Send WhatsApp notification to admin (non-blocking)
    sendAdminNotification(attendance).catch(err => 
      console.error('Background notification failed:', err)
    )

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
    console.error('Error fetching attendances:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
