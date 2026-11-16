import Link from "next/link";
import { Wordmark } from "./brand";
import { industries, services } from "@/lib/content";
import { site } from "@/lib/site";
import { CompanyLine } from "./trust";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="wrap grid gap-12 pt-20 pb-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="display text-3xl leading-tight">AI automation for service businesses.</p>
          <p className="mt-4 max-w-sm text-white/65">{site.description}</p>
          <a href={`mailto:${site.email}`} className="link-draw mt-6 inline-block text-white/85">{site.email}</a>
        </div>

        <FooterCol title="Services" className="md:col-span-3 md:col-start-6">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="link-draw">{s.name.replace(" for calls, chat and text", "")}</Link>
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
          <Link href="/resources" className="link-draw">Resources</Link>
          <Link href="/ai-receptionist-vs-hiring" className="link-draw">AI vs hiring</Link>
          <Link href="/security" className="link-draw">Security</Link>
          <Link href="/contact" className="link-draw">Contact</Link>
          <Link href="/privacy" className="link-draw">Privacy</Link>
          <Link href="/terms" className="link-draw">Terms</Link>
        </FooterCol>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-white/12 py-6 text-[13px] text-white/50 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-1">
          <p>© {year} {site.name}. Serving businesses worldwide.</p>
          <CompanyLine />
        </div>
        <p>Photography from Unsplash, used under the Unsplash License. Product names and logos are trademarks of their owners.</p>
      </div>

      <div className="wrap pb-28 text-crimson lg:pb-6" aria-hidden="true">
        <Wordmark className="block h-auto w-full" title="" />
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="mb-4 text-sm text-white/60">{title}</p>
      <div className="flex flex-col items-start gap-2.5 text-[15px] text-white/85">{children}</div>
    </div>
  );
}
