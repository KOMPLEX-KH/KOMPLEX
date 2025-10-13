import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ករណីអនុគមន៍សនិទាន 0/0",
    content: (
      <div className="text-left">
        <div>
          នៅពេលដែលយើងគណនាលីមីត ប្រសិនបើការជំនួសតម្លៃដោយផ្ទាល់ធ្វើឱ្យបាន{" "}
          <InlineMath math="\frac{0}{0}" />
        </div>
        <div>
          នេះហៅថា <strong>ទម្រង់មិនកំណត់</strong>។
        </div>
        <div>
          <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}" />
        </div>
      </div>
    ),
  },
  tip: {
    title: "ចំណាំ!",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div className="text-base">
            ដើម្បីគណនាលីមីតអនុគមន៍សនិទាន <InlineMath math="\frac{0}{0}" />{" "}
            យើងត្រូវ
          </div>
          <div className="ml-2 space-y-2">
            <div>
              <strong>ដំណាក់កាល១</strong>: ដាក់ភាគយកនិងភាគបែងជាផលគុណកត្តា
            </div>
            <div>
              <strong>ដំណាក់កាល២</strong>: សម្រួលកត្តាដូចគ្នាចោល
            </div>
            <div>
              <strong>ដំណាក់កាល៣</strong>:
              ជំនួសតម្លៃដែលខិតជិតចូលក្នុងកន្សោមដែលនៅសល់ក្រោយពីការសម្រួល
            </div>
            <div>
              <strong>ដំណាក់កាល៤</strong>: គណនាតម្លសលេខក្នុងកន្សោមនោះជាការស្រេច
            </div>
          </div>
        </div>
      </div>
    ),
  },
  example: {
    question: (
      <div className="text-left">
        គណនា <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" />
      </div>
    ),
    steps: [
      {
        title: "ជំនួសដើម្បីកំណត់ទម្រង់",
        content: (
          <div className="text-left space-y-2">
            <div>
              នៅពេល x <InlineMath math="\to" /> 2 យើងជំនួសគ្រប់ x ដោយ 2:
            </div>
            <div>
              <InlineMath math="\frac{2^2 - 4}{2 - 2} = \frac{4 - 4}{0} = \frac{0}{0}" />
            </div>
            <div>បានទម្រង់មិនកំណត់ ត្រូវប្រើវិធីសាស្ត្រពិសេស</div>
          </div>
        ),
      },
      {
        title: "បំបែកកត្តាដើម្បីរកកត្តាសម្រួល",
        content: (
          <div className="text-left space-y-2">
            <div>
              <InlineMath math="x^2 - 4 = (x + 2)(x - 2)" />
            </div>
            <div>ដូច្នេះ:</div>
            <div>
              <InlineMath math="\frac{x^2 - 4}{x - 2} = \frac{(x + 2)(x - 2)}{x - 2}" />
            </div>
          </div>
        ),
      },
      {
        title: "សម្រួលកត្តាដូចគ្នាចោល",
        content: (
          <div className="text-left space-y-2">
            <div>លុបចោល (x - 2) ទាំងលើ និងក្រោម:</div>
            <div>
              <InlineMath math="\frac{(x + 2)(x - 2)}{x - 2} = x + 2" />
            </div>
            <div>(ពេល x ≠ 2)</div>
          </div>
        ),
      },
      {
        title: "គណនាលីមីត",
        content: (
          <div className="text-left space-y-2">
            <div>
              <InlineMath math="\Rightarrow" />{" "}
              <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} " />
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 2} \frac{(x + 2)(x - 2)}{x - 2}" />
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 2} (x + 2)" />
              <InlineMath math="= 2 + 2 = 4" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4" />
      </div>
    ),
  },
};

const TOPIC_CONTENT_EXERCISE: TopicContent = {
  example: {
    question: (
      <div className="text-left">
        គណនា <InlineMath math="\lim_{x \to 3} \frac{x^2 - 9}{x - 3}" />
      </div>
    ),
    steps: [
      {
        title: "ជំនួសដើម្បីកំណត់ទម្រង់",
        content: (
          <div className="text-left space-y-2">
            <div>
              នៅពេល x <InlineMath math="\to" /> 3 យើងជំនួសគ្រប់ x ដោយ 3:
            </div>
            <div>
              <InlineMath math="\frac{3^2 - 9}{3 - 3} = \frac{9 - 9}{0} = \frac{0}{0}" />
            </div>
            <div>បានទម្រង់មិនកំណត់</div>
          </div>
        ),
      },
      {
        title: "បំបែកកត្តាដើម្បីរកកត្តាសម្រួល",
        content: (
          <div className="text-left space-y-2">
            <div>
              <InlineMath math="x^2 - 9 = (x + 3)(x - 3)" />
            </div>
            <div>
              <InlineMath math="\frac{x^2 - 9}{x - 3} = \frac{(x + 3)(x - 3)}{x - 3} = x + 3" />
            </div>
          </div>
        ),
      },
      {
        title: "គណនាលីមីត",
        content: (
          <div className="text-left space-y-2">
            <div>
              <InlineMath math="\Rightarrow" />{" "}
              <InlineMath math="\lim_{x \to 3} \frac{x^2 - 9}{x - 3} " />
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 3} \frac{(x + 3)(x - 3)}{x - 3}" />
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 3} (x + 3) = 3 + 3 = 6" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ <InlineMath math="\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = 6" />
      </div>
    ),
  },
  tip: {
    title: "សំខាន់!",
    content: (
      <div className="text-left">
        <div>
          ពេលសម្រួលកត្តាមួយហើយនៅតែជំនួសចូលឃើញ{" "}
          <InlineMath math="\mathbf{\frac{0}{0}}" />
          <br />
          យើងត្រូវតែបំបែកកត្តាតទៅទៀតហើយសម្រួលកត្តាដូចគ្នាចោលទៀរហូតលែងចេញ{" "}
          <InlineMath math="\mathbf{\frac{0}{0}}" />
        </div>

        <div className="mt-6">
          <div className=" mb-3">រូបមន្តសំខាន់:</div>
          <div className="space-y-3 ">
            <div>
              ► បើ <InlineMath math="\sqrt{a} - \sqrt{b}" /> គេត្រូវគុណនឹង{" "}
              <InlineMath math="\sqrt{a} + \sqrt{b}" /> , (a,b)
            </div>
            <div>
              ► បើ n ជាចំនួនគត់ធំជាង 2 ៖{" "}
              <InlineMath math="\sqrt[n]{a} - \sqrt[n]{b}" />{" "}
              គេត្រូវគុណនឺងកន្សោម ៖
            </div>
            <div className="ml-4">
              <InlineMath math="\sqrt[n]{a^{n-1}} + \sqrt[n]{a^{n-2} \cdot b} + \sqrt[n]{a^{n-3} \cdot b^2} + ... + \sqrt[n]{a^2 \cdot b^{n-3}} + \sqrt[n]{a\cdot b^{n-2}} + \sqrt[n]{b^{n-1}}" />{" "}
              , (a,b)
            </div>
            <div>
              ► បើ n ជាចំនួន​គត់សេសធំជាង 1 ៖{" "}
              <InlineMath math="\sqrt[n]{a} - \sqrt[n]{b}" />{" "}
              គេត្រូវគុណនឺងកន្សោម ៖
            </div>
            <div className="ml-4">
              <InlineMath math="\sqrt[n]{a^{n-1}} + \sqrt[n]{a^{n-2} \cdot b} + \sqrt[n]{a^{n-3} \cdot b^2} + ... + \sqrt[n]{a^2 \cdot b^{n-3}} + \sqrt[n]{a\cdot b^{n-2}} + \sqrt[n]{b^{n-1}}" />{" "}
              , (a,b)
            </div>
            <div>
              ► បើ n ជាចំនួន​គត់សេសធំជាង 1 ៖{" "}
              <InlineMath math="\sqrt[n]{a} + \sqrt[n]{b}" />{" "}
              គេត្រូវគុណនឺងកន្សោម ៖
            </div>
            <div className="ml-4">
              <InlineMath math="\sqrt[n]{a^{n-1}} - \sqrt[n]{a^{n-2} \cdot b} + \sqrt[n]{a^{n-3} \cdot b^2} - ... + \sqrt[n]{a^2 \cdot b^{n-3}} - \sqrt[n]{a\cdot b^{n-2}} + \sqrt[n]{b^{n-1}}" />{" "}
              , (a,b)
            </div>
          </div>
        </div>
      </div>
    ),
  },
  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 1} \frac{x^2 - 1}{x - 1}" />
          </div>
        ),
        options: ["0", "2", "1", "∞"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 1} \frac{\sqrt{x}-1}{x-1}" />
          </div>
        ),
        options: ["1/2", "1", "-1/2", "3"],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 5} \frac{x^2 - 25}{x - 5}" />
          </div>
        ),
        options: ["5", "25", "10", "0"],
        correctAnswer: 2,
      },
      {
        id: "q4",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to -2} \frac{x^2 - 4}{x + 2}" />
          </div>
        ),
        options: ["-4", "4", "0", "-2"],
        correctAnswer: 0,
      },
      {
        id: "q5",
        question: (
          <div className="text-left">
            គណនា{" "}
            <InlineMath math="\lim_{x \to 8} \frac{\sqrt[3]{x} - 2}{x - 8}" />
          </div>
        ),
        options: ["1/6", "1/12", "1/2", "1/4"],
        correctAnswer: 1,
      },
      {
        id: "q6",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 1} \frac{x^3 - 1}{x - 1}" />
          </div>
        ),
        options: ["1", "0", "3", "2"],
        correctAnswer: 2,
      },
      {
        id: "q7",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 2} \frac{x^3 - 8}{x - 2}" />
          </div>
        ),
        options: ["8", "6", "12", "4"],
        correctAnswer: 2,
      },
      {
        id: "q8",
        question: (
          <div className="text-left">
            គណនា{" "}
            <InlineMath math="\lim_{x \to -1} \frac{x^2 + 2x + 1}{x + 1}" />
          </div>
        ),
        options: ["0", "-1", "1", "2"],
        correctAnswer: 0,
      },
    ],
  },
};

const LimitZeroOverZero = () => {
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

      {TOPIC_CONTENT_EXERCISE.example && (
        <ExampleBox
          question={TOPIC_CONTENT_EXERCISE.example.question}
          steps={TOPIC_CONTENT_EXERCISE.example.steps}
          answer={TOPIC_CONTENT_EXERCISE.example.answer}
        />
      )}

      {TOPIC_CONTENT_EXERCISE.tip && (
        <TipBox
          title={TOPIC_CONTENT_EXERCISE.tip.title}
          content={TOPIC_CONTENT_EXERCISE.tip.content}
        />
      )}

      {TOPIC_CONTENT_EXERCISE.exercise && (
        <ExerciseBox questions={TOPIC_CONTENT_EXERCISE.exercise.questions} />
      )}
    </>
  );
};

export default LimitZeroOverZero;
