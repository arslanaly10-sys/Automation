import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { industries, serviceDetails, services } from "@/lib/content";
import { site } from "@/lib/site";
import { AuditButton } from "@/components/audit";
import { ChatPlayer } from "@/components/chat";
import { LogCard } from "@/components/log-card";
import { ServiceIcon } from "@/components/icons";
import { Faq } from "@/components/faq";
import { CtaBanner, PageHero } from "@/components/sections";
import { JsonLd, faqLd } from "@/components/json-ld";
import { CallTranscript, EnquiryInbox, WeeklyReport } from "@/components/product-mockups";

/* The mockup that best shows each service’s output, where one fits. */
const mockupFor: Record<string, () => React.ReactNode> = {
  "ai-reception": () => <CallTranscript floating />,
  "lead-follow-up": () => <EnquiryInbox floating />,
  optimisation: () => <WeeklyReport floating />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function find(slug: string) {
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  return service && detail ? { service, detail } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  return {
    title: found.service.name,
    description: found.service.short,
    alternates: { canonical: `/services/${found.service.slug}` },
    openGraph: { images: [found.detail.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const found = find((await params).slug);
  if (!found) notFound();
  const { service, detail } = found;
  const fits = detail.fit.map((slug) => industries.find((i) => i.slug === slug)!).filter(Boolean);
  const index = services.findIndex((s) => s.slug === service.slug);
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.body,
    url: `${site.siteUrl}/services/${service.slug}`,
    provider: { "@id": `${site.siteUrl}/#org` },
    areaServed: "Worldwide",
    offers: { "@type": "Offer", url: `${site.siteUrl}/pricing`, priceCurrency: "USD", price: 497, description: "Plans from $497 a month" },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Services", item: `${site.siteUrl}/services` },
      { "@type": "ListItem", position: 2, name: service.name, item: `${site.siteUrl}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <PageHero title={detail.headline} intro={service.body} image={detail.image} imageAlt={detail.imageAlt}>
        <div className="flex flex-wrap gap-3">
          <AuditButton ctx={{ from: service.slug }} />
          <Link href="#how-it-works" className="btn btn-ghost text-white">See how it works</Link>
        </div>
        <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/60">
          <Link href="/services" className="link-draw">Services</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span aria-current="page">{service.name}</span>
        </nav>
      </PageHero>

      <section id="how-it-works" className="scroll-mt-20 bg-bg section">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="grid size-12 place-items-center rounded-full bg-crimson-soft text-crimson-ink"><ServiceIcon name={service.icon} size={24} /></span>
            <h2 className="display mt-6 display-lg">How it works</h2>
            <ol className="mt-10 flex flex-col">
              {detail.steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[40px_1fr] gap-4 border-t border-line py-6 first:border-0 first:pt-0">
                  <span className="grid size-9 place-items-center rounded-full bg-crimson-soft text-sm font-semibold text-crimson-ink">{i + 1}</span>
                  <div>
                    <p className="text-lg font-semibold">{step.title}</p>
                    <p className="mt-2 text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-28">
              {detail.sample.kind === "chat" ? (
                <>
                  <p className="mb-4 text-sm text-muted">{detail.sample.caption}</p>
                  <ChatPlayer
                    messages={detail.sample.messages}
                    outcome={detail.sample.outcome}
                    header={detail.sample.header}
                    caption="Handled by your AI assistant"
                    tone="light"
                  />
                </>
              ) : (
                <LogCard title={detail.sample.title} items={detail.sample.items} note={detail.sample.note} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display display-lg">What’s included</h2>
            {mockupFor[service.slug] && <div className="mt-10 max-w-md">{mockupFor[service.slug]()}</div>}
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {service.includes.map((x) => (
              <li key={x} className="flex gap-3 rounded-2xl bg-bg p-5 text-[15px]">
                <CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-0.5 shrink-0 text-crimson" />{x}
              </li>
            ))}
            <li className="flex gap-3 rounded-2xl border border-dashed border-line p-5 text-[15px] text-muted sm:col-span-2">
              Included in every plan from $497 a month.{" "}
              <Link href="/pricing" className="font-semibold text-ink underline underline-offset-4">Compare plans</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-bg section">
        <div className="wrap">
          <h2 className="display max-w-[22ch] display-lg">Especially useful for</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {fits.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group lift overflow-hidden rounded-card border border-line">
                <div className="photo-frame relative aspect-[4/3]">
                  <Image src={ind.image} alt={ind.imageAlt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold group-hover:text-crimson-ink">{ind.name}</p>
                  <p className="mt-1 text-sm text-muted">{ind.examples}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={detail.faqs} title="Common questions" />

      <CtaBanner title="Start with the workflow that costs you most." />

      <section className="bg-bg section-tight">
        <div className="wrap">
          <p className="mb-6 font-semibold">Related services</p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group lift flex items-start gap-4 rounded-2xl border border-line p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-crimson-soft text-crimson-ink"><ServiceIcon name={r.icon} size={20} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold group-hover:text-crimson-ink">{r.name}</span>
                  <span className="mt-1 block text-sm text-muted">{r.short}</span>
                </span>
                <ArrowUpRightIcon aria-hidden="true" size={16} weight="bold" className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd(detail.faqs)} />
    </>
  );
}
