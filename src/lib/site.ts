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
  // Formspree form ID (the part after formspree.io/f/). Set NEXT_PUBLIC_FORMSPREE_ID in Vercel,
  // or paste the ID here. While empty, the contact form falls back to opening the visitor's email app.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  // PLACEHOLDER: replace with your production domain
  siteUrl: "https://infotech-website-arslan-b69a.vercel.app",

  // Commercial terms shown on the pricing page. Edit to match your contracts.
  terms: {
    setup: "One-time setup from $500 to $2,000, depending on how many systems we connect. You get a fixed quote after your workflow audit.",
    usage: "Phone minutes, SMS and AI usage are billed at cost, with no markup.",
    contract: "Month-to-month after launch. Cancel with 30 days’ notice.",
  },
} as const;

/**
 * Trust sections. Each one stays hidden on the site until its fields are filled in,
 * so nothing placeholder-looking is ever shown to visitors.
 */
export type Trust = {
  demo: {
    /** Phone number visitors can call to talk to the AI receptionist, as it should be displayed, e.g. "+1 (415) 555-0134". */
    phone: string;
    /** A recording of a real call, e.g. "/audio/demo-call.mp3" (put the file in public/audio). */
    recording: string;
    /** Transcript of the recording, shown under the player for people who can't listen. */
    transcript: { speaker: "Caller" | "AI receptionist"; text: string }[];
  };
  guarantee: {
    /** Short promise, e.g. "Live in 30 days, or your setup fee back". */
    title: string;
    /** The exact terms, in one or two sentences. */
    body: string;
  };
  company: {
    legalName: string;
    registration: string; // e.g. "Company no. 12345678"
    address: string; // street, city
    country: string;
  };
};

export const trust: Trust = {
  demo: { phone: "", recording: "", transcript: [] },
  guarantee: {
    title: "Live in 30 days, or your setup fee back",
    body: "If your first workflow isn’t live within 30 days of you approving the plan from your workflow audit, we refund your setup fee in full. The clock pauses only while we’re waiting on access or approvals from your side.",
  },
  company: { legalName: "", registration: "", address: "", country: "" },
};

export const demoReady = Boolean(trust.demo.phone || trust.demo.recording);
export const guaranteeReady = Boolean(trust.guarantee.title && trust.guarantee.body);
export const companyReady = Boolean(trust.company.legalName);

/** True once bookingUrl has been replaced with a real link. */
export const bookingReady = !site.bookingUrl.includes("your-infotech-link");

/** Where "Book a strategy call" buttons go: the booking page when it is set, the contact page until then. */
export const bookHref = bookingReady ? site.bookingUrl : "/contact";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;
