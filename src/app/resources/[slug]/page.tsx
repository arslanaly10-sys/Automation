import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon, InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";
import { CtaBanner, PageHero } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { GuideTools } from "@/components/guide-tools";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  return g ? { title: g.title, description: g.description, alternates: { canonical: `/resources/${g.slug}` }, openGraph: { type: "article" } } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) notFound();
  const headings = g.blocks.filter((b): b is Extract<typeof b, { type: "h2" }> => b.type === "h2");
  const others = guides.filter((x) => x.slug !== g.slug);
  const date = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(g.updated));

  return (
    <>
      <PageHero title={g.title} intro={g.description}>
        <p className="text-sm text-white/60">
          <Link href="/resources" className="link-draw">Resources</Link>
          <span aria-hidden="true" className="px-2">/</span>
          {g.minutes} min read, updated {date}
        </p>
      </PageHero>
      <article className="bg-bg py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <nav aria-label="In this guide" className="no-print lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm text-muted">In this guide</p>
              <ol className="flex flex-col gap-2 text-[15px]">
                {headings.map((h) => <li key={h.id}><a href={`#${h.id}`} className="link-draw">{h.text}</a></li>)}
              </ol>
            </div>
          </nav>
          <div className="measure text-[17px] leading-relaxed lg:col-span-8 lg:col-start-5">
            {g.blocks.map((b, i) => {
              switch (b.type) {
                case "h2":
                  return <h2 key={i} id={b.id} className="display mt-14 scroll-mt-28 text-[clamp(1.7rem,2.6vw,2.3rem)] first:mt-0">{b.text}</h2>;
                case "p":
                  return <p key={i} className="mt-5 text-muted">{b.text}</p>;
                case "list":
                  return (
                    <ul key={i} className="mt-5 flex flex-col gap-3">
                      {b.items.map((it) => <li key={it} className="flex gap-3 text-muted"><CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-1.5 shrink-0 text-crimson" /><span>{it}</span></li>)}
                    </ul>
                  );
                case "steps":
                  return (
                    <ol key={i} className="mt-6 flex flex-col gap-5">
                      {b.items.map((it, n) => (
                        <li key={it.title} className="grid grid-cols-[36px_1fr] gap-4">
                          <span className="grid size-9 place-items-center rounded-full bg-crimson-soft text-sm font-semibold text-crimson-ink">{n + 1}</span>
                          <div><p className="font-semibold">{it.title}</p><p className="mt-1 text-muted">{it.text}</p></div>
                        </li>
                      ))}
                    </ol>
                  );
                case "note":
                  return <p key={i} className="mt-6 flex gap-3 rounded-2xl border border-line bg-surface p-5 text-[15px] text-muted"><InfoIcon aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-crimson" /><span>{b.text}</span></p>;
              }
            })}
            <GuideTools title={g.title} />
          </div>
        </div>
      </article>
      <section className="bg-surface py-16">
        <div className="wrap">
          <p className="mb-6 font-semibold">More guides</p>
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/resources/${o.slug}`} className="group lift rounded-2xl bg-bg p-6">
                <p className="text-lg font-semibold group-hover:text-crimson-ink">{o.title}</p>
                <p className="mt-2 text-sm text-muted">{o.minutes} min read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Want this set up for you?" body="On a 30-minute call we’ll look at how calls and enquiries reach you today and show you what the first automated workflow would look like." />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: g.title,
        description: g.description,
        dateModified: g.updated,
        datePublished: g.updated,
        author: { "@type": "Organization", name: site.name, url: site.siteUrl },
        publisher: { "@id": `${site.siteUrl}/#org` },
        mainEntityOfPage: `${site.siteUrl}/resources/${g.slug}`,
      }} />
    </>
  );
}
