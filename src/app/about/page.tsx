import type { Metadata } from "next";
import Image from "next/image";
import { CtaSplit, PageHero, Pilot } from "@/components/sections";
import { TextReveal } from "@/components/text-reveal";
import { CompanyDetails } from "@/components/trust";

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
        image="/images/about-office.jpg"
        imageAlt="An empty, light-filled modern office with a long table"
      />
      <section className="bg-bg py-28 md:py-40">
        <div className="wrap">
          <TextReveal
            className="display max-w-[26ch] display-xl leading-[1.14]"
            text="We started INFOTECH because good businesses kept losing customers for one simple reason: nobody got back to them in time. The work was never the problem. The follow-up was."
          />
        </div>
      </section>
      <section className="bg-surface section">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display display-lg">How we think</h2>
            <div className="photo-frame relative mt-10 aspect-[4/3] overflow-hidden rounded-card">
              <Image src="/images/about-notebook.jpg" alt="A hand writing a checklist of goals in a notebook" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
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
      <CompanyDetails />
      <CtaSplit
        image="/images/about-video-call.jpg"
        alt="A laptop on a video call with many participants, beside a mug"
        title="Working with businesses worldwide"
        body="We work remotely with service businesses across time zones. Calls are scheduled in your local time, and everything we build runs on accounts you own."
      />
    </>
  );
}
