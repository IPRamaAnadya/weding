export type InvitationMessageData = {
  guestName: string
  invitationUrl: string
  groomName: string
  brideName: string
  groomFullName: string
  brideFullName: string
  dateLabel: string
  timeLabel: string
  venueName: string
  venueAddress: string
  mapUrl: string
}

export function generateInvitationMessage(data: InvitationMessageData) {
  return `Kepada Yth.
Bapak/Ibu/Saudara/i
*${data.guestName}*

ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ

Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pawiwahan kami:

*${data.groomName} & ${data.brideName}*
${data.groomFullName}
dan
${data.brideFullName}

Berikut link undangan kami untuk informasi lengkap:
${data.invitationUrl}

*WAKTU & TEMPAT ACARA* 👇

📅 ${data.dateLabel}
⏰ ${data.timeLabel}
📍 ${data.venueName}
${data.venueAddress}

Google Maps:
${data.mapUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doa restunya kami ucapkan terima kasih.

ᬒᬵᬁ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬒᬵᬁ`
}
