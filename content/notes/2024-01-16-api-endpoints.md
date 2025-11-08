---
title: API Endpoints Implementation
date: 2024-01-16
excerpt: Building the three core API endpoints for the decentralized dev notes system
categories: [development, api]
tags: [api, nextjs, endpoints]
published: true
---

# API Endpoints Implementation

Today I focused on implementing the three core API endpoints that make this a decentralized dev notes system.

## Endpoint 1: Metadata

`/api/metadata.json` returns:

```json
{
  "version": "1.0.0",
  "profile": {
    "name": "...",
    "avatar": "...",
    "contact": { ... }
  },
  "fileList": {
    "url": "...",
    "format": "json",
    "lastUpdated": "..."
  }
}
```

This follows the JSON schema spec provided. The `fileList.url` points to where other clients can find the list of notes.

## Endpoint 2: Files List

`/api/files.json` returns an array of all notes with their metadata:

```json
{
  "files": [
    {
      "slug": "...",
      "url": "...",
      "title": "...",
      "date": "...",
      "excerpt": "...",
      "tags": [...]
    }
  ],
  "lastUpdated": "..."
}
```

## Endpoint 3: Individual Note

`/api/notes/[slug]` returns the raw markdown file with frontmatter intact. This is important because other clients might want to parse it themselves.

## CORS Headers

Added CORS headers to all endpoints so they can be consumed by other developers' clients. This is key for the decentralized approach.

