import type { Metadata } from "next";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { hiringComparison } from "@/lib/content";
import { CostCompare } from "@/components/cost-compare";
import { CtaSplit, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI receptionist vs hiring a receptionist",
  description: "Compare an AI receptionist with hiring a receptionist or using an answering service: cover, what each can do, and monthly cost from your own numbers.",
};

export default function HiringComparisonPage() {
  const c = hiringComparison;
  return (
    <>
      <PageHero
        title="AI receptionist, answering service or a new hire?"
        intro="An honest comparison of the three ways to make sure every call gets answered: what each does well, where each falls short, and what each would cost you."
        image="/images/compare-phone-desk.jpg"
        imageAlt="A man on a phone call while a colleague works on a laptop beside him"
      />
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap">
          <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">What each option does</h2>
          <div className="relative mt-10 overflow-x-auto rounded-[22px] border border-line">
            <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
              <caption className="sr-only">Comparison of a receptionist, an answering service and an AI receptionist</caption>
              <thead>
                <tr className="bg-surface">
                  <th scope="col" className="sticky left-0 bg-surface px-5 py-4" ><span className="sr-only">Compared on</span></th>
                  <th scope="col" className="px-5 py-4 font-semibold">Hiring a receptionist</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Answering service</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-crimson-ink">AI receptionist</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} className="border-t border-line">
                    <th scope="row" className="sticky left-0 bg-bg px-5 py-4 font-medium">{r.label}</th>
                    <td className="px-5 py-4 text-muted">{r.person}</td>
                    <td className="px-5 py-4 text-muted">{r.service}</td>
                    <td className="bg-crimson-soft/40 px-5 py-4">{r.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="wrap">
          <h2 className="display max-w-[22ch] text-[clamp(2.1rem,4vw,3.4rem)]">What would each cost you?</h2>
          <p className="measure mt-4 text-muted">Put in your own figures. Everything recalculates as you type.</p>
          <div className="mt-10"><CostCompare /></div>
        </div>
      </section>
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)] lg:col-span-5">When hiring a person is the better choice</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="flex flex-col gap-4">
              {c.personBetter.map((x) => (
                <li key={x} className="flex gap-3 text-[17px]"><CheckIcon aria-hidden="true" size={20} weight="bold" className="mt-1 shrink-0 text-crimson" />{x}</li>
              ))}
            </ul>
            <p className="mt-8 text-muted">
              Many businesses use both: a person for the conversations that need one, and an AI receptionist for out-of-hours calls, busy periods and the follow-up nobody has time for. If that’s you, we’ll tell you on the call.
            </p>
          </div>
        </div>
      </section>
      <CtaSplit
        image="/images/compare-counter.jpg"
        alt="A smiling staff member serving a customer at a shop counter"
        title="Work out the right mix for your business"
        body="On a 30-minute call we’ll look at your call volumes and hours, and tell you honestly whether an AI receptionist, a person or both makes sense."
      />
    </>
  );
}
