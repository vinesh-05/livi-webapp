# Livi Cafe & Kitchen — Website

A single-page brochure site for Livi Cafe & Kitchen, built with Vite + React + TypeScript.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can upload to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.) — no backend required.

## The one thing you'll want to edit: the menu link

Open `src/data.ts` and change `MENU_URL` at the top of the file to wherever
you want "View Menu" to send visitors — a PDF, a Google Drive link, or your
own menu page. It's currently pointed at the cafe's Zomato menu page as a
placeholder. Everything else that references the menu link (header button,
hero button, the dedicated Menu section, footer) updates automatically.

Other easy edits in `src/data.ts`:
- `PHONE_DISPLAY` / `PHONE_TEL` — phone number
- `ADDRESS_LINES` — address shown in the Visit section and footer
- `HOURS` — opening hours line
- `REVIEWS` — the review cards shown in the Reviews section
- `GALLERY` — the six photos in the gallery grid (currently stock photos —
  swap in real photos of the cafe by replacing the `src` URLs, or drop
  files into `src/assets` and import them)

## Notes

- Gallery and hero images are stock photos (Unsplash) standing in for real
  photography of the cafe — swap them for your own photos whenever you have
  them.
- Hours were pulled from the cafe's public listing (10:00 AM – 11:30 PM
  daily) — worth double-checking before publishing, since listed hours can
  drift out of date.
