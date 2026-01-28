// components/sinta/StorylineSection.tsx
'use client'

import { motion, PanInfo } from 'framer-motion'
import { useState, useEffect } from 'react'

interface StoryItem {
  year: string
  title: string
  description: string
}

interface StorylineSectionProps {
  sectionTitle?: string
  stories: StoryItem[]
  introText?: string
  groomName?: string
  brideName?: string
  metYear?: string
  weddingDate?: string
}

export default function StorylineSection({
  sectionTitle = "Our Story",
  stories,
  introText,
  groomName,
  brideName,
  metYear,
  weddingDate,
}: StorylineSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused || stories.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, stories.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    
    if (info.offset.x > swipeThreshold) {
      // Swiped right, go to previous
      goToPrev()
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left, go to next
      goToNext()
    }
  }

  const getItemStyle = (index: number) => {
    const diff = index - currentIndex
    const totalStories = stories.length

    // Handle circular positioning
    let position = diff
    if (Math.abs(diff) > totalStories / 2) {
      position = diff > 0 ? diff - totalStories : diff + totalStories
    }

    if (position === 0) {
      return {
        opacity: 1,
        scale: 1,
        x: '0%',
        zIndex: 3,
      }
    } else if (position === 1) {
      return {
        opacity: 0.3,
        scale: 0.8,
        x: '70%',
        zIndex: 2,
      }
    } else if (position === -1) {
      return {
        opacity: 0.3,
        scale: 0.8,
        x: '-70%',
        zIndex: 2,
      }
    } else {
      return {
        opacity: 0,
        scale: 0.6,
        x: position > 0 ? '100%' : '-100%',
        zIndex: 1,
      }
    }
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl text-gray-800"
            style={{ fontFamily: 'The Signature, cursive' }}
          >
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Horizontal Carousel */}
        <div 
          className="relative h-[400px] md:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Story Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {stories.map((story, index) => {
              const style = getItemStyle(index)
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-[280px] md:w-[400px] bg-white shadow-md shadow-gray-300/20 p-8 md:p-10"
                  animate={style}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  style={{
                    pointerEvents: index === currentIndex ? 'auto' : 'none',
                  }}
                >
                  <div className="text-center">
                    <p
                      className="text-xs tracking-widest uppercase text-gray-400 mb-3"
                      style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                    >
                      {story.year}
                    </p>
                    <h3
                      className={`text-3xl md:text-4xl mb-4 ${
                        index === stories.length - 1 ? 'text-yellow-600' : 'text-gray-800'
                      }`}
                      style={{ fontFamily: 'The Signature, cursive' }}
                    >
                      {story.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                    >
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing Section */}
        {(groomName || brideName || metYear || weddingDate) && (
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {(groomName && brideName) && (
              <h3
                className="text-3xl md:text-4xl text-yellow-600 mb-3"
                style={{ fontFamily: 'The Signature, cursive' }}
              >
                {groomName} & {brideName}
              </h3>
            )}
            
            {(metYear && weddingDate) && (
              <p
                className="text-xs md:text-sm text-gray-500 tracking-wider"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                {metYear} — {weddingDate}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
