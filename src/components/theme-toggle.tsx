"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`grid size-11 place-items-center rounded-full border border-current/25 transition-transform duration-150 active:scale-95 ${className}`}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (dark ? <SunIcon aria-hidden="true" size={18} weight="bold" /> : <MoonIcon aria-hidden="true" size={18} weight="bold" />) : <span className="size-[18px]" />}
    </button>
  );
}
