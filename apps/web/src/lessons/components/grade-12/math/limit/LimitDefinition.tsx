import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import { GraphExplanationBox } from "@/components/pages/docs/boxes/explanation-box/GraphExplanationBox";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "តើលីមីតគឺជាអ្វី?",
    content: (
      <div className="text-sm">
        អនុ. f(x) មានលីមីត​ L កាលណា x ខិតជិត c​ បើគ្រប់ចំនួន{" "}
        <InlineMath math="\epsilon > 0" /> <br />
        គេអាចសរសេរ <InlineMath math="\delta > 0" /> ដែល{" "}
        <InlineMath math="0<|x - c| < \delta" /> នោះគ្រប់តម្លៃ{" "}
        <InlineMath math="|f(x) - L| < \epsilon" />
        <br /> យើងសរសេរ limx→c f(x) = L ដែលមានន័យថា នៅពេល x ខិតទៅរក c អនុគមន៍
        f(x) ខិតទៅរកតម្លៃ L។
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content:
      "លីមីតមិនត្រូវការអនុគមន៍ត្រូវតែកំណត់នៅចំណុច a ទេ។ វាគ្រាន់តែត្រូវការអនុគមន៍កំណត់នៅជិតចំណុច a ប៉ុណ្ណោះ។ នេះជាមូលហេតុដែលធ្វើឱ្យលីមីតមានប្រយោជន៍ក្នុងការដោះស្រាយបញ្ហាដែលមិនអាចវាយតម្លៃបានដោយផ្ទាល់។",
  },

  example: {
    question: (
      <div className="flex flex-row gap-2 ml-2.5">
        រក <InlineMath math="\lim_{x \to 2} (x^2 + 3x - 2)" />
      </div>
    ),
    steps: [
      {
        title: "ជំនួសតម្លៃ x = 2",
        content: "យើងជំនួស x = 2 ទៅក្នុងអនុគមន៍៖ (2)² + 3(2) - 2",
      },
      {
        title: "គណនាតម្លៃ",
        content: "= 4 + 6 - 2 = 8",
      },
      {
        title: "ចម្លើយ",
        content: "ដូច្នេះ limx→2 (x² + 3x - 2) = 8",
      },
    ],
    answer: "លីមីតគឺ 8",
  },

  exercise: {
    questions: [
      {
        id: "q1",
        question: "រកលីមីតៈ limx→1 (x² + 2x + 1)",
        options: ["១", "២", "៤", "៥"],
        correctAnswer: 2,
      },
      {
        id: "q2",
        question: "រកលីមីតៈ limx→3 (x³ - 2x)",
        options: ["១៥", "១៨", "២១", "២៤"],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: "តើ limx→0 (x + 5) ស្មើប៉ុណ្ណា?",
        options: ["០", "៥", "មិនកំណត់", "មិនមាន"],
        correctAnswer: 1,
      },
    ],
  },

  hint: {
    content:
      "ពេលដោះស្រាយលីមីត តែងតែពិនិត្យមើលថាតើអនុគមន៍កំណត់នៅចំណុចនោះឬទេ។ ប្រសិនបើកំណត់ អ្នកអាចជំនួសតម្លៃដោយផ្ទាល់។ ប្រសិនបើមិនកំណត់ អ្នកត្រូវប្រើបច្ចេកទេសផ្សេងទៀត។",
  },

  warning: {
    content:
      "កុំច្រឡំរវាងលីមីតជាមួយនឹងតម្លៃអនុគមន៍។ លីមីតគឺជាតម្លៃដែលអនុគមន៍ខិតទៅរក មិនមែនជាតម្លៃអនុគមន៍នៅចំណុចនោះទេ។ ឧទាហរណ៍៖ អនុគមន៍អាចមិនកំណត់នៅ x = a ប៉ុន្តែលីមីតអាចមាន។",
  },

  graphExplanation: {
    expressions: [
      { id: "1", latex: "f(x)=\\frac{x^2 - 4}{x - 2}", color: "#c00" },
    ],
    explanation:
      "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ខិតទៅរកតម្លៃជាក់លាក់មួយ នៅពេលអថេរ x ខិតទៅរកចំណុច a។ លីមីតគឺជាតម្លៃ L ដែលអនុគមន៍ខិតទៅរក។",
  },
};

// ===== MAIN COMPONENT =====

export default function LimitDefinition() {
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

      {TOPIC_CONTENT.graphExplanation && (
        <GraphExplanationBox
          expressions={TOPIC_CONTENT.graphExplanation.expressions}
          explanation={TOPIC_CONTENT.graphExplanation.explanation}
        />
      )}
    </>
  );
}
