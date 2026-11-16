# INFOTECH website

Marketing site for INFOTECH, an AI automation agency for service businesses worldwide.

Built with Next.js 15, Tailwind CSS v4, GSAP, Lenis and Phosphor icons.

## Before launch
Edit `src/lib/site.ts`:
1. `bookingUrl`: your Calendly or Cal.com link
2. `email`: the inbox for enquiries
3. `siteUrl`: your production domain

The contact form opens the visitor's email app with the enquiry filled in. To receive submissions directly, point it at Formspree, Resend or your CRM (see `src/components/contact-form.tsx`).

The privacy and terms pages are starting templates. Have them reviewed for your jurisdiction.

## Develop
```bash
npm install
npm run dev
```

## Pages
Home, Services, Industries (plus 6 industry pages), Pricing, About, Contact, Privacy, Terms.
