"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Wordmark } from "./brand";
import { ThemeToggle } from "./theme-toggle";
import { audit, auditHref, nav as baseNav, site } from "@/lib/site";
import { caseStudies } from "@/lib/content";

const nav = caseStudies.length ? [...baseNav, { href: "/case-studies", label: "Case studies" }] : baseNav;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Every page opens on a dark hero, so the bar starts light-on-dark and turns solid on scroll.
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        solid ? "border-b border-line bg-bg/85 text-ink backdrop-blur-xl" : "border-b border-transparent text-white"
      }`}
    >
      <div className="wrap flex h-18 items-center justify-between gap-6">
        <Link href="/" className="text-crimson" aria-label={`${site.name} home`}>
          <Wordmark className="h-[18px] w-auto md:h-5" />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-draw py-1 ${pathname.startsWith(item.href) ? "bg-[length:100%_1px]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={auditHref({ from: "header" })} className="btn btn-primary hidden sm:inline-flex" data-cta="audit">
            {audit.cta}
          </Link>
          <Link href={auditHref({ from: "header" })} className="btn btn-primary min-h-11 px-4 sm:hidden" data-cta="audit">
            {audit.ctaShort}
          </Link>
          <button
            className="grid size-11 place-items-center rounded-full border border-current/25 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XIcon aria-hidden="true" size={20} weight="bold" /> : <ListIcon aria-hidden="true" size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto overscroll-contain bg-black text-white lg:hidden"
      >
        <nav className="wrap flex h-full flex-col gap-2 pt-8 pb-10" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((item) => (
            <Link key={item.href} href={item.href} className="display border-b border-white/10 py-4 text-4xl">
              {item.label}
            </Link>
          ))}
          <Link href={auditHref({ from: "menu" })} className="btn btn-primary mt-auto w-full" data-cta="audit">
            {audit.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
