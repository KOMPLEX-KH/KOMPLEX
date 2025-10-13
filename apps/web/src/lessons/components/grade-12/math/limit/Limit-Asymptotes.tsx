import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "អាស៊ីមតូតនៃអនុគមន៍",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            អាស៊ីមតូតគឺជាបន្ទាត់ដែលក្រាបអនុគមន៍ខិតទៅរកជិត។ មានបីប្រភេទសំខាន់៖
          </div>

          <div className="bg-blue-50 p-4 rounded-lg space-y-3">
            <div className="font-semibold text-blue-800">
              ១. អាស៊ីមតូតឈរ (Vertical Asymptotes)៖
            </div>
            <div>
              ប្រសិនបើ <InlineMath math="\lim_{x \to a} f(x) = \pm\infty" />{" "}
              នោះបន្ទាត់ <InlineMath math="x = a" /> ជាអាស៊ីមតូតឈរនៃអនុគមន៍{" "}
              <InlineMath math="f" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg space-y-3">
            <div className="font-semibold text-green-800">
              ២. អាស៊ីមតូតដេក (Horizontal Asymptotes)៖
            </div>
            <div>
              ប្រសិនបើ <InlineMath math="\lim_{x \to \pm\infty} f(x) = b" />{" "}
              នោះបន្ទាត់ <InlineMath math="y = b" /> ជាអាស៊ីមតូតដេកនៃអនុគមន៍{" "}
              <InlineMath math="f" />
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg space-y-3">
            <div className="font-semibold text-purple-800">
              ៣. អាស៊ីមតូតទ្រេត (Oblique Asymptotes)៖
            </div>
            <div>
              ប្រសិនបើអនុគមន៍ <InlineMath math="f(x) = ax + b + \varphi(x)" />{" "}
              ជាទម្រង់កាណូនិច និង{" "}
              <InlineMath math="\lim_{x \to \pm\infty} \varphi(x) = 0" />{" "}
              នោះបន្ទាត់ <InlineMath math="y = ax + b" />{" "}
              ជាអាស៊ីមតូតទ្រេតនៃអនុគមន៍ <InlineMath math="f" />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  tip: {
    title: "របៀបរកអាស៊ីមតូត",
    content: (
      <div className="text-left">
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">រកអាស៊ីមតូតបញ្ឈរ៖</div>
            <div className="space-y-2">
              <div>• រកចំណុចដែលអនុគមន៍មិនកំណត់ (ភាគបែង = 0)</div>
              <div>
                • ពិនិត្យ <InlineMath math="\lim_{x \to a^-} f(x)" /> និង{" "}
                <InlineMath math="\lim_{x \to a^+} f(x)" />
              </div>
              <div>
                • ប្រសិនបើលីមីតណាមួយ = <InlineMath math="\pm\infty" /> នោះ{" "}
                <InlineMath math="x = a" /> ជាអាស៊ីមតូតបញ្ឈរ
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">រកអាស៊ីមតូតផ្ដេក៖</div>
            <div className="space-y-2">
              <div>
                • គណនា <InlineMath math="\lim_{x \to +\infty} f(x)" /> និង{" "}
                <InlineMath math="\lim_{x \to -\infty} f(x)" />
              </div>
              <div>
                • ប្រសិនបើលីមីតណាមួយ = <InlineMath math="b" /> (កំណត់) នោះ{" "}
                <InlineMath math="y = b" /> ជាអាស៊ីមតូតផ្ដេក
              </div>
              <div>
                • សម្រាប់អនុគមន៍ត្រឡប់ <InlineMath math="\frac{P(x)}{Q(x)}" />:
                ប្រៀបធៀបដឺក្រេនៃ P និង Q
              </div>
            </div>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">រកអាស៊ីមតូតទេរយៀង៖</div>
            <div className="space-y-2">
              <div>
                • គណនា{" "}
                <InlineMath math="a = \lim_{x \to \infty} \frac{f(x)}{x}" />
              </div>
              <div>
                • គណនា <InlineMath math="b = \lim_{x \to \infty} [f(x) - ax]" />
              </div>
              <div>
                • ប្រសិនបើ a និង b ទាំងពីរកំណត់ នោះ{" "}
                <InlineMath math="y = ax + b" /> ជាអាស៊ីមតូតទេរយៀង
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">សំគាល់៖</div>
            <div>
              អនុគមន៍មួយមិនអាចមានទាំងអាស៊ីមតូតផ្ដេក
              និងទេរយៀងក្នុងទិសតាមដងតែមួយបានទេ។
            </div>
          </div>
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <div className="text-left">
        រកអាស៊ីមតូតទាំងអស់នៃអនុគមន៍{" "}
        <InlineMath math="f(x) = \frac{2x^2 + 3x - 1}{x - 1}" />
      </div>
    ),
    steps: [
      {
        title: "រកអាស៊ីមតូតឈរ",
        content: (
          <div className="text-left space-y-2">
            <div>
              អនុគមន៍មិនកំណត់នៅ <InlineMath math="x = 1" /> (ភាគបែង = 0)
            </div>
            <div>ពិនិត្យលីមីត:</div>
            <div>
              <InlineMath math="\lim_{x \to 1^+} \frac{2x^2 + 3x - 1}{x - 1} = \frac{4}{0^+} = +\infty" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to 1^-} \frac{2x^2 + 3x - 1}{x - 1} = \frac{4}{0^-} = -\infty" />
            </div>
            <div>
              ដូច្នេះ <InlineMath math="x = 1" /> ជាអាស៊ីមតូតបញ្ឈរ
            </div>
          </div>
        ),
      },
      {
        title: "រកអាស៊ីមតូតដេក",
        content: (
          <div className="text-left space-y-2">
            <div>ដឺក្រេនៃភាគយក = 2, ដឺក្រេនៃភាគបែង = 1</div>
            <div>
              ដោយសារដឺក្រេនៃភាគយក {">"} ដឺក្រេនៃភាគបែង នេះគ្មានអាស៊ីមតូតផ្ដេក
            </div>
            <div>
              <InlineMath math="\lim_{x \to \pm\infty} \frac{2x^2 + 3x - 1}{x - 1} = \pm\infty" />
            </div>
          </div>
        ),
      },
      {
        title: "រកអាស៊ីមតូតទ្រេត",
        content: (
          <div className="text-left space-y-2">
            <div>ប្រើការចែកពហុធា:</div>
            <div>
              <InlineMath math="f(x) = \frac{2x^2 + 3x - 1}{x - 1} = 2x + 5 + \frac{4}{x - 1}" />
            </div>
            <div>
              ពិនិត្យ:{" "}
              <InlineMath math="\lim_{x \to \infty} \frac{4}{x - 1} = 0" />
            </div>
            <div>
              ដូច្នេះ <InlineMath math="y = 2x + 5" /> ជាអាស៊ីមតូតទេរយៀង
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        <div>
          អាស៊ីមតូតនៃអនុគមន៍{" "}
          <InlineMath math="f(x) = \frac{2x^2 + 3x - 1}{x - 1}" />:
        </div>
        <div>
          • អាស៊ីមតូតឈរ: <InlineMath math="x = 1" />
        </div>
        <div>
          • អាស៊ីមតូតទ្រេត: <InlineMath math="y = 2x + 5" />
        </div>
      </div>
    ),
  },

  example2: {
    question: (
      <div className="text-left">
        រកអាស៊ីមតូតនៃអនុគមន៍{" "}
        <InlineMath math="g(x) = \frac{3x^2 - 2x + 1}{x^2 + 1}" />
      </div>
    ),
    steps: [
      {
        title: "រកអាស៊ីមតូតឈរ",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដោះស្រាយ <InlineMath math="x^2 + 1 = 0" />:
            </div>
            <div>
              <InlineMath math="x^2 = -1" /> (គ្មានដំណោះស្រាយពិត)
            </div>
            <div>ដូច្នេះគ្មានអាស៊ីមតូតឈរ</div>
          </div>
        ),
      },
      {
        title: "រកអាស៊ីមតូតដេក",
        content: (
          <div className="text-left space-y-2">
            <div>ដឺក្រេនៃភាគយក = ដឺក្រេនៃភាគបែង = 2</div>
            <div>
              <InlineMath math="\lim_{x \to \pm\infty} \frac{3x^2 - 2x + 1}{x^2 + 1} = \lim_{x \to \pm\infty} \frac{3x^2}{x^2} = 3" />
            </div>
            <div>
              ដូច្នេះ <InlineMath math="y = 3" /> ជាអាស៊ីមតូតដេក
            </div>
          </div>
        ),
      },
      {
        title: "រកអាស៊ីមតូតទ្រេត",
        content: (
          <div className="text-left space-y-2">
            <div>មិនអាចចែករាងកាណូនិចបាន​នោះគ្មានអាស៊ីមតូតទ្រេតទេ</div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        <div>
          អាស៊ីមតូតនៃអនុគមន៍{" "}
          <InlineMath math="g(x) = \frac{3x^2 - 2x + 1}{x^2 + 1}" />
        </div>
        <div>
          • អាស៊ីមតូតផ្ដេក: <InlineMath math="y = 3" />
        </div>
        <div>• គ្មានអាស៊ីមតូតឈរ ឬ ទ្រេតទេ</div>
      </div>
    ),
  },

  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{1}{x - 2}" />{" "}
            មានអាស៊ីមតូតបញ្ឈរនៅណា?
          </div>
        ),
        options: ["x = 0", "x = 2", "x = -2", "គ្មាន"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{2x + 1}{x - 3}" />{" "}
            មានអាស៊ីមតូតផ្ដេកនៅណា?
          </div>
        ),
        options: ["y = 0", "y = 2", "y = 1", "y = 3"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{x^2 + 1}{x + 1}" />{" "}
            មានអាស៊ីមតូតទេរយៀងនៅណា?
          </div>
        ),
        options: ["y = x", "y = x - 1", "y = x + 1", "គ្មាន"],
        correctAnswer: 1,
      },
      {
        id: "q4",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{x^3}{x^2 + 1}" />{" "}
            មានអាស៊ីមតូតប្រភេទណា?
          </div>
        ),
        options: ["បញ្ឈរ", "ផ្ដេក", "ទេរយៀង", "គ្មាន"],
        correctAnswer: 2,
      },
      {
        id: "q5",
        question: (
          <div className="text-left">
            ប្រសិនបើ <InlineMath math="\lim_{x \to 5^+} f(x) = +\infty" />{" "}
            នោះអនុគមន៍មានអាស៊ីមតូតអ្វី?
          </div>
        ),
        options: ["បញ្ឈរនៅ x = 5", "ផ្ដេកនៅ y = 5", "ទេរយៀង", "គ្មាន"],
        correctAnswer: 0,
      },
      {
        id: "q6",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{3x^2 + 2}{2x^2 - 1}" />{" "}
            មានអាស៊ីមតូតផ្ដេកនៅណា?
          </div>
        ),
        options: ["y = 0", "y = 3/2", "y = 2", "y = 1"],
        correctAnswer: 1,
      },
      {
        id: "q7",
        question: (
          <div className="text-left">
            អនុគមន៍ណាខាងក្រោមមិនមានអាស៊ីមតូតបញ្ឈរ?
          </div>
        ),
        options: [
          "f(x) = 1/x",
          "f(x) = x² + 1",
          "f(x) = 1/(x-1)",
          "f(x) = 1/(x²-4)",
        ],
        correctAnswer: 1,
      },
      {
        id: "q8",
        question: (
          <div className="text-left">
            ប្រសិនបើអនុគមន៍មានអាស៊ីមតូតផ្ដេក y = 2
            នោះអនុគមន៍អាចមានអាស៊ីមតូតទេរយៀងទេ?
          </div>
        ),
        options: ["បាន", "មិនបាន", "អាស្រ័យលើអនុគមន៍", "អាស្រ័យលើទិស"],
        correctAnswer: 3,
      },
    ],
  },

  warning: {
    content: (
      <div className="text-left">
        <div>
          <strong>ប្រុងប្រយ័ត្ន៖</strong>
        </div>
        <div>• អាស៊ីមតូតឈអាចមានច្រើនជាងពីរ</div>
        <div>• អាស៊ីមតូតដេកអាចមានអតិបរមាពីរ (មួយសម្រាប់ +∞ មួយសម្រាប់ -∞)</div>
        <div>• ខ្សែរកោងនៃអនុគមន៍អាចកាត់អាស៊ីមតូតបាន</div>
      </div>
    ),
  },
};

export default function LimitAsymptotes() {
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

      {TOPIC_CONTENT.example2 && (
        <ExampleBox
          question={TOPIC_CONTENT.example2.question}
          steps={TOPIC_CONTENT.example2.steps}
          answer={TOPIC_CONTENT.example2.answer}
        />
      )}

      {TOPIC_CONTENT.exercise && (
        <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
      )}

      {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}

      {TOPIC_CONTENT.warning && (
        <WarningBox content={TOPIC_CONTENT.warning.content} />
      )}
    </>
  );
}
