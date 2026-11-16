import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, BookOpenTextIcon, ScalesIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { guides } from "@/lib/guides";
import { faqs } from "@/lib/content";
import { Faq } from "@/components/faq";
import { CtaBanner, PageHero } from "@/components/sections";
import { JsonLd, faqLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical guides on missed calls, text message consent and choosing an automation agency, plus cost comparisons and how we handle data.",
};

const tools = [
  { href: "/ai-receptionist-vs-hiring", icon: ScalesIcon, title: "AI receptionist vs hiring", body: "What each option does well, and a cost comparison with your own numbers." },
  { href: "/security", icon: ShieldCheckIcon, title: "Security and data", body: "Where your data lives, who can see it, and what happens if you leave." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Straight answers before you decide" intro="Guides, comparisons and the questions business owners ask us most. Useful whether or not you work with us." />
      <section className="bg-bg section-tight">
        <div className="wrap">
          <h2 className="display display-lg">Guides</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guides.map((g) => (
              <Link key={g.slug} href={`/resources/${g.slug}`} className="group lift flex flex-col rounded-card border border-line p-7">
                <BookOpenTextIcon aria-hidden="true" size={28} weight="duotone" className="text-crimson" />
                <h3 className="display mt-5 text-2xl group-hover:text-crimson-ink">{g.title}</h3>
                <p className="mt-3 flex-1 text-[15px] text-muted">{g.description}</p>
                <p className="mt-6 text-sm text-muted">{g.minutes} min read</p>
              </Link>
            ))}
          </div>
          <h2 className="display mt-20 display-lg">Compare and check</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {tools.map((t) => (
              <Link key={t.href} href={t.href} className="group lift flex items-start gap-5 rounded-card bg-surface p-7">
                <t.icon aria-hidden="true" size={32} weight="duotone" className="shrink-0 text-crimson" />
                <span className="flex-1">
                  <span className="block text-xl font-semibold group-hover:text-crimson-ink">{t.title}</span>
                  <span className="mt-2 block text-muted">{t.body}</span>
                </span>
                <ArrowUpRightIcon aria-hidden="true" size={18} weight="bold" className="mt-1 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Faq items={faqs} title="Questions we get asked" intro="Short, direct answers. If yours isn’t here, ask us on a call." />
      <JsonLd data={faqLd(faqs)} />
      <CtaBanner />
    </>
  );
}
