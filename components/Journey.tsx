"use client";

import { motion } from "motion/react";
import { useLang } from "./LangProvider";
import { SectionTitle } from "./SectionTitle";

export function Journey() {
  const { t } = useLang();
  const items = t.journey;

  return (
    <section id="journey" className="mx-auto flex max-w-[1320px] flex-col gap-12 px-5 pt-12 pb-28 sm:px-8">
      <SectionTitle title={t.journeyTitle} index="(04)" />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* animated timeline line */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.77, 0, 0.18, 1] }}
          className="absolute inset-x-0 top-0 hidden h-px origin-left bg-[rgba(237,237,234,0.25)] lg:block"
        />
        {items.map((j, i) => {
          const last = i === items.length - 1;
          return (
            <motion.div
              key={j.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex flex-col gap-2.5 border-t border-[rgba(237,237,234,0.2)] pt-9 pr-7 pb-10 lg:border-t-0"
            >
              <span
                aria-hidden
                className={`absolute -top-2 left-0 h-[15px] w-[15px] rounded-full ${
                  last ? "pulse-dot bg-accent" : "border-2 border-[rgba(237,237,234,0.6)] bg-ink"
                }`}
              />
              <span className={`font-display text-5xl leading-none font-bold tracking-[-0.05em] ${last ? "text-accent" : ""}`}>{j.year}</span>
              <span className="font-mono text-xs tracking-[0.06em] text-dim">{j.date}</span>
              <h3 className="mt-1.5 font-display text-[21px] font-semibold tracking-[-0.01em]">{j.title}</h3>
              <span className="text-sm text-soft">{j.place}</span>
              <p className="mt-1 text-sm leading-relaxed text-mute">{j.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
