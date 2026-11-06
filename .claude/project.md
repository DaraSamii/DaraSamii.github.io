# darasamii.com — Project Knowledge Base

## Site overview
Personal site for Dara Rahmat Samii, positioned **PhD-researcher first**: incoming Ph.D. at McGill (ASEC Lab, Prof. Hendrik Nicolai, DNS/LES of H₂–CH₄ flames, starts Jan 2027), CFD engineer (OpenFOAM solver dev, supersonic rocket CFD), rocketry (Space Concordia CFD lead, L3 with the Canadian Association of Rocketry — NOT Tripoli; rockets: Darius L1, Lord Cyrus L2, Lord Cyrus Modified L3; OpenRocket + RocketCalculator contributor), and teaching (1,200+ TA hours, Teaching Excellence Award 2026). Audience: PIs, collaborators, recruiters, students.

Hosted on Cloudflare Pages at https://darasamii.com (the user owns the domain on Cloudflare). darasamii.github.io is kept alive by a GitHub Actions build whose pages redirect to darasamii.com (inline script in `src/layouts/Base.astro`).

## Stack
- Astro 6 static site (pinned to v6: Astro 7 needs Node ≥ 22.23.4, local Node is 22.22). `npm run dev | build | test`.
- Markdown notes with `remark-math` + `rehype-katex` via `markdown.processor: unified({...})` (the old `markdown.remarkPlugins` keys are deprecated in Astro 6). KaTeX CSS imported from the `katex` package on note pages only.
- Fonts: Montserrat (display), Inter (body), JetBrains Mono (labels) via Google Fonts. Icons: Font Awesome 6.5.1 from cdnjs. Leaflet 1.9.4 from cdnjs on /world only.
- Design system: `docs/DESIGN.md` (Meta-inspired, from `npx getdesign@latest add meta`). Tokens in `src/styles/global.css`: white canvas / deep ink / cobalt `#0064e0`, pill buttons, 24–32px cards. Dark mode = same roles re-mapped; `data-theme` on `<html>`, stored in localStorage, OS preference otherwise.

## Content lives in data files, not markup
`src/data/{profile,cv,research,projects,teaching,personal}.js`. Pages map over them. Projects with `rocketry: true` appear on /rocketry, projects named in a research theme on /research, and /projects shows only the rest. Teaching notes: `src/content/notes/*.md` (schema in `src/content.config.js`).

## Interactive: airfoil playground
The user asked to replace an earlier lattice-Boltzmann wind tunnel because it used too much CPU. Now: `src/lib/joukowski.js` (exact potential flow, Joukowski map + Kutta condition, tested in `joukowski.test.js`) drawn by `src/components/AirfoilPlayground.astro`. The field is recomputed only on control changes; frames only move ~260 tracers. Keep anything interactive this cheap. Explanation note: `/teaching/joukowski-airfoil/`.

## Page roles
- /research and /rocketry show projects as large `ProjectFeature` blocks (big gallery + full text). /projects lists only projects that appear on neither (user request).
- SU2_rocket is deliberately hidden for now (unfinished); don't re-add it without asking.
- Teaching page has the Teaching Excellence Award section with photos (`public/assets/images/teaching/`).
- Buy Me a Coffee: https://buymeacoffee.com/darasamii (nav, hero, contact, footer). Icons are deliberately colourful (palette cycles via `--ic` on grid items; brand colours on socials).
- Extended CV (`public/CV/cv-extended.pdf`) includes references with referee emails, by the user's explicit choice.

## Bilingual + performance (2026-11-06)
- EN at /, FR at /fr/ via `src/pages/[...lang]/` + `langPaths()` (must return fresh objects per page). UI strings `src/i18n/ui.js`, French content overlay `src/i18n/fr.js` merged by slug/id/index. Paper/talk titles stay English. Friends, 404 and teaching notes are English-only (`translated={false}`).
- Images: originals in public/assets/images; build makes WebP 400/960/1600 in public/_img (sharp, prebuild). Always render through `opt()`; only first slides load eagerly. Animations pause off-screen/hidden; airfoil rAF loop stops when idle. Nav + favicon use public/logo.svg (airfoil with streamlines); the user preferred a site icon over their photo. Nav has sliding switches for EN/FR and light/dark; the active-page bubble slides between pages via cross-document view transitions (view-transition-name: nav-pill). All appear/disappear UI should animate (opacity/transform only) and respect reduced motion. Speed view uses Turbo colormap.

## Conventions & rules
- Don't remove content without asking. The user explicitly wants things added and reorganized, never dropped.
- World map: data stays in `public/assets/data/travels.json` (hand-edited), map logic inline in `src/pages/world.astro`. Country highlighting and a side panel were tried and removed at the user's request; `countries-110m.geojson` is orphaned but kept.
- Friends page exists but is unlinked and `noindex` (placeholder cards) — same as before.
- `public/assets/images/piano/*.jpg` and `friends/friend5-6.jpg` are unused but kept.
- Old URLs (`/pages/*.html`) are mapped in `public/_redirects` (Cloudflare syntax).
- CV edits made for the site are saved in `~/Professional/Professional Docs/CV_website_edits_2026-11-06/`. CV: compiled from the user's LaTeX source (`CV/main.tex` in `~/Professional/Professional Docs/CV_simpleTempelate.zip`, kept OUT of the repo because it contains cover letters/SOPs). Fontawesome5 map isn't enabled in the system TeX: compile with `pdflatex '\pdfmapfile{+fontawesome5.map}\input{main}'`.
- Persian content needs `class="rtl"` + `lang="fa"` (Vazirmatn font loaded on /blog).
