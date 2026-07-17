'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Copy, MessageCircle, Pencil, X } from 'lucide-react'
import { getGuestInvitationPath, normalizeGuestSlug } from '@/lib/guest-slug'
import { generateInvitationMessage } from '@/lib/invitation-message'
import { invitationLocaleOptions, type InvitationLocale } from '@/lib/invitation-locale'
import { normalizeIndonesianPhone } from '@/lib/phone'

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

type EditForm = {
  name: string
  phone: string
  slug: string
  locale: InvitationLocale
}

export default function InvitationList({ weddingId, guests, wedding }: { weddingId: string; guests: Guest[]; wedding: WeddingMessage }) {
  const router = useRouter()
  const [activeAction, setActiveAction] = useState('')
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null)
  const [editForm, setEditForm] = useState<EditForm>({ name: '', phone: '', slug: '', locale: 'id' })
  const [editError, setEditError] = useState('')
  const [savingEdit, setSavingEdit] = useState(false)

  useEffect(() => {
    if (!editingGuest) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !savingEdit) setEditingGuest(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [editingGuest, savingEdit])

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

  const openEdit = (guest: Guest) => {
    setEditingGuest(guest)
    setEditForm({ name: guest.name, phone: guest.phone || '', slug: guest.slug, locale: guest.locale })
    setEditError('')
  }

  const saveEdit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!editingGuest) return

    const slug = normalizeGuestSlug(editForm.slug)
    if (!slug) return setEditError('Slug tamu belum valid.')
    const phone = editForm.phone.trim() ? normalizeIndonesianPhone(editForm.phone) : null
    if (editForm.phone.trim() && !phone) {
      return setEditError('Nomor WhatsApp belum valid. Gunakan nomor Indonesia seperti 0877... atau 62877...')
    }

    setSavingEdit(true)
    setEditError('')
    try {
      const response = await fetch(`/api/admin/weddings/${weddingId}/guests/${editingGuest.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editForm.name.trim(),
          phone: phone || '',
          slug,
          locale: editForm.locale,
        }),
      })
      const data = await response.json()
      if (!response.ok) return setEditError(data.error || 'Perubahan belum berhasil disimpan.')

      setEditingGuest(null)
      router.refresh()
    } catch {
      setEditError('Koneksi bermasalah. Silakan coba kembali.')
    } finally {
      setSavingEdit(false)
    }
  }

  if (guests.length === 0) return <div className="bg-[#fbfaf6] px-6 py-16 text-center text-sm text-black/45">Belum ada undangan.</div>

  return (
    <>
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
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => openEdit(guest)} className="inline-flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[9px] uppercase tracking-wider"><Pencil size={14} /> Edit</button>
            <button type="button" onClick={() => copyMessage(guest)} className="inline-flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[9px] uppercase tracking-wider">{activeAction === `copy-${guest.id}` ? <Check size={14} /> : <Copy size={14} />} {activeAction === `copy-${guest.id}` ? 'Tersalin' : 'Copy'}</button>
            <button type="button" onClick={() => sendWhatsApp(guest)} disabled={!guest.phone} title={guest.phone ? 'Kirim melalui WhatsApp' : 'Tambahkan nomor HP untuk mengirim WhatsApp'} className="inline-flex items-center gap-2 bg-[#1f7a4d] px-4 py-2.5 text-[9px] uppercase tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-30">{activeAction === `wa-${guest.id}` ? <Check size={14} /> : <MessageCircle size={14} />} WhatsApp</button>
          </div>
          </article>
        ))}
      </div>

      {editingGuest && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !savingEdit) setEditingGuest(null)
          }}
        >
          <section role="dialog" aria-modal="true" aria-labelledby="edit-invitation-title" className="relative w-full max-w-xl bg-[#fbfaf6] p-6 shadow-2xl md:p-9">
            <button type="button" onClick={() => setEditingGuest(null)} disabled={savingEdit} aria-label="Tutup form edit" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/50 transition-colors hover:text-black disabled:opacity-30"><X size={17} /></button>

            <div className="mb-8 border-b border-black/10 pb-6 pr-12">
              <p className="text-[9px] uppercase tracking-[0.18em] text-black/40">Edit invitation</p>
              <h2 id="edit-invitation-title" className="mt-2 font-serif text-3xl">Ubah data tamu</h2>
              <p className="mt-2 text-sm leading-6 text-black/45">Perubahan nama, slug, dan bahasa langsung diterapkan pada link serta template pesan tamu.</p>
            </div>

            <form onSubmit={saveEdit} className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-black/45">Nama tamu *</span>
                <input autoFocus required value={editForm.name} onChange={(event) => setEditForm((current) => ({ ...current, name: event.target.value }))} className="w-full border-0 border-b border-black/20 bg-transparent py-3 outline-none focus:border-black" />
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-black/45">Nomor WhatsApp</span>
                <input type="tel" inputMode="tel" value={editForm.phone} onChange={(event) => setEditForm((current) => ({ ...current, phone: event.target.value }))} onBlur={() => { const phone = normalizeIndonesianPhone(editForm.phone); if (phone) setEditForm((current) => ({ ...current, phone })) }} placeholder="0877 1234 5678" className="w-full border-0 border-b border-black/20 bg-transparent py-3 outline-none focus:border-black" />
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-black/45">Slug undangan *</span>
                <div className="flex items-end border-b border-black/20 focus-within:border-black">
                  <span className="py-3 text-sm text-black/35">/i/</span>
                  <input required value={editForm.slug} onChange={(event) => setEditForm((current) => ({ ...current, slug: event.target.value }))} onBlur={() => setEditForm((current) => ({ ...current, slug: normalizeGuestSlug(current.slug) }))} className="min-w-0 flex-1 border-0 bg-transparent py-3 outline-none" />
                </div>
                <small className="mt-2 block break-all text-xs text-black/38">Preview: {getGuestInvitationPath(editForm.slug || editingGuest.slug)}</small>
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-black/45">Bahasa undangan *</span>
                <select value={editForm.locale} onChange={(event) => setEditForm((current) => ({ ...current, locale: event.target.value as InvitationLocale }))} className="w-full border-0 border-b border-black/20 bg-transparent py-3 outline-none focus:border-black">
                  {invitationLocaleOptions.map((option) => <option key={option.value} value={option.value}>{option.label} — {option.context}</option>)}
                </select>
              </label>

              {editError && <p role="alert" className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm leading-5 text-red-800">{editError}</p>}

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button type="button" onClick={() => setEditingGuest(null)} disabled={savingEdit} className="border border-black/15 px-5 py-3 text-[9px] uppercase tracking-[0.14em] disabled:opacity-30">Batal</button>
                <button type="submit" disabled={savingEdit} className="bg-[#171816] px-6 py-3 text-[9px] uppercase tracking-[0.14em] text-white disabled:cursor-wait disabled:opacity-45">{savingEdit ? 'Menyimpan...' : 'Simpan perubahan'}</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  )
}
