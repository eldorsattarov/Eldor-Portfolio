"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACTS } from "@/lib/data";
import { useLang } from "./LangProvider";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { IconArrowUpRight, IconTelegram } from "./icons";

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
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute right-14 bottom-[118px] z-[1] hidden lg:block"
        >
          <Image
            src="/images/eldor-cut.webp"
            alt=""
            width={1196}
            height={2194}
            sizes="330px"
            className="h-[540px] w-auto grayscale contrast-[1.08] brightness-90 transition duration-700 hover:grayscale-0 hover:brightness-100"
          />
        </motion.div>

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

        <div className="relative z-[2] flex max-w-[760px] flex-col gap-8 px-6 sm:px-10">
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
                  <span className="w-24 shrink-0 font-mono text-xs tracking-[0.06em] text-dim">{c.label}</span>
                  <span className="min-w-0 flex-1 font-display text-[clamp(18px,2vw,26px)] tracking-[-0.02em] break-words">{c.value}</span>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(237,237,234,0.18)] transition duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-accent group-hover:text-ink">
                    <IconArrowUpRight />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

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
        </div>

        <footer className="relative z-[2] mt-[72px] flex flex-wrap justify-between gap-3 border-t border-[rgba(237,237,234,0.08)] bg-panel px-6 pt-6 pb-20 text-[13px] text-dim sm:px-10">
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
