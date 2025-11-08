# Deployment Guide

## Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Using GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### After Deployment

1. Your site will be available at `https://[your-project].vercel.app`
2. Update the metadata in `app/api/metadata.json/route.ts` with your actual:
   - Name
   - Avatar URL
   - Contact information (GitHub, LinkedIn, etc.)
   - Website URL

3. Share your metadata URL in the event chat:
   ```
   https://[your-project].vercel.app/api/metadata.json
   ```

## Environment Variables (Optional)

If you want to set a custom base URL, you can add an environment variable in Vercel:

- Go to your project settings in Vercel
- Navigate to "Environment Variables"
- Add `NEXT_PUBLIC_BASE_URL` with your production URL

This is optional - the app will automatically detect the URL from request headers.

## Testing Endpoints

After deployment, test these endpoints:

- Metadata: `https://[your-project].vercel.app/api/metadata.json`
- Files List: `https://[your-project].vercel.app/api/files.json`
- Individual Note: `https://[your-project].vercel.app/api/notes/[slug]`

All endpoints include CORS headers for cross-origin requests.

