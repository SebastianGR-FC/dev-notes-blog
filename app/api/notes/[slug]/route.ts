import { NextResponse } from 'next/server'
import { getNote } from '@/lib/notes'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const note = await getNote(slug)

  if (!note) {
    return NextResponse.json(
      { error: 'Note not found' },
      { status: 404 }
    )
  }

  // Return the raw markdown with frontmatter
  const notesDirectory = path.join(process.cwd(), 'content/notes')
  const fullPath = path.join(notesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Simplified API - focus on content with link
  const baseUrl = request.headers.get('host') 
    ? `${request.headers.get('x-forwarded-proto') || 'https'}://${request.headers.get('host')}`
    : 'https://dev-notes-rbr.netlify.app'
  
  return NextResponse.json(
    {
      url: `${baseUrl}/api/notes/${slug}`, // Main focus: link to this note
      content: fileContents, // Raw markdown with frontmatter (Jekyll format)
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}

