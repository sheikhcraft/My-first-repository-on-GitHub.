export const club = {
  name: "UCL Boxing",
  tagline: "Building boxers since 2010",
  president: "Artem Ciumac",
  email: "zceicui@ucl.ac.uk",
  instagram: "https://www.instagram.com/uclboxing/",
  instagramHandle: "@uclboxing",
  whatsapp: "https://chat.whatsapp.com/Dqhr6uiVXZt9qxwArdo9We",
  suPage: "https://studentsunionucl.org/clubs-societies/amateur-boxing-club",
  suShop: "https://studentsunionucl.org/shop",
  suWhatsOn: "https://studentsunionucl.org/whats-on",
  participationFund:
    "https://studentsunionucl.org/advice-and-support/support/participation-fund-contact-form",
  venue: "Bloomsbury Fitness, Mandela Studio, 15 Gordon St, London WC1H 0AH",
  formspreeEndpoint: "[FORMSPREE_ENDPOINT]",
};

export type PricingTier = {
  name: string;
  price: string;
  note: string;
  recommended?: boolean;
};

export const pricing: PricingTier[] = [
  { name: "Taster", price: "Free", note: "Try any beginner or intermediate session" },
  { name: "Full membership", price: "£44.99", note: "Whole academic year", recommended: true },
  { name: "Term 2/3 membership", price: "£35", note: "Joining later in the year" },
];

export const sessionFee = "£2.49 for some coached sessions";

export type SessionLevel = "beginner" | "intermediate" | "squad";

export type Session = {
  day: string;
  time: string;
  type: string;
  venue: string;
  level: SessionLevel;
  capacity: number;
};

export const schedule: Session[] = [
  { day: "Monday", time: "8:30–10:00pm", type: "Beginners & Intermediates", venue: "Mandela Studio", level: "beginner", capacity: 30 },
  { day: "Wednesday", time: "7:30–8:30pm", type: "Beginners & Boxing Fitness", venue: "Mandela Studio", level: "beginner", capacity: 30 },
  { day: "Wednesday", time: "8:30–9:30pm", type: "Intermediate", venue: "Mandela Studio", level: "intermediate", capacity: 30 },
  { day: "Friday", time: "6:00–8:00pm", type: "Squad (invite only)", venue: "St Pancras ABC", level: "squad", capacity: 15 },
  { day: "Sunday", time: "2:00–4:00pm", type: "Squad (invite only)", venue: "202A Kensington High Street", level: "squad", capacity: 15 },
];

export type Coach = { name: string; role: string; bio: string };

export const coaches: Coach[] = [
  { name: "Charlie", role: "Head Coach", bio: "10+ years coaching, 20+ bouts. Specialises in solid boxing mechanics." },
];

export type CommitteeMember = {
  role: string;
  name?: string;
  bio?: string;
};

export const committee: CommitteeMember[] = [
  { role: "President", name: club.president },
  ...coaches.map((coach) => ({ role: coach.role, name: coach.name, bio: coach.bio })),
  { role: "Treasurer" },
  { role: "Secretary" },
  { role: "Welfare Officer" },
  { role: "Social Secretary" },
];

export const comparison = {
  gym: {
    title: "Commercial gym",
    price: "£40+ a month",
    points: [
      { label: "No coach", included: false },
      { label: "Train alone", included: false },
    ],
  },
  club: {
    title: club.name,
    price: "£44.99 a year",
    points: [
      { label: "Coached sessions", included: true },
      { label: "Like-minded students", included: true },
      { label: "5 min from the Main Quad", included: true },
    ],
  },
  callout: "A full year costs about the same as one month at a commercial gym.",
};

export const faqs = [
  { question: "Do I need experience?", answer: "No, beginner sessions are built for complete beginners." },
  { question: "Will I have to spar?", answer: "No, sparring is for squad members only." },
  { question: "What kit do I need?", answer: "Nothing for your taster; gloves recommended and hand wraps required after that." },
  { question: "How do I book a session?", answer: "Through the SU What’s On page; spaces are limited to 30." },
  { question: "Can I join later in the year?", answer: "Yes, Term 2/3 membership is £35." },
  { question: "Is there help with costs?", answer: "Yes, the SU Participation Fund." },
  { question: "Are there women’s-only sessions?", answer: "Yes, newly launched, for all levels." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Join" },
  { href: "/join#timetable", label: "Timetable" },
  { href: "/contact", label: "Contact" },
];

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
