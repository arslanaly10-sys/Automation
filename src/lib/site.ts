/**
 * Site-wide settings. Everything you will need to change before launch lives here.
 *
 * BEFORE LAUNCH, replace the three placeholders below:
 *   1. bookingUrl  – your Calendly or Cal.com link
 *   2. email       – the inbox that should receive enquiries
 *   3. siteUrl     – your production domain
 */
export const site = {
  name: "INFOTECH",
  tagline: "AI automation for service businesses",
  description:
    "INFOTECH designs and runs AI systems that answer calls and messages, book appointments and follow up with every lead, connected to the tools your business already uses.",

  // PLACEHOLDER: replace with your real booking link
  bookingUrl: "https://calendly.com/your-infotech-link/strategy-call",
  // PLACEHOLDER: replace with your real inbox
  email: "hello@infotech.example",
  // PLACEHOLDER: replace with your production domain
  siteUrl: "https://infotech-website-arslan-b69a.vercel.app",

  // Commercial terms shown on the pricing page. Edit to match your contracts.
  terms: {
    setup: "One-time setup is quoted after your workflow audit. It depends on how many systems we connect.",
    usage: "Phone minutes, SMS and AI usage are billed at cost, with no markup.",
    contract: "Month-to-month after launch. Cancel with 30 days’ notice.",
  },
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;
