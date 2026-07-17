import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import DashboardNav from './nav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login?callbackUrl=/dashboard')

  return (
    <div className="min-h-screen bg-[#f3f0e9] text-[#171816]">
      <DashboardNav email={session.user?.email || 'Admin'} />
      {children}
    </div>
  )
}
