import { PlusIcon } from "@phosphor-icons/react/dist/ssr";

export function Faq({ items, title = "Questions we get asked", intro }: { items: { q: string; a: string }[]; title?: string; intro?: string }) {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-[clamp(2.2rem,4.2vw,3.4rem)]">{title}</h2>
          {intro && <p className="mt-5 text-muted">{intro}</p>}
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {items.map((f) => (
            <details key={f.q} className="group border-t border-line py-6 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon size={20} className="shrink-0 text-crimson transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="measure mt-4 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
