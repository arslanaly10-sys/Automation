import type { Metadata } from "next";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy", description: `How ${site.name} collects, uses and protects personal information.` };

export default function Privacy() {
  return (
    <Legal
      title="Privacy policy"
      updated="November 2026"
      intro="What we collect, why, who we share it with and the choices you have."
      sections={[
        {
          id: "who-we-are",
          h: "Who we are",
          p: `${site.name} designs and runs automation systems for businesses. In this policy, “we” and “us” mean ${site.name}. For information collected through this website, we decide how it is used (we are the “controller”). You can reach us at ${site.email}.`,
        },
        {
          id: "website",
          h: "What we collect on this website",
          list: [
            "Contact form: your name, work email, business name, country, industry and your message.",
            "Estimate request: your email, business name if you give it, and the numbers you entered in the revenue calculator.",
            "Meeting bookings: if you book a call, Calendly collects your details under its own privacy policy and shares them with us.",
            "Analytics: Vercel Web Analytics counts page views and button clicks. It sets no cookies and is designed not to identify individual visitors.",
            "Technical logs: our hosting provider records basic request data, such as IP address and browser type, to deliver the site and keep it secure.",
          ],
        },
        {
          id: "cookies",
          h: "Cookies and browser storage",
          p: "This site does not use advertising or tracking cookies. If you switch between light and dark mode, your choice is saved in your browser’s local storage so the site remembers it. It never leaves your device.",
        },
        {
          id: "use",
          h: "How we use it, and our legal basis",
          list: [
            "To reply to your enquiry and send an estimate you asked for: to take steps you requested before a contract, or our legitimate interest in answering business enquiries.",
            "To understand which pages are useful: our legitimate interest in improving the site, using aggregated analytics.",
            "To keep the site secure and meet legal obligations: our legitimate interests and legal requirements.",
          ],
          after: "We do not sell personal information, and we do not share it for cross-context behavioural advertising.",
        },
        {
          id: "clients",
          h: "Information we process for clients",
          p: "When we run automations for a client, such as answering their calls or messages, we process their customers’ information on the client’s behalf and only on their written instructions (we are the “processor”). The client is the controller and is responsible for telling their customers how their information is used. We sign a data processing agreement with every client on request.",
        },
        {
          id: "ai",
          h: "AI assistants, calls and messages",
          list: [
            "Our AI assistants tell callers and people messaging them that they are speaking with a virtual assistant.",
            "Where a client turns on call recording or transcription, the client is responsible for giving any notice and getting any consent the law requires where they and their customers are.",
            "Text messages are sent only to people who have given the client permission to contact them. Every automated message sequence stops when the person opts out.",
          ],
        },
        {
          id: "sharing",
          h: "Who we share information with",
          list: [
            "Vercel: website hosting and analytics.",
            "Formspree: delivery of the contact and estimate forms to our inbox.",
            "Calendly: meeting booking.",
            "For client work, communications, messaging and AI model providers, which we name in each client agreement.",
            "Professional advisers or authorities, where the law requires it.",
          ],
          after: "Each provider processes information under its own terms and only for the service it provides to us.",
        },
        {
          id: "transfers",
          h: "International transfers",
          p: "Some of our providers store or process information outside your country, including in the United States. Where the law requires it, we rely on recognised safeguards such as standard contractual clauses.",
        },
        {
          id: "retention",
          h: "How long we keep it",
          p: "We keep enquiries for up to 24 months after our last contact unless you become a client, in which case we keep records for as long as our agreement and the law require. Analytics are kept only in aggregated form.",
        },
        {
          id: "security",
          h: "Security",
          p: "We use established providers, encrypted connections and restricted access to protect information. No system is perfectly secure, so we also limit what we collect to what we need.",
        },
        {
          id: "rights",
          h: "Your rights",
          p: "Depending on where you live, you may have the right to:",
          list: [
            "access the information we hold about you and get a copy of it",
            "correct it, or ask us to delete it",
            "object to, or ask us to restrict, how we use it",
            "withdraw consent where we rely on it",
            "know what we collect and why, and not be treated differently for using these rights",
          ],
          after: `To make a request, email ${site.email}. We’ll reply within one month. You can also complain to your local data protection authority.`,
        },
        {
          id: "children",
          h: "Children",
          p: "This site is for businesses and is not directed at children under 16. We do not knowingly collect their information.",
        },
        {
          id: "changes",
          h: "Changes to this policy",
          p: "If we change how we handle information, we’ll update this page and the date at the top. Significant changes will be highlighted here.",
        },
        {
          id: "contact",
          h: "Contact",
          p: `Questions about this policy or your information can be sent to ${site.email}.`,
        },
      ]}
    />
  );
}
