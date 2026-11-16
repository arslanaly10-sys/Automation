import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

/** A static card for samples that aren't conversations: a sync log or a report. */
export function LogCard({ title, items, note }: { title: string; items: { label: string; value: string }[]; note: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-bg shadow-float">
      <p className="border-b border-line px-5 py-4 text-sm font-semibold">{title}</p>
      <ul className="flex flex-col">
        {items.map((it) => (
          <li key={it.label} className="flex items-start gap-3 border-b border-line px-5 py-4 text-sm last:border-0">
            <CheckCircleIcon aria-hidden="true" size={20} weight="fill" className="mt-px shrink-0 text-crimson" />
            <span className="flex min-w-0 flex-1 flex-wrap justify-between gap-x-4 gap-y-1">
              <span className="text-muted">{it.label}</span>
              <span className="font-medium tabular-nums">{it.value}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="bg-surface px-5 py-3 text-xs text-muted">{note}</p>
    </div>
  );
}
