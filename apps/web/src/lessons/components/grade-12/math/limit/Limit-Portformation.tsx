import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
const TOPIC_CONTENT: TopicContent = {
    tip: {
        title: "ប្រមាណវិធីលើលីមីត",
        content: <div className="text-left text-sm">
            បើ <InlineMath math="lim_{x \to c} f(x) = L" /> និង <InlineMath math="lim_{x \to c} g(x) = M" /> ហើយ​ (L , M & k ជាចំនួនពិត) នោះគេបាន៖
            <ol className="space-y-2 mt-3">
                <li className="flex items-center gap-2">
                    <span>១.</span>
                    <InlineMath math="lim_{x \to c} [f(x) \pm g(x)] = L \pm M" />
                </li>
                <li className="flex items-center gap-2">
                    <span>២.</span>
                    <InlineMath math="lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M" />
                </li>
                <li className="flex items-center gap-2">
                    <span>៣.</span>
                    <InlineMath math="lim_{x \to c} [\frac{f(x)}{g(x)}] = \frac{L}{M}" />
                    <span>, M ≠ 0, g(x) ≠ 0</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>៤.</span>
                    <InlineMath math="lim_{x \to c} kf(x) = klim_{x \to c} f(x) = k \cdot L" />
                </li>
                <li className="flex items-center gap-2">
                    <span>៥.</span>
                    <InlineMath math="lim_{x \to c} [f(x)]^n = L^n" />
                </li>
            </ol>
        </div>
    },
    example: {
        question: "គណនាលីមីតនៃអនុគមន៍ខាងក្រោម៖",
        content: <div className="text-left ml-2">
            <InlineMath math="lim_{x \to 2} (x^2 + 3x - 2)" />
        </div>,
        steps: [
            {
                title: "ជំនួស x = 2 ចូលគ្រប់តម្លៃ​ x ",
                content: <div className="text-left space-y-1">
                    <div><InlineMath math="\\Rightarrow" /> <InlineMath math="lim_{x \to 2} (x^2 + 3x - 2)" /></div>
                    <div><InlineMath math="= 2^2 + 3(2) - 2" /></div>
                    <div><InlineMath math="= 4 + 6 - 2" /></div>
                    <div><InlineMath math="= 8" /></div>
                </div>
            }
        ]
    }
}
const TOPIC_CONTENT_EXERCISE: TopicContent = {
    example: {
        question: <div className="text-left text-sm">គេមានលីមីត
            <InlineMath math="f(x)=\lim_{x \to 2} 2(x^2 + 3x - 2)" /> <br />និង <InlineMath math="g(x)=\lim_{x \to 2} (x^2 + 3x - 2)" />
        </div>,
        content: <div className="text-left text-sm ml-1.5">
            គណនា <InlineMath math="f(x)\cdot g(x)" />
        </div>,
        steps: [
            {
                title: "គណនា​ f(x)",
                content: <div>
                    <InlineMath math="f(x) = \lim_{x \to 2} 2(x^2 + 3x - 2)" /><br />
                    <InlineMath math="= 2\lim_{x \to 2} (x^2 + 3x - 2)" /><br />
                    <InlineMath math="= 2\cdot (2^2 + 3(2) - 2)" /><br />
                    <InlineMath math="= 16" /><br />
                </div>
            },
            {
                title: "គណនា​ g(x)",
                content: <div>
                    <InlineMath math="g(x) = \lim_{x \to 2} (x^2 + 3x - 2)" /><br />
                    <InlineMath math="= 2^2 + 3(2) - 2" /><br />
                    <InlineMath math="= 4 + 6 - 2" /><br />
                    <InlineMath math="= 8" /><br />
                </div>
            },
            {
                title: <div><InlineMath math="f(x)\cdot g(x)" /></div>,
                content: <div>
                    <InlineMath math="f(x)\cdot g(x) = 16 \cdot 8" /><br />
                    <InlineMath math="= 128" />
                </div>
            }
        ]
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: <div className="text-base">គណនា <InlineMath math="f(x) = \lim_{x \to -1} (2x^2 + 3x +4)" /></div>,
                options: ["1", "3", "0", "2"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: <div className="">គណនា <InlineMath math="f(x) = \lim_{x \to 2} (x^2 + 3x - 2)" /></div>,
                options: ["-16", "25", "8", "4"],
                correctAnswer: 2
            },
            {
                id: "q3",
                question: <div>គណនា <InlineMath math="\lim_{x \to 3} (x^3 - 2x + 1)" /></div>,
                options: ["18", "24", "20", "22"],
                correctAnswer: 3
            },
            {
                id: "q4",
                question: <div>គណនា <InlineMath math="\lim_{x \to 0} (5x^2 + 3x - 7)" /></div>,
                options: ["7", "-7", "0", "3"],
                correctAnswer: 1
            },
            {
                id: "q5",
                question: <div>គណនា <InlineMath math="\lim_{x \to 1} \frac{x^2 + 2x + 3}{x + 2}" /></div>,
                options: ["1", "3", "2", "4"],
                correctAnswer: 2
            },

            {
                id: "q6",
                question: <div className="text-base space-y-2">
                    <div>បើ <InlineMath math="f(x) = 4" /> និង <InlineMath math="g(x) = 5" /></div>
                    <div>គណនា <InlineMath math="2f(x) \cdot g(x) - \frac{f(x)}{g(x)}" /></div>
                </div>,
                options: ["37.2", "38.2", "39.2", "40.2"],
                correctAnswer: 3
            },
            {
                id: "q7",
                question: <div>គណនា <InlineMath math="\lim_{x \to 1} \frac{3x^2 + 2x - 1}{x + 1}" /></div>,
                options: ["3", "4", "2", "1"],
                correctAnswer: 2
            },
            {
                id: "q8",
                question: <div>គណនា <InlineMath math="\lim_{x \to 2} (x + 1)(x - 3)" /></div>,
                options: ["3", "-3", "-6", "6"],
                correctAnswer: 1
            },
            {
                id: "q9",
                question: <div>គណនា <InlineMath math="\lim_{x \to 0} \frac{4x^2 + 3x + 5}{2x + 1}" /></div>,
                options: ["3", "4", "5", "2"],
                correctAnswer: 2
            },
            {
                id: "q10",
                question: <div>គណនា <InlineMath math="\lim_{x \to -1} \frac{x^3 + 2x^2 - 1}{x^2 + 3}" /></div>,
                options: ["0.5", "-0.5", "-1", "1"],
                correctAnswer: 1
            },
            {
                id: "q11",
                question: <div>គណនា <InlineMath math="\lim_{x \to 2} (x + 1)^3" /></div>,
                options: ["8", "9", "27", "12"],
                correctAnswer: 2
            },

        ]
    }
}

export default function LimitPorformation() {
    return (
        <>
            {TOPIC_CONTENT.tip && <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />}
            {TOPIC_CONTENT.example && <ExampleBox question={TOPIC_CONTENT.example.question} content={TOPIC_CONTENT.example.content} steps={TOPIC_CONTENT.example.steps} />}
            {TOPIC_CONTENT_EXERCISE.example && <ExampleBox question={TOPIC_CONTENT_EXERCISE.example.question} content={TOPIC_CONTENT_EXERCISE.example.content} steps={TOPIC_CONTENT_EXERCISE.example.steps} />}
            {TOPIC_CONTENT_EXERCISE.exercise && <ExerciseBox questions={TOPIC_CONTENT_EXERCISE.exercise.questions} />}
        </>
    )
}