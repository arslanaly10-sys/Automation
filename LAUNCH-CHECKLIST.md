# INFOTECH launch checklist

What's left before the site should carry real traffic, who does it, and where it lives in the code.
Tick items off as they're done.

## Must do before launch

- [ ] **Real email address** (you)
  Replace `hello@infotech.example` in `src/lib/site.ts` → `email`.
- [ ] **Reply within five minutes in working hours** (you): the site promises a reply within one working day; you sell speed,
  so beat it. Turn on a Formspree auto-reply (paid plan) or forward submissions to your own automation.
- [ ] **Booking link** (you)
  Paste your Calendly or Cal.com link into `src/lib/site.ts` → `bookingUrl`.
  Every "Get your free audit" button already goes to `/contact`; once the link is set, that page shows your calendar inline.
- [ ] **Custom domain** (you, then Claude)
  1. Buy or connect the domain in Vercel: Project → Settings → Domains.
  2. Update `src/lib/site.ts` → `siteUrl` (used by the sitemap, share previews and search data).
  3. In Formspree, change **Restrict to domain** to the new domain.
- [ ] **Legal review of Privacy and Terms** (lawyer)
  Pages: `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`. They are drafts. When the review is done,
  remove the "Draft prepared for review" note in `src/components/legal.tsx`.
  Ask the lawyer to confirm or change:
  - [ ] **Governing law**: removed from the Terms for now. Ask whether to add one, and for which country.
  - [ ] **Data processing agreement**: the Privacy policy says you sign one with every client on request.
        Have a DPA template ready.
  - [ ] **Retention**: enquiries are kept for up to 24 months. Confirm that period suits you.
  - [ ] **Response time for privacy requests**: the policy promises a reply within one month.
  - [ ] **Messaging and call rules** for the countries you sell into, e.g. SMS consent (TCPA and A2P 10DLC
        in the US), call-recording notices, and AI disclosure laws.
  - [ ] **Guarantee wording**: "Live in 30 days, or your setup fee back". The Terms add that it covers the
        first workflow and refunds the setup fee only, not monthly or usage fees. Put the same terms in
        your client contract.
  - [ ] **Security page promises** (`securityPage` in `src/lib/content.ts`): two-factor sign-in on every account,
        named staff only, AI providers whose terms don't allow training on client data, incident notification
        "without undue delay", and deleting copies and removing access when a client leaves. Make sure you can keep each one.
  - [ ] **Consumer law**: whether any rules apply to how prices ("from $497", setup "$500 to $2,000") are shown.

## Optional, adds trust

Each of these is already built and stays hidden until it's filled in. Never fill them with invented details.

- [ ] **Live AI demo** (you)
  A phone number for your own AI receptionist and/or a recording of a real call with its transcript.
  Fill `trust.demo` in `src/lib/site.ts`; put the audio file in `public/audio/`.
  Tip: build it to book calls for INFOTECH itself, so prospects can try the product.
- [ ] **Case study** (you)
  One real project, even your own business or a discounted first client. Add it to `caseStudies` in
  `src/lib/content.ts`: client (or an anonymous description), industry, problem, what you built,
  2–3 before/after numbers, timeline and a photo. Add a quote only with the client's written permission.
  The homepage card, the case study pages and the nav link appear automatically.
- [ ] **Company details** (you, skipped for now)
  `trust.company` in `src/lib/site.ts`. Only the company name is required.
- [ ] **Your own photos** (you)
  Replace stock photos in `public/images/` with real work as you get it. Keep the same file names,
  or update the paths in `src/lib/content.ts`.
- [ ] **Vercel Pro** (you, only if you want it)
  Needed to see the custom events: Booking click, CTA click, Contact form sent and Estimate requested.
  Page views work on the free plan.

- [ ] **Speed Insights** (you): enable it once in Vercel, Project → Speed Insights → Enable. The code is already on the site.
- [ ] **Require checks before going live** (you, optional): in Vercel, Project → Settings → Git, turn on deployment
  checks so production only updates after the GitHub "Checks" workflow passes.
- [ ] **Guides** (you, then lawyer for the consent guide): read the three guides in `src/lib/guides.ts`.
  The text message consent guide summarises rules in the US, UK, EU, Canada and Australia; have it checked.
- [ ] **Example figures** (you): the worked example on Pricing and the cost comparison share `exampleUsage` in
  `src/lib/content.ts` (300 calls, 3 minutes, $0.15/min, $1,200 setup). All are labelled examples; set your real usage rate when known.
- [ ] **Cost comparison defaults** (you): the starting numbers on `/ai-receptionist-vs-hiring` (salary $3,200,
  answering service $1.50/min) are labelled examples you can change in `src/components/cost-compare.tsx`.

## Already done

- Site built and live on Vercel, auto-deploying from `main`.
- Formspree connected (`NEXT_PUBLIC_FORMSPREE_ID`); test submission received.
- Vercel Web Analytics enabled; page views arriving.
- Lighthouse on the live site: 97–100 performance, 100 accessibility, best practices and SEO.
- Safari (WebKit) checks pass on desktop and iPhone.
- Setup fee range and the 30-day guarantee shown on Home and Pricing.
