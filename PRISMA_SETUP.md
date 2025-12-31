# Prisma & NextAuth Setup Guide

## Setup Complete! ✅

The following has been configured:

### 1. **Prisma Schema** (`prisma/schema.prisma`)
   - NextAuth models (User, Account, Session, VerificationToken)
   - Invitation model (name, phone - optional)
   - Attendance model (name, phone - optional, status, message)
   - AttendanceStatus enum: `HADIR`, `TIDAK_HADIR`, `BELUM_TAHU`

### 2. **NextAuth Configuration** (`src/app/api/auth/[...nextauth]/route.ts`)
   - Configured with Prisma adapter
   - Ready for authentication providers

### 3. **Prisma Client** (`src/lib/prisma.ts`)
   - Singleton instance for database access
   - Optimized for development and production

### 4. **API Routes**
   - `POST /api/invitation` - Create invitation
   - `GET /api/invitation` - Get all invitations
   - `POST /api/attendance` - Create attendance record
   - `GET /api/attendance` - Get all attendance records

## Next Steps

### 1. Start Database
```bash
npx prisma dev
```

### 2. Run Migration
```bash
npx prisma migrate dev --name init
```

### 3. Generate Prisma Client (if needed)
```bash
npx prisma generate
```

### 4. Update Environment Variables
Edit `.env` and add:
```
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

Generate a secret with:
```bash
openssl rand -base64 32
```

### 5. View Database (Optional)
```bash
npx prisma studio
```

## API Usage Examples

### Create Invitation
```typescript
const response = await fetch('/api/invitation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    phone: '081234567890' // optional
  })
})
```

### Create Attendance
```typescript
const response = await fetch('/api/attendance', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jane Doe',
    phone: '081234567890', // optional
    status: 'HADIR', // or 'TIDAK_HADIR' or 'BELUM_TAHU'
    message: 'Selamat menikah!' // optional
  })
})
```

## Database Schema

### Invitation
- `id`: String (CUID)
- `name`: String (required)
- `phone`: String (optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Attendance
- `id`: String (CUID)
- `name`: String (required)
- `phone`: String (optional)
- `status`: AttendanceStatus (HADIR | TIDAK_HADIR | BELUM_TAHU)
- `message`: String (optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

## Installed Packages
- `prisma` - Prisma CLI and tools
- `@prisma/client` - Prisma Client for database access
- `next-auth` - NextAuth for authentication
- `@next-auth/prisma-adapter` - Prisma adapter for NextAuth
- `zod` - Schema validation for API routes
