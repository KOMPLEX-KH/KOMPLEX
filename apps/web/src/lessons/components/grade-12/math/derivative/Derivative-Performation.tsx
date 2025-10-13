import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import { MathScroll } from "@components/helper/MathScroll";

// ===== TOPIC CONTENT DATA (Derivative Formulas) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "រូបមន្តដេរីវេនៃអនុគមន៍សំខាន់ៗ",
    content: (
      <div className="space-y-5 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
        {/* A) Basic formulas in x */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs rounded-full bg-sky-200/70 text-sky-800">
              ១
            </span>
            <p className="font-semibold">រូបមន្តមូលដ្ឋាន (អថេរ x)</p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`y=k\ \Rightarrow\ y'=0`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=x^n\ \Rightarrow\ y'=n\,x^{\,n-1}`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\dfrac{1}{x}\ \Rightarrow\ y'=-\dfrac{1}{x^{2}}\ \ (x\neq 0)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\sqrt{x}\ \Rightarrow\ y'=\dfrac{1}{2\sqrt{x}}\ \ (x>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`y=e^{x}\ \Rightarrow\ y'=e^{x}`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=a^{x}\ \Rightarrow\ y'=a^{x}\ln a\ \ (a>0,\ a\neq 1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\ln x\ \Rightarrow\ y'=\dfrac{1}{x}\ \ (x>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`y=\sin x\ \Rightarrow\ y'=\cos x`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\cos x\ \Rightarrow\ y'=-\sin x`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\tan x\ \Rightarrow\ y'=1+\tan^{2}x`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\cot x\ \Rightarrow\ y'=-(1+\cot^{2}x)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\arcsin x\ \Rightarrow\ y'=\dfrac{1}{\sqrt{1-x^{2}}}\ \ (|x|<1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\arccos x\ \Rightarrow\ y'=-\dfrac{1}{\sqrt{1-x^{2}}}\ \ (|x|<1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\arctan x\ \Rightarrow\ y'=\dfrac{1}{1+x^{2}}`}
              />
            </li>
          </ul>
        </div>

        {/* B) Composite formulas for u(x), v(x) */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-200/70 text-emerald-800">
              ២
            </span>
            <p className="font-semibold">
              រូបមន្តសម្រាប់អនុគមន៍បម្រើ{" "}
              <InlineMath math={String.raw`u=u(x),\ v=v(x)`} />
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=u^n\ \Rightarrow\ y'=n\,u'\,u^{\,n-1}`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\sqrt{u}\ \Rightarrow\ y'=\dfrac{u'}{2\sqrt{u}}\ \ (u>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=u\,v\ \Rightarrow\ y'=u'\,v+u\,v'`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\dfrac{u}{v}\ \Rightarrow\ y'=\dfrac{u'v-u\,v'}{v^{2}}`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\ln u\ \Rightarrow\ y'=\dfrac{u'}{u}\ \ (u>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\sin u\ \Rightarrow\ y'=u'\,\cos u`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\cos u\ \Rightarrow\ y'=-u'\,\sin u`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=e^{u}\ \Rightarrow\ y'=u'\,e^{u}`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\tan u\ \Rightarrow\ y'=u'(1+\tan^{2}u)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\arcsin u\ \Rightarrow\ y'=\dfrac{u'}{\sqrt{1-u^{2}}}\ \ (|u|<1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\arccos u\ \Rightarrow\ y'=-\dfrac{u'}{\sqrt{1-u^{2}}}\ \ (|u|<1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\arctan u\ \Rightarrow\ y'=\dfrac{u'}{1+u^{2}}`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-emerald-200 p-3 sm:col-span-2 lg:col-span-3">
              <InlineMath
                math={String.raw`y=u^{v}\ \Rightarrow\ y'=u^{v}\!\left(\,v'\,\ln u+\;v\,\dfrac{u'}{u}\right)\ \ (u>0)`}
              />
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="space-y-3 text-slate-700">
        {/* 1) Break functions */}
        <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
          <p className="font-semibold text-indigo-800 mb-1">✦ បំបែកអនុគមន៍</p>
          <p>សរសេរអនុគមន៍ជាផ្នែកៗ ហើយយកដេរីវេតាមរូបមន្តមូលដ្ឋាននីមួយៗ។</p>
        </div>

        {/* 2) Product / Quotient */}
        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
          <p className="font-semibold text-emerald-800 mb-1">
            ✦ ច្បាប់គុណ និង ចែក
          </p>
          <p>បើមានផលគុណ ឬ ចែក ត្រូវប្រើច្បាប់គុណ/ចែក មុនពេលបញ្ចប់។</p>
        </div>

        {/* 3) Constants */}
        <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50/70 p-3 shadow-sm">
          <p className="font-semibold text-rose-800 mb-1">✦ ថេរ និង គុណថេរ</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ថេរ <InlineMath math={String.raw`(k)'=0`} /> → ដេរីវេ = 0
            </li>
            <li>
              គុណថេរ <InlineMath math={String.raw`(c\,f(x))'=c\,f'(x)`} /> →
              អាចដកចេញខាងក្រៅ
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathScroll math={String.raw`\text{គណនាដេរីវេ } \ f(x)=3x^4-5x^2+2`} />
    ),
    steps: [
      {
        title: "ច្បាប់ដែលនឹងប្រើ",
        content: (
          <>
            <BlockMath
              math={String.raw`\frac{d}{dx}[u\pm v]=u'\pm v', \quad \frac{d}{dx}[c\,u]=c\,u'`}
            />
            <BlockMath
              math={String.raw`\frac{d}{dx}[x^n]=n\,x^{\,n-1}, \quad \frac{d}{dx}[c]=0`}
            />
          </>
        ),
      },
      {
        title: "យកដេរីវេជាជួរផ្នែក",
        content: (
          <BlockMath
            math={String.raw`\frac{d}{dx}\big[3x^4-5x^2+2\big]
=3\,\frac{d}{dx}[x^4]-5\,\frac{d}{dx}[x^2]+\frac{d}{dx}[2]`}
          />
        ),
      },
      {
        title: "គណនាដេរីវេនីមួយៗ",
        content: (
          <>
            <BlockMath math={String.raw`\frac{d}{dx}[x^4]=4x^3`} />
            <BlockMath math={String.raw`\frac{d}{dx}[x^2]=2x`} />
            <BlockMath math={String.raw`\frac{d}{dx}[2]=0`} />
          </>
        ),
      },
      {
        title: "បូកសរុប និងសម្រួល",
        content: (
          <BlockMath math={String.raw`f'(x)=3\cdot4x^3-5\cdot2x+0=12x^3-10x`} />
        ),
      },
    ],
    answer: <BlockMath math={String.raw`f'(x)=12x^3-10x`} />,
  },

  hint: {
    content: (
      <div className="space-y-3 min-w-0">
        {/* មូលដ្ឋាន */}
        <div className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">រូបមន្តមូលដ្ឋាន</p>
          <MathScroll math={String.raw`\frac{d}{dx}(x^n)=n\,x^{\,n-1}`} />
          <MathScroll
            math={String.raw`\frac{d}{dx}\big[c\,f(x)\big]=c\,f'(x)`}
          />
          <MathScroll
            math={String.raw`\frac{d}{dx}\big[f(x)+g(x)\big]=f'(x)+g'(x)`}
          />
        </div>

        {/* ផលគុណ/ចែក */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">
            ច្បាប់ផលគុណ និង ច្បាប់ចែក
          </p>
          <MathScroll math={String.raw`(u\,v)'=u'\,v+u\,v'`} />
          <MathScroll
            math={String.raw`\Big(\frac{u}{v}\Big)'=\frac{u'v-u\,v'}{v^{2}}\qquad (v\neq0)`}
          />
        </div>

        {/* ខ្សែសង្វាក់ */}
        <div className="rounded-xl border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">ច្បាប់ខ្សែសង្វាក់</p>
          <MathScroll
            math={String.raw`\frac{d}{dx}\,F\!\big(u(x)\big)=F'(u)\,u'(x)`}
          />
          <MathScroll
            math={String.raw`\frac{d}{dx}\,\sin(ax+b)=a\,\cos(ax+b)`}
          />
          <MathScroll
            math={String.raw`\frac{d}{dx}\,\ln(2x+1)=\frac{2}{2x+1}`}
          />
        </div>

        {/* ប្ដូរទម្រង់មុនយកដេរីវេ */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/70 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">
            ប្ដូរទម្រង់ជាមុន (ងាយគណនា)
          </p>
          <MathScroll
            math={String.raw`\sqrt{x}=x^{1/2}\ ,\ \ \frac{1}{x}=x^{-1}`}
          />
          <MathScroll
            math={String.raw`u^{v}=e^{\,v\ln u}\ \ (u>0)\ \ \Rightarrow\ \ (u^{v})'=u^{v}\!\left(v'\ln u+\frac{v\,u'}{u}\right)`}
          />
        </div>
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-3 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
        {/* ដែនកំណត់ */}
        <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            ដែនកំណត់ (Domain) ត្រូវប្រុងប្រយ័ត្ន
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <InlineMath math={String.raw`\ln x:\ x>0`} /> ;{" "}
              <InlineMath math={String.raw`\ln|x|:\ x=0`} />
            </li>
            <li>
              <InlineMath math={String.raw`\sqrt{x}:\ x\ge0`} /> (តែ{" "}
              <InlineMath math={String.raw`(\sqrt{x})'=\frac{1}{2\sqrt{x}}`} />{" "}
              សម្រាប់ <InlineMath math={String.raw`x>0`} />)
            </li>
            <li>
              <InlineMath math={String.raw`\tfrac{1}{x}:\ x\neq0`} /> ;{" "}
              <InlineMath math={String.raw`\tan x,\ \sec x`} /> មិនកំណត់នៅ{" "}
              <InlineMath math={String.raw`x=\tfrac{\pi}{2}+k\pi`} />
            </li>
            <li>
              <InlineMath math={String.raw`\cot x,\ \csc x`} /> មិនកំណត់នៅ{" "}
              <InlineMath math={String.raw`x=k\pi`} />
            </li>
          </ul>
        </div>

        {/* ករណីមិនមានដេរីវេ */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            ករណី «មិនមានដេរីវេ» ត្រង់ចំណុច
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ជ្រុង/ក្រាស់៖ <InlineMath math={String.raw`f(x)=|x|`} /> ត្រង់{" "}
              <InlineMath math={String.raw`x=0`} />
            </li>
            <li>
              cusp៖ <InlineMath math={String.raw`f(x)=x^{2/3}`} /> ត្រង់{" "}
              <InlineMath math={String.raw`0`} />
            </li>
            <li>
              បន្ទាត់ប៉ះបញ្ឈរ៖ <InlineMath math={String.raw`f(x)=x^{1/3}`} />{" "}
              មាន <InlineMath math={String.raw`f'(0)`} /> មិនកំណត់
            </li>
            <li>លីមីតខាងឆ្វេង/ស្តាំមិនស្មើគ្នា</li>
          </ul>
        </div>

        {/* កំហុសជាញឹកញាប់ */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            កំហុសជាញឹកញាប់ ត្រូវជៀសវាង
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ថេរ មិនមែន 1 ទេ៖ <InlineMath math={String.raw`(k)'=0`} />
            </li>
            <li>
              ភ្លេចខ្សែសង្វាក់៖ ឧ.{" "}
              <InlineMath math={String.raw`(\sin(3x))'=3\cos(3x)`} />, មិនមែន{" "}
              <InlineMath math={String.raw`\cos(3x)`} /> ទេ
            </li>
            <li>
              ច្បាប់ចែកខុសទម្រង់៖ ប្រើ{" "}
              <InlineMath math={String.raw`(u/v)'=\frac{u'v-u v'}{v^2}`} />
            </li>
            <li>
              សរសេរដេរីវេ <InlineMath math={String.raw`a^x`} /> ខុស៖
              ត្រឹមត្រូវគឺ <InlineMath math={String.raw`(a^x)'=a^x\ln a`} />
            </li>
            <li>
              <InlineMath math={String.raw`\frac{d}{dx}\ln|x|=\frac{1}{x}`} />{" "}
              មិនមែន <InlineMath math={String.raw`\frac{1}{|x|}`} />
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  graph: {
    expressions: [
      { id: "f", latex: "f(x)=x^2", color: "#c00" },
      { id: "fprime", latex: "g(x)=2x", color: "#00c" },
    ],
  },
};

// ===== MAIN COMPONENT =====

export default function DerivativeFormulas() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-3 sm:px-4 lg:px-6">
      {TOPIC_CONTENT.definition && (
        <DefinitionBox
          title={TOPIC_CONTENT.definition.title}
          content={TOPIC_CONTENT.definition.content}
        />
      )}
      {TOPIC_CONTENT.tip && (
        <TipBox
          title={TOPIC_CONTENT.tip.title}
          content={TOPIC_CONTENT.tip.content}
        />
      )}
      {TOPIC_CONTENT.example && <ExampleBox {...TOPIC_CONTENT.example} />}
      {TOPIC_CONTENT.exercise && (
        <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
      )}
      {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}
      {TOPIC_CONTENT.warning && (
        <WarningBox content={TOPIC_CONTENT.warning.content} />
      )}
    </div>
  );
}
