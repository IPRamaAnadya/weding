'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import Head from 'next/head'

export default function BuatUndanganPage() {
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  const invitationURL = name.trim() ? `${baseURL}/mengundang/${name.trim().replaceAll(' ', '+')}` : ''

  const seoData = {
    title: 'Buat Undangan Pernikahan | Generator Link Undangan Digital',
    description: 'Buat link undangan pernikahan digital yang personal dan mudah dibagikan melalui WhatsApp. Generator undangan pernikahan online gratis.',
    image: `${baseURL}/images/cover.webp`,
    url: `${baseURL}/buatundangan`,
  }

  const generateInvitationMessage = () => {
    const guestName = name.trim()
    return `Kepada Yth.
Bapak/Ibu/Saudara/i
*${guestName}*

ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ

Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, Kami bermaksud mengundang Bapak/Ibu/Saudara/i, pada Acara Pawiwahan (Pernikahan) kami:

*Dedy & Sinta*

Berikut link undangan kami untuk info lengkap:
${invitationURL}

*WAKTU & TEMPAT ACARA* 👇

*Ngidih*
📅 31 Maret 2026
⏰ 08:00 - Selesai
📍 Br. Margasari, Pujungan
Pujungan, Kec. Pupuan, Kabupaten Tabanan, Bali 82163, Indonesia

Google Maps:
https://share.google/1893B64CgEdqUolzA

*Mesakapan & Resepsi*
📅 3 April 2026
⏰ 13:00 - Selesai
📍 Br.Kawan, Mas, Ubud
Jl. Raya Mas No.123, Mas, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia

Google Maps:
https://maps.app.goo.gl/mYASY2bNs6iQGZS66?g_st=aw

Merupakan suatu kebanggan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadiran dan doa restunya kami ucapkan terima kasih.

ᬒᬵᬁ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬰᬵᬦ᭄ᬢᬶᬄ ᬒᬵᬁ`
  }

  const handleCopy = async () => {
    if (!name.trim()) return

    try {
      const message = generateInvitationMessage()
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="undangan pernikahan digital, undangan online, buat undangan, wedding invitation, undangan nikah" />
        <link rel="canonical" href={seoData.url} />
      </Head>
      
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <div className="bg-white shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-5xl md:text-6xl text-gray-800 mb-4"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              Buat Undangan
            </h1>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Masukkan nama tamu untuk membuat link undangan personal
            </p>
          </div>

          {/* Input Form */}
          <div className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm text-gray-700 mb-2"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                Nama Tamu *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Rama & Mita"
                className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-800 focus:border-gray-800 focus:ring-1 focus:ring-gray-800 outline-none transition"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              />
            </div>

            {/* Preview Message */}
            {name.trim() && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p 
                  className="text-xs text-gray-500 mb-4"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Preview Pesan WhatsApp:
                </p>
                <div 
                  className="text-sm text-gray-700 whitespace-pre-wrap max-h-96 overflow-y-auto leading-relaxed"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {generateInvitationMessage()}
                </div>
              </div>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              disabled={!name.trim()}
              className={`
                w-full py-3 px-6 rounded-full text-xs tracking-wider
                transition-all duration-300
                flex items-center justify-center gap-2
                ${
                  name.trim()
                    ? copied
                      ? 'bg-green-600 text-white border border-green-600'
                      : 'bg-gray-800 text-white border border-gray-800 hover:bg-white hover:text-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed border border-gray-300'
                }
              `}
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  PESAN TERSALIN!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  SALIN PESAN UNDANGAN
                </>
              )}
            </button>
          </div>

          {/* Info */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p 
              className="text-xs text-gray-500 text-center leading-relaxed"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Pesan undangan lengkap akan tersalin dengan format WhatsApp dan siap dibagikan ke tamu undangan
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
