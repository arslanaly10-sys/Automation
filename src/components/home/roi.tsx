"use client";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";
import { formspreeReady, openMailto, submitToFormspree } from "@/lib/formspree";

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
        <div className="lg:col-span-5 lg:row-start-1">
          <h2 className="display text-[clamp(2.2rem,4.2vw,3.6rem)]">What are unanswered enquiries costing you?</h2>
          <p className="measure mt-5 text-muted">
            Move the sliders to match your business. This is an estimate from your own numbers, not a promise, but it’s usually the number that starts the conversation.
          </p>
        </div>

        <div className="rounded-[28px] border border-line bg-surface p-6 md:p-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <div className="grid gap-8">
            <Slider label="Calls and messages that go unanswered each week" value={missed} min={1} max={80} onChange={setMissed} display={`${missed}`} />
            <Slider label="Share that would have booked if someone replied quickly" value={rate} min={5} max={80} onChange={setRate} display={`${rate}%`} />
            <Slider label="Average value of a job or booking" value={value} min={25} max={5000} step={25} onChange={setValue} display={fmt(value)} />
            <label className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted">Currency</span>
              <select value={cur} onChange={(e) => setCur(e.target.value)} className="rounded-full border border-line bg-bg px-4 py-2 text-ink">
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

        <EstimateCapture
          className="lg:col-span-5 lg:row-start-2 lg:self-end"
          inputs={{ missed, rate, value: fmt(value), currency: cur }}
          results={{ monthly: fmt(monthly), yearly: fmt(yearly), jobs: Math.round(monthlyJobs) }}
        />
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

type Status = "idle" | "sending" | "sent" | "error";

/** Lets a visitor ask for their estimate by email. Sends the numbers to Formspree (or opens email while no form ID is set). */
function EstimateCapture({ className, inputs, results }: {
  className: string;
  inputs: { missed: number; rate: number; value: string; currency: string };
  results: { monthly: string; yearly: string; jobs: number };
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");
  const id = useId();

  const summary = [
    `Unanswered calls and messages per week: ${inputs.missed}`,
    `Share that would have booked: ${inputs.rate}%`,
    `Average job value: ${inputs.value} (${inputs.currency})`,
    `Revenue at risk per month: ${results.monthly}`,
    `Revenue at risk per year: ${results.yearly}`,
    `Jobs per month: about ${results.jobs}`,
  ].join("\n");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email"));
    track("Estimate requested", { currency: inputs.currency });

    if (!formspreeReady) {
      openMailto("Please send me my revenue estimate", `Hi, please send me this estimate and a breakdown.\n\n${summary}\n\nBusiness: ${data.get("business") || ""}`);
      setSentTo(email);
      setStatus("sent");
      return;
    }

    data.set("_subject", `Revenue estimate request: ${results.monthly} a month at risk`);
    data.set("form", "Revenue calculator");
    data.set("estimate", summary);
    setStatus("sending");
    const result = await submitToFormspree(data);
    if (result.ok) {
      setSentTo(email);
      form.reset();
      setStatus("sent");
    } else {
      setError(result.error);
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-crimson";

  if (status === "sent") {
    return (
      <div className={`rounded-[22px] border border-line p-6 ${className}`} role="status">
        <p className="text-lg font-semibold">{formspreeReady ? "Thanks, your estimate is on its way." : "Your email app should have opened."}</p>
        <p className="mt-2 text-[15px] text-muted">
          {formspreeReady
            ? `We’ll email a copy and a short breakdown to ${sentTo} within one working day.`
            : `Send the message it prepared and we’ll reply with your breakdown, or write to ${site.email}.`}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold underline underline-offset-4">
          Request another estimate
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-[22px] border border-line p-6 ${className}`} aria-labelledby={`${id}-title`}>
      <p id={`${id}-title`} className="text-lg font-semibold">Get this estimate by email</p>
      <p className="mt-2 text-[15px] text-muted">We’ll send a copy with a short breakdown of where the missed revenue comes from.</p>
      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5 text-sm">
          Work email
          <input name="email" type="email" required autoComplete="email" spellCheck={false} placeholder="you@business.com" className={field} />
        </label>
        <label className="grid gap-1.5 text-sm">
          Business name <span className="sr-only">(optional)</span>
          <input name="business" autoComplete="organization" placeholder="Optional" className={field} />
        </label>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button type="submit" disabled={status === "sending"} className="btn btn-ink mt-1 disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Email me this estimate"}
        </button>
      </div>
      <p className={`mt-3 text-xs ${status === "error" ? "text-crimson-ink" : "text-muted"}`} aria-live="polite">
        {status === "error"
          ? `${error} Try again, or email ${site.email}.`
          : "We use your email only to send this estimate and follow up once. No newsletter."}
      </p>
    </form>
  );
}
