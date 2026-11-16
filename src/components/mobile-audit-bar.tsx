"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { audit, auditHref } from "@/lib/site";

/** Phones only: a booking bar that slides up once the hero is out of view. Hidden where booking already is. */
export function MobileAuditBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const hidden = pathname.startsWith("/contact") || pathname.startsWith("/thanks");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (hidden) return null;
  return (
    <div
      data-mobile-audit-bar=""
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-snug text-muted">
          <span className="block text-sm font-semibold text-ink">Free 30-minute audit</span>
          No sales pitch
        </p>
        <Link href={auditHref({ from: "mobile-bar" })} tabIndex={show ? 0 : -1} className="btn btn-primary min-h-11 shrink-0 px-5" data-cta="audit">
          {audit.cta}
        </Link>
      </div>
    </div>
  );
}
