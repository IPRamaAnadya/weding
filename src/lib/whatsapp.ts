// lib/whatsapp.ts
interface WhatsAppMessage {
  target: string // Format: '08123456789|Name|Role' or '08123456789'
  message: string // Can include variables like {name}, {var1}
  url?: string // Optional image URL
  filename?: string
  delay?: string
  countryCode?: string
}

export async function sendWhatsAppMessage(data: WhatsAppMessage) {
  try {
    const response = await fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send WhatsApp message')
    }

    return result
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    throw error
  }
}

// Helper function to format target with name
export function formatWhatsAppTarget(
  phone: string,
  name: string,
  role: string = 'Guest'
): string {
  return `${phone}|${name}|${role}`
}

// Helper function to send invitation
export async function sendInvitation(
  phone: string,
  guestName: string,
  invitationUrl: string
) {
  const message = `
Halo {name},

Kami dengan senang hati mengundang Anda untuk hadir di pernikahan kami:

*Riki & Wulan*

📅 Rabu, 09 Januari 2026
⏰ 14:00 - Selesai
📍 Br. Tanah Sari, Ds. Pajahan, Pupuan, Tabanan, Bali

Silakan buka undangan digital Anda:
${invitationUrl}

Terima kasih dan kami tunggu kehadiran Anda! 🙏
  `.trim()

  const target = formatWhatsAppTarget(phone, guestName)

  return sendWhatsAppMessage({
    target,
    message,
    countryCode: '62',
    delay: '2',
  })
}

// Helper function to send RSVP confirmation
export async function sendRSVPConfirmation(
  phone: string,
  guestName: string,
  status: 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU'
) {
  const statusText = {
    HADIR: '✅ akan hadir',
    TIDAK_HADIR: '❌ tidak dapat hadir',
    BELUM_TAHU: '❓ belum tahu',
  }

  const message = `
Terima kasih {name}! 

Konfirmasi Anda telah kami terima:
Status: ${statusText[status]}

Sampai jumpa di hari bahagia kami! 💑
  `.trim()

  const target = formatWhatsAppTarget(phone, guestName)

  return sendWhatsAppMessage({
    target,
    message,
    countryCode: '62',
  })
}
