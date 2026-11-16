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
        { h: "What we collect on this website", p: "When you contact us we receive the details you choose to share, such as your name, email address, business name and message. We use basic, privacy-friendly analytics to understand how the site is used." },
        { h: "Information we process for clients", p: "When we run automations for a client, we process their customers’ information on the client’s behalf and only on their instructions. The client remains responsible for that data, and it stays in accounts the client controls wherever possible." },
        { h: "How we use information", p: "To reply to enquiries, provide and improve our services, meet legal obligations and keep our systems secure. We do not sell personal information." },
        { h: "Sharing", p: "We use trusted providers for hosting, communications and AI processing, each bound by contract to protect the information they handle. We list our current sub-processors on request." },
        { h: "Retention", p: "We keep information only as long as needed for the purpose it was collected, or as required by law." },
        { h: "Your rights", p: `Depending on where you live, you may have rights to access, correct, delete or object to the processing of your information. Contact ${site.email} to make a request.` },
        { h: "Contact", p: `Questions about this policy can be sent to ${site.email}.` },
      ]}
    />
  );
}
