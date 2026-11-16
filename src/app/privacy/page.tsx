import type { Metadata } from "next";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Privacy() {
  return (
    <Legal
      title="Privacy policy"
      updated="November 2026"
      sections={[
        { h: "Who we are", p: `${site.name} provides automation services to businesses. This policy explains how we handle personal information collected through this website and through the systems we operate for clients.` },
        { h: "What we collect on this website", p: "When you contact us we receive the details you choose to share, such as your name, email address, business name and message. We use Vercel Web Analytics to count page views and button clicks. It does not use cookies and does not identify individual visitors." },
        { h: "Information we process for clients", p: "When we run automations for a client, we process their customers’ information on the client’s behalf and only on their instructions. The client remains responsible for that data, and it stays in accounts the client controls wherever possible." },
        { h: "How we use information", p: "To reply to enquiries, provide and improve our services, meet legal obligations and keep our systems secure. We do not sell personal information." },
        { h: "Sharing", p: "This website uses Vercel (hosting and analytics), Formspree (contact form delivery) and Calendly (meeting booking). Each processes your information under its own privacy terms. For client work we also use communications and AI providers, which we name in each client agreement." },
        { h: "Retention", p: "We keep information only as long as needed for the purpose it was collected, or as required by law." },
        { h: "Your rights", p: `Depending on where you live, you may have rights to access, correct, delete or object to the processing of your information. Contact ${site.email} to make a request.` },
        { h: "Contact", p: `Questions about this policy can be sent to ${site.email}.` },
      ]}
    />
  );
}
