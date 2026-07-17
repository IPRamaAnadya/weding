'use client'

import {
  createContext,
  useContext,
  useRef,
  ReactNode,
} from 'react'

type AudioContextType = {
  play: () => Promise<boolean>
  pause: () => void
  toggle: () => void
  unlock: () => Promise<void>
}

const AudioContext = createContext<AudioContextType | undefined>(
  undefined
)

const START_AT_SECONDS = 0

export function AudioProvider({
  children,
}: {
  children: ReactNode
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const unlockedRef = useRef(false)

  /* 🔓 Required for mobile browsers */
  const unlock = async () => {
    const audio = audioRef.current
    if (!audio || unlockedRef.current) return

    try {
      await audio.play()   // must be user gesture
      audio.pause()
      audio.currentTime = START_AT_SECONDS
      unlockedRef.current = true
    } catch (e) {
      console.error('Audio unlock failed', e)
    }
  }

  const play = async () => {
    const audio = audioRef.current
    if (!audio) return false

    audio.currentTime = START_AT_SECONDS
    audio.loop = false

    try {
      await audio.play()
      unlockedRef.current = true
      return true
    } catch {
      return false
    }
  }

  const pause = () => {
    audioRef.current?.pause()
  }

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) void play()
    else pause()
  }

  return (
    <AudioContext.Provider value={{ play, pause, toggle, unlock }}>
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
        webkit-playsinline="true"
      >
        <source src="/music/nothing.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioContext)
  if (!ctx) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return ctx
}
