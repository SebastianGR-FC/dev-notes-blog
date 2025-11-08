import Link from 'next/link'
import { getNotesList } from '@/lib/notes'

export default async function Home() {
  const notes = await getNotesList()

  return (
    <div className="container">
      <header className="header">
        <h1>~/dev-notes</h1>
        <p className="meta">Development notes and thoughts</p>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/api/metadata.json">Metadata</Link>
          <Link href="/api/files.json">Files List</Link>
        </nav>
      </header>

      <main>
        <h2>Recent Notes</h2>
        <ul className="notes-list">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`}>
                <h3>{note.title}</h3>
                <div className="date">{String(note.date || '')}</div>
                {note.excerpt && (
                  <div className="excerpt">{note.excerpt}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>Built with Next.js • Deployed on Vercel</p>
      </footer>
    </div>
  )
}

