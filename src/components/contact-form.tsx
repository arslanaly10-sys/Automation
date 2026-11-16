"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";
import { formspreeReady, openMailto, submitToFormspree } from "@/lib/formspree";
import { readAttribution } from "./attribution";

type Status = "idle" | "sending" | "sent" | "error";

const needs = ["Missed calls", "Slow follow-up", "No-shows", "Admin and paperwork", "Something else"];

const industryOptions: Record<string, string> = {
  "home-services": "Home or field services",
  "dental-medspa": "Dental, clinic or med spa",
  "real-estate": "Real estate or property",
  automotive: "Automotive",
  "consumer-services": "Salon, gym, restaurant or hospitality",
  "professional-services": "Legal, accounting or insurance",
};

/**
 * Free audit request. Quick choices first, then contact details; everything else is optional.
 * Carries context from the page the visitor came from (plan, industry, calculator figure) and where they first landed.
 * Sends to Formspree, then shows /thanks. Without a form ID it opens the visitor's email app instead.
 */
export function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";
  const from = params.get("from") ?? "";
  const loss = params.get("loss") ?? "";
  const industry = industryOptions[params.get("industry") ?? ""] ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const who = String(data.get("business") || data.get("name") || "");
    const picked = data.getAll("needs").join(", ");
    data.set("_subject", `Free audit request from ${who}${picked ? `: ${picked}` : ""}`);
    data.set("form", "Free audit request");
    if (plan) data.set("plan", plan);
    if (loss) data.set("calculator_estimate", loss);
    if (from) data.set("clicked_from", from);
    for (const [k, v] of Object.entries(readAttribution())) data.set(k, v);

    if (!formspreeReady) {
      const body = ["name", "email", "phone", "business", "industry"].map((k) => `${k}: ${data.get(k) ?? ""}`).join("\n") +
        `\nWhat's slipping: ${picked}${plan ? `\nPlan: ${plan}` : ""}${loss ? `\nCalculator estimate: ${loss} a month` : ""}\n\n${data.get("message") ?? ""}`;
      openMailto(String(data.get("_subject")), body);
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    const result = await submitToFormspree(data);
    if (result.ok) {
      track("Contact form sent", { industry: String(data.get("industry") || ""), from: from || "direct" });
      router.push("/thanks");
      return;
    }
    setError(result.error);
    setStatus("error");
  }

  const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-crimson";
  const sending = status === "sending";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[26px] border border-line bg-surface p-6 md:grid-cols-2 md:p-9">
      {(plan || loss) && (
        <p className="rounded-2xl bg-crimson-soft p-4 text-[15px] md:col-span-2">
          {plan && <>You’re asking about the <strong>{plan}</strong> plan. </>}
          {loss && <>Your calculator estimate: <strong>{loss} a month</strong> at risk. We’ll bring it to the call.</>}
        </p>
      )}
      <fieldset className="md:col-span-2">
        <legend className="text-sm">What’s slipping? <span className="text-muted">Tap any that apply.</span></legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((n) => (
            <label key={n} className="cursor-pointer">
              <input type="checkbox" name="needs" value={n} className="peer sr-only" />
              <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg px-4 text-[15px] transition-colors duration-150 peer-checked:border-crimson peer-checked:bg-crimson peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-crimson">
                {n}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm">Your name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="grid gap-2 text-sm">Work email<input name="email" type="email" required autoComplete="email" spellCheck={false} className={field} /></label>
      <label className="grid gap-2 text-sm">Phone <span className="-mt-1 text-xs text-muted">Optional, if you’d like a call back</span><input name="phone" type="tel" autoComplete="tel" className={field} /></label>
      <label className="grid gap-2 text-sm">Business name <span className="-mt-1 text-xs text-muted">Optional</span><input name="business" autoComplete="organization" className={field} /></label>
      <label className="grid gap-2 text-sm md:col-span-2">Industry
        <select name="industry" className={field} defaultValue={industry}>
          <option value="">Choose one (optional)</option>
          {Object.values(industryOptions).map((o) => <option key={o}>{o}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm md:col-span-2">Anything else we should know? <span className="-mt-1 text-xs text-muted">Optional</span>
        <textarea name="message" rows={3} placeholder="For example: we miss calls while on site, and quotes go out with no follow-up…" className={field} />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-col items-start gap-3 md:col-span-2">
        <button type="submit" className="btn btn-primary disabled:opacity-60" disabled={sending}>
          {sending ? "Sending…" : "Request my free audit"}
        </button>
        <p className={`text-sm ${status === "error" ? "text-crimson-ink" : "text-muted"}`} role="status" aria-live="polite">
          {status === "error"
            ? <>{error} Try again, or email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</>
            : status === "sent"
              ? "Your email app should have opened with your request ready to send."
              : "Takes about 30 seconds. We reply within one working day."}
        </p>
      </div>
    </form>
  );
}
