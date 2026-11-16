"use client";
import { useEffect } from "react";

const KEY = "infotech-attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

/** Remembers where a visitor first came from (for this browser tab), so enquiries can be traced to an ad or page. */
export function CaptureAttribution() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      const url = new URL(window.location.href);
      const data: Record<string, string> = { landing_page: url.pathname, referrer: document.referrer || "direct" };
      for (const p of PARAMS) {
        const v = url.searchParams.get(p);
        if (v) data[p] = v;
      }
      sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      /* storage blocked: attribution is optional */
    }
  }, []);
  return null;
}

export function readAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
