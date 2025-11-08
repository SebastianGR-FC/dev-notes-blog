import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const notesDirectory = path.join(process.cwd(), 'content/notes')

// Helper function to ensure date is always a string
function ensureDateString(date: any): string {
  if (!date) return ''
  if (date instanceof Date) {
    return date.toISOString().split('T')[0] // Return YYYY-MM-DD format
  }
  if (typeof date === 'string') {
    return date
  }
  return String(date)
}

export interface Note {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  categories?: string[]
  published?: boolean
  content: string
}

export async function getNotesList(): Promise<Omit<Note, 'content'>[]> {
  if (!fs.existsSync(notesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(notesDirectory)
  const allNotesData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(notesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      // Jekyll compatibility: published defaults to true if not specified
      const published = data.published !== false

      return {
        slug,
        title: data.title || slug,
        date: ensureDateString(data.date),
        excerpt: data.excerpt,
        tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
        categories: Array.isArray(data.categories) ? data.categories : (data.categories ? [data.categories] : []),
        published,
      }
    })
    .filter((note) => note.published) // Only return published notes (Jekyll behavior)

  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getNote(slug: string): Promise<Note | null> {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    // Jekyll compatibility: published defaults to true if not specified
    const published = data.published !== false

    return {
      slug,
      title: data.title || slug,
      date: ensureDateString(data.date),
      excerpt: data.excerpt,
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      categories: Array.isArray(data.categories) ? data.categories : (data.categories ? [data.categories] : []),
      published,
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

