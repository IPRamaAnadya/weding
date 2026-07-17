'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function DashboardNav({ email }: { email: string }) {
  return (
    <header className="border-b border-black/10 bg-[#fbfaf6] px-5 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/dashboard" className="font-serif text-xl tracking-[-0.03em]">Wedding Console</Link>
        <div className="flex items-center gap-5">
          <span className="hidden text-xs text-black/45 sm:block">{email}</span>
          <button type="button" onClick={() => signOut({ callbackUrl: '/admin/login' })} className="text-[10px] uppercase tracking-[0.16em] text-black/65">Keluar</button>
        </div>
      </div>
    </header>
  )
}
