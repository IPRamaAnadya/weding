'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, Copy, ExternalLink, List, MessageCircle, Plus, UserPlus } from 'lucide-react'
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
  createdAt: string
}

type WeddingMessage = Omit<Parameters<typeof generateInvitationMessage>[0], 'locale' | 'guestName' | 'invitationUrl'>

export default function GuestForm({ weddingId, recentGuests: initialGuests, wedding }: {
  weddingId: string
  recentGuests: Guest[]
  wedding: WeddingMessage
}) {
  const [form, setForm] = useState<{ name: string; phone: string; slug: string; locale: InvitationLocale }>({ name: '', phone: '', slug: '', locale: 'id' })
  const [slugEdited, setSlugEdited] = useState(false)
  const [recentGuests, setRecentGuests] = useState(initialGuests)
  const [createdGuest, setCreatedGuest] = useState<Guest | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [activeAction, setActiveAction] = useState('')

  const previewSlug = useMemo(() => normalizeGuestSlug(form.slug || form.name), [form.name, form.slug])

  const invitationUrl = (guest: Guest) => `${window.location.origin}${getGuestInvitationPath(guest.slug)}`
  const messageFor = (guest: Guest) => generateInvitationMessage({
    ...wedding,
    locale: guest.locale,
    guestName: guest.name,
    invitationUrl: invitationUrl(guest),
  })

  const updateGuestSentState = (guestId: string) => {
    const sentAt = new Date().toISOString()
    setRecentGuests((guests) => guests.map((guest) => guest.id === guestId ? { ...guest, isSent: true, sentAt } : guest))
    setCreatedGuest((guest) => guest?.id === guestId ? { ...guest, isSent: true, sentAt } : guest)
  }

  const markAsSent = async (guestId: string) => {
    const response = await fetch(`/api/admin/weddings/${weddingId}/guests/${guestId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isSent: true }),
    })
    if (response.ok) updateGuestSentState(guestId)
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setCreatedGuest(null)

    const slug = normalizeGuestSlug(form.slug || form.name)
    const phone = form.phone.trim() ? normalizeIndonesianPhone(form.phone) : null
    if (!slug) {
      setError('Nama atau slug tamu belum valid.')
      return
    }
    if (form.phone.trim() && !phone) {
      setError('Nomor WhatsApp belum valid. Gunakan nomor Indonesia, misalnya 0877... atau 62877...')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(`/api/admin/weddings/${weddingId}/guests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), phone: phone || '', slug, locale: form.locale }),
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Tamu belum berhasil ditambahkan.')
        return
      }

      const guest: Guest = {
        id: data.id,
        name: data.name,
        phone: data.phone,
        slug: data.slug,
        locale: data.locale,
        isSent: data.isSent,
        sentAt: data.sentAt,
        createdAt: data.createdAt,
      }
      setCreatedGuest(guest)
      setRecentGuests((guests) => [guest, ...guests.filter((item) => item.id !== guest.id)].slice(0, 8))
      setForm({ name: '', phone: '', slug: '', locale: 'id' })
      setSlugEdited(false)
    } catch {
      setError('Koneksi bermasalah. Silakan coba simpan kembali.')
    } finally {
      setSubmitting(false)
    }
  }

  const copyMessage = async (guest: Guest) => {
    try {
      await navigator.clipboard.writeText(messageFor(guest))
      setActiveAction(`copy-${guest.id}`)
      await markAsSent(guest.id)
      window.setTimeout(() => setActiveAction(''), 1800)
    } catch {
      setError('Pesan belum dapat disalin. Pastikan izin clipboard tersedia.')
    }
  }

  const copyLink = async (guest: Guest) => {
    try {
      await navigator.clipboard.writeText(invitationUrl(guest))
      setActiveAction(`link-${guest.id}`)
      window.setTimeout(() => setActiveAction(''), 1800)
    } catch {
      setError('Link belum dapat disalin. Pastikan izin clipboard tersedia.')
    }
  }

  const sendWhatsApp = async (guest: Guest) => {
    if (!guest.phone) return
    const message = messageFor(guest)
    window.open(`https://wa.me/${guest.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    try {
      await navigator.clipboard.writeText(message)
    } catch {
      // WhatsApp already contains the complete message, so clipboard is optional here.
    }
    setActiveAction(`wa-${guest.id}`)
    await markAsSent(guest.id)
    window.setTimeout(() => setActiveAction(''), 1800)
  }

  return (
    <main className="min-h-screen bg-[#f3f0e9] px-5 py-8 text-[#171816] md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-black/45 transition-colors hover:text-black">
            <ArrowLeft size={14} /> Dashboard
          </Link>
          <Link href="/dashboard/invitations" className="inline-flex items-center gap-2 border border-black/15 px-4 py-2.5 text-[9px] uppercase tracking-[0.14em] transition-colors hover:border-black/40">
            <List size={14} /> Lihat semua undangan
          </Link>
        </nav>

        <header className="mb-9 max-w-2xl md:mb-12">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-black/40">Guest invitation</p>
          <h1 className="font-serif text-4xl tracking-[-0.045em] md:text-6xl">Tambah daftar tamu</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-black/50">Isi satu tamu, simpan, lalu kirim undangannya. Link personal dan format pesan akan dibuat secara otomatis.</p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={submit} className="bg-[#fbfaf6] p-6 shadow-[0_22px_70px_rgba(23,24,22,0.05)] md:p-9">
            <div className="mb-8 flex items-start gap-4 border-b border-black/10 pb-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171816] text-white"><UserPlus size={17} /></span>
              <div>
                <p className="text-[9px] uppercase tracking-[0.17em] text-black/40">Form tamu</p>
                <h2 className="mt-1 font-serif text-2xl">Data penerima undangan</h2>
              </div>
            </div>

            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.13em] text-black/50">Nama tamu *</span>
                <input
                  autoFocus
                  required
                  value={form.name}
                  onChange={(event) => {
                    const name = event.target.value
                    setForm((current) => ({ ...current, name, slug: slugEdited ? current.slug : normalizeGuestSlug(name) }))
                  }}
                  placeholder="Contoh: Bapak Made Sujana & Keluarga"
                  className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
                <small className="mt-2 block text-xs leading-5 text-black/38">Tulis nama seperti yang ingin ditampilkan pada undangan.</small>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.13em] text-black/50">Bahasa undangan *</span>
                <select
                  value={form.locale}
                  onChange={(event) => setForm((current) => ({ ...current, locale: event.target.value as InvitationLocale }))}
                  className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-black"
                >
                  {invitationLocaleOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label} — {option.context}</option>
                  ))}
                </select>
                <small className="mt-2 block text-xs leading-5 text-black/38">Menentukan bahasa awal undangan dan template pesan yang dikirim. Default: Indonesia.</small>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.13em] text-black/50">Nomor WhatsApp</span>
                <input
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  onBlur={() => {
                    const phone = normalizeIndonesianPhone(form.phone)
                    if (phone) setForm((current) => ({ ...current, phone }))
                  }}
                  placeholder="0877 1234 5678"
                  className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
                <small className="mt-2 block text-xs leading-5 text-black/38">Boleh dikosongkan. Nomor akan dirapikan otomatis menjadi format 628...</small>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.13em] text-black/50">Alamat link *</span>
                <div className="flex items-end border-b border-black/20 focus-within:border-black">
                  <span className="shrink-0 py-3 text-sm text-black/35">/i/</span>
                  <input
                    required
                    value={form.slug}
                    onChange={(event) => {
                      setSlugEdited(true)
                      setForm((current) => ({ ...current, slug: event.target.value }))
                    }}
                    onBlur={() => setForm((current) => ({ ...current, slug: normalizeGuestSlug(current.slug) }))}
                    placeholder="Nama+Tamu"
                    className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm outline-none placeholder:text-black/25"
                  />
                </div>
                <small className="mt-2 block break-all text-xs leading-5 text-black/38">Terisi dari nama dan tetap bisa diedit. Preview: /i/{previewSlug || 'Nama+Tamu'}</small>
              </label>
            </div>

            {error && <p role="alert" className="mt-6 border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm leading-5 text-red-800">{error}</p>}

            <button type="submit" disabled={submitting} className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#171816] px-6 py-4 text-[10px] uppercase tracking-[0.17em] text-white transition-opacity disabled:cursor-wait disabled:opacity-45">
              <Plus size={15} /> {submitting ? 'Menyimpan tamu...' : 'Simpan dan buat undangan'}
            </button>
          </form>

          <div className="space-y-8">
            {createdGuest ? (
              <section className="bg-[#1d211d] p-6 text-white shadow-[0_22px_70px_rgba(23,24,22,0.12)] md:p-9">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1d211d]"><Check size={18} /></span>
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">Berhasil ditambahkan</p>
                    <h2 className="mt-1 truncate font-serif text-2xl md:text-3xl">{createdGuest.name}</h2>
                    <a href={getGuestInvitationPath(createdGuest.slug)} target="_blank" rel="noreferrer" className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-xs text-white/55 hover:text-white">
                      /i/{createdGuest.slug} <ExternalLink size={12} className="shrink-0" />
                    </a>
                    <span className="mt-2 block text-[8px] uppercase tracking-[0.12em] text-white/40">{invitationLocaleOptions.find((option) => option.value === createdGuest.locale)?.context}</span>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <button type="button" onClick={() => copyMessage(createdGuest)} className="inline-flex items-center justify-center gap-2 bg-white px-4 py-3.5 text-[9px] uppercase tracking-[0.13em] text-[#171816]">
                    {activeAction === `copy-${createdGuest.id}` ? <Check size={14} /> : <Copy size={14} />}
                    {activeAction === `copy-${createdGuest.id}` ? 'Pesan tersalin' : 'Salin pesan'}
                  </button>
                  <button type="button" onClick={() => sendWhatsApp(createdGuest)} disabled={!createdGuest.phone} title={createdGuest.phone ? 'Kirim melalui WhatsApp' : 'Nomor WhatsApp belum diisi'} className="inline-flex items-center justify-center gap-2 bg-[#2f9e62] px-4 py-3.5 text-[9px] uppercase tracking-[0.13em] text-white disabled:cursor-not-allowed disabled:opacity-30">
                    {activeAction === `wa-${createdGuest.id}` ? <Check size={14} /> : <MessageCircle size={14} />} Kirim WhatsApp
                  </button>
                  <button type="button" onClick={() => copyLink(createdGuest)} className="inline-flex items-center justify-center gap-2 border border-white/20 px-4 py-3.5 text-[9px] uppercase tracking-[0.13em] text-white sm:col-span-2">
                    {activeAction === `link-${createdGuest.id}` ? <Check size={14} /> : <Copy size={14} />}
                    {activeAction === `link-${createdGuest.id}` ? 'Link tersalin' : 'Salin link saja'}
                  </button>
                </div>
                {!createdGuest.phone && <p className="mt-4 text-xs leading-5 text-white/45">Nomor WhatsApp belum diisi. Gunakan “Salin pesan” untuk membagikannya secara manual.</p>}
              </section>
            ) : (
              <section className="border border-dashed border-black/15 px-6 py-10 text-center md:px-9 md:py-14">
                <UserPlus size={22} className="mx-auto mb-4 text-black/25" />
                <h2 className="font-serif text-2xl">Siap menambah tamu</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/42">Setelah disimpan, tombol salin pesan dan kirim WhatsApp akan langsung muncul di sini.</p>
              </section>
            )}

            <section className="bg-[#fbfaf6] p-6 md:p-9">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.17em] text-black/40">Terakhir ditambahkan</p>
                  <h2 className="mt-1 font-serif text-2xl">Tamu terbaru</h2>
                </div>
                <Link href="/dashboard/invitations" className="shrink-0 text-[9px] uppercase tracking-[0.12em] text-black/45 hover:text-black">Lihat semua</Link>
              </div>

              {recentGuests.length === 0 ? (
                <p className="border-t border-black/10 py-6 text-sm text-black/40">Belum ada tamu yang ditambahkan.</p>
              ) : (
                <div className="divide-y divide-black/10 border-t border-black/10">
                  {recentGuests.map((guest) => (
                    <article key={guest.id} className="flex items-center justify-between gap-4 py-4">
                      <div className="min-w-0">
                        <p className="truncate font-serif text-lg">{guest.name}</p>
                        <p className="mt-1 truncate text-xs text-black/38">/i/{guest.slug}{guest.phone ? ` · ${guest.phone}` : ''}</p>
                        <span className="mt-1 block text-[8px] uppercase tracking-[0.1em] text-black/32">{invitationLocaleOptions.find((option) => option.value === guest.locale)?.label}</span>
                      </div>
                      <span className={`shrink-0 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.1em] ${guest.isSent ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{guest.isSent ? 'Dikirim' : 'Belum'}</span>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
