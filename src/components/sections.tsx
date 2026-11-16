import Image from "next/image";
import Link from "next/link";
import { CalendarCheckIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { commitments, pilot, plans, services, tools } from "@/lib/content";
import { bookHref, bookingReady, site } from "@/lib/site";
import { ServiceIcon } from "./icons";
import { Mark } from "./brand";
import { GuaranteeBand } from "./trust";
import { ToolChip } from "./tool-logo";

/* ---------- Page hero used on inner pages ---------- */
export function PageHero({ title, intro, image, imageAlt, children }: {
  title: string; intro?: string; image?: string; imageAlt?: string; children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {image && (
        <>
          <Image src={image} alt={imageAlt ?? ""} fill priority quality={55} sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.9)_0%,rgba(0,0,0,.65)_55%,rgba(0,0,0,.35)_100%)]" />
        </>
      )}
      <div className={`wrap pt-40 pb-20 ${image ? "md:pt-48 md:pb-28" : "md:pt-44"}`}>
        <h1 className="display max-w-[20ch] text-[clamp(2.6rem,5.6vw,4.8rem)]">{title}</h1>
        {intro && <p className="msg-in mt-6 max-w-[58ch] text-lg text-white/75" style={{ animationDelay: "120ms" }}>{intro}</p>}
        {children && <div className="msg-in mt-9" style={{ animationDelay: "220ms" }}>{children}</div>}
      </div>
    </section>
  );
}

/* ---------- Services list (home) ---------- */
export function ServicesList() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)]">What we automate</h2>
            <p className="mt-5 text-muted">Eight services that cover the routine work between a customer’s first message and a finished job. Most clients start with one or two.</p>
            <div className="photo-frame relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[22px] lg:block">
              <Image src="/images/front-desk-pos.jpg" alt="A customer paying at a front-desk card terminal" fill sizes="33vw" className="object-cover" />
            </div>
          </div>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {services.map((s) => (
            <li key={s.slug} className="border-t border-line last:border-b">
              <Link href={`/services/${s.slug}`} className="group grid grid-cols-[44px_1fr] gap-5 py-7">
                <span className="grid size-11 place-items-center rounded-full bg-crimson-soft text-crimson-ink transition-transform duration-200 group-hover:-translate-y-0.5">
                  <ServiceIcon aria-hidden="true" name={s.icon} />
                </span>
                <span>
                  <span className="block text-xl font-semibold group-hover:text-crimson-ink">{s.name}</span>
                  <span className="mt-1.5 block text-muted">{s.short}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Pilot timeline + commitments ---------- */
export function Pilot() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)] md:col-span-6">What your first month looks like</h2>
          <p className="text-muted md:col-span-5 md:col-start-8 md:self-end">
            We’re a new studio, so instead of logos we’ll show you exactly how we work. Every engagement starts with one workflow, done properly.
          </p>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-4">
          {pilot.map((p) => (
            <li key={p.title} className="bg-bg p-7">
              <p className="text-sm text-crimson-ink">{p.when}</p>
              <p className="mt-3 text-xl font-semibold">{p.title}</p>
              <p className="mt-3 text-[15px] text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div key={c.title}>
              <Mark className="h-5 w-auto text-crimson" strokeWidth={4} />
              <p className="mt-4 font-semibold">{c.title}</p>
              <p className="mt-2 text-[15px] text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tools marquee ---------- */
export function ToolsMarquee() {
  const row = [...tools, ...tools];
  return (
    <section className="border-y border-line bg-bg py-10">
      <div className="wrap mb-6 flex flex-col justify-between gap-2 md:flex-row">
        <p className="font-semibold">Tools we can connect to</p>
        <p className="text-sm text-muted">If your software has an API or a booking link, we can usually work with it. We confirm what connects during the audit.</p>
      </div>
      <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex w-max gap-3">
          {row.map((t, i) => (
            <li key={i} aria-hidden={i >= tools.length}>
              <ToolChip name={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Pricing cards ---------- */
export function PlanCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`relative flex flex-col rounded-[26px] border p-8 ${p.featured ? "border-crimson bg-black text-white" : "border-line bg-bg"}`}
        >
          {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-crimson px-3 py-1 text-xs font-semibold text-white">Recommended</span>}
          <p className="text-lg font-semibold">{p.name}</p>
          <p className={`mt-2 text-[15px] ${p.featured ? "text-white/65" : "text-muted"}`}>{p.for}</p>
          <p className="mt-8 flex items-baseline gap-2">
            <span className={`text-sm ${p.featured ? "text-white/65" : "text-muted"}`}>From</span>
            <span className="display text-6xl tabular-nums">${p.price.toLocaleString("en-US")}</span>
            <span className={`text-sm ${p.featured ? "text-white/65" : "text-muted"}`}>/ month</span>
          </p>
          <ul className="mt-8 flex flex-1 flex-col gap-3 text-[15px]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3"><CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-1 shrink-0 text-crimson" />{f}</li>
            ))}
          </ul>
          <Link href="/contact" className={`btn mt-10 ${p.featured ? "btn-primary" : "btn-ink"}`}>Book a strategy call</Link>
        </div>
      ))}
    </div>
  );
}

export function PricingTeaser() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display max-w-[16ch] text-[clamp(2.2rem,4.2vw,3.6rem)]">Simple monthly plans</h2>
          <p className="max-w-[44ch] text-muted">{site.terms.setup} <Link href="/pricing" className="font-semibold text-ink underline underline-offset-4">Full pricing details</Link></p>
        </div>
        <PlanCards />
        <GuaranteeBand className="mt-8" />
      </div>
    </section>
  );
}

/* ---------- CTA styles ---------- */

/** Dark card with a week of open slots. */
export function CtaCalendar({ title = "Book a 30-minute strategy call", body = "We’ll map one workflow live on the call and tell you honestly whether automation is worth it for you. If it isn’t, we’ll say so." }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = [[1, 3], [0, 2, 4], [1], [0, 3, 4], [2]];
  const times = ["9:00", "10:30", "1:00", "2:30", "4:00"];
  return (
    <section className="bg-bg py-24">
      <div className="wrap">
        <div className="grid items-center gap-12 overflow-hidden rounded-[30px] bg-black p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)]">{title}</h2>
            <p className="mt-5 max-w-[46ch] text-white/70">{body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={bookHref} {...(bookingReady ? { target: "_blank", rel: "noopener" } : {})} className="btn btn-primary"><CalendarCheckIcon aria-hidden="true" size={18} weight="bold" />Pick a time</a>
              <Link href="/contact" className="btn btn-ghost text-white">Send a message instead</Link>
            </div>
          </div>
          <a href={bookHref} {...(bookingReady ? { target: "_blank", rel: "noopener" } : {})} className="lift grid grid-cols-5 gap-2 rounded-[22px] border border-white/12 bg-white/[.04] p-5" aria-hidden="true" tabIndex={-1}>
            {days.map((d, di) => (
              <div key={d} className="flex flex-col gap-2">
                <p className="pb-1 text-center text-xs text-white/55">{d}</p>
                {times.map((t, ti) => {
                  const open = slots[di].includes(ti);
                  return (
                    <span key={t} className={`rounded-lg py-2 text-center text-xs tabular-nums ${open ? "bg-crimson text-white" : "bg-white/[.05] text-white/55"}`}>{t}</span>
                  );
                })}
              </div>
            ))}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Full-width crimson banner with the diamond lattice. */
export function CtaBanner({ title = "Find the first workflow worth automating.", body = "Tell us what your team repeats, misses or never quite gets round to. We’ll come back with a practical starting point." }) {
  return (
    <section className="diamond-pattern relative overflow-hidden bg-crimson text-white">
      <Mark className="pointer-events-none absolute -right-20 top-1/2 h-[140%] w-auto -translate-y-1/2 text-white/10" strokeWidth={1.2} />
      <div className="wrap relative grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <h2 className="display text-[clamp(2.4rem,4.6vw,4rem)] md:col-span-7">{title}</h2>
        <div className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="text-white/85">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-light">Book a strategy call</Link>
            <Link href="/pricing" className="btn btn-ghost text-white">See pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Photo beside a short pitch. */
export function CtaSplit({ image, alt, title, body }: { image: string; alt: string; title: string; body: string }) {
  return (
    <section className="bg-bg py-24">
      <div className="wrap grid items-stretch overflow-hidden rounded-[30px] border border-line md:grid-cols-2">
        <div className="relative min-h-[280px]">
          <Image src={image} alt={alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-surface p-8 md:p-14">
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">{title}</h2>
          <p className="mt-4 text-muted">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Book a strategy call</Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
