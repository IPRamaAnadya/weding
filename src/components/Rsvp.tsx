'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const dummyReservations = [
  { name: 'Ayu Lestari', status: 'Hadir', message: 'Semoga langgeng sampai tua ❤️' },
  { name: 'Budi Santoso', status: 'Tidak Hadir', message: 'Mohon maaf belum bisa hadir' },
  { name: 'Komang Arta', status: 'Hadir', message: 'Selamat menempuh hidup baru' },
  { name: 'Made Suryani', status: 'Belum Tahu', message: 'InsyaAllah hadir' },
  { name: 'Dewi Paramita', status: 'Hadir', message: 'Bahagia selalu ✨' },
  { name: 'Rizky Pratama', status: 'Hadir', message: 'Semoga menjadi keluarga sakinah' },
]

export default function RSVPSection({ guestName }: { guestName?: string }) {
  const [name, setName] = useState(guestName || '')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 3

  const totalPages = Math.ceil(dummyReservations.length / perPage)
  const currentData = dummyReservations.slice(
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
        <motion.div
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
      Nomor WhatsApp
    </label>
    <input
      type="tel"
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
            onChange={() => setStatus(item)}
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
      Pesan & Doa
    </label>
    <textarea
      rows={4}
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
  <div className="pt-0 text-center">
    <button
      className="w-full px-4 py-2 border border-gray-800 text-gray-800 font-serif text-xs tracking-wider transition-all duration-300 hover:bg-gray-800 hover:text-white"
    >
      KIRIM KONFIRMASI
    </button>
  </div>
</motion.div>

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

          <div className="space-y-10 max-w-2xl mx-auto">
            {currentData.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-serif text-gray-800">{item.name}</p>
                  <span className="text-xs tracking-widest text-gray-400">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-serif italic">
                  “{item.message}”
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-6 mt-16">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="text-xs tracking-widest font-serif text-gray-500 disabled:opacity-30"
            >
              PREV
            </button>
            <span className="text-xs tracking-widest font-serif text-gray-500">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="text-xs tracking-widest font-serif text-gray-500 disabled:opacity-30"
            >
              NEXT
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
