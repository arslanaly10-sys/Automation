"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** A large statement whose words light up one by one as it scrolls through the viewport. */
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
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 78%",
      end: "bottom 45%",
      onUpdate: (self) => {
        const n = Math.round(self.progress * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < n));
      },
    });
    return () => st.kill();
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
