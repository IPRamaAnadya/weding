'use client'

import { useRef } from 'react'

export function useAudioPlayer(
  startAtSeconds = 0,
  fadeInDuration = 2000,
  playDurationSeconds = 60
) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const play = () => {
    const audio = audioRef.current
    if (!audio) return

    // Clear previous stop timer
    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current)
      stopTimeoutRef.current = null
    }

    // Set start position
    audio.currentTime = startAtSeconds
    audio.volume = 0
    audio.loop = false

    audio
      .play()
      .then(() => {
        /* ================= FADE IN ================= */
        const step = 50
        const targetVolume = 1
        const increment = targetVolume / (fadeInDuration / step)
        let currentVolume = 0

        const fade = setInterval(() => {
          currentVolume += increment
          if (currentVolume >= targetVolume) {
            audio.volume = targetVolume
            clearInterval(fade)
          } else {
            audio.volume = currentVolume
          }
        }, step)

        /* ================= AUTO STOP ================= */
        stopTimeoutRef.current = setTimeout(() => {
          audio.pause()
          audio.currentTime = startAtSeconds
        }, playDurationSeconds * 1000)
      })
      .catch((error) => {
        console.error('Error playing audio:', error)
      })
  }

  const Audio = () => (
    <audio ref={audioRef} preload="auto">
      <source src="/music/music.mp3" type="audio/mpeg" />
    </audio>
  )

  return { Audio, play }
}
