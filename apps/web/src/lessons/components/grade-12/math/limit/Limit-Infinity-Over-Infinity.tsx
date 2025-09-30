import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "ករណីអនុគមន៍សនិទាន ∞/∞",
        content: <div className="text-left">
            <div>នៅពេលដែលយើងគណនាលីមីត ប្រសិនបើការជំនួសតម្លៃដោយផ្ទាល់ធ្វើឱ្យបាន <InlineMath math="\frac{\infty}{\infty}" /></div>
            <div>
                នេះហៅថា <strong>ទម្រង់មិនកំណត់</strong>។
            </div>
            <div>
                ឧទាហរណ៍ ៖ <InlineMath math="lim_{x \to \infty} \frac{x^2 + 3x}{x}​ = \frac{{\infty^2}+3({\infty})}{\infty} = \frac{\infty}{\infty}" />ជាទម្រង់មិនកំណត់
            </div>

        </div>
    },
    tip: {
        title: "វិធីដោះស្រាយ",
        content: <div className="text-left">
            <div className="space-y-3">
                <div>ដើម្បីគណនាលីមីតនៃអនុគមន៍សនិទានរាងមិនកំណត់<InlineMath math="\frac{\infty}{\infty}" /> យើងត្រូវ</div>
                <div className="ml-4 space-y-2">
                    <div><strong>ដំណាក់កាល១</strong>:​ទាញតួដែលមាដឺក្រេខ្ពស់ជាងគេទាំងភាគយក​ និងភាគបែងជាផលគុណកត្តា</div>
                    <div><strong>ដំណាក់កាល២</strong>: សម្រួលកត្តាដូចគ្នាចោល</div>
                    <div><strong>ដំណាក់កាល៣</strong>: ប្រើលក្ខណៈ <InlineMath math="lim_{x \to \infty} \frac{1}{x^n} = 0 ,(n > 0)" /> </div>
                    <div><strong>ដំណាក់កាល៤</strong>: គណនាតម្លៃនៃកន្សោមថ្មីនោះជាការស្រេច</div>
                </div>
            </div>
        </div>
    },
    example: {
        question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{3x^2 + 2x - 1}{x^2 + 5x + 6}" /></div>,
        content: <div className="text-left">ដើម្បីគណនាលីមីតនេះ យើងធ្វើដូចខាងក្រោម:</div>,
        steps: [
            {
                title: "ជំនួសតម្លៃ x​ចូលដើម្បីពិនិត្យមើលទម្រង់",
                content: <div className="text-left space-y-2">
                    <div>នៅពេល x → ∞:</div>
                    <div>ភាគយក: <InlineMath math="3({\infty}^2) + 2({\infty}) - 1 \to \infty" /></div>
                    <div>ភាគបែង: <InlineMath math="({\infty}^2) + 5({\infty}) + 6 \to \infty" /></div>
                    <div>បានទម្រង់មិនកំណត់ <InlineMath math="\frac{\infty}{\infty}" /></div>
                </div>
            },
            {
                title: "ចាប់កត្តាដែលមានឌឺក្រេខ្ពស់បំផុត",
                content: <div className="text-left space-y-2">
                    <div>កត្តាខ្ពស់បំផុតគឺ <InlineMath math="x^2" /></div>
                    <div className="text-left space-y-2 text-xl">
                        <InlineMath math="\frac{3x^2 + 2x - 1}{x^2 + 5x + 6} = \frac{x^2(3 + \frac{2}{x} - \frac{1}{x^2})}{x^2(1 + \frac{5}{x} + \frac{6}{x^2})}" />
                    </div>
                </div>
            },
            {
                title: "សម្រួលកត្តាដូចគ្នា",
                content: <div className="text-left space-y-2 text-xl">
                    <div>
                        <InlineMath math="= \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{1 + \frac{5}{x} + \frac{6}{x^2}}" />
                    </div>
                </div>
            },
            {
                title: "គណនាលីមីត",
                content: <div className="text-left space-y-2">
                    <div className="text-xl"><InlineMath math="\Rightarrow" /> <InlineMath math="lim_{x \to \infty} \frac{3x^2 + 2x - 1}{x^2 + 5x + 6}" /></div>
                    <div className="text-xl"><InlineMath math=" = lim_{x \to \infty}\frac{x^2(3 + \frac{2}{x} - \frac{1}{x^2})}{x^2(1 + \frac{5}{x} + \frac{6}{x^2})}" /></div>
                    <div className="text-xl"><InlineMath math="= lim_{x \to \infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{1 + \frac{5}{x} + \frac{6}{x^2}} = \frac{3 + 0 - 0}{1 + 0 + 0} = \frac{3}{1} = 3" /></div>
                    <div className="text-x">ព្រោះ <InlineMath math="lim_{x \to \infty} \frac{1}{x^n} = 0" /> <InlineMath math="(n > 0)" /></div>
                </div>
            },
        ],
        answer: <div className="text-left">
            ដូច្នេះ <InlineMath math="lim_{x \to \infty} \frac{3x^2 + 2x - 1}{x^2 + 5x + 6} = 3" />
        </div>
    },
    hint: {
        content: <div className="text-left">
            <div className="space-y-3">
                <div>សម្រាប់អនុគមន៍លីមីតដែលមានទម្រង់ <InlineMath math="\frac{\infty}{\infty}" />:</div>
                <div className="ml-4 space-y-2">
                    <div>• <strong>ទម្រង់ពហុធា</strong>: ចាប់កត្តាដែលមានឌឺក្រេខ្ពស់បំផុត</div>
                    <div>• <strong>ទម្រង់រ៉ាឌីកាល់</strong>: គុណនឹងកន្សោមឆ្លាស់​ ឬ​​កន្សោមផ្សេងដើម្បីតម្រូវរូបមន្ត</div>
                </div>

            </div>
        </div>
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{2x^2 + x - 3}{x^2 + 4}" /></div>,
                options: ["0", "2", "1", "∞"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{3x^3 + 2x^2 + 1}{x^3 - x + 5}" /></div>,
                options: ["3", "1", "0", "∞"],
                correctAnswer: 0
            },
            {
                id: "q3",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{x^2 + 3}{x - 5}" /></div>,
                options: ["∞", "0", "1", "3"],
                correctAnswer: 0
            },
            {
                id: "q4",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{2x^2 + 3x + 1}{3x^2 - x + 5}" /></div>,
                options: ["1", "2/3", "3/2", "0"],
                correctAnswer: 1
            },
            {
                id: "q5",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{5x + 2}{3x^2 + x - 1}" /></div>,
                options: ["0", "5/3", "∞", "1"],
                correctAnswer: 0
            },
            {
                id: "q6",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{x^3 - 2x^2 + 1}{2x^3 + x - 3}" /></div>,
                options: ["1/2", "1", "0", "2"],
                correctAnswer: 0
            },
            {
                id: "q7",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{\sqrt{x^2 + 1}}{x + 2}" /></div>,
                options: ["1", "0", "∞", "1/2"],
                correctAnswer: 0
            },
            {
                id: "q8",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \frac{(x-1)(2x+1)}{(x+2)^2}" /></div>,
                options: ["2", "1", "0", "∞"],
                correctAnswer: 0
            }
        ]
    }
};

export default function LimitInfinityOverInfinity() {
    return (
        <>
            <DefinitionBox
                title={TOPIC_CONTENT.definition?.title}
                content={TOPIC_CONTENT.definition?.content}
            />
            <TipBox
                title={TOPIC_CONTENT.tip?.title}
                content={TOPIC_CONTENT.tip?.content}
            />
            <ExampleBox

                question={TOPIC_CONTENT.example?.question}
                content={TOPIC_CONTENT.example?.content}
                steps={TOPIC_CONTENT.example?.steps}
                answer={TOPIC_CONTENT.example?.answer}
            />
            <HintBox
                content={TOPIC_CONTENT.hint?.content}
            />
            <ExerciseBox
                questions={TOPIC_CONTENT.exercise?.questions || []}
            />
        </>
    );
}