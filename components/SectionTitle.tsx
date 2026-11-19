import { Reveal } from "./Reveal";

export function SectionTitle({ title, aside, index }: { title: string; aside?: React.ReactNode; index?: string }) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <h2 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-none tracking-[-0.04em]">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {aside ?? (index && <span className="font-mono text-[13px] tracking-[0.06em] text-dim">{index}</span>)}
    </Reveal>
  );
}
