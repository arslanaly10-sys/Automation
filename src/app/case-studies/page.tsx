import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, industries } from "@/lib/content";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = { title: "Case studies", description: "Real automation projects and what changed for the business." };

export default function CaseStudiesPage() {
  if (!caseStudies.length) notFound();
  return (
    <>
      <PageHero title="What changed for real businesses" intro="Each project started with one workflow. Here is what it was, what we built and what the numbers did." />
      <section className="bg-bg section-tight">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group lift overflow-hidden rounded-panel border border-line">
              <div className="photo-frame relative aspect-[16/10]">
                <Image src={cs.image} alt={cs.imageAlt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm text-muted">{industries.find((i) => i.slug === cs.industry)?.name}</p>
                <h2 className="display mt-2 text-3xl group-hover:text-crimson-ink">{cs.client}</h2>
                <p className="mt-3 text-muted">{cs.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
