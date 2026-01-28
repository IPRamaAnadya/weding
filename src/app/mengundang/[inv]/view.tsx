'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import WeddingSplash2 from '@/components/sinta/WeddingSplash'
import Hero from '@/components/sinta/Hero'
import QuoteSection from '@/components/sinta/QuoteSection'
import BrideGroomSection from '@/components/sinta/BrideGroomSection'
import WeddingDateSection from '@/components/wulan/WeddingDateSection'
import GallerySectionWulan from '@/components/wulan/GallerySection'
import GallerySection from '@/components/sinta/GallerySection'
import ReservationSectionWulan from '@/components/wulan/Rsvp'
import ReservationSection from '@/components/sinta/ReservationSection'
import ThankYouSection from '@/components/wulan/Thankyou'
import Footer from '@/components/wulan/Footer'
import { useAudio } from '@/components/AudioProvider'
import InvitationLetterSection from '@/components/sinta/InvitationLetterSection'
import StorylineSection from '@/components/sinta/StorylineSection'

export default function MengundangView() {
  const [opened, setOpened] = useState(false)
  const params = useParams()
  const inv = decodeURIComponent(params.inv as string)
  const guestName = inv.replaceAll('+', ' ')

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
      <WeddingSplash2
        bgUrl="/images/cover.jpg"
        guestName={guestName}
        name="Dedy & Sinta"
        date="25 Desember 2026"
        ctaText="BUKA UNDANGAN"
        onFinish={finish}
      />
    )
  }

  return (
    <main className="min-h-screen">
      <Hero
        welcomeText="The Wedding Celebration"
        subtitle="The Wedding of"
        title="Dedy & Sinta"
        date="Sabtu, 13 Oktober 2026"
        venue="di Grand Ballroom Hotel"
        bgImages={[
          '/images/hero/hero1.jpg',
          '/images/hero/hero2.jpg',
          '/images/hero/hero3.jpg',
          '/images/hero/hero4.jpg',
          '/images/hero/hero5.jpg',
          '/images/hero/hero6.jpg',
        ]}
        weddingDateTime={new Date('2026-02-13T14:00:00')}
      />
      <QuoteSection
        quote="Ya Tuhan Yang Maha Pengasih, anugrahkanlah kepada pasangan ini tanpa terpisahkan, panjang umur, semoga pernikahan ini dianugrahkan putra-putri dan cucu yang memberi penghiburan, tinggal di rumah yang penuh kebahagiaan"
        source="Reg Weda X. 85.42"
      />
      <BrideGroomSection
        groom={{
          name: "Dedy",
          fullName: "I Putu Dedy Bhirawan, S.Ds",
          childOf: "Anak pertama dari",
          parents: "I Wayan Muka & Ni Nyoman Budiarti",
          instagram: "dedypratama",
          image: "/images/bridegroom/groom.jpg"
        }}
        bride={{
          name: "Sinta",
          fullName: "Sinta Dewi",
          childOf: "Anak kedua dari",
          parents: "I Wayan Sutarjana & Ni Komang Sumerti & Ni Ketut Sutami (Alm.)",
          instagram: "sintadewi",
          image: "/images/bridegroom/bride.jpg"
        }}
      />
      <InvitationLetterSection
        welcomeTitle="ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ"
        welcomeDescription="Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, Kami bermaksud mengundang Bapak/Ibu/Saudara/i, pada Acara Pawiwahan (Pernikahan) kami:"
        events={[
          { name: "Ngidih", date: "31 Maret 2026", time: "10:00 - 12:00 WITA" },
          { name: "Mesakapan", date: "3 April 2026", time: "14:00 - 17:00 WITA" }
        ]}
        venue="Br.Kawan, Mas, Ubud"
        venueDescription="Jl. Raya Mas No.123, Mas, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia"
        closingText="Merupakan suatu kebanggan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadiran dan doa restunya kami ucapkan terima kasih."
        groomName="Dedy"
        brideName="Sinta"
        googleMapLink="https://share.google/pYKbIiNDUJis1Jb65"
        onSaveTheDate={() => console.log('Save the date!')}
      />
      <StorylineSection
        sectionTitle="Our Story"
        stories={[
          {
            year: "2016",
            title: "First Meet",
            description: "Pertemuan pertama kami terjadi secara tidak terduga. Sebuah momen yang kemudian menjadi awal dari segalanya."
          },
          {
            year: "2018",
            title: "Falling in Love",
            description: "Dari sekadar teman, kami mulai merasakan sesuatu yang lebih. Setiap obrolan menjadi istimewa, setiap tawa menjadi kenangan."
          },
          {
            year: "2022",
            title: "Growing Together",
            description: "Bersama menghadapi suka dan duka. Kami belajar bahwa cinta adalah tentang komitmen dan kebersamaan dalam setiap fase kehidupan."
          },
          {
            year: "2025",
            title: "The Proposal",
            description: "Momen ketika kami memutuskan untuk melanjutkan perjalanan ini selamanya. Sebuah janji untuk saling menjaga hingga akhir."
          },
          {
            year: "2026",
            title: "Our Wedding",
            description: "Hari yang kami nantikan. Hari dimana kami mengucap janji suci untuk membangun kehidupan bersama selamanya."
          }
        ]}
        groomName="Dedy"
        brideName="Sinta"
        metYear="2016"
        weddingDate="3 April 2026"
      />
      <GallerySection
        sectionTitle="Our Moments"
        images={[
          '/images/gallery/1.jpg',
          '/images/gallery/2.jpg',
          '/images/gallery/3.jpg',
          '/images/gallery/4.jpg',
          '/images/gallery/5.jpg',
          '/images/gallery/6.jpg',
          '/images/gallery/7.jpg',
          '/images/gallery/8.jpg',
        ]}
      />
      <ReservationSection 
        guestName={guestName}
        sectionTitle="Reservation"
      />
      <Footer />
    </main>
  )
}
