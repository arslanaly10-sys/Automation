import { PageHero } from "./sections";

export type LegalSection = { id: string; h: string; p?: string; list?: string[]; after?: string };

export function Legal({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero title={title} intro={`${intro} Last updated ${updated}.`} />
      <section className="bg-bg py-20">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm text-muted">On this page</p>
              <ol className="flex flex-col gap-2 text-[15px]">
                {sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="link-draw">{s.h}</a></li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="max-w-3xl lg:col-span-8 lg:col-start-5">
            <p className="mb-10 rounded-2xl border border-line bg-surface p-5 text-sm text-muted">
              Draft prepared for review. Have a lawyer check it for the countries you operate in before relying on it.
            </p>
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="mb-10 scroll-mt-28">
                <h2 className="text-xl font-semibold">{s.h}</h2>
                {s.p && <p className="mt-3 text-muted">{s.p}</p>}
                {s.list && (
                  <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-muted marker:text-crimson">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {s.after && <p className="mt-3 text-muted">{s.after}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
