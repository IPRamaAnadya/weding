import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const admin = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
          select: { id: true, name: true, email: true, image: true, passwordHash: true, isAdmin: true },
        })
        if (!admin?.isAdmin || !admin.passwordHash || !verifyPassword(credentials.password, admin.passwordHash)) return null

        return {
          id: admin.id,
          name: admin.name || 'Administrator',
          email: admin.email,
          image: admin.image,
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
