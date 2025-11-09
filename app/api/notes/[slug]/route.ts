import { NextResponse } from 'next/server'
import { getNote } from '@/lib/notes'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  // Remove .md extension if present to get the actual slug
  const cleanSlug = slug.endsWith('.md') ? slug.slice(0, -3) : slug
  const note = await getNote(cleanSlug)

  if (!note) {
    return NextResponse.json(
      { error: 'Note not found' },
      { status: 404 }
    )
  }

  // Return the raw markdown file directly
  const notesDirectory = path.join(process.cwd(), 'content/notes')
  const fullPath = path.join(notesDirectory, `${cleanSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Return markdown file directly with proper content-type
  return new NextResponse(fileContents, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Content-Disposition': `inline; filename="${cleanSlug}.md"`,
    },
  })
}

