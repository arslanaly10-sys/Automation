import type { Metadata } from "next";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of use" };

export default function Terms() {
  return (
    <Legal
      title="Terms of use"
      updated="November 2026"
      sections={[
        { h: "About these terms", p: `These terms cover your use of this website. Services provided by ${site.name} are governed by a separate written agreement with each client.` },
        { h: "Information on this site", p: "We aim to keep the content accurate, but it is provided for general information. Figures produced by the revenue calculator are illustrative estimates based on the numbers you enter, not a guarantee of results." },
        { h: "Pricing", p: "Prices shown are starting points. Final pricing, setup fees and usage costs are confirmed in writing before any work begins." },
        { h: "Intellectual property", p: `The ${site.name} name, logo and site content belong to us. Photographs are used under the Unsplash License.` },
        { h: "Links", p: "We may link to third-party sites, such as our booking provider. We are not responsible for their content or practices." },
        { h: "Liability", p: "To the extent permitted by law, we are not liable for losses arising from use of this website." },
        { h: "Contact", p: `Questions about these terms can be sent to ${site.email}.` },
      ]}
    />
  );
}
