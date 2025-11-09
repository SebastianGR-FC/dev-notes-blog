import { NextResponse } from 'next/server'
import { getNotesList } from '@/lib/notes'

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
  const notes = await getNotesList()
  const baseUrl = getBaseUrl(request)
  
  // Only return links to notes with .md extension
  const filesList = {
    files: notes.map((note) => ({
      url: `${baseUrl}/api/notes/${note.slug}.md`,
    })),
  }

  return NextResponse.json(filesList, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

