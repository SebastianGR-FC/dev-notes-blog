# Dev Notes Blog

A decentralized dev notes blog inspired by John Carmack's development notes. Built with Next.js and deployed on Vercel.

## Features

- 📝 Markdown-based notes with [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/) format
- 🎨 Vintage hacker-style UI
- 🔌 Three API endpoints for decentralized access:
  - `/api/metadata.json` - Profile and metadata
  - `/api/files.json` - List of all notes
  - `/api/notes/[slug]` - Individual note (raw markdown with frontmatter)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding Notes

Create markdown files in `content/notes/` with [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/) format:

```markdown
---
title: Your Note Title
date: 2024-01-20
excerpt: Short description
categories: [category1, category2]
tags: [tag1, tag2]
published: true
---

# Your content here
```

### Front Matter Fields

- **title** (required): The title of the note
- **date** (required): Publication date in format `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS +/-TTTT`
- **excerpt** (optional): Short description or summary
- **categories** (optional): Array of categories
- **tags** (optional): Array of tags
- **published** (optional): Boolean, defaults to `true`. Set to `false` to hide from listings

See `content/notes/FRONTMATTER-REFERENCE.md` for a complete reference guide.

## API Endpoints

### Metadata
`GET /api/metadata.json`

Returns profile information and file list location.

### Files List
`GET /api/files.json`

Returns array of all notes with metadata.

### Individual Note
`GET /api/notes/[slug]`

Returns raw markdown file with frontmatter.

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## License

MIT

