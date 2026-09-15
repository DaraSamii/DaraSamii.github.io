# darasamii.github.io — Project Knowledge Base

## Site overview
Personal website for Dara Rahmat Samii (CFD researcher / ML engineer / rocketeer), hosted on GitHub Pages at `https://DaraSamii.github.io` (repo must be named exactly that). Single-page portfolio (`index.html`) with sections: Hero, About, Education, Publications, Projects, Experience, Awards, Certifications, Contact. Three linked sub-pages under `pages/`: Blog (Persian/Farsi Virgool post links), Piano (YouTube embeds), and an unlinked Friends page. Audience: recruiters, collaborators, academic contacts.

## Tech stack
- Vanilla HTML/CSS/JS. No build step, no npm, no bundler, no framework, no package.json.
- Fonts: Google Fonts — `Playfair Display` (400/600/700), `Source Sans 3` (300/400/500/600), `JetBrains Mono` (400/500). Loaded via `<link>` to `fonts.googleapis.com/css2?family=...` on every page, with `preconnect` to fonts.googleapis.com and fonts.gstatic.com.
- Icons: Font Awesome 6.5.1 via CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- No other external JS libraries — all interactivity is hand-written vanilla JS in `js/main.js`.
- Deployed as static files directly (GitHub Pages "Deploy from branch: main").

## File structure
```
index.html                  — main single-page site (all sections, id-anchored)
README.md                   — setup/customization instructions (already fulfilled mostly)
LICENSE
CV/cv.pdf                   — downloadable CV, linked from navbar
css/style.css               — single stylesheet for entire site (all pages import this one file)
js/main.js                  — single script for entire site (all pages import this one file)
pages/
  blog.html                 — Blog page, links out to Virgool (virgool.io/@darasamii) posts, RTL Persian content
  piano.html                — Piano page, embeds 3 YouTube videos
  friends.html              — Friends/Collaborators page — NOT linked in nav (commented out); has 4 placeholder "Friend Name" cards, never filled in
  test.html                 — orphan scratch file, single raw YouTube iframe, no navbar/footer/site chrome, not linked from anywhere; looks like a leftover test artifact
  world.html                — interactive travel map (Leaflet.js + CartoDB Voyager tiles, API key required — see Components & patterns). Visited countries are highlighted from a GeoJSON overlay; clicking a highlighted country or a city marker opens a side panel listing cities visited there. Fullscreen layout: just navbar + map, no header/footer. Travel data is fetched at runtime from assets/data/travels.json (not inline) — the one page with page-specific JS instead of everything living in js/main.js, by deliberate exception (see Conventions & rules).
assets/
  data/
    countries-110m.geojson  — trimmed Natural Earth 110m country boundaries (only NAME + ADM0_A3 properties kept, ~250KB), fetched at runtime by pages/world.html via relative fetch(); not used by any other page. ADM0_A3 is the ISO 3166-1 alpha-3 code, matched against travels.json's countryCode field.
    travels.json             — the editable list of visited cities for the World page: a flat JSON array of {city, country, countryCode, lat, lng, year, notes}. This is the file to edit to add a new trip — no HTML/JS editing needed. countryCode must be an ISO 3166-1 alpha-3 code present in countries-110m.geojson's ADM0_A3 values, or the country won't highlight (the city marker will still show). As of the last update covers Canada (mostly Ontario/Quebec + Vancouver/Victoria area), France, Denmark, Italy, Turkey, and Iran.
  images/
    profile/1.jpg..10.jpg   — hero rotating/sliding photo carousel (10 images)
    logos/                  — concordia-logo.png, ut-logo.png, iust-logo.png (Education section school logos)
    projects/<slug>/        — one subfolder per project, images referenced in project slideshow galleries:
        mesh-gnn/, cr25-cfd/, thermal-spray/, rotameter/, pid-ball/, py-distillation/, ai-ducation/
    blog/                   — blues.png, canada.jpg(+Zone.Identifier), chemE.jpg, gameTheory.png, ielts.png, soldiers.png
    friends/friend1.jpg..friend6.jpg — only friend1-4 used in friends.html; friend5/6 unused
    piano/piano1.jpg..piano3.jpg — present but NOT referenced anywhere in piano.html (piano.html only has YouTube embeds, no photos)
```
Some `*.jpg:Zone.Identifier` files exist (Windows download metadata cruft) — harmless, can be ignored/cleaned but not currently causing issues.

## Navigation
Root page (`index.html`) nav uses same-page anchors + relative links to `pages/`:
```html
<nav class="navbar">
    <div class="nav-container">
        <a href="#" class="nav-logo"><span class="logo-text">DRS</span></a>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
        </button>
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#publications" class="nav-link">Publications</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="CV/cv.pdf" class="nav-link nav-link-cv" target="_blank">
                <i class="fas fa-file-pdf"></i> CV
            </a></li>
            <li><a href="pages/blog.html" class="nav-link">Blog</a></li>
            <li><a href="pages/piano.html" class="nav-link">Piano</a></li>
            <li><a href="https://darasamii.github.io/pages/world.html" class="nav-link">World</a></li>
            <!-- <li><a href="friends.html" class="nav-link">Friends</a></li> -->
        </ul>
    </div>
</nav>
```
Sub-pages under `pages/` (blog.html, piano.html, world.html, friends.html) use the **same structure but `../`-prefixed relative paths**, and the section links point back to `index.html#section`:
```html
<nav class="navbar">
    <div class="nav-container">
        <a href="../index.html" class="nav-logo"><span class="logo-text">DRS</span></a>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
        </button>
        <ul class="nav-menu">
            <li><a href="../index.html" class="nav-link">Home</a></li>
            <li><a href="../index.html#about" class="nav-link">About</a></li>
            <li><a href="../index.html#education" class="nav-link">Education</a></li>
            <li><a href="../index.html#publications" class="nav-link">Publications</a></li>
            <li><a href="../index.html#projects" class="nav-link">Projects</a></li>
            <li><a href="../index.html#experience" class="nav-link">Experience</a></li>
            <li><a href="blog.html" class="nav-link">Blog</a></li>
            <li><a href="piano.html" class="nav-link">Piano</a></li>
            <li><a href="https://darasamii.github.io/pages/world.html" class="nav-link">World</a></li>
            <!-- <li><a href="friends.html" class="nav-link">Friends</a></li> -->
        </ul>
    </div>
</nav>
```
Note: on sub-pages there's no CV link in the nav (only index.html has it). The currently-active page/section gets `class="nav-link active"` added manually in the HTML (not fully dynamic across pages — `main.js`'s `updateActiveLink()` only handles in-page anchor scrolling on index.html via `section[id]` + scroll position).

**Exception — the World link uses an absolute URL everywhere**, including inside `pages/world.html`'s own nav copy (`href="https://darasamii.github.io/pages/world.html"`), unlike every other nav link on the site which is root- or `../`-relative. This was an explicit, deliberate choice (not an oversight) made when the World page was added. Practical consequence: clicking "World" while testing the site locally (e.g. via `python -m http.server` or `file://`) navigates away to the live production site instead of the local copy — worth knowing when developing/testing other pages. `friends.html` was NOT updated with a World link (it's already unlinked/orphaned from every nav, so it was left as-is).

Friends link is commented out on **every** page — friends.html is orphaned (reachable only by direct URL).

## Design system

### Colors
All defined as CSS custom properties on `:root` in `css/style.css`:
| Variable | Hex/Value | Usage |
|---|---|---|
| `--color-bg` | `#0a0a0f` | Page background (near-black) |
| `--color-bg-secondary` | `#12121a` | Alternating section backgrounds (About, Publications, Experience, Awards, Contact, Blog/Friends/Video cards) |
| `--color-bg-tertiary` | `#1a1a25` | Card/tag backgrounds, skill tags container, mobile nav menu bg |
| `--color-text` | `#e8e8ed` | Primary text (near-white) |
| `--color-text-muted` | `#8888a0` | Secondary/muted text, nav links, descriptions |
| `--color-primary` | `#6366f1` | Indigo — primary accent (buttons, links, borders, logo gradient) |
| `--color-primary-light` | `#818cf8` | Lighter indigo — hover states, secondary accents, "degree"/company text |
| `--color-accent` | `#f59e0b` | Amber — highlights (strong text, badges, awards icon) |
| `--color-accent-pink` | `#ec4899` | Pink — gradient accent (section-title underline, gradients) |
| `--color-success` | `#10b981` | Green — GPA badge |
| `--color-border` | `rgba(255,255,255,0.08)` | All card/element borders |

### Typography
- `--font-display: 'Playfair Display', Georgia, serif` — all headings (h1-h6)
- `--font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif` — body text, but also explicitly re-applied to some heading-like elements (`.skill-category h3`, `.pub-content h3`, `.project-content h3`, `.exp-content h3`, `.award-content h3`, `.cert-content h3`, `.friend-card h3`, `.blog-content h3`, `.video-info h3`) to override the display font for those specific headings
- `--font-mono: 'JetBrains Mono', 'Fira Code', monospace` — tags/badges (`.hero-title`, `.skill-tag`, `.project-tech span`, `.pub-year`... actually pub-year uses display font — mono used for: hero-title, skill-tag, edu-date span, exp-date, project-tech, award-year, cert-date, blog-date)
- Sizes: `h1: clamp(2.5rem, 6vw, 4.5rem)`, `h2: clamp(1.8rem, 4vw, 2.5rem)`, `h3: clamp(1.2rem, 2.5vw, 1.5rem)`
- Base root font-size 16px, drops to 14px under 576px viewport.

### Spacing & layout
- Max content width: `.container { max-width: 1200px }`; navbar's own container `.nav-container { max-width: 1400px }`
- Spacing scale (CSS vars): `--space-xs: 0.25rem`, `--space-sm: 0.5rem`, `--space-md: 1rem`, `--space-lg: 2rem`, `--space-xl: 4rem`, `--space-2xl: 8rem`
- Section vertical padding is `var(--space-2xl) 0` for most sections
- Radius scale: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--radius-xl: 24px`, `--radius-full: 9999px`
- Layout is CSS Grid/Flexbox throughout, no CSS framework:
  - Hero: 2-col grid (text / image), collapses to 1-col under 992px
  - About: 2-col grid (text / skills-grid 2x2), collapses under 992px
  - Projects: 3-col grid; `.project-card.featured` spans all columns as an internal 2-col grid (image | content); collapses to 1-col stacking under 768px
  - Experience: 2-col grid, collapses to 1-col under 992px
  - Awards: 4-col grid → 2-col under 1200px → 1-col under 576px
  - Certifications: `repeat(auto-fit, minmax(280px,1fr))`
  - Friends/Blog: `repeat(auto-fill, minmax(250px or 350px, 1fr))`

### Key CSS classes
- `.btn`, `.btn-primary`, `.btn-secondary` — pill-shaped CTA buttons
- `.nav-link`, `.nav-link.active`, `.nav-link-cv` — nav pill links; CV link has its own gradient/box-shadow styling distinct from other links
- `.section-title` — centered h2 with a small gradient underline bar (`::after` pseudo-element)
- `.skill-category` / `.skill-tag` — About section's skill boxes and mono-font pill tags inside them
- `.timeline`, `.timeline-item`, `.timeline-marker`, `.timeline-content` — Education vertical timeline with a gradient left border line
- `.edu-header`, `.edu-logo`, `.edu-info`, `.edu-date`, `.gpa-badge` — layout inside each timeline entry
- `.pub-card`, `.pub-year`, `.pub-content`, `.pub-authors`, `.pub-journal`, `.pub-links`, `.pub-link` — Publications entries, year in big display font on the left
- `.project-card`, `.project-card.featured`, `.project-image`, `.project-slideshow`, `.slideshow-container`, `.slideshow-image`, `.slideshow-nav` (`.slideshow-prev`/`.slideshow-next`), `.slideshow-indicator` — Project cards + built-in image slideshow/carousel (see JS section)
- `.project-details-toggle`, `.project-details` — collapsible "Show/Hide Details" accordion under each project's tags/links
- `.project-tag` — "Featured" pill badge on featured project cards
- `.project-tech span` — mono-font tech-stack pill tags
- `.image-modal`, `.modal-content-wrapper`, `.modal-image`, `.modal-nav`, `.modal-close`, `.modal-counter` — full-screen lightbox for clicking any project slideshow image
- `.exp-card`, `.exp-icon`, `.exp-content` — Experience entries (icon box + text)
- `.award-card`, `.award-icon` — Awards entries (circular icon + centered text)
- `.cert-card`, `.cert-icon`, `.cert-content`, `.cert-link` — Certifications entries
- `.contact-card` — Contact section icon+label link tiles
- `.footer` — shared site footer
- `.page-header`, `.page-content` — shared sub-page header banner + content wrapper (used by blog/piano/friends)
- `.friend-card`, `.friend-photo` — circular photo + text card (Friends page)
- `.blog-card`, `.blog-image`, `.blog-content` — Blog post preview cards
- `.rtl` — applied to `.blog-content` for Persian posts (sets `direction: rtl; text-align: right`)
- `.video-card`, `.video-embed` — Piano page's 16:9 responsive YouTube embed wrapper (padding-bottom: 56.25% trick)
- `.image-slider` — hero's auto-cycling profile photo stack (pure CSS keyframe animation, distinct from the JS-driven project slideshows)
- `.image-placeholder` — fallback shown by JS when an `<img>` fails to load

### Animations & transitions
- `--transition-fast: 0.15s ease`, `--transition-base: 0.3s ease`, `--transition-slow: 0.5s ease` — used throughout for hover states
- `@keyframes float` — slow blob-like movement for the 3 hero background gradient orbs (`.orb-1/2/3`), each with different size/duration/delay
- `@keyframes badgeFloat` — gentle up/down bob for the two floating hero badges (L3 Certified, GPA)
- `@keyframes scrollPulse` — pulsing opacity/scale on the hero scroll-indicator line
- `@keyframes fadeIn` — modal open fade
- `@keyframes imageSlide` — pure-CSS crossfade cycle for the 10 hero profile images in `.image-slider` (30s total loop, each image gets a `nth-child` `animation-delay` staggered by 3s so each shows for ~3s window per the keyframe percentages)
- `html { scroll-behavior: smooth }` for anchor-link scrolling
- Scroll-triggered fade/slide-in via IntersectionObserver in JS (adds `.animate-in` class), not pure CSS

## Components & patterns

### Navbar
Fixed to top (`position: fixed`), semi-transparent dark blur background (`backdrop-filter: blur(20px)`), becomes more opaque and slightly shrinks padding on scroll (handled in JS, not CSS media query — see JS section). On mobile (≤768px) the `.nav-menu` becomes a fixed full-width dropdown panel below the navbar, toggled by `.nav-toggle` hamburger button via a `.active` class added/removed in JS. Clicking any nav link also closes the mobile menu.

### Footer
Identical on every page:
```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2026 Dara Rahmat Samii. Built with ☕ and curiosity.</p>
    </div>
</footer>
```

### Project cards
Each project is an `<article class="project-card">` (add `featured` class for the 3 large-format cards) with `data-project="slug"` attribute. Structure:
1. `.project-image` > `.project-slideshow` containing: prev/next nav buttons, `.slideshow-container` with N `.slideshow-image` `<img>` tags (first one has class `active`), and a `.slideshow-indicator` dot.
2. `.project-content` containing: optional `.project-tag` ("Featured"), `<h3>` title, `<p>` short description, `.project-tech` tag pills, `.project-links` (GitHub/Paper links), `.project-details-toggle` button ("Show Details" / chevron icon), and a hidden `.project-details` block with expanded description — toggled open/closed via JS adding `.active` to both the button and the details div.
Featured cards use `object-fit: contain` on a white-ish background so full (non-cropped) diagrams show; non-featured smaller cards crop with `object-fit: cover`-like padding rules. `.project-image.white-bg` forces a white background for images that need it (used for `ai-ducation` project's resnet diagram).
Clicking a slideshow image (or empty container area) opens the full-screen `.image-modal` lightbox with prev/next/counter, driven by JS (`initImageModal`).

### Section structure
Every top-level `<section id="X" class="X">` on index.html follows: `<div class="container"><h2 class="section-title">Title</h2>...content grid...</div></section>`. Sections alternate background between `--color-bg` and `--color-bg-secondary` for visual rhythm (About, Publications, Experience, Awards, Contact use secondary; Hero, Education, Projects, Certifications use base).

### World map (pages/world.html)
Third-party lib: **Leaflet.js 1.9.4** (CDN: `cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.{js,css}`) — the only external JS library used anywhere on the site besides Font Awesome's CSS. Tile layer is CartoDB **Voyager** (`{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`) — a light, road-map-style basemap, deliberately chosen over CartoDB's dark "Dark Matter" style (used originally) after feedback that the dark tiles were too low-contrast/hard to navigate; Voyager was picked as a "standard," Google-Maps-like look. Requires the OSM + CARTO attribution shown in `L.tileLayer`'s `attribution` option — don't remove it.
**CARTO basemaps require an API key** (`?key=...` query param on the tile URL) — this was a mid-project change; CARTO used to allow anonymous tile requests, now shows an "API key required" watermark without one. The key lives in a `CARTO_API_KEY` const at the very top of `world.html`'s inline `<script>` — get a free one at `carto.com/basemaps/apikey/`. **The key is referrer-restricted** in the CARTO dashboard to `darasamii.github.io` — this means tiles will fail (403, "API key required") when testing locally via `python -m http.server`, `file://`, or any host other than the live domain; that's expected, not a bug. **The key is necessarily public** regardless: there's no build step/server on a static GitHub Pages site, so it ships in plaintext in the deployed HTML and in git history forever once committed — normal for CARTO's client-side basemap keys (their own docs embed it exactly this way), with the referrer restriction as the mitigation against quota abuse.
Layout is **fullscreen, not a boxed section**: `<body class="world-page">` sets `overflow: hidden`, and the page has no `.page-header`/`.page-content`/`.container`/footer at all — just the navbar followed by a `.world-fullscreen` div (`height: 100vh`) holding `#worldMap` (`.world-map`, `position: absolute; inset: 0`, fills the div completely). Because the navbar is `position: fixed` (floats above content, out of flow), the 100vh map div starts at the true top of the viewport and the translucent/blurred navbar simply floats over it — this is what makes the page read as "navbar + fullscreen map" rather than "navbar, then a map section below it." There is no stats line (an earlier "N countries · M cities visited" pill was removed at the user's request) — the only overlay is `.world-overlay-panel` (`#worldPanel`, top-right card, 300px wide, own scroll), `position: absolute` on top of the map, restyled to a semi-transparent dark glass look (`rgba(10,10,15,0.85)` + `backdrop-filter: blur`) so it reads as HUD chrome rather than page content. On mobile (≤768px) the panel becomes a fixed-position card pinned to the left/right edges near the top, capped at 40vh, still floating over the map rather than pushing it into a separate scroll region, since the whole point of this page is that nothing scrolls. The map has no `maxBounds` — an earlier version set `maxBounds` alongside `worldCopyJump: true`, but the two fight each other (worldCopyJump wants seamless infinite horizontal panning; maxBounds hard-stops it) which made panning feel stuck/janky; removing maxBounds and keeping only `worldCopyJump: true` + `minZoom: 2` gives the smooth, standard pan/zoom feel of a typical embedded map. Because the map's size is viewport-relative and can change (e.g. mobile browser chrome show/hide, window resize), `initWorldMap()` registers a `window.resize` listener calling `map.invalidateSize()` — a required Leaflet gotcha whenever a container's size comes from CSS/vh rather than fixed pixels set before Leaflet reads it.
Data flow: travel data lives in **`assets/data/travels.json`**, not inline in the page — a flat JSON array of `{city, country, countryCode, lat, lng, year, notes}` objects (`year`/`notes` may be `null`/`""` when unknown), fetched at runtime via `fetch(TRAVELS_URL)` before the map initializes (`boot()` fetches it, then calls `initWorldMap(travels)` with the parsed array; a fetch failure falls back to `initWorldMap([])` rather than breaking the page). This was a deliberate change from an earlier version that hardcoded the array as a `TRAVELS` const inside `world.html`'s own script — moved out to its own file specifically so it's a plain, standalone JSON file to keep editing/expanding it (add a trip = add an object to the array). `countryCode` must be an ISO 3166-1 alpha-3 code matching the `ADM0_A3` property in `assets/data/countries-110m.geojson`. Only countries present in the fetched travels get a polygon overlay at all (`L.geoJSON`'s `filter` option excludes everything else) — colored with `--color-success` fill, brightening to `--color-primary-light` on hover, and opens/updates the overlay panel + `fitBounds`-zooms to that country on click. Every travels entry also gets a small `L.circleMarker` dot (`--color-accent` fill) with a Leaflet popup (city/country/year/notes); clicking a marker also opens the same overlay panel as clicking its country polygon. Leaflet's own popup/attribution-control chrome is re-themed in `css/style.css` (`.leaflet-popup-*`, `.leaflet-control-attribution`) to match the dark palette instead of Leaflet's default light styling.

## JavaScript behavior
All in `js/main.js`, vanilla, no dependencies, **except `pages/world.html`, which has its own inline `<script>` for map logic** (it fetches travel data from `assets/data/travels.json` rather than embedding it — see Conventions & rules for why the JS itself is still inline). Key pieces of `main.js`:
1. **Rotating profile photo (`changeProfilePhoto`)** — dead/legacy code: targets `#rotating-profile` element and `assets/images/profile/{n}.jpg`, but `index.html` no longer has an element with id `rotating-profile` (it uses the CSS-only `.image-slider` with 10 static `<img>` tags instead). This function silently no-ops (querySelector returns null) — **effectively unused leftover from an earlier version**; the real photo-cycling is the pure-CSS `.image-slider`/`imageSlide` keyframe animation.
2. **Navbar mobile toggle** — click `.nav-toggle` toggles `.active` on `.nav-menu` and `.nav-toggle`; clicking any `.nav-link` closes the mobile menu.
3. **Navbar scroll shrink** — on `scroll`, toggles inline `padding`/`background` styles on `.navbar` when `scrollY > 100`.
4. **Active nav link on scroll** — `updateActiveLink()` on scroll finds which `section[id]` is in view and toggles `.active` on the matching `.nav-link[href="#id"]`. Only meaningful on index.html (sub-pages don't have those sections).
5. **Smooth scroll** — intercepts clicks on any `a[href^="#"]` and calls `scrollIntoView({behavior:'smooth'})`.
6. **IntersectionObserver animations** — fades/slides in `.timeline-item, .project-card, .pub-card, .exp-card, .award-card, .skill-category, .friend-card, .blog-card, .video-card` as they scroll into view (adds `.animate-in`).
7. **Hero title typing/fade-in** — staggers opacity/transform fade-in for each `.hero-title` span on page load.
8. **Image error fallback** — any `.project-image img`, `.blog-image img`, `.friend-photo img` that fails to load gets replaced with a generic `.image-placeholder` (image icon). Same pattern (with different message) for the (now-unused) `#rotating-profile`.
9. **`initProjectSlideshows()`** — for every `.project-card[data-project]`, wires up prev/next buttons and an auto-advance `setInterval` (4000ms, `SLIDESHOW_INTERVAL`) cycling `.slideshow-image.active`; pauses on mouse hover, resumes on leave; hides nav/indicator entirely if only 1 image.
10. **`initProjectDetailsDropdowns()`** — toggles `.active` on `.project-details-toggle` + its sibling `.project-details`, and swaps the button's `.toggle-text` between "Show Details"/"Hide Details".
11. **`initImageModal()`** — wires every slideshow image (and empty slideshow-container clicks) to open `#imageModal` as a lightbox with prev/next/Escape/arrow-key navigation and a counter; locks body scroll while open.
12. All init functions run inside `initializeAll()`, called on `DOMContentLoaded` (or immediately if DOM already loaded).
13. A console.log "easter egg" prints a greeting signed by Dara.

## How to add a new page (sub-page like piano.html or blog.html)
1. Copy an existing sub-page (e.g. `pages/piano.html`) as the template — it already has the correct `../`-relative navbar, `<head>` (fonts + Font Awesome + `../css/style.css`), `.page-header`, `.page-content` wrapper, footer, and `../js/main.js` script tag.
2. Update `<title>` and the `.page-header` `<h1>`/tagline text.
3. Replace the body content inside `<section class="page-content"><div class="container">...</div></section>` with the new page's markup (reuse existing card patterns — `.blog-card`, `.video-card`, `.friend-card` — or add new CSS classes to `css/style.css` following the same variable-driven style if a genuinely new component is needed).
4. In the new page's own navbar copy, add `class="nav-link active"` to whichever `<li><a>` represents the current page, and remove `active` from the others (copy from an existing sibling page's nav and adjust).
5. Add the new page's link to the nav `<ul class="nav-menu">` in **every** other HTML file: `index.html` (with a root-relative `pages/newpage.html` href, no CV-style icon needed unless desired) AND every file in `pages/` (with a sibling-relative `newpage.html` href). Keep ordering consistent (Blog, Piano currently come right before the commented-out Friends link).
6. If the page needs images, put them under `assets/images/<newpage>/` and reference with `../assets/images/<newpage>/file.jpg` from inside `pages/`.

Note: `pages/world.html` does **not** follow this template — it deliberately has no `.page-header`/`.page-content`/`.container`/footer, using a fullscreen `body.world-page` layout instead (see World map under Components & patterns). Use it only as a reference if a future page also wants an edge-to-edge, no-chrome layout; otherwise follow blog.html/piano.html.

## How to add a new nav link
Every page's `<ul class="nav-menu">` must be edited individually (there's no shared include/template mechanism — no build step). For each of `index.html`, `pages/blog.html`, `pages/piano.html`, `pages/friends.html`:
- On `index.html`, add `<li><a href="pages/<newpage>.html" class="nav-link">Label</a></li>` before the commented-out Friends link, after the Piano link.
- On sub-pages, add `<li><a href="<newpage>.html" class="nav-link">Label</a></li>` in the same position (sibling-relative, no `pages/` prefix since already inside that folder).
- Mark the link `active` only on its own page.
- If you want the link live, also uncomment/add the Friends-style commented link if that's what you're activating.

## Content that needs updating
- **Google Scholar link is a placeholder**: `index.html` hero-social has `href="https://scholar.google.com/citations?user=YOUR_ID"` — needs the real Scholar profile ID.
- **Friends page (`pages/friends.html`) has 4 fully-placeholder cards** ("Friend Name" / "Role / Affiliation" / "How you met") pointing at `friend1.jpg`–`friend4.jpg`. `friend5.jpg`/`friend6.jpg` exist in assets but aren't referenced by any card yet. Page is not linked in any navbar (commented out everywhere) — presumably intentionally disabled until filled in.
- **`pages/test.html`** is an orphaned scratch file (bare iframe, no site chrome, not linked anywhere) — likely safe to delete, but confirm with Dara before removing since it wasn't explicitly flagged as temporary in commit history.
- **`assets/images/piano/piano1-3.jpg`** exist but are unused — `piano.html` currently only embeds YouTube videos, no photo gallery.
- Several `*.jpg:Zone.Identifier` files (Windows metadata sidecars) present in `blog/` and `profile/` — harmless clutter, could be `.gitignore`d/removed.
- Contact email in index.html footer/contact section is `dara.rahmatsamii@mail.concordia.ca` (a university address that will expire after graduation, June 2026) — may need updating to a permanent address later.

## Conventions & rules
- **Single shared CSS file, holds for JS with one exception**: never create page-specific stylesheets — everything visual lives in `css/style.css`, loaded by every page; add new component styles near related existing rules (the file has a rough section-by-section structure with comment banners like `/* Projects Section */`). For JS, the default is still the shared `js/main.js` (new global behaviors as another `initX()` function called from `initializeAll()`), **but `pages/world.html` deliberately breaks this**: its map logic lives in an inline `<script>` at the bottom of that file instead of `main.js`, per explicit request. Its *data*, however, is NOT inline — it was originally an inline `TRAVELS` const but was deliberately moved out to `assets/data/travels.json` so it's a plain standalone file to keep adding trips to, independent of the page's code. Treat the inline-script part as the one sanctioned exception, not a precedent to scatter more inline scripts — a future page needing page-specific JS should ask whether it truly needs its own logic like World does, or whether it fits `main.js`'s guarded-`initX()` pattern instead; and prefer a standalone JSON/data file over an inline const whenever the data itself is meant to be hand-edited and grown over time.
- **Third-party libraries are otherwise avoided**: Leaflet.js (`pages/world.html` only) is the sole exception to "vanilla JS, no dependencies" — loaded from cdnjs, pinned to an exact version (`1.9.4`), same pattern as Font Awesome. Don't add other libraries without a similarly good reason.
- **CSS variables only for colors/spacing/radius/transitions** — never hardcode a hex color or fixed spacing value in new component CSS; use existing `--color-*`, `--space-*`, `--radius-*`, `--transition-*` vars for consistency (deviations exist for one-off shadow colors like `rgba(99,102,241,0.3)` which are just the primary color's RGB manually — reuse that same pattern if adding new shadows).
- **Relative paths depend on directory depth**: `index.html` refers to root-relative paths (`css/style.css`, `assets/...`, `pages/...`); anything under `pages/` uses `../` prefix for css/js/assets and root, and bare filenames for sibling pages.
- **Image organization**: project images live in `assets/images/projects/<project-slug>/`, one folder per project matching the `data-project` attribute value on the `.project-card`.
- **Project card markup pattern is copy-paste-and-edit**: there's no templating, so adding a project means duplicating an existing `<article class="project-card">` block wholesale and editing text/images/links (use `.featured` for major/highlighted projects, omit for minor ones).
- **Section IDs are used both for nav anchors and JS scroll-spy** — if adding a new top-level index.html section, give it a unique `id` and add a matching `<li><a href="#id">` nav entry for `updateActiveLink()` to work.
- Persian/Farsi content blocks (currently only in blog.html) must have `class="rtl"` on the text container for correct right-to-left rendering.
- No linting/formatting tooling configured (no `.eslintrc`, `.prettierrc`, etc.) — match existing 4-space indentation and inline-style conventions already present in the HTML/CSS.
