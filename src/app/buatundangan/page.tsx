'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function BuatUndanganPage() {
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const invitationURL = name.trim() ? `${baseURL}/mengundang/${encodeURIComponent(name.trim())}` : ''

  const handleCopy = async () => {
    if (!name.trim()) return

    try {
      await navigator.clipboard.writeText(invitationURL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
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
              <div className="bg-gray-50 rounded-lg p-4 break-all">
                <p className="text-xs text-gray-500 mb-1">Link Undangan:</p>
                <p className="text-sm text-gray-800 font-mono">
                  {invitationURL}
                </p>
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
                  Link Tersalin!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Salin Link
                </>
              )}
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Link undangan akan mengarah ke halaman undangan dengan nama tamu yang Anda masukkan
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
