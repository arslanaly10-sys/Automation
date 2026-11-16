"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowCounterClockwiseIcon, CalendarCheckIcon, ChatCircleTextIcon, PhoneIncomingIcon } from "@phosphor-icons/react";

export type Msg = { from: "customer" | "ai"; text: string };

/** A scripted conversation that plays once, message by message, with typing indicators. */
export function ChatPlayer({
  messages,
  outcome,
  header = "Incoming call",
  meta = "9:12 pm",
  caption,
  autoplay = true,
  tone = "dark",
}: {
  messages: Msg[];
  outcome: string;
  header?: string;
  meta?: string;
  caption?: string;
  autoplay?: boolean;
  tone?: "dark" | "light";
}) {
  const [shown, setShown] = useState(autoplay ? 0 : messages.length);
  const [typing, setTyping] = useState(false);
  const [run, setRun] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const done = shown >= messages.length;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(messages.length);
      return;
    }
    let cancelled = false;
    const timers: number[] = [];
    let t = 900;
    setShown(0);
    messages.forEach((m, i) => {
      const typeFor = m.from === "ai" ? 1100 : 700;
      timers.push(window.setTimeout(() => !cancelled && setTyping(true), t));
      t += typeFor;
      timers.push(window.setTimeout(() => { if (!cancelled) { setTyping(false); setShown(i + 1); } }, t));
      t += 650;
    });
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [autoplay, visible, messages, run]);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  const dark = tone === "dark";
  const nextFrom = messages[shown]?.from;

  return (
    <div
      ref={root}
      className={`overflow-hidden rounded-[22px] border shadow-[0_30px_80px_-20px_rgba(0,0,0,.55)] ${
        dark ? "border-white/12 bg-[#0d0d10]/90 text-white backdrop-blur-xl" : "border-line bg-bg text-ink"
      }`}
    >
      <div className={`flex items-center justify-between gap-3 border-b px-5 py-4 ${dark ? "border-white/10" : "border-line"}`}>
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-crimson text-white">
            {/call/i.test(header) ? <PhoneIncomingIcon aria-hidden="true" size={18} weight="fill" /> : <ChatCircleTextIcon aria-hidden="true" size={18} weight="fill" />}
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{header}</p>
            <p className={`text-xs ${dark ? "text-white/55" : "text-muted"}`}>{caption ?? `${meta}, answered by your AI receptionist`}</p>
          </div>
        </div>
        {autoplay && done && (
          <button
            onClick={() => setRun((r) => r + 1)}
            className={`grid size-8 place-items-center rounded-full ${dark ? "hover:bg-white/10" : "hover:bg-surface"}`}
            aria-label="Replay conversation"
          >
            <ArrowCounterClockwiseIcon aria-hidden="true" size={16} />
          </button>
        )}
      </div>

      <div ref={ref} className="flex h-[300px] flex-col gap-2.5 overflow-y-auto px-5 py-5 text-[14px] leading-snug" aria-live="polite">
        {messages.slice(0, shown).map((m, i) => (
          <p
            key={`${run}-${i}`}
            className={`msg-in max-w-[85%] rounded-2xl px-4 py-2.5 ${
              m.from === "ai"
                ? "self-end rounded-br-md bg-crimson text-white"
                : dark ? "self-start rounded-bl-md bg-white/10" : "self-start rounded-bl-md bg-surface"
            }`}
          >
            {m.text}
          </p>
        ))}
        {typing && (
          <p className={`typing flex gap-1 rounded-2xl px-4 py-3 ${nextFrom === "ai" ? "self-end bg-crimson/80" : dark ? "self-start bg-white/10" : "self-start bg-surface"}`} aria-label="Typing">
            <span className="size-1.5 rounded-full bg-current" /><span className="size-1.5 rounded-full bg-current" /><span className="size-1.5 rounded-full bg-current" />
          </p>
        )}
      </div>

      <div
        className={`flex items-center gap-3 border-t px-5 py-4 text-sm transition-opacity duration-300 ${dark ? "border-white/10" : "border-line"} ${done ? "opacity-100" : "opacity-0"}`}
      >
        <CalendarCheckIcon aria-hidden="true" size={20} weight="duotone" className="shrink-0 text-crimson" />
        <span>{outcome}</span>
      </div>
    </div>
  );
}
