"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACTS, STACK_GROUPS } from "@/lib/data";
import { useLang } from "./LangProvider";
import { useTashkentClock } from "./useClock";
import { SectionTitle } from "./SectionTitle";
import { IconCap, IconDownload } from "./icons";

const tile =
  "rounded-[28px] border border-line bg-card transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-[rgba(237,237,234,0.26)]";

function Tile({ className = "", delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={`${tile} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const { t } = useLang();
  const clock = useTashkentClock();

  return (
    <section id="about" className="mx-auto flex max-w-[1320px] flex-col gap-10 px-5 pt-28 pb-20 sm:px-8">
      <SectionTitle title={t.navAbout} index="(01)" />

      <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* bio */}
        <Tile className="flex flex-col justify-between gap-7 p-7 sm:col-span-2 sm:p-9 lg:row-span-2">
          <div className="flex items-center gap-3.5">
            <Image
              src="/images/eldor.jpg"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border-2 border-accent object-cover object-[50%_22%]"
            />
            <span className="flex flex-col">
              <span className="font-display text-[17px] font-semibold">Eldor Sattarov</span>
              <span className="text-[13px] text-mute">{t.role} · React / Next.js</span>
            </span>
          </div>
          <h3 className="font-display text-[clamp(28px,2.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.03em]">
            {t.aboutTitle}
          </h3>
          <div className="flex flex-col gap-3.5 text-base leading-[1.7] text-mute">
            <p>{t.about1}</p>
            <p>{t.about2}</p>
            <div className="flex flex-wrap gap-2 pt-1.5">
              <a
                href="/cv/Eldor-Sattarov-CV.pdf"
                download
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-4 text-[13px] font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <IconDownload size={15} />
                {t.cv}
              </a>
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-chip px-3.5 text-[13px] text-fg transition hover:-translate-y-0.5 hover:border-transparent hover:bg-accent hover:text-ink"
                >
                  <span className="font-mono text-[11px] text-accent">{c.short}</span>
                  {c.value}
                </a>
              ))}
            </div>
          </div>
        </Tile>

        {/* experience */}
        <Tile delay={0.05} className="!border-transparent !bg-accent flex flex-col justify-between p-7 text-ink">
          <span className="font-mono text-xs font-medium tracking-[0.08em]">{t.expLabel}</span>
          <span className="font-display text-[112px] font-bold leading-[0.85] tracking-[-0.06em]">6+</span>
          <span className="text-[15px] font-medium">{t.expSub}</span>
        </Tile>

        {/* clock */}
        <Tile delay={0.1} className="flex flex-col justify-between p-7">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-dim">
            <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-accent" />
            {t.clockLabel}
          </span>
          <span className="font-display text-[72px] font-semibold leading-none tracking-[-0.05em]">{clock}</span>
          <span className="text-[15px] text-mute">{t.city} · UTC+5</span>
        </Tile>

        {/* education */}
        <Tile delay={0.05} className="flex flex-col justify-between gap-4 p-7">
          <IconCap className="text-accent" />
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs tracking-[0.08em] text-dim">{t.eduLabel} · 2018–2022</span>
            <span className="font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.02em]">{t.eduName}</span>
            <span className="text-sm text-mute">Software Engineering</span>
          </div>
        </Tile>

        {/* languages */}
        <Tile delay={0.1} className="flex flex-col justify-between gap-4 p-7">
          <span className="font-mono text-xs tracking-[0.08em] text-dim">{t.langLabel}</span>
          <div className="flex gap-2">
            {["UZ", "RU", "EN"].map((l) => (
              <span key={l} className="flex-1 rounded-[14px] bg-[#161D29] py-3.5 text-center font-display text-2xl font-semibold">
                {l}
              </span>
            ))}
          </div>
          <span className="text-sm text-mute">{t.langSub}</span>
        </Tile>

        {/* code */}
        <Tile className="flex flex-col overflow-hidden sm:col-span-2">
          <div className="flex items-center gap-2 border-b border-[rgba(237,237,234,0.08)] px-5 py-3.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-[11px] w-[11px] rounded-full bg-[#323B4B]" />
            ))}
            <span className="ml-2.5 font-mono text-xs text-dim">eldor.ts</span>
          </div>
          <pre className="overflow-x-auto px-6 py-5 font-mono text-[13.5px] leading-[1.8] text-soft">
            <span className="text-[#8FB8FF]">const</span> eldor = {"{"}
            {"\n  "}role: <span className="text-accent">&quot;Middle+ Frontend Engineer&quot;</span>,
            {"\n  "}also: <span className="text-accent">&quot;Full-stack&quot;</span>,
            {"\n  "}stack: [<span className="text-accent">&quot;React&quot;</span>, <span className="text-accent">&quot;Next.js&quot;</span>, <span className="text-accent">&quot;NestJS&quot;</span>, <span className="text-accent">&quot;PostgreSQL&quot;</span>],
            {"\n  "}experience: <span className="text-amber">6</span>,
            {"\n  "}openToWork: <span className="text-[#8FB8FF]">true</span>,
            {"\n"}{"};"}
            {"\n"}
            <span className="text-dim">// </span>
            <span className="typed text-dim">building the next big thing...</span>
            <span className="caret text-accent">▍</span>
          </pre>
        </Tile>

        {/* stack */}
        <Tile delay={0.05} className="flex flex-col gap-4 p-7 sm:col-span-2">
          <span className="font-mono text-xs tracking-[0.08em] text-dim">{t.stackLabel}</span>
          <div className="flex flex-col gap-2.5">
            {STACK_GROUPS.map((g) => (
              <div key={g.label} className="flex flex-wrap items-center gap-2">
                <span className="w-[84px] shrink-0 font-mono text-[10px] tracking-[0.08em] text-dim">{g.label}</span>
                {g.items.map((x, i) => (
                  <motion.span
                    key={x}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ y: -3 }}
                    className="rounded-full border px-3 py-[7px] text-[13px] font-medium text-accent"
                    style={{ background: "var(--accent-soft)", borderColor: "var(--accent-line)" }}
                  >
                    {x}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </Tile>
      </div>
    </section>
  );
}
