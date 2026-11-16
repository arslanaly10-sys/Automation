import type { Metadata } from "next";
import { Legal } from "@/components/legal";
import { guaranteeReady, site, trust } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of use", description: `Terms for using the ${site.name} website and how our pricing and guarantee work.` };

export default function Terms() {
  return (
    <Legal
      title="Terms of use"
      updated="November 2026"
      intro="The rules for using this website, and how the pricing and guarantee shown on it work."
      sections={[
        {
          id: "about",
          h: "About these terms",
          p: `These terms cover your use of this website. By using it, you agree to them. Any work ${site.name} does for you is governed by a separate written agreement. If that agreement and these terms differ, the agreement wins.`,
        },
        {
          id: "use",
          h: "Using this website",
          list: [
            "Use the site only for lawful purposes.",
            "Don’t try to disrupt it, break its security or send automated traffic to its forms.",
            "Don’t submit someone else’s details through our forms without their permission.",
          ],
        },
        {
          id: "information",
          h: "Information and estimates",
          p: "We aim to keep the content accurate and current, but it is general information, not advice for your situation. The revenue calculator produces illustrative estimates from the numbers you enter. It is not a forecast or a promise of results. Example conversations, reports and logs on this site are illustrations of how our systems work, and are labelled as examples.",
        },
        {
          id: "pricing",
          h: "Pricing",
          list: [
            "Monthly plans are shown as starting prices in US dollars.",
            site.terms.setup,
            site.terms.usage,
            site.terms.contract,
          ],
          after: "Final pricing, scope and terms are confirmed in writing before any work begins.",
        },
        ...(guaranteeReady
          ? [{
              id: "guarantee",
              h: "Our guarantee",
              p: `${trust.guarantee.title}. ${trust.guarantee.body} The guarantee applies to your first workflow, is confirmed in your client agreement, and refunds the setup fee only, not monthly fees or usage costs.`,
            }]
          : []),
        {
          id: "ai",
          h: "AI systems we build",
          p: "AI assistants can make mistakes. That’s why every system we build has handoff rules you approve, sending anything uncertain, sensitive or upset to a person. Our clients remain responsible for the decisions their business makes, and for meeting the rules that apply to contacting their customers, such as consent for text messages and call recording notices.",
        },
        {
          id: "ip",
          h: "Intellectual property",
          p: `The ${site.name} name, logo, design and written content on this site belong to us. Photographs are used under the Unsplash License. You may share links to the site, but please don’t copy its content without permission.`,
        },
        {
          id: "links",
          h: "Links to other sites",
          p: "We link to third-party services, such as our booking provider. We are not responsible for their content or practices, and their own terms apply.",
        },
        {
          id: "liability",
          h: "Liability",
          p: "The site is provided “as is”. To the extent the law allows, we are not liable for any loss arising from use of this website or reliance on its content. Nothing in these terms limits liability that cannot be limited by law.",
        },
        {
          id: "changes",
          h: "Changes",
          p: "We may update these terms from time to time. The date at the top shows when they last changed.",
        },
        {
          id: "contact",
          h: "Contact",
          p: `Questions about these terms can be sent to ${site.email}.`,
        },
      ]}
    />
  );
}
