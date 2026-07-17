import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function isAdminSession() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return false
  const admin = await prisma.user.findUnique({
    where: { email: session.user.email.toLowerCase() },
    select: { isAdmin: true },
  })
  return admin?.isAdmin === true
}

export function normalizeWeddingSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
