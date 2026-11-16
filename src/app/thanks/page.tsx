import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { guides } from "@/lib/guides";
import { bookingReady } from "@/lib/site";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = { title: "Request received", robots: { index: false, follow: true } };

const next = [
  { t: "Today or next working day", b: "We read your request and reply by email, or call you if you left a number, to set a time." },
  { t: "Your 30-minute audit", b: "We look at how enquiries reach you and map the first workflow worth automating." },
  { t: "Within a few days", b: "You get a written plan with costs and timings. Yours to keep, whether or not you hire us." },
];

export default function ThanksPage() {
  return (
    <>
      <PageHero title="Thanks. Your audit request is in." intro="Here’s what happens next, and something useful to read while you wait.">
        {bookingReady && (
          <Link href="/contact#pick-a-time" className="btn btn-primary"><CalendarCheckIcon aria-hidden="true" size={18} weight="bold" />Skip the wait and pick a time</Link>
        )}
      </PageHero>
      <section className="bg-bg py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <ol className="flex flex-col gap-8 lg:col-span-6">
            {next.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[40px_1fr] gap-4">
                <span className="grid size-10 place-items-center rounded-full bg-crimson text-white">{i + 1}</span>
                <div><p className="text-lg font-semibold">{s.t}</p><p className="mt-1 text-muted">{s.b}</p></div>
              </li>
            ))}
          </ol>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="font-semibold">While you wait</p>
            <ul className="mt-4 flex flex-col gap-3">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/resources/${g.slug}`} className="group lift block rounded-2xl border border-line p-5">
                    <span className="block font-semibold group-hover:text-crimson-ink">{g.title}</span>
                    <span className="mt-1 block text-sm text-muted">{g.minutes} min read</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
