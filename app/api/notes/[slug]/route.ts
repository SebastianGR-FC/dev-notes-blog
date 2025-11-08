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

  // Return the raw markdown file directly
  const notesDirectory = path.join(process.cwd(), 'content/notes')
  const fullPath = path.join(notesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Return markdown file directly with proper content-type
  return new NextResponse(fileContents, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Content-Disposition': `inline; filename="${slug}.md"`,
    },
  })
}

