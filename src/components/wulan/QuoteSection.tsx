// components/QuoteSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function QuoteSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Balinese Greeting */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-serif mb-2">
            ᬒᬁᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-px h-16 bg-gray-300" />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-sm md:text-sm lg:text-md font-serif text-gray-700 leading-loose mb-8 tracking-[0.1em] "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu."
        </motion.blockquote>

        {/* Quote Creator */}
        <motion.p
          className="text-sm md:text-lg font-serif text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          — Weda Smrthi : IX.101
        </motion.p>

        {/* Bottom Decorative Line */}
        {/* <motion.div
          className="flex items-center justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-16 bg-gray-300" />
          <div className="mx-4 text-2xl text-gray-400">❧</div>
          <div className="h-px w-16 bg-gray-300" />
        </motion.div> */}
      </div>
    </section>
  )
}
