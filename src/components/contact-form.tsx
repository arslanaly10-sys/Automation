"use client";
import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Sends enquiries to Formspree (https://formspree.io/f/<formspreeId>).
 * If no form ID is configured, it falls back to opening the visitor's email app.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const business = String(data.get("business") || data.get("name") || "");
    data.set("_subject", `Workflow enquiry from ${business}`);

    if (!site.formspreeId) {
      const body = ["name", "business", "industry", "country"].map((k) => `${k}: ${data.get(k) ?? ""}`).join("\n") + `\n\n${data.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(data.get("_subject")))}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      const json = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
      setError(json?.errors?.map((x) => x.message).join(" ") || "The message didn’t go through.");
      setStatus("error");
    } catch {
      setError("We couldn’t reach the server. Check your connection.");
      setStatus("error");
    }
  }

  if (status === "sent" && site.formspreeId) {
    return (
      <div className="rounded-[26px] border border-line bg-surface p-8 md:p-12" role="status">
        <p className="display text-4xl">Thanks, we’ve got it.</p>
        <p className="mt-4 text-muted">We’ll reply within one working day. If it’s urgent, book a time directly.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.bookingUrl} target="_blank" rel="noopener" className="btn btn-primary">Book a strategy call</a>
          <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>Send another message</button>
        </div>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-crimson";
  const sending = status === "sending";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[26px] border border-line bg-surface p-6 md:grid-cols-2 md:p-9">
      <label className="grid gap-2 text-sm">Your name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="grid gap-2 text-sm">Work email<input name="email" type="email" required autoComplete="email" spellCheck={false} className={field} /></label>
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
      {/* Spam trap: humans never see or fill this */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-col items-start gap-3 md:col-span-2">
        <button type="submit" className="btn btn-primary disabled:opacity-60" disabled={sending}>
          {sending ? "Sending…" : "Send enquiry"}
        </button>
        <p className={`text-sm ${status === "error" ? "text-crimson-ink" : "text-muted"}`} role="status" aria-live="polite">
          {status === "error"
            ? <>{error} Try again, or email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</>
            : status === "sent"
              ? "Your email app should have opened with your message ready to send."
              : "We reply within one working day."}
        </p>
      </div>
    </form>
  );
}
