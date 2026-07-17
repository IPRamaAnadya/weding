'use client'

import { useEffect } from 'react'
import RamaInvitation, { RamaWeddingData } from '@/components/rama/RamaInvitation'

export default function PublicWeddingView({
  slug,
  guestName,
  wedding,
}: {
  slug: string
  guestName: string
  wedding: Partial<RamaWeddingData>
}) {
  useEffect(() => {
    const storageKey = 'wedin-visitor-session'
    let sessionKey = window.sessionStorage.getItem(storageKey)
    if (!sessionKey) {
      sessionKey = window.crypto.randomUUID()
      window.sessionStorage.setItem(storageKey, sessionKey)
    }

    void fetch(`/api/public/invitations/${encodeURIComponent(slug)}/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ event: 'PAGE_VIEW', sessionKey }),
    })
  }, [slug])

  return (
    <RamaInvitation
      guestName={guestName}
      weddingData={wedding}
      invitationSlug={slug}
      showDummyConfirmations={false}
    />
  )
}
