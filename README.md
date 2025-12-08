# Rob Short · Launchframe marketing site

Static marketing site for https://imrobman.com highlighting Rob Short’s services, projects, and contact options. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
# then open http://localhost:3000
```

## Quality checks

- `npm run lint`
- `npm run build`

## Where to edit content

- Navigation links and brand text: `components/layout/SiteLayout.tsx`
- Home hero, highlights, and CTA links: `app/page.tsx`
- Services tiers and process: `app/services/page.tsx`
- Projects listing and CTA links: `app/projects/page.tsx`
- About copy and stack list: `app/about/page.tsx`
- Contact button + email: `app/contact/page.tsx`

Notes:
- Update the TODO comments for Fiverr and Empire Ops URLs and set your real `mailto:` address on the contact page.
- All styling is via Tailwind utility classes and light custom CSS in `app/globals.css`.

## Static export (GitHub Pages)

To generate static HTML for GitHub Pages:

```bash
npm run export
# outputs to ./out
```

Option A: rename `out` → `docs` and point GitHub Pages to `/docs` on your main branch.  
Option B: keep `out`, create a `gh-pages` branch, copy the contents of `out` to the branch root, ensure a `.nojekyll` file exists, and point GitHub Pages to that branch.
