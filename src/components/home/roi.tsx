"use client";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

const currencies = [
  { code: "USD", symbol: "$" }, { code: "GBP", symbol: "£" }, { code: "EUR", symbol: "€" },
  { code: "CAD", symbol: "$" }, { code: "AUD", symbol: "$" }, { code: "AED", symbol: "AED " },
];

/** Lost-revenue estimate from the visitor's own numbers. */
export function RoiCalculator() {
  const [missed, setMissed] = useState(12);
  const [rate, setRate] = useState(30);
  const [value, setValue] = useState(450);
  const [cur, setCur] = useState("USD");
  const symbol = currencies.find((c) => c.code === cur)!.symbol;

  const { monthlyJobs, monthly, yearly } = useMemo(() => {
    const monthlyJobs = missed * 4.33 * (rate / 100);
    const monthly = monthlyJobs * value;
    return { monthlyJobs, monthly, yearly: monthly * 12 };
  }, [missed, rate, value]);

  const fmt = (n: number) => symbol + Math.round(n).toLocaleString("en-US");

  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)]">What are unanswered enquiries costing you?</h2>
          <p className="measure mt-5 text-muted">
            Move the sliders to match your business. This is an estimate from your own numbers, not a promise, but it’s usually the number that starts the conversation.
          </p>
        </div>

        <div className="rounded-[28px] border border-line bg-surface p-6 md:p-10 lg:col-span-7">
          <div className="grid gap-8">
            <Slider label="Calls and messages that go unanswered each week" value={missed} min={1} max={80} onChange={setMissed} display={`${missed}`} />
            <Slider label="Share that would have booked if someone replied quickly" value={rate} min={5} max={80} onChange={setRate} display={`${rate}%`} />
            <Slider label="Average value of a job or booking" value={value} min={25} max={5000} step={25} onChange={setValue} display={fmt(value)} />
            <label className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted">Currency</span>
              <select value={cur} onChange={(e) => setCur(e.target.value)} className="rounded-full border border-line bg-bg px-4 py-2">
                {currencies.map((c) => <option key={c.code} value={c.code}>{c.code}</option>)}
              </select>
            </label>
          </div>

          <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2" aria-live="polite">
            <div>
              <p className="text-sm text-muted">Revenue at risk each month</p>
              <p className="display mt-1 text-5xl text-crimson-ink tabular-nums md:text-6xl">{fmt(monthly)}</p>
            </div>
            <div>
              <p className="text-sm text-muted">Over a year</p>
              <p className="display mt-1 text-5xl tabular-nums md:text-6xl">{fmt(yearly)}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            That’s about {Math.round(monthlyJobs)} jobs a month. Our Growth plan is $997 a month.{" "}
            <Link href="/contact" className="font-semibold text-ink underline underline-offset-4">Walk through your numbers with us</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step = 1, onChange, display }: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (n: number) => void; display: string;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15px]">{label}</label>
        <span className="shrink-0 font-semibold tabular-nums">{display}</span>
      </div>
      <input
        id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-[var(--crimson)]"
        style={{ background: `linear-gradient(to right, var(--crimson) ${pct}%, var(--surface-2) ${pct}%)` }}
      />
    </div>
  );
}
