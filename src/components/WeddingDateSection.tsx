'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    title: 'Resepsi Pernikahan',
    date: 'Rabu, 09 Januari 2026',
    time: '14:00 - Selesai',
    address: 'Br. Tanah Sari, Ds. Pajahan, Pupuan, Tabanan, Bali',
    googleMapLink:
      'https://maps.app.goo.gl/ippAea1qNoV7kP25A',
  },
]

export default function WeddingDateSection() {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <>
      {/* ========================= */}
      {/* HERO TITLE SECTION */}
      {/* ========================= */}
      <section
        ref={ref}
        className="relative h-[220px] md:h-[320px] w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/weddingdate/weddingdate.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        {/* Title Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">

            {/* Title */}
            <div className="relative inline-block py-6">
              <motion.h2
                className="
                  relative z-10 
                  text-3xl md:text-4xl 
                  font-serif 
                  tracking-[0.3em] 
                  text-white
                "
                style={{
                  textShadow:
                    '0 6px 25px rgba(0,0,0,0.4)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                WEDDING
              </motion.h2>

              {/* Script Overlay */}
              <motion.p
                className="
                  absolute 
                  -bottom-4 
                  left-1/2 
                  -translate-x-1/2
                  text-5xl md:text-6xl
                  text-white/70
                  font-allura
                  z-0
                  select-none
                  pointer-events-none
                "
                style={{
                  filter: 'blur(0.3px)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Date
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* DATE DETAILS */}
      {/* ========================= */}
      <section className="py-20 px-4  bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
              >
                {/* Event Title */}
                <h3 className="text-4xl md:text-5xl font-allura mb-8 text-gray-800">
                  {event.title}
                </h3>

                {/* Divider */}
                <div className="flex items-center justify-center mb-8">
                  <div className="h-px w-16 bg-gray-300" />
                  <div className="mx-4 text-xl text-gray-400">
                    ❧
                  </div>
                  <div className="h-px w-16 bg-gray-300" />
                </div>

                {/* Details */}
                <div className="space-y-4 mb-10">
                  <p className="text-lg md:text-xl font-serif text-gray-700">
                    {event.date}
                  </p>
                  <p className="text-base md:text-lg font-serif text-gray-600">
                    {event.time}
                  </p>
                  <p className="text-sm md:text-base font-serif text-gray-600 leading-relaxed px-4">
                    {event.address}
                  </p>
                </div>

                {/* Map Button */}
                <a
                  href={event.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    px-8 py-3
                    border border-gray-800
                    text-gray-800
                    font-serif
                    text-sm
                    tracking-wider
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:text-white
                  "
                >
                  VIEW LOCATION
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
