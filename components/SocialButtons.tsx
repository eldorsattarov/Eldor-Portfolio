import { CONTACTS } from "@/lib/data";
import { SOCIAL_ICONS } from "./icons";

export function SocialButtons() {
  return (
    <nav aria-label="Social" className="flex gap-1.5">
      {CONTACTS.map((c) => {
        const Icon = SOCIAL_ICONS[c.short];
        return (
          <a
            key={c.label}
            href={c.href}
            aria-label={c.label}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card/70 text-fg transition duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-accent hover:text-ink"
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}
