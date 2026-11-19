"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SERVICE_CHIPS } from "@/lib/data";
import { useLang } from "./LangProvider";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

export function Skills() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="skills" className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 pt-12 pb-24 sm:px-8">
      <SectionTitle title={t.skillsTitle} aside={<span className="max-w-80 text-[15px] text-mute">{t.skillsLead}</span>} />

      <div className="flex flex-col border-t border-[rgba(237,237,234,0.18)]">
        {t.services.map(([title, desc], i) => {
          const isOpen = open === i;
          return (
            <Reveal key={title} delay={i * 0.05}>
              <div
                onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(i)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(null)}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`cursor-pointer rounded-[20px] border-b border-line px-2 py-7 transition-[background-color,padding] duration-500 ${
                  isOpen ? "bg-card sm:px-9" : ""
                }`}
              >
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="w-10 font-mono text-sm text-dim">0{i + 1}</span>
                  <span
                    className={`flex-1 font-display text-[clamp(24px,3vw,42px)] font-semibold tracking-[-0.03em] transition-colors duration-300 ${
                      isOpen ? "text-accent" : ""
                    }`}
                  >
                    {title}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? -45 : 0 }} className={isOpen ? "text-accent" : ""}>
                    <IconArrowRight size={32} strokeWidth={1.8} />
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3.5 pt-4 pl-[60px] sm:pl-[68px]">
                        <p className="max-w-[640px] text-base leading-relaxed text-mute">{desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {SERVICE_CHIPS[i].map((c, k) => (
                            <motion.span
                              key={c}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 + k * 0.03 }}
                              className="rounded-full border px-3 py-1.5 font-mono text-xs text-accent"
                              style={{ borderColor: "var(--accent-line)" }}
                            >
                              {c}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
