import { NextRequest, NextResponse } from 'next/server'

interface SendMessageRequest {
  target: string // Phone number(s) with format: 08123456789|Name|Role
  message: string // Message with variables like {name}, {var1}
  url?: string // Image URL
  filename?: string
  delay?: string // Delay between messages in seconds
  countryCode?: string // Default: '62' for Indonesia
}

export async function POST(request: NextRequest) {
  try {
    const body: SendMessageRequest = await request.json()
    const { target, message, url, filename, delay = '2', countryCode = '62' } = body

    if (!target || !message) {
      return NextResponse.json(
        { error: 'Target and message are required' },
        { status: 400 }
      )
    }

    const token = process.env.FONNTE_API_TOKEN
    if (!token) {
      return NextResponse.json(
        { error: 'Fonnte API token is not configured' },
        { status: 500 }
      )
    }

    // Prepare form data
    const formData = new FormData()
    formData.append('target', target)
    formData.append('message', message)
    formData.append('countryCode', countryCode)
    formData.append('delay', delay)

    if (url) {
      formData.append('url', url)
    }

    if (filename) {
      formData.append('filename', filename)
    }

    // Send request to Fonnte API
    const response = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: formData,
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to send message', details: data },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error('WhatsApp send error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
