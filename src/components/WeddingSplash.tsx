// components/WeddingSplash.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from './AudioProvider'

export default function WeddingSplash({
  guestName,
  onFinish,
}: {
  guestName: string
  onFinish: () => void
}) {
  const [step, setStep] = useState(1)

  return (
    <>
      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="s1"
            className="fixed inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
            onAnimationComplete={() =>
              setTimeout(() => setStep(2), 3000)
            }
          >
            <motion.h1
              className="text-white font-serif tracking-widest text-sm"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              THE WEDDING OF
            </motion.h1>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="s2"
            className="fixed inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() =>
              setTimeout(() => setStep(3), 3000)
            }
          >
            <motion.h1
              className="text-white font-serif tracking-wide text-sm"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              RIKI & WULAN
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
              style={{ backgroundImage: `url('/images/cover.jpg')` }}
            />

            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 text-center">
              <motion.p
                className="text-sm tracking-wide mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Bapak/Ibu/Saudara/i
              </motion.p>

              <motion.h2
                className="text-2xl font-serif mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {guestName}
              </motion.h2>

              <motion.button
                onClick={async () => {
                  onFinish()
                }}
                className="px-8 py-3 border border-black rounded-full text-sm tracking-wide   hover:bg-black hover:text-white transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                BUKA UNDANGAN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
