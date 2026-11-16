import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { HomeHero } from "@/components/home/hero";
import { Workflow } from "@/components/home/workflow";
import { IndustrySlider } from "@/components/home/industry-slider";
import { RoiCalculator } from "@/components/home/roi";
import { TextReveal } from "@/components/text-reveal";
import { CtaCalendar, Pilot, PricingTeaser, ServicesList } from "@/components/sections";
import { CaseStudyTeaser, DemoSection } from "@/components/trust";
import { guides } from "@/lib/guides";
import { InlineAuditCta } from "@/components/audit";

const beforeYouDecide = [
  { href: "/ai-receptionist-vs-hiring", label: "AI receptionist vs hiring" },
  { href: "/security", label: "How we handle your data" },
  { href: `/resources/${guides[0].slug}`, label: guides[0].title },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="bg-bg py-28 md:py-40">
        <div className="wrap">
          <TextReveal
            className="display max-w-[24ch] text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.12]"
            text="Most businesses don’t have a lead problem. They have a response problem. The call comes in at 7:40 pm, goes to voicemail, and by morning the customer has booked someone else."
          />
        </div>
      </section>
      <DemoSection />
      <ServicesList />
      <Workflow />
      <InlineAuditCta title="See what this would look like for your business." ctx={{ from: "home-workflow" }} />
      <IndustrySlider />
      <InlineAuditCta title="Your industry, your rules. We’ll map your first workflow." ctx={{ from: "home-industries" }} />
      <RoiCalculator />
      <CaseStudyTeaser />
      <Pilot />
      <PricingTeaser />
      <section className="border-t border-line bg-bg py-12">
        <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">Before you decide</p>
          <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
            {beforeYouDecide.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group inline-flex items-center gap-2 text-[15px]">
                  <span className="link-draw">{l.label}</span>
                  <ArrowUpRightIcon aria-hidden="true" size={14} weight="bold" className="text-crimson transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/resources" className="link-draw text-sm text-muted">All resources and FAQs</Link>
        </div>
      </section>
      <CtaCalendar />
    </>
  );
}
