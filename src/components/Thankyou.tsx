'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ThankYouSection() {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden"
    >
      {/* ================= PARALLAX BACKGROUND ================= */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cover2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">

          {/* Small subtitle */}
          <motion.p
            className="text-xs tracking-[0.4em] font-serif mb-6 opacity-80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            TERIMA KASIH
          </motion.p>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-serif tracking-widest mb-10"
            style={{
              textShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Atas Doa & Restu Anda
          </motion.h2>

          {/* Message */}
          <motion.p
            className="text-base md:text-lg font-serif leading-relaxed opacity-90 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            apabila Bapak/Ibu/Saudara/i berkenan memberikan doa restu
            serta hadir dalam momen bahagia pernikahan kami.
          </motion.p>

          {/* Couple Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="font-allura text-5xl md:text-6xl opacity-95">
              Riki & Wulan
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
