import { MARQUEE_1, MARQUEE_2 } from "@/lib/data";

export function TechMarquee() {
  const a = [...MARQUEE_1, ...MARQUEE_1];
  const b = [...MARQUEE_2, ...MARQUEE_2, ...MARQUEE_2];
  return (
    <div aria-hidden className="flex flex-col gap-1.5 overflow-hidden pt-9 pb-3">
      <div className="marquee flex w-max gap-8 font-display text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
        {a.map((x, i) => (
          <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap">
            {x}
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
      <div className="marquee-rev flex w-max gap-8 font-display text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(237,237,234,0.45)]">
        {b.map((x, i) => (
          <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap">
            {x}
            <span className="h-2.5 w-2.5 rounded-full border border-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
