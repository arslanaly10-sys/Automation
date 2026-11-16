import type { Metadata } from "next";
import Image from "next/image";
import { CtaSplit, PageHero, Pilot } from "@/components/sections";
import { TextReveal } from "@/components/text-reveal";

export const metadata: Metadata = {
  title: "About",
  description: "INFOTECH is an automation studio for service businesses. We build practical AI systems that answer, book and follow up.",
};

const principles = [
  { t: "Start with the workflow, not the model", b: "We don’t sell AI for its own sake. We look for the step where customers wait, drop off or get forgotten, and fix that first." },
  { t: "Keep people in charge", b: "Automation handles the routine work. Judgement, empathy and anything sensitive stay with your team, with clear rules for when to hand over." },
  { t: "Build on what you have", b: "Your CRM, your calendar, your phone number. We connect what’s already there before we suggest anything new." },
  { t: "Report outcomes, not activity", b: "Response times, booked jobs and recovered revenue. If a workflow isn’t moving those numbers, we change it or switch it off." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="We build the systems that keep service businesses responsive."
        intro="INFOTECH is an automation studio. We design, build and run AI workflows for businesses that depend on answering customers quickly and following up properly."
        image="/images/team-workshop.jpg"
        imageAlt="A team gathered around a conference table during a workshop"
      />
      <section className="bg-bg py-28 md:py-36">
        <div className="wrap">
          <TextReveal
            className="display max-w-[26ch] text-[clamp(1.9rem,4.2vw,3.8rem)] leading-[1.14]"
            text="We started INFOTECH because good businesses kept losing customers for one simple reason: nobody got back to them in time. The work was never the problem. The follow-up was."
          />
        </div>
      </section>
      <section className="bg-surface py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">How we think</h2>
            <div className="photo-frame relative mt-10 aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image src="/images/pro-office.jpg" alt="Two colleagues celebrating with a high five at a desk" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:self-center">
            {principles.map((p) => (
              <div key={p.t}>
                <p className="text-xl font-semibold">{p.t}</p>
                <p className="mt-3 text-muted">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pilot />
      <CtaSplit
        image="/images/spa-massage.jpg"
        alt="A therapist pouring massage oil in a calm treatment room"
        title="Working with businesses worldwide"
        body="We work remotely with service businesses across time zones. Calls are scheduled in your local time, and everything we build runs on accounts you own."
      />
    </>
  );
}
