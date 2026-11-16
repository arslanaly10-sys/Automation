import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { industries } from "@/lib/content";
import { ChatPlayer } from "@/components/chat";
import { CtaSplit, PageHero } from "@/components/sections";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return { title: `AI automation for ${ind.name.toLowerCase()}`, description: ind.intro, openGraph: { images: [ind.image] } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  const others = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={ind.headline} intro={ind.intro} image={ind.image} imageAlt={ind.imageAlt}>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">Book a strategy call</Link>
          <Link href="#workflows" className="btn btn-ghost text-white">See the workflows</Link>
        </div>
        <p className="mt-6 text-sm text-white/60">{ind.examples}</p>
      </PageHero>

      <section className="bg-bg py-24 md:py-32">
        <div className="wrap">
          <h2 className="display max-w-[22ch] text-[clamp(2.1rem,4vw,3.4rem)]">Where the time and money go</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {ind.problems.map((p) => (
              <div key={p.title} className="border-t-2 border-crimson pt-6">
                <p className="text-xl font-semibold">{p.title}</p>
                <p className="mt-3 text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="scroll-mt-20 bg-surface py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">What we set up for you</h2>
            <ol className="mt-10 flex flex-col">
              {ind.workflows.map((w) => (
                <li key={w.title} className="border-t border-line py-6 first:border-0 first:pt-0">
                  <p className="text-lg font-semibold">{w.title}</p>
                  <p className="mt-2 text-muted">{w.body}</p>
                </li>
              ))}
            </ol>
            {ind.note && (
              <p className="mt-6 flex gap-3 rounded-2xl border border-line bg-bg p-5 text-[15px] text-muted">
                <InfoIcon size={20} className="mt-0.5 shrink-0 text-crimson" />{ind.note}
              </p>
            )}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-sm text-muted">An example conversation</p>
              <ChatPlayer messages={ind.conversation} outcome={ind.outcome} header="New message" meta="Website chat" autoplay tone="light" />
            </div>
          </div>
        </div>
      </section>

      <CtaSplit
        image={ind.secondImage}
        alt={ind.secondAlt}
        title="Start with the workflow that costs you most"
        body="On a 30-minute call we’ll map how enquiries reach you today and show you what the first automated workflow would look like."
      />

      <section className="bg-bg pb-24">
        <div className="wrap">
          <p className="mb-6 font-semibold">Other industries</p>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="group lift flex items-center gap-4 rounded-2xl border border-line p-3">
                <div className="photo-frame relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={o.image} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <p className="font-semibold group-hover:text-crimson-ink">{o.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
