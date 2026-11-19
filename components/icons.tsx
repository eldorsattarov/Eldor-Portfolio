type P = { size?: number; className?: string; strokeWidth?: number };
const base = (size: number, sw: number, className?: string) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  className, "aria-hidden": true,
});

export const IconTelegram = ({ size = 18, className, strokeWidth = 1.9 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);
export const IconMail = ({ size = 18, className, strokeWidth = 1.9 }: P) => (
  <svg {...base(size, strokeWidth, className)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const IconLinkedin = ({ size = 18, className, strokeWidth = 1.9 }: P) => (
  <svg {...base(size, strokeWidth, className)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-7" /><path d="M12 13a3 3 0 0 1 6 0v4" /></svg>
);
export const IconGithub = ({ size = 18, className, strokeWidth = 1.9 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
);
export const IconArrowUpRight = ({ size = 18, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
);
export const IconArrowRight = ({ size = 18, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);
export const IconArrowDown = ({ size = 18, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></svg>
);
export const IconHome = ({ size = 18, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" /></svg>
);
export const IconUser = ({ size = 17, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
);
export const IconCode = ({ size = 17, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
);
export const IconGrid = ({ size = 17, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
);
export const IconChat = ({ size = 17, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg>
);
export const IconCap = ({ size = 34, className, strokeWidth = 1.6 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>
);
export const IconCheck = ({ size = 13, className, strokeWidth = 3 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M5 12l5 5L20 7" /></svg>
);
export const IconX = ({ size = 12, className, strokeWidth = 3 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const IconDownload = ({ size = 18, className, strokeWidth = 2 }: P) => (
  <svg {...base(size, strokeWidth, className)}><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>
);

export const SOCIAL_ICONS = { TG: IconTelegram, "@": IconMail, IN: IconLinkedin, GH: IconGithub } as const;
