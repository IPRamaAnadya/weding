// components/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
  '/images/hero/hero4.jpg',
  '/images/hero/hero5.jpg',
  '/images/hero/hero6.jpg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Wedding date - change this to your actual wedding date
  const weddingDate = new Date('2026-01-09T14:00:00')

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentImage]}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between text-center text-white px-4 py-20">
        {/* Main Content */}
        <div className="flex flex-col items-center">
          <motion.p
            className="text-5xl md:text-7xl lg:text-7xl mb-4 font-allura"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The wedding of
          </motion.p>

          <motion.h1
            className="text-5xl md:text-5xl lg:text-6xl font-serif mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Riki & Wulan
          </motion.h1>

          <motion.p
            className="mt-4text-md md:text-base font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Jum'at, 09 Januari 2026
          </motion.p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          className="flex gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-xl text mb-2">
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-xl text mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-xl text mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">Minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-xl text mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-xs md:text-sm tracking-wider uppercase">Seconds</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
