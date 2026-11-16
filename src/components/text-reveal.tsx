"use client";
import { useEffect, useRef } from "react";

/**
 * A large statement whose words light up one by one as it scrolls through the viewport.
 * Plain scroll listener (no GSAP): lighting starts when the top reaches 78% of the viewport
 * and finishes when the bottom reaches 45%.
 */
export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLSpanElement>(".reveal-word"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("on"));
      return;
    }
    let lit = -1;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const start = window.innerHeight * 0.78;
      const end = window.innerHeight * 0.45;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (r.height + start - end)));
      const n = Math.round(progress * words.length);
      if (n === lit) return;
      lit = n;
      words.forEach((w, i) => w.classList.toggle("on", i < n));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((w, i) => (
          <span key={i} className="reveal-word">{w} </span>
        ))}
      </span>
    </p>
  );
}
