import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { securityPage } from "@/lib/content";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Security and data",
  description: "Where your data lives, who can access it, how AI providers handle it, and what happens to it if you leave.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        title="Your data stays yours"
        intro="Where your customer data lives, who can see it, how the AI handles it, and what happens if you leave. Written for owners, not engineers."
        image="/images/security-desk.jpg"
        imageAlt="Hands typing on a keyboard at a clean white desk"
      />
      <section className="bg-bg section-tight">
        <div className="wrap">
          <ul className="grid gap-4 md:grid-cols-2">
            {securityPage.summary.map((s) => (
              <li key={s} className="flex gap-4 rounded-card border border-line p-6 text-[17px]">
                <ShieldCheckIcon aria-hidden="true" size={28} weight="duotone" className="shrink-0 text-crimson" />{s}
              </li>
            ))}
          </ul>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {securityPage.sections.map((s) => (
              <div key={s.h} className="border-t border-line pt-6">
                <h2 className="text-xl font-semibold">{s.h}</h2>
                <p className="mt-3 text-muted">{s.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-muted">
            More detail is in our <Link href="/privacy" className="font-semibold text-ink underline underline-offset-4">privacy policy</Link>.
            We sign a data processing agreement with any client who asks.
          </p>
        </div>
      </section>
      <CtaBanner title="Questions about your data?" body="Ask us anything on a call. If your industry has specific rules, we’ll go through them with you before we build." />
    </>
  );
}
