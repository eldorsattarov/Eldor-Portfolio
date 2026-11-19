"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { PROJECTS, type Project } from "@/lib/data";
import { useLang } from "./LangProvider";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { PANELS, Window } from "./panels";
import { IconArrowUpRight } from "./icons";

function StackCard({
  p,
  i,
  total,
  progress,
}: {
  p: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { t } = useLang();
  const info = t.projects[p.key];
  const Panel = PANELS[p.key];
  const targetScale = 1 - (total - i) * 0.035;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const title = p.key === "cbu" ? info.name ?? "" : p.title;

  return (
    <div className="lg:sticky" style={{ top: 40 + i * 24 }}>
      <motion.article
        style={{ scale }}
        className={`grid origin-top grid-cols-1 gap-8 rounded-[36px] border border-line p-6 shadow-[0_-24px_60px_rgba(0,0,0,0.5)] sm:p-10 lg:min-h-[520px] lg:grid-cols-2 lg:gap-10 ${
          i % 2 ? "bg-card-2" : "bg-card"
        }`}
      >
        <div className="flex flex-col gap-[18px]">
          <div className="flex justify-between font-mono text-[13px] text-dim">
            <span>
              0{i + 1} / 0{total}
            </span>
            <span className="text-accent">{info.domain}</span>
          </div>
          <h3 className="mt-auto font-display text-[clamp(36px,4.4vw,64px)] leading-none font-bold tracking-[-0.045em] whitespace-pre-line">
            {title}
          </h3>
          <p className="max-w-[460px] text-base leading-relaxed text-mute">{info.desc}</p>
          <dl className="flex max-w-[480px] flex-col gap-2.5 border-t border-line pt-4 text-[14px] leading-relaxed">
            <div className="flex gap-3">
              <dt className="w-[78px] shrink-0 pt-0.5 font-mono text-[10.5px] tracking-[0.08em] text-accent">{t.roleLabel}</dt>
              <dd className="text-soft">{t.projRole}</dd>
            </div>
            {info.result && (
              <div className="flex gap-3">
                <dt className="w-[78px] shrink-0 pt-0.5 font-mono text-[10.5px] tracking-[0.08em] text-accent">{t.resultLabel}</dt>
                <dd className="text-soft">{info.result}</dd>
              </div>
            )}
          </dl>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((x) => (
              <span key={x} className="rounded-lg border border-[rgba(237,237,234,0.16)] px-3 py-1.5 font-mono text-xs">
                {x}
              </span>
            ))}
          </div>
        </div>
        <Window title={p.window}>
          <Panel />
        </Window>
      </motion.article>
    </div>
  );
}

export function Work() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="mx-auto max-w-[1412px] px-[14px] pt-16 pb-24">
      <div className="px-[18px] pb-11">
        <SectionTitle title={t.workTitle} aside={<span className="max-w-[360px] text-[15px] text-mute">{t.workLead}</span>} />
      </div>

      <div ref={ref} className="flex flex-col gap-7">
        {PROJECTS.map((p, i) => (
          <StackCard key={p.key} p={p} i={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>

      {/* more projects */}
      <Reveal className="mt-7">
        <div
          className="flex flex-col gap-7 rounded-[36px] border border-dashed bg-panel p-6 sm:p-10"
          style={{ borderColor: "var(--accent-line)" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-7">
            <div className="flex min-w-0 flex-[1_1_520px] items-center gap-6">
              <motion.span
                aria-hidden
                initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className="inline-flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border font-display text-[44px] font-medium text-accent"
                style={{ background: "var(--accent-soft)", borderColor: "var(--accent-line)" }}
              >
                +
              </motion.span>
              <div className="flex min-w-0 flex-col gap-2.5">
                <h3 className="font-display text-[clamp(28px,3vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">{t.moreTitle}</h3>
                <p className="max-w-[640px] text-base leading-relaxed text-mute">{t.moreText}</p>
              </div>
            </div>
            <Magnetic>
              <a
                href="https://t.me/developer_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center gap-2.5 rounded-full border px-[26px] text-[15px] font-semibold text-accent transition hover:bg-accent hover:text-ink"
                style={{ borderColor: "var(--accent-line)" }}
              >
                {t.moreCta}
                <IconArrowUpRight />
              </a>
            </Magnetic>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-[rgba(237,237,234,0.08)] pt-6">
            {t.moreTags.map((x) => (
              <span key={x} className="rounded-full border border-[rgba(237,237,234,0.08)] bg-chip px-3.5 py-2 text-[13px] text-soft">
                {x}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
