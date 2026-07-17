import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGuestInvitationPath, normalizeGuestSlugParam } from '@/lib/guest-slug'
import { normalizeInvitationLocale, openGraphLocaleByLocale } from '@/lib/invitation-locale'
import { prisma } from '@/lib/prisma'
import { defaultSeoImage, siteUrl } from '@/lib/seo'
import PublicWeddingView from './view'

type Props = {
  params: Promise<{ slug: string }>
}

async function findInvitation(slug: string) {
  const normalizedSlug = normalizeGuestSlugParam(slug)
  if (!normalizedSlug) return null
  return prisma.weddingGuest.findFirst({
    where: { slug: { equals: normalizedSlug, mode: 'insensitive' }, isActive: true, wedding: { isPublished: true } },
    include: { wedding: true },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const invitation = await findInvitation(slug)
  if (!invitation) return { title: 'Undangan tidak ditemukan' }
  const { wedding } = invitation
  const locale = normalizeInvitationLocale(invitation.locale)
  const localizedMetadata = {
    id: {
      title: `${wedding.name} untuk ${invitation.name}`,
      description: `Undangan spesial untuk ${invitation.name}. Mari merayakan pernikahan ${wedding.groomShortName} & ${wedding.brideShortName}.`,
    },
    en: {
      title: `${wedding.name} for ${invitation.name}`,
      description: `A special wedding invitation for ${invitation.name}. Join us in celebrating ${wedding.groomShortName} & ${wedding.brideShortName}.`,
    },
    yue: {
      title: `${wedding.name}｜敬邀 ${invitation.name}`,
      description: `特別為 ${invitation.name} 準備嘅婚禮邀請。誠邀您一齊慶祝 ${wedding.groomShortName} 與 ${wedding.brideShortName} 嘅大日子。`,
    },
    ja: {
      title: `${invitation.name}様へ｜${wedding.name}`,
      description: `${invitation.name}様への特別な結婚式のご案内です。${wedding.groomShortName}と${wedding.brideShortName}の門出を、ぜひご一緒にお祝いください。`,
    },
  }[locale]

  return {
    metadataBase: new URL(siteUrl),
    title: localizedMetadata.title,
    description: localizedMetadata.description,
    alternates: { canonical: getGuestInvitationPath(invitation.slug) },
    robots: { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: openGraphLocaleByLocale[locale],
      title: wedding.name,
      description: localizedMetadata.description,
      images: [{ ...defaultSeoImage, alt: wedding.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: wedding.name,
      description: localizedMetadata.description,
      images: [defaultSeoImage.url],
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
      defaultLocale={normalizeInvitationLocale(invitation.locale)}
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
