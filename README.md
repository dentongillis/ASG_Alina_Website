# Alinea Sales Group — Website

Marketing site for **Alinea Sales Group (ASG)** — an independent manufacturer's sales
representative firm for the RV industry.

**Tagline:** Relationships. Access. Results.
**Domain:** `alineasalesgroup.com`

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with brand tokens in `tailwind.config.ts`
- **Framer Motion** for restrained scroll/hover animation
- **lucide-react** for thin gold line icons
- Fonts via `next/font/google`: **Cinzel** (display / eyebrows) + **Inter** (body / UI)
- Forms via **Formspree**, scheduling via **Calendly** (both pluggable via env)
- Deploy target: **Vercel**

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

Build / start the production bundle:

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the two values when ready. Until
they are set, the site falls back to a `mailto:` Book-a-Call link and a stubbed
form success state — everything still renders.

| Variable                     | Purpose                                           |
| ---------------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_CALENDLY_URL`   | Booking URL used for every Book-a-Call CTA.       |
| `NEXT_PUBLIC_FORMSPREE_URL`  | Endpoint for the Partner and Contact forms.       |

Phone and email are kept as code constants in [`src/lib/config.ts`](src/lib/config.ts)
so they can be swapped in one place.

## Project structure

```
public/                 logo + headshot (PNG)
src/
  app/                  App Router pages (home, company, services, partner, contact)
  components/
    layout/             Header, Footer, CtaBand
    primitives/         Container, Section, Eyebrow, Button, SectionLine, Reveal, Field
    sections/           page sections (Hero, StatsBar, Categories, etc.)
  lib/
    config.ts           SITE_NAME, NAV_LINKS, PHONE/EMAIL, Calendly/Formspree URLs
    motion.ts           shared Framer Motion variants
    useFormspree.ts     form submission hook
tailwind.config.ts      brand tokens (asg.*), gold gradient utilities
```

## Design system

Brand tokens live in `tailwind.config.ts` under `theme.extend.colors.asg.*` and
in CSS variables in `src/app/globals.css`. The signature “Line” motif — a thin
gold gradient rule that draws in left-to-right on scroll — lives in
[`SectionLine.tsx`](src/components/primitives/SectionLine.tsx) and is reused
throughout the site. All motion respects `prefers-reduced-motion`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo into Vercel — defaults are correct (Next.js).
3. In **Project Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_FORMSPREE_URL`
4. **Domains → Add Domain**: `alineasalesgroup.com` and `www.alineasalesgroup.com`.
   The `vercel.json` `redirects` block forwards `www` to the apex.
5. Trigger a deploy. The site is fully static (all routes prerendered).

---

## [ADAM TODO] — pre-launch checklist

These placeholders are wired throughout the site. Fill them in and the site is
ready to go.

- [ ] **Phone number** — edit `PHONE` in [`src/lib/config.ts`](src/lib/config.ts).
- [ ] **Public email address** — edit `EMAIL` in the same file.
- [ ] **Calendly booking link** — set `NEXT_PUBLIC_CALENDLY_URL` in Vercel env.
- [ ] **Formspree form endpoint** — set `NEXT_PUBLIC_FORMSPREE_URL` in Vercel env.
- [ ] **Logo files** — add `public/asg-logo.svg` and a transparent `public/asg-logo.png`
      when available (the current PNG already works as-is).
- [x] **Office address** — update the Footer and Contact page once finalized.
- [ ] **Imagery** — search for `[ADAM TODO: swap image]` in
      [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx) to
      add real RV-manufacturing photography behind the hero.
- [ ] **Stats** — if you want to publish specific first-year sales figures or
      named brands, update [`src/components/sections/StatsBar.tsx`](src/components/sections/StatsBar.tsx).
- [ ] **OG image** — currently uses the logo at `/asg-logo.png`. Optional: add a
      dedicated 1200×630 share image at `public/og-image.png` and update
      `src/app/layout.tsx` metadata.

---

## Pages

| Route       | Purpose                                                   |
| ----------- | --------------------------------------------------------- |
| `/`         | Home — full hero, stats, value prop, categories, services teaser, tagline triad, founder teaser, CTA |
| `/company`  | About ASG, Adam's bio, career timeline, the name story, values band |
| `/services` | Sales representation (core), categories, warehousing add-on, territory, 01–05 engagement |
| `/partner`  | Supplier benefits, ideal partner profile, Formspree form  |
| `/contact`  | Calendly embed (or mailto fallback), phone/email/office, quick-message form |

## Accessibility & SEO

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, labelled forms).
- Visible gold focus ring on every interactive element.
- Body text is always ink-on-light; gold is reserved for short / large /
  decorative text on dark.
- Per-route `metadata` exports, OG/Twitter tags, sitemap and robots routes
  generated by Next (`/sitemap.xml`, `/robots.txt`).
- All images served via `next/image`.
