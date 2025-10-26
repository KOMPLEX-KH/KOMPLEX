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
    title: "និយមន័យដេរីវេ",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <p>
              បើ
              <InlineMath math={String.raw`f`} />
              ជាអនុគមន៍មួយលើចន្លោះមួយ <InlineMath math={String.raw`I`} />
              និងមានដេរីវេត្រង់គ្រប់ចំណុចទាំងអស់នៅក្នុងចន្លោះ​{" "}
              <InlineMath math={String.raw`I`} /> នោះគេថាអនុគមន៍
              <InlineMath math={String.raw`f`} /> មានដេរីវេលើចន្លោះ​{" "}
              <InlineMath math={String.raw`I`} />។
            </p>
          </li>

          <li>
            <p>
              អនុគមន៍ដែលគ្រប់
              <InlineMath math={String.raw`x\in I`} /> ផ្សំបានចំនួនដេរីវេ
              <InlineMath math={String.raw`f`} />
              ត្រង់
              <InlineMath math={String.raw`x`} />
              ហៅថាអនុគមន៍ដេរីវេនៃ
              <InlineMath math={String.raw`f`} /> ដែលគេកំណត់សរសេរ{" "}
              <InlineMath math={String.raw`f': x\mapsto f'(x)`} />។
            </p>
          </li>

          <li>
            <p>
              ដេរីវេ​ <InlineMath math={String.raw`f'(x)`} />
              នៃអនុគមន៍ <InlineMath math={String.raw`y=f(x)`} />{" "}
              គឺជាអនុគមន៍ដែលកំណត់ដោយ
            </p>
            <BlockMath
              math={String.raw`f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}`}
            />
          </li>
        </ul>
      </>
    ),
  },
  {
    type: "tip",
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div>
        <p>
          គេអាចប្រើនិមិត្តសញ្ញា{" "}
          <InlineMath
            math={String.raw`y' = f'(x) = \frac{dy}{dx} = \frac{df(x)}{dx}`}
          />
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{រក } f'(2) \text{ ដោយនិយមន័យ សម្រាប់ } f(x)=x^2+3x-2`}
      />
    ),
    steps: [
      {
        title: "សរសេរនិយមន័យ",
        content: (
          <>
            <InlineMath
              math={String.raw`f'(2)=\lim_{h\to0}\frac{f(2+h)-f(2)}{h}`}
            />
          </>
        ),
      },
      {
        title: "ជំនួសអនុគមន៍",
        content: (
          <>
            <div>
              <InlineMath math={String.raw`\text{ដោយ}​ f(x)=x^2+3x-2` }/>
            </div>
            <InlineMath math={String.raw`នោះ f(2+h)=(2+h)^2+3(2+h)-2`} />
            <InlineMath math={String.raw``} />
            <div>
              <InlineMath math={String.raw`\text{ដោយ}​ f(2)=2^2+3\cdot2 -2 = 8` }/>
            </div>
          </>
        ),
      },
      {
        title: "រៀបចំប្រភាគ",
        content: (
          <InlineMath
            math={String.raw`\frac{(2+h)^2+3(2+h)-2-8}{h}
=\frac{h^2+7h}{h}=h+7`}
          />
        ),
      },
      {
        title: "យកលីមីត",
        content: <InlineMath math={String.raw`\lim_{h\to0}(h+7)=7`} />,
      },
    ],
    // Converted string answer to JSX per new pattern
    answer: <InlineMath math="f'(2) = 7" />,
  },
  {
    type: "exercise", // Converted from object key
    questions: [
      // 1
      {
        id: "dd1",
        question: (
          <BlockMath
            math={String.raw`\text{គណនា }f'(3)\text{ ដោយនិយមន័យ សម្រាប់ }f(x)=x^2+3x-2`}
          />
        ),
        // Converted JSX options to string[]
        options: ["6", "7", "8", "9"],
        correctAnswer: 3,
      },
      // 2
      {
        id: "dd2",
        question: (
          <BlockMath
            math={String.raw`\text{ជ្រើសរើសនិយមន័យត្រឹមត្រូវរបស់ }f'(a)`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\lim_{h\to0}\frac{f(a+h)-f(a)}{h}`,
          String.raw`\lim_{h\to0}\frac{f(a)-f(a+h)}{h}`,
          String.raw`\lim_{x\to a}\frac{f(a)-f(x)}{x-a}`,
          String.raw`\lim_{h\to0}\frac{f(a+h)}{h}`,
        ],
        correctAnswer: 0,
      },
      // 3
      {
        id: "dd3",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\text{ ដោយនិយមន័យ សម្រាប់ }f(x)=x^2`}
          />
        ),
        // Converted JSX options to string[]
       options: [
          <InlineMath key="dd3o0" math="2" />,
          <InlineMath key="dd3o1" math="a^2" />,
          <InlineMath key="dd3o2" math="2a" />,
          <InlineMath key="dd3o3" math="a" />,
        ],
        correctAnswer: 2,
      },
      // 4
      {
        id: "dd4",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(1)\ \text{សម្រាប់}\ f(x)=x^3+1`}
          />
        ),
        // Converted JSX options to string[]
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
      // 5
      {
        id: "dd5",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=mx+b`}
          />
        ),
        // Converted JSX options to string[]
        options: ["m", "b", "a", "0"],
        correctAnswer: 0,
      },
      // 6
      {
        id: "dd6",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(1)\ \text{សម្រាប់}\ f(x)=\frac{1}{x}`}
          />
        ),
        // Converted JSX options to string[]
        options: ["1", "-1", "-2", "0"],
        correctAnswer: 1,
      },
      // 7
      {
        id: "dd7",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(4)\ \text{សម្រាប់}\ f(x)=\sqrt{x}`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\tfrac12`,
          String.raw`\tfrac14`,
          String.raw`\tfrac18`,
          "1",
        ],
        correctAnswer: 1,
      },
      // 8
      {
        id: "dd8",
        question: (
          <BlockMath math={String.raw`\lim_{h\to0}\frac{(2+h)^2-4}{h}=\ ?`} />
        ),
        // Converted JSX options to string[]
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      // 9
      {
        id: "dd9",
        question: (
          <BlockMath
            math={String.raw`\lim_{h\to0}\frac{(2+h)^2+3(2+h)-2-\big(2^2+3\cdot2-2\big)}{h}=\ ?`}
          />
        ),
        
        options: ["6", "7", "8", "9"],
        correctAnswer: 1,
      },
      // 10
      {
        id: "dd10",
        question: (
          <BlockMath math={String.raw`\text{ជ្រើសរើសទម្រង់ស្មើនៃ } f'(a)`} />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`,
          String.raw`\lim_{x\to a}\frac{f(a)-f(x)}{h}`,
          String.raw`\lim_{h\to0}\frac{f(x+h)-f(a)}{x-a}`,
          String.raw`\frac{f(a+h)-f(a)}{h}`,
        ],
        correctAnswer: 0,
      },
      // 11
      {
        id: "dd11",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^4`}
          />
        ),
        options: [
          <InlineMath math="2a^3" key="dd11o0" />,
          <InlineMath math="3a^2" key="dd11o1" />,
          <InlineMath math="4a^3" key="dd11o2" />,
          <InlineMath math="a^4" key="dd11o3" />,
        ],
        correctAnswer: 2,
      },
      // 12
      {
        id: "dd12",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(x)\ \text{សម្រាប់}\ f(x)=x^2+3x`}
          />
        ),
        options: [
          <InlineMath math="2x+3" key="dd12o0" />,
          <InlineMath math="2x" key="dd12o1" />,
          <InlineMath math="3x" key="dd12o2" />,
          <InlineMath math="x^2" key="dd1123" />,
        ],
        correctAnswer: 0,
      },
      // 13
      {
        id: "dd13",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^{-1}`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`-\frac{1}{a^2}`,
          String.raw`\frac{1}{a^2}`,
          String.raw`-\frac{1}{a}`,
          String.raw`\frac{1}{a}`,
        ],
        correctAnswer: 0,
      },
      // 14
      {
        id: "dd14",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=\sqrt{x}`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{1}{2\sqrt{a}}`,
          String.raw`\frac{1}{\sqrt{a}}`,
          String.raw`\frac{1}{2a}`,
          String.raw`\frac{a}{2}`,
        ],
        correctAnswer: 0,
      },
      // 15
      {
        id: "dd15",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(2)\ \text{សម្រាប់}\ f(x)=3x-5`}
          />
        ),
        // Converted JSX options to string[]
        options: ["3", "-5", "1", "0"],
        correctAnswer: 0,
      },
      // 16
      {
        id: "dd16",
        question: (
          <BlockMath
            math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^n\ (n\in\mathbb{N})`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`n a^{\,n-1}`,
          <InlineMath math="a^n" key="dd16o1" />,
          String.raw`(n-1)a^{\,n}`,
          String.raw`n a^{\,n}`,
        ],
        correctAnswer: 0,
      },
      // 17
      {
        id: "dd17",
        question: (
          <BlockMath
            math={String.raw`\text{សូមជ្រើសរើស៖ }(c)'\ \text{ស្មើ} \ ?`}
          />
        ),
        // Converted JSX options to string[]
        options: ["0", "c", "1", "x"],
        correctAnswer: 0,
      },
      // 18
      {
        id: "dd18",
        question: (
          <BlockMath
            math={String.raw`\text{គណនា } \lim_{h\to0}\frac{(a+h)^2-a^2}{h}`}
          />
        ),
        // Converted JSX options to string[]
        options: ["a", "2a", <InlineMath math="a^n" key="dd18o3" />, "2"],
        correctAnswer: 1,
      },
      // 19
      {
        id: "dd19",
        question: (
          <BlockMath
            math={String.raw`\text{គណនា } \lim_{h\to0}\frac{\sqrt{a+h}-\sqrt{a}}{h}\ \ (a>0)`}
          />
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{1}{2\sqrt{a}}`,
          String.raw`\frac{1}{\sqrt{a}}`,
          String.raw`\frac{1}{a}`,
          String.raw`\frac{1}{2a}`,
        ],
        correctAnswer: 0,
      },
      // 20
      {
        id: "dd20",
        question: (
          <>
            <p>ដេរីវេនៅ x = 0 សម្រាប់អនុគមន៍ខាងក្រោម៖</p>
            <BlockMath math={String.raw`f(x)=|x|`} />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          "មាន និងស្មើ 0",
          "មាន និងស្មើ 1",
          "មាន និងស្មើ −1",
          "មិនមាន",
        ],
        correctAnswer: 3,
      },
    ],
  },
  // {
  //   type: "hint", // Converted from object key
  //   content: <div></div>,
  // },
  // {
  //   type: "warning", // Converted from object key
  //   content: (
  //     <>
  //       <p>
  //         • អាចមិនមានដេរីវេនៅចំណុចដែលអនុគមន៍មានជ្រុង/កាត់ទ្វេដង (ឧ.{" "}
  //         <BlockMath math={String.raw`f(x)=|x|`} /> នៅ x=0).
  //       </p>
  //       <p>
  //         • ប្រយ័ត្ននឹងសញ្ញាគុណ <BlockMath math={String.raw`\cdot`} />{" "}
  //         និងការប្រើ <code>String.raw</code> នៅក្នុង{" "}
  //         <code>&lt;BlockMath&gt;</code> ដើម្បីជៀសវាង escape ខុស។
  //       </p>
  //     </>
  //   ),
  // },
];

// ===== MAIN COMPONENT =====

// Refactored to use the new V3 pattern
export default function DerivativeDefinition() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3);

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}