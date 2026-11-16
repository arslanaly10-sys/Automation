"use client";
import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Opens the visitor's email app with the enquiry filled in.
 * To receive submissions directly, point the form at Formspree, Resend or your CRM's form endpoint.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Business: ${f.get("business")}`,
      `Industry: ${f.get("industry")}`,
      `Country: ${f.get("country")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Workflow enquiry from ${f.get("business") || f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none focus:border-crimson";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[26px] border border-line bg-surface p-6 md:grid-cols-2 md:p-9">
      <label className="grid gap-2 text-sm">Your name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="grid gap-2 text-sm">Work email<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="grid gap-2 text-sm">Business name<input name="business" autoComplete="organization" className={field} /></label>
      <label className="grid gap-2 text-sm">Country<input name="country" autoComplete="country-name" className={field} /></label>
      <label className="grid gap-2 text-sm md:col-span-2">Industry
        <select name="industry" className={field} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Home or field services</option><option>Dental, clinic or med spa</option><option>Real estate or property</option>
          <option>Automotive</option><option>Salon, gym, restaurant or hospitality</option><option>Legal, accounting or insurance</option><option>Something else</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm md:col-span-2">What would you like your team to stop doing by hand?
        <textarea name="message" rows={5} required placeholder="For example: we miss calls while on site, quotes go out and nobody follows up…" className={field} />
      </label>
      <div className="flex flex-col items-start gap-3 md:col-span-2">
        <button type="submit" className="btn btn-primary">Send enquiry</button>
        <p className="text-sm text-muted" role="status">
          {sent ? "Your email app should have opened with your message ready to send." : "We reply within one working day."}
        </p>
      </div>
    </form>
  );
}
