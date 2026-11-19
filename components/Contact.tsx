"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { CONTACTS } from "@/lib/data";
import { useLang } from "./LangProvider";
import { useTashkentClock } from "./useClock";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { IconArrowUpRight, IconDownload, IconTelegram } from "./icons";

/** Portrait card: framed panel with the cut-out photo "breaking out" of the top edge. */
function PortraitCard() {
  const { t } = useLang();
  const clock = useTashkentClock();
  const ref = useRef<HTMLDivElement>(null);

  // gentle 3D tilt on hover
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 6);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
      className="group relative mx-auto h-[640px] w-full max-w-[440px]"
    >
      {/* framed panel (photo breaks out above it) */}
      <div
        className="line-grid absolute inset-x-0 top-[170px] bottom-0 overflow-hidden rounded-[32px] border bg-[#0B1019]"
        style={{ borderColor: "var(--accent-line)" }}
      >
        <div
          aria-hidden
          className="absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgb(232 194 106 / .28) 0%, transparent 62%)" }}
        />
        {/* giant initials behind */}
        <span
          aria-hidden
          className="absolute top-6 left-1/2 -translate-x-1/2 font-display text-[200px] leading-none font-bold tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(232,194,106,0.35)]"
        >
          ES
        </span>
      </div>

      {/* photo: bottom of the panel, head above the frame */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-x-0 bottom-0 z-[2] mx-auto w-[330px]"
      >
        <Image
          src="/images/eldor-cut.webp"
          alt="Eldor Sattarov"
          width={1196}
          height={2194}
          sizes="330px"
          className="h-auto w-full grayscale contrast-[1.05] drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] transition-[filter] duration-700 group-hover:grayscale-0"
        />
      </motion.div>

      {/* open-to-work chip */}
      <span
        className="absolute top-[190px] left-5 z-[3] inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium text-accent backdrop-blur-md"
        style={{ borderColor: "var(--accent-line)", background: "rgb(7 10 16 / .7)" }}
      >
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
        {t.openToWork}
      </span>

      {/* local-time chip */}
      <span className="float-y absolute top-[250px] right-4 z-[3] inline-flex flex-col rounded-2xl border border-line bg-ink/70 px-3.5 py-2.5 backdrop-blur-md">
        <span className="font-mono text-[10px] tracking-[0.08em] text-dim">{t.city.toUpperCase()}</span>
        <span className="font-display text-xl font-semibold tracking-[-0.03em]">{clock}</span>
      </span>

      {/* name card */}
      <div className="absolute inset-x-4 bottom-4 z-[3] flex items-center justify-between gap-3 rounded-2xl border border-line bg-ink/70 px-4 py-3.5 backdrop-blur-xl">
        <span className="flex flex-col">
          <span className="font-display text-[17px] font-semibold">Eldor Sattarov</span>
          <span className="text-[13px] text-soft">{t.role} · React / Next.js</span>
        </span>
        <a
          href="https://t.me/developer_ES"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition hover:rotate-12"
        >
          <IconTelegram />
        </a>
      </div>
    </motion.div>
  );
}

export function Contact() {
  const { t } = useLang();
  const words = [...t.talk, ...t.talk, ...t.talk, ...t.talk];

  return (
    <section id="contact" className="px-[14px] pb-[14px]">
      <div className="relative mx-auto max-w-[1412px] overflow-hidden rounded-[36px] border border-[rgba(237,237,234,0.08)] bg-panel pb-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[120px] -bottom-[200px] h-[760px] w-[760px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--accent-halo) 0%, transparent 62%)" }}
        />

        {/* big marquee */}
        <div aria-hidden className="relative overflow-hidden pt-14 pb-10">
          <div className="marquee-fast flex w-max gap-12 font-display text-[clamp(64px,9vw,140px)] leading-none font-bold tracking-[-0.05em]">
            {words.map((w, i) => (
              <span key={i} className={`inline-flex items-center gap-12 whitespace-nowrap ${i % 2 ? "text-outline" : "text-fg"}`}>
                {w}
                <span className="inline-block h-[0.36em] w-[0.36em] rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-[2] grid grid-cols-1 items-end gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="font-display text-[clamp(32px,3.4vw,50px)] leading-[1.05] font-semibold tracking-[-0.04em]">
                {t.contactTitle}
                <span className="text-accent">.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col border-t border-line">
              {CONTACTS.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06} y={20}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 border-b border-line px-3 py-5 transition-[background-color,padding] duration-500 hover:bg-[rgba(237,237,234,0.05)] hover:pl-7"
                  >
                    <span className="hidden w-24 shrink-0 font-mono text-xs tracking-[0.06em] text-dim sm:inline">{c.label}</span>
                    <span className="min-w-0 flex-1 font-display text-[clamp(18px,2vw,26px)] tracking-[-0.02em] break-words">{c.value}</span>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(237,237,234,0.18)] transition duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-accent group-hover:text-ink">
                      <IconArrowUpRight />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="https://t.me/developer_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-accent px-7 text-[15px] font-semibold text-ink transition hover:brightness-110"
                >
                  <IconTelegram />
                  {t.writeTg}
                </a>
              </Magnetic>
              <a
                href={t.cvHref}
                download
                className="inline-flex min-h-[54px] items-center gap-2.5 rounded-full border border-line px-7 text-[15px] font-semibold transition hover:border-transparent hover:bg-fg hover:text-ink"
              >
                <IconDownload />
                {t.cv}
              </a>
            </div>
          </div>

          <PortraitCard />
        </div>

        <footer className="relative z-[2] mt-16 flex flex-wrap justify-between gap-3 border-t border-[rgba(237,237,234,0.08)] px-6 pt-6 pb-20 text-[13px] text-dim sm:px-10">
          <span>© {new Date().getFullYear()} Eldor Sattarov</span>
          <span>{t.footer}</span>
          <a href="#top" className="text-mute transition hover:text-fg">
            {t.backTop} ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
