import type { ProjectKey } from "./i18n";

export const CONTACTS = [
  { label: "TELEGRAM", short: "TG", value: "@developer_ES", href: "https://t.me/developer_ES", external: true },
  { label: "EMAIL", short: "@", value: "imedik5979@gmail.com", href: "mailto:imedik5979@gmail.com", external: false },
  { label: "LINKEDIN", short: "IN", value: "in/eldor-sattarov", href: "https://www.linkedin.com/in/eldor-sattarov-5764a7234/", external: true },
  { label: "GITHUB", short: "GH", value: "github.com/eldorsattarov", href: "https://github.com/eldorsattarov", external: true },
] as const;

export const STACK_GROUPS = [
  { label: "FRONTEND", items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Ant Design", "i18next"] },
  { label: "BACKEND", items: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "REST API"] },
  { label: "MAPS · DATA", items: ["Google Maps API", "React Leaflet", "ApexCharts"] },
  { label: "TOOLS", items: ["Docker", "Git", "Vite", "Claude AI"] },
];

export const SERVICE_CHIPS = [
  ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Ant Design", "i18next"],
  ["Google Maps API", "React Leaflet", "GPS tracking"],
  ["ApexCharts", "BI dashboards", "KPI"],
  ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "REST API", "Telegram Mini App", "Docker"],
];

export const MARQUEE_1 = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Google Maps", "Telegram Mini App"];
export const MARQUEE_2 = ["Frontend", "Full-stack", "UI Engineering", "Dashboards", "Real-time", "BI"];

export type Project = {
  key: ProjectKey;
  title: string;
  window: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  { key: "aero", title: "AeroTech\nControl", window: "aerotechcontrol / dashboard", tech: ["Next.js", "TypeScript", "BI"] },
  { key: "cbu", title: "", window: "visitor-access / console", tech: ["React", "TypeScript", "Telegram Mini App"] },
  { key: "gps", title: "Airport\nGPS", window: "airport-gps / live-map", tech: ["React", "Google Maps API", "Leaflet"] },
  { key: "credit", title: "CreditAsia", window: "creditasia / applications", tech: ["React"] },
  { key: "face", title: "Face\nDetection", window: "face-detection / cameras", tech: ["React"] },
  { key: "bio", title: "BioControl", window: "biocontrol / access", tech: ["React"] },
];
