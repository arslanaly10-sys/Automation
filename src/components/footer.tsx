import Link from "next/link";
import { Wordmark } from "./brand";
import { industries, services } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="wrap grid gap-12 pt-20 pb-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="display text-4xl leading-tight md:text-5xl">Ready when you are.</p>
          <p className="mt-4 max-w-sm text-white/65">
            Tell us which part of your customer journey takes the most time. We’ll show you what it would look like automated.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Book a strategy call</Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost text-white">Email us</a>
          </div>
        </div>

        <FooterCol title="Services" className="md:col-span-3 md:col-start-6">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services#${s.slug}`} className="link-draw">{s.name.replace(" for calls, chat and text", "")}</Link>
          ))}
        </FooterCol>
        <FooterCol title="Industries" className="md:col-span-2">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="link-draw">{i.short}</Link>
          ))}
        </FooterCol>
        <FooterCol title="Company" className="md:col-span-2">
          <Link href="/about" className="link-draw">About</Link>
          <Link href="/pricing" className="link-draw">Pricing</Link>
          <Link href="/contact" className="link-draw">Contact</Link>
          <Link href="/privacy" className="link-draw">Privacy</Link>
          <Link href="/terms" className="link-draw">Terms</Link>
        </FooterCol>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-white/12 py-6 text-[13px] text-white/50 sm:flex-row sm:justify-between">
        <p>© {year} {site.name}. Serving businesses worldwide.</p>
        <p>Photography from Unsplash, used under the Unsplash License.</p>
      </div>

      <div className="wrap pb-6 text-crimson" aria-hidden="true">
        <Wordmark className="block h-auto w-full" title="" />
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="mb-4 text-sm text-white/45">{title}</p>
      <div className="flex flex-col items-start gap-2.5 text-[15px] text-white/85">{children}</div>
    </div>
  );
}
