---
title: Vercel Deployment Setup
date: 2024-01-19
excerpt: Preparing the project for deployment on Vercel
categories: [deployment]
tags: [deployment, vercel, production]
published: true
---

# Vercel Deployment Setup

Getting ready to deploy to Vercel. Here's what needs to be configured.

## Vercel Configuration

Created `vercel.json` (or using Next.js defaults) for deployment settings. Next.js works great with Vercel out of the box, but we need to ensure:

1. **Environment Variables** - Set `NEXT_PUBLIC_BASE_URL` to the production URL so API endpoints return correct URLs
2. **Build Settings** - Next.js auto-detects, but we can specify if needed
3. **Static Files** - The `content/notes/` directory needs to be included in the build

## Build Process

The build process:
1. Reads all markdown files from `content/notes/`
2. Generates static pages for each note
3. Pre-renders the home page with the notes list
4. API routes are serverless functions

## CORS for Production

The API endpoints have CORS headers set to `*` to allow any client to consume them. This is important for the decentralized dev notes community.

## Next Steps After Deployment

1. Update metadata.json with production URL
2. Test all three endpoints
3. Share the metadata URL in the event chat
4. Start working on the aggregator client (Paso 2)

The metadata endpoint will be at: `https://[your-domain].vercel.app/api/metadata.json`

