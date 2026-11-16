import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { caseStudies, industries } from "@/lib/content";
import { CtaBanner, PageHero } from "@/components/sections";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return cs ? { title: `${cs.client}: case study`, description: cs.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const ind = industries.find((i) => i.slug === cs.industry);

  return (
    <>
      <PageHero title={cs.client} intro={cs.summary} image={cs.image} imageAlt={cs.imageAlt}>
        <p className="text-sm text-white/70">
          {ind && <Link href={`/industries/${ind.slug}`} className="link-draw">{ind.name}</Link>}
          {ind && cs.timeline ? ". " : ""}{cs.timeline}
        </p>
      </PageHero>

      <section className="bg-bg py-20 md:py-28">
        <div className="wrap">
          <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">The numbers</h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="rounded-[22px] bg-surface p-7">
                <dt className="text-muted">{r.label}</dt>
                <dd className="mt-3 flex items-baseline gap-3">
                  <span className="text-lg text-muted line-through">{r.before}</span>
                  <span className="display text-5xl text-crimson-ink">{r.after}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-[clamp(2rem,3.4vw,2.8rem)]">The problem</h2>
            <p className="measure mt-5 text-lg text-muted">{cs.challenge}</p>
          </div>
          <div>
            <h2 className="display text-[clamp(2rem,3.4vw,2.8rem)]">What we built</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {cs.solution.map((s) => (
                <li key={s} className="flex gap-3"><CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-1 shrink-0 text-crimson" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {cs.quote && (
        <section className="bg-bg py-20 md:py-28">
          <figure className="wrap max-w-4xl">
            <blockquote className="display text-[clamp(1.8rem,3.4vw,3rem)] leading-tight">“{cs.quote.text}”</blockquote>
            <figcaption className="mt-6 text-muted">{cs.quote.name}, {cs.quote.role}</figcaption>
          </figure>
        </section>
      )}

      <CtaBanner title="Want results like these?" />
    </>
  );
}
