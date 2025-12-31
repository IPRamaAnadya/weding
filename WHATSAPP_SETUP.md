# WhatsApp Message Service Setup

This project integrates with Fonnte API to send WhatsApp messages for wedding invitations and RSVP confirmations.

## Configuration

1. Get your Fonnte API token from [https://fonnte.com](https://fonnte.com)

2. Add the token to your `.env.local` file:
```env
FONNTE_API_TOKEN=your_fonnte_token_here
```

## API Endpoint

### POST `/api/whatsapp/send`

Send WhatsApp messages via Fonnte API.

**Request Body:**
```json
{
  "target": "08123456789|John Doe|Guest",
  "message": "Hello {name}, this is a test message for {var1}",
  "url": "https://example.com/image.jpg",
  "filename": "invitation.jpg",
  "delay": "2",
  "countryCode": "62"
}
```

**Parameters:**
- `target` (required): Phone number with format `phone|name|role`. Multiple targets can be separated by commas.
- `message` (required): Message text. Can include variables like `{name}`, `{var1}` which will be replaced.
- `url` (optional): URL of image to send
- `filename` (optional): Name for the file
- `delay` (optional): Delay between messages in seconds (default: "2")
- `countryCode` (optional): Country code (default: "62" for Indonesia)

## Usage Examples

### 1. Using the API directly:

```typescript
const response = await fetch('/api/whatsapp/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    target: '081234567890|John Doe|Guest',
    message: 'Hello {name}! You are invited to our wedding.',
    countryCode: '62',
  }),
})

const result = await response.json()
```

### 2. Using helper functions:

```typescript
import { sendInvitation, sendRSVPConfirmation } from '@/lib/whatsapp'

// Send wedding invitation
await sendInvitation(
  '081234567890',
  'John Doe',
  'https://wedding.com/invitation/john-doe'
)

// Send RSVP confirmation
await sendRSVPConfirmation(
  '081234567890',
  'John Doe',
  'HADIR'
)
```

### 3. Send to multiple recipients:

```typescript
const response = await fetch('/api/whatsapp/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    target: '081234567890|John|Guest,082345678901|Jane|VIP',
    message: 'Hello {name}! You are invited as {var1}.',
    delay: '3',
  }),
})
```

## Integration with RSVP

You can integrate WhatsApp notifications in your attendance API:

```typescript
// In src/app/api/attendance/route.ts
import { sendRSVPConfirmation } from '@/lib/whatsapp'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, phone, status } = body
  
  // Save to database
  const attendance = await prisma.attendance.create({ data: body })
  
  // Send WhatsApp confirmation
  if (phone) {
    try {
      await sendRSVPConfirmation(phone, name, status)
    } catch (error) {
      console.error('Failed to send WhatsApp confirmation:', error)
      // Continue even if WhatsApp fails
    }
  }
  
  return NextResponse.json(attendance)
}
```

## Message Variables

The following variables can be used in messages:
- `{name}`: Will be replaced with the recipient's name from the target field
- `{var1}`: Will be replaced with the role/third parameter from the target field
- Custom variables can be added based on Fonnte documentation

## Error Handling

The API will return appropriate error messages:
- 400: Missing required fields (target or message)
- 500: API token not configured or Fonnte API error

Always wrap API calls in try-catch blocks and handle errors gracefully.
