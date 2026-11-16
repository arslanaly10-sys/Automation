import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/content";
import { ServiceIcon } from "@/components/icons";
import { CtaBanner, PageHero, ToolsMarquee } from "@/components/sections";
import { Workflow } from "@/components/home/workflow";
import { JsonLd, servicesLd } from "@/components/json-ld";
import { ProductMockups } from "@/components/product-mockups";
import { AuditButton } from "@/components/audit";

export const metadata: Metadata = {
  title: "Services",
  description: "AI reception, lead follow-up, booking, reactivation, reviews, integrations and back-office automation for service businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Automation for the work between “hello” and “job done”"
        intro="Eight services, one approach: start with the workflow costing you the most, build it properly, and expand once it’s working."
        image="/images/team-desks.jpg"
        imageAlt="Two people working at desks with large monitors in a bright office"
      >
        <AuditButton ctx={{ from: "services" }} />
      </PageHero>

      <section className="bg-bg section-tight">
        <div className="wrap">
          <nav aria-label="Services on this page" className="mb-16 flex flex-wrap gap-2">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="rounded-full border border-line px-4 py-2 text-sm hover:border-crimson hover:text-crimson-ink">{s.name}</a>
            ))}
          </nav>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 border-t border-line py-14 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="grid size-12 place-items-center rounded-full bg-crimson-soft text-crimson-ink"><ServiceIcon aria-hidden="true" name={s.icon} size={24} /></span>
                  <h2 className="display mt-6 display-md">{s.name}</h2>
                  <p className="mt-3 text-lg text-muted">{s.short}</p>
                  <Link href={`/services/${s.slug}`} className="group mt-6 inline-flex items-center gap-2 font-semibold text-crimson-ink">
                    How it works <ArrowUpRightIcon aria-hidden="true" size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="measure text-[17px]">{s.body}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-3 rounded-2xl bg-surface p-4 text-[15px]"><CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-0.5 shrink-0 text-crimson" />{x}</li>
                    ))}
                  </ul>
                  {i === 0 && <p className="mt-6 text-sm text-muted">Callers are always told they’re speaking with a virtual assistant.</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProductMockups />
      <Workflow />
      <ToolsMarquee />
      <CtaBanner />
      <JsonLd data={servicesLd} />
    </>
  );
}
