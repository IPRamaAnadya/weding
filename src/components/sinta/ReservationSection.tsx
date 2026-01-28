// components/sinta/ReservationSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type Attendance = {
  id: string
  name: string
  phone?: string | null
  status: 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU'
  message?: string | null
  createdAt: string
}

const statusMap = {
  'Hadir': 'HADIR',
  'Tidak Hadir': 'TIDAK_HADIR',
  'Belum Tahu': 'BELUM_TAHU',
} as const

const statusDisplayMap = {
  'HADIR': 'Hadir',
  'TIDAK_HADIR': 'Tidak Hadir',
  'BELUM_TAHU': 'Belum Tahu',
} as const

interface ReservationSectionProps {
  guestName?: string
  sectionTitle?: string
}

export default function ReservationSection({ 
  guestName,
  sectionTitle,
}: ReservationSectionProps) {
  const [name, setName] = useState(guestName || '')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [attendances, setAttendances] = useState<Attendance[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const perPage = 5

  // Fetch attendances
  useEffect(() => {
    fetchAttendances()
  }, [])

  const fetchAttendances = async () => {
    try {
      const response = await fetch('/api/attendance')
      if (response.ok) {
        const data = await response.json()
        setAttendances(data)
      }
    } catch (error) {
      console.error('Failed to fetch attendances:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !status) {
      alert('Nama dan status kehadiran wajib diisi')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: phone || undefined,
          status: statusMap[status as keyof typeof statusMap],
          message: message || undefined,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setName(guestName || '')
        setPhone('')
        setStatus('')
        setMessage('')
        // Refresh attendances
        fetchAttendances()
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Failed to submit:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalPages = Math.ceil(attendances.length / perPage)
  const currentData = attendances.slice(
    (page - 1) * perPage,
    page * perPage
  )

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl text-gray-800 mb-3"
            style={{ fontFamily: 'The Signature, cursive' }}
          >
            {sectionTitle}
          </h2>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Konfirmasi kehadiran Anda
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <div>
            <label
              className="block mb-2 text-sm text-gray-700"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Nama Lengkap *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-800 focus:border-gray-800 focus:ring-1 focus:ring-gray-800 outline-none transition"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="block mb-2 text-sm text-gray-700"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Nomor WhatsApp (Opsional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contoh: 08123456789"
              className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-800 focus:border-gray-800 focus:ring-1 focus:ring-gray-800 outline-none transition"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            />
          </div>

          {/* Attendance Status */}
          <div>
            <label
              className="block mb-3 text-sm text-gray-700"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Konfirmasi Kehadiran *
            </label>
            <div className="space-y-2">
              {['Hadir', 'Tidak Hadir', 'Belum Tahu'].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-full cursor-pointer hover:border-gray-800 transition"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={item}
                    checked={status === item}
                    onChange={() => setStatus(item)}
                    required
                    className="w-4 h-4 accent-gray-800"
                  />
                  <span
                    className="text-gray-800"
                    style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              className="block mb-2 text-sm text-gray-700"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Pesan & Doa (Opsional)
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan dan doa terbaik Anda"
              className="w-full px-4 py-3 border border-gray-300 rounded-3xl text-gray-800 focus:border-gray-800 focus:ring-1 focus:ring-gray-800 outline-none resize-none transition"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gray-800 text-white border border-gray-800 rounded-full text-xs tracking-wider transition-all duration-300 hover:bg-white hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {isSubmitting ? 'MENGIRIM...' : 'KIRIM KONFIRMASI'}
            </button>
            
            {submitStatus === 'success' && (
              <motion.p
                className="text-sm text-green-600 text-center"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Terima kasih! Konfirmasi Anda telah dikirim.
              </motion.p>
            )}
            
            {submitStatus === 'error' && (
              <motion.p
                className="text-sm text-red-600 text-center"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Gagal mengirim. Silakan coba lagi.
              </motion.p>
            )}
          </div>
        </motion.form>

        {/* Guest Wishes */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl md:text-4xl text-gray-800 mb-2"
              style={{ fontFamily: 'The Signature, cursive' }}
            >
              Ucapan & Doa
            </h3>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Pesan dari tamu undangan
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-10">
              <p
                className="text-gray-500"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                Memuat ucapan...
              </p>
            </div>
          ) : attendances.length === 0 ? (
            <div className="text-center py-10">
              <p
                className="text-gray-500"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                Belum ada ucapan.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-6 max-w-2xl mx-auto">
                {currentData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="border-b border-gray-200 pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p
                        className="text-gray-800 font-medium"
                        style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                      >
                        {item.name}
                      </p>
                      <span
                        className="text-xs text-gray-500"
                        style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                      >
                        {statusDisplayMap[item.status]}
                      </span>
                    </div>
                    {item.message && (
                      <p
                        className="text-sm text-gray-600 italic"
                        style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                      >
                        "{item.message}"
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-6 mt-12">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                    className="text-xs tracking-wider text-gray-600 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
                    style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                  >
                    PREV
                  </button>
                  <span
                    className="text-xs text-gray-500"
                    style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                  >
                    {page} / {totalPages}
                  </span>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                    className="text-xs tracking-wider text-gray-600 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
                    style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                  >
                    NEXT
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
