'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Copy, MessageCircle } from 'lucide-react'
import { getGuestInvitationPath } from '@/lib/guest-slug'
import { generateInvitationMessage } from '@/lib/invitation-message'
import { invitationLocaleOptions, type InvitationLocale } from '@/lib/invitation-locale'

type Guest = {
  id: string
  name: string
  phone: string | null
  slug: string
  locale: InvitationLocale
  isSent: boolean
  sentAt: string | null
  opened: number
  rsvpStatus: 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU' | null
}

type WeddingMessage = Omit<Parameters<typeof generateInvitationMessage>[0], 'locale' | 'guestName' | 'invitationUrl'>

export default function InvitationList({ weddingId, guests, wedding }: { weddingId: string; guests: Guest[]; wedding: WeddingMessage }) {
  const router = useRouter()
  const [activeAction, setActiveAction] = useState('')

  const messageFor = (guest: Guest) => generateInvitationMessage({
    ...wedding,
    locale: guest.locale,
    guestName: guest.name,
    invitationUrl: `${window.location.origin}${getGuestInvitationPath(guest.slug)}`,
  })

  const markAsSent = async (guestId: string) => {
    await fetch(`/api/admin/weddings/${weddingId}/guests/${guestId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isSent: true }),
    })
    router.refresh()
  }

  const copyMessage = async (guest: Guest) => {
    await navigator.clipboard.writeText(messageFor(guest))
    setActiveAction(`copy-${guest.id}`)
    await markAsSent(guest.id)
    window.setTimeout(() => setActiveAction(''), 1600)
  }

  const sendWhatsApp = async (guest: Guest) => {
    if (!guest.phone) return
    const message = messageFor(guest)
    window.open(`https://wa.me/${guest.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    await navigator.clipboard.writeText(message)
    setActiveAction(`wa-${guest.id}`)
    await markAsSent(guest.id)
    window.setTimeout(() => setActiveAction(''), 1600)
  }

  if (guests.length === 0) return <div className="bg-[#fbfaf6] px-6 py-16 text-center text-sm text-black/45">Belum ada undangan.</div>

  return (
    <div className="divide-y divide-black/10 bg-[#fbfaf6]">
      {guests.map((guest) => (
        <article key={guest.id} className="grid gap-5 p-5 md:grid-cols-[1fr_0.75fr_0.65fr_auto] md:items-center md:p-7">
          <div>
            <h2 className="font-serif text-xl">{guest.name}</h2>
            <p className="mt-1 text-xs text-black/40">/i/{guest.slug}{guest.phone ? ` · ${guest.phone}` : ''}</p>
            <span className="mt-2 inline-block text-[8px] uppercase tracking-[0.12em] text-black/35">{invitationLocaleOptions.find((option) => option.value === guest.locale)?.context}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1.5 text-[8px] uppercase tracking-wider ${guest.isSent ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{guest.isSent ? 'Sudah dikirim' : 'Belum dikirim'}</span>
            {guest.rsvpStatus && <span className="bg-black/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-wider text-black/55">{guest.rsvpStatus.replaceAll('_', ' ')}</span>}
          </div>
          <p className="text-xs text-black/45">Dibuka {guest.opened} kali{guest.sentAt ? ` · ${new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(new Date(guest.sentAt))}` : ''}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => copyMessage(guest)} className="inline-flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[9px] uppercase tracking-wider">{activeAction === `copy-${guest.id}` ? <Check size={14} /> : <Copy size={14} />} {activeAction === `copy-${guest.id}` ? 'Tersalin' : 'Copy'}</button>
            <button type="button" onClick={() => sendWhatsApp(guest)} disabled={!guest.phone} title={guest.phone ? 'Kirim melalui WhatsApp' : 'Tambahkan nomor HP untuk mengirim WhatsApp'} className="inline-flex items-center gap-2 bg-[#1f7a4d] px-4 py-2.5 text-[9px] uppercase tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-30">{activeAction === `wa-${guest.id}` ? <Check size={14} /> : <MessageCircle size={14} />} WhatsApp</button>
          </div>
        </article>
      ))}
    </div>
  )
}
