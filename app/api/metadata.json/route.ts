import { NextResponse } from 'next/server'
import { getMetadata } from '@/lib/metadata'

function getBaseUrl(request: Request): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'http'
  
  if (host) {
    return `${protocol}://${host}`
  }
  
  return 'http://localhost:3000'
}

export async function GET(request: Request) {
  const baseUrl = getBaseUrl(request)
  const metadata = getMetadata(baseUrl)

  return NextResponse.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

