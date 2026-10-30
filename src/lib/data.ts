import {
  BookOpenText,
  Briefcase,
  Code2,
  Cpu,
  Database,
  LayoutDashboard,
  ShieldCheck
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  liveUrl: string | null;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const HERO_ROLES = ["Full-Stack Developer", "ML Enthusiast", "Competitive Programmer"] as const;

export const HERO_BIO =
  "CSE undergrad at CMR Technical Campus, Hyderabad · 8.9 CGPA · 1700+ LeetCode · SIH Semi-Finalist";

export const ABOUT_TEXT =
  "I am a Computer Science undergraduate with hands-on experience in full-stack development, machine learning, and competitive programming. I interned at Tarento Technologies building React and Node.js applications, and I ship end-to-end web apps and ML systems with a focus on clean, scalable solutions.";

export const EDUCATION = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "CMR Technical Campus, Hyderabad",
  duration: "2023 – 2027",
  gpa: "8.9 CGPA"
} as const;

export const ABOUT_STATS: Stat[] = [
  { label: "LeetCode Rating", value: 1700, suffix: "+" },
  { label: "LeetCode Streak", value: 365, suffix: "+" },
  { label: "CGPA", value: 8.9, suffix: "" },
  { label: "Featured Projects", value: 4, suffix: "" }
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Languages", skills: ["Java", "Python", "JavaScript"] },
  {
    category: "Web",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express", "Redux Toolkit", "Next.js"]
  },
  {
    category: "Databases & Backend",
    skills: ["SQL", "MySQL", "MongoDB", "PostgreSQL", "Supabase", "JWT"]
  },
  { category: "AI / ML", skills: ["scikit-learn", "Pandas", "Random Forest", "TF-IDF"] },
  { category: "Tools", skills: ["Git", "GitHub", "Postman", "Cursor", "GitHub Copilot"] },
  { category: "Core", skills: ["DSA", "OOP", "Competitive Programming"] }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Tarento Technologies",
    role: "Software Development Intern",
    duration: "Feb 2026 – Mar 2026",
    points: [
      "Built and tested React.js UI components and integrated them with Node.js REST APIs.",
      "Validated backend API endpoints with Postman, identifying and reporting response issues.",
      "Collaborated on database and backend tasks in a real-world development environment."
    ]
  },
  {
    company: "Intel Club, CMR Technical Campus",
    role: "Executive Member",
    duration: "University Role",
    points: [
      "Organized and participated in technical events, workshops, and coding challenges to engage peers in emerging technologies."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "AI Finance Controller",
    description:
      "Multi-organization finance dashboard with Supabase Auth, Postgres, and Row Level Security. Includes transaction CRUD, CSV import/export, automatic categorization, anomaly detection, Razorpay payments, and Gemini-powered natural-language queries.",
    stack: ["React", "Supabase", "Razorpay", "Gemini API", "Postgres"],
    github: "https://github.com/Ajay-Kote/AI-FinanceController",
    liveUrl: "https://ai-financecontroller.onrender.com/",
    icon: LayoutDashboard
  },
  {
    name: "MERN Blog Platform",
    description:
      "Full-stack blog with JWT auth, CRUD, draft/publish workflow, comments, likes, and view tracking. Profiles include a stats dashboard, and the feed is paginated. Frontend on Vercel, backend on Render, MongoDB Atlas.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/Ajay-Kote/Mern-bolg",
    liveUrl: "https://blog-write-nti8.onrender.com/",
    icon: BookOpenText
  },
  {
    name: "CyberGuard",
    description:
      "AI-powered content moderation platform with React, Django REST Framework, and JWT. ML text classification scores toxicity and spam, including YouTube comment analysis, plus an admin dashboard for review, appeals, and analytics.",
    stack: ["React", "Django REST", "PostgreSQL", "scikit-learn", "YouTube API"],
    github: "https://github.com/Ajay-Kote/CyberGuard",
    liveUrl: "https://cyberguard-frontend-9roq.onrender.com/",
    icon: ShieldCheck
  },
  {
    name: "Food Delivery Web App",
    description:
      "Full-stack MERN platform with role-based dashboards, JWT auth, MongoDB Atlas, and Recharts analytics, deployed on Render.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Recharts"],
    github: "https://github.com/Ajay-Kote/Food-Delivery-App",
    liveUrl: null,
    icon: Database
  }
];

export const CERTIFICATIONS = [
  "Smart Coder Certification (DSA) — Smart Interviews",
  "Salesforce Platform Developer Certification",
  "Infosys Spring Boot Certification"
] as const;

export const ACHIEVEMENTS = [
  "Semi-Finalist, Smart India Hackathon (Top 15 of 100+ teams)",
  "365-Day LeetCode Badge · 1700+ contest rating",
  "CodeChef Diamond Badge"
] as const;

export const LEETCODE = {
  profile: "https://leetcode.com/u/akajaykote/",
  streak: "365-Day Streak Badge",
  rating: "1700+ Contest Rating"
} as const;

export const RESUME_PATH = "/Ajay_Kote_Resume.pdf";

export const CONTACT = {
  email: "akajaykote@gmail.com",
  linkedin: "https://linkedin.com/in/ajay-kote-03717b290",
  github: "https://github.com/Ajay-Kote",
  location: "Hyderabad, India"
};

export const SOCIALS = [
  { href: CONTACT.github, label: "GitHub", icon: Code2 },
  { href: CONTACT.linkedin, label: "LinkedIn", icon: Briefcase },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: Cpu }
] as const;
