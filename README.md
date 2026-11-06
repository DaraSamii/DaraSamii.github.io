# darasamii.com

Personal site of Dara Rahmat Samii: PhD researcher in computational fluid dynamics (McGill), rocketry CFD, teaching notes, and an interactive Joukowski-airfoil playground.

Built with [Astro](https://astro.build) (static output). Hosted on **Cloudflare Pages** at <https://darasamii.com>; `darasamii.github.io` redirects there.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # airfoil-playground math tests (node:test)
npm run build    # static site in dist/
```

Node 22 (see `.nvmrc`). Astro is pinned to v6 because Astro 7 needs Node ≥ 22.23.4.

## Where things live

```
src/data/            ← edit content here (no HTML needed)
  profile.js           name, headline, socials, nav, hero stats
  cv.js                education, experience, awards, certifications, skills
  research.js          research themes, publications, talks, research software
  projects.js          every project. Shown on /rocketry if `rocketry: true`, on /research if listed in a research theme; /projects shows only the rest
  teaching.js          teaching roles and courses
  personal.js          blog posts, piano videos, friends (unlinked page)
src/content/notes/   ← teaching notes: one Markdown file each, LaTeX math with $…$ / $$…$$
src/pages/           one file per route (/, /research, /rocketry, /teaching, /projects, /blog, /piano, /world, /friends)
src/components/      Nav, Footer, ProjectCard (grid card), ProjectFeature (big gallery block), PubList, ImageModal, AirfoilPlayground
src/lib/joukowski.js exact potential flow around a Joukowski airfoil, used by the playground (+ joukowski.test.js)
src/styles/global.css  design tokens (light + dark) from docs/DESIGN.md
public/              served as-is: images, CV/cv.pdf + CV/cv-extended.pdf, travels.json, _redirects, robots.txt
docs/DESIGN.md       Meta-inspired design system (npx getdesign@latest add meta)
```

### French version

English lives at `/`, French at `/fr/` (switch: EN/FR button in the nav). Pages are in `src/pages/[...lang]/` and render once per language.
- Page text: `src/i18n/ui.js` (both languages side by side).
- Content in `src/data/*.js` is English; `src/i18n/fr.js` overlays the French (projects/themes keyed by slug/id, lists by position). Anything missing in French falls back to English, and `npm test` checks every UI key has a French version.

### Images

Put originals in `public/assets/images/`. `npm run build` (and `npm run dev`) first runs `scripts/optimize-images.mjs`, which writes 400/960/1600 px WebP copies to `public/_img/` (gitignored, incremental). Components use `opt(src, width)` from `src/lib/img.js`; slideshow images load only right before they are shown.

### Add a teaching note

Create `src/content/notes/my-note.md`:

```md
---
title: Bernoulli vs. momentum
description: One sentence for the card.
course: Fluid Mechanics
date: 2026-12-01
tags: [inviscid, control volume]
---

Text with inline $p + \tfrac12\rho u^2$ and display math:

$$\nabla\cdot\mathbf u = 0$$
```

It appears on `/teaching` and at `/teaching/my-note/`. Add `draft: true` to hide it.

### Add a trip to the World map

Append to `public/assets/data/travels.json`: `{ "city", "country", "lat", "lng", "year", "notes" }`.

### Update the CV

Compile `CV/main.tex` → `public/CV/cv.pdf` and `CV/main_extended.tex` (every section) → `public/CV/cv-extended.pdf`.
If fontawesome5 fails: `pdflatex '\pdfmapfile{+fontawesome5.map}\input{main_extended}'`.

## Deploy

- **Cloudflare Workers (static assets)** (darasamii.com): Git-connected Worker `darasamii-website`; build `npm run build`, deploy `npx wrangler deploy` (config: `wrangler.jsonc`, serves `dist/`). Every push to `main` deploys. `public/_redirects` maps the old `/pages/*.html` URLs.
- **GitHub Pages** (darasamii.github.io): serves only the root `index.html` + `404.html`, which forward visitors to darasamii.com (keeping the path). `.nojekyll` stops GitHub running Jekyll on the repo. No Actions needed. Settings → Pages → Source stays "Deploy from a branch: main / (root)".
