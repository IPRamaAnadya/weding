'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import Head from 'next/head'

export default function BuatUndanganPage() {
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://rikiwulan.site'
  const invitationURL = name.trim() ? `${baseURL}/mengundang/${encodeURIComponent(name.trim())}` : ''

  const seoData = {
    title: 'Buat Undangan Pernikahan | Generator Link Undangan Digital',
    description: 'Buat link undangan pernikahan digital yang personal dan mudah dibagikan melalui WhatsApp. Generator undangan pernikahan online gratis.',
    image: `${baseURL}/images/cover.jpg`,
    url: `${baseURL}/buatundangan`,
  }

  const generateInvitationMessage = () => {
    const guestName = name.trim()
    return `Kepada Yth.
Bapak/Ibu/Saudara/i
*${guestName}*
Om Swastyastu,

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :
${invitationURL}

*WAKTU & TEMPAT* 👇👇👇

*Resepsi Pernikahan*
*Tanggal* : Rabu, 09 Januari 2026
*Jam* : 14:00 - Selesai
*Alamat* : Br. Tanah Sari, Ds. Pajahan, Pupuan, Tabanan, Bali
*Google Map* : https://maps.app.goo.gl/ippAea1qNoV7kP25A

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini. 

Terima kasih banyak atas perhatiannya.

Om Shanti, Shanti, Shanti, Om.`
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
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Buat Undangan
            </h1>
            <p className="text-gray-600">
              Masukkan nama tamu untuk membuat link undangan
            </p>
          </div>

          {/* Input Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Tamu
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Rama & Mita"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Preview URL */}
            {name.trim() && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Preview Pesan:</p>
                <div className="text-sm text-gray-800 whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
                  {generateInvitationMessage()}
                </div>
              </div>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              disabled={!name.trim()}
              className={`
                w-full py-3 px-6 rounded-lg font-medium
                transition-all duration-200
                flex items-center justify-center gap-2
                ${
                  name.trim()
                    ? copied
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Pesan Tersalin!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Salin Pesan Undangan
                </>
              )}
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Pesan undangan lengkap akan tersalin dengan format WhatsApp dan siap dibagikan
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
