"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "./LangProvider";
import { IconChat, IconCode, IconGrid, IconHome, IconUser } from "./icons";

const SECTIONS = ["top", "about", "skills", "work", "contact"] as const;

export function Dock() {
  const { t } = useLang();
  const [active, setActive] = useState<string>("top");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const items = [
    { id: "top", label: t.navHome, Icon: IconHome },
    { id: "about", label: t.navAbout, Icon: IconUser },
    { id: "skills", label: t.navSkills, Icon: IconCode },
    { id: "work", label: t.navWork, Icon: IconGrid },
    { id: "contact", label: t.navContact, Icon: IconChat },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Main"
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-5 left-1/2 z-50 flex gap-1 rounded-full border border-line bg-[rgba(20,26,37,0.78)] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {items.map(({ id, label, Icon }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-label={label}
                className={`relative inline-flex h-11 items-center gap-2 rounded-full px-3.5 text-sm transition-colors md:px-4 ${
                  on ? "text-ink" : "text-soft hover:text-fg"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  <Icon />
                </span>
                <span className="relative hidden md:inline">{label}</span>
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
