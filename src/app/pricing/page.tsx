import type { Metadata } from "next";
import { CtaCalendar, PageHero, PlanCards } from "@/components/sections";
import { Faq } from "@/components/faq";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { GuaranteeBand } from "@/components/trust";
import { JsonLd, faqLd, pricingLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Monthly plans from $497. Setup quoted after a workflow audit. Usage billed at cost. Month-to-month after launch.",
};

const pricingFaqs = faqs.filter((f) => /cost|own|long|start|replace/i.test(f.q));

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Clear plans. No surprises."
        intro="Every plan includes the build, the tuning and a real person to talk to. Pick the scope that fits today. You can move up or down later."
      />
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap">
          <PlanCards />
          <GuaranteeBand className="mt-8" />
          <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
            {[
              ["Setup", site.terms.setup],
              ["Usage", site.terms.usage],
              ["Contract", site.terms.contract],
            ].map(([t, b]) => (
              <div key={t}>
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-[15px] text-muted">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">Prices in US dollars. We quote in your local currency on request.</p>
        </div>
      </section>
      <Faq items={pricingFaqs} title="Pricing questions" />
      <JsonLd data={pricingLd} />
      <JsonLd data={faqLd(pricingFaqs)} />
      <CtaCalendar title="Not sure which plan fits?" body="Tell us what’s slipping through the cracks and we’ll recommend the smallest plan that fixes it. Sometimes that’s Starter." />
    </>
  );
}
