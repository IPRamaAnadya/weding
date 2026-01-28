// components/sinta/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroProps {
  welcomeText: string
  subtitle: string
  title: string
  date: string
  venue: string
  bgImages: string[]
  weddingDateTime: Date
}

export default function Hero({
  welcomeText,
  subtitle,
  title,
  date,
  venue,
  bgImages,
  weddingDateTime,
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [bgImages.length])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDateTime.getTime() - now

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
  }, [weddingDateTime])

  // Format title with line break after &
  const formatTitle = (text: string) => {
    const parts = text.split('&')
    if (parts.length === 2) {
      return (
        <>
          {parts[0].trim()} &<br />{parts[1].trim()}
        </>
      )
    }
    return text
  }

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImages[currentImage]}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-left text-white px-8 md:px-16 py-12">
        {/* Welcome Text at Top */}
        <motion.p
          className="text-sm md:text-base tracking-wider mt-8"
          style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {welcomeText}
        </motion.p>

        {/* All Content at Bottom */}
        <div className="flex flex-col mb-8">
          <motion.p
            className="text-xs md:text-sm tracking-wider uppercase mb-6 opacity-80"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl mb-6 leading-tight"
            style={{ fontFamily: 'The Signature, cursive', lineHeight: '0.8' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {formatTitle(title)}
          </motion.h1>

          <motion.p
            className="text-sm md:text-base tracking-wide mb-2"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {date}
          </motion.p>

          <motion.p
            className="text-sm md:text-base tracking-wide mb-8"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {venue}
          </motion.p>

          {/* Countdown Timer */}
          <div>
            <motion.p
              className="text-xs md:text-sm tracking-wider uppercase mb-4"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              Save the Date
            </motion.p>

            <motion.div
              className="flex gap-6 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex flex-col">
                <div 
                  className="text-3xl md:text-4xl mb-2"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {timeLeft.days}
                </div>
                <div 
                  className="text-xs md:text-sm tracking-wider uppercase"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Days
                </div>
              </div>
              <div className="flex flex-col">
                <div 
                  className="text-3xl md:text-4xl mb-2"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {timeLeft.hours}
                </div>
                <div 
                  className="text-xs md:text-sm tracking-wider uppercase"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Hours
                </div>
              </div>
              <div className="flex flex-col">
                <div 
                  className="text-3xl md:text-4xl mb-2"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {timeLeft.minutes}
                </div>
                <div 
                  className="text-xs md:text-sm tracking-wider uppercase"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Minutes
                </div>
              </div>
              <div className="flex flex-col">
                <div 
                  className="text-3xl md:text-4xl mb-2"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  {timeLeft.seconds}
                </div>
                <div 
                  className="text-xs md:text-sm tracking-wider uppercase"
                  style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                >
                  Seconds
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
