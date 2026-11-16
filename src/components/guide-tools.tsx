"use client";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { FilePdfIcon } from "@phosphor-icons/react";
import { formspreeReady, openMailto, submitToFormspree } from "@/lib/formspree";

/** Keeps readers who aren't ready to talk: save the guide as a PDF, or hear about the next one. */
export function GuideTools({ title }: { title: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("_subject", `Guide updates sign-up (from “${title}”)`);
    data.set("form", "Guide updates");
    data.set("guide", title);
    track("Guide sign-up", { guide: title });
    if (!formspreeReady) {
      openMailto("Please send me new guides", `Please add me to new guide emails.\n\nEmail: ${data.get("email")}\nFound you through: ${title}`);
      setStatus("sent");
      return;
    }
    setStatus("sending");
    const r = await submitToFormspree(data);
    if (r.ok) setStatus("sent");
    else { setError(r.error); setStatus("error"); }
  }

  return (
    <aside className="no-print mt-14 grid gap-6 rounded-[22px] border border-line bg-surface p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
      <button type="button" onClick={() => { track("Guide saved as PDF", { guide: title }); window.print(); }} className="btn btn-ghost justify-self-start">
        <FilePdfIcon aria-hidden="true" size={18} />Save as PDF
      </button>
      {status === "sent" ? (
        <p role="status" className="text-[15px]">Thanks. We’ll email you when the next guide is out, and nothing else.</p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="grid flex-1 gap-1.5 text-sm">
            Get the next guide by email
            <input name="email" type="email" required autoComplete="email" spellCheck={false} placeholder="you@business.com"
              className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink outline-none focus:border-crimson" />
          </label>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button type="submit" disabled={status === "sending"} className="btn btn-ink disabled:opacity-60">{status === "sending" ? "Sending…" : "Send me new guides"}</button>
          {status === "error" && <p role="status" className="text-sm text-crimson-ink sm:basis-full">{error}</p>}
        </form>
      )}
    </aside>
  );
}
