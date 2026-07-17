'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, Copy, List, Plus, UserPlus } from 'lucide-react'
import { getGuestInvitationPath, normalizeGuestSlug } from '@/lib/guest-slug'
import { invitationLocaleOptions, type InvitationLocale } from '@/lib/invitation-locale'
import { normalizeIndonesianPhone } from '@/lib/phone'

type Rsvp = {
  id: string
  name: string
  status: 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU'
  guestCount: number
  message: string | null
  isHidden: boolean
  createdAt: string
  updatedAt: string
}

type Guest = {
  id: string
  name: string
  phone: string | null
  groupName: string | null
  maxGuests: number
  slug: string
  locale: InvitationLocale
  isActive: boolean
  isSent: boolean
  sentAt: string | null
  createdAt: string
  updatedAt: string
  rsvp: Rsvp | null
  _count: { analytics: number }
}

type Wedding = {
  id: string
  key: string
  name: string
  groomShortName: string
  brideShortName: string
  groomFullName: string
  brideFullName: string
  groomParents: string | null
  brideParents: string | null
  groomChildOrder: string | null
  brideChildOrder: string | null
  eventDate: string | null
  dateLabel: string | null
  timeLabel: string | null
  venueName: string | null
  venueAddress: string | null
  mapUrl: string | null
  isPublished: boolean
  createdAt: string
  updatedAt: string
  guests: Guest[]
  rsvps: Rsvp[]
}

function localDateTimeValue(value: string | null) {
  if (!value) return ''
  const date = new Date(value)
  const part = (number: number) => String(number).padStart(2, '0')
  return `${date.getFullYear()}-${part(date.getMonth() + 1)}-${part(date.getDate())}T${part(date.getHours())}:${part(date.getMinutes())}`
}

export default function WeddingManager({ wedding, analytics }: { wedding: Wedding; analytics: { pageViews: number; opens: number; uniqueViews: number } }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: wedding.name,
    groomShortName: wedding.groomShortName,
    brideShortName: wedding.brideShortName,
    groomFullName: wedding.groomFullName,
    brideFullName: wedding.brideFullName,
    groomParents: wedding.groomParents || '',
    brideParents: wedding.brideParents || '',
    groomChildOrder: wedding.groomChildOrder || '',
    brideChildOrder: wedding.brideChildOrder || '',
    eventDate: localDateTimeValue(wedding.eventDate),
    dateLabel: wedding.dateLabel || '',
    timeLabel: wedding.timeLabel || '',
    venueName: wedding.venueName || '',
    venueAddress: wedding.venueAddress || '',
    mapUrl: wedding.mapUrl || '',
    isPublished: wedding.isPublished,
  })
  const [guestForm, setGuestForm] = useState<{ name: string; slug: string; phone: string; locale: InvitationLocale }>({ name: '', slug: '', phone: '', locale: 'id' })
  const [guestSlugEdited, setGuestSlugEdited] = useState(false)
  const [saving, setSaving] = useState(false)
  const [addingGuest, setAddingGuest] = useState(false)
  const [message, setMessage] = useState('')
  const [copiedSlug, setCopiedSlug] = useState('')

  const saveWedding = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    setMessage('')
    const response = await fetch(`/api/admin/weddings/${wedding.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        eventDate: form.eventDate ? new Date(form.eventDate).toISOString() : null,
        groomParents: form.groomParents || null,
        brideParents: form.brideParents || null,
        groomChildOrder: form.groomChildOrder || null,
        brideChildOrder: form.brideChildOrder || null,
        dateLabel: form.dateLabel || null,
        timeLabel: form.timeLabel || null,
        venueName: form.venueName || null,
        venueAddress: form.venueAddress || null,
        mapUrl: form.mapUrl || null,
      }),
    })
    const data = await response.json()
    setSaving(false)
    setMessage(response.ok ? 'Perubahan berhasil disimpan.' : data.error || 'Perubahan belum tersimpan.')
    if (response.ok) router.refresh()
  }

  const addGuest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAddingGuest(true)
    setMessage('')
    const response = await fetch(`/api/admin/weddings/${wedding.id}/guests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guestForm),
    })
    const data = await response.json()
    setAddingGuest(false)
    if (!response.ok) return setMessage(data.error || 'Tamu belum berhasil ditambahkan.')
    setGuestForm({ name: '', slug: '', phone: '', locale: 'id' })
    setGuestSlugEdited(false)
    setMessage('Tamu dan link personal berhasil dibuat.')
    router.refresh()
  }

  const copyGuestLink = async (slug: string) => {
    const url = `${window.location.origin}${getGuestInvitationPath(slug)}`
    await navigator.clipboard.writeText(url)
    setCopiedSlug(slug)
    window.setTimeout(() => setCopiedSlug(''), 1600)
  }

  const deactivateGuest = async (guestId: string) => {
    if (!window.confirm('Nonaktifkan link tamu ini?')) return
    const response = await fetch(`/api/admin/weddings/${wedding.id}/guests/${guestId}`, { method: 'DELETE' })
    if (response.ok) router.refresh()
  }

  const updateRsvp = async (rsvpId: string, data: { isHidden?: boolean; status?: Rsvp['status'] }) => {
    const response = await fetch(`/api/admin/weddings/${wedding.id}/rsvps/${rsvpId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.ok) router.refresh()
  }

  const deleteRsvp = async (rsvpId: string) => {
    if (!window.confirm('Hapus konfirmasi ini secara permanen?')) return
    const response = await fetch(`/api/admin/weddings/${wedding.id}/rsvps/${rsvpId}`, { method: 'DELETE' })
    if (response.ok) router.refresh()
  }

  const field = (key: keyof typeof form, label: string, type = 'text') => (
    <label>
      <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-black/45">{label}</span>
      <input
        type={type}
        value={typeof form[key] === 'boolean' ? '' : String(form[key])}
        onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
        className="w-full border border-black/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-black"
      />
    </label>
  )

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-black/40">Invitation dashboard</p>
          <h1 className="font-serif text-4xl tracking-[-0.05em] md:text-6xl">{wedding.name}</h1>
          <p className="mt-3 text-sm text-black/45">Satu wedding, satu dashboard. Setiap tamu memiliki link /i/slug-tamu.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/buatundangan" className="inline-flex items-center justify-center gap-2 border border-black/15 px-5 py-3 text-[10px] uppercase tracking-[0.14em]"><UserPlus size={15} /> Tambah tamu</Link>
          <Link href="/dashboard/invitations" className="inline-flex items-center justify-center gap-2 bg-[#171816] px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-white"><List size={15} /> Lihat semua undangan</Link>
        </div>
      </div>

      <section className="mb-12 grid grid-cols-2 gap-px bg-black/10 md:grid-cols-4">
        {[
          ['Total views', analytics.pageViews],
          ['Unique views', analytics.uniqueViews],
          ['Undangan dibuka', analytics.opens],
          ['RSVP', wedding.rsvps.length],
        ].map(([label, value]) => <div key={label} className="bg-[#fbfaf6] p-6"><strong className="block font-serif text-3xl">{value}</strong><span className="mt-2 block text-[9px] uppercase tracking-[0.12em] text-black/40">{label}</span></div>)}
      </section>

      <form onSubmit={saveWedding} className="mb-12 bg-[#fbfaf6] p-6 md:p-10">
        <div className="mb-8 flex items-center justify-between gap-4"><div><p className="text-[9px] uppercase tracking-[0.18em] text-black/40">Content</p><h2 className="mt-2 font-serif text-3xl">Wedding details</h2></div><label className="flex items-center gap-3 text-xs"><input type="checkbox" checked={form.isPublished} onChange={(event) => setForm((current) => ({ ...current, isPublished: event.target.checked }))} /> Published</label></div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">{field('name', 'Nama wedding')}</div>
          {field('groomShortName', 'Nama pendek pria')}{field('brideShortName', 'Nama pendek wanita')}
          {field('groomFullName', 'Nama lengkap pria')}{field('brideFullName', 'Nama lengkap wanita')}
          {field('groomChildOrder', 'Urutan anak pria')}{field('brideChildOrder', 'Urutan anak wanita')}
          {field('groomParents', 'Orang tua pria')}{field('brideParents', 'Orang tua wanita')}
          {field('eventDate', 'Tanggal dan waktu', 'datetime-local')}{field('dateLabel', 'Label tanggal')}
          {field('timeLabel', 'Label waktu')}{field('venueName', 'Nama lokasi')}
          <div className="md:col-span-2">{field('venueAddress', 'Alamat lengkap')}</div>
          <div className="md:col-span-2">{field('mapUrl', 'URL Google Maps', 'url')}</div>
        </div>
        <div className="mt-8 flex items-center gap-4"><button type="submit" disabled={saving} className="bg-[#171816] px-6 py-3 text-[10px] uppercase tracking-[0.14em] text-white disabled:opacity-40">{saving ? 'Menyimpan...' : 'Simpan perubahan'}</button>{message && <p className="text-sm text-black/50">{message}</p>}</div>
      </form>

      <section className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <form onSubmit={addGuest} className="bg-[#fbfaf6] p-6 md:p-8">
          <p className="text-[9px] uppercase tracking-[0.18em] text-black/40">Guest management</p><h2 className="mb-7 mt-2 font-serif text-3xl">Tambah tamu</h2>
          <div className="space-y-5">
            <label><span className="mb-2 block text-[9px] uppercase tracking-[0.12em] text-black/45">Nama tamu</span><input value={guestForm.name} onChange={(event) => { const name = event.target.value; setGuestForm((current) => ({ ...current, name, slug: guestSlugEdited ? current.slug : normalizeGuestSlug(name) })) }} className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none" placeholder="Rama Anadya" required /></label>
            <label><span className="mb-2 block text-[9px] uppercase tracking-[0.12em] text-black/45">Slug undangan</span><input value={guestForm.slug} onChange={(event) => { setGuestSlugEdited(true); setGuestForm((current) => ({ ...current, slug: event.target.value })) }} onBlur={() => setGuestForm((current) => ({ ...current, slug: normalizeGuestSlug(current.slug) }))} className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none" placeholder="Rama+Anadya" required /><small className="mt-2 block text-xs text-black/40">Link: /i/{guestForm.slug || 'Rama+Anadya'}</small></label>
            <label><span className="mb-2 block text-[9px] uppercase tracking-[0.12em] text-black/45">Bahasa undangan</span><select value={guestForm.locale} onChange={(event) => setGuestForm((current) => ({ ...current, locale: event.target.value as InvitationLocale }))} className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none">{invitationLocaleOptions.map((option) => <option key={option.value} value={option.value}>{option.label} — {option.context}</option>)}</select><small className="mt-2 block text-xs text-black/40">Bahasa awal undangan dan pesan. Default Indonesia.</small></label>
            <label><span className="mb-2 block text-[9px] uppercase tracking-[0.12em] text-black/45">Nomor HP</span><input type="tel" value={guestForm.phone} onChange={(event) => setGuestForm((current) => ({ ...current, phone: event.target.value }))} onBlur={() => setGuestForm((current) => ({ ...current, phone: normalizeIndonesianPhone(current.phone) || current.phone }))} className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none" placeholder="628xxxxxxxxxx" /><small className="mt-2 block text-xs text-black/40">Otomatis disimpan dalam format Indonesia, contoh 62877...</small></label>
            <button type="submit" disabled={addingGuest} className="inline-flex items-center gap-2 bg-[#171816] px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-white"><Plus size={14} /> {addingGuest ? 'Membuat...' : 'Tambah dan buat link'}</button>
          </div>
        </form>

        <div className="bg-[#fbfaf6] p-6 md:p-8"><p className="text-[9px] uppercase tracking-[0.18em] text-black/40">{wedding.guests.length} guests</p><h2 className="mb-7 mt-2 font-serif text-3xl">Daftar tamu</h2>{wedding.guests.length === 0 ? <p className="text-sm text-black/45">Belum ada tamu.</p> : <div className="divide-y divide-black/10">{wedding.guests.map((guest) => <div key={guest.id} className={`flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-center ${guest.isActive ? '' : 'opacity-40'}`}><div><strong className="font-serif text-lg font-normal">{guest.name}</strong><p className="mt-1 text-xs text-black/40">/i/{guest.slug}{guest.phone ? ` · ${guest.phone}` : ''} · Dibuka {guest._count.analytics} kali</p><span className="mt-2 inline-block text-[8px] uppercase tracking-[0.1em] text-black/35">{invitationLocaleOptions.find((option) => option.value === guest.locale)?.context}</span>{guest.rsvp && <span className="ml-2 mt-2 inline-block text-[9px] uppercase tracking-wider text-emerald-700">{guest.rsvp.status.replaceAll('_', ' ')}</span>}</div><div className="flex gap-2"><button type="button" disabled={!guest.isActive} onClick={() => copyGuestLink(guest.slug)} className="inline-flex items-center gap-2 border border-black/15 px-4 py-2 text-[9px] uppercase tracking-wider disabled:opacity-40">{copiedSlug === guest.slug ? <Check size={13} /> : <Copy size={13} />} {copiedSlug === guest.slug ? 'Tersalin' : 'Salin link'}</button>{guest.isActive && <button type="button" onClick={() => deactivateGuest(guest.id)} className="border border-red-900/20 px-3 py-2 text-[9px] uppercase tracking-wider text-red-800">Nonaktifkan</button>}</div></div>)}</div>}</div>
      </section>

      <section className="bg-[#fbfaf6] p-6 md:p-10"><p className="text-[9px] uppercase tracking-[0.18em] text-black/40">Attendance & wishes</p><h2 className="mb-8 mt-2 font-serif text-3xl">Konfirmasi terbaru</h2>{wedding.rsvps.length === 0 ? <p className="text-sm text-black/45">Belum ada konfirmasi.</p> : <div className="divide-y divide-black/10">{wedding.rsvps.map((rsvp) => <article key={rsvp.id} className={`grid gap-4 py-5 md:grid-cols-[0.65fr_0.4fr_1fr_auto] md:items-start ${rsvp.isHidden ? 'opacity-45' : ''}`}><strong className="font-serif font-normal">{rsvp.name}</strong><select value={rsvp.status} onChange={(event) => updateRsvp(rsvp.id, { status: event.target.value as Rsvp['status'] })} className="bg-transparent text-[9px] uppercase tracking-wider text-black/55"><option value="HADIR">Hadir</option><option value="TIDAK_HADIR">Tidak hadir</option><option value="BELUM_TAHU">Belum tahu</option></select><p className="text-sm italic leading-6 text-black/55">{rsvp.message || 'Tanpa pesan'} · {rsvp.guestCount} orang</p><div className="flex gap-2"><button type="button" onClick={() => updateRsvp(rsvp.id, { isHidden: !rsvp.isHidden })} className="text-[9px] uppercase tracking-wider text-black/55">{rsvp.isHidden ? 'Tampilkan' : 'Sembunyikan'}</button><button type="button" onClick={() => deleteRsvp(rsvp.id)} className="text-[9px] uppercase tracking-wider text-red-700">Hapus</button></div></article>)}</div>}</section>
    </main>
  )
}
