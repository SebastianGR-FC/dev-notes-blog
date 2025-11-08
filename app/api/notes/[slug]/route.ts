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

  return NextResponse.json(
    {
      slug: note.slug,
      title: note.title,
      date: note.date,
      excerpt: note.excerpt,
      tags: note.tags || [],
      categories: note.categories || [],
      published: note.published,
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

