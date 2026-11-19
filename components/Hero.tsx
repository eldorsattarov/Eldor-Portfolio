"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, type Variants } from "motion/react";
import { useLang } from "./LangProvider";
import { useTashkentClock } from "./useClock";
import { LangSwitch } from "./LangSwitch";
import { SocialButtons } from "./SocialButtons";
import { Magnetic } from "./Magnetic";
import { IconArrowDown, IconDownload } from "./icons";

const ease = [0.2, 0.8, 0.2, 1] as const;

const word: Variants = {
  hidden: {},
  show: (delay: number) => ({ transition: { staggerChildren: 0.06, delayChildren: delay } }),
};
const letter: Variants = {
  hidden: { opacity: 0, y: "0.5em", rotate: 4 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1, ease } },
};

function Letters({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <motion.span variants={word} custom={delay} initial="hidden" animate="show" className="inline-block">
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          <motion.span
            className={`inline-block ${className ?? ""}`}
            whileHover={{ y: "-0.05em", rotate: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {c}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const { t } = useLang();
  const clock = useTashkentClock();
  const ref = useRef<HTMLDivElement>(null);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });
  const textX = useTransform(smx, (v) => v * 30);
  const textMY = useTransform(smy, (v) => v * 14);
  const photoX = useTransform(smx, (v) => v * -16);

  // scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform([nameY, textMY], ([a, b]: number[]) => a + b);

  return (
    <section id="top" className="p-[14px]">
      <div
        ref={ref}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="line-grid relative mx-auto min-h-[640px] max-w-[1412px] overflow-hidden rounded-[36px] border border-line bg-panel md:min-h-[760px] lg:min-h-[880px]"
      >
        {/* halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, var(--accent-halo) 0%, transparent 62%)" }}
        />

        {/* top bar */}
        <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 p-[22px] sm:px-[26px]">
          <a href="#top" aria-label="Eldor Sattarov" className="inline-flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-accent font-display text-[17px] font-bold tracking-[-0.04em] text-ink">
              ES
            </span>
            <span className="hidden font-display text-base font-semibold md:inline">Eldor Sattarov</span>
          </a>
          <div className="hidden items-center gap-2.5 rounded-full border px-4 py-2 text-[13px] text-accent md:inline-flex" style={{ borderColor: "var(--accent-line)", background: "var(--accent-soft)" }}>
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            {t.openToWork}
            <span className="text-mute">· {t.city} {clock}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="hidden sm:block">
              <SocialButtons />
            </div>
            <LangSwitch />
          </div>
        </header>

        {/* giant first name (behind) */}
        <motion.div
          aria-hidden
          style={{ x: textX, y: textY, opacity: nameOpacity }}
          className="pointer-events-auto absolute inset-x-0 top-[150px] z-[1] sm:top-[108px] text-center font-display text-[clamp(110px,24vw,340px)] font-bold leading-[0.86] tracking-[-0.075em] whitespace-nowrap"
        >
          <Letters text="ELDOR" delay={0.1} className="text-name-fill" />
        </motion.div>

        {/* cut-out portrait */}
        <motion.div
          style={{ x: photoX, y: photoY, scale: photoScale }}
          className="absolute inset-x-0 bottom-0 z-[2] mx-auto w-[300px] max-w-[78%] origin-bottom sm:w-[380px] lg:w-[430px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease }}
          >
            <Image
              src="/images/eldor-cut.webp"
              alt="Eldor Sattarov"
              width={1196}
              height={2194}
              priority
              sizes="(max-width: 640px) 300px, 430px"
              className="h-auto w-full"
              style={{ filter: "drop-shadow(0 0 1px rgb(232 194 106 / .28)) drop-shadow(0 -6px 26px rgb(232 194 106 / .08))" }}
            />
          </motion.div>
        </motion.div>

        {/* last name (front) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[150px] z-[3] text-center font-display text-[clamp(48px,10vw,148px)] font-semibold leading-[1.05] tracking-[-0.045em] whitespace-nowrap drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] sm:bottom-[200px]"
        >
          <Letters text="SATTAROV" delay={0.55} className="text-gold-fill" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-2 flex justify-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-line bg-ink/70 px-4 py-2 font-mono text-[10px] font-normal tracking-[0.3em] text-soft backdrop-blur-md sm:gap-3.5 sm:text-xs">
              <span className="h-px w-5 sm:w-10" style={{ background: "var(--accent)" }} />
              SENIOR FRONTEND ENGINEER
              <span className="h-px w-5 sm:w-10" style={{ background: "var(--accent)" }} />
            </span>
          </motion.span>
        </div>
        <h1 className="sr-only">Eldor Sattarov — Senior Frontend Engineer (React/Next.js) · Full-stack</h1>

        {/* bottom row */}
        <div className="absolute inset-x-0 bottom-0 z-[4] flex flex-wrap items-end justify-between gap-5 p-[22px] sm:p-[26px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease }}
            className="hidden max-w-[360px] flex-col gap-3 rounded-3xl border border-line bg-ink/60 px-[22px] py-5 backdrop-blur-[14px] sm:flex"
          >
            <span className="flex flex-col">
              <span className="font-display text-xl font-semibold tracking-[-0.02em] text-accent">{t.role}</span>
              <span className="font-mono text-[11px] tracking-[0.08em] text-dim">REACT / NEXT.JS · FULL-STACK</span>
            </span>
            <p className="text-[15px] leading-relaxed text-soft">{t.heroLead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.9, ease }}
            className="ml-auto flex items-center gap-3.5"
          >
            <a
              href="/cv/Eldor-Sattarov-CV.pdf"
              download
              className="hidden min-h-[54px] items-center gap-2 rounded-full border border-line bg-ink/60 px-5 text-sm font-semibold backdrop-blur-md transition hover:border-transparent hover:bg-accent hover:text-ink lg:inline-flex"
            >
              <IconDownload />
              {t.cv}
            </a>
            <span className="float-y inline-flex flex-col rounded-[20px] bg-accent px-[18px] py-3.5 text-ink">
              <span className="font-display text-[30px] font-bold leading-none tracking-[-0.05em]">6+</span>
              <span className="text-xs font-semibold">{t.expShort}</span>
            </span>
            <Magnetic>
              <a
                href="#work"
                aria-label={t.ctaWork}
                className="relative hidden h-[136px] w-[136px] sm:inline-flex items-center justify-center rounded-full bg-ink/60"
              >
                <svg className="spin-slow absolute inset-0" width="136" height="136" viewBox="0 0 200 200" aria-hidden>
                  <defs>
                    <path id="hero-circ" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                  </defs>
                  <text fill="#C9CBC5" style={{ fontFamily: "var(--font-mono-jb)", fontSize: 15, letterSpacing: 3.6 }}>
                    <textPath href="#hero-circ">{t.badge}</textPath>
                  </text>
                </svg>
                <span className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full bg-accent text-ink">
                  <IconArrowDown size={24} />
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
