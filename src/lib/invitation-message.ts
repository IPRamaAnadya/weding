import type { InvitationLocale } from '@/lib/invitation-locale'

export type InvitationMessageData = {
  locale: InvitationLocale
  guestName: string
  invitationUrl: string
  groomName: string
  brideName: string
  groomFullName: string
  brideFullName: string
  eventDate: string
  dateLabel: string
  timeLabel: string
  venueName: string
  venueAddress: string
  mapUrl: string
}

function eventLabels(data: InvitationMessageData) {
  if (data.locale === 'id' || !data.eventDate) {
    return { date: data.dateLabel, time: data.timeLabel }
  }

  const eventDate = new Date(data.eventDate)
  if (Number.isNaN(eventDate.getTime())) {
    return { date: data.dateLabel, time: data.timeLabel }
  }

  const intlLocale = data.locale === 'en' ? 'en-US' : data.locale === 'yue' ? 'zh-HK' : 'ja-JP'
  const date = new Intl.DateTimeFormat(intlLocale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Makassar',
  }).format(eventDate)
  const formattedTime = new Intl.DateTimeFormat(intlLocale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: data.locale === 'en',
    timeZone: 'Asia/Makassar',
    timeZoneName: 'short',
  }).format(eventDate)
  const onwards = data.locale === 'en' ? 'onwards' : data.locale === 'yue' ? '開始' : '開始'

  return { date, time: `${formattedTime} ${onwards}` }
}

function indonesianMessage(data: InvitationMessageData, date: string, time: string) {
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

📅 ${date}
⏰ ${time}
📍 ${data.venueName}
${data.venueAddress}

Google Maps:
${data.mapUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doa restunya kami ucapkan terima kasih.

ᬒᬵᬁ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬒᬵᬁ`
}

function englishMessage(data: InvitationMessageData, date: string, time: string) {
  return `Dear *${data.guestName}*,

Om Swastiastu,

With the blessings of Ida Sang Hyang Widhi Wasa, we warmly invite you to join our Balinese wedding ceremony (pawiwahan):

*${data.groomName} & ${data.brideName}*
${data.groomFullName}
and
${data.brideFullName}

Please open our invitation for the complete details:
${data.invitationUrl}

*DATE & VENUE* 👇

📅 ${date}
⏰ ${time}
📍 ${data.venueName}
${data.venueAddress}

Google Maps:
${data.mapUrl}

It would be an honour and a joy to celebrate with you. Thank you for your presence, prayers, and blessings.

Om Shanti, Shanti, Shanti Om`
}

function cantoneseMessage(data: InvitationMessageData, date: string, time: string) {
  return `敬愛的 *${data.guestName}*：

Om Swastiastu，

承蒙 Ida Sang Hyang Widhi Wasa 賜福，我哋誠意邀請您出席我哋嘅巴厘傳統婚禮（Pawiwahan）：

*${data.groomName} & ${data.brideName}*
${data.groomFullName}
與
${data.brideFullName}

完整婚禮詳情請開啟以下邀請連結：
${data.invitationUrl}

*日期及地點* 👇

📅 ${date}
⏰ ${time}
📍 ${data.venueName}
${data.venueAddress}

Google Maps：
${data.mapUrl}

您嘅蒞臨同祝福，將會係我哋莫大嘅榮幸與喜悅。衷心感謝您嘅關愛同祝福。

Om Shanti, Shanti, Shanti Om`
}

function japaneseMessage(data: InvitationMessageData, date: string, time: string) {
  return `*${data.guestName}* 様

謹啓

Ida Sang Hyang Widhi Wasaのご加護のもと、私たちはバリの伝統的な結婚式（Pawiwahan）を執り行う運びとなりました。謹んでご案内申し上げます。

*${data.groomName} & ${data.brideName}*
${data.groomFullName}
と
${data.brideFullName}

詳細は、こちらの招待状をご覧ください：
${data.invitationUrl}

*日時・会場* 👇

📅 ${date}
⏰ ${time}
📍 ${data.venueName}
${data.venueAddress}

Google Maps：
${data.mapUrl}

ご多用のところ恐縮ではございますが、ご臨席のうえ私たちの門出をお見守りいただけましたら幸いです。

謹白`
}

export function generateInvitationMessage(data: InvitationMessageData) {
  const { date, time } = eventLabels(data)

  if (data.locale === 'en') return englishMessage(data, date, time)
  if (data.locale === 'yue') return cantoneseMessage(data, date, time)
  if (data.locale === 'ja') return japaneseMessage(data, date, time)
  return indonesianMessage(data, date, time)
}
