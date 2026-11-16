# INFOTECH website

Next.js 15 (App Router) + Tailwind CSS v4 marketing site for INFOTECH, an AI automation agency for service businesses.

## Where things live
- `src/lib/site.ts`: name, booking link, email, domain, commercial terms. **Placeholders must be replaced before launch.** The contact form posts to Formspree using `NEXT_PUBLIC_FORMSPREE_ID` and falls back to mailto when it's unset.
- `src/lib/content.ts`: all copy (services, industries, steps, pricing, FAQs). Edit words here, not in components.
- `src/app/globals.css`: brand tokens (light and `.dark`). Custom classes sit in `@layer components` so Tailwind utilities can override them. Keep it that way.
- `src/components/brand.tsx`: wordmark (traced from the logo) and the diamond mark.
- `public/images/`: Unsplash photos (Unsplash License; credit line is in the footer).

## Brand rules
- Crimson `#CB3A51` (logo), `--crimson-ink` for crimson text on light grounds. Black `#000` matches the logo ground.
- Newsreader for display, Hanken Grotesk for body. Sentence case, no all-caps eyebrows.
- Voice: premium and plain. No hype words ("unlock", "leverage", "seamless"). No invented clients, testimonials or stats.
- Every page opens on a dark hero; the header starts light-on-dark and turns solid on scroll.

## Motion
GSAP ScrollTrigger + Lenis. Pinned "How it works", horizontal industry slider and word-reveal run only at ≥1024px with no reduced-motion preference; otherwise they fall back to stacked layouts.

## Commands
```bash
npm run dev
npm run build
```

Skills for this project are in `.claude/skills/` (see its README).
