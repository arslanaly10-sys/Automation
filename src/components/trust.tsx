import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, PhoneCallIcon, SealCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { caseStudies, industries } from "@/lib/content";
import { companyReady, demoReady, guaranteeReady, trust } from "@/lib/site";

/* Every section here renders nothing until its settings in site.ts / content.ts are filled in. */

/** "Hear it for yourself": a number to call and/or a recording with its transcript. */
export function DemoSection() {
  if (!demoReady) return null;
  const { phone, recording, transcript } = trust.demo;
  return (
    <section className="bg-black section text-white">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display display-lg">Hear it for yourself</h2>
          <p className="mt-5 max-w-[46ch] text-white/70">
            {phone
              ? "Call our own AI receptionist. Ask it to book an appointment, ask about pricing, or try to catch it out. It’s set up the same way we set one up for you."
              : "A real booking call handled by an AI receptionist we built, start to finish."}
          </p>
          {phone && (
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="btn btn-primary mt-9">
              <PhoneCallIcon aria-hidden="true" size={18} weight="bold" />Call {phone}
            </a>
          )}
        </div>
        {recording && (
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-card border border-white/12 bg-white/[.04] p-6">
              <p className="mb-4 text-sm text-white/60">Recording of a real call</p>
              <audio controls preload="none" src={recording} className="w-full">
                Your browser can’t play this recording. <a href={recording}>Download it</a>.
              </audio>
              {transcript.length > 0 && (
                <details className="group mt-5 border-t border-white/10 pt-4">
                  <summary className="cursor-pointer text-sm font-semibold">Read the transcript</summary>
                  <dl className="mt-4 grid gap-3 text-[15px]">
                    {transcript.map((line, i) => (
                      <div key={i} className="grid grid-cols-[120px_1fr] gap-3">
                        <dt className={line.speaker === "Caller" ? "text-white/60" : "text-crimson-ink"}>{line.speaker}</dt>
                        <dd className="text-white/85">{line.text}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** A plain risk-reversal promise with its exact terms. */
export function GuaranteeBand({ className = "" }: { className?: string }) {
  if (!guaranteeReady) return null;
  return (
    <div className={`flex flex-col gap-5 rounded-panel border-2 border-crimson p-7 md:flex-row md:items-center md:gap-8 md:p-9 ${className}`}>
      <SealCheckIcon aria-hidden="true" size={52} weight="duotone" className="shrink-0 text-crimson" />
      <div>
        <p className="display display-sm">{trust.guarantee.title}</p>
        <p className="mt-2 max-w-[70ch] text-muted">{trust.guarantee.body}</p>
      </div>
    </div>
  );
}

/** One-line legal identity for the footer. */
export function CompanyLine() {
  if (!companyReady) return null;
  const c = trust.company;
  return <p>{[c.legalName, c.registration, [c.address, c.country].filter(Boolean).join(", ")].filter(Boolean).join(". ")}.</p>;
}

/** Fuller company details block for the About page. */
export function CompanyDetails() {
  if (!companyReady) return null;
  const c = trust.company;
  const rows = [["Registered name", c.legalName], ["Registration", c.registration], ["Address", c.address], ["Country", c.country]].filter(([, v]) => v);
  return (
    <section className="bg-bg section-tight">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <h2 className="display display-md lg:col-span-4">Who you’re working with</h2>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {rows.map(([k, v]) => (
            <div key={k} className="border-t border-line pt-4">
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="mt-1 text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Homepage teaser for the latest case study. */
export function CaseStudyTeaser() {
  const cs = caseStudies[0];
  if (!cs) return null;
  const ind = industries.find((i) => i.slug === cs.industry);
  return (
    <section className="bg-surface section">
      <div className="wrap">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="display max-w-[20ch] display-lg">Results from a real project</h2>
          {caseStudies.length > 1 && <Link href="/case-studies" className="link-draw font-semibold">All case studies</Link>}
        </div>
        <Link href={`/case-studies/${cs.slug}`} className="group grid overflow-hidden rounded-panel border border-line bg-bg lg:grid-cols-2">
          <div className="photo-frame relative min-h-[280px]">
            <Image src={cs.image} alt={cs.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col p-8 md:p-12">
            <p className="text-sm text-muted">{ind?.name ?? ""}{ind && cs.timeline ? ". " : ""}{cs.timeline}</p>
            <p className="display mt-3 display-md">{cs.client}</p>
            <p className="mt-3 text-muted">{cs.summary}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {cs.results.slice(0, 2).map((r) => (
                <div key={r.label} className="rounded-2xl bg-surface p-5">
                  <dt className="text-sm text-muted">{r.label}</dt>
                  <dd className="mt-1"><span className="text-muted line-through">{r.before}</span> <span className="display text-3xl text-crimson-ink">{r.after}</span></dd>
                </div>
              ))}
            </dl>
            <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold">
              Read the case study <ArrowUpRightIcon aria-hidden="true" size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
