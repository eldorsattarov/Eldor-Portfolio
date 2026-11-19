/* Animated mini-UI mockups shown inside each project card. Pure CSS animations (see globals.css). */
import type { ProjectKey } from "@/lib/i18n";
import { IconCheck, IconX } from "../icons";

const card = "rounded-[14px] border border-[rgba(237,237,234,0.06)] bg-[#0E1420]";
const lbl = "font-mono text-[9.5px] tracking-[0.08em] text-dim";

function Sk({ w, h = 7, c = "#2C3546" }: { w: number; h?: number; c?: string }) {
  return <span className="block rounded" style={{ width: `${w}%`, height: h, background: c }} />;
}

type ChipKind = "ok" | "warn" | "off";
function Chip({ kind, children }: { kind: ChipKind; children: React.ReactNode }) {
  const st =
    kind === "ok"
      ? { background: "var(--accent-soft)", color: "var(--accent)" }
      : kind === "warn"
        ? { background: "rgba(242,182,109,0.14)", color: "#F2B66D" }
        : { background: "rgba(237,237,234,0.07)", color: "#A7A9A3" };
  return (
    <span className="rounded-full px-[9px] py-1 font-mono text-[9.5px] tracking-[0.06em] whitespace-nowrap" style={st}>
      {children}
    </span>
  );
}

export function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-[rgba(237,237,234,0.08)] bg-well shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_30px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-[rgba(237,237,234,0.06)] bg-[#0B1019] px-4 py-3">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[9px] w-[9px] rounded-full bg-[#2A3242]" />
          ))}
        </span>
        <span className="truncate rounded-lg bg-[#111725] px-3 py-1 font-mono text-[11px] text-dim">{title}</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          LIVE
        </span>
      </div>
      <div className="dot-grid relative flex min-h-0 flex-1 gap-3.5 p-4">{children}</div>
    </div>
  );
}

/* ---------------- 1. AeroTechControl ---------------- */
const BAR_H = [42, 64, 50, 78, 58, 88, 70, 96, 62, 82, 54, 92, 74, 100];
function Aero() {
  const icons = [
    "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    "M3 12h4l3-8 4 16 3-8h4",
    "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l3 2",
    "M4 20V10M10 20V4M16 20v-7M22 20H2",
    "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z",
  ];
  return (
    <>
      <div className={`hidden flex-col gap-2.5 p-1.5 sm:flex ${card}`}>
        {icons.map((d, i) => (
          <span
            key={i}
            className="inline-flex h-8 w-8 items-center justify-center rounded-[10px]"
            style={i === 0 ? { background: "var(--accent-soft)", color: "var(--accent)" } : { background: "#141B27", color: "#5E6676" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          </span>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-dim">
          <span>Airport</span>›<span>Terminal 1</span>›<span>Zone B</span>›<span className="text-accent">X-RAY 04</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["EQUIPMENT", 62, "#2C3546", "#7C7F78"],
            ["ONLINE", 48, "var(--accent-mid)", "var(--accent)"],
            ["SERVICE", 30, "rgba(242,182,109,0.5)", "#F2B66D"],
          ].map(([n, w, c, dot]) => (
            <div key={n as string} className={`flex flex-col gap-2.5 p-3 ${card}`}>
              <span className={`flex items-center gap-1.5 ${lbl}`}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot as string }} />
                {n}
              </span>
              <Sk w={w as number} h={14} c={c as string} />
            </div>
          ))}
        </div>
        <div className={`flex flex-col gap-2.5 p-3 ${card}`}>
          <span className={lbl}>ACTIVITY · 14D</span>
          <div className="flex h-[92px] items-end gap-[5px]">
            {BAR_H.map((h, i) => (
              <span
                key={i}
                className="bar flex-1 rounded-t-[4px] rounded-b-[1px]"
                style={{
                  height: `${h}%`,
                  animationDelay: `${(i * 0.13).toFixed(2)}s`,
                  background: i === BAR_H.length - 1 ? "var(--accent)" : i % 3 === 0 ? "rgb(232 194 106 / .45)" : "#212938",
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            ["X-RAY · T1-B04", "ok", "ONLINE"],
            ["WTMD · T2-A02", "warn", "SERVICE"],
            ["ETD · T1-C01", "ok", "ONLINE"],
          ].map(([n, k, s]) => (
            <div key={n} className="flex items-center gap-2.5 rounded-[10px] bg-[#0E1420] px-2.5 py-2">
              <span className="font-mono text-[10.5px] whitespace-nowrap text-soft">{n}</span>
              <span className="flex-1">
                <Sk w={55} h={5} c="#1E2635" />
              </span>
              <Chip kind={k as ChipKind}>{s}</Chip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------------- 2. Central Bank ---------------- */
const FEED = [
  { l: "OK", ok: true, a: 58, b: 36 },
  { l: "WAIT", ok: false, a: 46, b: 52 },
  { l: "OK", ok: true, a: 66, b: 30 },
  { l: "OK", ok: true, a: 40, b: 44 },
];
function Cbu() {
  const rows = [...FEED, ...FEED];
  return (
    <>
      <div className={`flex min-w-0 flex-1 flex-col overflow-hidden ${card}`}>
        <div className={`grid grid-cols-[1.4fr_1fr_0.8fr] gap-2 border-b border-[rgba(237,237,234,0.06)] px-3 py-2.5 ${lbl}`}>
          <span>VISITOR</span>
          <span>HOST</span>
          <span>STATUS</span>
        </div>
        <div className="h-[300px] flex-1 overflow-hidden px-2.5 pt-2.5">
          <div className="feed flex flex-col gap-2">
            {rows.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 rounded-xl border border-[rgba(237,237,234,0.05)] bg-[#121927] p-2.5">
                <span className="h-7 w-7 shrink-0 rounded-full bg-[#212938]" />
                <span className="flex flex-1 flex-col gap-[5px]">
                  <Sk w={f.a} />
                  <Sk w={f.b} h={5} c="#1E2635" />
                </span>
                <span
                  className="rounded-full px-2 py-1 font-mono text-[9px]"
                  style={f.ok ? { background: "var(--accent-soft)", color: "var(--accent)" } : { background: "rgba(237,237,234,0.08)", color: "#C9CBC5" }}
                >
                  {f.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="float-y hidden h-[300px] w-[150px] shrink-0 flex-col gap-2 self-center rounded-[30px] border-[5px] border-[#1B2231] bg-[#0E1420] px-[9px] py-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.5)] sm:flex">
        <span className="h-[5px] w-[46px] self-center rounded-[3px] bg-[#1B2231]" />
        <span className="flex items-center justify-between font-mono text-[9px] text-dim">
          MINI APP <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <div className="flex flex-col gap-2 rounded-[14px] border bg-[#141B27] p-2.5" style={{ borderColor: "var(--accent-line)" }}>
          <span className="flex items-center gap-[7px]">
            <span className="h-6 w-6 rounded-full bg-[#2C3546]" />
            <span className="flex flex-1 flex-col gap-1">
              <Sk w={80} h={6} />
              <Sk w={50} h={4} c="#1E2635" />
            </span>
          </span>
          <Sk w={92} h={4} c="#1E2635" />
          <Sk w={70} h={4} c="#1E2635" />
          <span className="flex gap-1.5">
            <span className="inline-flex h-[26px] flex-1 items-center justify-center rounded-[9px] bg-accent text-ink">
              <IconCheck />
            </span>
            <span className="inline-flex h-[26px] flex-1 items-center justify-center rounded-[9px] bg-[#212938] text-mute">
              <IconX />
            </span>
          </span>
        </div>
        {[70, 55].map((w) => (
          <span key={w} className="flex items-center gap-1.5 rounded-[10px] bg-[#121927] p-[7px]">
            <span className="h-4 w-4 rounded-full bg-[#212938]" />
            <span className="flex-1">
              <Sk w={w} h={5} />
            </span>
            <Chip kind="ok">OK</Chip>
          </span>
        ))}
      </div>
    </>
  );
}

/* ---------------- 3. Airport GPS ---------------- */
const PATH_A = "M30 278 L113 278 L113 197 L251 197 L251 83 L370 83";
const PATH_B = "M370 230 L251 230 L251 141 L183 141 L183 20";
const BLOCKS = [
  [12, 12, 92, 62], [122, 12, 120, 62], [260, 12, 128, 62], [12, 92, 92, 96], [122, 92, 52, 96], [192, 92, 50, 96],
  [260, 92, 128, 40], [260, 150, 128, 38], [12, 206, 92, 82], [122, 206, 120, 82], [260, 206, 128, 82],
];
function Gps() {
  return (
    <div className="relative min-h-[340px] flex-1 overflow-hidden rounded-2xl border border-[rgba(237,237,234,0.06)] bg-[#0A0F18]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#151E2C" />
        {BLOCKS.map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="#101826" />
        ))}
        <path d={PATH_A} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="route" opacity="0.9" />
        <path d={PATH_B} fill="none" stroke="rgba(237,237,234,0.55)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="route" />
        <circle cx="370" cy="83" r="5" fill="var(--accent)" />
        <circle cx="370" cy="83" r="12" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="ring-fade" />
        <g className="car" style={{ offsetPath: `path('${PATH_A}')` }}>
          <circle r="15" fill="var(--accent-soft)" className="ring-fade" />
          <circle r="6.5" fill="var(--accent)" stroke="#070A10" strokeWidth="2" />
        </g>
        <g className="car" style={{ offsetPath: `path('${PATH_B}')`, animationDuration: "9s", animationDelay: "-3s" }}>
          <circle r="5.5" fill="#EDEDEA" stroke="#070A10" strokeWidth="2" />
        </g>
      </svg>
      <div className="absolute top-3 left-3 flex min-w-[132px] flex-col gap-[7px] rounded-xl border border-[rgba(237,237,234,0.1)] bg-[rgba(9,13,21,0.82)] px-3 py-2.5 backdrop-blur-md">
        <span className="flex items-center justify-between gap-2.5">
          <span className="font-mono text-[11px] text-fg">BUS-12</span>
          <Chip kind="ok">ONLINE</Chip>
        </span>
        <span className={`flex items-center gap-2 ${lbl}`}>
          km/h
          <span className="flex-1">
            <Sk w={64} h={5} c="var(--accent-mid)" />
          </span>
        </span>
        <span className={`flex items-center gap-2 ${lbl}`}>
          HDG
          <span className="flex-1">
            <Sk w={40} h={5} />
          </span>
        </span>
      </div>
      <div className="absolute top-3 right-3 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(237,237,234,0.1)] bg-[rgba(9,13,21,0.82)] font-mono text-[10px] text-accent">
        N
      </div>
      <div className="absolute right-3 bottom-3 flex flex-col overflow-hidden rounded-[10px] border border-[rgba(237,237,234,0.1)]">
        <span className="flex h-[30px] w-8 items-center justify-center border-b border-[rgba(237,237,234,0.08)] bg-[rgba(9,13,21,0.85)] text-base text-soft">+</span>
        <span className="flex h-[30px] w-8 items-center justify-center bg-[rgba(9,13,21,0.85)] text-base text-soft">−</span>
      </div>
    </div>
  );
}

/* ---------------- 4. CreditAsia ---------------- */
function Credit() {
  const steps: [string, "done" | "active" | "todo"][] = [
    ["FORM", "done"],
    ["SCORING", "active"],
    ["APPROVE", "todo"],
  ];
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
      <div className={`flex items-center gap-2.5 px-3.5 py-3 ${card}`}>
        {steps.map(([n, s], i) => (
          <span key={n} className="contents">
            <span className="flex items-center gap-2">
              {s === "done" ? (
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent text-ink">
                  <IconCheck size={12} />
                </span>
              ) : s === "active" ? (
                <span className="pulse-dot inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-accent font-mono text-[10px] text-accent">
                  02
                </span>
              ) : (
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#2C3546] font-mono text-[10px] text-[#5E6676]">
                  03
                </span>
              )}
              <span className={`hidden sm:inline ${lbl}`}>{n}</span>
            </span>
            {i < 2 && <span className="h-px flex-1 bg-[#212938]" />}
          </span>
        ))}
      </div>
      <div className={`flex flex-col gap-2 p-3 ${card}`}>
        <span className={`flex justify-between ${lbl}`}>
          <span>PORTFOLIO</span>
          <span className="text-accent">▲</span>
        </span>
        <svg width="100%" height="110" viewBox="0 0 400 110" preserveAspectRatio="none">
          <path d="M0 30H400M0 60H400M0 90H400" stroke="#1A2130" strokeWidth="1" />
          <path d="M0 98 C40 92 60 70 100 74 S160 48 200 54 S260 26 300 32 S360 10 400 12 L400 110 L0 110Z" fill="var(--accent-soft)" />
          <path
            className="draw"
            d="M0 98 C40 92 60 70 100 74 S160 48 200 54 S260 26 300 32 S360 10 400 12"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="block h-[5px] overflow-hidden rounded-[3px] bg-[#1A2130]">
          <span className="fill-bar block h-full rounded-[3px] bg-accent" />
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {(
          [
            [70, "ok", "APPROVED"],
            [54, "warn", "REVIEW"],
            [62, "off", "NEW"],
          ] as const
        ).map(([w, k, s]) => (
          <div key={s} className="flex items-center gap-2.5 rounded-[10px] bg-[#0E1420] px-2.5 py-2">
            <span className="h-[22px] w-[22px] rounded-[7px] bg-[#1A2232]" />
            <span className="flex flex-1 flex-col gap-1">
              <Sk w={w} h={6} />
              <Sk w={w - 25} h={4} c="#1E2635" />
            </span>
            <Chip kind={k}>{s}</Chip>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 5. FaceDetection ---------------- */
function Cam({ n, face, delay = 0 }: { n: string; face?: boolean; delay?: number }) {
  return (
    <div className="relative min-h-[130px] overflow-hidden rounded-xl border border-[rgba(237,237,234,0.06)] bg-[#0F1622]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <rect width="100" height="100" fill="#0F1622" />
        <path d="M0 70 L100 58 L100 100 L0 100Z" fill="#131B29" />
        <circle cx="50" cy="45" r="15" fill="#222B3B" />
        <path d="M24 100c3-18 13-28 26-28s23 10 26 28" fill="#222B3B" />
        {face && (
          <>
            <path d="M30 22h-8v8M70 22h8v8M30 78h-8v-8M70 78h8v-8" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
            <rect className="scan-sm" style={{ animationDelay: `${delay}s` }} x="22" y="22" width="56" height="1.6" fill="var(--accent)" />
          </>
        )}
      </svg>
      <span className="absolute top-2 left-2 inline-flex items-center gap-[5px] rounded-md bg-[rgba(9,13,21,0.7)] px-1.5 py-[3px] font-mono text-[9px] text-soft">
        <span className="rec h-[5px] w-[5px] rounded-full bg-[#FF6B5B]" />
        CAM {n}
      </span>
    </div>
  );
}
function Face() {
  const logs: [ChipKind, string][] = [
    ["ok", "MATCH"],
    ["off", "UNKNOWN"],
    ["ok", "MATCH"],
    ["ok", "MATCH"],
  ];
  return (
    <>
      <div className="grid min-w-0 flex-[1.5] grid-cols-2 gap-2">
        <Cam n="01" face />
        <Cam n="02" />
        <Cam n="03" />
        <Cam n="04" face delay={1.2} />
      </div>
      <div className="hidden min-w-0 flex-1 flex-col gap-1.5 sm:flex">
        <span className={`px-0.5 pt-0.5 pb-1 ${lbl}`}>EVENTS</span>
        {logs.map(([k, s], i) => (
          <div key={i} className="flex items-center gap-2 rounded-[10px] bg-[#0E1420] p-2">
            <span
              className="h-6 w-6 rounded-[7px] border bg-[#212938]"
              style={{ borderColor: k === "ok" ? "var(--accent-line)" : "transparent" }}
            />
            <span className="flex flex-1 flex-col gap-1">
              <Sk w={70} h={5} />
              <Sk w={40} h={4} c="#1E2635" />
            </span>
            <Chip kind={k}>{s}</Chip>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------- 6. BioControl ---------------- */
const FP_L = ["M200 70c-46 0-80 34-80 80v60", "M200 92c-34 0-58 24-58 58v80", "M200 114c-20 0-36 16-36 36v96", "M200 136c-8 0-14 6-14 14v110"];
const FP_R = ["M200 70c46 0 80 34 80 80v30", "M200 92c34 0 58 24 58 58v56", "M200 114c20 0 36 16 36 36v76", "M200 136c8 0 14 6 14 14v96"];
function Bio() {
  const log: [ChipKind, string][] = [
    ["ok", "GRANTED"],
    ["ok", "GRANTED"],
    ["off", "DENIED"],
    ["ok", "GRANTED"],
  ];
  return (
    <>
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-3.5">
        <div className="relative h-[190px] w-[190px]">
          <div
            className="sweep absolute inset-0 rounded-full"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--accent) 360deg)" }}
          />
          <div className="absolute inset-[3px] rounded-full border border-[rgba(237,237,234,0.06)] bg-[#0B1019]" />
          <svg className="absolute inset-[30px]" width="130" height="130" viewBox="80 50 240 260" fill="none" strokeLinecap="round">
            {FP_L.map((d, i) => (
              <path key={d} d={d} className="ring-fade" style={{ animationDelay: `${i * 0.3}s` }} stroke="var(--accent)" strokeWidth="7" />
            ))}
            {FP_R.map((d, i) => (
              <path key={d} d={d} className="ring-fade" style={{ animationDelay: `${0.45 + i * 0.3}s` }} stroke="#4A5366" strokeWidth="7" />
            ))}
          </svg>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          SCANNING
        </span>
      </div>
      <div className="hidden min-w-0 flex-1 flex-col justify-center gap-1.5 sm:flex">
        <span className={`px-0.5 pt-0.5 pb-1 ${lbl}`}>ACCESS LOG</span>
        {log.map(([k, s], i) => (
          <div key={i} className="flex items-center gap-2 rounded-[10px] bg-[#0E1420] px-2.5 py-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={k === "ok" ? "var(--accent)" : "#5E6676"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
              <path d="M2 21h20" />
              <path d="M12 12v.01" />
            </svg>
            <span className="flex-1">
              <Sk w={60} h={6} />
            </span>
            <Chip kind={k}>{s}</Chip>
          </div>
        ))}
      </div>
    </>
  );
}

export const PANELS: Record<ProjectKey, () => React.ReactElement> = {
  aero: Aero,
  cbu: Cbu,
  gps: Gps,
  credit: Credit,
  face: Face,
  bio: Bio,
};
