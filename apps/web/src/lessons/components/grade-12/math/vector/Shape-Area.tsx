import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { TopicContent } from "@/types/docs/topic";
import { InlineMath } from "react-katex";

import { BlockMath } from "react-katex";
import { GraphExplanationBox } from "@/components/pages/docs/boxes/explanation-box/GraphExplanationBox";

// ===== TOPIC CONTENT DATA =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ផ្ទៃក្រឡាត្រីកោណ",
    content: (
      <>
        <div mt-4>
          • ត្រីកោណ
          គឺជារាងភ្លោះប្លង់ដែលកើតឡើងពីរចំណុចបី​មិនស្របគ្នា​តភ្ជាប់ដោយបន្ទាត់ត្រង់។{" "}
          <br />
        </div>
        លក្ខណៈសំខាន់ៗរបស់ត្រីកោណមានដូចជា៖
        <div>• មាន 3 ជ្រុងនិង 3 មុំ</div>
        <div>• ផលបូកមុំទាំង 3 គឺ 180 ដឺក្រេ</div>
        <ImageExplanationBox
          src="/triangle.png"
          imageAlt="2D Vector"
          explanation={
            <>
              <b>ផ្ទៃក្រឡាត្រីកោណ ABC កំណត់ដោយរូបមន្ត៖</b>
              <BlockMath
                math={String.raw`S = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|`}
              />
              <BlockMath
                math={String.raw`S = \frac{1}{2} |\overrightarrow{BA} \times \overrightarrow{BC}|`}
              />
              <BlockMath
                math={String.raw`S = \frac{1}{2} |\overrightarrow{CA} \times \overrightarrow{CB}|`}
              />
              <InlineMath math="S" /> ជាបរិមាណផ្ទៃ, ខ្នាតគិតជា (ឯកតាផ្ទៃ)
            </>
          }
        />
      </>
    ),
  },
  example: {
    question: (
      <>
        នៅក្នុងតម្រុយអរតូណម៉ាល់់មានទិសដៅវិជ្ជាមាន​{" "}
        <InlineMath math={"\\vec{i}, \\vec{j}, \\vec{k}"} /> គឲ្យមានចំណុ
        A(-1,4,4) ; B(1,2,3) និង C(3,2,4) ។<br />
        <b>គណនាផ្ទៃក្រឡានៃត្រីកោណ ABC</b>
      </>
    ),
    steps: [
      {
        title: "គណនាផ្ទៃក្រឡានៃត្រីកោណ ABC",
        content: (
          <>
            គេមានពីរចំណុច <InlineMath math="A(1,4,4)" />,{" "}
            <InlineMath math="B(1,2,3)" />
            និង <InlineMath math="C(3,2,4)" />
            ។
            <br />
            តាមរូបមន្ត​​៖{" "}
            <InlineMath math="S = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|" />
            <br />
            {/* ​នាំឲ៖​​  <InlineMath math="S = \frac{1}{2} |(0, -2, -1) \times (2, -2, 0)|" />​ <br />
            ​ដូចនេះយើង​បាន៖  <InlineMath math="S = \frac{1}{2} |(-2, -2, 4)|" />​ <br />
            ​នាំឲ៖​​  <InlineMath math="S = \frac{1}{2} \sqrt{(-2)^2 + (-2)^2 + 4^2} = \frac{1}{2} \sqrt{24} = 2\sqrt{6}" />​ */}
          </>
        ),
      },
      {
        title: "រកប្រវែងនៃវ៉ិចទ័រ (AB × AC)",
        content: (
          <>
            ដើម្បីរកប្រវែងនៃវ៉ិចទ័រ (AB × AC) យើងត្រូវគណនាផលគុណវ៉ិចទ័រ៖ <br />
            <InlineMath
              math={String.raw`|\overrightarrow{AB} \times \overrightarrow{AC}| = |(0, -2, -1) \times (2, -2, 0)|`}
            />{" "}
            <br />
            <br />
            <InlineMath math={String.raw`= |(-2, -2, 4)|`} /> <br />
            <br />
            <InlineMath
              math={String.raw`= \sqrt{(-2)^2 + (-2)^2 + 4^2}`}
            />{" "}
            <br />
            <br />
            <InlineMath
              math={String.raw`= \sqrt{4 + 4 + 16} = \sqrt{24} = 2\sqrt{6}`}
            />
          </>
        ),
      },
      {
        title: "ជួសតម្លៃចូលតាមរូបមន្ត",
        content: (
          <>
            យើង​បាន៖​ <InlineMath math="S = \frac{1}{2} \times 2\sqrt{6}" />​{" "}
            <br />
            <br />
            ដូចនេះផ្ទៃក្រឡានៃត្រីកោណ ABC គឺ{" "}
            <InlineMath math="= \sqrt{6} ឯកតាផ្ទៃ" />។
          </>
        ),
      },
    ],
    answer: <InlineMath math="S = 2\sqrt{6} ឯកតាផ្ទៃ " />,
  },
  hint: {
    content: (
      <div>
        • ដើម្បីរកផ្ទៃក្រឡានៃត្រីកោណ ABC អ្នកអាចប្រើរូបមន្ត{" "}
        <InlineMath math="S = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|" />
        ។<br />
        • ចូរបញ្ចូលតម្លៃនៃ <InlineMath math="\overrightarrow{AB}" /> និង{" "}
        <InlineMath math="\overrightarrow{AC}" /> ដើម្បីគណនាផ្ទៃ។
      </div>
    ),
  },
};
const TOPIC_CONTENT_PARALLELOGRAM: TopicContent = {
  definition: {
    title: "ផ្ទៃក្រឡាប្រលេឡូក្រាម",
    content: (
      <>
        <div className="ml-2">
          ក្រឡាប្រលេឡូក្រាម
          គឺជាចតុកោណដែលមានជ្រុងទាំងពីរគូទល់គ្នាស្របគ្នានិងប្រវែងស្មើគ្នា។
          <br />
          លក្ខណៈសំខាន់ៗរបស់ក្រឡាប្រលេឡូក្រាមមានដូចជា៖
          <div className="ml-2">
            • ជ្រុងពីរទល់គ្នាស្របរៀងគ្នា <br />• ​មុំគូទល់គ្នាស្មើគ្នា
          </div>
        </div>
        <ImageExplanationBox
          src="/parallelogram.png"
          imageAlt="2D Vector"
          explanation={
            <>
              <b>ផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD កំណត់ដោយរូបមន្ត៖</b>
              <BlockMath math={String.raw`S = b \cdot h`} />
              <BlockMath
                math={String.raw`S = |\overrightarrow{AB} \times \overrightarrow{AC}|`}
              />
              <BlockMath
                math={String.raw`S = |\overrightarrow{AB} \times \overrightarrow{AD}|`}
              />
              <BlockMath
                math={String.raw`S = |\overrightarrow{AC} \times \overrightarrow{AD}|`}
              />
              (​ដែល <InlineMath math="b" />: ជាបាត និង <InlineMath math="h" />:
              ជាកម្ពស់)
            </>
          }
        />
      </>
    ),
  },
  example: {
    question: (
      <>
        ក្នុងតម្រុយអរតូណរម៉ាល់មានទិសដៅវិជ្ជមាន{" "}
        <InlineMath math={"\\vec{i}, \\vec{j}, \\vec{k}"} /> គមានចំណុ A(2,2,1) ,
        B(4,-2,0) , C(3,1,1) និង D(1,5,2)។
        <br />
        បង្ហាញថាចតុកោណ​ ABCD គឺជាក្រឡាប្រលេឡូក្រាម រួចរកផ្ទៃក្រឡាប្រលេឡូក្រាម
        ABCD ។<br />
      </>
    ),
    steps: [
      {
        title: "បង្ហាញថាចតុកោណ ABCD គឺជាក្រឡាប្រលេឡូក្រាម",
        content: (
          <>
            យើងមានចំណុ A(2,2,1) , B(4,-2,0) , C(3,1,1) និង D(1,5,2)។
            <br />
            <br />
            គេបាន: <br />
            <br />
            <InlineMath math="\overrightarrow{AB} = (4 -2, -2 - 2, 0 - 1) = (2, -4, -1)" />{" "}
            <br />
            <br />
            <InlineMath math="\overrightarrow{CD} = (1 - 3, 5 - 1, 2 - 1) = (-2, 4, 1)" />{" "}
            <br />
            <br />
            ដោយ{" "}
            <InlineMath math="\overrightarrow{AB} = -\overrightarrow{CD} <=> \overrightarrow{AB} = \overrightarrow{DC}" />{" "}
            មានន័យថា
            <InlineMath math="\overrightarrow{AB} \parallel \overrightarrow{CD}" />{" "}
            និង <InlineMath math="\overrightarrow{AD} = \overrightarrow{BC}" />{" "}
            <br />
            <br />
            ក្នុងចតុកោណ ABCD មានជ្រុងពីរឈមគ្នាស្របរៀងគ្នា និងប្រវែងស្មើគ្នា
            ដូច្នេះ ABCD គឺជាក្រឡាប្រលេឡូក្រាម។
          </>
        ),
      },
      {
        title: "រកផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD ",
        content: (
          <>
            តាមរូបមន្ត៖
            <InlineMath math="S = |\overrightarrow{AB} \times \overrightarrow{AC}| = |\overrightarrow{AB} \times \overrightarrow{AD}|" />{" "}
            <br />
            <br />
            តាមកំពូលទាំងបួនខាងលើគេបាន៖ <br />
            <InlineMath math="\overrightarrow{AB} = (2, -4, -1)" /> <br />
            <InlineMath math="\overrightarrow{AD} = (-1, 3, 1)" /> <br />
            នាំឲ៖{" "}
            <InlineMath
              math={String.raw`\vec{AB}\times\vec{AD} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & -4 & -1 \\ -1 & 3 & 1 \end{vmatrix}`}
            />{" "}
            <br />
            <br />
            <div className="ml-4">
              <InlineMath math=" = \begin{vmatrix} -4 & -1 \\ 3 & 1 \end{vmatrix}\vec{i} - \begin{vmatrix} 2 & -1 \\ -1 & 1 \end{vmatrix}\vec{j} + \begin{vmatrix} 2 & -4 \\ -1 & 3 \end{vmatrix}\vec{k}" />{" "}
              <br />
              <br />
              <InlineMath
                math={String.raw`= (-4 \times 1 - (-1) \times 3)\vec{i} - (2 \times 1 - (-1) \times (-1))\vec{j} + (2 \times 3 - (-4) \times -1)\vec{k}`}
              />{" "}
              <br />
              <br />
              <InlineMath
                math={String.raw`= (-4 + 3)\vec{i} - (2 - 1)\vec{j} + (6 - 4)\vec{k}`}
              />{" "}
              <br />
              <br />
              <InlineMath math={String.raw`= -1\vec{i} -1\vec{j} + 2\vec{k}`} />
              <br />
              <br />
            </div>
            យើងបាន៖{" "}
            <InlineMath
              math={String.raw`S = |\overrightarrow{AB} \times \overrightarrow{AD}| = \sqrt{(-1)^2 + (-1)^2 + 2^2} = \sqrt{6}`}
            />{" "}
            <br />
            <br />
          </>
        ),
      },
    ],
    answer: (
      <>
        ដូចនេះផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD គឺ <InlineMath math={"= \\sqrt{6}"} />{" "}
        ឯកតាផ្ទៃ។
      </>
    ),
  },
  hint: {
    content: (
      <div className="ml-2">
        • ដើម្បីរកផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD អ្នកអាចប្រើរូបមន្ត{" "}
        <InlineMath math="S = |\overrightarrow{AB} \times \overrightarrow{AD}|" />
        ។ <br />
        • ចូរបញ្ចូលតម្លៃនៃ <InlineMath math="\overrightarrow{AB}" /> និង{" "}
        <InlineMath math="\overrightarrow{AD}" /> ដើម្បីគណនាផ្ទៃ។
      </div>
    ),
  },
  exercise: {
    questions: [
      {
        id: "ex1",
        question:
          "រកផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD ដែលមានចំណុ A(2,2,1) , B(4,-2,0) , C(3,1,1) និង D(1,5,2)។",
        options: [
          "S = 2 ឯកតាផ្ទៃ",
          "S = 3 ឯកតាផ្ទៃ",
          "S = \\sqrt{6} ឯកតាផ្ទៃ",
          "S = 6 ឯកតាផ្ទៃ",
        ],
        correctAnswer: "S = \\sqrt{6} ឯកតាផ្ទៃ",
      },
      {
        id: "ex2",
        question:
          "រកផ្ទៃក្រឡាប្រលេឡូក្រាម PQRS ដែលមានចំណុច P(1,0,2), Q(3,1,5), R(2,4,6), និង S(0,3,3)។",
        options: [
          "S = 5 ឯកតាផ្ទៃ",
          "S = 6 ឯកតាផ្ទៃ",
          "S = 7 ឯកតាផ្ទៃ",
          "S = 8 ឯកតាផ្ទៃ",
        ],
        correctAnswer: "S = 7 ឯកតាផ្ទៃ",
      },
      {
        id: "ex3",
        question:
          "រកផ្ទៃក្រឡាប្រលេឡូក្រាម EFGH ដែលមានចំណុច E(0,0,0), F(2,1,3), G(4,2,6), និង H(2,3,3)។",
        options: [
          "S = 6 ឯកតាផ្ទៃ",
          "S = 8 ឯកតាផ្ទៃ",
          "S = 10 ឯកតាផ្ទៃ",
          "S = 12 ឯកតាផ្ទៃ",
        ],
        correctAnswer: "S = 6 ឯកតាផ្ទៃ",
      },
    ],
  },
};

const ShapeArea = () => {
  return (
    <div>
      <DefinitionBox
        title={TOPIC_CONTENT.definition?.title}
        content={TOPIC_CONTENT.definition?.content}
      />
      <ExampleBox
        question={TOPIC_CONTENT.example?.question}
        steps={TOPIC_CONTENT.example?.steps}
        answer={TOPIC_CONTENT.example?.answer}
      />
      <HintBox content={TOPIC_CONTENT.hint?.content} />
      <DefinitionBox
        title={TOPIC_CONTENT_PARALLELOGRAM.definition?.title}
        content={TOPIC_CONTENT_PARALLELOGRAM.definition?.content}
      />
      <HintBox content={TOPIC_CONTENT_PARALLELOGRAM.hint?.content} />
      <ExampleBox
        question={TOPIC_CONTENT_PARALLELOGRAM.example?.question}
        steps={TOPIC_CONTENT_PARALLELOGRAM.example?.steps}
        answer={TOPIC_CONTENT_PARALLELOGRAM.example?.answer}
      />
      {TOPIC_CONTENT_PARALLELOGRAM.exercise && (
        <ExerciseBox
          questions={TOPIC_CONTENT_PARALLELOGRAM.exercise.questions}
        />
      )}
    </div>
  );
};

export default ShapeArea;
