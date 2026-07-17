'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)
    if (result?.error) {
      setError('Email atau password admin tidak sesuai.')
      return
    }

    const callbackUrl = new URLSearchParams(window.location.search).get('callbackUrl')
    router.replace(callbackUrl?.startsWith('/') && !callbackUrl.startsWith('//') ? callbackUrl : '/dashboard')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-[#f3f0e9] px-6 py-16 text-[#171816]">
      <div className="mx-auto flex min-h-[75vh] max-w-md items-center">
        <form onSubmit={submit} className="w-full bg-[#fbfaf6] p-8 shadow-[0_24px_80px_rgba(23,24,22,0.08)] md:p-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-black/45">Wedding Console</p>
          <h1 className="mb-3 font-serif text-4xl tracking-[-0.04em]">Admin login</h1>
          <p className="mb-10 text-sm leading-6 text-black/50">Masuk untuk mengelola undangan, tamu, RSVP, dan analytics.</p>

          <label className="mb-6 block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-black/50">Email</span>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 outline-none focus:border-black" required />
          </label>

          <label className="mb-8 block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-black/50">Password</span>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 outline-none focus:border-black" required />
          </label>

          <button type="submit" disabled={loading} className="w-full bg-[#171816] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white disabled:opacity-50">
            {loading ? 'Memeriksa...' : 'Masuk ke dashboard'}
          </button>
          {error && <p className="mt-5 text-sm text-red-700">{error}</p>}
        </form>
      </div>
    </main>
  )
}
