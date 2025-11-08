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
  
  const filesList = {
    files: notes.map((note) => ({
      slug: note.slug,
      url: `${baseUrl}/api/notes/${note.slug}`,
      title: note.title,
      date: note.date,
      excerpt: note.excerpt,
      tags: note.tags || [],
      categories: note.categories || [],
    })),
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(filesList, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

