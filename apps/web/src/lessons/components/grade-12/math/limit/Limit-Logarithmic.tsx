import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "លីមីតនៃអនុគមន៍លោការីត",
        content: <div className="text-left">
            <div className="space-y-3">
                <div>អនុគមន៍លោការីតមានលីមីតមូលដ្ឋានសំខាន់ៗដូចខាងក្រោម៖</div>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                    <div className="font-semibold text-blue-800">លីមីតមូលដ្ឋាន៖</div>
                    <div><InlineMath math="\lim_{x \to +\infty} \ln x = +\infty" /></div>
                    <div><InlineMath math="\lim_{x \to 0^+} \ln x = -\infty" /></div>
                    <div><InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x} = 0" /></div>
                    <div><InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0, \, (n > 0)" /></div>
                    <div><InlineMath math="\lim_{x \to 0^+} x^n \ln x = 0, \, (n > 0)" /></div>
                    <div><InlineMath math="\lim_{x \to +\infty} \log_a x = +\infty, \, (a > 1)" /></div>
                    <div><InlineMath math="\lim_{x \to 0^+} \log_a x = -\infty, \, (a > 1)" /></div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                    <div className="font-semibold text-green-800">លីមីតសំខាន់៖</div>
                    <div><InlineMath math="\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1" /></div>
                    <div><InlineMath math="\lim_{u \to 0} \frac{\ln[1 + u(x)]}{u(x)} = 1, \, x \to 0, u(x) \to 0" /></div>
                    <div><InlineMath math="\lim_{x \to +\infty} \ln\left(1 + \frac{1}{x}\right)^x = 1" /></div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                    <div className="font-semibold text-purple-800">លីមីតពិសេស៖</div>
                    <div><InlineMath math="\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e" /></div>
                    <div><InlineMath math="\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e" /></div>
                    <div><InlineMath math="\lim_{x \to +\infty} \left[1 + \frac{1}{u(x)}\right]^{u(x)} = e" /></div>
                    <div><InlineMath math="\lim_{x \to 0} [1 + u(x)]^{\frac{1}{u(x)}} = e, \, x \to 0, u(x) \to 0" /></div>
                </div>
            </div>
        </div>
    },

    tip: {
        title: "រូបមន្តសំខាន់ៗ",
        content: <div className="text-left">
            <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">រូបមន្តលោការីត៖</div>
                    <div className="space-y-2">
                        <div><InlineMath math="\ln(xy) = \ln x + \ln y" /></div>
                        <div><InlineMath math="\ln\left(\frac{x}{y}\right) = \ln x - \ln y" /></div>
                        <div><InlineMath math="\ln(x^n) = n \ln x" /></div>
                        <div><InlineMath math="\log_a x = \frac{\ln x}{\ln a}" /></div>
                    </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">លីមីតទូទៅ៖</div>
                    <div className="space-y-2">
                        <div><InlineMath math="\lim_{x \to 0} \frac{\ln(1 + ax)}{x} = a" /></div>
                        <div><InlineMath math="\lim_{x \to +\infty} \left(1 + \frac{a}{x}\right)^x = e^a" /></div>
                        <div><InlineMath math="\lim_{x \to 0} (1 + ax)^{\frac{1}{x}} = e^a" /></div>
                    </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">សំគាល់៖</div>
                    <div>ការគណនាលីមីតលោការីតតែងតែត្រូវការការបំលែងទម្រង់ដើម្បីឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន។ លីមីត e ជាលីមីតពិសេសដ៏សំខាន់។</div>
                </div>
            </div>
        </div>
    },


    example2: {
        question: <div className="text-left">
            គណនា <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 3x)}{2x}" />
        </div>,
        steps: [
            {
                title: "កំណត់ទម្រង់បញ្ហា",
                content: <div className="text-left space-y-2">
                    <div>យើងមាន <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 3x)}{2x}" /></div>
                    <div>បើជំនួសដោយផ្ទាល់ x = 0 យើងនឹងបាន <InlineMath math="\frac{0}{0}" /></div>
                    <div>ត្រូវប្រើរូបមន្តលីមីតលោការីត</div>
                </div>
            },
            {
                title: "បំលែងទម្រង់",
                content: <div className="text-left space-y-2">
                    <div>យើងបំលែង <InlineMath math="\frac{\ln(1 + 3x)}{2x}" /> ឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន:</div>
                    <div>
                        <InlineMath math="\frac{\ln(1 + 3x)}{2x} = \frac{3}{2} \cdot \frac{\ln(1 + 3x)}{3x}" />
                    </div>
                    <div>ដោយប្រើរូបមន្ត <InlineMath math="\lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1" /></div>
                </div>
            },
            {
                title: "គណនាលីមីត",
                content: <div className="text-left space-y-2">
                    <div>
                        <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 3x)}{2x} = \frac{3}{2} \cdot \lim_{x \to 0} \frac{\ln(1 + 3x)}{3x} = \frac{3}{2} \cdot 1 = \frac{3}{2}" />
                    </div>
                </div>
            }
        ],
        answer: <div className="text-left">
            ដូច្នេះ <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 3x)}{2x} = \frac{3}{2}" />
        </div>
    },

    exercise: {
        questions: [
            {
                id: "q1",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 2x)}{x}" /></div>,
                options: ["1", "2", "1/2", "0"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x}" /></div>,
                options: ["∞", "1", "0", "e"],
                correctAnswer: 2
            },
            {
                id: "q3",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0^+} x \ln x" /></div>,
                options: ["0", "1", "-∞", "∞"],
                correctAnswer: 0
            },
            {
                id: "q4",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} (1 + 2x)^{\frac{1}{x}}" /></div>,
                options: ["e", "e²", "2e", "1"],
                correctAnswer: 1
            },
            {
                id: "q5",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to +\infty} \left(1 + \frac{3}{x}\right)^x" /></div>,
                options: ["e", "e³", "3e", "3"],
                correctAnswer: 1
            },
            {
                id: "q6",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 5x)}{3x}" /></div>,
                options: ["5/3", "3/5", "5", "3"],
                correctAnswer: 0
            },
            {
                id: "q7",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^2}" /></div>,
                options: ["∞", "1", "0", "1/2"],
                correctAnswer: 2
            },
            {
                id: "q8",
                question: <div className="flex flex-row gap-2">
                    <div>គណនា <InlineMath math="\lim_{x \to 0} \frac{\log_2(1 + x)}{x}" /></div>
                    <div className='text-sm'>(ប្រើ L&apos;Hôpital)</div>
                </div>,
                options: ["1", "1/ln 2", "ln 2", "2"],
                correctAnswer: 1
            }
        ]
    },

    hint: {
        content: <div className="text-left">
            <div className="space-y-3">
                <div><strong>ចំណាំសំខាន់៖</strong></div>
                <div>១. លីមីត <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1" /> គឺជាមូលដ្ឋានសម្រាប់គ្រប់លីមីតលោការីត</div>
                <div>២. លីមីត <InlineMath math="\lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e" /> គឺជាលីមីតសំខាន់នៃចំនួន e</div>
                <div>៣. ពេលមាន <InlineMath math="\ln(1 + ax)" /> ត្រូវបំលែងទៅជា <InlineMath math="a \cdot \frac{\ln(1 + ax)}{ax}" /></div>
                <div>៤. សម្រាប់ <InlineMath math="(1 + ax)^{\frac{1}{x}}" /> អាចប្រើ <InlineMath math="\lim_{x \to 0} (1 + ax)^{\frac{1}{x}} = e^a" /></div>
                <div>៥. លោការីតលូតលាស់យ៉ាងវិលវិញជាងអិចស្ប៉ូណង់ស្យែល៖ <InlineMath math="\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0" /></div>
                <div>៦. L&apos;Hôpital​ មិនត្រូវបានអនុញ្ញាតអោយប្រើប្រាស់ក្នុងការប្រឡងទេ​ គប្បីប្រើសម្រាប់ផ្ទៀងចម្លើយ</div>
            </div>
        </div>
    }
};

export default function LimitLogarithmic() {
    return (
        <>
            {TOPIC_CONTENT.definition && (
                <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
            )}

            {TOPIC_CONTENT.tip && (
                <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
            )}

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
                <ExerciseBox
                    questions={TOPIC_CONTENT.exercise.questions}
                />
            )}

            {TOPIC_CONTENT.hint && (
                <HintBox content={TOPIC_CONTENT.hint.content} />
            )}
        </>
    );
}