import { PageHero } from "./sections";

export function Legal({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero title={title} intro={`Last updated ${updated}.`} />
      <section className="bg-bg py-20">
        <div className="wrap max-w-3xl">
          <p className="mb-10 rounded-2xl border border-line bg-surface p-5 text-sm text-muted">
            This is a starting template. Have it reviewed by a lawyer for the countries you operate in before launch.
          </p>
          {sections.map((s) => (
            <div key={s.h} className="mb-10">
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-3 text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
