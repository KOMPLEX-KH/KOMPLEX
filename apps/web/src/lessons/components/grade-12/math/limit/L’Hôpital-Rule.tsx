"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ក្បួនរបស់ឡូពីតាល់ (L'Hôpital's Rule)",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            ក្បួនរបស់ ល៍ ហូពីតាល់ ប្រើសម្រាប់គណនាលីមីតដែលបានទម្រង់មិនកំណត់។
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-blue-800 mb-2">ក្បួនចម្បង៖</div>
            <div className="flex justify-start">
              <InlineMath math="\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} = \lim_{x \to x_0} \frac{f''(x)}{g''(x)} = \ldots = \lim_{x \to x_0} \frac{f^{(n)}(x)}{g^{(n)}(x)} = A" />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="font-semibold text-green-800 mb-2">
              លក្ខខណ្ឌប្រើប្រាស់៖
            </div>
            <div className="space-y-2">
              <div>
                • ប្រសិនបើ <InlineMath math="\lim_{x \to x_0} f(x) = 0" /> និង{" "}
                <InlineMath math="\lim_{x \to x_0} g(x) = 0" /> (ទម្រង់{" "}
                <InlineMath math="\frac{0}{0}" />)
              </div>
              <div>
                • ឬ <InlineMath math="\lim_{x \to x_0} f(x) = \pm\infty" /> និង{" "}
                <InlineMath math="\lim_{x \to x_0} g(x) = \pm\infty" /> (ទម្រង់{" "}
                <InlineMath math="\frac{\infty}{\infty}" />)
              </div>
              <div>• អនុគមន៍ f និង g ត្រូវតែអាចដេរីវេបាន</div>
              <div>
                • <InlineMath math="g'(x) \neq 0" /> នៅជិតចំណុច{" "}
                <InlineMath math="x_0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ទម្រង់មិនកំណត់",
    content: (
      <div className="text-left">
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">
              ទម្រង់មិនកំណត់ដែលអាចប្រើក្បួន L&apos;Hôpital៖
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-2 items-center">
                <div className="font-base">ទម្រង់ចម្បង៖</div>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <InlineMath math="\frac{0}{0}" />
                  </div>
                  <div>
                    <InlineMath math="\frac{\infty}{\infty}" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">ទម្រង់មិនកំណត់ផ្សេងទៀត៖</div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <InlineMath math="+\infty - \infty" />
              </div>
              <div>
                <InlineMath math="0 \times \infty" />
              </div>
              <div>
                <InlineMath math="1^{\infty}" />
              </div>
              <div>
                <InlineMath math="0^0" />
              </div>
              <div>
                <InlineMath math="\infty^0" />
              </div>
              <div>
                <InlineMath math="0^{\infty}" />
              </div>
              <div>
                <InlineMath math="(+\infty)(-\infty)" />
              </div>
            </div>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">របៀបបំលែងទម្រង់៖</div>
            <div className="space-y-2">
              <div>
                • <InlineMath math="0 \times \infty" /> →{" "}
                <InlineMath math="\frac{0}{\frac{1}{\infty}}" /> ឬ{" "}
                <InlineMath math="\frac{\infty}{\frac{1}{0}}" />
              </div>
              <div>
                • <InlineMath math="\infty - \infty" /> → រួមភាគ
              </div>
              <div>
                • <InlineMath math="1^{\infty}, 0^0, \infty^0" /> → ប្រើលោការីត
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">សំគាល់៖</div>
            <div>
              ពេលខ្លះត្រូវអនុវត្តក្បួន L&apos;Hôpital ច្រើនដងទៀត
              រហូតទាល់តែបានលីមីតកំណត់។
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="text-left">
        គណនាលីមីត <InlineMath math="\lim_{x \to 0} \frac{\sin x - x}{x^3}" />
      </div>
    ),
    steps: [
      {
        title: "ពិនិត្យទម្រង់",
        content: (
          <div className="text-left space-y-2">
            <div>នៅពេល x → 0:</div>
            <div>
              • ភាគយក: <InlineMath math="\sin 0 - 0 = 0" />
            </div>
            <div>
              • ភាគបែង: <InlineMath math="0^3 = 0" />
            </div>
            <div>
              បានទម្រង់ <InlineMath math="\frac{0}{0}" /> → អាចប្រើក្បួន
              L&apos;Hôpital
            </div>
          </div>
        ),
      },
      {
        title: "អនុវត្តក្បួន L&apos;Hôpital លើកទី ១",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដេរីវេភាគយក:{" "}
              <InlineMath math="\frac{d}{dx}(\sin x - x) = \cos x - 1" />
            </div>
            <div>
              ដេរីវេភាគបែង: <InlineMath math="\frac{d}{dx}(x^3) = 3x^2" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to 0} \frac{\sin x - x}{x^3} = \lim_{x \to 0} \frac{\cos x - 1}{3x^2}" />
            </div>
            <div>
              នៅ x = 0:{" "}
              <InlineMath math="\frac{\cos 0 - 1}{3 \cdot 0^2} = \frac{0}{0}" />{" "}
              (នៅតែទម្រង់មិនកំណត់)
            </div>
          </div>
        ),
      },
      {
        title: "អនុវត្តក្បួន L&apos;Hôpital លើកទី ២",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដេរីវេភាគយក:{" "}
              <InlineMath math="\frac{d}{dx}(\cos x - 1) = -\sin x" />
            </div>
            <div>
              ដេរីវេភាគបែង: <InlineMath math="\frac{d}{dx}(3x^2) = 6x" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to 0} \frac{\cos x - 1}{3x^2} = \lim_{x \to 0} \frac{-\sin x}{6x}" />
            </div>
            <div>
              នៅ x = 0: <InlineMath math="\frac{0}{0}" /> (នៅតែទម្រង់មិនកំណត់)
            </div>
          </div>
        ),
      },
      {
        title: "អនុវត្តក្បួន L&apos;Hôpital លើកទី ៣",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដេរីវេភាគយក: <InlineMath math="\frac{d}{dx}(-\sin x) = -\cos x" />
            </div>
            <div>
              ដេរីវេភាគបែង: <InlineMath math="\frac{d}{dx}(6x) = 6" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to 0} \frac{-\sin x}{6x} = \lim_{x \to 0} \frac{-\cos x}{6} = \frac{-\cos 0}{6} = \frac{-1}{6}" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ{" "}
        <InlineMath math="\lim_{x \to 0} \frac{\sin x - x}{x^3} = -\frac{1}{6}" />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="text-left">
        គណនាលីមីត <InlineMath math="\lim_{x \to +\infty} \frac{e^x}{x^2}" />
      </div>
    ),
    steps: [
      {
        title: "ពិនិត្យទម្រង់",
        content: (
          <div className="text-left space-y-2">
            <div>នៅពេល x → +∞:</div>
            <div>
              • ភាគយក: <InlineMath math="e^{+\infty} = +\infty" />
            </div>
            <div>
              • ភាគបែង: <InlineMath math="(+\infty)^2 = +\infty" />
            </div>
            <div>
              បានទម្រង់ <InlineMath math="\frac{\infty}{\infty}" /> →
              អាចប្រើក្បួន L&apos;Hôpital
            </div>
          </div>
        ),
      },
      {
        title: "អនុវត្តក្បួន L&apos;Hôpital លើកទី ១",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដេរីវេភាគយក: <InlineMath math="\frac{d}{dx}(e^x) = e^x" />
            </div>
            <div>
              ដេរីវេភាគបែង: <InlineMath math="\frac{d}{dx}(x^2) = 2x" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to +\infty} \frac{e^x}{x^2} = \lim_{x \to +\infty} \frac{e^x}{2x}" />
            </div>
            <div>
              នៅ x → +∞: <InlineMath math="\frac{+\infty}{+\infty}" />{" "}
              (នៅតែទម្រង់មិនកំណត់)
            </div>
          </div>
        ),
      },
      {
        title: "អនុវត្តក្បួន L&apos;Hôpital លើកទី ២",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដេរីវេភាគយក: <InlineMath math="\frac{d}{dx}(e^x) = e^x" />
            </div>
            <div>
              ដេរីវេភាគបែង: <InlineMath math="\frac{d}{dx}(2x) = 2" />
            </div>
            <div>
              <InlineMath math="\lim_{x \to +\infty} \frac{e^x}{2x} = \lim_{x \to +\infty} \frac{e^x}{2} = +\infty" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ{" "}
        <InlineMath math="\lim_{x \to +\infty} \frac{e^x}{x^2} = +\infty" />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 0} \frac{\sin 2x}{x}" />
          </div>
        ),
        options: ["0", "1", "2", "∞"],
        correctAnswer: 2,
      },
      {
        id: "q2",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 1} \frac{x^2 - 1}{x - 1}" />
          </div>
        ),
        options: ["1", "2", "0", "∞"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x}" />
          </div>
        ),
        options: ["1", "0", "∞", "e"],
        correctAnswer: 1,
      },
      {
        id: "q4",
        question: (
          <div className="text-left">
            ទម្រង់ណាខាងក្រោមអាចប្រើក្បួន L&apos;Hôpital បាន?
          </div>
        ),
        options: ["0/0", "∞/∞", "ទាំងពីរ", "គ្មាន"],
        correctAnswer: 2,
      },
      {
        id: "q5",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 0} \frac{e^x - 1}{x}" />
          </div>
        ),
        options: ["0", "1", "e", "∞"],
        correctAnswer: 1,
      },
      {
        id: "q6",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 0} \frac{\tan x}{x}" />
          </div>
        ),
        options: ["0", "1", "∞", "មិនកំណត់"],
        correctAnswer: 1,
      },
      {
        id: "q7",
        question: (
          <div className="text-left">
            ទម្រង់ <InlineMath math="0 \times \infty" /> ត្រូវបំលែងទៅជាប្រភេទណា?
          </div>
        ),
        options: ["0/0", "∞/∞", "ទាំងពីរបាន", "មិនអាចបំលែង"],
        correctAnswer: 2,
      },
      {
        id: "q8",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 0^+} x \ln x" />
          </div>
        ),
        options: ["0", "1", "-∞", "∞"],
        correctAnswer: 0,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            <strong>យុទ្ធសាស្ត្រប្រើក្បួន L&apos;Hôpital៖</strong>
          </div>
          <div>១. ពិនិត្យថាបានទម្រង់មិនកំណត់ 0/0 ឬ ∞/∞ ឬទេ</div>
          <div>២. ពិនិត្យថាអនុគមន៍អាចដេរីវេបាន</div>
          <div>៣. ដេរីវេភាគយក និងភាគបែងដោយឡែក</div>
          <div>៤. គណនាលីមីតថ្មី</div>
          <div>៥. ប្រសិនបើនៅតែទម្រង់មិនកំណត់ អនុវត្តម្តងទៀត</div>
          <div>
            ៦. សម្រាប់ទម្រង់ផ្សេង (0×∞, 1^∞, ...) បំលែងទៅ 0/0 ឬ ∞/∞ ជាមុនសិន
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "warning",
    content: (
      <div className="text-left">
        <div>
          <strong>ប្រុងប្រយ័ត្ន៖</strong>
        </div>
        <div>
          • មិនអាចប្រើក្បួន L&apos;Hôpital លើទម្រង់ធម្មតា (មិនមែនមិនកំណត់)
        </div>
        <div>• ពេលខ្លះលីមីតនៃដេរីវេមិនមានទេ ប៉ុន្តែលីមីតដើមមាន</div>
        <div>• ត្រូវពិនិត្យលក្ខខណ្ឌអនុវត្តមុនប្រើ</div>
      </div>
    ),
  },
];

// Stage 2: Serialize to JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialize to restore renderable content
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

export default function LHopitalRule() {
  return <ContentRendererV3 content={restoredContent} />;
}