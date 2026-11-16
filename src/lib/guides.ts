/* Guides for /resources. Practical, general information. Nothing here is legal advice. */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "note"; text: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string; // ISO date
  minutes: number;
  blocks: GuideBlock[];
};

export const guides: Guide[] = [
  {
    slug: "stop-losing-after-hours-calls",
    title: "How to stop losing after-hours calls",
    description: "Find out how many calls you miss, compare the five ways to cover them, and set up a simple system that keeps those customers.",
    updated: "2026-11-16",
    minutes: 6,
    blocks: [
      { type: "p", text: "Most service businesses miss more calls than they think. The phone rings while everyone is on a job, at lunch, or after the office closes, and many callers don’t leave a voicemail. They call the next business on the list. This guide shows you how to measure the problem, the options for fixing it, and how to choose." },
      { type: "h2", id: "measure", text: "Step one: count what you’re missing" },
      { type: "p", text: "Before you change anything, get a number. It takes about 20 minutes." },
      { type: "steps", items: [
        { title: "Export your call log", text: "Your phone provider or business phone app can show every inbound call for the last 30 days, including the ones nobody answered." },
        { title: "Count the unanswered calls", text: "Filter for missed or unanswered calls, then remove obvious spam and repeat callers so you count real people." },
        { title: "Note when they happen", text: "Group them into working hours, evenings and weekends. Most businesses find a cluster they didn’t expect, such as lunchtime or early evening." },
        { title: "Check who called back", text: "Compare missed numbers against your bookings. The ones that never became customers are the cost." },
      ] },
      { type: "p", text: "Multiply the lost callers by how often a caller normally books and by your average job value, and you have a monthly figure. Our revenue calculator on the homepage does the same sum with your numbers." },
      { type: "h2", id: "options", text: "The five ways to cover calls" },
      { type: "list", items: [
        "Voicemail: free, but many callers hang up without leaving a message, and the ones who do still wait until morning.",
        "Forwarding to a mobile: works until you’re on a roof, driving, or asleep. It moves the problem rather than solving it.",
        "Answering service: a person answers around the clock and usually takes a message. Good for urgent calls, but it rarely books jobs, and cost grows with every minute.",
        "Missed-call text-back: an automatic text within seconds of a missed call, inviting the caller to reply. Cheap and effective as a first step.",
        "AI receptionist: answers every call and message, asks your questions, books into your calendar and hands sensitive calls to a person.",
      ] },
      { type: "h2", id: "choose", text: "How to choose" },
      { type: "p", text: "If you miss a handful of calls a week, missed-call text-back alone may be enough. If you miss dozens, or callers need an appointment straight away, you need something that can book. If many of your calls are complicated, emotional or high value, keep a person for those and automate the rest." },
      { type: "list", items: [
        "Fix the busiest gap first: usually evenings and lunchtimes, not the middle of the night.",
        "Decide what counts as urgent before you automate anything, and who gets alerted.",
        "Write down the five questions you always ask a new caller. That is the start of any script.",
        "Measure again after 30 days with the same method, so you know whether it worked.",
      ] },
      { type: "h2", id: "expectations", text: "Set expectations with callers" },
      { type: "p", text: "Whatever you choose, tell callers what happens next: when they’ll hear back, or that their appointment is confirmed. Silence after a call feels the same as no answer. If you use an AI receptionist, it should say so at the start of the call. Honesty builds trust, and in some places it’s required." },
      { type: "note", text: "A quick win for this week: turn on missed-call text-back if your phone provider offers it. It costs little and catches callers who would never leave a voicemail." },
    ],
  },
  {
    slug: "text-message-consent-basics",
    title: "Text message consent basics for service businesses",
    description: "The common rules for texting customers in the US, UK, EU, Canada and Australia: consent, identifying yourself, opt-outs and records.",
    updated: "2026-11-16",
    minutes: 7,
    blocks: [
      { type: "note", text: "This is general information, not legal advice. Rules change and depend on where you and your customers are. Check with a lawyer before running text campaigns." },
      { type: "p", text: "Texts get read quickly, which is why they work for confirmations, reminders and follow-up. It’s also why most countries regulate them. The good news: the rules in most places come down to the same four habits." },
      { type: "h2", id: "four-habits", text: "The four habits that keep you safe almost everywhere" },
      { type: "steps", items: [
        { title: "Get permission first", text: "Only text people who gave you their number for that purpose. Say what kind of messages they’ll get when you collect it." },
        { title: "Say who you are", text: "Every message should make clear which business is sending it." },
        { title: "Make stopping easy", text: "Include a simple way to opt out, such as replying STOP, and honour it straight away." },
        { title: "Keep records", text: "Record when and how each person agreed, and when anyone opted out." },
      ] },
      { type: "h2", id: "service-vs-marketing", text: "Service messages and marketing messages are treated differently" },
      { type: "p", text: "A reminder about an appointment the customer booked is usually treated more gently than a promotional offer. Reactivation campaigns and discounts count as marketing in most places and need clearer consent. When in doubt, treat a message as marketing." },
      { type: "h2", id: "by-country", text: "Highlights by country" },
      { type: "list", items: [
        "United States: the TCPA requires prior consent for automated texts, and prior express written consent for marketing. Business texting from standard 10-digit numbers also needs A2P 10DLC registration through your provider. Many states add their own rules and quiet hours.",
        "United Kingdom: marketing texts need consent, or the “soft opt-in” for existing customers who bought something similar and were given a chance to opt out. UK GDPR covers the personal data itself.",
        "European Union: the ePrivacy rules require consent for marketing texts in most countries, with a similar exception for existing customers in many. GDPR covers how you store and use the numbers.",
        "Canada: CASL requires express or implied consent, clear identification of the sender, and a working unsubscribe in every commercial message.",
        "Australia: the Spam Act requires consent, sender identification and a functional unsubscribe in commercial messages.",
      ] },
      { type: "h2", id: "automation", text: "What this means for automation" },
      { type: "list", items: [
        "Ask for consent in your web forms and booking flows, in plain words, and store the answer with the contact.",
        "Make sure every automated sequence stops the moment someone opts out, on every channel.",
        "Send at sensible local times. Quiet hours are a legal requirement in some places and good manners everywhere.",
        "Keep message templates factual and identify your business in the first line.",
      ] },
      { type: "p", text: "Every system we build follows these habits by default, and we review the rules for your market during setup. They don’t replace your own legal advice." },
    ],
  },
  {
    slug: "questions-to-ask-an-ai-automation-agency",
    title: "Ten questions to ask before hiring an AI automation agency",
    description: "What to ask about ownership, handoffs, data, pricing and leaving, so you can compare agencies, including us, on what matters.",
    updated: "2026-11-16",
    minutes: 5,
    blocks: [
      { type: "p", text: "AI automation can save a service business real time and money, but the agencies selling it vary a lot. These questions help you separate the careful ones from the rest. Ask them of anyone you talk to, including us." },
      { type: "h2", id: "questions", text: "The questions" },
      { type: "steps", items: [
        { title: "Whose name are the accounts in?", text: "Your phone numbers, CRM and automation accounts should be yours. If the agency owns them, leaving becomes painful." },
        { title: "What happens when the AI doesn’t know?", text: "Ask to see the handoff rules: when it transfers live, when it takes a message, and who gets alerted for urgent or upset callers." },
        { title: "Will callers be told they’re speaking to an AI?", text: "They should be. It’s more honest, and it’s increasingly a legal requirement." },
        { title: "Can I approve every message before it goes live?", text: "You know your customers. Scripts and templates should be written with you, not handed to you." },
        { title: "How is it tested?", text: "Look for test calls, edge cases and a review with your team before launch, not just a demo." },
        { title: "Does the AI provider train on my customers’ data?", text: "Ask which providers they use and what those providers’ business terms say about training and retention." },
        { title: "What will I pay in total?", text: "Monthly fees are only part of it. Ask about setup, phone and messaging usage, and AI costs, and whether usage is passed on at cost." },
        { title: "How will we measure success?", text: "Agree on numbers before you start, such as response time, bookings and recovered revenue, not messages sent." },
        { title: "What if it isn’t live on time?", text: "Ask whether there is a guarantee, and read its terms." },
        { title: "What happens if I leave?", text: "You should keep everything, and the agency should remove its access. Ask how long the notice period is." },
      ] },
      { type: "h2", id: "red-flags", text: "Red flags" },
      { type: "list", items: [
        "Promises of results before they have seen your call log or your systems.",
        "Long contracts before anything is live.",
        "No clear answer on data, or “the AI handles everything”.",
        "Accounts set up in the agency’s name with no plan to transfer them.",
      ] },
      { type: "p", text: "Our own answers to every question are on our pricing, security and FAQ pages. If any are unclear, ask us on a call." },
    ],
  },
];
