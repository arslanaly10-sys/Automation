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
    short: "Asks for reviews at the right moment, and sends complaints to a manager before they go public.",
    body:
      "Once a job is done, customers get a short check-in. Happy customers are invited to leave a review or refer a friend. Anyone who isn’t happy is routed to a manager within minutes, while there is still time to put it right.",
    includes: [
      "Post-job check-in by text or email",
      "Review requests to the platforms that matter to you",
      "Unhappy replies escalated to a manager",
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
      { title: "Win-back and reviews", body: "A timely nudge for lapsed regulars and a review request after a great visit." },
    ],
    conversation: [
      { from: "customer", text: "Any chance of a cut and colour on Saturday?" },
      { from: "ai", text: "Saturday is busy, but Sophie has 10:30 am free, about two and a half hours. Want it?" },
      { from: "customer", text: "Perfect, yes." },
      { from: "ai", text: "You’re booked with Sophie at 10:30 am Saturday. I’ll send a reminder the day before." },
    ],
    outcome: "Booked: cut and colour with Sophie, Saturday 10:30 am.",
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
    a: "There’s a one-time setup fee, quoted after the audit, plus usage such as phone minutes and SMS, which we pass through at cost. There are no hidden extras.",
  },
  {
    q: "Which languages and countries do you support?",
    a: "We work with businesses worldwide. Conversations can run in most major languages, and we set up local phone numbers where carriers allow. Regulations differ by country, so we review messaging and privacy rules for your market during setup.",
  },
  {
    q: "Can we start with just one workflow?",
    a: "Yes, and we recommend it. Starting with one workflow makes it easy to measure, easy to trust, and easy to expand once you can see it working.",
  },
];
