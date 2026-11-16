import {
  ChatCircleTextIcon, EnvelopeSimpleIcon, FacebookLogoIcon, PhoneIcon, WarningCircleIcon, WhatsappLogoIcon, WaveformIcon,
} from "@phosphor-icons/react/dist/ssr";

/* Coded mockups of what a client sees. Every figure and name here is an illustration and is labelled "Example". */

/** Cards in a row get a defined edge; a single card shown on its own (floating) gets soft elevation instead. */
function Frame({ title, children, className = "", floating = false }: { title: string; children: React.ReactNode; className?: string; floating?: boolean }) {
  return (
    <figure className={`overflow-hidden rounded-card bg-bg ${floating ? "shadow-float ring-1 ring-line" : "border border-line shadow-card"} ${className}`}>
      <figcaption className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <span className="text-sm font-semibold">{title}</span>
        <span className="rounded-full bg-surface px-2.5 py-1 text-xs text-muted">Example</span>
      </figcaption>
      {children}
    </figure>
  );
}

const status = {
  booked: "bg-crimson text-white",
  follow: "bg-surface-3 text-ink",
  answered: "bg-surface text-muted",
  person: "border border-crimson text-crimson-ink",
};

const channelIcon = {
  phone: <PhoneIcon aria-hidden="true" size={14} />,
  web: <ChatCircleTextIcon aria-hidden="true" size={14} />,
  whatsapp: <WhatsappLogoIcon aria-hidden="true" size={14} />,
  facebook: <FacebookLogoIcon aria-hidden="true" size={14} />,
};

export function EnquiryInbox({ className = "", floating = false }: { className?: string; floating?: boolean }) {
  const rows: { name: string; channel: keyof typeof channelIcon; source: string; summary: string; state: keyof typeof status; label: string; time: string }[] = [
    { name: "Dana Okafor", channel: "phone", source: "Phone, after hours", summary: "AC not cooling, unit off", state: "booked", label: "Booked Thu 8:30", time: "9:12 pm" },
    { name: "Priya Shah", channel: "phone", source: "Phone", summary: "Unhappy with last visit", state: "person", label: "Needs a person", time: "8:47 am" },
    { name: "Liam Chen", channel: "web", source: "Website form", summary: "Quote for a bathroom refit", state: "follow", label: "Follow-up, day 2", time: "12:40 pm" },
    { name: "Sofia Martins", channel: "whatsapp", source: "WhatsApp", summary: "Asked about Sunday hours", state: "answered", label: "Answered", time: "10:05 am" },
    { name: "Tom Reed", channel: "facebook", source: "Facebook lead ad", summary: "Boiler service quote", state: "booked", label: "Booked Fri 10:00", time: "Yesterday" },
  ];
  return (
    <Frame title="Enquiries" className={className} floating={floating}>
      <div className="flex gap-2 border-b border-line px-5 py-3 text-xs">
        <span className="rounded-full bg-ink px-2.5 py-1 text-bg">All 47</span>
        <span className="rounded-full bg-surface px-2.5 py-1 text-muted">Booked 19</span>
        <span className="rounded-full bg-surface px-2.5 py-1 text-muted">Needs you 2</span>
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.name} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 border-b border-line px-5 py-3.5 last:border-0">
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-crimson-soft text-xs font-semibold text-crimson-ink">
              {r.name.split(" ").map((p) => p[0]).join("")}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 text-sm font-medium"><span className="truncate">{r.name}</span><span className="text-muted">{channelIcon[r.channel]}</span></span>
              <span className="block truncate text-xs text-muted">{r.summary}<span className="sr-only">, via {r.source}</span></span>
            </span>
            <span className="flex flex-col items-end gap-1">
              <span className={`rounded-full px-2 py-0.5 text-[11px] whitespace-nowrap ${status[r.state]}`}>{r.label}</span>
              <span className="text-[11px] text-muted">{r.time}</span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function WeeklyReport({ className = "", floating = false }: { className?: string; floating?: boolean }) {
  const days = [["M", 6], ["T", 9], ["W", 7], ["T", 8], ["F", 11], ["S", 4], ["S", 2]] as const;
  const max = 11;
  return (
    <Frame title="Weekly report email" className={className} floating={floating}>
      <div className="border-b border-line px-5 py-3 text-xs text-muted">
        <p className="flex items-center gap-2"><EnvelopeSimpleIcon aria-hidden="true" size={14} />From INFOTECH reports, every Monday at 8 am</p>
        <p className="mt-1 text-sm font-semibold text-ink">Your week: 47 enquiries, 19 booked</p>
      </div>
      <div className="p-5">
        <dl className="grid grid-cols-2 gap-3">
          {[["Enquiries", "47"], ["Replied within a minute", "46"], ["Booked", "19"], ["Handed to your team", "6"]].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-surface p-3">
              <dt className="text-[11px] text-muted">{k}</dt>
              <dd className="display text-2xl tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs text-muted">Enquiries by day</p>
        <div className="mt-2 flex h-20 items-end gap-2" role="img" aria-label="Bar chart of enquiries by day: Monday 6, Tuesday 9, Wednesday 7, Thursday 8, Friday 11, Saturday 4, Sunday 2">
          {days.map(([d, n], i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-crimson" style={{ height: `${(n / max) * 64}px`, opacity: 0.45 + (n / max) * 0.55 }} />
              <span className="text-[10px] text-muted">{d}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-line p-3 text-xs">
          <p className="flex items-center gap-1.5 font-semibold"><WarningCircleIcon aria-hidden="true" size={14} className="text-crimson" />Needs your attention</p>
          <p className="mt-1.5 text-muted">Priya Shah asked for a manager about her last visit. Call-back task assigned to you.</p>
        </div>
        <p className="mt-3 text-xs text-muted"><span className="font-semibold text-ink">What we changed:</span> added “Do you do weekend call-outs?” to the receptionist’s answers.</p>
      </div>
    </Frame>
  );
}

export function CallTranscript({ className = "", floating = false }: { className?: string; floating?: boolean }) {
  return (
    <Frame title="Call record in your CRM" className={className} floating={floating}>
      <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-crimson text-white"><WaveformIcon aria-hidden="true" size={18} weight="bold" /></span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">Call with Dana Okafor</p>
          <p className="text-xs text-muted">3 min 12 s, 9:12 pm, answered by your AI receptionist</p>
        </div>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-crimson-soft p-4">
          <p className="text-xs font-semibold text-crimson-ink">Summary</p>
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-sm marker:text-crimson">
            <li>AC unit fully off, house getting hot</li>
            <li>No smell of burning, no water leak</li>
            <li>Booked first slot: Thursday 8:30 am, Marcus</li>
          </ul>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
          {["Urgent", "AC repair", "New customer", "After hours"].map((t) => (
            <span key={t} className="rounded-full border border-line px-2 py-0.5 text-muted">{t}</span>
          ))}
        </div>
        <dl className="mt-4 grid gap-2.5 text-sm">
          {[
            ["Caller", "Our air conditioning just stopped and it’s getting really hot."],
            ["AI", "Has the unit shut off completely, or is it running without cooling?"],
            ["Caller", "Completely off. Nothing."],
            ["AI", "The first slot is tomorrow at 8:30 am. Shall I book it for 14 Elm Street?"],
          ].map(([who, text], i) => (
            <div key={i} className="grid grid-cols-[52px_1fr] gap-2">
              <dt className={who === "AI" ? "text-crimson-ink" : "text-muted"}>{who}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 border-t border-line pt-3 text-xs text-muted">Recording, transcript and summary saved to the contact record.</p>
      </div>
    </Frame>
  );
}

/** Section showing all three, used on the Services page. */
export function ProductMockups() {
  return (
    <section className="bg-surface section">
      <div className="wrap">
        <div className="mb-12 grid gap-6 md:grid-cols-12">
          <h2 className="display display-lg md:col-span-6">What you’ll actually see</h2>
          <p className="text-muted md:col-span-5 md:col-start-8 md:self-end">
            Every enquiry in one list, a short report every Monday, and a written summary of every call. These are examples with made-up names and numbers.
          </p>
        </div>
        <div className="grid items-start gap-5 lg:grid-cols-3">
          <EnquiryInbox />
          <WeeklyReport />
          <CallTranscript />
        </div>
      </div>
    </section>
  );
}
