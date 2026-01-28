'use client'

// app/invitation/page.tsx
import Hero from '@/components/wulan/Hero'
import QuoteSection from '@/components/wulan/QuoteSection'
import BrideGroomSection from '@/components/wulan/BrideGroomSection'
import WeddingDateSection from '@/components/wulan/WeddingDateSection'
import GallerySection from '@/components/wulan/GallerySection'
import ReservationSection from '@/components/wulan/Rsvp'
import ThankYouSection from '@/components/wulan/Thankyou'
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
