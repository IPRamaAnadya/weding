import { Metadata } from 'next'
import MengundangView from './view'

type Props = {
  params: Promise<{ inv: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { inv } = await params

  // Decode invitation from Riki+&+Wulan to Dedy & Sinta
  const invitation = (inv as string).replaceAll('+', ' ')
  const guestName = decodeURIComponent(invitation)
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  
  const title = `Undangan Pernikahan untuk ${guestName == null || guestName == undefined ? 'Tamu Istimewa' : guestName} | Dedy & Sinta`
  const description = `Kepada Yth. ${guestName == null || guestName == undefined ? 'Tamu Istimewa Kami' : guestName}, kami mengundang Anda untuk menghadiri pernikahan Dedy & Sinta pada Jum'at, 03 April 2026 di Br. Kawan, Mas, Ubud, Bali. Mohon konfirmasi kehadiran Anda.`
  const imageUrl = `${baseURL}/images/sinta/8.webp`
  const url = `${baseURL}/mengundang/${encodeURIComponent(guestName)}`

  return {
    title,
    description,
    keywords: [
      'undangan pernikahan',
      `undangan ${guestName == null || guestName == undefined ? 'Tamu Istimewa' : guestName}`,
      'Dedy & Sinta',
      'wedding invitation',
      'undangan digital',
      'pernikahan Bali',
      'resepsi pernikahan',
      'Ubud Bali',
    ],
    authors: [{ name: 'Dedy & Sinta' }],
    creator: 'Dedy & Sinta',
    publisher: 'dedysinta.site',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url: url,
      title: title,
      description: description,
      siteName: 'Undangan Pernikahan Dedy & Sinta',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Undangan Pernikahan Dedy & Sinta',
        },
      ],
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: '@iputuramaanadya',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: `Undangan ${guestName}`,
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
    },
  }
}

export default async function MengundangPage({ params }: Props) {
  const { inv } = await params
  const invitation = (inv as string).replaceAll('+', ' ')
  const guestName = decodeURIComponent(invitation)
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Pernikahan Dedy & Sinta",
    "description": `Undangan pernikahan untuk ${guestName ?? 'tamu istimewa'}. Kami mengundang Anda untuk menghadiri pernikahan Dedy & Sinta pada Jum'at, 03 April 2026 di Br. Kawan, Mas, Ubud, Bali.`,
    "startDate": "2026-04-03T14:00:00+08:00",
    "endDate": "2026-04-03T23:59:00+08:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Br. Kawan, Mas, Ubud",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Br. Kawan, Mas, Ubud",
        "addressLocality": "Ubud",
        "addressRegion": "Bali",
        "postalCode": "80571",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.542695183424089,
        "longitude": 115.27104378640259
      },
      "url": "https://maps.app.goo.gl/qPt2kST9mS38J3FKA"
    },
    "image": `${baseURL}/images/cover.webp`,
    "organizer": {
      "@type": "Person",
      "name": "Dedy & Sinta"
    },
    "performer": {
      "@type": "Person",
      "name": "Dedy & Sinta"
    },
    "url": `${baseURL}/mengundang/${encodeURIComponent(guestName)}`
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseURL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Undangan",
        "item": `${baseURL}/mengundang`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": guestName,
        "item": `${baseURL}/mengundang/${encodeURIComponent(guestName)}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <MengundangView />
    </>
  )
}
