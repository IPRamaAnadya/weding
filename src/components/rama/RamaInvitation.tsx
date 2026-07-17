'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  CalendarPlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Languages,
  MapPin,
  Music2,
  VolumeX,
  X,
} from 'lucide-react'
import { useAudio } from '@/components/AudioProvider'
import { normalizeIndonesianPhone } from '@/lib/phone'
import styles from './RamaInvitation.module.css'
import { ramaLocales, ramaTranslations, type RamaLocale } from './translations'

type RamaInvitationProps = {
  guestName: string
  weddingData?: Partial<RamaWeddingData>
  invitationSlug?: string
  showDummyConfirmations?: boolean
}

export type RamaWeddingData = {
  groomShortName: string
  brideShortName: string
  groomFullName: string
  brideFullName: string
  groomParents: string
  brideParents: string
  groomChildOrder: string
  brideChildOrder: string
  eventDate: string
  dateLabel: string
  timeLabel: string
  venueName: string
  venueAddress: string
  mapUrl: string
  creatorCredit: string
}

type RsvpState = {
  name: string
  phone: string
  status: '' | 'HADIR' | 'TIDAK_HADIR' | 'BELUM_TAHU'
  message: string
}

type IntroPhase = 'preload' | 'montage' | 'pause' | 'splash' | 'done'

type CountdownValue = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type ConfirmationItem = {
  id: string
  name: string
  status: Exclude<RsvpState['status'], ''>
  message: string
}

const defaultRamaWedding: RamaWeddingData = {
  groomShortName: 'Rama',
  brideShortName: 'Mita',
  groomFullName: 'I Putu Rama Anadya, S.Kom.',
  brideFullName: 'Ni Putu Mita Pramesti, S.Kom.',
  groomParents: 'I Wayan Sutarjana & Ni Komang Sumerti',
  brideParents: 'I Putu Suastika & Ni Made Ariasih',
  groomChildOrder: 'Anak kelima dari',
  brideChildOrder: 'Anak pertama dari',
  eventDate: '2026-08-22T15:00:00+08:00',
  dateLabel: 'Sabtu, 22 Agustus 2026',
  timeLabel: '15.00 WITA — selesai',
  venueName: 'Pura Siwa',
  venueAddress: 'Banjar Dinas Margasari, Desa Pujungan, Kecamatan Pupuan, Kabupaten Tabanan, Bali 82163',
  mapUrl: 'https://maps.app.goo.gl/pbg97NqcpT4rkQ7k7',
  creatorCredit: 'I Putu Rama Anadya',
}

function getCountdown(targetDate: Date): CountdownValue {
  const distance = Math.max(0, targetDate.getTime() - Date.now())

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance % 86_400_000) / 3_600_000),
    minutes: Math.floor((distance % 3_600_000) / 60_000),
    seconds: Math.floor((distance % 60_000) / 1000),
  }
}

const ramaImage = (number: number) => `/images/rama/${number}.webp`

const introImages = [
  32, 22, 31, 1, 4, 2, 15, 16, 34, 35,
  5, 6, 7, 13, 19, 24, 28, 29, 33, 36,
].map(ramaImage)

const galleryImages = [
  33, 1, 22, 6, 31, 14, 4, 35, 19, 8, 28, 2,
  34, 17, 25, 10, 30, 5, 23, 13, 36, 7, 27, 3,
  16, 29, 11, 32, 20, 9, 26, 15, 24, 12, 18, 21,
].map(ramaImage)

const dummyConfirmations: ConfirmationItem[] = [
  {
    id: 'dummy-1',
    name: 'Kadek Ari & Keluarga',
    status: 'HADIR',
    message: 'Selamat menempuh hidup baru, Rama dan Mita. Semoga selalu dipenuhi cinta dan kebahagiaan.',
  },
  {
    id: 'dummy-2',
    name: 'Komang Ayu',
    status: 'HADIR',
    message: 'Turut berbahagia untuk kalian berdua. Sampai bertemu di hari istimewa nanti.',
  },
  {
    id: 'dummy-3',
    name: 'Made Surya',
    status: 'HADIR',
    message: 'Semoga pawiwahan berjalan lancar dan menjadi awal kehidupan yang penuh berkah.',
  },
  {
    id: 'dummy-4',
    name: 'Putu Dinda',
    status: 'BELUM_TAHU',
    message: 'Bahagia sekali mendengar kabar ini. Semoga bisa hadir dan merayakan bersama kalian.',
  },
  {
    id: 'dummy-5',
    name: 'Gede Aditya & Pasangan',
    status: 'HADIR',
    message: 'Wishing you a beautiful beginning and a lifetime of wonderful moments together.',
  },
  {
    id: 'dummy-6',
    name: 'Ayu Laksmi',
    status: 'TIDAK_HADIR',
    message: 'Mohon maaf belum dapat hadir. Doa terbaik selalu menyertai Rama dan Mita.',
  },
]

const confirmationsPerPage = 3

const heroSlides = [32, 11, 16, 28, 34, 36].map(ramaImage)

function getGalleryLoopWidth(scroller: HTMLDivElement) {
  const firstCard = scroller.children.item(0) as HTMLElement | null
  const repeatedFirstCard = scroller.children.item(galleryImages.length) as HTMLElement | null

  if (!firstCard || !repeatedFirstCard) return 0
  return repeatedFirstCard.offsetLeft - firstCard.offsetLeft
}

function normalizeGalleryPosition(scroller: HTMLDivElement) {
  const loopWidth = getGalleryLoopWidth(scroller)
  if (loopWidth <= 0) return

  if (scroller.scrollLeft < loopWidth * 0.5) {
    scroller.scrollLeft += loopWidth
  } else if (scroller.scrollLeft > loopWidth * 2.5) {
    scroller.scrollLeft -= loopWidth
  }
}

const reveal = {
  initial: { opacity: 0, y: 26, filter: 'blur(12px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 2.4, ease: [0.22, 1, 0.36, 1] as const },
}

export default function RamaInvitation({
  guestName,
  weddingData,
  invitationSlug,
  showDummyConfirmations = true,
}: RamaInvitationProps) {
  const wedding = { ...defaultRamaWedding, ...weddingData }
  const weddingDateTime = useMemo(() => new Date(wedding.eventDate), [wedding.eventDate])
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Pawiwahan ${wedding.groomShortName} & ${wedding.brideShortName}`)}&dates=${weddingDateTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}%2F${new Date(weddingDateTime.getTime() + 8 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(`Pawiwahan ${wedding.groomFullName} dan ${wedding.brideFullName}`)}&location=${encodeURIComponent(`${wedding.venueName}, ${wedding.venueAddress}`)}`
  const [introPhase, setIntroPhase] = useState<IntroPhase>('preload')
  const [montageIndex, setMontageIndex] = useState(0)
  const [splashStep, setSplashStep] = useState<1 | 2>(1)
  const [coverReady, setCoverReady] = useState(false)
  const [minimumSplashDone, setMinimumSplashDone] = useState(false)
  const [opened, setOpened] = useState(false)
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)
  const [countdown, setCountdown] = useState<CountdownValue | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [locale, setLocale] = useState<RamaLocale>('id')
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [lightboxDirection, setLightboxDirection] = useState<1 | -1>(1)
  const [rsvp, setRsvp] = useState<RsvpState>({
    name: guestName === 'Tamu Terhormat' ? '' : guestName,
    phone: '',
    status: 'HADIR',
    message: '',
  })
  const [confirmations, setConfirmations] = useState<ConfirmationItem[]>(showDummyConfirmations ? dummyConfirmations : [])
  const [confirmationPage, setConfirmationPage] = useState(1)
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const loadedIntroFrames = useRef(new Set<number>())
  const galleryScrollerRef = useRef<HTMLDivElement>(null)
  const galleryPauseUntilRef = useRef(0)
  const galleryAnimationFrameRef = useRef<number | null>(null)
  const { play, toggle, unlock } = useAudio()
  const t = ramaTranslations[locale]
  const intlLocale = locale === 'id' ? 'id-ID' : locale === 'en' ? 'en-US' : locale === 'yue' ? 'zh-HK' : 'ja-JP'
  const localizedDateLabel = locale === 'id'
    ? wedding.dateLabel
    : new Intl.DateTimeFormat(intlLocale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Makassar',
    }).format(weddingDateTime)
  const localizedTimeLabel = locale === 'id'
    ? wedding.timeLabel
    : `${new Intl.DateTimeFormat(intlLocale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: locale !== 'ja',
      timeZone: 'Asia/Makassar',
    }).format(weddingDateTime)} ${t.onwards}`
  const confirmationPageCount = Math.ceil(confirmations.length / confirmationsPerPage)
  const visibleConfirmations = confirmations.slice(
    (confirmationPage - 1) * confirmationsPerPage,
    confirmationPage * confirmationsPerPage,
  )

  const markIntroImageReady = (index: number) => {
    if (loadedIntroFrames.current.has(index)) return
    loadedIntroFrames.current.add(index)

    if (loadedIntroFrames.current.size === introImages.length) {
      window.requestAnimationFrame(() => {
        setIntroPhase((current) => current === 'preload' ? 'montage' : current)
      })
    }
  }

  useEffect(() => {
    if (introPhase !== 'montage') return

    if (montageIndex === introImages.length - 1) {
      const finishTimer = window.setTimeout(() => setIntroPhase('pause'), 320)
      return () => window.clearTimeout(finishTimer)
    }

    const openingDelays = [520, 430, 340]
    const acceleratingProgress = Math.max(0, montageIndex - 3) / Math.max(1, introImages.length - 5)
    const frameDelay = montageIndex < openingDelays.length
      ? openingDelays[montageIndex]
      : 180 - acceleratingProgress * 130

    const frameTimer = window.setTimeout(() => {
      setMontageIndex((current) => current + 1)
    }, frameDelay)

    return () => window.clearTimeout(frameTimer)
  }, [introPhase, montageIndex])

  useEffect(() => {
    if (introPhase !== 'pause') return
    const pauseTimer = window.setTimeout(() => setIntroPhase('splash'), 1000)
    return () => window.clearTimeout(pauseTimer)
  }, [introPhase])

  useEffect(() => {
    if (introPhase !== 'splash') return

    setSplashStep(1)
    setMinimumSplashDone(false)
    const guestTimer = window.setTimeout(() => {
      setSplashStep(2)
      void play().then((started) => {
        if (started) setIsPlaying(true)
      })
    }, 3800)
    const minimumTimer = window.setTimeout(() => setMinimumSplashDone(true), 6500)

    return () => {
      window.clearTimeout(guestTimer)
      window.clearTimeout(minimumTimer)
    }
  }, [introPhase, play])

  useEffect(() => {
    if (introPhase !== 'splash' || !coverReady || !minimumSplashDone) return
    const finishTimer = window.setTimeout(() => setIntroPhase('done'), 180)
    return () => window.clearTimeout(finishTimer)
  }, [coverReady, introPhase, minimumSplashDone])

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  useEffect(() => {
    document.documentElement.lang = locale === 'yue' ? 'zh-HK' : locale
  }, [locale])

  useEffect(() => {
    if (!opened) return

    const slideshowTimer = window.setInterval(() => {
      setHeroSlideIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(slideshowTimer)
  }, [opened])

  useEffect(() => {
    setCountdown(getCountdown(weddingDateTime))
    const countdownTimer = window.setInterval(() => setCountdown(getCountdown(weddingDateTime)), 1000)
    return () => window.clearInterval(countdownTimer)
  }, [weddingDateTime])

  useEffect(() => {
    if (!invitationSlug) return
    fetch(`/api/public/invitations/${encodeURIComponent(invitationSlug)}/rsvp`)
      .then((response) => response.ok ? response.json() : [])
      .then((data: ConfirmationItem[]) => setConfirmations(data))
      .catch(() => setConfirmations([]))
  }, [invitationSlug])

  useEffect(() => {
    if (!opened) return
    const scroller = galleryScrollerRef.current
    if (!scroller) return

    galleryPauseUntilRef.current = 0
    let galleryIsVisible = true

    const positionAtMiddle = () => {
      const loopWidth = getGalleryLoopWidth(scroller)
      if (loopWidth > 0 && scroller.scrollLeft < loopWidth * 0.5) {
        scroller.scrollLeft = loopWidth
      }
    }
    const positionAtMiddleSet = window.requestAnimationFrame(positionAtMiddle)
    const positionRetry = window.setTimeout(positionAtMiddle, 300)

    let previousTime = performance.now()
    const animateGallery = (currentTime: number) => {
      const delta = Math.min(40, currentTime - previousTime)
      previousTime = currentTime

      if (galleryIsVisible && currentTime >= galleryPauseUntilRef.current) {
        scroller.scrollLeft += delta * 0.055
        normalizeGalleryPosition(scroller)
      }

      galleryAnimationFrameRef.current = window.requestAnimationFrame(animateGallery)
    }

    galleryAnimationFrameRef.current = window.requestAnimationFrame(animateGallery)

    const galleryObserver = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
        ([entry]) => {
          galleryIsVisible = entry.isIntersecting
          previousTime = performance.now()
        },
        { threshold: 0.01 },
      )
    galleryObserver?.observe(scroller)
    window.addEventListener('resize', positionAtMiddle)

    return () => {
      galleryObserver?.disconnect()
      window.removeEventListener('resize', positionAtMiddle)
      window.cancelAnimationFrame(positionAtMiddleSet)
      window.clearTimeout(positionRetry)
      if (galleryAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(galleryAnimationFrameRef.current)
      }
    }
  }, [opened])

  useEffect(() => {
    if (!opened) return
    const scroller = galleryScrollerRef.current
    if (!scroller) return

    const redirectWheelToGallery = (event: WheelEvent) => {
      const horizontalDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY
      if (!horizontalDelta) return

      event.preventDefault()
      galleryPauseUntilRef.current = performance.now() + 4500

      scroller.scrollLeft += horizontalDelta
      normalizeGalleryPosition(scroller)
    }

    scroller.addEventListener('wheel', redirectWheelToGallery, { passive: false })
    return () => scroller.removeEventListener('wheel', redirectWheelToGallery)
  }, [opened])

  useEffect(() => {
    if (selectedImage === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'ArrowRight') {
        setLightboxDirection(1)
        setSelectedImage((current) => current === null ? null : (current + 1) % galleryImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setLightboxDirection(-1)
        setSelectedImage((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedImage])

  const trackManagedEvent = (event: 'OPEN_INVITATION' | 'MAP_CLICK' | 'CALENDAR_CLICK') => {
    if (!invitationSlug) return
    const storageKey = 'wedin-visitor-session'
    let sessionKey = window.sessionStorage.getItem(storageKey)
    if (!sessionKey) {
      sessionKey = window.crypto.randomUUID()
      window.sessionStorage.setItem(storageKey, sessionKey)
    }

    void fetch(`/api/public/invitations/${encodeURIComponent(invitationSlug)}/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ event, sessionKey }),
    })
  }

  const openInvitation = async () => {
    if (!isPlaying) {
      await unlock()
      const started = await play()
      setIsPlaying(started)
    }
    setOpened(true)
    trackManagedEvent('OPEN_INVITATION')
  }

  const toggleMusic = () => {
    toggle()
    setIsPlaying((current) => !current)
  }

  const submitRsvp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!rsvp.name.trim() || !rsvp.status) return

    setSubmitState('loading')

    try {
      const response = await fetch(invitationSlug
        ? `/api/public/invitations/${encodeURIComponent(invitationSlug)}/rsvp`
        : '/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: rsvp.name.trim(),
          phone: rsvp.phone.trim() || undefined,
          status: rsvp.status,
          message: rsvp.message.trim() || undefined,
        }),
      })

      if (!response.ok) throw new Error('RSVP request failed')
      const savedConfirmation = await response.json() as ConfirmationItem

      setConfirmations((current) => [{
        id: savedConfirmation.id,
        name: rsvp.name.trim(),
        status: rsvp.status as ConfirmationItem['status'],
        message: rsvp.message.trim() || `${t.defaultMessage} ${wedding.groomShortName} & ${wedding.brideShortName}.`,
      }, ...current])
      setConfirmationPage(1)
      setSubmitState('success')
      setRsvp((current) => ({ ...current, phone: '', status: 'HADIR', message: '' }))
    } catch {
      setSubmitState('error')
    }
  }

  const previousImage = () => {
    setLightboxDirection(-1)
    setSelectedImage((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextImage = () => {
    setLightboxDirection(1)
    setSelectedImage((current) => current === null ? null : (current + 1) % galleryImages.length)
  }

  const scrollGallery = (direction: -1 | 1) => {
    pauseGalleryAutoScroll()
    const scroller = galleryScrollerRef.current
    if (!scroller) return
    scroller.scrollBy({ left: scroller.clientWidth * 0.72 * direction, behavior: 'smooth' })
  }

  const pauseGalleryAutoScroll = () => {
    galleryPauseUntilRef.current = performance.now() + 4500
  }

  const keepGalleryLooped = () => {
    const scroller = galleryScrollerRef.current
    if (!scroller) return
    normalizeGalleryPosition(scroller)
  }

  return (
    <div className={styles.invitation}>
      <AnimatePresence>
        {introPhase !== 'done' && (
          <motion.div
            key="intro-backdrop"
            className={styles.introBackdrop}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {(introPhase === 'preload' || introPhase === 'montage') && (
          <motion.div
            key="montage"
            className={styles.montage}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            {introImages.map((src, index) => (
              <motion.div
                className={styles.montageFrame}
                key={src}
                initial={false}
                animate={{
                  opacity: introPhase === 'montage' && montageIndex === index
                    ? Math.max(0.12, 0.56 - index * 0.024)
                    : 0,
                }}
                transition={{ duration: 0.14, ease: 'easeInOut' }}
              >
                <Image
                  src={src}
                  alt={`Kilas momen ${wedding.groomShortName} dan ${wedding.brideShortName}`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : 'eager'}
                  sizes="100vw"
                  quality={38}
                  className={styles.montageImage}
                  onLoad={() => markIntroImageReady(index)}
                  onError={() => markIntroImageReady(index)}
                />
              </motion.div>
            ))}
            {introPhase === 'montage' && (
              <>
                <div className={styles.montageVeil} />
                <motion.span
                  className={styles.montageCaption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.62 }}
                  transition={{ duration: 1.2, delay: 0.35 }}
                >
                  {t.montageCaption}
                </motion.span>
              </>
            )}
          </motion.div>
        )}

        {introPhase === 'pause' && (
          <motion.div
            key="pause"
            className={styles.introPause}
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.34, 0.34, 0] }}
              transition={{ duration: 2.7, times: [0, 0.25, 0.7, 1] }}
            >
              {wedding.groomShortName.charAt(0)} &amp; {wedding.brideShortName.charAt(0)}
            </motion.span>
          </motion.div>
        )}

        {introPhase === 'splash' && (
          <motion.div
            key="splash"
            className={styles.splash}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <span className={styles.splashMark}>{wedding.groomShortName.charAt(0)} &amp; {wedding.brideShortName.charAt(0)}</span>
            <motion.div
              className={styles.splashMessage}
              initial={{ opacity: 0, filter: 'blur(14px)', y: 8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {splashStep === 1
                ? <p>{t.splashInvitation}</p>
                : <strong>{wedding.groomShortName} &amp; {wedding.brideShortName}</strong>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!opened && (
          <motion.div
            key="cover"
            className={styles.cover}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src={ramaImage(33)}
              alt={`${wedding.groomShortName} dan ${wedding.brideShortName}`}
              fill
              priority
              sizes="100vw"
              className={styles.coverImage}
              onLoad={() => setCoverReady(true)}
              onError={() => setCoverReady(true)}
            />
            <div className={styles.coverVeil} />
            <motion.div
              className={styles.coverContent}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
            >
              <p className={styles.eyebrowLight}>{t.coverEyebrow}</p>
              <h1 className={styles.coverNames}>
                {wedding.groomShortName} <span>&amp;</span> {wedding.brideShortName}
              </h1>
              <div className={styles.coverGuest}>
                <span>{t.dearGuest}</span>
                <strong>{guestName}</strong>
              </div>
              <button className={styles.openButton} onClick={openInvitation} type="button">
                {t.openInvitation}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <div className={styles.floatingControls}>
          <button
            type="button"
            className={styles.musicButton}
            onClick={toggleMusic}
            aria-label={isPlaying ? t.musicOn : t.musicOff}
          >
            {isPlaying ? <Music2 size={16} /> : <VolumeX size={16} />}
          </button>
          <div className={styles.languageControl}>
            <button
              type="button"
              className={styles.languageButton}
              onClick={() => setLanguageMenuOpen((current) => !current)}
              aria-label={t.language}
              aria-expanded={languageMenuOpen}
            >
              <Languages size={15} />
            </button>
            <AnimatePresence>
              {languageMenuOpen && (
                <motion.div
                  className={styles.languageMenu}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                >
                  {ramaLocales.map((availableLocale) => (
                    <button
                      key={availableLocale}
                      type="button"
                      className={availableLocale === locale ? styles.languageOptionActive : undefined}
                      onClick={() => {
                        setLocale(availableLocale)
                        setLanguageMenuOpen(false)
                      }}
                    >
                      <span>{availableLocale === 'yue' ? '粵' : availableLocale.toUpperCase()}</span>
                      {ramaTranslations[availableLocale].localeName}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <main>
        <section className={styles.hero}>
          <motion.div
            className={styles.heroMedia}
            initial={{ opacity: 0 }}
            animate={{ opacity: opened ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={heroSlides[heroSlideIndex]}
                className={styles.heroSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.45, ease: 'easeInOut' }}
              >
                <Image
                  src={heroSlides[heroSlideIndex]}
                  alt={`Foto prewedding ${wedding.groomShortName} dan ${wedding.brideShortName} ${heroSlideIndex + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.heroImage}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroTopline}>
            <span>{wedding.groomShortName.charAt(0)}</span>
            <p>{t.heroCeremony}</p>
            <span>{wedding.brideShortName.charAt(0)}</span>
          </div>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 32, filter: 'blur(14px)' }}
            animate={opened
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 32, filter: 'blur(14px)' }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.eyebrowLight}>{t.heroEyebrow}</p>
            <h2 className={styles.heroNames}>
              <span>{wedding.groomShortName} <i>&amp;</i></span>
              <span>{wedding.brideShortName}</span>
            </h2>
            <p className={styles.heroDate}>{localizedDateLabel}</p>
          </motion.div>
          <a className={styles.scrollCue} href="#welcome" aria-label={t.explore}>
            <span>{t.explore}</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className={styles.welcome} id="welcome">
          <motion.p className={styles.sanskrit} {...reveal}>ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ</motion.p>
          <motion.h2 className={styles.welcomeTitle} {...reveal}>
            {t.welcomeTitle.split('\n').map((line, index) => (
              <span key={line}>{index > 0 && <br />}{line}</span>
            ))}
          </motion.h2>
          <motion.p className={styles.welcomeCopy} {...reveal}>
            {t.welcomeCopy}
          </motion.p>
        </section>

        <section className={styles.coupleSection}>
          <div className={styles.sectionHeading}>
            <motion.p {...reveal}>{t.coupleKicker}</motion.p>
            <motion.h2 {...reveal}>{t.coupleTitle}</motion.h2>
          </div>

          <div className={styles.coupleGrid}>
            <motion.article className={styles.personCard} {...reveal}>
              <div className={styles.personImageWrap}>
                <Image
                  src={ramaImage(4)}
                  alt={wedding.groomFullName}
                  fill
                  sizes="(max-width: 760px) 88vw, 38vw"
                  className={styles.personImage}
                />
                <span className={styles.personNumber}>01</span>
              </div>
              <div className={styles.personCopy}>
                <p>{t.groom}</p>
                <h3>{wedding.groomShortName}</h3>
                <strong>{wedding.groomFullName}</strong>
                <div className={styles.familyInfo}>
                  <span>{locale === 'id' ? wedding.groomChildOrder : t.groomChildOrder}</span>
                  <small>{wedding.groomParents}</small>
                </div>
              </div>
            </motion.article>

            <motion.article className={`${styles.personCard} ${styles.personCardBride}`} {...reveal}>
              <div className={styles.personImageWrap}>
                <Image
                  src={ramaImage(1)}
                  alt={wedding.brideFullName}
                  fill
                  sizes="(max-width: 760px) 88vw, 38vw"
                  className={styles.personImage}
                />
                <span className={styles.personNumber}>02</span>
              </div>
              <div className={styles.personCopy}>
                <p>{t.bride}</p>
                <h3>{wedding.brideShortName}</h3>
                <strong>{wedding.brideFullName}</strong>
                <div className={styles.familyInfo}>
                  <span>{locale === 'id' ? wedding.brideChildOrder : t.brideChildOrder}</span>
                  <small>{wedding.brideParents}</small>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className={styles.dateSection}>
          <Image
            src={ramaImage(25)}
            alt={`${wedding.groomShortName} dan ${wedding.brideShortName}`}
            fill
            sizes="100vw"
            className={styles.dateImage}
          />
          <div className={styles.dateOverlay} />
          <motion.div className={styles.dateCard} {...reveal}>
            <p className={styles.eyebrowLight}>{t.saveDate}</p>
            <h2>{t.happyDay}</h2>
            <div className={styles.goldRule} />
            <p className={styles.comingSoon}>{localizedDateLabel}</p>
            <p className={styles.eventTime}>{localizedTimeLabel}</p>
            <p className={styles.dateDescription}>{wedding.venueName}, {wedding.venueAddress}.</p>
            <div className={styles.countdown} aria-label={t.countdownLabel}>
              {[
                [t.days, countdown?.days],
                [t.hours, countdown?.hours],
                [t.minutes, countdown?.minutes],
                [t.seconds, countdown?.seconds],
              ].map(([label, value]) => (
                <div key={label}>
                  <strong>{value ?? '--'}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.eventActions}>
              <a className={styles.mapButton} href={wedding.mapUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackManagedEvent('MAP_CLICK')}>
                <MapPin size={14} />
                {t.viewLocation}
              </a>
              <a className={styles.mapButton} href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackManagedEvent('CALENDAR_CLICK')}>
                <CalendarPlus size={14} />
                Google Calendar
              </a>
              <a className={styles.mapButton} href={invitationSlug ? `/api/public/invitations/${encodeURIComponent(invitationSlug)}/calendar` : '/rama-mita-wedding.ics'} onClick={() => trackManagedEvent('CALENDAR_CLICK')}>
                <CalendarPlus size={14} />
                Apple / iPhone
              </a>
            </div>
          </motion.div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.galleryIntro}>
            <motion.p {...reveal}>{t.galleryKicker}</motion.p>
            <motion.h2 {...reveal}>{t.galleryTitle}</motion.h2>
            <motion.span {...reveal}>{t.galleryDescription}</motion.span>
          </div>
          <motion.div className={styles.galleryRail}>
            <div
              className={styles.galleryScroller}
              ref={galleryScrollerRef}
              onPointerDown={pauseGalleryAutoScroll}
              onTouchStart={pauseGalleryAutoScroll}
              onKeyDown={pauseGalleryAutoScroll}
              onScroll={keepGalleryLooped}
              tabIndex={0}
              aria-label={t.galleryLabel}
            >
              {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => {
                const imageIndex = index % galleryImages.length
                const shouldAnimate = index >= galleryImages.length && index < galleryImages.length * 2
                return (
                <motion.button
                  type="button"
                  className={styles.galleryItem}
                  key={`${image}-${index}`}
                  onClick={() => {
                    setLightboxDirection(1)
                    setSelectedImage(imageIndex)
                  }}
                  aria-label={`${t.openPhoto} ${imageIndex + 1}`}
                  initial={shouldAnimate ? { opacity: 0.48, y: 24, filter: 'blur(12px)' } : false}
                  whileInView={shouldAnimate ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
                  viewport={shouldAnimate ? { once: true, amount: 0.18 } : undefined}
                  transition={shouldAnimate ? {
                    duration: 1.8,
                    delay: (imageIndex % 3) * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  } : undefined}
                >
                  <Image
                    src={image}
                    alt={`Momen ${wedding.groomShortName} dan ${wedding.brideShortName} ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 760px) 68vw, 28vw"
                    className={styles.galleryImage}
                  />
                  <span>{String(imageIndex + 1).padStart(2, '0')}</span>
                </motion.button>
                )
              })}
            </div>
            <div className={styles.galleryControls}>
              <span>{t.galleryHint}</span>
              <div>
                <button
                  type="button"
                  onClick={() => scrollGallery(-1)}
                  aria-label={t.previousPhoto}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery(1)}
                  aria-label={t.nextPhoto}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.rsvpSection}>
          <motion.div className={styles.rsvpIntro} {...reveal}>
            <p>{t.rsvpKicker}</p>
            <h2>{t.rsvpTitle}</h2>
            <span>{t.rsvpDescription}</span>
          </motion.div>

          <motion.form className={styles.rsvpForm} onSubmit={submitRsvp} {...reveal}>
            <label>
              <span>{t.fullName}</span>
              <input
                type="text"
                value={rsvp.name}
                onChange={(event) => setRsvp((current) => ({ ...current, name: event.target.value }))}
                placeholder={t.yourName}
                required
              />
            </label>
            <label>
              <span>{t.whatsapp} <small>({t.optional})</small></span>
              <input
                type="tel"
                value={rsvp.phone}
                onChange={(event) => setRsvp((current) => ({ ...current, phone: event.target.value }))}
                onBlur={() => setRsvp((current) => ({ ...current, phone: normalizeIndonesianPhone(current.phone) || current.phone }))}
                placeholder="08xxxxxxxxxx"
              />
            </label>
            <fieldset>
              <legend>{t.attendanceQuestion}</legend>
              <div className={styles.attendanceOptions}>
                {[
                  ['HADIR', t.attending],
                  ['TIDAK_HADIR', t.notAttending],
                  ['BELUM_TAHU', t.unsure],
                ].map(([value, label]) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="attendance"
                      value={value}
                      checked={rsvp.status === value}
                      onChange={() => setRsvp((current) => ({ ...current, status: value as RsvpState['status'] }))}
                      required
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label>
              <span>{t.wishes}</span>
              <textarea
                value={rsvp.message}
                onChange={(event) => setRsvp((current) => ({ ...current, message: event.target.value }))}
                placeholder={t.wishesPlaceholder}
                rows={4}
              />
            </label>
            <button className={styles.submitButton} type="submit" disabled={submitState === 'loading'}>
              {submitState === 'loading' ? t.sending : t.submit}
            </button>
            {submitState === 'success' && (
              <p className={styles.successMessage}><CheckCircle2 size={17} /> {t.submitSuccess}</p>
            )}
            {submitState === 'error' && (
              <p className={styles.errorMessage}>{t.submitError}</p>
            )}
          </motion.form>
        </section>

        <section className={styles.confirmationsSection}>
          <motion.div className={styles.confirmationsHeading} {...reveal}>
            <p>{t.confirmationsKicker}</p>
            <h2>{t.confirmationsTitle}</h2>
            <span>{t.confirmationsDescription}</span>
          </motion.div>

          <div className={styles.confirmationsGrid}>
            {visibleConfirmations.map((item, index) => (
              <motion.article
                className={styles.confirmationCard}
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: 1.8,
                  delay: (index % 3) * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className={styles.confirmationMeta}>
                  <span>{item.name.slice(0, 1).toUpperCase()}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.status === 'HADIR' ? t.statusAttending : item.status === 'TIDAK_HADIR' ? t.statusNotAttending : t.statusUnsure}</small>
                  </div>
                </div>
                <p>“{item.message}”</p>
              </motion.article>
            ))}
          </div>

          {confirmationPageCount > 1 && (
            <nav className={styles.confirmationPagination} aria-label={t.confirmationsPagination}>
              <button
                type="button"
                onClick={() => setConfirmationPage((current) => Math.max(1, current - 1))}
                disabled={confirmationPage === 1}
                aria-label={t.previous}
              >
                <ChevronLeft size={16} />
                {t.previous}
              </button>
              <span>{String(confirmationPage).padStart(2, '0')} / {String(confirmationPageCount).padStart(2, '0')}</span>
              <button
                type="button"
                onClick={() => setConfirmationPage((current) => Math.min(confirmationPageCount, current + 1))}
                disabled={confirmationPage === confirmationPageCount}
                aria-label={t.next}
              >
                {t.next}
                <ChevronRight size={16} />
              </button>
            </nav>
          )}
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerMonogram}>{wedding.groomShortName.charAt(0)}<span>&amp;</span>{wedding.brideShortName.charAt(0)}</div>
          <p>{t.footerMessage}</p>
          <h2>{wedding.groomShortName} &amp; {wedding.brideShortName}</h2>
          <small>{t.madeWithLove} {wedding.creatorCredit}</small>
        </footer>
      </main>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button type="button" className={styles.lightboxClose} onClick={() => setSelectedImage(null)} aria-label={t.closeGallery}>
              <X size={20} />
            </button>
            <button type="button" className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={(event) => { event.stopPropagation(); previousImage() }} aria-label={t.previousPhoto}>
              <ChevronLeft size={22} />
            </button>
            <AnimatePresence initial={false} custom={lightboxDirection}>
              <motion.div
                key={galleryImages[selectedImage]}
                className={styles.lightboxImageWrap}
                custom={lightboxDirection}
                variants={{
                  initial: (direction: 1 | -1) => ({ opacity: 0, x: direction * 34, scale: 0.985 }),
                  animate: { opacity: 1, x: 0, scale: 1 },
                  exit: (direction: 1 | -1) => ({ opacity: 0, x: direction * -34, scale: 0.99 }),
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`Momen ${wedding.groomShortName} dan ${wedding.brideShortName} ${selectedImage + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                />
              </motion.div>
            </AnimatePresence>
            <div className={styles.lightboxCaption}>
              <p>{t.heroEyebrow}</p>
              <h2>{wedding.groomShortName} <i>&amp;</i> {wedding.brideShortName}</h2>
              <span>{localizedDateLabel}</span>
            </div>
            <button type="button" className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={(event) => { event.stopPropagation(); nextImage() }} aria-label={t.nextPhoto}>
              <ChevronRight size={22} />
            </button>
            <span className={styles.lightboxCount}>{selectedImage + 1} / {galleryImages.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
