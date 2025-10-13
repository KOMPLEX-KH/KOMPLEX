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
  | "ខ្សែសង្វាក់"
  | "គុណ/ចែក"
  | "ត្រីកោណ"
  | "អិចស្បូណង់ស្យែល"
  | "ឡូការីត"
  | "អនុគមន៍បញ្ច្រាស"
  | "អនិស្ស័យ/សមីការ"
  | "បន្ទាត់ប៉ះ"
  | "លំដាប់ខ្ពស់";

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

/** Modal */
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
        className="w-full sm:max-w-3xl lg:max-w-4xl bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[92vh] overflow-auto"
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

// --- NEW Collapsible with tone + defaultOpen -------------------------------
type Tone = "hint" | "info" | "warning" | "success";

const TONES: Record<Tone, { root: string; head: string; icon: string }> = {
  hint: {
    root: "border-amber-200 bg-amber-50/70",
    head: "text-amber-800",
    icon: "💡",
  },
  info: {
    root: "border-sky-200 bg-sky-50/70",
    head: "text-sky-800",
    icon: "ℹ️",
  },
  warning: {
    root: "border-rose-200 bg-rose-50/70",
    head: "text-rose-800",
    icon: "⚠️",
  },
  success: {
    root: "border-emerald-200 bg-emerald-50/70",
    head: "text-emerald-800",
    icon: "✅",
  },
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
  {
    id: "B01",
    title: "Power & Sum",
    level: "ងាយ",
    tags: ["មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(3x^4-5x^2+2\big)`} />,
    hint: <MathLine math={String.raw`\frac{d}{dx}[x^n]=n\,x^{n-1},\ \ \frac{d}{dx}[c]=0`} />,
    steps: (
      <>
        <MathLine math={String.raw`(3x^4)'=12x^3,\ (-5x^2)'=-10x,\ (2)'=0`} />
        <MathLine math={String.raw`សរុប \Rightarrow\ 12x^3-10x`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`12x^3-10x`} />,
  },
  {
    id: "B02",
    title: "Root & Reciprocal",
    level: "ងាយ",
    tags: ["មូលដ្ឋាន"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\!\left(\sqrt{x}+\frac{1}{x}\right)`} />,
    hint: <MathLine math={String.raw`\sqrt{x}=x^{1/2},\ \ (x^{-1})'=-x^{-2}`} />,
    steps: (
      <>
        <MathLine math={String.raw`(\sqrt{x})'=\tfrac{1}{2}x^{-1/2}=\tfrac{1}{2\sqrt{x}}`} />
        <MathLine math={String.raw`(x^{-1})'=-x^{-2}=-\tfrac{1}{x^2}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\tfrac{1}{2\sqrt{x}}-\tfrac{1}{x^2}`} />,
  },

  // Chain
  {
    id: "C01",
    title: "Chain — ln(x^2+1)",
    level: "មធ្យម",
    tags: ["ខ្សែសង្វាក់", "ឡូការីត"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(\ln(x^2+1)\big)`} />,
    hint: <MathLine math={String.raw`(\ln u)'=\frac{u'}{u}`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=x^2+1 \Rightarrow u'=2x`} />
        <MathLine math={String.raw`\frac{d}{dx}\ln u=\frac{2x}{x^2+1}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\frac{2x}{x^2+1}`} />,
  },
  {
    id: "C02",
    title: "Chain — e^{2x-1}",
    level: "មធ្យម",
    tags: ["ខ្សែសង្វាក់", "អិចស្បូណង់ស្យែល"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(e^{2x-1}\big)`} />,
    hint: <MathLine math={String.raw`(e^{u})'=u'\,e^{u}`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=2x-1 \Rightarrow u'=2`} />
        <MathLine math={String.raw`(e^{u})'=2\,e^{2x-1}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`2e^{2x-1}`} />,
  },

  // Product / Quotient
  {
    id: "PQ01",
    title: "Product rule",
    level: "មធ្យម",
    tags: ["គុណ/ចែក", "អិចស្បូណង់ស្យែល"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big( (x^2+1)\,e^{x}\big)`} />,
    hint: <MathLine math={String.raw`(uv)'=u'v+uv'`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=x^2+1,\ u'=2x;\ \ v=e^x,\ v'=e^x`} />
        <MathLine math={String.raw`(uv)'=2x\,e^x+(x^2+1)e^x=e^x(x^2+2x+1)`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`e^x(x^2+2x+1)`} />,
  },
  {
    id: "PQ02",
    title: "Quotient rule",
    level: "មធ្យម",
    tags: ["គុណ/ចែក"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\left(\frac{3x-1}{x^2+1}\right)`} />,
    hint: <MathLine math={String.raw`\left(\frac{u}{v}\right)'=\frac{u'v-u\,v'}{v^2}`} />,
    steps: (
      <>
        <MathLine math={String.raw`u=3x-1,u'=3;\ \ v=x^2+1,v'=2x`} />
        <MathLine math={String.raw`\frac{3(x^2+1)-(3x-1)\,2x}{(x^2+1)^2}=\frac{-3x^2+2x+3}{(x^2+1)^2}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\frac{-3x^2+2x+3}{(x^2+1)^2}`} />,
  },

  // Trig
  {
    id: "T01",
    title: "Trig — multiple angles",
    level: "មធ្យម",
    tags: ["ត្រីកោណ"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(\sin(2x)+\cos(3x)\big)`} />,
    hint: <MathLine math={String.raw`(\sin u)'=u'\cos u,\ (\cos u)'=-u'\sin u`} />,
    steps: (
      <>
        <MathLine math={String.raw`(\sin(2x))'=2\cos(2x),\quad (\cos(3x))'=-3\sin(3x)`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`2\cos(2x)-3\sin(3x)`} />,
  },
  {
    id: "T02",
    title: "Trig — tan/cot",
    level: "មធ្យម",
    tags: ["ត្រីកោណ"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(\tan x-2\cot(3x)\big)`} />,
    hint: <MathLine math={String.raw`(\tan u)'=u'(1+\tan^2 u),\ (\cot u)'=-u'(1+\cot^2 u)`} />,
    steps: (
      <>
        <MathLine math={String.raw`(\tan x)'=1+\tan^2 x,\ (\cot(3x))'=-3(1+\cot^2(3x))`} />
        <MathLine math={String.raw`y'=1+\tan^2 x+6(1+\cot^2(3x))`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`1+\tan^2 x+6\big(1+\cot^2(3x)\big)`} />,
  },

  // Exp/Log
  {
    id: "EL01",
    title: "Exponential mix",
    level: "មធ្យម",
    tags: ["អិចស្បូណង់ស្យែល"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(e^{2x}-4e^{-x}+3\cdot 5^{x}\big)`} />,
    hint: <MathLine math={String.raw`(e^{kx})'=k\,e^{kx},\ (a^x)'=a^x\ln a`} />,
    steps: (
      <>
        <MathLine math={String.raw`(e^{2x})'=2e^{2x},\ (-4e^{-x})'=4e^{-x},\ (3\cdot5^x)'=3\ln(5)\,5^x`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`2e^{2x}+4e^{-x}+3\ln(5)\,5^x`} />,
  },
  {
    id: "EL02",
    title: "Log composition",
    level: "មធ្យម",
    tags: ["ឡូការីត", "ខ្សែសង្វាក់"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(\ln(2x)+(\ln x)^2\big)`} />,
    hint: <MathLine math={String.raw`(\ln u)'=\frac{u'}{u},\ ((\ln x)^2)'=2\ln x\cdot \frac{1}{x}`} />,
    steps: (
      <>
        <MathLine math={String.raw`(\ln(2x))'=\frac{1}{x},\quad ((\ln x)^2)'=\frac{2\ln x}{x}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\frac{1}{x}+\frac{2\ln x}{x}`} />,
  },

  // Inverse trig
  {
    id: "IT01",
    title: "Inverse trig + chain",
    level: "មធ្យម",
    tags: ["អនុគមន៍បញ្ច្រាស", "ត្រីកោណ", "ខ្សែសង្វាក់"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(\arcsin(3x)+\arctan(2x-1)\big)`} />,
    hint: <MathLine math={String.raw`(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}},\ (\arctan u)'=\frac{u'}{1+u^2}`} />,
    steps: (
      <>
        <MathLine math={String.raw`(\arcsin(3x))'=\frac{3}{\sqrt{1-9x^2}},\quad (\arctan(2x-1))'=\frac{2}{1+(2x-1)^2}`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`\frac{3}{\sqrt{1-9x^2}}+\frac{2}{1+(2x-1)^2}`} />,
  },

  // Implicit
  {
    id: "IM01",
    title: "Implicit — circle",
    level: "ងាយ",
    tags: ["អនិស្ស័យ/សមីការ"],
    question: <MathLine math={String.raw`x^2+y^2=1\ \ \Rightarrow\ \ y' \ \ ?`} />,
    hint: <MathLine math={String.raw`(y^n)'=n y^{n-1} y' \ \text{(treat y=y(x))}`} />,
    steps: <MathLine math={String.raw`2x+2y\,y'=0 \Rightarrow y'=-\frac{x}{y}`} />,
    finalAnswer: <MathLine math={String.raw`-\dfrac{x}{y}`} />,
  },

  // Tangent line
  {
    id: "TG01",
    title: "Tangent line at x=1 (y=x^2)",
    level: "ងាយ",
    tags: ["បន្ទាត់ប៉ះ"],
    question: <MathLine math={String.raw`\text{រកបន្ទាត់ប៉ះ } y=x^2 \text{ ត្រង់ } x=1`} />,
    hint: <MathLine math={String.raw`y'=2x,\ \ y(1)=1,\ \ \text{tangent: } y-y_0=m(x-x_0)`} />,
    steps: (
      <>
        <MathLine math={String.raw`m=y'(1)=2,\ \ (x_0,y_0)=(1,1)`} />
        <MathLine math={String.raw`y-1=2(x-1)\ \Rightarrow\ y=2x-1`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`y=2x-1`} />,
  },

  // Higher order
  {
    id: "HO01",
    title: "Second/third derivative",
    level: "មធ្យម",
    tags: ["លំដាប់ខ្ពស់"],
    question: <MathLine math={String.raw`\text{រក } f''(x),\,f^{(3)}(x) \text{ សម្រាប់ } f(x)=x^4-2x^3+x`} />,
    hint: <MathLine math={String.raw`គណនាជាបន្តបន្ទាប់: f', f'', f^{(3)}`} />,
    steps: (
      <>
        <MathLine math={String.raw`f'(x)=4x^3-6x^2+1`} />
        <MathLine math={String.raw`f''(x)=12x^2-12x`} />
        <MathLine math={String.raw`f^{(3)}(x)=24x-12`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`f''(x)=12x^2-12x,\quad f^{(3)}(x)=24x-12`} />,
  },
  {
    id: "HO02",
    title: "Mix e^x sin x → y′, y″",
    level: "ពិបាក",
    tags: ["លំដាប់ខ្ពស់", "គុណ/ចែក", "ត្រីកោណ", "អិចស្បូណង់ស្យែល"],
    question: <MathLine math={String.raw`\text{សម្រាប់ } y=e^{x}\sin x,\ \text{រក } y',\,y''`} />,
    hint: <MathLine math={String.raw`(uv)'=u'v+uv'`} />,
    steps: (
      <>
        <MathLine math={String.raw`y'=e^x\sin x+e^x\cos x=e^x(\sin x+\cos x)`} />
        <MathLine math={String.raw`y''=e^x(\sin x+\cos x)+e^x(\cos x-\sin x)=2e^x\cos x`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`y'=e^x(\sin x+\cos x),\quad y''=2e^x\cos x`} />,
  },

  // Evaluate at a point
  {
    id: "EV01",
    title: "Evaluate at π/6 (tan)",
    level: "ងាយ",
    tags: ["ត្រីកោណ"],
    question: <MathLine math={String.raw`\text{គណនា } \ y'\!\left(\tfrac{\pi}{6}\right)\ \text{សម្រាប់ } y=\tan x`} />,
    hint: <MathLine math={String.raw`(\tan x)'=1+\tan^2 x,\ \ \tan(\tfrac{\pi}{6})=\tfrac{1}{\sqrt{3}}`} />,
    steps: <MathLine math={String.raw`y'(\tfrac{\pi}{6})=1+\tfrac{1}{3}=\tfrac{4}{3}`} />,
    finalAnswer: <MathLine math={String.raw`\tfrac{4}{3}`} />,
  },
  {
    id: "UV01",
    title: "u^v form: x^x",
    level: "ពិបាក",
    tags: ["ខ្សែសង្វាក់", "ឡូការីត"],
    question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(x^{x}\big)\ (x>0)`} />,
    hint: <MathLine math={String.raw`x^x=e^{x\ln x}\Rightarrow (x^x)'=x^x\left(\ln x+1\right)`} />,
    steps: (
      <>
        <MathLine math={String.raw`y=x^x=e^{x\ln x}`} />
        <MathLine math={String.raw`y'=e^{x\ln x}\cdot (\ln x+1)=x^x(\ln x+1)`} />
      </>
    ),
    finalAnswer: <MathLine math={String.raw`x^x(\ln x+1)`} />,
  },
];

/* -------------------------------------------------------------------------- */
/*                        PROGRAMMATICALLY GENERATED SETS                      */
/* -------------------------------------------------------------------------- */

const genPowerSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  for (let n = 2; n <= 8; n++) {
    const id = `GP${String(idx++).padStart(2, "0")}`;
    const q = String.raw`\frac{d}{dx}\big(x^{${n}}+${n}x\big)`;
    const ans = String.raw`${n}x^{${n - 1}}+${n}`;
    res.push({
      id,
      title: `Power rule #${n - 1}`,
      level: "ងាយ",
      tags: ["មូលដ្ឋាន"],
      question: <MathLine math={String.raw`\text{រក } \ ${q}`} />,
      hint: <MathLine math={String.raw`(x^m)'=m\,x^{m-1}`} />,
      steps: (
        <>
          <MathLine math={String.raw`(x^{${n}})'=${n}x^{${n - 1}}`} />
          <MathLine math={String.raw`(${n}x)'=${n}`} />
        </>
      ),
      finalAnswer: <MathLine math={ans} />,
    });
  }
  return res;
};

const genChainLnSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const pairs = [
    [2, 1],
    [3, -1],
    [4, 5],
    [5, -2],
    [7, 3],
    [9, -4],
  ];
  for (const [a, b] of pairs) {
    const id = `CL${String(idx++).padStart(2, "0")}`;
    res.push({
      id,
      title: `Chain — ln(${a}x${b >= 0 ? "+" + b : b})`,
      level: "ងាយ",
      tags: ["ខ្សែសង្វាក់", "ឡូការីត"],
      question: (
        <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\ln(${a}x${b >= 0 ? "+" + b : b})`} />
      ),
      hint: <MathLine math={String.raw`(\ln u)'=\frac{u'}{u}`} />,
      steps: (
        <>
          <MathLine math={String.raw`u=${a}x${b >= 0 ? "+" + b : b}\Rightarrow u'=${a}`} />
          <MathLine math={String.raw`\frac{u'}{u}=\frac{${a}}{{${a}x${b >= 0 ? "+" + b : b}}}`} />
        </>
      ),
      finalAnswer: (
        <MathLine math={String.raw`\dfrac{${a}}{{${a}x${b >= 0 ? "+" + b : b}}}`} />
      ),
    });
  }
  return res;
};

const genChainSqrtSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const pairs = [
    [2, 3],
    [3, -2],
    [4, 1],
    [5, -5],
    [6, 7],
    [7, 0],
  ];
  for (const [a, b] of pairs) {
    const id = `SQ${String(idx++).padStart(2, "0")}`;
    const inner = `${a}x${b >= 0 ? "+" + b : b}`;
    res.push({
      id,
      title: `Chain — √(${inner})`,
      level: "ងាយ",
      tags: ["ខ្សែសង្វាក់", "មូលដ្ឋាន"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\sqrt{${inner}}`} />,
      hint: <MathLine math={String.raw`\sqrt{u}=u^{1/2}\Rightarrow (\sqrt{u})'=\frac{u'}{2\sqrt{u}}`} />,
      steps: (
        <>
          <MathLine math={String.raw`u=${inner},\ u'=${a}`} />
          <MathLine math={String.raw`\frac{u'}{2\sqrt{u}}=\frac{${a}}{2\sqrt{${inner}}}`} />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`\dfrac{${a}}{2\sqrt{${inner}}}`} />,
    });
  }
  return res;
};

const genChainTrigSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const triples = [
    ["sin", 2, 1],
    ["sin", 5, -2],
    ["cos", 3, 0],
    ["cos", 4, -1],
    ["tan", 2, 2],
    ["tan", 6, -3],
  ] as const;
  for (const [fn, k, b] of triples) {
    const id = `CT${String(idx++).padStart(2, "0")}`;
    const arg = `${k}x${b >= 0 ? "+" + b : b}`;
    let ans = "";
    let hint = "";
    switch (fn) {
      case "sin":
        ans = String.raw`${k}\cos(${arg})`;
        hint = String.raw`(\sin u)'=u'\cos u`;
        break;
      case "cos":
        ans = String.raw`-${k}\sin(${arg})`;
        hint = String.raw`(\cos u)'=-u'\sin u`;
        break;
      case "tan":
        ans = String.raw`${k}(1+\tan^2(${arg}))`;
        hint = String.raw`(\tan u)'=u'(1+\tan^2 u)`;
        break;
    }
    res.push({
      id,
      title: `Chain — ${fn}(${arg})`,
      level: "មធ្យម",
      tags: ["ខ្សែសង្វាក់", "ត្រីកោណ"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\ ${fn}(${arg})`} />,
      hint: <MathLine math={hint} />,
      steps: (
        <>
          <MathLine math={String.raw`u=${arg}\Rightarrow u'=${k}`} />
          <MathLine math={String.raw`y'=${ans}`} />
        </>
      ),
      finalAnswer: <MathLine math={ans} />,
    });
  }
  return res;
};

const genProductExpSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    [1, 2],
    [2, 1],
    [3, 2],
    [4, -1],
    [5, 3],
    [6, -2],
  ];
  for (const [p, a] of items) {
    const id = `PE${String(idx++).padStart(2, "0")}`;
    const title = `Product — x^${p} e^{${a}x}`;
    res.push({
      id,
      title,
      level: "មធ្យម",
      tags: ["គុណ/ចែក", "អិចស្បូណង់ស្យែល"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(x^{${p}}e^{${a}x}\big)`} />,
      hint: <MathLine math={String.raw`(uv)'=u'v+uv',\ (e^{ax})'=a e^{ax}`} />,
      steps: (
        <>
          <MathLine math={String.raw`u=x^{${p}}\Rightarrow u'=${p}x^{${p - 1}}`} />
          <MathLine math={String.raw`v=e^{${a}x}\Rightarrow v'=${a}e^{${a}x}`} />
          <MathLine math={String.raw`y'=${p}x^{${p - 1}}e^{${a}x}+${a}x^{${p}}e^{${a}x}=e^{${a}x}\big(${p}x^{${p - 1}}+${a}x^{${p}}\big)`} />
        </>
      ),
      finalAnswer: (
        <MathLine math={String.raw`e^{${a}x}\left(${p}x^{${p - 1}}+${a}x^{${p}}\right)`} />
      ),
    });
  }
  return res;
};

const genQuotientLinearSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    [2, 1, 1, 3],
    [3, -1, 2, 1],
    [5, 4, -2, 1],
    [7, -3, 1, -2],
    [4, 2, 3, -5],
    [6, -2, -1, 4],
  ];
  for (const [a, b, c, d] of items) {
    const id = `QL${String(idx++).padStart(2, "0")}`;
    const num = `${a}x${b >= 0 ? "+" + b : b}`;
    const den = `${c}x${d >= 0 ? "+" + d : d}`;
    const ad_bc = a * d - b * c;
    res.push({
      id,
      title: `Quotient — (${num})/(${den})`,
      level: "មធ្យម",
      tags: ["គុណ/ចែក"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\left(\frac{${num}}{${den}}\right)`} />,
      hint: <MathLine math={String.raw`\left(\frac{u}{v}\right)'=\frac{u'v-u v'}{v^2}`} />,
      steps: (
        <>
          <MathLine math={String.raw`u'=${a},\ v'=${c}`} />
          <MathLine
            math={String.raw`\frac{a(${den})-(${num})\,c}{(${den})^2}=\frac{${ad_bc}}{(${den})^2}`}
          />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`\dfrac{${ad_bc}}{(${den})^2}`} />,
    });
  }
  return res;
};

const genTrigMixSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    ["sin", "cos"],
    ["cos", "sin"],
    ["sin", "sin"],
    ["cos", "cos"],
    ["tan", "sin"],
    ["sin", "tan"],
  ] as const;
  for (const [f, g] of items) {
    const id = `TM${String(idx++).padStart(2, "0")}`;
    const expr = `${f}(x)${g === "tan" ? " + " : ""}${g === "tan" ? " \\tan x" : g === "sin" ? " + \\sin x" : " + \\cos x"}`;
    const title = `Trig — ${f}(x) + ${g}(x)`;
    let d1 = "";
    let d2 = "";
    if (f === "sin") d1 = "\\cos x";
    if (f === "cos") d1 = "-\\sin x";
    if (f === "tan") d1 = "1+\\tan^2 x";
    if (g === "sin") d2 = "+\\cos x";
    if (g === "cos") d2 = "-\\sin x";
    if (g === "tan") d2 = "+(1+\\tan^2 x)";
    res.push({
      id,
      title,
      level: "ងាយ",
      tags: ["ត្រីកោណ"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(${expr}\big)`} />,
      hint: (
        <MathLine
          math={String.raw`(\sin x)'=\cos x,\ (\cos x)'=-\sin x,\ (\tan x)'=1+\tan^2 x`}
        />
      ),
      steps: <MathLine math={String.raw`y'=${d1}${d2}`} />,
      finalAnswer: <MathLine math={String.raw`${d1}${d2}`} />,
    });
  }
  return res;
};

const genExpLogSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    ["e^{3x}", "3e^{3x}"],
    ["5^{x}", "\\ln(5)\\,5^{x}"],
    ["2^{2x-1}", "2\\ln(2)\\,2^{2x-1}"],
    ["e^{-4x}", "-4e^{-4x}"],
    ["7^{x+2}", "\\ln(7)\\,7^{x+2}"],
    ["e^{x}+\\ln x", "e^{x}+\\tfrac{1}{x}"],
  ];
  for (const [expr, ans] of items) {
    const id = `EL${String(idx++ + 2).padStart(2, "0")}`;
    res.push({
      id,
      title: `Exp/Log mix #${idx}`,
      level: "ងាយ",
      tags: ["អិចស្បូណង់ស្យែល", "ឡូការីត"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\big(${expr}\big)`} />,
      hint: (
        <MathLine
          math={String.raw`(e^{kx})'=k\,e^{kx},\ (a^x)'=a^x\ln a,\ (\ln x)'=\frac{1}{x}`}
        />
      ),
      steps: <MathLine math={String.raw`y'=${ans}`} />,
      finalAnswer: <MathLine math={String.raw`${ans}`} />,
    });
  }
  return res;
};

const genInverseTrigSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    ["\\arcsin(2x)", "\\dfrac{2}{\\sqrt{1-4x^2}}"],
    ["\\arccos(1-x)", "-\\dfrac{-1}{\\sqrt{1-(1-x)^2}}=\\dfrac{1}{\\sqrt{2x-x^2}}"],
    ["\\arctan(3x+1)", "\\dfrac{3}{1+(3x+1)^2}"],
    ["\\arcsin(x^2)", "\\dfrac{2x}{\\sqrt{1-x^4}}"],
    ["\\arccos(2x-3)", "-\\dfrac{2}{\\sqrt{1-(2x-3)^2}}"],
    ["\\arctan(\\sin x)", "\\dfrac{\\cos x}{1+\\sin^2 x}"],
  ];
  for (const [expr, ans] of items) {
    const id = `IT${String(idx++ + 1).padStart(2, "0")}`;
    res.push({
      id,
      title: `Inverse trig #${idx - 1}`,
      level: "មធ្យម",
      tags: ["អនុគមន៍បញ្ច្រាស", "ខ្សែសង្វាក់", "ត្រីកោណ"],
      question: <MathLine math={String.raw`\text{រក } \ \frac{d}{dx}\,${expr}`} />,
      hint: (
        <MathLine
          math={String.raw`(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}},\ (\arccos u)'=-\frac{u'}{\sqrt{1-u^2}},\ (\arctan u)'=\frac{u'}{1+u^2}`}
        />
      ),
      steps: <MathLine math={String.raw`y'=${ans}`} />,
      finalAnswer: <MathLine math={String.raw`${ans}`} />,
    });
  }
  return res;
};

const genImplicitSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    ["x^2+y^2=9", "-\\dfrac{x}{y}"],
    ["xy=1", "-\\dfrac{y}{x}"],
    ["x^2-xy+y^2=3", "\\dfrac{2x-y-2y y'}{x-2y} \\text{ (ដោះស្រាយទៀត)}"],
  ];
  for (const [eq, ans] of items) {
    const id = `IM${String(idx++ + 1).padStart(2, "0")}`;
    res.push({
      id,
      title: `Implicit #${idx - 1}`,
      level: idx === 2 ? "ងាយ" : "មធ្យម",
      tags: ["អនិស្ស័យ/សមីការ"],
      question: <MathLine math={String.raw`\text{សមីការ } ${eq}\ \Rightarrow\ y' \ \ ?`} />,
      hint: <MathLine math={String.raw`ប្រើ d/dx ទាំងសមីការ ហើយចាត់ទុក y=y(x)`} />,
      steps: <MathLine math={String.raw`y'=${ans}`} />,
      finalAnswer: <MathLine math={String.raw`${ans}`} />,
    });
  }
  return res;
};

const genTangentSet = (): Exercise[] => {
  const res: Exercise[] = [];
  const items: Array<[string, string, string, string]> = [
    ["y=x^3", "x=2", "m=3x^2\\Rightarrow m=12", "y-8=12(x-2)"],
    ["y=\\sin x", "x=\\tfrac{\\pi}{4}", "m=\\cos x\\Rightarrow m=\\tfrac{\\sqrt{2}}{2}", "y-\\tfrac{\\sqrt{2}}{2}=\\tfrac{\\sqrt{2}}{2}(x-\\tfrac{\\pi}{4})"],
    ["y=e^{2x}", "x=0", "m=2e^{2x}\\Rightarrow m=2", "y-1=2(x-0)"],
  ];
  let idx = 1;
  for (const [f, at, slope, line] of items) {
    const id = `TG${String(idx++ + 1).padStart(2, "0")}`;
    res.push({
      id,
      title: `Tangent — ${f} at ${at}`,
      level: "ងាយ",
      tags: ["បន្ទាត់ប៉ះ"],
      question: <MathLine math={String.raw`\text{រកបន្ទាត់ប៉ះ } ${f}\ \text{ ត្រង់ } ${at}`} />,
      hint: <MathLine math={String.raw`បណ្តោយ៖ y-y_0=m(x-x_0),\ \ m=f'(a)`} />,
      steps: (
        <>
          <MathLine math={String.raw`${slope}`} />
          <MathLine math={String.raw`${line}`} />
        </>
      ),
      finalAnswer: <MathLine math={String.raw`${line}`} />,
    });
  }
  return res;
};

const genHigherOrderSet = (): Exercise[] => {
  const res: Exercise[] = [];
  let idx = 1;
  const items = [
    ["e^{3x}", "n", "3^{n}e^{3x}"],
    ["e^{-x}", "n", "(-1)^{n}e^{-x}"],
    ["\\sin x", "n", "\\sin\\left(x+\\tfrac{n\\pi}{2}\\right)"],
    ["\\cos x", "n", "\\cos\\left(x+\\tfrac{n\\pi}{2}\\right)"],
    ["e^{2x}\\cos x", "2", "y''=5e^{2x}\\cos x+4e^{2x}\\sin x"],
  ];
  for (const [expr, nlabel, ans] of items) {
    const id = `HO${String(idx++ + 2).padStart(2, "0")}`;
    res.push({
      id,
      title: `Higher order — ${expr}`,
      level: "លំដាប់ខ្ពស់" as Level,
      tags: ["លំដាប់ខ្ពស់"],
      question: <MathLine math={String.raw`\text{រកដេរីវេលំដាប់ } ${nlabel}\ \text{ សម្រាប់ } y=${expr}`} />,
      hint: (
        <MathLine
          math={String.raw`(e^{ax})^{(n)}=a^n e^{ax},\ \ \sin^{(n)}(x)=\sin\!\left(x+\frac{n\pi}{2}\right),\ \ \cos^{(n)}(x)=\cos\!\left(x+\frac{n\pi}{2}\right)`}
        />
      ),
      steps: <MathLine math={String.raw`${ans}`} />,
      finalAnswer: <MathLine math={String.raw`${ans}`} />,
    });
  }
  return res;
};

/* -------------------------------------------------------------------------- */
/*                              BUILD THE BIG BANK                             */
/* -------------------------------------------------------------------------- */

const BANK: Exercise[] = [
  ...BASE,
  ...genPowerSet(),
  ...genChainLnSet(),
  ...genChainSqrtSet(),
  ...genChainTrigSet(),
  ...genProductExpSet(),
  ...genQuotientLinearSet(),
  ...genTrigMixSet(),
  ...genExpLogSet(),
  ...genInverseTrigSet(),
  ...genImplicitSet(),
  ...genTangentSet(),
  ...genHigherOrderSet(),
];

/** ALL TAGS for filter bar */
const ALL_TAGS: Tag[] = [
  "មូលដ្ឋាន",
  "ខ្សែសង្វាក់",
  "គុណ/ចែក",
  "ត្រីកោណ",
  "អិចស្បូណង់ស្យែល",
  "ឡូការីត",
  "អនុគមន៍បញ្ច្រាស",
  "អនិស្ស័យ/សមីការ",
  "បន្ទាត់ប៉ះ",
  "លំដាប់ខ្ពស់",
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function DerivativePractice() {
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

  const closeModal = useCallback(() => setSelected(null), []);
  const canLoadMore = visibleCount < filtered.length;

  const shuffle = () => {
    // Fisher–Yates on a copy
    const copy = [...filtered];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    // show first N after shuffle
    setVisibleCount(24);
    // quick hack: change query to trigger recompute visually
    setQ((s) => s); // keep same but forces render along with setVisibleCount
  };

  const showRandom10 = () => setVisibleCount(10);

  return (
    <div className="space-y-5">
      {/* Header / Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">លំហាត់អនុគមន៍ដេរីវេ</h2>
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
            onClick={showRandom10}
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
        onClose={closeModal}
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
            {/* Tags (mobile visible here) */}
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
}
