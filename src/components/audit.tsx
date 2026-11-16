import Link from "next/link";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { audit, auditHref, type AuditContext } from "@/lib/site";

/** The one booking button. Always says what happens: a free audit. */
export function AuditButton({ ctx, className = "btn btn-primary", label = audit.cta }: { ctx?: AuditContext; className?: string; label?: string }) {
  return <Link href={auditHref(ctx)} className={className} data-cta="audit">{label}</Link>;
}

/** Reassurance shown next to booking buttons. */
/** tone: "dark" on black or photo grounds, "light" on white, "onColor" on crimson (solid white for contrast). */
export function AuditPromise({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" | "onColor" }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-1.5 text-sm ${tone === "dark" ? "text-white/75" : tone === "onColor" ? "text-white" : "text-muted"} ${className}`}>
      {audit.promise.map((p) => (
        <li key={p} className="flex items-center gap-1.5">
          <CheckIcon aria-hidden="true" size={14} weight="bold" className={tone === "onColor" ? "text-white" : "text-crimson"} />{p}
        </li>
      ))}
    </ul>
  );
}

/** A slim band used to break up long pages with a way to book. */
export function InlineAuditCta({ title, ctx }: { title: string; ctx?: AuditContext }) {
  return (
    <section className="border-y border-line bg-bg py-10">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display display-sm">{title}</p>
          <AuditPromise tone="light" className="mt-3" />
        </div>
        <AuditButton ctx={ctx} className="btn btn-primary shrink-0" />
      </div>
    </section>
  );
}
