# Boarding Don 70 — Smart Forever Memory Site

This package includes:

- `index.html` — the invite + private memory submission + reveal scrapbook
- `apps-script.gs` — Google Sheets backend for collecting memories
- `vercel.json` — simple Vercel static configuration

## How it works

Guests can submit:
- Their name
- A memory/message
- A photo link
- A memory type

The scrapbook gallery is hidden from guests.

To preview the reveal page:
`https://your-site.vercel.app?reveal=1`

## Smart collection setup

1. Create a Google Sheet called `Don 70 Memories`.
2. Add headers in row 1:
   `createdAt | name | message | photo | type`
3. Open Extensions -> Apps Script.
4. Paste `apps-script.gs`.
5. Deploy as Web App.
6. Copy the Web App URL.
7. Open `index.html`.
8. Find:
   `MEMORY_ENDPOINT: ""`
9. Replace it with your Web App URL.
10. Re-deploy to Vercel.

## Photo upload note

The simple version uses photo links, because direct uploads require storage such as Google Drive API, Cloudinary, Firebase, or Supabase.

Best practical workflow:
- Guests upload/share image to Google Drive/iCloud/Dropbox
- Paste the share link into the form
- You later replace links with final photos for the reveal scrapbook

## On the birthday

Publish the same site with reveal mode, or share:
`https://your-site.vercel.app?reveal=1`
