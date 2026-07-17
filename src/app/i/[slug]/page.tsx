import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import PublicWeddingView from './view'

type Props = {
  params: Promise<{ slug: string }>
}

async function findInvitation(slug: string) {
  return prisma.weddingGuest.findFirst({
    where: { slug: { equals: slug, mode: 'insensitive' }, isActive: true, wedding: { isPublished: true } },
    include: { wedding: true },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const invitation = await findInvitation(slug)
  if (!invitation) return { title: 'Undangan tidak ditemukan' }
  const { wedding } = invitation

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: `${wedding.name} untuk ${invitation.name}`,
    description: `Undangan pernikahan ${wedding.groomFullName} dan ${wedding.brideFullName}.`,
    alternates: { canonical: `/i/${invitation.slug}` },
    robots: { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      title: wedding.name,
      description: `The wedding of ${wedding.groomShortName} & ${wedding.brideShortName}`,
      images: [{ url: '/images/rama/33.webp', width: 1200, height: 630 }],
    },
  }
}

export default async function PublicWeddingPage({ params }: Props) {
  const { slug } = await params
  const invitation = await findInvitation(slug)
  if (!invitation) notFound()
  const { wedding } = invitation

  return (
    <PublicWeddingView
      slug={invitation.slug}
      guestName={invitation.name}
      wedding={{
        groomShortName: wedding.groomShortName,
        brideShortName: wedding.brideShortName,
        groomFullName: wedding.groomFullName,
        brideFullName: wedding.brideFullName,
        groomParents: wedding.groomParents || '',
        brideParents: wedding.brideParents || '',
        groomChildOrder: wedding.groomChildOrder || '',
        brideChildOrder: wedding.brideChildOrder || '',
        eventDate: wedding.eventDate?.toISOString(),
        dateLabel: wedding.dateLabel || undefined,
        timeLabel: wedding.timeLabel || undefined,
        venueName: wedding.venueName || undefined,
        venueAddress: wedding.venueAddress || undefined,
        mapUrl: wedding.mapUrl || undefined,
        creatorCredit: wedding.groomFullName.replace(/,.*$/, ''),
      }}
    />
  )
}
