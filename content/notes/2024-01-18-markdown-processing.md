---
title: Markdown Processing Pipeline
date: 2024-01-18
excerpt: How notes are processed from markdown files to HTML
categories: [development]
tags: [markdown, processing, nextjs]
published: true
---

# Markdown Processing Pipeline

Implemented the markdown processing system using `gray-matter` for frontmatter parsing and `remark` for markdown-to-HTML conversion.

## File Structure

Notes are stored as `.md` files in `content/notes/` with frontmatter:

```markdown
---
title: Note Title
date: 2024-01-18
excerpt: Short description
tags: [tag1, tag2]
---

# Content here
```

## Processing Flow

1. **Read file** - `fs.readFileSync()` reads the markdown file
2. **Parse frontmatter** - `gray-matter` extracts YAML frontmatter and content
3. **Convert to HTML** - `remark().use(html).process()` converts markdown to HTML
4. **Store metadata** - Frontmatter data is stored separately for listings

## Static Generation

Using Next.js static generation (`generateStaticParams`) so all notes are pre-rendered at build time. This makes the site fast and works well with Vercel's deployment.

## API Endpoints

The API endpoints return different formats:
- Web pages: HTML (processed markdown)
- API: Raw markdown with frontmatter (for other clients)

This dual approach allows the blog to work as a website and as a data source for aggregators.

