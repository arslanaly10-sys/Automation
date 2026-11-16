import { HomeHero } from "@/components/home/hero";
import { Workflow } from "@/components/home/workflow";
import { IndustrySlider } from "@/components/home/industry-slider";
import { RoiCalculator } from "@/components/home/roi";
import { TextReveal } from "@/components/text-reveal";
import { CtaCalendar, Pilot, PricingTeaser, ServicesList, ToolsMarquee } from "@/components/sections";
import { Faq } from "@/components/faq";
import { faqs } from "@/lib/content";
import { JsonLd, faqLd } from "@/components/json-ld";

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
      <ServicesList />
      <Workflow />
      <IndustrySlider />
      <RoiCalculator />
      <Pilot />
      <ToolsMarquee />
      <PricingTeaser />
      <Faq items={faqs.slice(0, 5)} intro="Short, direct answers. If yours isn’t here, ask us on a call." />
      <CtaCalendar />
      <JsonLd data={faqLd(faqs.slice(0, 5))} />
    </>
  );
}
