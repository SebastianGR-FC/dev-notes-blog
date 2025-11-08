import Link from 'next/link'
import { getMetadata } from '@/lib/metadata'

function formatDate(dateValue: string | Date | undefined): string {
  if (!dateValue) return 'N/A'
  try {
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue)
    return date.toLocaleString()
  } catch {
    return String(dateValue)
  }
}

export default async function ProfilePage() {
  // Use production URL directly
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dev-notes-rbr.netlify.app'
  const metadata = getMetadata(baseUrl)

  return (
    <div className="container">
      <header className="header">
        <h1>Profile</h1>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/api/metadata.json">Metadata JSON</Link>
          <Link href="/api/files.json">Files List</Link>
        </nav>
      </header>

      <main>
        <div className="profile">
          <div className="profile-header">
            {metadata.profile.avatar && (
              <img 
                src={metadata.profile.avatar} 
                alt={metadata.profile.name}
                className="avatar"
              />
            )}
            <div>
              <h2>{metadata.profile.name}</h2>
              <p className="meta">Version: {metadata.version}</p>
            </div>
          </div>

          {metadata.profile.contact && (
            <div>
              <h3>Contact</h3>
              <div className="contact-links">
                {metadata.profile.contact.github && (
                  <a 
                    href={`https://github.com/${metadata.profile.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub: {metadata.profile.contact.github}
                  </a>
                )}
                {metadata.profile.contact.linkedin && (
                  <a 
                    href={metadata.profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {metadata.profile.contact.twitter && (
                  <a 
                    href={`https://twitter.com/${metadata.profile.contact.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {metadata.profile.contact.twitter}
                  </a>
                )}
                {metadata.profile.contact.email && (
                  <a href={`mailto:${metadata.profile.contact.email}`}>
                    Email: {metadata.profile.contact.email}
                  </a>
                )}
                {metadata.profile.contact.website && (
                  <a 
                    href={metadata.profile.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
                {metadata.profile.contact.other && metadata.profile.contact.other.map((link: any, index: number) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label || link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '20px' }}>
            <h3>File List</h3>
            <p>URL: <a href={metadata.fileList.url} target="_blank" rel="noopener noreferrer">{metadata.fileList.url}</a></p>
            <p>Format: {metadata.fileList.format}</p>
            <p>Last Updated: {formatDate(metadata.fileList.lastUpdated)}</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built with Next.js • Deployed on Netlify</p>
      </footer>
    </div>
  )
}

