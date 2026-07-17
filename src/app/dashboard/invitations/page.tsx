import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react'
import { normalizeInvitationLocale } from '@/lib/invitation-locale'
import { prisma } from '@/lib/prisma'
import InvitationList from './invitation-list'

const pageSize = 10

export default async function InvitationsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const query = await searchParams
  const requestedPage = Math.max(1, Number.parseInt(query.page || '1', 10) || 1)
  const wedding = await prisma.wedding.findFirst({ orderBy: { createdAt: 'asc' } })
  if (!wedding) notFound()

  const where = { weddingId: wedding.id, isActive: true }
  const [total, sent] = await Promise.all([
    prisma.weddingGuest.count({ where }),
    prisma.weddingGuest.count({ where: { ...where, isSent: true } }),
  ])
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const page = Math.min(requestedPage, pageCount)
  const guests = await prisma.weddingGuest.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      rsvp: { select: { status: true } },
      _count: { select: { analytics: { where: { event: 'OPEN_INVITATION' } } } },
    },
  })

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
      <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-black/45"><ArrowLeft size={14} /> Kembali ke dashboard</Link>
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-black/40">Guest invitations</p>
          <h1 className="font-serif text-4xl tracking-[-0.05em] md:text-6xl">Semua undangan</h1>
          <p className="mt-4 text-sm text-black/45">Kirim pesan personal, salin template, dan pantau status pengiriman.</p>
        </div>
        <Link href="/buatundangan" className="inline-flex items-center justify-center gap-2 bg-[#171816] px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-white"><UserPlus size={15} /> Tambah tamu</Link>
      </div>

      <section className="mb-8 grid grid-cols-3 gap-px bg-black/10">
        {[
          ['Total', total],
          ['Sudah dikirim', sent],
          ['Belum dikirim', total - sent],
        ].map(([label, value]) => <div key={label} className="bg-[#fbfaf6] p-5 md:p-7"><strong className="block font-serif text-2xl md:text-3xl">{value}</strong><span className="mt-2 block text-[8px] uppercase tracking-[0.12em] text-black/40 md:text-[9px]">{label}</span></div>)}
      </section>

      <InvitationList
        weddingId={wedding.id}
        guests={guests.map((guest) => ({
          id: guest.id,
          name: guest.name,
          phone: guest.phone,
          slug: guest.slug,
          locale: normalizeInvitationLocale(guest.locale),
          isSent: guest.isSent,
          sentAt: guest.sentAt?.toISOString() || null,
          opened: guest._count.analytics,
          rsvpStatus: guest.rsvp?.status || null,
        }))}
        wedding={{
          groomName: wedding.groomShortName,
          brideName: wedding.brideShortName,
          groomFullName: wedding.groomFullName,
          brideFullName: wedding.brideFullName,
          eventDate: wedding.eventDate?.toISOString() || '',
          dateLabel: wedding.dateLabel || '-',
          timeLabel: wedding.timeLabel || '-',
          venueName: wedding.venueName || '-',
          venueAddress: wedding.venueAddress || '-',
          mapUrl: wedding.mapUrl || '-',
        }}
      />

      {pageCount > 1 && (
        <nav className="mt-8 flex items-center justify-between bg-[#fbfaf6] px-5 py-4" aria-label="Pagination undangan">
          <Link href={`/dashboard/invitations?page=${Math.max(1, page - 1)}`} aria-disabled={page === 1} className={`inline-flex items-center gap-2 text-[9px] uppercase tracking-wider ${page === 1 ? 'pointer-events-none opacity-25' : ''}`}><ChevronLeft size={15} /> Sebelumnya</Link>
          <span className="text-[9px] tracking-[0.14em] text-black/45">{String(page).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}</span>
          <Link href={`/dashboard/invitations?page=${Math.min(pageCount, page + 1)}`} aria-disabled={page === pageCount} className={`inline-flex items-center gap-2 text-[9px] uppercase tracking-wider ${page === pageCount ? 'pointer-events-none opacity-25' : ''}`}>Berikutnya <ChevronRight size={15} /></Link>
        </nav>
      )}
    </main>
  )
}
