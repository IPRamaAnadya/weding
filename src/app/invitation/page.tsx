'use client'

// app/invitation/page.tsx
import Hero from '@/components/Hero'
import QuoteSection from '@/components/QuoteSection'
import BrideGroomSection from '@/components/BrideGroomSection'
import WeddingDateSection from '@/components/WeddingDateSection'
import GallerySection from '@/components/GallerySection'
import ReservationSection from '@/components/Rsvp'
import ThankYouSection from '@/components/Thankyou'
import { useAudio } from '@/components/AudioProvider'

export default function InvitationPage() {

  const { play, unlock } = useAudio()

  unlock().then(() => {
    play()
  })
  
  return (
    <main className="min-h-screen">
      <Hero />
      <QuoteSection />
      <BrideGroomSection />
      <WeddingDateSection />
      <GallerySection />
      <ReservationSection />
      <ThankYouSection />
    </main>
  )
}
