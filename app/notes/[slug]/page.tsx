import Link from 'next/link'
import { getNote, getNotesList } from '@/lib/notes'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const notes = await getNotesList()
  return notes.map((note) => ({
    slug: note.slug,
  }))
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const note = await getNote(slug)

  if (!note) {
    notFound()
  }

  return (
    <div className="container">
      <header className="header">
        <h1>{note.title}</h1>
        <div className="meta">
          <div>Date: {String(note.date || '')}</div>
          {note.categories && note.categories.length > 0 && (
            <div>Categories: {note.categories.join(', ')}</div>
          )}
          {note.tags && note.tags.length > 0 && (
            <div>Tags: {note.tags.join(', ')}</div>
          )}
        </div>
        <nav className="nav">
          <Link href="/">← Back to Notes</Link>
        </nav>
      </header>

      <main>
        <div dangerouslySetInnerHTML={{ __html: note.content }} />
      </main>

      <footer className="footer">
        <p>Built with Next.js • Deployed on Vercel</p>
      </footer>
    </div>
  )
}

