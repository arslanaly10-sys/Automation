"use client";
import { useId, useMemo, useState } from "react";
import { plans } from "@/lib/content";

/** Side-by-side monthly cost from the visitor's own numbers. Every default is an editable example. */
export function CostCompare() {
  const growth = plans.find((p) => p.name === "Growth")!.price;
  const [salary, setSalary] = useState(3200);
  const [overhead, setOverhead] = useState(25);
  const [calls, setCalls] = useState(300);
  const [minutes, setMinutes] = useState(3);
  const [perMinute, setPerMinute] = useState(1.5);
  const [aiUsage, setAiUsage] = useState(0.15);

  const r = useMemo(() => {
    const person = salary * (1 + overhead / 100);
    const totalMin = calls * minutes;
    const service = totalMin * perMinute;
    const ai = growth + totalMin * aiUsage;
    return { person, service, ai, totalMin };
  }, [salary, overhead, calls, minutes, perMinute, aiUsage, growth]);
  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
  const max = Math.max(r.person, r.service, r.ai);

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="grid gap-6 rounded-[26px] border border-line bg-surface p-6 md:p-8 lg:col-span-6">
        <p className="font-semibold">Your numbers</p>
        <Num label="Receptionist salary per month" value={salary} onChange={setSalary} prefix="$" step={100} />
        <Num label="Extra cost of employing them (tax, benefits, cover), %" value={overhead} onChange={setOverhead} suffix="%" />
        <Num label="Calls per month" value={calls} onChange={setCalls} />
        <Num label="Average call length, minutes" value={minutes} onChange={setMinutes} step={0.5} />
        <Num label="Answering service price per minute" value={perMinute} onChange={setPerMinute} prefix="$" step={0.05} />
        <Num label="AI usage cost per minute (phone and AI, billed at cost)" value={aiUsage} onChange={setAiUsage} prefix="$" step={0.01} />
        <p className="text-xs text-muted">
          The starting values are examples, not quotes. Replace them with your own. We confirm your real usage rate during the audit.
        </p>
      </div>
      <div className="lg:col-span-6" aria-live="polite">
        <p className="font-semibold">Estimated monthly cost</p>
        <dl className="mt-6 flex flex-col gap-6">
          {[
            ["Hiring a receptionist", r.person, "About 40 hours a week of cover"],
            ["Answering service", r.service, `${r.totalMin.toLocaleString("en-US")} minutes a month`],
            [`AI receptionist (Growth plan)`, r.ai, `$${growth} plan plus usage, 24/7 cover`],
          ].map(([label, value, note], i) => (
            <div key={label as string}>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[15px]">{label}</dt>
                <dd className={`display text-3xl tabular-nums ${i === 2 ? "text-crimson-ink" : ""}`}>{fmt(value as number)}</dd>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-2" aria-hidden="true">
                <div className={`h-full rounded-full ${i === 2 ? "bg-crimson" : "bg-muted"}`} style={{ width: `${Math.max(3, ((value as number) / max) * 100)}%` }} />
              </div>
              <p className="mt-1.5 text-xs text-muted">{note}</p>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-muted">One-time setup of $500 to $2,000 applies to the AI receptionist. Hiring has its own one-off costs: recruiting, training and equipment.</p>
      </div>
    </div>
  );
}

function Num({ label, value, onChange, prefix, suffix, step = 1 }: {
  label: string; value: number; onChange: (n: number) => void; prefix?: string; suffix?: string; step?: number;
}) {
  const id = useId();
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm">{label}</label>
      <div className="flex items-center rounded-xl border border-line bg-bg focus-within:border-crimson">
        {prefix && <span className="pl-4 text-muted">{prefix}</span>}
        <input
          id={id} type="number" inputMode="decimal" min={0} step={step} value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-3 py-3 text-ink tabular-nums outline-none"
        />
        {suffix && <span className="pr-4 text-muted">{suffix}</span>}
      </div>
    </div>
  );
}
