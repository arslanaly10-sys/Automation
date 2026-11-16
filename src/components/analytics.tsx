"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { useEffect } from "react";

/**
 * Vercel Web Analytics (cookieless) plus conversion events:
 *  - "Booking click": any link to the booking page
 *  - "CTA click": any "Book a strategy call" button, with the page it was on
 *  - "Contact form sent": fired by the contact form on success
 * Enable Web Analytics once in Vercel: Project → Analytics → Enable.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (/calendly\.com|cal\.com/.test(href)) track("Booking click", { page: location.pathname });
      if (/book a strategy call/i.test(a.textContent ?? "")) track("CTA click", { page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <VercelAnalytics />;
}
