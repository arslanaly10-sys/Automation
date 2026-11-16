import type { Metadata } from "next";
import { Suspense } from "react";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { AuditPromise } from "@/components/audit";
import { bookingReady, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get your free audit",
  description: "A free 30-minute audit of how enquiries reach you, followed by a written plan. No sales pitch.",
};

const steps = [
  { t: "We listen", b: "You walk us through how calls, forms and messages reach you today, and where they get stuck." },
  { t: "We map one workflow", b: "Together we sketch what the automated version would look like, step by step." },
  { t: "You get a written plan", b: "What’s worth automating, what it would cost and how long it would take. Yours to keep, whether or not you hire us." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get your free audit"
        image="/images/contact-phone.jpg"
        imageAlt="A classic black telephone on a dark blue wall"
        intro={bookingReady
          ? "Pick a time for a 30-minute call below, or send a request and we’ll reply within one working day."
          : "Tell us what’s slipping and we’ll set up a 30-minute call within one working day."}
      >
        <AuditPromise />
      </PageHero>

      {bookingReady && (
        <section className="bg-bg pt-16 md:pt-20" aria-labelledby="pick-a-time">
          <div className="wrap">
            <h2 id="pick-a-time" className="display text-[clamp(2rem,3.4vw,2.8rem)]">Pick a time</h2>
            <iframe
              title="Book your free audit"
              src={`${site.bookingUrl}?hide_gdpr_banner=1&primary_color=cb3a51`}
              className="mt-8 h-[720px] w-full rounded-[22px] border border-line bg-bg"
              loading="lazy"
            />
            <p className="mt-6 text-muted">Prefer to send a request instead? Use the form below.</p>
          </div>
        </section>
      )}

      <section className="bg-bg py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:order-2 lg:col-start-6">
            <Suspense fallback={<div className="h-[640px] rounded-[26px] border border-line bg-surface" />}>
              <ContactForm />
            </Suspense>
          </div>
          <div className="lg:order-1 lg:col-span-4">
            <h2 className="display text-[clamp(2rem,3.4vw,2.8rem)]">What happens on the call</h2>
            <ol className="mt-8 flex flex-col gap-7">
              {steps.map((n, i) => (
                <li key={n.t} className="grid grid-cols-[36px_1fr] gap-4">
                  <span className="grid size-9 place-items-center rounded-full bg-crimson-soft font-semibold text-crimson-ink">{i + 1}</span>
                  <div><p className="font-semibold">{n.t}</p><p className="mt-1 text-[15px] text-muted">{n.b}</p></div>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex items-center gap-2 text-[15px] text-muted">
              <EnvelopeSimpleIcon aria-hidden="true" size={18} />Prefer email? <a href={`mailto:${site.email}`} className="font-semibold text-ink underline underline-offset-4">{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
