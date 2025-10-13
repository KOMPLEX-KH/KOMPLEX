'use client'

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { BlockMath, InlineMath } from "react-katex";

/** Math line helper: left-align + mobile horizontal scroll */
const MathLine = ({ math }: { math: string }) => (
  <div className="-mx-1 px-1 overflow-x-auto [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
    <BlockMath math={math} />
  </div>
);

type Level = "ងាយ" | "មធ្យម" | "ពិបាក";
type Tag =
  | "មូលដ្ឋាន"
  | "ជំនួស u"
  | "បំបែកជាផ្នែក"
  | "ត្រីកោណ"
  | "អិចស្បូណង់ស្យែល/ឡូការីត"
  | "អាំងតេក្រាលកំណត់"
  | "សមមាឌ"
  | "បំបែកប្រភាគ";

type Exercise = {
  id: string;
  title: string;
  level: Level;
  tags: Tag[];
  question: React.ReactNode;
  hint?: React.ReactNode;
  steps: React.ReactNode;
  finalAnswer: React.ReactNode;
};

/** Difficulty badge */
const LevelBadge = ({ level }: { level: Level }) => {
  const map: Record<Level, string> = {
    "ងាយ": "bg-emerald-100 text-emerald-800",
    "មធ្យម": "bg-amber-100 text-amber-800",
    "ពិបាក": "bg-rose-100 text-rose-800",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${map[level]}`}>
      {level}
    </span>
  );
};

/** Tag chip */
const TagChip = ({ tag, active, onClick }: { tag: Tag; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-2.5 py-1 rounded-full text-xs border transition
      ${active ? "bg-sky-600 text-white border-sky-600" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
    aria-pressed={active}
  >
    {tag}
  </button>
);

/** Modal (wide + tall for book-style solutions) */
const Modal = ({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-[1px] flex items-start sm:items-center justify-center p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-3xl lg:max-w-5xl bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[92vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

// --- Collapsible with tone + defaultOpen ------------------------------------
type Tone = "hint" | "info" | "warning" | "success";

const TONES: Record<Tone, { root: string; head: string; icon: string }> = {
  hint:    { root: "border-amber-200 bg-amber-50/70", head: "text-amber-800",   icon: "💡" },
  info:    { root: "border-sky-200 bg-sky-50/70",     head: "text-sky-800",     icon: "ℹ️" },
  warning: { root: "border-rose-200 bg-rose-50/70",   head: "text-rose-800",    icon: "⚠️" },
  success: { root: "border-emerald-200 bg-emerald-50/70", head: "text-emerald-800", icon: "✅" },
};

const Collapsible = ({
  title,
  children,
  tone = "info",
  defaultOpen = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  tone?: Tone;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const t = TONES[tone];

  return (
    <section className={`rounded-xl border ${t.root}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-3 sm:px-4 py-2.5 flex items-center justify-between"
      >
        <span className={`flex items-center gap-2 font-semibold ${t.head}`}>
          <span aria-hidden>{t.icon}</span>
          <span>{title}</span>
        </span>
        <span className={`${t.head}`}>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="[&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.03rem]">
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                               BASE EXERCISES                               */
/* -------------------------------------------------------------------------- */

const BASE: Exercise[] = [
  /* ---------------------- Book-style BIG exercise (IK01) ------------------- */
  {
    id: "IK01",
    title: "FTC + ជំហានពេញ — ∫₀² (x²+3x) dx",
    level: "ងាយ",
    tags: ["អាំងតេក្រាលកំណត់", "មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\text{គណនា } \ \int_{0}^{2}(x^2+3x)\,dx`} />,
    hint: (
      <div className="space-y-2">
        <p className="text-slate-800 font-medium">ប្រើទ្រឹស្តីមូលដ្ឋាន (FTC):</p>
        <MathLine math={String.raw`\int_a^b f(x)\,dx = F(b)-F(a) \quad \text{ដែល} \ F'(x)=f(x)`} />
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <MathLine math={String.raw`F(x)=\frac{x^3}{3}+\frac{3}{2}x^2`} />
        <MathLine math={String.raw`F(2)=\frac{8}{3}+6=\frac{26}{3},\quad F(0)=0`} />
      </div>
    ),
    finalAnswer: <MathLine math={String.raw`\int_{0}^{2}(x^2+3x)\,dx=\dfrac{26}{3}`} />,
  },

  /* -------------------------- Indefinite basics --------------------------- */
  {
    id: "I01",
    title: "Power rule (មិនកំណត់)",
    level: "ងាយ",
    tags: ["មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\int (4x^3-6x)\,dx`} />,
    hint: (
      <MathLine math={String.raw`\int x^n dx=\frac{x^{n+1}}{n+1}+C \ (n\ne-1)`} />
    ),
    steps: (
      <>
        <MathLine math={String.raw`\int 4x^3 dx=x^4`} />
        <MathLine math={String.raw`\int (-6x) dx=-3x^2`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`x^4-3x^2+C`} />,
  },
  {
    id: "I02",
    title: "Log form",
    level: "ងាយ",
    tags: ["អិចស្បូណង់ស្យែល/ឡូការីត", "មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\int \frac{1}{x}\,dx`} />,
    hint: <MathLine math={String.raw`\int \frac{1}{x}\,dx=\ln|x|+C`} />,
    steps: <MathLine math={String.raw`\Rightarrow\ \ln|x|+C`} />,
    finalAnswer: <MathLine math={String.raw`\ln|x|+C`} />,
  },

  /* ------------------------------ u-sub ---------------------------------- */
  {
    id: "U01",
    title: "ជំនួស u — 2x/(x²+1)",
    level: "ងាយ",
    tags: ["ជំនួស u"],
    question: <MathLine math={String.raw`\int \frac{2x}{x^2+1}\,dx`} />,
    hint: <MathLine math={String.raw`u=x^2+1,\ du=2x\,dx \Rightarrow \int du/u=\ln|u|+C`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=x^2+1,\ du=2x\,dx`} />
        <MathLine math={String.raw`\int \frac{2x}{x^2+1}dx=\int \frac{1}{u}du=\ln|u|+C`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\ln(x^2+1)+C`} />,
  },
  {
    id: "U02",
    title: "ជំនួស u — 1/(ax+b)",
    level: "ងាយ",
    tags: ["ជំនួស u", "មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\int \frac{1}{5x-2}\,dx`} />,
    hint: <MathLine math={String.raw`u=5x-2,\ du=5dx \Rightarrow \int dx/(ax+b)=\frac{1}{a}\ln|ax+b|+C`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=5x-2 \Rightarrow dx=\frac{1}{5}du`} />
        <MathLine math={String.raw`\int \frac{1}{5x-2}dx=\frac{1}{5}\int \frac{1}{u}du=\frac{1}{5}\ln|u|+C`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\frac{1}{5}\ln|5x-2|+C`} />,
  },

  /* ----------------------------- by parts -------------------------------- */
  {
    id: "P01",
    title: "បំបែកជាផ្នែក — x e^x",
    level: "មធ្យម",
    tags: ["បំបែកជាផ្នែក", "អិចស្បូណង់ស្យែល/ឡូការីត"],
    question: <MathLine math={String.raw`\int x e^{x}\,dx`} />,
    hint: <MathLine math={String.raw`\int u\,dv=uv-\int v\,du,\ \ u=x,\ dv=e^x dx`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=x \Rightarrow du=dx,\ \ v=e^x`} />
        <MathLine math={String.raw`\int x e^x dx= x e^x-\int e^x dx=xe^x-e^x+C`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`e^x(x-1)+C`} />,
  },
  {
    id: "P02",
    title: "បំបែកជាផ្នែក — ln x",
    level: "មធ្យម",
    tags: ["បំបែកជាផ្នែក", "អិចស្បូណង់ស្យែល/ឡូការីត"],
    question: <MathLine math={String.raw`\int \ln x\,dx \ \ (x>0)`} />,
    hint: <MathLine math={String.raw`u=\ln x,\ dv=dx \Rightarrow du=\frac{1}{x}dx,\ v=x`} />,
    steps: (
      <>
        <MathLine math={String.raw`\int \ln x\,dx=x\ln x-\int x\cdot \frac{1}{x}\,dx=x\ln x-\int 1\,dx`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`x\ln x-x+C`} />,
  },

  /* ------------------------------ trig ----------------------------------- */
  {
    id: "T01",
    title: "∫ sin(ax), ∫ cos(ax)",
    level: "ងាយ",
    tags: ["ត្រីកោណ"],
    question: <MathLine math={String.raw`\int \big(\sin(3x)-2\cos(5x)\big)\,dx`} />,
    hint: <MathLine math={String.raw`\int \sin(ax)dx=-\frac{1}{a}\cos(ax),\ \int \cos(ax)dx=\frac{1}{a}\sin(ax)`} />,
    steps: (
      <>
        <MathLine math={String.raw`\int \sin(3x)dx=-\frac{1}{3}\cos(3x)`} />
        <MathLine math={String.raw`\int -2\cos(5x)dx=-2\cdot \frac{1}{5}\sin(5x)`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`-\frac{1}{3}\cos(3x)-\frac{2}{5}\sin(5x)+C`} />,
  },
  {
    id: "T02",
    title: "sec² / csc²",
    level: "ងាយ",
    tags: ["ត្រីកោណ"],
    question: <MathLine math={String.raw`\int \big(4\sec^2(2x)-\csc^2 x\big)\,dx`} />,
    hint: <MathLine math={String.raw`\int \sec^2(ax)dx=\frac{1}{a}\tan(ax),\ \int \csc^2(ax)dx=-\frac{1}{a}\cot(ax)`} />,
    steps: (
      <>
        <MathLine math={String.raw`\int 4\sec^2(2x)dx=4\cdot \frac{1}{2}\tan(2x)=2\tan(2x)`} />
        <MathLine math={String.raw`\int (-\csc^2 x)dx=\cot x`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`2\tan(2x)+\cot x+C`} />,
  },

  /* --------------------------- exp / log mix ------------------------------ */
  {
    id: "E01",
    title: "e^{ax+b} និង a^{x}",
    level: "ងាយ",
    tags: ["អិចស្បូណង់ស្យែល/ឡូការីត"],
    question: <MathLine math={String.raw`\int \big(e^{2x-1}+3\cdot 5^{x}\big)\,dx`} />,
    hint: <MathLine math={String.raw`\int e^{kx}dx=\frac{1}{k}e^{kx},\ \int a^{x}dx=\frac{a^{x}}{\ln a}`} />,
    steps: (
      <>
        <MathLine math={String.raw`\int e^{2x-1}dx=\tfrac{1}{2}e^{2x-1}`} />
        <MathLine math={String.raw`\int 3\cdot 5^{x}dx=3\cdot \tfrac{5^x}{\ln 5}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\tfrac{1}{2}e^{2x-1}+\tfrac{3}{\ln 5}\,5^x+C`} />,
  },

  /* ---------------------------- definite extra ---------------------------- */
  {
    id: "D01",
    title: "សមមាឌ — odd/even",
    level: "ងាយ",
    tags: ["អាំងតេក្រាលកំណត់", "សមមាឌ"],
    question: <MathLine math={String.raw`\int_{-2}^{2}\big(x^3+2x^2\big)\,dx`} />,
    hint: (
      <MathLine math={String.raw`\int_{-a}^{a}\text{odd}=0,\quad \int_{-a}^{a}\text{even}=2\int_{0}^{a}\text{even}`} />
    ),
    steps: (
      <>
        <MathLine math={String.raw`\int_{-2}^{2}x^3 dx=0\ (\text{odd})`} />
        <MathLine math={String.raw`2\int_{0}^{2}2x^2 dx=4\cdot \frac{x^3}{3}\Big|_0^2=\frac{32}{3}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\dfrac{32}{3}`} />,
  },
];

/* -------------------------------------------------------------------------- */
/*                        PROGRAMMATICALLY GENERATED SETS                      */
/* -------------------------------------------------------------------------- */

const genIndefPower = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  for (let n = 2; n <= 7; n++) {
    const id = `IP${String(i++).padStart(2, "0")}`;
    out.push({
      id,
      title: `Power #${n - 1}`,
      level: "ងាយ",
      tags: ["មូលដ្ឋាន"],
      question: <MathLine math={String.raw`\int (${n}x^{${n-1}}-1)\,dx`} />,
      hint: <MathLine math={String.raw`\int x^m dx=\frac{x^{m+1}}{m+1}+C`} />,
      steps: (
        <>
          <MathLine math={String.raw`\int ${n}x^{${n-1}}dx=x^{${n}}`} />
          <MathLine math={String.raw`\int (-1)dx=-x`} />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`x^{${n}}-x+C`} />,
    });
  }
  return out;
};

const genUSubLinear = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const pairs = [
    [2, 3],
    [3, -1],
    [4, 5],
    [5, -4],
    [7, 2],
    [9, -6],
  ];
  for (const [a, b] of pairs) {
    const id = `UL${String(i++).padStart(2, "0")}`;
    const inner = `${a}x${b >= 0 ? "+" + b : b}`;
    out.push({
      id,
      title: `u-sub — ln|${inner}|`,
      level: "ងាយ",
      tags: ["ជំនួស u"],
      question: <MathLine math={String.raw`\int \frac{${a}}{${inner}}\,dx`} />,
      hint: <MathLine math={String.raw`u=${inner},\ du=${a}dx \Rightarrow \int du/u=\ln|u|+C`} />,
      steps: (
        <>
          <MathLine math={String.raw`u=${inner},\ du=${a}dx`} />
          <MathLine math={String.raw`\int \frac{${a}}{${inner}}dx=\int \frac{1}{u}du=\ln|u|+C`} />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`\ln|${inner}|+C`} />,
    });
  }
  return out;
};

const genUSubRational = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const triples = [
    [3, 1, 3],  // 3x^2/(1+x^3)
    [4, 2, 2],  // 4x/(2+x^2)
    [10, 5, 2], // 10x/(5+x^2)
    [6, -1, 3], // 6x^2/(-1+x^3)
  ];
  for (const [k, b, p] of triples) {
    const id = `UR${String(i++).padStart(2, "0")}`;
    const numer = p === 2 ? `${k}x` : `${k}x^${p-1}`;
    const denom = p === 2 ? `${b}+x^2` : `${b}+x^${p}`;
    out.push({
      id,
      title: `u-sub — ln(${denom})`,
      level: "មធ្យម",
      tags: ["ជំនួស u"],
      question: <MathLine math={String.raw`\int \frac{${numer}}{${denom}}\,dx`} />,
      hint: <MathLine math={String.raw`u=${denom},\ du=${p}x^{${p-1}}dx \Rightarrow \int du/u`} />,
      steps: (
        <>
          <MathLine math={String.raw`u=${denom}`} />
          <MathLine math={String.raw`du=${p}x^{${p-1}}dx \ \ (\text{គូសសមាមាត្រជាមួយកត្តា})`} />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`\ln|${denom}|+C`} />,
    });
  }
  return out;
};

const genTrigSet = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const items: Array<[string, string, string]> = [
    ["\\sin(2x)\\cos(2x)", "u=\\sin(2x)", "\\tfrac{1}{4}\\sin^2(2x)"],
    ["\\sin x\\cos x", "u=\\sin x", "\\tfrac{1}{2}\\sin^2 x"],
    ["\\cos^2 x", "ប្រើ \\cos^2x=\\tfrac{1+\\cos 2x}{2}", "\\tfrac{x}{2}+\\tfrac{\\sin 2x}{4}"],
    ["\\sin^2 x", "ប្រើ \\sin^2x=\\tfrac{1-\\cos 2x}{2}", "\\tfrac{x}{2}-\\tfrac{\\sin 2x}{4}"],
  ];
  for (const [expr, hint, ans] of items) {
    const id = `TG${String(i++).padStart(2, "0")}`;
    out.push({
      id,
      title: `ត្រីកោណ #${i - 1}`,
      level: "មធ្យម",
      tags: ["ត្រីកោណ"],
      question: <MathLine math={String.raw`\int ${expr}\,dx`} />,
      hint: <MathLine math={String.raw`${hint}`} />,
      steps: <MathLine math={String.raw`=\ ${ans}+C`} />,
      finalAnswer: <MathLine math={String.raw`${ans}+C`} />,
    });
  }
  return out;
};

const genExpLogSet = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const items: Array<[string, string]> = [
    ["e^{3x}", "\\tfrac{1}{3}e^{3x}+C"],
    ["e^{-4x}", "-\\tfrac{1}{4}e^{-4x}+C"],
    ["5^{x}", "\\tfrac{5^x}{\\ln 5}+C"],
    ["7^{2x-1}", "\\tfrac{1}{2\\ln 7}\\,7^{2x-1}+C"],
    ["\\ln x", "x\\ln x-x+C"],
  ];
  for (const [q, a] of items) {
    const id = `EL${String(i++).padStart(2, "0")}`;
    out.push({
      id,
      title: `Exp/Log #${i - 1}`,
      level: "ងាយ",
      tags: ["អិចស្បូណង់ស្យែល/ឡូការីត"],
      question: <MathLine math={String.raw`\int ${q}\,dx`} />,
      hint: <MathLine math={String.raw`\int e^{ax}dx=\tfrac{1}{a}e^{ax},\ \int a^x dx=\tfrac{a^x}{\ln a}`} />,
      steps: <MathLine math={String.raw`=\ ${a}`} />,
      finalAnswer: <MathLine math={String.raw`${a}`} />,
    });
  }
  return out;
};

const genDefiniteSet = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const items: Array<[string, string]> = [
    ["\\int_0^1 (2x+1)\\,dx", "\\Big[x^2+x\\Big]_0^1=2"],
    ["\\int_0^{\\pi} \\sin x\\,dx", "[-\\cos x]_0^{\\pi}=2"],
    ["\\int_{-3}^{3} x^3\\,dx", "0 \\ (\\text{odd})"],
    ["\\int_{-a}^{a} (x^2+1)\\,dx", "2\\int_0^{a}(x^2+1)dx=2(\\tfrac{a^3}{3}+a)"],
  ];
  for (const [q, a] of items) {
    const id = `DF${String(i++).padStart(2, "0")}`;
    out.push({
      id,
      title: `កំណត់ #${i - 1}`,
      level: "ងាយ",
      tags: ["អាំងតេក្រាលកំណត់", "សមមាឌ"],
      question: <MathLine math={q} />,
      hint: <MathLine math={String.raw`FTC: \int_a^b f = F(b)-F(a)`} />,
      steps: <MathLine math={a} />,
      finalAnswer: <MathLine math={a} />,
    });
  }
  return out;
};

const genPartsSet = (): Exercise[] => {
  const out: Exercise[] = [];
  let i = 1;
  const items: Array<[string, string, string]> = [
    ["x\\sin x", "u=x,\\ dv=\\sin x\\,dx", "-x\\cos x+\\sin x + C"],
    ["x\\cos x", "u=x,\\ dv=\\cos x\\,dx", "x\\sin x+\\cos x + C"],
    ["x e^{2x}", "u=x,\\ dv=e^{2x}dx", "\\tfrac{x}{2}e^{2x}-\\tfrac{1}{4}e^{2x}+C"],
    ["(\\ln x)^2", "u=(\\ln x)^2,\\ dv=dx", "x(\\ln x)^2-2\\int \\ln x\\,dx = x(\\ln x)^2-2(x\\ln x-x)+C"],
  ];
  for (const [q, hint, ans] of items) {
    const id = `PR${String(i++).padStart(2, "0")}`;
    out.push({
      id,
      title: `Parts #${i - 1}`,
      level: "មធ្យម",
      tags: ["បំបែកជាផ្នែក"],
      question: <MathLine math={String.raw`\int ${q}\,dx`} />,
      hint: <MathLine math={String.raw`\int u\,dv=uv-\int v\,du,\ \ ${hint}`} />,
      steps: <MathLine math={String.raw`=\ ${ans}`} />,
      finalAnswer: <MathLine math={String.raw`${ans}`} />,
    });
  }
  return out;
};

/* -------------------------------------------------------------------------- */
/*                              BUILD THE BIG BANK                             */
/* -------------------------------------------------------------------------- */

const BANK: Exercise[] = [
  ...BASE,
  ...genIndefPower(),
  ...genUSubLinear(),
  ...genUSubRational(),
  ...genTrigSet(),
  ...genExpLogSet(),
  ...genDefiniteSet(),
  ...genPartsSet(),
];

/** ALL TAGS for filter bar */
const ALL_TAGS: Tag[] = [
  "មូលដ្ឋាន",
  "ជំនួស u",
  "បំបែកជាផ្នែក",
  "ត្រីកោណ",
  "អិចស្បូណង់ស្យែល/ឡូការីត",
  "អាំងតេក្រាលកំណត់",
  "សមមាឌ",
  "បំបែកប្រភាគ",
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

const IntegralPractice = () => {
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const toggleTag = (t: Tag) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return BANK.filter((ex) => {
      const inTitle = ex.title.toLowerCase().includes(term);
      const inTags =
        activeTags.length === 0 || activeTags.every((t) => ex.tags.includes(t));
      return (term.length === 0 || inTitle) && inTags;
    });
  }, [q, activeTags]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const shuffle = () => {
    // simple random view: change order by resetting visibleCount and query
    setVisibleCount(24);
    setQ((s) => s);
  };

  return (
    <div className="space-y-5">
      {/* Header / Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">លំហាត់អាំងតេក្រាល</h2>
          <p className="text-sm text-slate-600">
            សំណួរ​សរុប: <span className="font-semibold">{filtered.length}</span>{" "}
            <span className="text-slate-400">/ ទាំងអស់ {BANK.length}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ស្វែងរកលំហាត់ (បញ្ចូលពាក្យគន្លឹះ)..."
            className="w-full sm:w-72 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={shuffle}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Randomize
          </button>
          <button
            onClick={() => setVisibleCount(10)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Quick 10
          </button>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {ALL_TAGS.map((t) => (
          <TagChip key={t} tag={t} active={activeTags.includes(t)} onClick={() => toggleTag(t)} />
        ))}
        {activeTags.length > 0 && (
          <button
            onClick={() => setActiveTags([])}
            className="text-xs underline text-slate-600 hover:text-slate-800"
          >
            សម្អាតតម្រង
          </button>
        )}
      </div>

      {/* Grid of exercises */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {visible.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelected(ex)}
            className="text-left rounded-xl border-l-4 border-sky-500 bg-white shadow-sm hover:shadow-md transition border border-slate-200/70 p-3 sm:p-4"
            aria-label={`បើកលំហាត់ ${ex.id}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs rounded-full bg-sky-100 text-sky-800">{ex.id}</span>
                <LevelBadge level={ex.level} />
              </div>
              <div className="hidden sm:flex flex-wrap gap-1">
                {ex.tags.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-semibold text-slate-800 mb-1">{ex.title}</p>
            <div className="[&_.katex-display]:text-left [&_.katex]:text-[1.02rem]">
              {ex.question}
            </div>
            <p className="text-xs text-slate-500 mt-2">ចុចដើម្បីមើលចម្លើយពេញលេញ</p>
          </button>
        ))}
      </div>

      {/* Load more */}
      {canLoadMore && (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            onClick={() => setVisibleCount((n) => n + 24)}
          >
            ផ្ទុកបន្ថែម +24
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
          មិនមានលទ្ធផលតាមការស្វែងរក/តម្រងទេ។
        </div>
      )}

      {/* Modal with full solution */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={
          selected ? (
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs rounded-full bg-sky-100 text-sky-800">{selected.id}</span>
              <span className="font-semibold text-slate-800">{selected.title}</span>
              <LevelBadge level={selected.level} />
            </div>
          ) : null
        }
      >
        {selected && (
          <div className="space-y-4">
            <div className="sm:hidden flex flex-wrap gap-1">
              {selected.tags.map((t) => (
                <span key={t} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                  {t}
                </span>
              ))}
            </div>

            <div>
              <p className="font-medium text-slate-800 mb-1">សំណួរ</p>
              {selected.question}
            </div>

            {selected.hint && (
              <Collapsible tone="hint" defaultOpen title="សំណើចង្អុលបង្ហាញ (Hint)">
                {selected.hint}
              </Collapsible>
            )}

            <div>
              <p className="font-medium text-slate-800 mb-1">ដំណោះស្រាយ</p>
              <div className="space-y-2 [&_.katex-display]:text-left [&_.katex]:text-[1.03rem]">
                {selected.steps}
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 p-3">
              <p className="font-semibold text-emerald-800 mb-1">ចម្លើយចុងក្រោយ</p>
              <div className="[&_.katex-display]:text-left [&_.katex]:text-[1.06rem]">
                {selected.finalAnswer}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default IntegralPractice;
