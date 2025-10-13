import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { InlineMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "អនុគមន៍សនិទាន",
    content: (
      <>
        អនុគមន៍គឺជាគំនិតមួយក្នុងគណិតវិទ្យា​ដែលបង្ហាញពីទំនាក់ទំនងរវាងរវាងសំណុំទិន្នន័យ
        2
      </>
    ),
  },

  tip: {
    title: "ដែនកំណត់",
    content: (
      <>
        <p>ជាសំណុំតម្លៃអថេរធ្វើអោយភាគបែងមានតម្លៃខុសពីសូន្យ</p>
      </>
    ),
  },

  example: {
    question: (
      <div className="ml-2">
        រកដែនកំណត់នៃអនុគមន៍ <InlineMath math="f(x) = - \frac{1}{2x+3}" />
      </div>
    ),
    steps: [
      {
        title: "អោយភាគបែងស្មើរសូន្យ",
        content: (
          <>
            <InlineMath math="-2x-3 = 0" />
            <br />
            <InlineMath math="x = - \frac{3}{2}" />
          </>
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <>
            <div>
              <div>
                f(x) មានដែនកំណត់កាលណា​ x​ ខុសពី​​{" "}
                <InlineMath math="-\frac{3}{2}" />
              </div>
              <div>
                <InlineMath math="D_f = \mathbb{R} \setminus \left\{ - \frac{3}{2} \right\}" />
              </div>
            </div>
          </>
        ),
      },
    ],
    answer: (
      <div>
        ដូចនេះ{" "}
        <InlineMath math="D_f = \mathbb{R} \setminus \left\{ - \frac{3}{2} \right\}" />
      </div>
    ),
  },

  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <>
            កំំណត់ដែនកំណត់នៃអនុគមន៍ <InlineMath math="f(x) = \frac{1}{x-3}" />
          </>
        ),
        options: ["7", "-3", "0", "3"],
        correctAnswer: 3,
      },
      {
        id: "q2",
        question: (
          <>
            រកដែនកំណត់នៃអនុ​ .{" "}
            <InlineMath math="f(x) = \frac{x^2-3x+2}{x^2-4}" />
          </>
        ),
        options: ["(2,-2)", "2", "-2", "គ្មាន"],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: (
          <>
            រកដែនកំណត់នៃអនុ . <InlineMath math="f(x) = \frac{1}{x^2-3x+2}" />
          </>
        ),
        options: ["(-1,-2)", "(-1,2)", "(1,-2)", "(1,2)"],
        correctAnswer: 3,
      },
    ],
  },

  hint: {
    content: <>ក្នុងអនុគមន៍សនិទានដែនកំណត់​គឺជាអាស៊ីមតូតឈរ</>,
  },

  warning: {
    content: (
      <>
        កុំច្រឡំអនុគមន៍សនិទានជាមួយអនុគមន៍បន្ទាត់ទ្រេត{" "}
        <InlineMath math="f(x) = mx + b" /> ព្រោះអនុគមន៍សនិទានមាន{" "}
        <InlineMath math="m = 0" /> ប៉ុណ្ណោះ។
      </>
    ),
  },

  graphExplanation: {
    expressions: [{ id: "1", latex: "f(x)=5", color: "#FF4136" }],

    explanation: (
      <>
        ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="f(x) = 5" />{" "}
        ជាបន្ទាត់ផ្តេកកាត់អ័ក្ស y នៅចំណុច <InlineMath math="y = 5" />។
      </>
    ),
    options: {
      showGrid: true,
      expressions: true,
      xAxisLabel: "x",
      yAxisLabel: "y",
    },
  },
};
const INCREASE_DECREASE: TopicContent = {
  definition: {
    title: "អនុគមន៍កើន",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            <InlineMath math="f" /> ជាអនុគមន៍កើនចន្លោះ <InlineMath math="I" />{" "}
            លុះត្រាតែ
            <InlineMath math="f'(x) > 0" /> គ្រប់ <InlineMath math="x \in I" />
          </span>
        </div>
        <div>
          <span>
            ✧ លក្ខណ: ៖ បើ <InlineMath math="\alpha, \beta \in I" /> ដែល{" "}
            <InlineMath math="\alpha > \beta" /> នាំឱ្យ{" "}
            <InlineMath math="f(\alpha) < f(\beta)" /> ។
          </span>
        </div>
      </div>
    ),
  },

  tip: {
    title: "អនុគមន៍ចុះ",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            <InlineMath math="f" /> ជាអនុគមន៍ចុះចន្លោះ <InlineMath math="I" />{" "}
            លុះត្រា
            <InlineMath math="f'(x) < 0" /> គ្រប់ <InlineMath math="x \in I" />
          </span>
        </div>
        <div>
          <span>
            ✧ សកម្មភាព៖ បើ <InlineMath math="\alpha, \beta \in I" /> ដែល{" "}
            <InlineMath math="\alpha > \beta" /> នាំឱ្យ{" "}
            <InlineMath math="f(\alpha) > f(\beta)" /> ។
          </span>
        </div>
      </div>
    ),
  },
};

const EXTREMA_VALUES: TopicContent = {
  definition: {
    title: "អតិបរមាធៀប",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            អនុគមន៍ <InlineMath math="f" /> មានអតិបរមាធៀបត្រង់{" "}
            <InlineMath math="x = x_0" /> ​កាលណា{" "}
            <InlineMath math="\begin{cases} f'(x_0) = 0 \\ f''(x_0) < 0 \end{cases}" />
          </span>
        </div>
        <div>
          <span>
            ✧ <InlineMath math="f(x_0) = m" /> ជាតម្លៃអតិបរមាធៀប
          </span>
        </div>
      </div>
    ),
  },

  tip: {
    title: "អប្បបរមាធៀប",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            អនុគមន៍ <InlineMath math="f" /> មានអប្បរមាធៀបត្រង់{" "}
            <InlineMath math="x = x_0" /> ​កាលណា{" "}
            <InlineMath math="\begin{cases} f'(x_0) = 0 \\ f''(x_0) > 0 \end{cases}" />
          </span>
        </div>
        <div>
          <span>
            ✧ <InlineMath math="f(x_0) = m" /> ជាតម្លៃអប្បរមាធៀប
          </span>
        </div>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====

export default function AnukomSanitean() {
  return (
    <>
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

      {TOPIC_CONTENT.example && (
        <ExampleBox
          question={TOPIC_CONTENT.example.question}
          steps={TOPIC_CONTENT.example.steps}
          answer={TOPIC_CONTENT.example.answer}
        />
      )}

      {TOPIC_CONTENT.exercise && (
        <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
      )}

      {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}

      {TOPIC_CONTENT.warning && (
        <WarningBox content={TOPIC_CONTENT.warning.content} />
      )}

      {INCREASE_DECREASE.definition && (
        <TipBox
          title={INCREASE_DECREASE.definition.title}
          content={INCREASE_DECREASE.definition.content}
        />
      )}

      {INCREASE_DECREASE.tip && (
        <TipBox
          title={INCREASE_DECREASE.tip.title}
          content={INCREASE_DECREASE.tip.content}
        />
      )}

      {EXTREMA_VALUES.definition && (
        <TipBox
          title={EXTREMA_VALUES.definition.title}
          content={EXTREMA_VALUES.definition.content}
        />
      )}

      {EXTREMA_VALUES.tip && (
        <TipBox
          title={EXTREMA_VALUES.tip.title}
          content={EXTREMA_VALUES.tip.content}
        />
      )}
    </>
  );
}
