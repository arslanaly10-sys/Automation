"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

type WithLenis = Window & { __lenis?: Lenis };

/** Smooth scrolling, loaded after the page is interactive so it never delays first paint or input. */
function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Lenis only smooths wheel scrolling; touch devices scroll natively, so they skip the download.
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    let lenis: Lenis | null = null;
    let cancelled = false;
    const start = () =>
      import("lenis").then(({ default: L }) => {
        if (cancelled) return;
        lenis = new L({ lerp: 0.1, wheelMultiplier: 1, autoRaf: true });
        (window as WithLenis).__lenis = lenis;
      });
    // Safari has no requestIdleCallback; fall back to a short timeout.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const handle = hasIdle ? window.requestIdleCallback(start, { timeout: 2000 }) : globalThis.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      if (hasIdle) window.cancelIdleCallback(handle as number);
      else globalThis.clearTimeout(handle);
      lenis?.destroy();
      delete (window as WithLenis).__lenis;
    };
  }, []);
  useEffect(() => {
    (window as WithLenis).__lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}
