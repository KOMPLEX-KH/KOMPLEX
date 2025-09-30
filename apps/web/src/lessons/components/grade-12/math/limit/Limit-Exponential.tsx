import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "លីមីតនៃអនុគមន៍អិចស្ប៉ូណង់ស្យែល",
        content: <div className="text-left">
            <div className="space-y-3">
                <div>អនុគមន៍អិចស្ប៉ូណង់ស្យែលមានលីមីតមូលដ្ឋានសំខាន់ៗដូចខាងក្រោម៖</div>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                    <div className="font-semibold text-blue-800">លីមីតមូលដ្ឋាន៖</div>
                    <div><InlineMath math="lim_{x \to +\infty} e^x = +\infty" /></div>
                    <div><InlineMath math="lim_{x \to -\infty} e^x = 0" /></div>
                    <div><InlineMath math="lim_{x \to +\infty} \frac{e^x}{x} = +\infty, \, n > 0" /></div>
                    <div><InlineMath math="lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty, \, n > 0" /></div>
                    <div><InlineMath math="lim_{x \to +\infty} \frac{x^n}{e^x} = 0, \, n > 0" /></div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                    <div className="font-semibold text-green-800">លីមីតសំខាន់៖</div>
                    <div><InlineMath math="lim_{x \to 0} \frac{e^x - 1}{x} = 1" /></div>
                    <div><InlineMath math="lim_{u \to 0} \frac{e^u - 1}{u} = 1" /></div>
                    <div><InlineMath math="lim_{x \to 0} \frac{a^x - 1}{x} = \ln a" /></div>
                    <div><InlineMath math="lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e" /></div>
                </div>
            </div>
        </div>
    },

    tip: {
        title: "រូបមន្តសំខាន់ៗ",
        content: <div className="text-left">
            <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">រូបមន្តអិចស្ប៉ូណង់ស្យែល៖</div>
                    <div className="space-y-2">
                        <div><InlineMath math="e^{\ln x} = x" /></div>
                        <div><InlineMath math="\ln(e^x) = x" /></div>
                        <div><InlineMath math="a^x = e^{x \ln a}" /></div>
                        <div><InlineMath math="\log_a x = \frac{\ln x}{\ln a}" /></div>
                    </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">លីមីតពិសេស៖</div>
                    <div className="space-y-2">
                        <div><InlineMath math="lim_{x \to 0} \frac{e^{ax} - 1}{x} = a" /></div>
                        <div><InlineMath math="lim_{x \to 0} \frac{a^{bx} - 1}{x} = b \ln a" /></div>
                        <div><InlineMath math="lim_{x \to 0} \frac{\ln(1 + ax)}{x} = a" /></div>
                    </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">សំគាល់៖</div>
                    <div>ការគណនាលីមីតអិចស្ប៉ូណង់ស្យែលតែងតែត្រូវការការបំលែងទម្រង់ដើម្បីឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន។</div>
                </div>
            </div>
        </div>
    },

    example: {
        question: <div className="text-left">
            គណនា <InlineMath math="A = lim_{x \to 0} \frac{e^{2015x} - 1}{x}" />
        </div>,
        steps: [
            {
                title: "កំណត់ទម្រង់បញ្ហា",
                content: <div className="text-left space-y-2">
                    <div>យើងមាន <InlineMath math="A = lim_{x \to 0} \frac{e^{2015x} - 1}{x}" /></div>
                    <div>បើជំនួសដោយផ្ទាល់ x = 0 យើងនឹងបាន <InlineMath math="\frac{0}{0}" /></div>
                    <div>ត្រូវប្រើរូបមន្តលីមីតអិចស្ប៉ូណង់ស្យែល</div>
                </div>
            },
            {
                title: "បំលែងទម្រង់",
                content: <div className="text-left space-y-2">
                    <div>យើងបំលែង <InlineMath math="\frac{e^{2015x} - 1}{x}" /> ឱ្យស្របទៅនឹងរូបមន្តមូលដ្ឋាន:</div>
                    <div>
                        <InlineMath math="\frac{e^{2015x} - 1}{x} = \frac{e^{2015x} - 1}{2015x} \times 2015 = 1 \times 2015 = 2015" />
                    </div>
                    <div>ដោយប្រើរូបមន្ត <InlineMath math="lim_{u \to 0} \frac{e^u - 1}{u} = 1" /></div>
                </div>
            },
            {
                title: "គណនាលីមីត",
                content: <div className="text-left space-y-2">
                    <div>
                        <InlineMath math="lim_{x \to 0} \frac{e^{2015x} - 1}{x} " />
                    </div>
                    <div>
                        <InlineMath math="= lim_{x \to 0} \frac{e^{2015x} - 1}{2025x} \times 2015" />
                    </div>
                    <div>
                        <InlineMath math="= 2015" />
                    </div>
                </div>
            }
        ],
        answer: <div className="text-left">
            ដូច្នេះ <InlineMath math="A = lim_{x \to 0} \frac{e^{2015x} - 1}{x} = 2015" />
        </div>
    },

    example2: {
        question: <div className="text-left">
            គណនា <InlineMath math="B = lim_{x \to 0} \frac{2e^x + 3e^x - 5}{x}" />
        </div>,
        steps: [
            {
                title: "កំណត់ទម្រង់បញ្ហា",
                content: <div className="text-left space-y-2">
                    <div>យើងមាន <InlineMath math="lim_{x \to 0} \frac{2e^x + 3e^x - 5}{x}" /></div>
                    <div>បើជំនួសដោយផ្ទាល់ x = 0 យើងនឹងបាន <InlineMath math="\frac{0}{0}" /></div>
                </div>
            },
            {
                title: "បំលែងទម្រង់",
                content: <div className="text-left space-y-2">
                    <div>យើងបំលែងភាគយក:</div>
                    <div>
                        <InlineMath math="\frac{2e^x + 3e^x - 5}{x} = \frac{2e^x - 2 + 3e^x - 3}{x}" />
                    </div>
                    <div>
                        <InlineMath math="= \frac{2(e^x - 1)}{x} + \frac{3(e^x - 1)}{x}" />
                    </div>
                    <div>
                        <InlineMath math="= 2 \cdot \frac{e^x - 1}{x} + 3 \cdot \frac{e^x - 1}{x}" />
                    </div>
                </div>
            },
            {
                title: "គណនាលីមីត",
                content: <div className="text-left space-y-2">
                    <div>
                        <InlineMath math="B = lim_{x \to 0} \frac{2e^x + 3e^x - 5}{x}" />
                    </div>
                    <div className='ml-5'>
                        <InlineMath math="= lim_{x \to 0} \frac{2e^x - 2 + 3e^x - 3}{x}" />
                    </div>
                    <div className='ml-5'>
                        <InlineMath math="= lim_{x \to 0} \frac{2(e^x - 1) + 3(e^x - 1)}{x}" />
                    </div>
                    <div className='ml-5'>
                        <InlineMath math="= lim_{x \to 0} {2 \cdot \frac{e^x - 1}{x} + 3 \cdot \frac{e^x - 1}{x}}" />
                    </div>
                </div>
            }
        ],
        answer: <div className="text-left">
            ដូច្នេះ <InlineMath math="B = lim_{x \to 0} \frac{2e^x + 3e^x - 5}{x} = 5" />
        </div>
    },

    exercise: {
        questions: [
            {
                id: "q1",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{e^{3x} - 1}{x}" /></div>,
                options: ["1", "3", "0", "e"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{e^x - e}{x}" /></div>,
                options: ["e", "1", "0", "∞"],
                correctAnswer: 0
            },
            {
                id: "q3",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{2^x - 1}{x}" /></div>,
                options: ["1", "ln 2", "2", "0"],
                correctAnswer: 1
            },
            {
                id: "q4",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to +\infty} \frac{x^2}{e^x}" /></div>,
                options: ["∞", "0", "1", "e"],
                correctAnswer: 1
            },
            {
                id: "q5",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{3^{2x} - 1}{x}" /></div>,
                options: ["2", "2ln 3", "3", "ln 3"],
                correctAnswer: 1
            },
            {
                id: "q6",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{e^{5x} - 1}{2x}" /></div>,
                options: ["5/2", "2/5", "5", "2"],
                correctAnswer: 0
            },
            {
                id: "q7",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^x" /></div>,
                options: ["e", "e²", "2e", "1"],
                correctAnswer: 1
            },
            {
                id: "q8",
                question: <div className="text-left">គណនា <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + 3x)}{x}" /></div>,
                options: ["1", "3", "ln 3", "0"],
                correctAnswer: 1
            }
        ]
    },

    hint: {
        content: <div className="text-left">
            <div className="space-y-3">
                <div><strong>ចំណាំសំខាន់៖</strong></div>
                <div>១. លីមីត <InlineMath math="\lim_{x \to 0} \frac{e^x - 1}{x} = 1" /> គឺជាមូលដ្ឋានសម្រាប់គ្រប់លីមីតអិចស្ប៉ូណង់ស្យែល</div>
                <div>២. ពេលមាន <InlineMath math="e^{ax}" /> ត្រូវបំលែងទៅជា <InlineMath math="a \cdot \frac{e^{ax} - 1}{ax}" /></div>
                <div>៣. ពេលមាន <InlineMath math="a^x" /> អាចប្រើ <InlineMath math="a^x = e^{x \ln a}" /></div>
                <div>៤. សម្រាប់ <InlineMath math="\ln(1 + x)" /> អាចប្រើ <InlineMath math="\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1" /></div>
            </div>
        </div>
    }
};

export default function LimitExponential() {
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