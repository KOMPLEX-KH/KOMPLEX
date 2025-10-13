import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "លីមីតនៃអនុគមន៍ត្រីកោណមាត្រ",
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>អនុគមន៍ត្រីកោណមាត្រមានលីមីតសំខាន់ៗដូចខាងក្រោម៖</div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <div className="font-semibold text-blue-800">លីមីតមូលដ្ឋាន៖</div>
            <div>
              <InlineMath math="lim_{x \to 0} \frac{\sin ax}{ax} = \frac{ax}{\sin ax} = 1 " />{" "}
              (a ≠ 0)
            </div>
            <div>
              {" "}
              <InlineMath math="lim_{x \to 0} \frac{\sin u(x)}{u(x)} = 1" /> ពេល
              u(x) → 0
            </div>
            <div>
              {" "}
              <InlineMath math="lim_{x \to 0} \frac{\tan ax}{ax} = \frac{ax}{\tan ax} = 1" />{" "}
              (a ≠ 0)
            </div>
            <div>
              {" "}
              <InlineMath math="lim_{x \to 0} \frac{1 - \cos ax}{x^2} = \frac{a^2}{2}" />
            </div>
          </div>
          <div>
            លីមីតទាំងនេះគឺជាមូលដ្ឋានសម្រាប់ការគណនាលីមីតនៃអនុគមន៍ត្រីកោណមាត្រដទៃទៀត។
          </div>
        </div>
      </div>
    ),
  },

  tip: {
    title: "រូបមន្តសំខាន់ៗ",
    content: (
      <div className="text-left">
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">រូបមន្តត្រីកោណមាត្រ៖</div>
            <div className="space-y-2">
              <div>
                <InlineMath math="\sin^2 x + \cos^2 x = 1" />
              </div>
              <div>
                <InlineMath math="\tan x \cdot \cot x = 1" />
              </div>
              <div>
                <InlineMath math="\cos 2x = \cos^2 x - \sin^2 x" />
              </div>
              <div>
                <InlineMath math="\cos 2x = 2\cos^2 x - 1" />
              </div>
              <div>
                <InlineMath math="\cos 2x = 1 - 2\sin^2 x" />
              </div>
              <div>
                <InlineMath math="\sin 2x = 2\sin x \cos x" />
              </div>
              <div>
                <InlineMath math="\tan 2x = \frac{2\tan x}{1 - \tan^2 x}" />
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="space-y-2">
              <div>
                <InlineMath math="1 + \cos a = 2\cos^2 \frac{a}{2}" />
              </div>
              <div>
                <InlineMath math="1 - \cos a = 2\sin^2 \frac{a}{2}" />
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="space-y-2">
              <div>
                <InlineMath math="\cos^2 a = \frac{1 + \cos 2a}{2}" />
              </div>
              <div>
                <InlineMath math="\sin^2 a = \frac{1 - \cos 2a}{2}" />
              </div>
              <div>
                <InlineMath math="\tan^2 a = \frac{1 - \cos 2a}{1 + \cos 2a}" />
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="font-semibold mb-2">សំគាល់៖</div>
            <div>
              ការគណនាលីមីតត្រីកោណមាត្រតែងតែត្រូវការការបំលែងទម្រង់ដើម្បីឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន។
            </div>
          </div>
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <div className="text-left">
        គណនា{" "}
        <InlineMath math="lim_{x \to 0} \frac{\sin x - \sin x \cos x}{x}" />
      </div>
    ),
    steps: [
      {
        title: "កំណត់ទម្រង់បញ្ហា",
        content: (
          <div className="text-left space-y-2">
            <div>
              យើងមាន{" "}
              <InlineMath math="lim_{x \to 0} \frac{\sin x - \sin x \cos x}{x}" />
            </div>
            <div>
              បើជំនួសដោយផ្ទាល់ x = 0 យើងនឹងបាន <InlineMath math="\frac{0}{0}" />
            </div>
            <div>ត្រូវប្រើរូបមន្តលីមីតត្រីកោណមាត្រ</div>
          </div>
        ),
      },
      {
        title: "បំលែងទម្រង់",
        content: (
          <div className="text-left space-y-2">
            <div>
              យើងបំលែង <InlineMath math="\frac{\sin x - \sin x \cos x}{x^3}" />{" "}
              ឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន:
            </div>
            <div>
              <InlineMath math="\frac{\sin x - \sin x \cos x}{x^3} =  \frac{\sin x \cdot (1 - \cos x)}{x^3}" />
            </div>
            <div>
              ឥឡូវយើងអាចប្រើរូបមន្ត{" "}
              <InlineMath math="\lim_{u \to 0} \frac{\sin u}{u} = 1" />
            </div>
            <div>
              និង <InlineMath math=" 1 - \cos x = 2\sin^2(\frac{ax}{2})" />
            </div>
          </div>
        ),
      },
      {
        title: "គណនាលីមីត",
        content: (
          <div className="text-left space-y-2 gap-1">
            <div>
              <InlineMath math="\\Rightarrow" />
              <InlineMath math="lim_{x \to 0}\frac{\sin x - \sin x \cos x}{x^3} " />
              <br />
              <InlineMath math="= lim_{x \to 0} \frac{\sin x}{x} \cdot lim_{x \to 0} \frac{1 - \cos x}{x^2}" />
            </div>
            <div>
              <InlineMath math="= lim_{x \to 0} \frac{\sin x}{x} \cdot lim_{x \to 0} 2 \frac{2 \cdot\sin^2(\frac{x}{2})}{x^2}" />
            </div>
            <div>
              <InlineMath math="= 1 \cdot \frac{1}{2} \cdot lim_{x \to 0} \left(\frac{\sin(\frac{x}{2})}{\frac{x}{2}}\right)^2 = \frac{1}{2}" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ{" "}
        <InlineMath math="lim_{x \to 0} \frac{\sin x - \sin x \cos x}{x^3} = \frac{1}{2}" />
      </div>
    ),
  },

  example2: {
    question: (
      <div className="text-left">
        គណនា{" "}
        <InlineMath math="lim_{x \to \frac{\pi}{3}} \frac{\sqrt{3}\sin( x- \frac{\pi}{3})}{(\frac{\pi}{3} -x)}" />
      </div>
    ),
    steps: [
      {
        title: "កំណត់ទម្រង់បញ្ហា",
        content: (
          <div className="text-left space-y-2">
            <div>
              យើងមាន{" "}
              <InlineMath math="lim_{x \to \frac{\pi}{3}} \frac{\sqrt{3}\sin( x- \frac{\pi}{3})}{(\frac{\pi}{3} -x)}" />
            </div>
            <div>
              បើជំនួសដោយផ្ទាល់ x = 0 យើងនឹងបាន <InlineMath math="\frac{0}{0}" />
            </div>
            <div>ត្រូវប្រើរូបមន្តលីមីតត្រីកោណមាត្រ</div>
          </div>
        ),
      },
      {
        title: "រៀបកត្តាអោយចូលរូបមន្ត",
        content: (
          <div className="text-left space-y-2">
            <div>
              <InlineMath math="lim_{x \to 0}\frac{\sqrt{3}\sin( x- \frac{\pi}{3})}{(\frac{\pi}{3} -x)}" />{" "}
              <InlineMath math="\\rightarrow" />{" "}
              <InlineMath math="lim_{x \to 0}\frac{\sqrt{3}\sin( x- \frac{\pi}{3})}{(\frac{\pi}{3} -x)}" />
            </div>
            <div>
              តាង​ <InlineMath math="u = x- \frac{\pi}{3}" /> និង{" "}
              <InlineMath math="x = u + \frac{\pi}{3}" />
            </div>
            <div>
              បើ​ <InlineMath math="x \to \frac{\pi}{3}" /> នោះ{" "}
              <InlineMath math="u \to 0" />
            </div>
          </div>
        ),
      },
      {
        title: "គណនាលីមីតថ្មី",
        content: (
          <div className="text-left space-y-2">
            <div>គេបាន</div>
            <div>
              <InlineMath math="\lim_{u \to 0}\frac{\sqrt{3}\sin(u)}{u} " />
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <InlineMath math="= - \sqrt{3}" />
              </div>
              <div className="text-sm">
                ព្រោះ <InlineMath math="lim_{u \to 0}\frac{\sin u}{u} = 1" />
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-left">
        ដូច្នេះ{" "}
        <InlineMath math="lim_{x \to \frac{\pi}{3}} \frac{\sqrt{3}\sin( x- \frac{\pi}{3})}{(\frac{\pi}{3} -x)} = - \sqrt{3}" />
      </div>
    ),
  },

  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="lim_{x \to 0} \frac{1-\cos 4x}{2x^2}" />
          </div>
        ),
        options: ["0", "4", "∞", "មិនកំណត់"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="lim_{x \to 0} \frac{\tan 4x}{6x}" />
          </div>
        ),
        options: ["1", "2", "2/3", "0"],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="lim_{x \to 0} \frac{x\sin 3x}{1-\cos x}" />
          </div>
        ),
        options: ["0", "1", "6", "2/3"],
        correctAnswer: 2,
      },
      {
        id: "q4",
        question: (
          <div className="text-left">
            គណនា{" "}
            <InlineMath math="lim_{x \to 0} \frac{\sin 2x}{\sqrt{x+1}-1}" />
          </div>
        ),
        options: ["6", "2", "3", "4"],
        correctAnswer: 3,
      },
      {
        id: "q5",
        question: (
          <div className="text-left">
            គណនា{" "}
            <InlineMath math="lim_{x \to 0} \frac{2\sin x -1}{4\cos^2x -3}" />
          </div>
        ),
        options: ["-1/2", "1", "1/2", "∞"],
        correctAnswer: 0,
      },
      {
        id: "q6",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="lim_{x \to 0} \frac{\sin^2 x}{x^2}" />
          </div>
        ),
        options: ["0", "1", "2", "1/2"],
        correctAnswer: 1,
      },
      {
        id: "q7",
        question: (
          <div className="text-left">
            គណនា{" "}
            <InlineMath math="lim_{x \to \frac{\pi}{2}} \frac{\cos x}{\pi -2x}" />
          </div>
        ),
        options: ["0", "1/2", "∞", "មិនកំណត់"],
        correctAnswer: 1,
      },
      {
        id: "q8",
        question: (
          <div className="text-left">
            គណនា <InlineMath math="lim_{x \to 0} \frac{\tan x - \sin x}{x^3}" />
          </div>
        ),
        options: ["1/2", "2", "1/3", "0"],
        correctAnswer: 0,
      },
    ],
  },

  hint: {
    content: (
      <div className="text-left">
        <div className="space-y-3">
          <div>
            <strong>ចំណាំសំខាន់៖</strong>
          </div>
          <div>
            ១. លីមីត <InlineMath math="lim_{x \to 0} \frac{\sin x}{x} = 1" />{" "}
            គឺជាមូលដ្ឋានសម្រាប់គ្រប់លីមីតត្រីកោណមាត្រ
          </div>
          <div>
            ២. ពេលមាន sin(ax) ត្រូវបំលែងទៅជា{" "}
            <InlineMath math="a \cdot \frac{\sin(ax)}{ax}" />
          </div>
          <div>
            ៣. ពេលមាន tan(x) អាចប្រើ{" "}
            <InlineMath math="\tan x = \frac{\sin x}{\cos x}" />
          </div>
          <div>
            ៤. សម្រាប់ <InlineMath math="1 - \cos x" /> អាចប្រើ{" "}
            <InlineMath math="1 - \cos x = 2\sin^2(\frac{x}{2})" />
          </div>
        </div>
      </div>
    ),
  },
};

export default function LimitTrigonometric() {
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

      <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm my-6">
        {/* Image on top */}
        <div className="flex justify-center mb-6">
          <img
            src="/tri.png"
            alt="ការបកស្រាយធរណីមាត្រនៃលីមីត sin x/x = 1"
            className="rounded-lg shadow-md h-auto w-full max-w-2xl object-contain"
          />
        </div>

        {/* Explanation below */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-indigo-600">🖼️</div>
            <h3 className="text-xl font-bold text-gray-900">ការពន្យល់</h3>
          </div>
          <div className="text-gray-700 text-base">
            <div className="text-left">
              <div className="space-y-4">
                <div className="font-semibold text-lg">
                  ការបកស្រាយធរណីមាត្រ នៃ lim(x→0) sin x/x = 1
                </div>

                <div className="space-y-3">
                  <div>
                    <strong>តាង:</strong> φ ជាមុំគិតជារ៉ាដ្យង់ ដែល{" "}
                    <InlineMath math="0 < \varphi < \frac{\pi}{2}" />
                  </div>

                  <div>
                    តាង <InlineMath math="S_{OAP}" />,{" "}
                    <InlineMath math="S_{ធ្នូ}" /> និង{" "}
                    <InlineMath math="S_{OAT}" /> រៀងគ្នាជាផ្ទៃក្រឡានៃត្រីកោណ
                    OAT, ផ្ទៃក្រឡាចំរៀកថាស OAP និងផ្ទៃក្រឡានៃត្រីកោណ OAP។
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div>
                      តាមរូបមន្តខាងលើ យើងមាន:{" "}
                      <InlineMath math="S_{OAP} \leq S_{ធ្នូ} \leq S_{OAT}" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <strong>គណនាផ្ទៃនីមួយៗ:</strong>
                    </div>
                    <div>
                      •{" "}
                      <InlineMath math="S_{OAT} = \frac{1}{2} \times 1 \times {\tan \varphi}" />
                    </div>
                    <div>
                      •{" "}
                      <InlineMath math="S_{ធ្នូ} = \frac{1}{2} \times 1^2 \times \varphi = \frac{\varphi}{2}" />
                    </div>
                    <div>
                      •{" "}
                      <InlineMath math="S_{OAP} = \frac{1}{2} \cdot {\sin{\alpha}}" />
                    </div>
                  </div>

                  <div>
                    នោះគេបាន:{" "}
                    <InlineMath math="\frac{1}{2} {\tan\varphi} \leq \frac{\varphi}{2} \leq \frac{1}{2} {\sin\varphi}" />
                  </div>

                  <div>
                    ឬ{" "}
                    <InlineMath math="{\tan\varphi} \leq \varphi \leq {\sin\varphi}" />
                  </div>

                  <div>
                    ដោយ{" "}
                    <InlineMath math="{\tan \varphi} =\frac{\sin\varphi}{\cos\varphi}" />{" "}
                    នោះ{" "}
                    <InlineMath math="\frac{\sin\varphi}{\cos\varphi} \geq \frac{\sin\varphi}{\varphi}" />
                  </div>

                  <div>
                    នោះគេទាញ:{" "}
                    <InlineMath math="1 \geq \frac{\sin\varphi}{\varphi} \geq {\cos\varphi}" />
                  </div>

                  <div>
                    បើ <InlineMath math="0 < \varphi < -\frac{\pi}{2}" /> នោះ{" "}
                    <InlineMath math="0 < \varphi < \frac{\pi}{2}" />{" "}
                  </div>
                  <div>នោះវិសមភាពខាងលើអាចសរសេរទៅជា:</div>
                  <div>
                    <InlineMath math="{\cos\varphi} \leq \frac{\sin\varphi}{\varphi} \leq 1" />
                  </div>
                  <div>
                    ហេតុនេះគេបាន:{" "}
                    <InlineMath math="{\cos\varphi} \leq \frac{\sin\varphi}{\varphi} \leq 1" />{" "}
                    ចំពោះគ្រប់{" "}
                    <InlineMath math="\varphi \in (-\frac{\pi}{2}, 0) \cup (0, \frac{\pi}{2})" />
                  </div>

                  <div>
                    ដោយ{" "}
                    <InlineMath math="lim_{\varphi \to 0} \cos \varphi = 1" />{" "}
                    នោះ{" "}
                    <InlineMath math="\lim_{x\to 0} \frac{\sin \varphi}{\varphi} = 1" />
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg space-y-2">
                    <div>
                      <strong>សន្និដ្ឋាន:</strong>
                    </div>
                    <div>
                      ដោយជំនួស φ ជា x នោះយើងបាន:{" "}
                      <InlineMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />{" "}
                      ពិត។
                    </div>
                  </div>

                  <div>
                    ម៉្យាងទៀត{" "}
                    <InlineMath math="lim_{x \to 0} \frac{1 - \cos x}{x} = \lim_{x \to 0} \frac{(1 - \cos x)(1 + \cos x)}{x(1 + \cos x)}" />
                  </div>
                  <div>
                    <InlineMath math="= lim_{x \to 0} \frac{1 - \cos^2 x}{x(1 + \cos x)} = \lim_{x \to 0} \frac{\sin^2 x}{x(1 + \cos x)}" />
                  </div>
                  <div>
                    <InlineMath math="= lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{\sin x}{1 + \cos x} = 1 \cdot \frac{0}{1 + 1} = 0" />
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg flex flex-row gap-2 ">
                    <div>ដូច្នេះ</div>
                    <div>
                      <InlineMath math="lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />{" "}
                      ពិត
                    </div>
                  </div>

                  <div>
                    តាមរូបមន្ត{" "}
                    <InlineMath math="\tan x = \frac{\sin x}{\cos x}" />
                  </div>
                  <div>
                    នោះគេបាន{" "}
                    <InlineMath math="lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin x}{x \cos x}" />
                  </div>
                  <div>
                    <InlineMath math="= lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{\cos x} = 1 \cdot \frac{1}{1} = 1" />
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg flex flex-row gap-2 ">
                    <div>ដូច្នេះ</div>
                    <div>
                      <InlineMath math="lim_{x \to 0} \frac{\tan x}{x} = 1" />{" "}
                      ពិត
                    </div>
                  </div>

                  <div>លីមីតទូទៅ:</div>
                  <div>
                    • <InlineMath math="lim_{x \to 0} \frac{\sin ax}{x} = a" />{" "}
                    (a ≠ 0)
                  </div>
                  <div>
                    • <InlineMath math="lim_{x \to 0} \frac{\tan ax}{x} = a" />{" "}
                    (a ≠ 0)
                  </div>
                  <div>
                    •{" "}
                    <InlineMath math="lim_{x \to 0} \frac{1 - \cos ax}{x^2} = \frac{a^2}{2}" />{" "}
                    (a ≠ 0)
                  </div>
                  <div>
                    •{" "}
                    <InlineMath math="lim_{x \to 0} \frac{\sin ax}{\sin bx} = \frac{a}{b}" />{" "}
                    (a,b ≠ 0)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
