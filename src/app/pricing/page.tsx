import type { Metadata } from "next";
import { CtaCalendar, PageHero, PlanCards } from "@/components/sections";
import { Faq } from "@/components/faq";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Monthly plans from $497. Setup quoted after a workflow audit. Usage billed at cost. Month-to-month after launch.",
};

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
      <Faq items={faqs.filter((f) => /cost|own|long|start|replace/i.test(f.q))} title="Pricing questions" />
      <CtaCalendar title="Not sure which plan fits?" body="Tell us what’s slipping through the cracks and we’ll recommend the smallest plan that fixes it. Sometimes that’s Starter." />
    </>
  );
}
