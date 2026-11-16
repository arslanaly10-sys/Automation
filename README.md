# INFOTECH website

Marketing site for INFOTECH, an AI automation agency for service businesses worldwide.

Built with Next.js 15, Tailwind CSS v4, GSAP, Lenis and Phosphor icons.

## Before launch
Edit `src/lib/site.ts`:
1. `bookingUrl`: your Calendly or Cal.com link
2. `email`: the inbox for enquiries
3. `siteUrl`: your production domain

The contact form posts to Formspree:
1. Create a form at formspree.io and copy its ID (the part after `formspree.io/f/`).
2. In Vercel, go to Project → Settings → Environment Variables and add `NEXT_PUBLIC_FORMSPREE_ID` with that ID, then redeploy.

Until the ID is set, the form falls back to opening the visitor's email app.

The privacy and terms pages are starting templates. Have them reviewed for your jurisdiction.

## Develop
```bash
npm install
npm run dev
```

## Pages
Home, Services, Industries (plus 6 industry pages), Pricing, About, Contact, Privacy, Terms.
