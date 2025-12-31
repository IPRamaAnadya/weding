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

export default function RSVPSection({ guestName }: { guestName?: string }) {
  const [name, setName] = useState(guestName === 'Terhormat' ? '' : guestName || '')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [attendances, setAttendances] = useState<Attendance[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const perPage = 3

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
        setName(guestName === 'Terhormat' ? '' : guestName || '')
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

  //bg-[#faf9f7]

  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-24">
          <motion.p
            className="text-[11px] tracking-[0.4em] text-gray-400 font-serif mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            RESERVATION
          </motion.p>

          <div className="relative inline-block">
            <motion.h2
              className="text-3xl md:text-4xl font-serif tracking-[0.3em] text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              RSVP
            </motion.h2>

            <motion.span
              className="absolute -bottom-6 left-1/2 -translate-x-1/2
              text-5xl md:text-6xl font-allura text-gray-300 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Kehadiran
            </motion.span>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <motion.form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto space-y-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  {/* Name */}
  <div>
    <label className="block mb-2 text-sm font-serif text-gray-700">
      Nama Lengkap
    </label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Masukkan nama Anda"
      required
      className="
        w-full
        px-4 py-3
        border border-gray-300
        rounded-none
        font-serif
        text-gray-800
        focus:border-gray-700
        focus:ring-1
        focus:ring-gray-700
        outline-none
      "
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block mb-2 text-sm font-serif text-gray-700">
      Nomor WhatsApp (Opsional)
    </label>
    <input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Contoh: 08123456789"
      className="
        w-full
        px-4 py-3
        border border-gray-300
        rounded-none
        font-serif
        text-gray-800
        focus:border-gray-700
        focus:ring-1
        focus:ring-gray-700
        outline-none
      "
    />
  </div>

  {/* Attendance */}
  <div>
    <label className="block mb-4 text-sm font-serif text-gray-700">
      Konfirmasi Kehadiran
    </label>

    <div className="space-y-3">
      {['Hadir', 'Tidak Hadir', 'Belum Tahu'].map((item) => (
        <label
          key={item}
          className="
            flex items-center gap-4
            px-4 py-3
            border border-gray-300
            rounded-none
            cursor-pointer
            hover:border-gray-600
            transition
          "
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
          <span className="font-serif text-gray-800">
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block mb-2 text-sm font-serif text-gray-700">
      Pesan & Doa (Opsional)
    </label>
    <textarea
      rows={4}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Tulis ucapan dan doa terbaik Anda"
      className="
        w-full
        px-4 py-3
        border border-gray-300
        rounded-none
        font-serif
        text-gray-800
        focus:border-gray-700
        focus:ring-1
        focus:ring-gray-700
        outline-none
        resize-none
      "
    />
  </div>

  {/* Submit */}
  <div className="pt-0 text-center space-y-3">
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full px-4 py-2 border border-gray-800 text-gray-800 font-serif text-xs tracking-wider transition-all duration-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? 'MENGIRIM...' : 'KIRIM KONFIRMASI'}
    </button>
    
    {submitStatus === 'success' && (
      <p className="text-sm text-green-600 font-serif">
        ✓ Terima kasih! Konfirmasi Anda telah dikirim.
      </p>
    )}
    
    {submitStatus === 'error' && (
      <p className="text-sm text-red-600 font-serif">
        ✗ Gagal mengirim. Silakan coba lagi.
      </p>
    )}
  </div>
</motion.form>

        {/* ================= GUEST WISHES ================= */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif tracking-widest text-gray-800">
              GUEST WISHES
            </h3>
            <p className="text-sm text-gray-500 font-serif mt-2">
              Ucapan & doa terbaru
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-10">
              <p className="text-gray-500 font-serif">Memuat ucapan...</p>
            </div>
          ) : attendances.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 font-serif">Belum ada ucapan.</p>
            </div>
          ) : (
            <>
              <div className="space-y-10 max-w-2xl mx-auto">
            {currentData.map((item) => (
              <motion.div
                key={item.id}
                className="border-b border-gray-200 pb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-serif text-gray-800">{item.name}</p>
                  <span className="text-xs tracking-widest text-gray-400">
                    {statusDisplayMap[item.status]}
                  </span>
                </div>
                {item.message && (
                  <p className="text-sm text-gray-600 font-serif italic">
                    "{item.message}"
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-6 mt-16">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="text-xs tracking-widest font-serif text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              PREV
            </button>
            <span className="text-xs tracking-widest font-serif text-gray-500">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="text-xs tracking-widest font-serif text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
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
