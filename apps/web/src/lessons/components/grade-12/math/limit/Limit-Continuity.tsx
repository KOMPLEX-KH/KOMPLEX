"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { BlockMath, InlineMath } from "react-katex";

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ភាពជាប់ត្រង់មួយចំណុច",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            អនុគមន៍ <InlineMath math=" y = f(x)" /> មានភាពជាប់ត្រង់មួយចំណុច{" "}
            <InlineMath math="x = c " /> ប្រសិនបើលក្ខខណ្ឌទាំង ៣ ខាងក្រោមពេញលេញ៖
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <div className="font-semibold text-blue-800">លក្ខខណ្ឌភាពជាប់៖</div>
            <div>
              <strong>១.</strong> <InlineMath math="f" /> កំណត់ចំពោះ{" "}
              <InlineMath math="x = c" />
            </div>
            <div>
              <strong>២.</strong> <InlineMath math="f" /> មានលីមីតកាលណា
              <InlineMath math="x" /> <InlineMath math="\\rightarrow" />{" "}
              <InlineMath math="c" />
            </div>
            <div>
              <strong>៣.</strong>{" "}
              <InlineMath math="lim_{x \to a} f(x) = f(c)" />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="font-semibold text-green-800 mb-2">
              អនុវត្តន៍បន្លាយនៃភាពជាប់៖
            </div>
            <div>
              បើ <InlineMath math="f" /> ជាអនុគមន៍មិនកំណត់ត្រង់{" "}
              <InlineMath math="x = a" /> និងមាន
              <div className="flex flex-col">
                <div>
                  <InlineMath math="lim_{x \to a} f(x) = l" />
                  នោះ​​ <InlineMath math="f" /> មានភាពជាប់ត្រង់{" "}
                  <InlineMath math="a" />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div className="font-semibold text-sm">កំណត់ដោយ</div>
                  <BlockMath
                    math="g(x) = \begin{cases} 
                                f(x) & \text{if } x \neq c \\
                                l & \text{if } x = c
                                \end{cases}"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈនៃអនុគមន៍ជាប់",
    content: (
      <div className="text-left">
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">
              ប្រសិនបើ f និង g ជាអនុគមន៍ជាប់ត្រង់ x = a នោះ ៖
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <strong>១.</strong> <InlineMath math="f(x) + g(x)" />{" "}
                ជាអនុគមន៍ជាប់ត្រង់ <InlineMath math="x = a" />
              </div>
              <div>
                <strong>២.</strong> <InlineMath math="f(x) - g(x)" />{" "}
                ជាអនុគមន៍ជាប់ត្រង់ <InlineMath math="x = a" />
              </div>
              <div>
                <strong>៣.</strong> <InlineMath math="f(x) \cdot g(x)" />{" "}
                ជាអនុគមន៍ជាប់ត្រង់ <InlineMath math="x = a" />
              </div>
              <div>
                <strong>៤.</strong> <InlineMath math="\lambda f(x)" />{" "}
                ជាអនុគមន៍ជាប់ត្រង់ <InlineMath math="x = a" /> <br />(
                <InlineMath math="\lambda" /> ជាចំនួនពិត)
              </div>
              <div className=" text-base">
                <strong>៥.</strong> <InlineMath math="\frac{f(x)}{g(x)}" />{" "}
                ជាអនុគមន៍ជាប់ត្រង់ <InlineMath math="x = a" /> ប្រសិនបើ{" "}
                <InlineMath math="g(a) \neq 0" />
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">ភាពជាប់លើចន្លោះ៖</div>
            <div className="space-y-2">
              <div>
                • អនុគមន៍ <InlineMath math="f" /> ជាប់លើចន្លោះបើក{" "}
                <InlineMath math="(a,b)" /> លុះត្រា <InlineMath math="f" />{" "}
                មានជាប់ចំពោះគ្រប់ <InlineMath math="x" /> នៅចន្លោះបើកនោះ
              </div>
              <div>
                • អនុគមន៍ <InlineMath math="f" /> ជាប់លើចន្លោះបិទ{" "}
                <InlineMath math="[a,b]" /> លុះត្រា <InlineMath math="f" />{" "}
                ជាប់លើ <InlineMath math="(a,b)" /> និងមាន{" "}
                <InlineMath math="\lim_{x \to a^+} f(x) = f(a)" /> និង{" "}
                <InlineMath math="\lim_{x \to b^-} f(x) = f(b)" />
              </div>
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
        ពិនិត្យសនិទានភាពនៃអនុគមន៍ <InlineMath math="f" /> នៅចំណុច{" "}
        <InlineMath math="x = 0" />:
        <div className="mt-2">
          <InlineMath
            math="f(x) = \begin{cases} 
                \frac{3\sin x - \sin 3x}{x^3} & \text{ប្រសិនបើ } x \neq 0 \\
                4 & \text{ប្រសិនបើ } x = 0
                \end{cases}"
          />
        </div>
      </div>
    ),
    steps: [
      {
        title: "ពិនិត្យលក្ខខណ្ឌទី ១",
        content: (
          <div className="text-left space-y-2">
            <div>
              គេបាន <InlineMath math="f(0) = 4" /> កំណត់
            </div>
            <div>ដូច្នេះលក្ខខណ្ឌទី ១ ពេញលេញ ✓</div>
          </div>
        ),
      },
      {
        title: "ពិនិត្យលក្ខខណ្ឌទី ២",
        content: (
          <div className="text-left space-y-2">
            <div>
              គណនា{" "}
              <InlineMath math="\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{3\sin x - \sin 3x}{x^3}" />
            </div>
            <div>
              ប្រើរូបមន្ត <InlineMath math="\sin 3x = 3\sin x - 4\sin^3 x" />:
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 0} \frac{3\sin x - (3\sin x - 4\sin^3 x)}{x^3}" />
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 0} \frac{4\sin^3 x}{x^3}" />
            </div>
            <div>
              <InlineMath math="= 4 \lim_{x \to 0} \left(\frac{\sin x}{x}\right)^3 = 4 \cdot 1^3 = 4" />
            </div>
          </div>
        ),
      },
      {
        title: "ពិនិត្យលក្ខខណ្ឌទី ៣",
        content: (
          <div className="text-left space-y-2">
            <div>
              គេបាន <InlineMath math="\lim_{x \to 0} f(x) = f(0) = 4" />
            </div>
            <div>ដូច្នេះលក្ខខណ្ឌទី ៣ ពេញលេញ ✓</div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ <InlineMath math="f" /> មានភាពជាប់នៅចំណុច{" "}
        <InlineMath math="x = 0" />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="text-left">
        រកតម្លៃ <InlineMath math="a" /> ដើម្បីឱ្យអនុគមន៍{" "}
        <InlineMath math="f(x)" /> ជាប់នៅចំណុច <InlineMath math="x = 1" />:
        <div className="mt-2">
          <InlineMath
            math="f(x) = \begin{cases} 
                \frac{3x - a}{x^2 - 3x + 2} & \text{ប្រសិនបើ } x \leq 0 \\
                \frac{a}{x - 1} & \text{ប្រសិនបើ } x > 0
                \end{cases}"
          />
        </div>
        <div className="text-sm mt-2">
          ដោយ <InlineMath math="x = 1" />
        </div>
      </div>
    ),
    steps: [
      {
        title: "ពិនិត្យអនុគមន៍នៅ x = 1",
        content: (
          <div className="text-left space-y-2">
            <div>
              ដោយ <InlineMath math="x = 1 > 0" /> នេះ:
            </div>
            <div>
              <InlineMath math="f(1) = \frac{a}{1-1} = \frac{a}{0}" />{" "}
              (មិនកំណត់)
            </div>
            <div>
              ដូច្នេះអនុគមន៍មិនកំណត់នៅ <InlineMath math="x = 1" />
            </div>
          </div>
        ),
      },
      {
        title: "គណនាលីមីតពីឆ្វេង",
        content: (
          <div className="text-left space-y-2">
            <div>
              សម្រាប់ <InlineMath math="x \to 1^-" /> (ប្រើកន្សោមទី១):
            </div>
            <div>
              <InlineMath math="\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} \frac{3x - a}{x^2 - 3x + 2}" />
            </div>
            <div>
              ដោយ <InlineMath math="x^2 - 3x + 2 = (x-1)(x-2)" />:
            </div>
            <div>
              <InlineMath math="= \lim_{x \to 1^-} \frac{3x - a}{(x-1)(x-2)} = \frac{3-a}{0 \cdot (-1)}" />
            </div>
            <div>
              ដើម្បីឱ្យអនុគមន៍មានភាពជាប់ ត្រូវតែ <InlineMath math="3-a = 0" />{" "}
              ដូច្នេះ <InlineMath math="a = 3" />
            </div>
          </div>
        ),
      },
      {
        title: "ពិនិត្យលីមីតពីស្តាំ",
        content: (
          <div className="text-left space-y-2">
            <div>
              សម្រាប់ <InlineMath math="x \to 1^+" /> (ប្រើកន្សោមទី២):
            </div>
            <div>
              <InlineMath math="\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} \frac{a}{x-1} = \frac{a}{0^+}" />
            </div>
            <div>
              ដើម្បីឱ្យអនុគមន៍មានភាពជាប់ ត្រូវតែ <InlineMath math="a = 0" />
            </div>
            <div>ប៉ុន្តែនេះទំនាស់ជាមួយលីមីតពីឆ្វេង</div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        អនុគមន៍នេះមិនជាប់ត្រង់ចំណុច <InlineMath math="x = 1" /> បានទេ
        ដោយសារតែអនុគមន៍មិនកំណត់នៅចំណុចនោះ
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
            អនុគមន៍ <InlineMath math="f(x) = x^2 + 3x - 2" />{" "}
            ជាប់ត្រង់ចំណុចណាខាងក្រោម?
          </div>
        ),
        options: [
          "x = 0 ប៉ុណ្ណោះ",
          "x = 1 ប៉ុណ្ណោះ",
          "គ្រប់ចំណុច",
          "គ្មានចំណុចណា",
        ],
        correctAnswer: 2,
      },
      {
        id: "q2",
        question: (
          <div className="text-left">
            អនុគមន៍{" "}
            <InlineMath math="f(x) = \begin{cases} x+1 & x < 2 \\ 4 & x = 2 \\ x^2-1 & x > 2 \end{cases}" />{" "}
            មានភាពជាប់នៅ x = 2 ទេ?
          </div>
        ),
        options: ["មាន", "គ្មាន", "ពុំអាចកំណត់", "អាស្រ័យលើកន្សោម"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: (
          <div className="text-left">
            ប្រសិនបើ <InlineMath math="\lim_{x \to a} f(x) = 5" /> និង{" "}
            <InlineMath math="f(a) = 3" /> តើ f ជាប់ត្រង់ x = a ទេ?
          </div>
        ),
        options: ["មាន", "គ្មាន", "ពុំអាចកំណត់", "អាស្រ័យលើ a"],
        correctAnswer: 1,
      },
      {
        id: "q4",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \frac{1}{x-3}" />{" "}
            មានភាពជាប់នៅចន្លោះណាខាងក្រោម?
          </div>
        ),
        options: ["(-∞, 3)", "(3, +∞)", "(-∞, 3) ∪ (3, +∞)", "(-∞, +∞)"],
        correctAnswer: 2,
      },
      {
        id: "q5",
        question: (
          <div className="text-left">
            ប្រសិនបើ f និង g ជាប់ត្រង់ x = a នោះអនុគមន៍ណាខាងក្រោមមានភាពជាប់នៅ x
            = a?
          </div>
        ),
        options: ["f + g", "f × g", "3f", "ទាំងអស់"],
        correctAnswer: 3,
      },
      {
        id: "q6",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = |x|" /> ជាប់ត្រង់ x = 0 ទេ?
          </div>
        ),
        options: ["មាន", "គ្មាន", "ពុំអាចកំណត់", "អាស្រ័យលើនិយមន័យ"],
        correctAnswer: 0,
      },
      {
        id: "q7",
        question: (
          <div className="text-left">
            រកតម្លៃ k ដើម្បីឱ្យ{" "}
            <InlineMath math="f(x) = \begin{cases} x^2 & x \leq 1 \\ kx+1 & x > 1 \end{cases}" />{" "}
            ជាប់ត្រង់ x = 1
          </div>
        ),
        options: ["k = 0", "k = 1", "k = 2", "មិនមានតម្លៃ k"],
        correctAnswer: 0,
      },
      {
        id: "q8",
        question: (
          <div className="text-left">
            អនុគមន៍ <InlineMath math="f(x) = \sqrt{x}" />{" "}
            ជាប់ត្រង់ចន្លោះណាខាងក្រោម?
          </div>
        ),
        options: ["(-∞, +∞)", "[0, +∞)", "(0, +∞)", "[-1, 1]"],
        correctAnswer: 1,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            <strong>វិធីសាស្រ្តពិនិត្យភាពជាប់៖</strong>
          </div>
          <div>១. ពិនិត្យថាតើអនុគមន៍កំណត់នៅចំណុចនោះដែរឬទេ</div>
          <div>២. គណនាលីមីតពីឆ្វេង និងពីស្តាំ</div>
          <div>៣. ប្រៀបធៀបលីមីតជាមួយតម្លៃអនុគមន៍</div>
          <div>៤. សម្រាប់អនុគមន៍បំបែកចំណែក ត្រូវពិនិត្យនៅចំណុចបំបែក</div>
          <div>
            ៥. អនុគមន៍ពហុធា, អិចស្ប៉ូណង់ស្យែល, លោការីត មានភាពជាប់នៅដែនកំណត់
          </div>
        </div>
      </div>
    ),
  },
];

// Simulate database fetching
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

export default function LimitContinuity() {
  return <ContentRendererV3 content={restoredContent} />;
}