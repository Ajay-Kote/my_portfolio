import {
  BookOpenText,
  Briefcase,
  Clapperboard,
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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const HERO_ROLES = ["Full-Stack Developer", "ML Enthusiast", "Competitive Programmer"] as const;

export const HERO_BIO =
  "CSE undergrad at CMR Technical Campus · 365-Day LeetCode Streak · 1600+ Rating";

export const ABOUT_TEXT =
  "I build performant digital products with a strong systems mindset. My work blends full-stack engineering, practical machine learning, and competitive programming discipline to ship reliable software fast.";

export const ABOUT_STATS: Stat[] = [
  { label: "LeetCode Streak", value: 365, suffix: "+" },
  { label: "Major Projects", value: 4, suffix: "+" },
  { label: "Internship Months", value: 2, suffix: "+" },
  { label: "LeetCode Rating", value: 1600, suffix: "+" }
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Languages", skills: ["Java", "Python", "JavaScript"] },
  { category: "Web", skills: ["React.js", "Node.js", "HTML", "CSS", "MongoDB", "Next.js"] },
  { category: "Tools", skills: ["Git", "GitHub", "Postman", "Flutter"] },
  { category: "AI / ML", skills: ["scikit-learn", "Machine Learning"] },
  { category: "Other", skills: ["DSA", "Competitive Programming", "CCNA"] }
];

export const EXPERIENCE: ExperienceItem = {
  company: "Tarento Technologies",
  role: "Software Development Intern",
  duration: "Feb 2025 - March 2025",
  points: [
    "React.js and Node.js feature development across production modules.",
    "Backend API integration and endpoint validation using Postman.",
    "Hands-on collaboration in a real-world software delivery workflow."
  ]
};

export const PROJECTS: Project[] = [
  {
    name: "CyberGuard (IOMP Project)",
    description:
      "Django cyberbullying detection system with four ML classifiers, TF-IDF vectorization on an 11k tweets dataset, and graduated intervention workflows.",
    stack: ["Django", "Python", "ML", "TF-IDF", "NLP"],
    github: "https://github.com/Ajay-Kote/IOMP-project",
    liveUrl: null,
    icon: ShieldCheck
  },
  {
    name: "Food Delivery Web App",
    description:
      "Full-stack MERN platform with four role-based dashboards, JWT auth, MongoDB Atlas, and Recharts analytics deployed on Render.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Recharts"],
    github: "https://github.com/Ajay-Kote/Food-Delivery-App",
    liveUrl: null,
    icon: Database
  },
  {
    name: "Blog App (MERN)",
    description:
      "Full-stack blog platform with rich text editor, user authentication, CRUD operations for posts, and a clean reading experience built on the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Ajay-Kote/Mern-bolg",
    liveUrl: "https://blog-write-nti8.onrender.com/",
    icon: BookOpenText
  },
  {
    name: "Finance Dashboard UI",
    description:
      "Role-based Admin/Viewer dashboard with dark/light mode, transaction management, and analytics-driven UI architecture.",
    stack: ["React", "Vite", "Tailwind", "Recharts"],
    github: "https://github.com/Ajay-Kote/Finance_Dashboard_UI",
    liveUrl: "https://finance-dashboard-ui-ten-chi.vercel.app/",
    icon: LayoutDashboard
  },
  {
    name: "Student Performance Predictor",
    description:
      "ML-powered GPA prediction system using SVM, Random Forest, Logistic Regression, and custom Ensemble model with an interactive Tkinter GUI for real-time visualization.",
    stack: ["Python", "scikit-learn", "Tkinter", "ML", "Ensemble"],
    github: "https://github.com/Ajay-Kote/RTRP-project",
    liveUrl: null,
    icon: Code2
  },
  {
    name: "MovieVerse",
    description: "A movie discovery web app built with JavaScript.",
    stack: ["JavaScript", "Web APIs", "UI/UX"],
    github: "https://github.com/Ajay-Kote/MovieVerse",
    liveUrl: null,
    icon: Clapperboard
  }
];

export const CERTIFICATIONS = [
  "CCNA (Cisco)",
  "Smart Coder DSA",
  "Salesforce Agentforce",
  "Infosys Spring Boot"
] as const;

export const ACHIEVEMENTS = [
  "1600+ LeetCode Rating",
  "365-Day Streak Badge",
  "CodeChef Diamond Badge"
] as const;

export const LEETCODE = {
  profile: "https://leetcode.com/u/akajaykote/",
  streak: "365-Day Streak Badge",
  rating: "1600+ Rating"
} as const;

export const CONTACT = {
  email: "akajaykote@gmail.com",
  linkedin: "https://linkedin.com/in/ajay-kote-03717b290",
  github: "https://github.com/Ajay-Kote"
};

export const SOCIALS = [
  { href: CONTACT.github, label: "GitHub", icon: Code2 },
  { href: CONTACT.linkedin, label: "LinkedIn", icon: Briefcase },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: Cpu }
] as const;
