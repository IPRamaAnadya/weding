import { Metadata } from 'next'
import MengundangView from './view'

type Props = {
  params: { invitation: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guestName = decodeURIComponent(params.invitation)
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  
  const title = `Undangan Pernikahan untuk ${guestName == null || guestName == undefined ? 'Tamu Istimewa' : guestName} | Riki & Wulan`
  const description = `Kepada Yth. ${guestName == null || guestName == undefined ? 'Tamu Istimewa Kami' : guestName}, kami mengundang Anda untuk menghadiri pernikahan Riki & Wulan pada Jum'at, 09 Januari 2026 di Br. Tanah Sari, Ds. Pajahan, Pupuan, Tabanan, Bali. Mohon konfirmasi kehadiran Anda.`
  const imageUrl = `${baseURL}/images/cover.jpg`
  const url = `${baseURL}/mengundang/${encodeURIComponent(guestName)}`

  return {
    title,
    description,
    keywords: [
      'undangan pernikahan',
      `undangan ${guestName == null || guestName == undefined ? 'Tamu Istimewa' : guestName}`,
      'Riki Wulan',
      'wedding invitation',
      'undangan digital',
      'pernikahan Bali',
      'resepsi pernikahan',
      'Pupuan Tabanan',
    ],
    authors: [{ name: 'Riki & Wulan' }],
    creator: 'Riki & Wulan',
    publisher: 'rikiwulan.site',
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
      siteName: 'Undangan Pernikahan Riki & Wulan',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Undangan Pernikahan Riki & Wulan',
        },
      ],
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: '@rikiwulan',
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

export default function MengundangPage({ params }: Props) {
  const guestName = decodeURIComponent(params.invitation)
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Pernikahan Riki & Wulan",
    "description": `Undangan pernikahan untuk ${guestName ?? 'tamu istimewa'}. Kami mengundang Anda untuk menghadiri pernikahan Riki & Wulan pada Jum'at, 09 Januari 2026 di Br. Tanah Sari, Ds. Pajahan, Pupuan, Tabanan, Bali.`,
    "startDate": "2026-01-09T14:00:00+08:00",
    "endDate": "2026-01-09T23:59:00+08:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Br. Tanah Sari, Ds. Pajahan",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Br. Tanah Sari, Ds. Pajahan, Pupuan",
        "addressLocality": "Tabanan",
        "addressRegion": "Bali",
        "postalCode": "82163",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.3695,
        "longitude": 115.1288
      },
      "url": "https://maps.app.goo.gl/ippAea1qNoV7kP25A"
    },
    "image": `${baseURL}/images/cover.jpg`,
    "organizer": {
      "@type": "Person",
      "name": "Riki & Wulan"
    },
    "performer": {
      "@type": "Person",
      "name": "Riki & Wulan"
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
