import { randomBytes, scryptSync } from 'node:crypto'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../src/generated/client/index.js'

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
const password = process.env.ADMIN_PASSWORD

if (!email || !password) {
  throw new Error('ADMIN_EMAIL dan ADMIN_PASSWORD wajib tersedia untuk menjalankan seed admin.')
}

if (password.length < 12) {
  throw new Error('ADMIN_PASSWORD minimal 12 karakter.')
}

const salt = randomBytes(16).toString('hex')
const passwordHash = `scrypt$${salt}$${scryptSync(password, salt, 64).toString('hex')}`
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

try {
  await prisma.user.updateMany({ data: { isAdmin: false } })
  await prisma.user.upsert({
    where: { email },
    update: {
      name: 'Administrator',
      passwordHash,
      isAdmin: true,
    },
    create: {
      name: 'Administrator',
      email,
      passwordHash,
      isAdmin: true,
    },
  })
} finally {
  await prisma.$disconnect()
}
