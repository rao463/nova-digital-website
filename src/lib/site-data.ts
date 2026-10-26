// All editable site content lives here. Change text, images, and links in one place.
import {
  Code2,
  Compass,
  Gem,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", hash: "top" },
  { label: "Services", hash: "services" },
  { label: "Projects", hash: "projects" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const;

export const CONTACT_INFO = {
  email: "hello@novadigital.example",
  phone: "+1 (555) 014-2290",
  location: "Remote studio, working worldwide",
} as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
] as const;

export type Service = { title: string; description: string; icon: LucideIcon };

export const SERVICES: Service[] = [
  {
    title: "Web Design",
    description: "Modern, user-friendly interfaces designed around customer needs.",
    icon: LayoutTemplate,
  },
  {
    title: "Web Development",
    description: "Responsive, fast, and accessible websites built with modern technologies.",
    icon: Code2,
  },
  {
    title: "Brand Identity",
    description: "Consistent visual identities that help businesses stand out.",
    icon: Gem,
  },
  {
    title: "Digital Strategy",
    description: "Practical digital solutions that support business goals.",
    icon: Compass,
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  palette: { name: string; hex: string }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  year: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "bloom-studio",
    name: "Bloom Studio",
    category: "Branding & Website Design",
    description: "A stylish website for a fictional creative studio.",
    image: "https://hercules-cdn.com/file_VqnCDqzRG05po6vIwdA45OLR",
    palette: [
      { name: "Cream", hex: "#F4EEDF" },
      { name: "Forest", hex: "#2F5D46" },
      { name: "Charcoal", hex: "#2B2B2B" },
    ],
    challenge:
      "A boutique creative studio needs an online presence that feels as considered as its work, without overwhelming visitors.",
    solution:
      "An editorial layout with generous whitespace, botanical accents, and a calm color system that lets portfolio pieces take center stage.",
    deliverables: ["Logo & visual identity", "Website design", "Responsive build"],
    year: "2026",
  },
  {
    slug: "elevate-fitness",
    name: "Elevate Fitness",
    category: "Fitness & Wellness",
    description:
      "A modern fitness website featuring programs, trainers, and membership options.",
    image: "https://hercules-cdn.com/file_gOAxQaVXiucrIcDQFmhI8aKA",
    palette: [
      { name: "Black", hex: "#0E0E0E" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Orange", hex: "#FF6A1A" },
    ],
    challenge:
      "A gym concept wants to convert visitors into members by making programs and pricing easy to compare.",
    solution:
      "A bold, high-contrast design with clear program cards, trainer profiles, and a simple three-tier membership table.",
    deliverables: ["UX structure", "Website design", "Membership flow"],
    year: "2026",
  },
  {
    slug: "purely-market",
    name: "Purely Market",
    category: "E-commerce",
    description:
      "A clean online store concept for a fictional organic skincare brand.",
    image: "https://hercules-cdn.com/file_fbYPekS3hllys1QYvXvUL5CH",
    palette: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sage", hex: "#9CAF88" },
      { name: "Beige", hex: "#E8DCC8" },
    ],
    challenge:
      "An organic skincare brand needs a store that communicates purity and trust while keeping shopping effortless.",
    solution:
      "A soft, minimal storefront with ingredient-first product pages, a focused product grid, and a quick checkout path.",
    deliverables: ["E-commerce design", "Product page system", "Responsive build"],
    year: "2026",
  },
];

export const PRINCIPLES = [
  "User-focused design",
  "Clean, maintainable development",
  "Responsive and accessible experiences",
] as const;

export const PROCESS_STEPS = [
  { title: "Discover", description: "Understand the client's goals and requirements." },
  { title: "Plan", description: "Define the structure, content, and visual direction." },
  { title: "Build", description: "Develop and test the website across screen sizes." },
  { title: "Launch", description: "Review the final result and prepare the website for delivery." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Nova Digital turned a loose idea into a clear, beautiful website. Every detail felt intentional, and the process was easy to follow.",
    name: "Maya Thompson",
    role: "Founder, sample company",
  },
  {
    quote:
      "The new site loads fast, looks great on every device, and finally explains what we do in plain language.",
    name: "Daniel Reyes",
    role: "Marketing Lead, sample company",
  },
] as const;

export const PROJECT_TYPES = [
  "Web Design",
  "Web Development",
  "Brand Identity",
  "Digital Strategy",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
] as const;
