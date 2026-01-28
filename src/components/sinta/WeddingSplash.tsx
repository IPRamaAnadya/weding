// components/WeddingSplash2.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WeddingSplash2Props {
  bgUrl: string
  guestName: string
  name: string
  date: string
  ctaText: string
  onFinish: () => void
}

export default function WeddingSplash2({
  bgUrl,
  guestName,
  name,
  date,
  ctaText,
  onFinish,
}: WeddingSplash2Props) {
  const [step, setStep] = useState(1)

  return (
    <>
      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="s1"
            className="fixed inset-0 bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
            onAnimationComplete={() =>
              setTimeout(() => setStep(2), 3000)
            }
          >
            <motion.h1
              className="text-black font-serif tracking-widest text-sm"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              UNDANGAN UNTUK
            </motion.h1>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="s2"
            className="fixed inset-0 bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() =>
              setTimeout(() => setStep(3), 3000)
            }
          >
            <motion.h1
              className="text-black font-serif tracking-wide text-sm"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {guestName.toUpperCase()}
            </motion.h1>
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div
            key="s3"
            className="fixed inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${bgUrl}')` }}
            />

            {/* Dark Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 text-center px-6">
              <motion.h2
                className="text-6xl md:text-8xl text-white mb-6"
                style={{ fontFamily: 'The Signature, cursive' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {name}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-white mb-8"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {date}
              </motion.p>

              <motion.button
                onClick={onFinish}
                className="mb-32 px-6 py-2 bg-white text-black rounded-full text-xs tracking-wider hover:bg-gray-100 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {ctaText}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
