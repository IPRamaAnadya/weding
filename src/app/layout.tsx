import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";
import { defaultSeoImage, siteUrl } from '@/lib/seo'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'The Wedding of Rama & Mita',
  description: 'Undangan pernikahan Rama dan Mita.',
  openGraph: {
    type: 'website',
    siteName: 'Rama & Mita',
    title: 'The Wedding of Rama & Mita',
    description: 'Undangan pernikahan Rama dan Mita.',
    images: [defaultSeoImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding of Rama & Mita',
    description: 'Undangan pernikahan Rama dan Mita.',
    images: [defaultSeoImage.url],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
