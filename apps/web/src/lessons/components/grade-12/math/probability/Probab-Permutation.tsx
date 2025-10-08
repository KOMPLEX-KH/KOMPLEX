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
    title: "ចម្លាស់ច្រំដែល",
    content: (
      <>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 flex-wrap w-full">
            <p>
              ចម្លាស់ច្រំដែលគឺជាតម្រៀបធាតុតាមលំដាប់ហេីយ
              អាចមានធាតុច្រំដែលច្រើនជាងមួយ។
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap w-full"></div>
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
              <p>គេបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដង។</p>
            </div>
            <div className="flex  gap-5 flex-col">
              <p>ក. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា</p>
              <p>ខ. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខគូ</p>
              <p>គ. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា និង ជាលេខគូ</p>
            </div>
          </div>
        </div>
      </>,
    ],
    steps: [
      {
        title: "រកចំនួនករណីអាច",
        content: (
          <div>
            <p>
              ការបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដងជាចម្លាស់ច្រំដែលនៃ២
              ធាតុយកពី៦ធាតុ។
            </p>
            <p>នោះចំនួនករណីអាចគឺ</p>
            <div className="flex items-center gap-2 justify-start">
              <BlockMath math={"\\Rightarrow n(s) = 6^2= 36"} />
              <p>ករណី</p>
            </div>
          </div>
        ),
      },
      {
        title: "ក. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា",
        content: (
          <div className="flex flex-col gap-2">
            <p>តាង A ជាព្រឹត្តិការណ៍ដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា</p>
            <p>មានន័យថា បានទាំងពីរលេីកមានលេខខុសគ្នា ជាចម្លាស់២ធាតុយកពី៦ធាតុ។</p>
            <div className="flex flex-col items-start">
              <p>នោះចំនួនស្រប</p>
              <BlockMath math={"n(A) = P(6,2) = \\frac{6!}{(6-2)!} = 30"} />
            </div>
            <div className="flex flex-col items-start">
              <p>គេបាន</p>
              <BlockMath
                math={
                  "P(A) = \\frac{n(A)}{n(s)} = \\frac{30}{36} = \\frac{5}{6}"
                }
              />
            </div>
          </div>
        ),
      },
      {
        title: "ខ. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខគូ",
        content: (
          <div className="flex flex-col gap-2">
            <p>តាង B ជាព្រឹត្តិការណ៍ដែលបោះបានទាំងពីរលេីកមានលេខគូ</p>
            <p>មានន័យថា ជាចម្លាស់ច្រំដែល២ធាតុយកពី៦ធាតុ។</p>
            <div className="flex flex-col items-start">
              <p>នោះចំនួនស្រប</p>
              <BlockMath math={"n(B)= 3^2= 9"} />
            </div>
            <div className="flex flex-col items-start">
              <p>គេបាន</p>
              <BlockMath
                math={
                  "P(B) = \\frac{n(B)}{n(s)} = \\frac{9}{36} = \\frac{1}{4}"
                }
              />
            </div>
          </div>
        ),
      },
    ],
  },
  exercise: {
    questions: [
      {
        id: "fp-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              ក្នុងប្រអប់មួយមានបាល់ពណ៌ក្រហម ៤ និងបាល់ពណ៌ខៀវ ២។ ចាប់យកបាល់ពីរ
              ដោយដាក់ត្រឡប់វិញក្រោយពេលចាប់យក។
              រកប្រូបាបដែលចាប់បានបាល់ពណ៌ដូចគ្នាទាំងពីរលើក។
            </p>
          </div>
        ),
        options: [
          <p key="fp-q1-o1">4/9</p>,
          <p key="fp-q1-o2">5/9</p>,
          <p key="fp-q1-o3">8/9</p>,
          <p key="fp-q1-o4">2/3</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "fp-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>គេបោះគ្រាប់ឡុកឡាក់ ២ ដង។ រកប្រូបាបដែលលេខទាំងពីរខុសគ្នា។</p>
          </div>
        ),
        options: [
          <p key="fp-q2-o1">5/6</p>,
          <p key="fp-q2-o2">1/6</p>,
          <p key="fp-q2-o3">2/3</p>,
          <p key="fp-q2-o4">4/5</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
};

const SecondTopic: TopicContent = {
  definition: {
    title: "ចម្លាស់នៃ r ធាតុក្នុង n ធាតុ",
    content: <></>,
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex  flex-col">
          <p>
            តម្រៀបនៃ r ធាតុយកចេញពី n ធាតុដោយគិតលំដាប់ហៅថាចម្លាស់ដែលកំណត់សរសេរដោយ
          </p>
          <BlockMath math={"P(n,r) = \\frac{n!}{(n-r)!}"} />
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              ក្មេងប្រុស៤នាក់និងស្រី៥នាក់ឈរតម្រង់ជួរគ្នាដេីម្បីទិញការ៉េមបេីដឹងថាក្មេងស្រីត្រូវឈរចុងសងខាងនៃការតម្រងជួរនោះ។
              តេីគេអាចឈរបានប៉ុន្មានរបៀប?
            </p>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួននៃការតម្រង់ជួរ",
        content: (
          <div>
            <div>
              <p>
                ដោយក្មេងប្រុស៤នាក់និងស្រី៥នាក់
                សរុប៩នាក់ឈរតម្រង់ជួរគ្នាដេីម្បីទិញការ៉េមហេីយក្នុងនោះស្រីត្រូវឈរសងខាង
              </p>
              <p>
                មានន័យថា ក្នុងចំណោមក្មេងស្រី ៥នាក់​ ត្រូវមាន ២នាក់ឈរនៅចុងសងខាង
                ជាចម្លាស់នៃ ៥ យក ២
              </p>
              <p>នៅសល់មនុស្ស ៧នាក់ចល័តដោយសេរីគេបាន</p>
            </div>

            <div className="flex items-center gap-1 flex-wrap justify-start">
              <BlockMath math={"N= P(5,2) * 7! = "} />
              <BlockMath math={"\\frac{5!}{(5-2)!} * 7! = 100800"} />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <>
        <div>
          <div className="flex items-center gap-3 flex-col">
            <div className="flex items-center gap-3 flex-wrap">
              <BlockMath math={" N= 100800"} />
              <p>របៀប​។</p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  exercise: {
    questions: [
      {
        id: "sp-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>មានអក្សរ ៧ តួ តើអាចតម្រៀបយក ៤ តួឱ្យបានប៉ុន្មានរបៀប?</p>
          </div>
        ),
        options: [
          <p key="sp-q1-o1">840</p>,
          <p key="sp-q1-o2">1680</p>,
          <p key="sp-q1-o3">720</p>,
          <p key="sp-q1-o4">5040</p>,
        ],
        correctAnswer: 1, // P(7,4) = 1680
      },
      {
        id: "sp-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              មានសៀវភៅ ៨ ក្បាល តើអាចជ្រើសរើស និងតម្រៀប ៣ ក្បាល
              ឱ្យបានប៉ុន្មានរបៀប?
            </p>
          </div>
        ),
        options: [
          <p key="sp-q2-o1">336</p>,
          <p key="sp-q2-o2">512</p>,
          <p key="sp-q2-o3">3360</p>,
          <p key="sp-q2-o4">672</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
};

const ProbabilityPermutation = () => {
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

      <div>
        {SecondTopic.definition && (
          <DefinitionBox
            title={SecondTopic.definition.title}
            content={SecondTopic.definition.content}
          />
        )}
        {SecondTopic.tip && (
          <TipBox
            title={SecondTopic.tip.title}
            content={SecondTopic.tip.content}
          />
        )}
        {SecondTopic.example && (
          <ExampleBox
            question={SecondTopic.example.question}
            steps={SecondTopic.example.steps}
            answer={SecondTopic.example.answer}
          />
        )}
        {SecondTopic.exercise && (
          <ExerciseBox questions={SecondTopic.exercise.questions} />
        )}
      </div>
    </>
  );
};

export default ProbabilityPermutation;
