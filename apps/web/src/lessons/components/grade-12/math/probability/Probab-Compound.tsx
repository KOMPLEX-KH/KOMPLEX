import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "ព្រឹត្តការណ៍សមាស",
    content: (
      <>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 flex-wrap w-full">
            <p>
              ព្រឹត្តការណ៍សមាសគឹជាព្រឹត្តការណ៍ដែលអាចសរសេរជាប្រជុំនៃព្រឹត្តការណ៍ផ្សេងៗ។
            </p>
          </div>
        </div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex flex-col">
          <p>
            ប្រូបាបនៃព្រឹត្តការណ៍សមាស គេអាចគណនាដោយប្រើស្វីតផលគុណ និងស្វីតផលបូក៖
          </p>

          <p className="mt-2 font-semibold">
            1. ស្វីតផលគុណ (ករណីព្រឹត្តការណ៍មិនទាក់ទងគ្នា)
          </p>
          <div className="pl-5">
            <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
          </div>

          <p className="mt-2 font-semibold">2. ស្វីតផលបូក</p>
          <div className="pl-5">
            <BlockMath math={"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"} />
          </div>

          <p className="mt-2">ក្នុងនោះ៖</p>
          <p className="pl-5">P(A) គឺប្រូបាបនៃព្រឹត្តការណ៍ A</p>
          <p className="pl-5">P(B) គឺប្រូបាបនៃព្រឹត្តការណ៍ B</p>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <>
        <div className="flex flex-col items-start gap-3" key="q1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <p>
                ក្នុងថង់មួយមានឃ្លីក្រហម២ និងឃ្លីខៀវ៣។ គេចាប់ឃ្លី២
                ចេញពីថង់ម្តងមួយៗដោយចៃដន្យ។
              </p>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="flex  flex-col gap-3">
                <p>ក. ក្នុងករណីយកហេីយដាក់វិញ ចូររកប្របាបដែលចាប់បាន</p>
                <p>_ ឃ្លីក្រហមមុន និងឃ្លីខៀវក្រោយ</p>
                <p>_ ឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយ</p>
              </div>
              <div className="flex  flex-col gap-3">
                <p>ខ. ក្នុងករណីយកហេីយមិនដាក់វិញ ចូររកប្របាបដែលចាប់បាន</p>
                <p>_ ឃ្លីក្រហមមុន និងឃ្លីខៀវក្រោយ</p>
                <p>_ ឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយ</p>
              </div>
            </div>
          </div>
        </div>
      </>,
    ],
    steps: [
      {
        title: "ក. ក្នុងករណីហេីយដាក់វិញ",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>តាងព្រឹត្តការណ៍</p>
              <div className="flex flex-col items-start gap-2">
                <p>A ចាប់បានឃ្លីក្រហមមុន</p>
                <p>B ចាប់បានឃ្លីខៀវក្រោយ</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <p>គេបានចំនួនឃ្លីនៅក្នុងថង់សម្រាប់ចាប់មុន និងក្រោយស្មេីរគ្នា</p>
              <p>ដូចនេះការចាប់ឃ្លីទី១ និងទី២ ជាព្រឹត្តការណ៍២ មិនទាក់ទងគ្នាទេ</p>
              <p>គេបាន</p>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <BlockMath math={"P(A) = \\frac{2}{5}, P(B) = \\frac{3}{5}"} />
            </div>
            <div className="flex flex-col">
              <p>
                ព្រឹត្តការណ៍ចាប់បានឃ្លីក្រហមមុន
                និងឃ្លីខៀវក្រោយជាព្រឹត្តការណ៍ផលគុណ
              </p>
              <div className="flex items-center flex-wrap gap-2">
                <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
                <BlockMath math={"\\frac{2}{5} \\cdot \\frac{3}{5}"} />
                <BlockMath math={"= \\frac{6}{25}"} />
              </div>
            </div>
            <div className="flex flex-col">
              <p>
                ព្រឹត្តការណ៍ចាប់បានឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយជាព្រឹត្តការណ៍ផលបូក
              </p>
              <div className="flex items-center flex-wrap gap-2">
                <BlockMath math={"P(A \\cup B) = P(A) + P(B) -"} />
                <BlockMath
                  math={
                    "P(A \\cap B) = \\frac{2}{5} + \\frac{3}{5} - \\frac{6}{25}= \\frac{19}{25}"
                  }
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "ក. ក្នុងករណីហេីយមិនដាក់វិញ",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>តាងព្រឹត្តការណ៍</p>
              <div className="flex flex-col ">
                <p>A ចាប់បានឃ្លីក្រហមមុន</p>
                <p>B ចាប់បានឃ្លីខៀវក្រោយ</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <p>
                ចំនួន​ឃ្លីក្នុងថង់សម្រាប់ចាប់លេីកទី១ មាន៥ នោះះលេីកទី២ មានតែ៤។
              </p>

              <div className="flex flex-col gap-3">
                <p>+ ចាប់បានឃ្លីក្រហម និងចាប់បានឃ្លីខៀវ</p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p>នោះប្រូបាបដែលចាប់បានឃ្លីក្រហមមុនគឺ</p>
                    <BlockMath math={"\\frac{2}{5}"} />
                    <p>និងប្រូបាបចាប់បានឃ្លីខៀវក្រោយគឺ</p>
                    <BlockMath math={"\\frac{3}{4}"} />
                    <p>ប្រូបាបនៃផលគុណ A និង B គឺ</p>
                  </div>
                </div>
                <div className=" items-start flex flex-wrap">
                  <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
                  <BlockMath
                    math={
                      "= \\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}"
                    }
                  />
                </div>
              </div>

              <div>
                <p>
                  + ចាប់បានឃ្លីក្រហម ឬចាប់បានឃ្លីខៀវប្រូបាបនៃព្រឹត្តការណ៍ផលបូក A
                  និង B គឺ
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <BlockMath math={"P(A \\cup B) = P(A) + P(B) -"} />
                  <BlockMath
                    math={
                      "P(A \\cap B) = \\frac{2}{5} + \\frac{3}{5} - \\frac{3}{10} = \\frac{7}{10}"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  exercise: {
    questions: [
      {
        id: "pc-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              កីឡាករម្នាក់បាញ់គោលដៅ ២ ដង។ ប្រូបាបបាញ់ត្រូវគោលដៅក្នុងពេលណាមួយគឺ
              0.7។
            </p>
            <p>រកប្រូបាបដែលបាញ់ត្រូវទាំងពីរដង។</p>
          </div>
        ),
        options: [
          <p key="pc-q3-o1">0.49</p>,
          <p key="pc-q3-o2">0.70</p>,
          <p key="pc-q3-o3">0.84</p>,
          <p key="pc-q3-o4">0.21</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "pc-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              ក្នុងក្រុមសិស្ស 20 នាក់ មានសិស្សប្រុស 12 នាក់ និងសិស្សស្រី 8 នាក់។
              គេចាប់ឈ្មោះសិស្សពីរនាក់ ដោយមិនដាក់ឈ្មោះវិញ។
            </p>
            <p>រកប្រូបាបដែលចាប់បានសិស្សប្រុសទាំងពីរ។</p>
          </div>
        ),
        options: [
          <p key="pc-q2-o1">0.1895</p>,
          <p key="pc-q2-o2">0.3210</p>,
          <p key="pc-q2-o3">0.2580</p>,
          <p key="pc-q2-o4">0.5000</p>,
        ],
        correctAnswer: 1,
      },
    ],
  },
};

const ProbabCompound = () => {
  return (
    <>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox
            title={FirstTopicContent.definition.title}
            content={FirstTopicContent.definition.content}
          />
        )}
        {FirstTopicContent.tip && (
          <TipBox
            title={FirstTopicContent.tip.title}
            content={FirstTopicContent.tip.content}
          />
        )}
        {FirstTopicContent.example && (
          <ExampleBox
            question={FirstTopicContent.example.question}
            steps={FirstTopicContent.example.steps}
            answer={FirstTopicContent.example.answer}
          />
        )}
        {FirstTopicContent.exercise && (
          <ExerciseBox questions={FirstTopicContent.exercise.questions} />
        )}
      </div>
    </>
  );
};

export default ProbabCompound;
