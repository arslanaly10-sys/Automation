import Image from "next/image";
import Link from "next/link";
import { ChatPlayer } from "@/components/chat";
import { AuditButton, AuditPromise } from "@/components/audit";

const script = [
  { from: "customer" as const, text: "Hi, our air conditioning just stopped and the house is getting really hot." },
  { from: "ai" as const, text: "Sorry, that’s a rough evening. Has the unit shut off completely, or is it running without cooling?" },
  { from: "customer" as const, text: "Completely off. Nothing." },
  { from: "ai" as const, text: "Thanks. The first technician slot is tomorrow at 8:30 am. Shall I book it for 14 Elm Street?" },
  { from: "customer" as const, text: "Yes please." },
  { from: "ai" as const, text: "Done. You’ll get a confirmation text now, and Marcus will message when he’s on his way." },
];

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-electrician.jpg"
        alt="An electrician in a hard hat working on a wall-mounted electrical panel"
        fill
        priority
        quality={55}
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.62)_48%,rgba(0,0,0,.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="wrap grid items-end gap-12 pt-32 pb-14 lg:grid-cols-12 lg:pb-20">
        <div className="lg:col-span-7">
          <h1 className="display text-[clamp(2.75rem,6.4vw,5.6rem)]">
            Your team is on the job. Your front office never goes quiet.
          </h1>
          <p className="msg-in mt-7 max-w-[52ch] text-lg text-white/78 md:text-xl" style={{ animationDelay: "180ms" }}>
            INFOTECH builds AI systems that answer calls and messages, book appointments and follow up with every lead. They connect to the tools your business already runs on.
          </p>
          <div className="msg-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "280ms" }}>
            <AuditButton ctx={{ from: "hero" }} />
            <Link href="#how-it-works" className="btn btn-ghost text-white">See how it works</Link>
          </div>
          <AuditPromise className="msg-in mt-6" />
          <p className="msg-in mt-6 text-sm text-white/60" style={{ animationDelay: "380ms" }}>
            Live in 30 days, or your setup fee back. Plans from $497 a month.
          </p>
        </div>

        <div className="msg-in lg:col-span-5 lg:col-start-8" style={{ animationDelay: "500ms" }}>
          <p className="mb-3 text-sm text-white/60">Example: how an after-hours call is handled</p>
          <ChatPlayer messages={script} outcome="Booked: AC repair, tomorrow 8:30 am. Added to CRM." />
        </div>
      </div>
    </section>
  );
}
