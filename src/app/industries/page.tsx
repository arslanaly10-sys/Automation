import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { industries } from "@/lib/content";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI automation for home services, dental and med spas, real estate, automotive, consumer services and professional firms.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Different trades, different rules. The same goal: no missed customers."
        intro="We set up the questions, booking rules and handoffs for how your industry actually works, instead of putting one generic bot in front of every business."
      />
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className={`group lift overflow-hidden rounded-[26px] border border-line bg-surface ${i % 3 === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}>
              <div className={`photo-frame relative ${i % 3 === 0 ? "aspect-[16/10] md:aspect-auto md:min-h-[380px]" : "aspect-[16/10]"}`}>
                <Image src={ind.image} alt={ind.imageAlt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-8 md:p-10">
                <p className="text-sm text-muted">{ind.examples}</p>
                <h2 className="display mt-3 text-[clamp(1.8rem,2.8vw,2.5rem)]">{ind.name}</h2>
                <p className="mt-3 text-muted">{ind.headline}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold">
                  See workflows <ArrowUpRightIcon aria-hidden="true" size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner title="Don’t see your industry?" body="If customers contact you and your team follows up by hand, the same building blocks apply. Tell us how your business works." />
    </>
  );
}
