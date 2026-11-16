import { ArrowRightIcon, CheckIcon, MinusIcon } from "@phosphor-icons/react/dist/ssr";
import { exampleUsage, planComparison, plans, priceDrivers, workflowExplainer } from "@/lib/content";
import { site } from "@/lib/site";

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <><CheckIcon aria-hidden="true" size={18} weight="bold" className="mx-auto text-crimson" /><span className="sr-only">Included</span></>;
  if (v === false) return <><MinusIcon aria-hidden="true" size={18} className="mx-auto text-muted" /><span className="sr-only">Not included</span></>;
  return <span>{v}</span>;
}

export function PlanComparison() {
  return (
    <section id="compare" className="scroll-mt-24 bg-bg pb-20 md:pb-28">
      <div className="wrap">
        <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">Compare plans</h2>
        <div className="relative mt-10 overflow-x-auto rounded-[22px] border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
            <caption className="sr-only">What each plan includes</caption>
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="sticky left-0 bg-surface px-5 py-4 font-semibold">Feature</th>
                {plans.map((p) => (
                  <th key={p.name} scope="col" className={`px-5 py-4 text-center ${p.featured ? "text-crimson-ink" : ""}`}>
                    <span className="block font-semibold">{p.name}</span>
                    <span className="block text-sm font-normal text-muted">from ${p.price.toLocaleString("en-US")}/mo</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row) => (
                <tr key={row.feature} className="border-t border-line">
                  <th scope="row" className="sticky left-0 bg-bg px-5 py-4 font-normal">{row.feature}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={`px-5 py-4 text-center text-muted ${plans[i].featured ? "bg-crimson-soft/40" : ""}`}><Cell v={v} /></td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-line">
                <th scope="row" className="sticky left-0 bg-bg px-5 py-4 font-normal">One-time setup</th>
                <td colSpan={3} className="px-5 py-4 text-center text-muted">{site.terms.setup.replace(/^One-time setup from/, "From")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function WorkflowExplainer() {
  const w = workflowExplainer;
  return (
    <section id="workflows" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">What counts as a workflow?</h2>
          <p className="mt-5 text-muted">{w.definition}</p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-sm text-muted">Each of these is one workflow:</p>
          <ol className="mt-4 flex flex-col gap-3">
            {w.examples.map((ex, i) => (
              <li key={i} className="flex flex-wrap items-center gap-2 rounded-2xl bg-bg p-4 text-[15px]">
                {ex.steps.map((step, j) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1.5 ${j === 0 ? "bg-crimson text-white" : j === ex.steps.length - 1 ? "bg-ink text-bg" : "bg-surface"}`}>{step}</span>
                    {j < ex.steps.length - 1 && <ArrowRightIcon aria-hidden="true" size={14} className="text-muted" />}
                  </span>
                ))}
              </li>
            ))}
          </ol>
          <p className="mt-8 font-semibold">Included, not counted separately</p>
          <ul className="mt-3 flex flex-col gap-2">
            {w.included.map((x) => (
              <li key={x} className="flex gap-3 text-[15px]"><CheckIcon aria-hidden="true" size={18} weight="bold" className="mt-0.5 shrink-0 text-crimson" />{x}</li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-muted">{w.extra}</p>
        </div>
      </div>
    </section>
  );
}

export function PriceDrivers() {
  const growth = plans.find((p) => p.name === "Growth")!.price;
  const u = exampleUsage;
  const minutes = u.calls * u.minutesPerCall;
  const usage = minutes * u.ratePerMinute;
  const monthly = growth + usage;
  const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
  return (
    <section id="price" className="scroll-mt-24 bg-bg py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="display text-[clamp(2.1rem,4vw,3.4rem)]">What changes your price</h2>
          <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {priceDrivers.map((d) => (
              <div key={d.title}>
                <dt className="font-semibold">{d.title}</dt>
                <dd className="mt-2 text-[15px] text-muted">{d.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="self-start rounded-[26px] border border-line bg-surface p-7 md:p-9 lg:col-span-5 lg:col-start-8">
          <figcaption className="flex items-start justify-between gap-4">
            <span>
              <span className="block text-lg font-semibold">A worked example</span>
              <span className="mt-1 block text-[15px] text-muted">
                A two-van plumbing business on Growth, taking about {u.calls} calls a month that last {u.minutesPerCall} minutes on average.
              </span>
            </span>
            <span className="shrink-0 rounded-full bg-bg px-2.5 py-1 text-xs text-muted">Example</span>
          </figcaption>
          <table className="mt-6 w-full text-[15px]">
            <caption className="sr-only">Example monthly bill on the Growth plan</caption>
            <tbody>
              <tr className="border-b border-line"><th scope="row" className="py-3 text-left font-normal">Growth plan</th><td className="py-3 text-right tabular-nums">{usd(growth)}</td></tr>
              <tr className="border-b border-line">
                <th scope="row" className="py-3 text-left font-normal">Usage at cost<span className="block text-xs text-muted">{minutes.toLocaleString("en-US")} minutes at an example ${u.ratePerMinute.toFixed(2)} a minute</span></th>
                <td className="py-3 text-right tabular-nums">{usd(usage)}</td>
              </tr>
              <tr><th scope="row" className="pt-4 text-left font-semibold">Monthly total</th><td className="display pt-4 text-right text-3xl text-crimson-ink tabular-nums">{usd(monthly)}</td></tr>
            </tbody>
          </table>
          <p className="mt-6 text-[15px] text-muted">
            Plus a one-time setup fee, for example {usd(u.setup)} to connect their calendar, CRM and phone line, making the first month {usd(monthly + u.setup)}.
          </p>
          <p className="mt-4 text-xs text-muted">Illustrative figures. We confirm your usage rate and setup fee in writing after the audit.</p>
        </figure>
      </div>
    </section>
  );
}
