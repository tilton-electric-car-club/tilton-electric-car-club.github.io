# Claude Code Instructions

## Commit messages
Do not include Claude session links in commit messages.

---

## Project: Tilton Electric Car Club (TECC) website

React 19 + Vite 8 static SPA deployed to GitHub Pages via the `main` branch.
The `postbuild` step copies `dist/index.html` → `dist/404.html` for SPA routing on Pages.
Do not change the build or deploy workflow without confirming with the user.

### What this site is

A public-information front door for Tilton Electric Car Club, a community transport
scheme in Tilton on the Hill, Leicestershire, operated under Tilton Green Community
Projects Limited (a Community Benefit Society). The site explains the scheme to
first-time residents, prospective volunteers, and grant assessors. It does **not**
replace the booking/payments platform at `tiltonelectriccarclub.com`.

### Routes

`/` Home · `/need-a-lift` · `/monthly-meetings` · `/pet-policy` · `/privacy`

Internal links must use React Router `<Link>` — never bare `<a href="...">` for
in-app routes (causes full-page reloads with the SPA setup).

### Content constraints

Many sections in `Home.jsx` carry `{/* DRAFT — club to confirm */}` comments.
**Do not invent or fill in** governance details, legal entity numbers, or partner
descriptions. Leave the placeholders until the club provides verified text.

### Out of scope (do not implement)

- Booking, payments, or member authentication
- Cookie/analytics banners
- The future `book.tiltonelectriccarclub.com` subdomain split — that is a
  supplier-coordinated DNS migration explicitly deferred in the guidance report
- CMS or server-side infrastructure

---

## Design system

### Palette — raw tokens (defined in `src/index.css` `:root`)

| Name | Hex | Role |
|------|-----|------|
| `--forest-800` | `#1E6B3A` | Trust anchor — navbar, hero bg, footer, headings |
| `--forest-700` | `#276E42` | Dark-mode forest |
| `--leaf-500` | `#7DBE3C` | Leaf lime — sparing accent (from logo wordmark) |
| `--sky-600` | `#3E7CA8` | Sky — links, wayfinding, focus rings on light bg |
| `--sky-400` | `#6AABCF` | Sky dark-mode variant |
| `--paper` | `#F6F4EC` | Warm stone page background (light mode) |
| `--ink-900` | `#1C2A22` | Body text |

Semantic tokens (`--color-forest`, `--color-sky`, `--color-leaf`, etc.) sit above
the raw palette and swap between light and dark mode. **Component CSS must use
semantic tokens, not raw palette tokens directly** — the `--color-*` layer is what
makes dark mode work. The one confirmed exception is the navbar/footer (always
forest-green regardless of theme), where raw rgba-white values are acceptable.

### Typography

- **Display**: Fraunces 400/600 — headings only, loaded via `fonts.bunny.net`
- **Body/UI**: Public Sans 400/500/600/700 — all other text, via `fonts.bunny.net`
- `font-display: swap` is set by bunny.net; a `<link rel="preload">` for Fraunces 600
  is in `index.html` to protect LCP on the hero h1.
- The `<link rel="preconnect">` to bunny.net must keep `crossorigin` — without it
  the browser cannot reuse the connection for CORS font file requests.

### Logo

Two assets: `tilton.png` (dark-text on white bg — for light surfaces) and
`tilton-dark.png` (light/white variant — for dark surfaces). The navbar is
**always** forest-green, so it **always** shows `logo-dark`. Both `<img>` tags
are rendered; CSS (`Navbar.css`) controls visibility. Do not add JS switching.

### Dark mode

Tokens are defined three times in `src/index.css`:
1. `:root` — light mode defaults
2. `@media (prefers-color-scheme: dark) :root:not(.light)` — OS dark preference
3. `:root.dark` — manual toggle override

**These two dark blocks must stay in sync.** When adding a new design token,
add it in all three places. The anti-flash script in `index.html` applies the
`.dark`/`.light` class before first paint.

---

## Accessibility — non-negotiable

The guidance report mandates WCAG 2.2 AA throughout (Equality Act 2010, EN 301 549).
The site serves older and low-vision users who depend on these guarantees.

- **Contrast**: text must be ≥ 4.5:1 (normal) / 3:1 (large/bold). Verify with
  actual hex values when adding or changing colour tokens — do not estimate.
- **Focus rings**: `:focus-visible` uses `--color-sky` (~4.7:1 on paper). On
  dark-green surfaces (`.navbar`, `.hero`) override to `outline-color: white`
  (confirmed in `src/index.css`).
- **Touch targets**: 44px minimum — preserved on all interactive elements.
- **Reduced motion**: the `@media (prefers-reduced-motion: reduce)` block in
  `index.css` kills all transitions. Do not add animations that bypass it.
- **Skip link**: `.skip-link` in `Layout.jsx` must be preserved.
- **Scroll offset**: `.card[id]` has `scroll-margin-top: 72px` to clear the 56px
  sticky navbar on anchor jumps. Apply the same to any new hash targets.
- **Safety callouts**: use `.callout--warning` (amber/orange) for legal or safety
  obligations such as insurance requirements or Highway Code rules. Do not use the
  default sky-blue `.callout` for safety-critical content.
- **SVG icons**: always `aria-hidden="true"` on decorative icons; ensure adjacent
  labels provide the accessible name.

---

## Performance — treat as a hard requirement

The site serves rural Leicestershire (slow broadband, older devices). The guidance
report explicitly requires good Core Web Vitals (LCP, INP, CLS).

- Font payloads: only the weights listed above are loaded. Do not add weights or
  families without checking the payload impact.
- LCP: the hero `h1` is the LCP element. Fraunces 600 is preloaded. The Georgia
  fallback stack has different metrics; avoid changes that increase CLS on font swap.
- SVG signatures (e.g. the hill horizon): include explicit `width` and `height`
  attributes alongside `viewBox` to allow the browser to reserve layout space and
  avoid CLS.
- Images: both logo PNGs are already in `src/assets/`. Do not add large unoptimised
  images without compression.

---

## Messaging hierarchy (from TECC guidance report)

When writing or reviewing copy, the correct order of emphasis is:

1. **Community transport** — the primary message: shared car, volunteer lifts
2. **Accessibility** — who it helps: less mobile residents, independence
3. **Convenience** — practical value: no ownership costs, easy to book
4. **Sustainability** — environmental benefit: last, not first

Do not lead with environmental or eco messaging.

### Audiences

The site must serve four distinct groups without assuming one:
- **First-time residents** — what is TECC, how does it work, can I join?
- **Need-a-lift users** — less mobile residents seeking volunteer-driver trips
- **Volunteer drivers** — how to give their time; DBS-checked, free membership
- **Grant assessors / partners** — legitimacy, governance, community benefit

---

## Key files

| File | Purpose |
|------|---------|
| `src/index.css` | All design tokens, base styles, component classes |
| `src/pages/Home.jsx` | Main landing page — wayfinding band, hero, all sections |
| `src/components/Navbar.jsx` / `Navbar.css` | Sticky forest-green nav, logo swap, Book a Car |
| `src/components/Footer.jsx` / `Footer.css` | Forest-green footer, partner credits |
| `src/components/Layout.jsx` | Skip link + Navbar + main + Footer wrapper |
| `src/components/ThemeToggle.jsx` | Light/dark manual toggle |
| `index.html` | Anti-flash script, font preconnect + preload, theme-color |
| `public/favicon.svg` | On-brand green/hill/bolt mark (replaced Vite default) |

`BOOKING_URL` (`https://tiltonelectriccarclub.com`) is defined in both
`Navbar.jsx` and `Home.jsx`. If the booking platform URL ever changes,
update **both** files.
