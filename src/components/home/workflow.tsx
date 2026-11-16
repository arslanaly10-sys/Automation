"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircleIcon, ChatCircleTextIcon, EnvelopeSimpleIcon, PhoneXIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { steps } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** "How it works": pinned on desktop, the four steps advance with scroll while the logo's chevrons close in on the diamond. */
export function Workflow() {
  const section = useRef<HTMLElement>(null);
  const left = useRef<SVGPathElement>(null);
  const right = useRef<SVGPathElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: `+=${steps.length * 75}%`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          setActive(Math.min(steps.length - 1, Math.floor(self.progress * steps.length)));
          const x = self.progress * 14;
          gsap.set(left.current, { x });
          gsap.set(right.current, { x: -x });
        },
      });
      return () => st.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
    <section ref={section} id="how-it-works" className="relative overflow-hidden bg-surface lg:h-screen">
      <div className="wrap grid h-full items-center gap-14 py-24 lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)]">From first hello to finished job, without anything slipping.</h2>
          <ol className="mt-10 hidden flex-col gap-1 lg:flex">
            {steps.map((s, i) => (
              <li key={s.title} className={`border-l-2 py-3 pl-5 transition-[border-color,color] duration-200 ${i === active ? "border-crimson text-ink" : "border-line text-muted"}`}>
                <p className="text-sm text-muted">Step {i + 1}</p>
                <p className={`text-lg ${i === active ? "font-semibold" : "font-medium"}`}>{s.title}</p>
                <p className={`mt-1 max-w-[46ch] text-muted ${i === active ? "block" : "hidden"}`}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: one device, four states */}
        <div className="relative hidden h-[560px] items-center justify-center lg:col-span-6 lg:col-start-7 lg:flex">
          <svg viewBox="0 0 100 60" className="absolute inset-0 m-auto w-full text-crimson/18" aria-hidden="true" fill="none" stroke="currentColor">
            <path ref={left} d="M21 4 L4 30 L21 56" strokeWidth={6} />
            <path ref={right} d="M79 4 L96 30 L79 56" strokeWidth={6} />
            <path d="M50 6 L74 30 L50 54 L26 30 Z" strokeWidth={0.6} />
            <path d="M50 17 L63 30 L50 43 L37 30 Z" strokeWidth={0.6} />
          </svg>
          <div className="relative w-[340px]">
            {steps.map((s, i) => (
              <div key={s.ui} className={`transition-opacity duration-300 ${i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`} aria-hidden={i !== active}>
                <StepUI kind={s.ui} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile and reduced motion: stacked */}
        <ol className="flex flex-col gap-14 lg:hidden">
          {steps.map((s, i) => (
            <li key={s.title}>
              <p className="text-sm text-muted">Step {i + 1}</p>
              <p className="mt-1 text-xl font-semibold">{s.title}</p>
              <p className="mt-2 text-muted">{s.body}</p>
              <div className="mt-6 max-w-[360px]"><StepUI kind={s.ui} /></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[22px] border border-line bg-bg p-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,.35)]">
      <p className="mb-4 text-sm font-semibold">{title}</p>
      {children}
    </div>
  );
}

function StepUI({ kind }: { kind: (typeof steps)[number]["ui"] }) {
  if (kind === "inbound")
    return (
      <Card title="New enquiries">
        {[
          { icon: <PhoneXIcon aria-hidden="true" size={18} />, t: "Missed call", d: "9:12 pm", r: "Text-back sent in 8 s" },
          { icon: <ChatCircleTextIcon aria-hidden="true" size={18} />, t: "Web form: quote request", d: "12:40 pm", r: "Replied in 41 s" },
          { icon: <WhatsappLogoIcon aria-hidden="true" size={18} />, t: "“Do you work Sundays?”", d: "Sun 10:05", r: "Answered instantly" },
        ].map((x) => (
          <div key={x.t} className="flex items-start gap-3 border-t border-line py-3 first:border-0 first:pt-0">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-crimson-soft text-crimson-ink">{x.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="flex justify-between gap-2 text-sm font-medium"><span className="truncate">{x.t}</span><span className="text-muted">{x.d}</span></p>
              <p className="text-xs text-crimson-ink">{x.r}</p>
            </div>
          </div>
        ))}
      </Card>
    );
  if (kind === "qualify")
    return (
      <Card title="Enquiry summary">
        <dl className="grid grid-cols-[96px_1fr] gap-y-2.5 text-sm">
          <dt className="text-muted">Name</dt><dd>Dana Okafor</dd>
          <dt className="text-muted">Needs</dt><dd>AC not cooling, unit off</dd>
          <dt className="text-muted">Address</dt><dd>14 Elm Street</dd>
          <dt className="text-muted">Urgency</dt><dd><span className="rounded-full bg-crimson px-2 py-0.5 text-xs text-white">High</span></dd>
          <dt className="text-muted">Source</dt><dd>Phone, after hours</dd>
        </dl>
        <p className="mt-4 rounded-xl bg-surface px-3 py-2.5 text-xs text-muted">Handoff rule: complaints or gas smells go straight to the on-call manager.</p>
      </Card>
    );
  if (kind === "booked")
    return (
      <Card title="Thursday">
        <div className="flex flex-col gap-1.5 text-sm">
          {["7:30", "8:30", "10:00", "11:30", "1:00"].map((t) => (
            <div key={t} className="grid grid-cols-[48px_1fr] items-center gap-3">
              <span className="text-xs text-muted">{t}</span>
              {t === "8:30" ? (
                <div className="rounded-lg bg-crimson px-3 py-2.5 text-white">
                  <p className="font-medium">AC repair, Dana Okafor</p>
                  <p className="text-xs text-white">Marcus, van 2, 90 min</p>
                </div>
              ) : t === "11:30" ? (
                <div className="rounded-lg bg-surface px-3 py-2.5"><p className="text-muted">Boiler service</p></div>
              ) : (
                <div className="h-9 rounded-lg border border-dashed border-line" />
              )}
            </div>
          ))}
        </div>
      </Card>
    );
  return (
    <Card title="After the booking">
      <ul className="flex flex-col gap-3 text-sm">
        {[
          ["Confirmation text sent", true],
          ["Reminder at 7:30 am", true],
          ["“On my way” text from Marcus", true],
          ["Review request after the job", false],
          ["CRM updated, job marked won", false],
        ].map(([t, d]) => (
          <li key={t as string} className="flex items-center gap-3">
            <CheckCircleIcon aria-hidden="true" size={20} weight={d ? "fill" : "regular"} className={d ? "text-crimson" : "text-muted"} />
            <span className={d ? "" : "text-muted"}>{t as string}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 text-xs text-muted"><EnvelopeSimpleIcon aria-hidden="true" size={14} /> Weekly summary goes to the owner every Monday.</p>
    </Card>
  );
}
