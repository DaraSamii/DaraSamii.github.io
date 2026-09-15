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
assets/
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
            <!-- <li><a href="friends.html" class="nav-link">Friends</a></li> -->
        </ul>
    </div>
</nav>
```
Sub-pages under `pages/` (blog.html, piano.html, friends.html) use the **same structure but `../`-prefixed relative paths**, and the section links point back to `index.html#section`:
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
            <!-- <li><a href="friends.html" class="nav-link">Friends</a></li> -->
        </ul>
    </div>
</nav>
```
Note: on sub-pages there's no CV link in the nav (only index.html has it). The currently-active page/section gets `class="nav-link active"` added manually in the HTML (not fully dynamic across pages — `main.js`'s `updateActiveLink()` only handles in-page anchor scrolling on index.html via `section[id]` + scroll position).

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

## JavaScript behavior
All in `js/main.js`, vanilla, no dependencies. Key pieces:
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
- **Single shared CSS/JS file**: never create page-specific stylesheets or scripts — everything lives in `css/style.css` and `js/main.js`, loaded by every page. Add new component styles to `style.css` near related existing rules (the file has a rough section-by-section structure with comment banners like `/* Projects Section */`), and new behaviors as another `initX()` function called from `initializeAll()`.
- **CSS variables only for colors/spacing/radius/transitions** — never hardcode a hex color or fixed spacing value in new component CSS; use existing `--color-*`, `--space-*`, `--radius-*`, `--transition-*` vars for consistency (deviations exist for one-off shadow colors like `rgba(99,102,241,0.3)` which are just the primary color's RGB manually — reuse that same pattern if adding new shadows).
- **Relative paths depend on directory depth**: `index.html` refers to root-relative paths (`css/style.css`, `assets/...`, `pages/...`); anything under `pages/` uses `../` prefix for css/js/assets and root, and bare filenames for sibling pages.
- **Image organization**: project images live in `assets/images/projects/<project-slug>/`, one folder per project matching the `data-project` attribute value on the `.project-card`.
- **Project card markup pattern is copy-paste-and-edit**: there's no templating, so adding a project means duplicating an existing `<article class="project-card">` block wholesale and editing text/images/links (use `.featured` for major/highlighted projects, omit for minor ones).
- **Section IDs are used both for nav anchors and JS scroll-spy** — if adding a new top-level index.html section, give it a unique `id` and add a matching `<li><a href="#id">` nav entry for `updateActiveLink()` to work.
- Persian/Farsi content blocks (currently only in blog.html) must have `class="rtl"` on the text container for correct right-to-left rendering.
- No linting/formatting tooling configured (no `.eslintrc`, `.prettierrc`, etc.) — match existing 4-space indentation and inline-style conventions already present in the HTML/CSS.
