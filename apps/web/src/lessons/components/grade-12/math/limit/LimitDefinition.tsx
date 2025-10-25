"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើលីមីតគឺជាអ្វី?",
    content: (
      <div className="text-sm">
        អនុ. f(x) មានលីមីត L កាលណា x ខិតជិត c បើគ្រប់ចំនួន{" "}
        <InlineMath math="\epsilon > 0" /> <br />
        គេអាចសរសេរ <InlineMath math="\delta > 0" /> ដែល{" "}
        <InlineMath math="0<|x - c| < \delta" /> នោះគ្រប់តម្លៃ{" "}
        <InlineMath math="|f(x) - L| < \epsilon" />
        <br /> យើងសរសេរ limx→c f(x) = L ដែលមានន័យថា នៅពេល x ខិតទៅរក c អនុគមន៍
        f(x) ខិតទៅរកតម្លៃ L។
      </div>
    ),
  },
  {
    type: "tip",
    title: "ចំណុចសំខាន់ៗ",
    content:
      "លីមីតមិនត្រូវការអនុគមន៍ត្រូវតែកំណត់នៅចំណុច a ទេ។ វាគ្រាន់តែត្រូវការអនុគមន៍កំណត់នៅជិតចំណុច a ប៉ុណ្ណោះ�। នេះជាមូលហេតុដែលធ្វើឱ្យលីមីតមានប្រយោជន៍ក្នុងការដោះស្រាយបញ្ហាដែលមិនអាចវាយតម្លៃបានដោយផ្ទាល់។",
  },
  {
    type: "example",
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
  {
    type: "exercise",
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
  {
    type: "hint",
    content:
      "ពេលដោះស្រាយលីមីត តែងតែពិនិត្យមើលថាតើអនុគមន៍កំណត់នៅចំណុចនោះឬទេ។ ប្រសិនបើកំណត់ អ្នកអាចជំនួសតម្លៃដោយផ្ទាល់។ ប្រសិនបើមិនកំណត់ អ្នកត្រូវប្រើបច្ចេកទេសផ្សេងទៀត។",
  },
  {
    type: "warning",
    content:
      "កុំច្រឡំរវាងលីមីតជាមួយនឹងតម្លៃអនុគមន៍។ លីមីតគឺជាតម្លៃដែលអនុគមន៍ខិតទៅរក មិនមែនជាតម្លៃអនុគមន៍នៅចំណុចនោះទេ។ ឧទាហរណ៍៖ អនុគមន៍អាចមិនកំណត់នៅ x = a ប៉ុន្តែលីមីតអាចមាន។",
  },
  {
    type: "graphExplanation",
    expressions: [
      { id: "1", latex: "f(x)=\\frac{x^2 - 4}{x - 2}", color: "#c00" },
    ],
    explanation:
      "ក្រាបនេះបង្ហាញពីរបៀបដែលអនុគមន៍ខិតទៅរកតម្លៃជាក់លាក់មួយ នៅពេលអថេរ x ខិតទៅរកចំណុច a។ លីមីតគឺជាតម្លៃ L ដែលអនុគមន៍ខិតទៅរក។",
    options: {
      showGrid: true,
      expressions: true,
      xAxisLabel: "x",
      yAxisLabel: "y",
    },
  },
];

// Simulate DB fetch
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

// ===== MAIN COMPONENT =====

export default function LimitDefinition() {
  return <ContentRendererV3 content={restoredContent} />;
}