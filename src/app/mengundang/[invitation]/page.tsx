'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import WeddingSplash from '@/components/WeddingSplash'
import Hero from '@/components/Hero'
import QuoteSection from '@/components/QuoteSection'
import BrideGroomSection from '@/components/BrideGroomSection'
import WeddingDateSection from '@/components/WeddingDateSection'
import GallerySection from '@/components/GallerySection'
import ReservationSection from '@/components/Rsvp'
import ThankYouSection from '@/components/Thankyou'
import Footer from '@/components/Footer'
import { useAudio } from '@/components/AudioProvider'

export default function MengundangPage() {
  const [opened, setOpened] = useState(false)
  const params = useParams()
  const guestName = decodeURIComponent(params.invitation as string)

  const { play, unlock } = useAudio()

  // useEffect(() => {
  //   const saved = localStorage.getItem('wedding_opened')
  //   if (saved === 'true') setOpened(true)
  // }, [])

  const finish = () => {
    localStorage.setItem('wedding_opened', 'true')
    setOpened(true)
    unlock().then(() => {
      play()
    })
  }

  if (!opened) {
    return (
      <WeddingSplash
        guestName={guestName}
        onFinish={finish}
      />
    )
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <QuoteSection />
      <BrideGroomSection />
      <WeddingDateSection />
      <GallerySection />
      <ReservationSection guestName={guestName} />
      <ThankYouSection />
      <Footer />
    </main>
  )
}
