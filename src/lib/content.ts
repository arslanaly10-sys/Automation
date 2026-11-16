/* All marketing copy for the site. Edit words here; layouts read from this file. */

export type Service = {
  slug: string;
  icon: "phone" | "funnel" | "calendar" | "repeat" | "star" | "plug" | "files" | "gauge";
  name: string;
  short: string;
  body: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-reception",
    icon: "phone",
    name: "AI reception for calls, chat and text",
    short: "Every call and message answered in your business’s voice, day or night.",
    body:
      "The receptionist answers within seconds, asks the questions your team would ask, and books the appointment or routes the request. If a caller is upset, unsure or asks for a person, it hands over straight away with a written summary, so nobody has to repeat themselves.",
    includes: [
      "Phone, website chat, SMS and WhatsApp handled from one set of rules",
      "Qualifying questions written with you, not a generic script",
      "Live transfer or a call-back task when a person should step in",
      "Full transcripts and summaries in your CRM",
    ],
  },
  {
    slug: "lead-follow-up",
    icon: "funnel",
    name: "Lead capture and follow-up",
    short: "Every new enquiry gets a reply within a minute and follow-up until it’s resolved.",
    body:
      "Web forms, ad leads, directory enquiries and missed calls all land in one pipeline and get a reply within a minute. After that, a polite follow-up sequence keeps going until the customer books, says no, or asks to speak to someone.",
    includes: [
      "Missed-call text-back within seconds",
      "One pipeline for every lead source",
      "Follow-up by text and email, timed to how your customers buy",
      "Automatic stop the moment a customer replies or books",
    ],
  },
  {
    slug: "scheduling",
    icon: "calendar",
    name: "Booking and scheduling",
    short: "Bookings, confirmations, reminders and reschedules handled for you.",
    body:
      "Customers book into real availability, following your rules for service areas, job lengths and staff skills. Reminders go out at the right time, reschedules happen by text, and when someone doesn’t show up, a follow-up offers them a new slot.",
    includes: [
      "Booking rules for service area, job length and staff",
      "Confirmations and reminders by text and email",
      "Self-serve rescheduling without a phone call",
      "No-show recovery and waitlist fill",
    ],
  },
  {
    slug: "reactivation",
    icon: "repeat",
    name: "Customer reactivation",
    short: "Brings back customers who are due, quotes left open, and members who’ve drifted off.",
    body:
      "Most businesses already have their next month of work sitting in their customer list. We find the customers due for a service, the quotes nobody chased and the members who stopped coming, then reach out with a message that sounds like you.",
    includes: [
      "Service-due and renewal reminders",
      "Open quote and estimate follow-up",
      "Win-back campaigns for lapsed customers",
      "Results reported in booked revenue, not messages sent",
    ],
  },
  {
    slug: "reviews",
    icon: "star",
    name: "Reviews and referrals",
    short: "Asks every customer for a review at the right moment, and alerts a manager the moment something went wrong.",
    body:
      "Once a job is done, every customer gets a short check-in and an invitation to leave a review. Nobody is filtered out, because review platforms don’t allow it. If someone says something went wrong, a manager hears about it within minutes, while there is still time to put it right.",
    includes: [
      "Post-job check-in by text or email",
      "Review requests to every customer, on the platforms that matter to you",
      "Problem replies flagged to a manager within minutes",
      "Referral prompts for your best customers",
    ],
  },
  {
    slug: "integrations",
    icon: "plug",
    name: "CRM and system integration",
    short: "Your CRM, calendar, job system and inbox, kept in sync.",
    body:
      "Automation only helps if the records stay right. We connect your CRM, calendars, job management, accounting and messaging tools so a booking made at 10 pm is in the right place by 10:01, with the right tags and the right owner.",
    includes: [
      "Two-way sync between CRM, calendar and job tools",
      "Clean contact records with source tracking",
      "Tasks and alerts for the right person on your team",
      "Works with what you have before we suggest anything new",
    ],
  },
  {
    slug: "back-office",
    icon: "files",
    name: "Back-office automation",
    short: "Cuts out the data entry, document chasing and status emails.",
    body:
      "Intake forms that fill your systems, document requests that remind people until the paperwork is in, invoice nudges, and status updates customers would otherwise call to ask about. This is the quiet work that eats an afternoon a day.",
    includes: [
      "Intake forms connected to your records",
      "Document collection with automatic reminders",
      "Payment and invoice reminders",
      "Weekly summary reports to your inbox",
    ],
  },
  {
    slug: "optimisation",
    icon: "gauge",
    name: "Monitoring and optimisation",
    short: "We keep watching after launch and keep improving it.",
    body:
      "Every plan includes ongoing care. We review conversations, flag anything the system handled poorly, tune scripts and rules, and report on what changed. You get an automation that improves over time instead of drifting.",
    includes: [
      "Conversation review and quality checks",
      "Script and rule tuning as your business changes",
      "Monthly report on response times, bookings and handoffs",
      "A named person to contact, not a ticket queue",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  short: string;
  examples: string;
  image: string;
  imageAlt: string;
  secondImage: string;
  secondAlt: string;
  headline: string;
  intro: string;
  problems: { title: string; body: string }[];
  workflows: { title: string; body: string }[];
  conversation: { from: "customer" | "ai"; text: string }[];
  outcome: string;
  note?: string;
  firstWorkflow: string;
  faqs: { q: string; a: string }[];
  tools: string[]; // shown as "tools businesses like yours often use"; we confirm what connects during the audit
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    short: "Home services",
    name: "Home and field services",
    examples: "HVAC, plumbing, electrical, roofing, cleaning, landscaping",
    image: "/images/home-plumbing.jpg",
    imageAlt: "Exposed copper and steel plumbing pipes on a brick wall",
    secondImage: "/images/home-welding.jpg",
    secondAlt: "A technician welding with sparks flying",
    headline: "Your technicians are on the job. Customers still get an answer.",
    intro:
      "In the trades, the business that answers first usually gets the job. We help service companies answer every call, book work against real availability, and follow up on every quote, without adding a dispatcher.",
    problems: [
      { title: "Calls ring out while everyone is on site", body: "A missed call at 4 pm is often a booked job for a competitor by 4:15." },
      { title: "Quotes go out and nobody follows up", body: "Estimates sit in inboxes while the customer is still deciding." },
      { title: "Emergency calls arrive after hours", body: "Urgent jobs need sorting from routine ones before someone wakes the on-call tech." },
    ],
    workflows: [
      { title: "Emergency triage and dispatch alerts", body: "The receptionist sorts urgent jobs from routine ones using your criteria, then alerts the on-call technician with the address and a summary." },
      { title: "Estimate booking with service-area checks", body: "Customers choose a slot that fits your territory, travel time and job length." },
      { title: "Quote follow-up", body: "Friendly check-ins on day two, five and ten, which stop the moment the customer replies." },
      { title: "Maintenance plan renewals", body: "Seasonal reminders that fill quiet weeks with planned work." },
    ],
    conversation: [
      { from: "customer", text: "Hi, our boiler stopped working and we’ve got no hot water." },
      { from: "ai", text: "Sorry to hear that. Is there any smell of gas, or any water leaking?" },
      { from: "customer", text: "No, it’s just off." },
      { from: "ai", text: "Thanks. I can book a technician for tomorrow between 8 and 10 am. Shall I use the address on file, 22 Harbour Road?" },
    ],
    outcome: "Booked: boiler repair, tomorrow 8–10 am. Technician notified.",
    firstWorkflow: "Most trades start with missed-call text-back plus estimate booking. It catches callers while your team is on site and puts estimate visits straight into the calendar, respecting your service area and travel time.",
    faqs: [
      { q: "Can it tell an emergency from a routine job?", a: "Yes, using rules you set, such as no heating in winter, an active leak, no power or a gas smell. Emergencies alert your on-call technician straight away. Routine jobs get booked." },
      { q: "Will it quote prices over the phone?", a: "Only if you want it to. Many trades share a call-out fee or a price range and leave exact quotes to the estimate visit. You choose." },
      { q: "Does it work with our job management software?", a: "Often, yes. Tools such as Jobber and Housecall Pro offer ways to connect, and Google Calendar works with almost everything. We confirm what’s possible for your setup during the audit." },
    ],
    tools: ["Jobber", "Housecall Pro", "Google Calendar", "QuickBooks", "Stripe"],
  },
  {
    slug: "dental-medspa",
    short: "Dental and med spas",
    name: "Dental, clinics and med spas",
    examples: "Dental practices, medical clinics, med spas, physiotherapy, wellness",
    image: "/images/dental-clinic.jpg",
    imageAlt: "A bright, modern dental treatment room",
    secondImage: "/images/medspa-facial.jpg",
    secondAlt: "A client receiving a facial treatment at a spa",
    headline: "A front desk that keeps up, so your team can stay with patients.",
    intro:
      "Your front desk is answering the phone, checking people in and chasing confirmations all at once. We take care of the routine admin (booking, reminders, recalls and intake) so your staff can focus on the people in the room.",
    problems: [
      { title: "The phone rings while patients wait at the desk", body: "Someone ends up waiting, either on hold or at the desk." },
      { title: "No-shows leave expensive gaps", body: "An empty chair costs the same whether or not anyone booked it." },
      { title: "Recalls slip through the cracks", body: "Six-month check-ups and treatment plans get forgotten without steady follow-up." },
    ],
    workflows: [
      { title: "New patient enquiries and booking", body: "Answers common admin questions, collects details and books first appointments into your schedule." },
      { title: "Confirmations and reminders", body: "Two-way reminders that confirm, reschedule or offer the slot to the waitlist." },
      { title: "Recall and reactivation", body: "Steady recall outreach for hygiene visits, follow-ups and incomplete treatment plans." },
      { title: "Intake forms before the visit", body: "Forms sent and chased ahead of time, so check-in takes a minute." },
    ],
    conversation: [
      { from: "customer", text: "Hi, do you have anything for a cleaning next week?" },
      { from: "ai", text: "We do. Tuesday at 9:15 am or Thursday at 4:30 pm are open with our hygienist. Which suits you?" },
      { from: "customer", text: "Thursday please." },
      { from: "ai", text: "Booked for Thursday at 4:30 pm. I’ll send your intake form now so check-in is quick." },
    ],
    outcome: "Booked: hygiene visit, Thursday 4:30 pm. Intake form sent.",
    firstWorkflow: "Most clinics start with confirmations and reminders, then add new-patient booking. Fewer empty chairs pays for the system quickly, and the front desk gets time back straight away.",
    faqs: [
      { q: "Does the AI give medical advice?", a: "No. It handles admin only: booking, reminders, forms and opening hours. Anything clinical, or anything it’s unsure about, goes to your staff." },
      { q: "Can it work with our practice management software?", a: "Many practice systems allow online booking or other connections, and some don’t. We check yours during the audit and tell you plainly what’s possible before you commit." },
      { q: "What about patient privacy?", a: "We follow the privacy rules where you operate. For regulated health information, we only go ahead with providers that will sign the agreements those rules require." },
    ],
    tools: ["Google Calendar", "Calendly", "WhatsApp Business", "Stripe", "Zapier"],
    note:
      "The system handles admin only and never gives clinical advice. Anything medical goes to your staff. During the audit we work through the privacy rules that apply where you operate.",
  },
  {
    slug: "real-estate",
    short: "Real estate",
    name: "Real estate and property management",
    examples: "Agents, brokerages, lettings, property and facilities managers",
    image: "/images/realestate-modern.jpg",
    imageAlt: "A modern two-storey home lit up at dusk",
    secondImage: "/images/realestate-keys.jpg",
    secondAlt: "House keys resting beside a small model home",
    headline: "Reply to portal leads in minutes and handle maintenance requests in order.",
    intro:
      "Buyers and renters contact several agents at once, and the first useful reply usually wins. Tenants need a fast, organised response too. We automate the first conversation, the viewing booking and the maintenance request queue.",
    problems: [
      { title: "Portal leads go cold fast", body: "A lead who hears back tomorrow has usually booked a viewing with someone else today." },
      { title: "Viewings take endless back-and-forth", body: "Finding a time that suits the buyer, the agent and the property can take a dozen messages." },
      { title: "Maintenance requests arrive in every channel", body: "Texts, emails and calls with no photos, no address and no sense of urgency." },
    ],
    workflows: [
      { title: "Instant lead response and qualification", body: "Budget, timeline, financing and must-haves collected in the first conversation." },
      { title: "Viewing scheduling", body: "Self-serve viewing slots with reminders and directions." },
      { title: "Maintenance intake and triage", body: "Photos, location and urgency collected and sent to the right contractor." },
      { title: "Long-term nurture", body: "New listings and market updates for buyers who aren’t ready yet." },
    ],
    conversation: [
      { from: "customer", text: "Is the two-bedroom on Park Lane still available?" },
      { from: "ai", text: "It is. Are you looking to buy or rent, and when would you like to move?" },
      { from: "customer", text: "Rent, from next month." },
      { from: "ai", text: "Great. I can show you Saturday at 11 am or Monday at 6 pm. Which works better?" },
    ],
    outcome: "Viewing booked: Saturday 11 am. Agent notified with lead details.",
    firstWorkflow: "Most agencies start with instant replies to portal and website leads, plus viewing booking. A useful reply within a minute is what wins the viewing.",
    faqs: [
      { q: "Can it qualify buyers and tenants?", a: "Yes. It asks your questions, such as budget, move date, financing and must-haves, and records the answers in your CRM before an agent calls." },
      { q: "Can tenants report maintenance issues through it?", a: "Yes. It collects the address, photos and urgency, and routes the job to the right contractor or property manager under your rules." },
      { q: "Which CRMs can it work with?", a: "Common choices like HubSpot, Pipedrive and Salesforce can usually be connected, as can many property-specific systems. We confirm yours during the audit." },
    ],
    tools: ["HubSpot", "Pipedrive", "Salesforce", "Google Calendar", "WhatsApp Business"],
  },
  {
    slug: "automotive",
    short: "Automotive",
    name: "Automotive",
    examples: "Repair shops, body shops, detailers, tyre centres, dealerships",
    image: "/images/auto-mechanic.jpg",
    imageAlt: "A mechanic’s hands working on an engine with a wrench",
    secondImage: "/images/auto-engine.jpg",
    secondAlt: "Close-up of a car engine’s belts and pulleys",
    headline: "Book more work while your bays stay busy.",
    intro:
      "Customers want to know when they can drop the car off, how much it will cost, and when it will be ready. We automate the booking, the updates and the follow-up, so your service advisors spend less time on the phone.",
    problems: [
      { title: "Advisors are stuck on the phone", body: "Every status call pulls someone away from a customer at the counter." },
      { title: "Estimates wait for approval", body: "Cars sit in the bay while authorisations go unanswered." },
      { title: "Service reminders don’t go out", body: "Oil changes and inspections slip unless someone remembers to send them." },
    ],
    workflows: [
      { title: "Service booking", body: "Customers book drop-off slots that respect bay capacity and job type." },
      { title: "Repair status updates", body: "Automatic texts at check-in, diagnosis and ready-for-pickup." },
      { title: "Estimate approval follow-up", body: "Clear estimates sent by text, with reminders until approved." },
      { title: "Mileage and date-based reminders", body: "Service-due messages that bring customers back on schedule." },
    ],
    conversation: [
      { from: "customer", text: "Can I bring my car in for a brake check this week?" },
      { from: "ai", text: "Yes. We have drop-off slots Wednesday at 8 am or Friday at 7:30 am. What’s the make and model?" },
      { from: "customer", text: "2019 Corolla. Wednesday works." },
      { from: "ai", text: "Booked for Wednesday at 8 am. You’ll get a text when the inspection is done." },
    ],
    outcome: "Booked: brake inspection, Wednesday 8 am. Bay 2 reserved.",
    firstWorkflow: "Most shops start with service booking and status texts. Fewer “is my car ready?” calls frees up your advisors, and booking by text fills the bays without phone tag.",
    faqs: [
      { q: "Can it give repair quotes?", a: "It can share standard prices you approve, such as an oil change or an inspection. Repair estimates still come from your technicians, and it follows up until the customer approves." },
      { q: "Can customers approve work by text?", a: "Yes. Estimates go out with a clear approve or call-me option, and your advisor sees the reply straight away." },
      { q: "Does it work with our shop management system?", a: "Many shop systems can connect or share a calendar, and some can’t. We check yours during the audit." },
    ],
    tools: ["Google Calendar", "QuickBooks", "Stripe", "Twilio", "Zapier"],
  },
  {
    slug: "consumer-services",
    short: "Salons, gyms and hospitality",
    name: "Salons, gyms, restaurants and hospitality",
    examples: "Salons, barbers, spas, gyms, studios, restaurants, hotels",
    image: "/images/salon.jpg",
    imageAlt: "A modern salon interior with styling chairs and round mirrors",
    secondImage: "/images/restaurant.jpg",
    secondAlt: "A warmly lit restaurant dining room",
    headline: "Fill your book, keep your regulars and look after your reviews.",
    intro:
      "When people book on impulse, a slow reply loses the booking. We handle bookings, reminders, membership questions and post-visit follow-up, so your team can look after the guests in front of them.",
    problems: [
      { title: "Bookings come in while the team is busy", body: "Stylists, trainers and hosts can’t answer the phone mid-service." },
      { title: "No-shows and late cancellations", body: "An empty slot at short notice rarely gets filled." },
      { title: "Regulars drift away quietly", body: "People don’t usually cancel. They just stop booking." },
    ],
    workflows: [
      { title: "Bookings and reservations", body: "Booked into your calendar or reservation system, with deposits where you use them." },
      { title: "Reminders and waitlist fill", body: "Cancellations offered straight to people on the waitlist." },
      { title: "Membership and FAQ handling", body: "Opening hours, pricing, classes and policies answered instantly." },
      { title: "Win-back and reviews", body: "A timely nudge for lapsed regulars and a review request after every visit." },
    ],
    conversation: [
      { from: "customer", text: "Any chance of a cut and colour on Saturday?" },
      { from: "ai", text: "Saturday is busy, but Sophie has 10:30 am free, about two and a half hours. Want it?" },
      { from: "customer", text: "Perfect, yes." },
      { from: "ai", text: "You’re booked with Sophie at 10:30 am Saturday. I’ll send a reminder the day before." },
    ],
    outcome: "Booked: cut and colour with Sophie, Saturday 10:30 am.",
    firstWorkflow: "Most salons, studios and restaurants start with booking and reminders, plus filling cancellations from a waitlist. Last-minute gaps become bookings instead of lost revenue.",
    faqs: [
      { q: "Will it work with our booking system?", a: "Often. Many salon, fitness and restaurant booking tools can connect, and those that can’t usually accept bookings through a link. We confirm yours during the audit." },
      { q: "Can it take deposits?", a: "Where your booking or payment tool supports deposits, the booking flow can include a payment link." },
      { q: "Can it answer questions about classes, menus or prices?", a: "Yes, from answers you approve. If a question isn’t covered, it passes it to your team rather than guessing." },
    ],
    tools: ["Google Calendar", "Calendly", "Stripe", "WhatsApp Business", "Make"],
  },
  {
    slug: "professional-services",
    short: "Professional services",
    name: "Legal, accounting and insurance",
    examples: "Law firms, accountants, bookkeepers, insurance brokers, consultancies",
    image: "/images/pro-signing.jpg",
    imageAlt: "A person signing a document at a desk",
    secondImage: "/images/pro-tax.jpg",
    secondAlt: "Tax forms, a calculator and a phone on a desk",
    headline: "Run client intake properly, without the paperwork chase.",
    intro:
      "Professional firms lose time before the paid work even starts: collecting details, booking consultations and chasing documents. We automate the intake and the reminders, so your billable people start each matter ready to work.",
    problems: [
      { title: "Enquiries need careful screening", body: "Every new enquiry needs the same details collected before anyone can help." },
      { title: "Document chasing takes hours", body: "IDs, statements and signed forms arrive late, one reminder at a time." },
      { title: "Renewals and deadlines sneak up", body: "Policy renewals and filing dates need steady, timely reminders." },
    ],
    workflows: [
      { title: "Structured intake", body: "Matter type, key dates and contact details gathered and logged before the first call." },
      { title: "Consultation scheduling", body: "Qualified enquiries book directly into the right person’s calendar." },
      { title: "Document collection", body: "Secure upload links with reminders until everything is in." },
      { title: "Renewal and deadline reminders", body: "Timely nudges for renewals, filings and annual reviews." },
    ],
    conversation: [
      { from: "customer", text: "I need help with my company’s year-end accounts." },
      { from: "ai", text: "We can help. Roughly what’s your annual turnover, and when is your year-end?" },
      { from: "customer", text: "Around 400k, year-end was March." },
      { from: "ai", text: "Thanks. I’ve booked a 30-minute consultation with Priya on Tuesday at 2 pm, and sent a checklist of what to bring." },
    ],
    outcome: "Consultation booked: Tuesday 2 pm. Document checklist sent.",
    firstWorkflow: "Most firms start with structured intake and consultation booking. Every enquiry arrives with the facts you need, and the right person gets the meeting.",
    faqs: [
      { q: "Does it give legal, tax or financial advice?", a: "No. It collects information and books meetings. Anything that needs professional judgement goes to your team." },
      { q: "Can it help with conflict checks?", a: "It can collect the names and details your conflict check needs and pass them to your team. The check itself stays with you." },
      { q: "How are client documents handled?", a: "Through secure upload links from established tools chosen with you, with reminders until everything arrives." },
    ],
    tools: ["HubSpot", "Xero", "QuickBooks", "Calendly", "Zapier"],
    note:
      "The system collects information and books meetings. It never gives legal, tax or financial advice. Anything that needs professional judgement goes to your team.",
  },
];

export const steps = [
  {
    title: "A customer gets in touch",
    body: "A call at 9:12 pm, a web form at lunch or a message on Sunday all get the same quick, polite reply.",
    ui: "inbound",
  },
  {
    title: "The right questions get asked",
    body: "Name, location, what they need, how urgent it is. Your questions, in your tone of voice. A person takes over when needed.",
    ui: "qualify",
  },
  {
    title: "The job goes on the calendar",
    body: "Booked into real availability, following your rules. The customer gets a confirmation and your team gets the details.",
    ui: "booked",
  },
  {
    title: "Nothing gets dropped afterwards",
    body: "Reminders, updates, the review request and the CRM record are all handled. Every follow-up happens without anyone remembering to send it.",
    ui: "follow",
  },
] as const;

export const pilot = [
  { when: "Week 1", title: "Workflow audit", body: "We map how enquiries reach you today, where they stall, and which systems need to connect. You get a written plan, even if you go no further." },
  { when: "Weeks 2–3", title: "Design and build", body: "We write the scripts with you, set the handoff rules and connect your tools. You approve every message before a customer sees it." },
  { when: "Week 3", title: "Test with your team", body: "Your staff try to break it. We run test calls and edge cases until the answers are right." },
  { when: "Week 4 onwards", title: "Launch and tune", body: "We go live on one workflow, review every conversation in the first fortnight, and expand only once it’s working." },
];

export const commitments = [
  { title: "You own everything", body: "Your accounts, your data, your phone numbers, your scripts. If you leave, all of it stays with you." },
  { title: "A person is always one step away", body: "Clear handoff rules you approve. Upset, unsure or sensitive conversations go to a human." },
  { title: "Measured in bookings, not activity", body: "We report the outcomes that matter: response time, booked jobs and recovered revenue." },
  { title: "No long lock-in", body: "Month-to-month after launch. We keep your business by doing good work, not through a contract." },
];

export const tools = [
  "Google Calendar", "Microsoft Outlook", "HubSpot", "Salesforce", "Pipedrive", "Zoho",
  "Calendly", "Jobber", "Housecall Pro", "Twilio", "WhatsApp Business",
  "Stripe", "QuickBooks", "Xero", "Slack", "Zapier", "Make",
];

export const plans = [
  {
    name: "Starter",
    price: 497,
    for: "For businesses that want one problem fixed properly.",
    features: [
      "One automated workflow, such as missed-call text-back and lead follow-up",
      "Connection to one calendar or CRM",
      "Scripts written and approved with you",
      "Monthly performance report",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: 997,
    for: "For teams that want their whole front office covered.",
    features: [
      "AI reception for calls, chat and text",
      "Up to three automated workflows",
      "Booking, reminders and follow-up",
      "Two-way CRM and calendar sync",
      "Fortnightly optimisation review",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: 1997,
    for: "For multi-location and high-volume operations.",
    features: [
      "Everything in Growth",
      "Multiple locations, lines and teams",
      "Workflows scoped to your operation",
      "Custom integrations and reporting dashboard",
      "A dedicated automation lead",
      "Monthly strategy session",
    ],
    featured: false,
  },
];

/* ---------- Plan comparison (pricing page) ---------- */
/* true = included, false = not included, string = what you get. Keep in line with `plans` above. */
export const planComparison: { feature: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { feature: "Automated workflows", values: ["1", "Up to 3", "Scoped to your operation"] },
  { feature: "AI reception for calls, chat and text", values: [false, true, true] },
  { feature: "Missed-call text-back and lead follow-up", values: ["If it’s your workflow", true, true] },
  { feature: "Booking, reminders and rescheduling", values: ["If it’s your workflow", true, true] },
  { feature: "Calendar and CRM connections", values: ["One", "Two-way sync", "Custom integrations"] },
  { feature: "Locations, phone lines and teams", values: ["One", "One", "Multiple"] },
  { feature: "Scripts written and approved with you", values: [true, true, true] },
  { feature: "Reporting", values: ["Monthly report", "Monthly report", "Reporting dashboard"] },
  { feature: "Optimisation", values: ["Ongoing tuning", "Fortnightly review", "Fortnightly review and monthly strategy session"] },
  { feature: "Support", values: ["Email", "Priority", "Dedicated automation lead"] },
  { feature: "30-day go-live guarantee", values: [true, true, true] },
];

/* ---------- Example usage figures ---------- */
/* Illustrative only, labelled as examples wherever shown. Replace ratePerMinute with your real rate when known. */
export const exampleUsage = { calls: 300, minutesPerCall: 3, ratePerMinute: 0.15, setup: 1200 };

/* ---------- What changes your price (pricing page) ---------- */
export const priceDrivers = [
  { title: "How many workflows", body: "Starter covers one and Growth up to three. Beyond that, workflows are scoped and priced on Scale." },
  { title: "Locations, lines and teams", body: "Starter and Growth cover one location and one phone line. More locations, lines or teams move you to Scale." },
  { title: "The systems we connect", body: "Popular tools with ready-made connections are quicker to set up than older or custom software. This mainly moves the one-time setup fee within its $500 to $2,000 range." },
  { title: "How busy you are", body: "Phone minutes, texts and AI usage are billed at cost on top of your plan, so a busier month costs a little more. Usage appears as its own line, so you can see exactly what it is." },
];

/* ---------- What counts as a workflow ---------- */
export const workflowExplainer = {
  definition:
    "A workflow is one job the system does from start to finish: one thing that starts it, the steps in between, and one outcome. Your plan sets how many of these we build and run.",
  examples: [
    { steps: ["Missed call", "Text back within seconds", "Collect the details", "Book, or alert your team"] },
    { steps: ["New website or ad lead", "Reply within a minute", "Follow up until they book or say no"] },
    { steps: ["Job marked complete", "Check-in message", "Review invitation, or alert a manager"] },
  ],
  included: [
    "Script edits, new questions and tuning as your business changes",
    "Connecting the calendar or CRM that a workflow needs",
    "Every channel the AI receptionist answers on (calls, chat and text count as one service on Growth and Scale)",
  ],
  extra: "A new workflow is a new starting event with a new outcome, such as adding reactivation campaigns to a booking setup.",
};

export const faqs = [
  {
    q: "Will it sound like a robot?",
    a: "No. We write the scripts with you, in your words, and test them with your team before launch. Callers are told they’re talking to a virtual assistant. Being honest about that builds more trust than pretending.",
  },
  {
    q: "What happens when the AI doesn’t know the answer?",
    a: "It says so and hands over. Before launch you approve the handoff rules: when to transfer live, when to take a message and when to alert someone urgently. Complaints, sensitive topics and anything that needs judgement go to a person.",
  },
  {
    q: "Do we need to replace our CRM or booking software?",
    a: "Usually not. We start with the tools you already use. If a system has an API, a booking link or an integration platform connection, we can usually work with it. We confirm this during the audit, before you commit.",
  },
  {
    q: "How long until it’s live?",
    a: "Most first workflows go live in about four weeks: a week to map it, two to build and test, then a careful launch. More complex integrations take longer, and we’ll tell you upfront.",
  },
  {
    q: "Who owns the data and accounts?",
    a: "You do. Phone numbers, CRM records, transcripts and scripts all sit in accounts you control. If you ever leave, nothing needs to be migrated back.",
  },
  {
    q: "What does it cost beyond the monthly fee?",
    a: "There’s a one-time setup fee of $500 to $2,000, depending on how many systems we connect, fixed in writing after the audit. Usage such as phone minutes and SMS is passed through at cost. There are no hidden extras.",
  },
  {
    q: "Which languages and countries do you support?",
    a: "We work with businesses worldwide. Conversations can run in most major languages, and we set up local phone numbers where carriers allow. Regulations differ by country, so we review messaging and privacy rules for your market during setup.",
  },
  {
    q: "What counts as a workflow?",
    a: "One job done from start to finish: one thing that starts it, the steps in between, and one outcome. For example, a missed call that gets a text back, a few questions and a booking is one workflow. Script edits, tuning and the connections a workflow needs are included, not counted separately.",
  },
  {
    q: "Can we start with just one workflow?",
    a: "Yes, and we recommend it. Starting with one workflow makes it easy to measure, easy to trust, and easy to expand once you can see it working.",
  },
];


/* ---------- Service detail pages (/services/[slug]) ---------- */

export type ServiceSample =
  | { kind: "chat"; header: string; caption: string; messages: { from: "customer" | "ai"; text: string }[]; outcome: string }
  | { kind: "log"; title: string; items: { label: string; value: string }[]; note: string };

export type ServiceDetail = {
  headline: string;
  image: string;
  imageAlt: string;
  steps: { title: string; body: string }[];
  fit: string[];
  faqs: { q: string; a: string }[];
  sample: ServiceSample;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-reception": {
    headline: "An AI receptionist that answers every call, chat and text",
    image: "/images/svc-phone-call.jpg",
    imageAlt: "A man taking a phone call at his office desk",
    steps: [
      { title: "It answers in seconds", body: "Calls, website chat, SMS and WhatsApp are picked up straight away, day or night, with a greeting in your business’s name." },
      { title: "It asks your questions", body: "What they need, where they are, how urgent it is. The script is written with you and approved before launch." },
      { title: "It books, routes or hands over", body: "Routine requests are booked or logged. Anything sensitive, unclear or upset goes to a person with a written summary." },
    ],
    fit: ["home-services", "dental-medspa", "automotive"],
    faqs: [
      { q: "Can callers tell it’s an AI?", a: "Yes. Callers are told at the start that they’re speaking with a virtual assistant. It’s more honest, and in a growing number of places it’s a legal requirement." },
      { q: "Can it transfer to a real person?", a: "Yes, on the rules you choose: on request, for complaints, for urgent jobs or during set hours. It can transfer live or create a call-back task with the full transcript." },
      { q: "Do we keep our phone number?", a: "Usually. Most setups forward your existing number, or just the calls nobody picks up, to the receptionist. We confirm what your phone provider supports during the audit." },
    ],
    sample: {
      kind: "chat",
      header: "Incoming call",
      caption: "Example: a new client calls a med spa",
      messages: [
        { from: "customer", text: "Hi, I’d like to book a consultation for laser hair removal." },
        { from: "ai", text: "Happy to help. Have you visited us before, or would this be your first appointment?" },
        { from: "customer", text: "First time." },
        { from: "ai", text: "Welcome. First consultations take 30 minutes. I have Wednesday at 5:15 pm or Saturday at 10 am. Which suits you?" },
        { from: "customer", text: "Saturday." },
        { from: "ai", text: "Booked for Saturday at 10 am. I’ve texted you the address and a short form to fill in beforehand." },
      ],
      outcome: "Booked: consultation, Saturday 10 am. Intake form sent.",
    },
  },
  "lead-follow-up": {
    headline: "Every lead gets a reply within a minute, and follow-up until it’s settled",
    image: "/images/svc-roofer.jpg",
    imageAlt: "A roofer working on top of a house, away from the phone",
    steps: [
      { title: "Every source in one place", body: "Web forms, ad leads, directory enquiries and missed calls land in one pipeline, each with its source attached." },
      { title: "A fast first reply", body: "The lead hears back within a minute by text or email, with a useful question rather than a generic “thanks for your enquiry”." },
      { title: "Follow-up that knows when to stop", body: "A short sequence over days or weeks, which stops the moment they reply, book or ask not to be contacted." },
    ],
    fit: ["real-estate", "home-services", "professional-services"],
    faqs: [
      { q: "Won’t follow-up annoy people?", a: "Not when it’s short and stops at the right time. Sequences are a few messages, spaced out and written in your voice, and every message makes it easy to opt out." },
      { q: "Which lead sources can you connect?", a: "Website forms, Facebook and Google lead ads, most directory and portal emails, and your phone line for missed calls. If a source can send an email or a webhook, it can usually be connected." },
      { q: "What about texting rules?", a: "Messaging rules vary by country. In the US, for example, business texting needs registered numbers and the customer’s consent. We set this up properly during onboarding." },
    ],
    sample: {
      kind: "chat",
      header: "Missed call",
      caption: "Example: text-back after a missed call",
      messages: [
        { from: "ai", text: "Hi, sorry we missed your call at Harbour Plumbing. What can we help with?" },
        { from: "customer", text: "Need a quote for a bathroom refit." },
        { from: "ai", text: "Great. Roughly what size is the bathroom, and are you keeping the same layout?" },
        { from: "customer", text: "Small, same layout." },
        { from: "ai", text: "Thanks. Our estimator can visit Thursday at 3 pm or Friday at 9 am. Would either work?" },
      ],
      outcome: "Estimate visit requested. Lead tagged: bathroom refit, missed call.",
    },
  },
  scheduling: {
    headline: "Booking, reminders and rescheduling, without the phone calls",
    image: "/images/svc-front-desk-checkin.jpg",
    imageAlt: "A client checking in at a salon front desk on a tablet",
    steps: [
      { title: "Real availability, your rules", body: "Customers see slots that respect job length, travel time, staff skills and the gaps you need between appointments." },
      { title: "Confirmations and reminders", body: "Sent at the times that suit your business, with a simple way to confirm or change." },
      { title: "Gaps get filled", body: "Cancellations are offered to the waitlist, and anyone who misses an appointment gets a polite message offering a new time." },
    ],
    fit: ["dental-medspa", "consumer-services", "automotive"],
    faqs: [
      { q: "Do we have to change booking software?", a: "Usually not. We work with your current calendar or booking system where it allows it. If it doesn’t, we’ll explain the options before you commit." },
      { q: "Can customers reschedule themselves?", a: "Yes, by replying to a text or using a link, within the rules you set, such as no changes within 24 hours of the appointment." },
      { q: "Can it take deposits?", a: "Where your booking or payment system supports deposits, we can add a payment link to the booking flow." },
    ],
    sample: {
      kind: "chat",
      header: "Appointment reminder",
      caption: "Example: a reminder turns into a reschedule",
      messages: [
        { from: "ai", text: "Hi Sam, a reminder of your appointment tomorrow at 2:30 pm. Reply C to confirm or R to reschedule." },
        { from: "customer", text: "R, something came up" },
        { from: "ai", text: "No problem. I can offer Thursday at 11 am or Friday at 4 pm. Which works?" },
        { from: "customer", text: "Friday" },
        { from: "ai", text: "Done. You’re booked for Friday at 4 pm. See you then." },
      ],
      outcome: "Rescheduled to Friday 4 pm. Original slot offered to the waitlist.",
    },
  },
  reactivation: {
    headline: "Bring back the customers you already have",
    image: "/images/gym.jpg",
    imageAlt: "Rows of dumbbells in a bright, empty gym",
    steps: [
      { title: "Find who’s due", body: "We look through your customer records for overdue services, open quotes and members who’ve stopped coming." },
      { title: "Reach out in your voice", body: "Short, personal messages with a clear reason to come back and an easy way to book." },
      { title: "Report what it brought in", body: "Every campaign is measured in bookings and revenue, so you can see whether it was worth it." },
    ],
    fit: ["home-services", "automotive", "consumer-services"],
    faqs: [
      { q: "Is it allowed to message past customers?", a: "It depends on where you operate and how the contact details were collected. We check consent and opt-out rules for your market before anything is sent." },
      { q: "How often do messages go out?", a: "Rarely. Reactivation works because it’s timely and relevant, not frequent. Most customers hear from you a few times a year at most." },
      { q: "What data do you need?", a: "A customer list with contact details and, ideally, the date of their last visit or service. An export from your CRM or booking system is enough to start." },
    ],
    sample: {
      kind: "chat",
      header: "Service reminder",
      caption: "Example: an annual service comes due",
      messages: [
        { from: "ai", text: "Hi Priya, it’s been about a year since your boiler service with us. Would you like to book this year’s check before winter?" },
        { from: "customer", text: "Yes, good idea. Anything next week?" },
        { from: "ai", text: "Tuesday at 10 am or Wednesday at 2 pm are free. Which suits you?" },
        { from: "customer", text: "Tuesday" },
        { from: "ai", text: "Booked for Tuesday at 10 am. You’ll get a reminder the day before." },
      ],
      outcome: "Annual service booked from a reactivation message.",
    },
  },
  reviews: {
    headline: "More reviews, and a fast alert when something went wrong",
    image: "/images/svc-phone-notification.jpg",
    imageAlt: "A smartphone showing a new message on its lock screen",
    steps: [
      { title: "A check-in after every job", body: "A short message asks how it went, sent while the experience is still fresh." },
      { title: "Everyone gets a review link", body: "Every customer is invited to leave a review. Nobody is filtered out, because Google and other platforms don’t allow it." },
      { title: "Problems reach a manager", body: "If someone replies that something went wrong, a manager is alerted within minutes, with the details, so it can be put right." },
    ],
    fit: ["consumer-services", "dental-medspa", "home-services"],
    faqs: [
      { q: "Do you only ask happy customers?", a: "No. Every customer gets the same invitation. Asking only happy customers breaks the rules of Google and other platforms and can put your profile at risk. What we add is a fast alert to a manager when someone reports a problem." },
      { q: "Which review sites can it use?", a: "Whichever matter in your market: Google, Facebook, Trustpilot, Yelp or an industry directory. You choose." },
      { q: "Can it ask for referrals too?", a: "Yes. Customers can be offered a referral link or code you already use, alongside the review invitation." },
    ],
    sample: {
      kind: "chat",
      header: "Post-visit check-in",
      caption: "Example: the message after a job",
      messages: [
        { from: "ai", text: "Hi Jordan, thanks for choosing us today. How did everything go?" },
        { from: "customer", text: "Really good, Marcus was great." },
        { from: "ai", text: "Glad to hear it, I’ll pass that on to Marcus. If you have a minute, a Google review helps other people find us: (review link)" },
        { from: "customer", text: "Will do!" },
      ],
      outcome: "Review invitation sent. Feedback shared with Marcus.",
    },
  },
  integrations: {
    headline: "Your CRM, calendar and job tools, kept in sync",
    image: "/images/svc-dashboard-laptop.jpg",
    imageAlt: "A laptop showing a dashboard of charts and figures",
    steps: [
      { title: "Map what you use", body: "We list every system involved and decide where each piece of customer information should live." },
      { title: "Connect and test", body: "Two-way connections with clear rules for which system owns which record, tested with real examples before launch." },
      { title: "Watch for errors", body: "Failed syncs alert us, not your customers. We fix them before they turn into a missed booking." },
    ],
    fit: ["professional-services", "real-estate", "home-services"],
    faqs: [
      { q: "Do you use Zapier?", a: "Sometimes. We use whatever suits the job: direct API connections, Make, Zapier or n8n. Either way, the accounts are in your name." },
      { q: "What if my software has no API?", a: "We’ll tell you during the audit. Sometimes reading notification emails or using a booking link works. Sometimes the honest answer is that it can’t be connected reliably." },
      { q: "Who maintains the connections?", a: "We do, as part of your plan. Software providers change things, and we keep watching so you don’t have to." },
    ],
    sample: {
      kind: "log",
      title: "Example sync log",
      items: [
        { label: "Website form submitted", value: "Contact created in CRM" },
        { label: "AI receptionist booked a visit", value: "Event added to Google Calendar" },
        { label: "Job marked complete", value: "Review invitation queued" },
        { label: "Invoice paid", value: "CRM deal marked won" },
      ],
      note: "Each step happens within seconds of the one before it.",
    },
  },
  "back-office": {
    headline: "Less data entry, and no more chasing paperwork",
    image: "/images/svc-paperwork.jpg",
    imageAlt: "Paperwork and a laptop on a desk, with someone taking notes",
    steps: [
      { title: "Intake that fills your systems", body: "Forms feed straight into your CRM or job system, so nothing gets typed in twice." },
      { title: "Documents collected automatically", body: "Secure upload links and polite reminders until everything is in." },
      { title: "Status updates without the calls", body: "Customers get an update at each stage, so they don’t need to ring and ask." },
    ],
    fit: ["professional-services", "real-estate", "automotive"],
    faqs: [
      { q: "Is document upload secure?", a: "We use established tools with encrypted upload and access controls, chosen with you based on how sensitive the documents are and the rules in your industry." },
      { q: "Can it send invoices?", a: "It can send reminders for invoices raised in your accounting software, with a payment link where your system supports one." },
      { q: "What reports do we get?", a: "A weekly email summary: new enquiries, bookings, documents still outstanding and anything that needs a person." },
    ],
    sample: {
      kind: "chat",
      header: "Document request",
      caption: "Example: collecting paperwork before an appointment",
      messages: [
        { from: "ai", text: "Hi Alex, we still need two documents before Friday’s appointment: photo ID and last year’s bank statement. You can upload them here: (secure link)" },
        { from: "customer", text: "Sent the ID, will find the statement tonight" },
        { from: "ai", text: "Thanks, your ID has arrived. I’ll check in tomorrow morning about the statement." },
      ],
      outcome: "1 of 2 documents received. Reminder scheduled for 9 am.",
    },
  },
  optimisation: {
    headline: "Automation that gets better after launch, not worse",
    image: "/images/svc-analytics.jpg",
    imageAlt: "A screen showing usage charts over the last seven days",
    steps: [
      { title: "We read the conversations", body: "Regular reviews of transcripts and exceptions to find where the system was unsure or got it wrong." },
      { title: "We tune scripts and rules", body: "Small changes, tested before they go live, as your services, prices and hours change." },
      { title: "We report what changed", body: "A monthly report on response times, bookings, handoffs and every adjustment we made." },
    ],
    fit: ["home-services", "dental-medspa", "consumer-services"],
    faqs: [
      { q: "Is this included in every plan?", a: "Yes. Ongoing care is part of every plan. How often we review conversations increases with the plan." },
      { q: "What if something breaks at night?", a: "Failures alert us automatically. Anything that can’t wait goes to your team, using the handoff rules you approved." },
      { q: "Can we change the scripts ourselves?", a: "Yes. Send us the change or ask for edit access. We test new wording against edge cases before it goes live." },
    ],
    sample: {
      kind: "log",
      title: "Example monthly report",
      items: [
        { label: "Enquiries answered", value: "412" },
        { label: "Median time to first reply", value: "34 seconds" },
        { label: "Bookings made", value: "96" },
        { label: "Handed to your team", value: "31" },
        { label: "Changes we made", value: "4 script updates, 1 new handoff rule" },
      ],
      note: "Illustrative figures. Your report shows your own numbers.",
    },
  },
};


/* ---------- Case studies (/case-studies) ---------- */
/* Add only real projects. The section, the nav link and the pages stay hidden while this list is empty. */

export type CaseStudy = {
  slug: string;
  client: string; // a business name, or a description such as "A three-van plumbing firm in Leeds" if the client prefers not to be named
  industry: string; // slug from `industries`
  image: string; // a photo of the client's business, ideally their own
  imageAlt: string;
  summary: string; // one sentence: what changed
  challenge: string;
  solution: string[];
  results: { label: string; before: string; after: string }[];
  timeline: string; // e.g. "Live in 3 weeks"
  quote?: { text: string; name: string; role: string }; // only with the client's written permission
};

export const caseStudies: CaseStudy[] = [];

/* ---------- AI receptionist vs hiring (/ai-receptionist-vs-hiring) ---------- */
export const hiringComparison = {
  rows: [
    { label: "Hours covered", person: "Working hours, about 40 a week per person", service: "Usually 24/7", ai: "24/7, including holidays" },
    { label: "Calls at the same time", person: "One", service: "Several, depending on staffing", ai: "As many as come in" },
    { label: "Books appointments in your calendar", person: "Yes", service: "Often takes a message only", ai: "Yes, following your rules" },
    { label: "Knows your business", person: "Best, after training", service: "Works from a script", ai: "Works from your approved script and answers" },
    { label: "Judgement, empathy, tricky situations", person: "Best", service: "Varies", ai: "Hands these to a person by design" },
    { label: "Follows up afterwards", person: "When there’s time", service: "Rarely", ai: "Every time, automatically" },
    { label: "How cost grows", person: "Another hire for more hours", service: "Per minute or per call", ai: "Fixed plan plus usage at cost" },
    { label: "Time to start", person: "Weeks to hire and train", service: "Days", ai: "About four weeks, guaranteed within 30 days" },
  ],
  personBetter: [
    "Most of your calls need judgement, negotiation or a long conversation.",
    "Callers expect to speak to the same familiar person every time.",
    "The role also covers in-person work, such as greeting visitors or handling payments at the desk.",
  ],
};

/* ---------- Security and data (/security) ---------- */
export const securityPage = {
  summary: [
    "Your data stays in accounts you own: your CRM, phone provider and calendar.",
    "Only named people working on your account can access it, with two-factor sign-in.",
    "We use AI providers whose business terms don’t allow training on your data.",
    "If you leave, you keep everything and we remove our access.",
  ],
  sections: [
    {
      h: "Where your data lives",
      p: "We build on accounts in your name wherever possible: your CRM, your phone and messaging provider, your calendar and your inbox. We are given access to them; we don’t own them. Call recordings, transcripts and contact records stay in those systems.",
    },
    {
      h: "Who can see it",
      p: "Only the people at INFOTECH working on your account, each named to you. Every account we use is protected with two-factor sign-in, and we give each person the least access their job needs. Access is reviewed regularly and removed the day an engagement ends.",
    },
    {
      h: "Encryption",
      p: "Data travels over encrypted connections (HTTPS and TLS). The providers we build on encrypt stored data. We don’t keep copies of your customer data on personal devices.",
    },
    {
      h: "AI models and your data",
      p: "We only use AI providers whose business terms don’t allow your conversations to be used to train their models, and we choose short or zero data retention where a provider offers it. The AI only sees the information it needs to handle a conversation.",
    },
    {
      h: "Call recordings and transcripts",
      p: "Recording is your choice. If you turn it on, recordings and transcripts are stored in your own phone or CRM account, for the period you set. You’re responsible for telling callers where the law requires it, and we set up the announcement for you.",
    },
    {
      h: "Healthcare, legal and financial businesses",
      p: "Our systems handle admin only. They never give medical, legal or financial advice, and anything that needs professional judgement goes to your team. If you handle regulated health information, such as protected health information in the US, we confirm during the audit that every provider involved will sign the agreements the rules require before we build anything.",
    },
    {
      h: "If something goes wrong",
      p: "If we find a security incident affecting your data, we tell you without undue delay, with what happened, what was affected and what we’re doing about it.",
    },
    {
      h: "When you leave",
      p: "Your accounts, numbers, scripts and records are already yours. We hand over anything we built, remove our access and delete any copies we hold.",
    },
  ],
};
