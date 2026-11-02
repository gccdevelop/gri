import {
  HeartHandshake,
  Sprout,
  Hammer,
  PackageOpen,
  Activity,
  Network,
  Banknote,
  Lightbulb,
  Users,
  Wrench,
  Building2,
  GraduationCap,
  Share2,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";

/** Set NEXT_PUBLIC_SITE_URL at deployment time. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.org";

export const org = {
  shortName: "GRI",
  name: "Great Revivalist International CIC",
  registeredName: "The Great Revivalist International CIC",
  tagline: "Communities Empowered. Lives Transformed.",
  pillars: ["Community", "Inclusion", "Opportunity", "Wellbeing"],
  description:
    "Great Revivalist International CIC (GRI) is a UK-registered Community Interest Company strengthening community wellbeing, inclusion and opportunity. Open to people of all backgrounds and beliefs.",
  institutional: {
    registeredName: "The Great Revivalist International CIC",
    legalStatus: "Community Interest Company, England and Wales",
    companyNumber: "15856954",
    incorporated: "24 July 2024",
    registeredOffice: "167–169 Great Portland Street, 5th Floor, London W1W 5PF",
    geographicFocus: "UK community programmes, with scope for international partnerships",
  },
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/community-initiatives", label: "Community" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/accountability", label: "Accountability" },
] as const;

export const cta = { href: "/get-involved", label: "Get involved" };

export type Programme = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
  accent: "ochre" | "terracotta" | "forest";
  related: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    slug: "community-engagement",
    title: "Community Engagement, Wellbeing and Social Inclusion",
    summary: "Reducing isolation and connecting people with support and opportunity.",
    description:
      "Supporting locally identified needs, reducing isolation and connecting people with essential support and opportunities. Sport, music, storytelling, creative arts, festivals and inclusive events help to foster relationships, nurture talent and strengthen social connections.",
    includes: ["Sport", "Music", "Storytelling", "Creative arts", "Festivals", "Inclusive events"],
    icon: HeartHandshake,
    accent: "terracotta",
    related: { label: "See activities undertaken in West London", href: "/community-initiatives#undertaken" },
  },
  {
    slug: "youth-development",
    title: "Youth Development and Mentorship",
    summary: "Confidence, leadership and routes into education and work.",
    description:
      "Empowering young people to build confidence, develop leadership and essential life skills, and foster positive relationships, while opening access to opportunities in education, vocational training, professional development, employment and entrepreneurship.",
    includes: ["Confidence", "Leadership", "Life skills", "Education", "Vocational training", "Employment", "Entrepreneurship"],
    icon: Sprout,
    accent: "ochre",
    related: { label: "Structured mentorship: our plans", href: "/community-initiatives#planned" },
  },
  {
    slug: "skills-capacity",
    title: "Skills Development, Capacity Building and Opportunity",
    summary: "Practical skills, digital inclusion and access to learning.",
    description:
      "Connecting individuals and community groups and strengthening their capabilities through practical skills, digital inclusion, mentoring, professional expertise and access to learning and economic opportunities.",
    includes: ["Practical skills", "Digital inclusion", "Mentoring", "Professional expertise", "Learning", "Economic opportunity"],
    icon: Hammer,
    accent: "forest",
    related: { label: "Skills pathways: our plans", href: "/community-initiatives#planned" },
  },
  {
    slug: "practical-assistance",
    title: "Practical Assistance and Resource Mobilisation",
    summary: "Donations, volunteers and in-kind resources, shared with dignity.",
    description:
      "Mobilising donations, volunteers and in-kind resources to respond to hardship with dignity and appropriate safeguards.",
    includes: ["Donations", "Volunteers", "In-kind resources", "Safeguards"],
    icon: PackageOpen,
    accent: "terracotta",
    related: { label: "Resource donation initiatives: our plans", href: "/community-initiatives#planned" },
  },
  {
    slug: "health-awareness",
    title: "Health Awareness and Healthy Living",
    summary: "Community information and advocacy on healthy lifestyles.",
    description:
      "Promoting awareness of healthy lifestyles and non-communicable diseases through community information, advocacy and collaboration with appropriate health professionals and organisations.",
    includes: ["Healthy lifestyles", "Non-communicable diseases", "Community information", "Advocacy", "Health partners"],
    icon: Activity,
    accent: "forest",
    related: { label: "Health and specialist partners", href: "/partnerships" },
  },
  {
    slug: "professional-networking",
    title: "Professional Networking and Career Connections",
    summary: "Networking, career conversations and knowledge-sharing across generations.",
    description:
      "Convening inclusive professional networking events, career conversations and knowledge-sharing forums that connect professionals, entrepreneurs, graduates, jobseekers and community members. These events aim to encourage mentorship, peer learning, collaboration, access to opportunities and meaningful professional relationships across sectors and generations.",
    includes: ["Networking events", "Career conversations", "Knowledge-sharing forums", "Mentorship", "Peer learning"],
    icon: Network,
    accent: "ochre",
    related: { label: "Offer your expertise", href: "/get-involved#volunteer" },
  },
];

export const values = [
  { title: "Compassion and service", text: "Responding with empathy, respect and practical action." },
  { title: "Human dignity, equity and inclusion", text: "Recognising the value of every person and promoting fair access." },
  { title: "Integrity and accountability", text: "Managing resources responsibly and working transparently." },
  { title: "Hope and empowerment", text: "Encouraging people to recognise their potential and build confidence." },
  { title: "Partnership and collaboration", text: "Working collectively to achieve meaningful change." },
  { title: "Responsiveness", text: "Listening to local priorities and adapting to identified needs." },
  { title: "Safeguarding and responsible stewardship", text: "Promoting safe participation and responsible use of resources." },
];

export const principles = [
  "Community participation and ownership",
  "Compassion in action",
  "Equitable access",
  "Philanthropy and volunteerism",
  "Evidence-informed responsiveness",
  "Safeguarding",
  "Sustainability",
  "Continuous learning",
];

export const undertaken = [
  "Communal cooking",
  "Storytelling",
  "Companionship",
  "Football",
  "Wider community outreach",
];

export const planned = [
  "Resource donation initiatives",
  "Structured mentorship",
  "Skills pathways",
  "Further community-based programmes",
];

export const partnerTypes = [
  "Local authorities",
  "Philanthropists",
  "Businesses",
  "Charitable foundations",
  "Educational institutions",
  "Health and specialist organisations",
  "Community groups",
  "Volunteers",
  "Individual supporters",
];

export const contributions: { title: string; icon: LucideIcon }[] = [
  { title: "Funding, grants and donations", icon: Banknote },
  { title: "Professional expertise and specialist advice", icon: Lightbulb },
  { title: "Volunteers and community champions", icon: Users },
  { title: "Equipment, materials and essential resources", icon: Wrench },
  { title: "Facilities, venues and community spaces", icon: Building2 },
  { title: "Training, mentoring and skills development", icon: GraduationCap },
  { title: "Referrals, service connections and joint programme delivery", icon: Share2 },
  { title: "Collaborative learning and impact development", icon: BookOpenCheck },
];

export const partnershipPrinciples = [
  "Shared objectives",
  "Community benefit",
  "Mutual respect",
  "Safeguarding",
  "Transparent stewardship",
  "A commitment to learning and improvement",
];
