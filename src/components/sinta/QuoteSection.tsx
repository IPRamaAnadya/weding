// components/sinta/QuoteSection.tsx
'use client'

import { motion } from 'framer-motion'

interface QuoteSectionProps {
  quote: string
  source: string
}

export default function QuoteSection({ quote, source }: QuoteSectionProps) {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Quote */}
        <motion.blockquote
          className="text-sm md:text-sm lg:text-base text-gray-700 leading-relaxed mb-6 text-center"
          style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {quote}
        </motion.blockquote>

        {/* Source */}
        <motion.p
          className="text-base md:text-lg lg:text-2xl text-gray-600 text-center"
          style={{ fontFamily: 'The Signature, cursive' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          - {source}
        </motion.p>
      </div>
    </section>
  )
}
