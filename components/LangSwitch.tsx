"use client";

import { motion } from "motion/react";
import { LANGS } from "@/lib/i18n";
import { useLang } from "./LangProvider";

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language" className="flex gap-1 rounded-full border border-line bg-card/70 p-1">
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(l)}
            className={`relative h-9 min-w-11 cursor-pointer rounded-full px-3 font-mono text-xs font-medium transition-colors ${
              active ? "text-ink" : "text-mute hover:text-fg"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{l.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
