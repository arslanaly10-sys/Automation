import type { Metadata } from "next";
import { CalendarCheckIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { bookingReady, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a 30-minute strategy call or send us a message about the workflow you want to automate.",
};

const next = [
  { t: "We listen", b: "You walk us through how enquiries reach you today and where they get stuck." },
  { t: "We map one workflow", b: "Together we sketch what the automated version would look like, step by step." },
  { t: "You get a straight answer", b: "Whether it’s worth doing, what it would cost, and how long it would take. No hard sell." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="What would you like your team to stop doing by hand?"
        intro={bookingReady ? "Book a 30-minute strategy call, or send a message and we’ll reply within one working day." : "Send a message about the workflow you want to automate and we’ll reply within one working day."}
      >
        <div className="flex flex-wrap gap-3">
          {bookingReady && <a href={site.bookingUrl} target="_blank" rel="noopener" className="btn btn-primary"><CalendarCheckIcon aria-hidden="true" size={18} weight="bold" />Book a strategy call</a>}
          <a href={`mailto:${site.email}`} className="btn btn-ghost text-white"><EnvelopeSimpleIcon aria-hidden="true" size={18} />{site.email}</a>
        </div>
      </PageHero>
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2rem,3.4vw,2.8rem)]">What happens on the call</h2>
            <ol className="mt-8 flex flex-col gap-7">
              {next.map((n, i) => (
                <li key={n.t} className="grid grid-cols-[36px_1fr] gap-4">
                  <span className="grid size-9 place-items-center rounded-full bg-crimson-soft font-semibold text-crimson-ink">{i + 1}</span>
                  <div><p className="font-semibold">{n.t}</p><p className="mt-1 text-[15px] text-muted">{n.b}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
