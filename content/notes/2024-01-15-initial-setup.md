---
title: Initial Project Setup
date: 2024-01-15
excerpt: Setting up the dev notes blog infrastructure
categories: [development]
tags: [setup, nextjs, vercel]
published: true
---

# Initial Project Setup

Started working on the dev notes blog today. Following the John Carmack approach of documenting development progress as I go.

## What I Did

- Set up Next.js 14 with TypeScript
- Created the basic structure for the blog
- Implemented the three required endpoints:
  - `/api/metadata.json` - Profile and file list metadata
  - `/api/files.json` - List of all notes
  - `/api/notes/[slug]` - Individual note with markdown + frontmatter

## Architecture Decisions

Using the App Router from Next.js 14. It's clean and makes API routes straightforward. Each note is a markdown file with frontmatter, stored in `content/notes/`.

The vintage hacker aesthetic is important - going with a dark terminal-like theme with monospace fonts. Green text on black might be too cliché, so using a GitHub dark theme inspired palette.

## Next Steps

- Create at least 5 sample notes
- Deploy to Vercel
- Test all endpoints
- Share the metadata URL

