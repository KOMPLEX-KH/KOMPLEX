import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "ករណីអនុគមន៍សនិទាន ∞-∞",
        content: <div className="text-left​ text-lg">
            <div>
                នៅពេលដែលយើងគណនាលីមីត ប្រសិនបើការជំនួសតម្លៃដោយផ្ទាល់ធ្វើឱ្យបាន <InlineMath math="\infty - \infty" />នេះហៅថា <strong>ទម្រង់មិនកំណត់</strong>
            </div>
            <div>
                ឧទាហរណ៍ ៖ <InlineMath math="lim_{x \to \infty} (x^2 - x) = \infty - \infty" />ជាទម្រង់មិនកំណត់
            </div>
        </div>
    },
    tip: {
        title: "វិធីដោះស្រាយ",
        content: <div className="text-left">
            <div className="space-y-3 text-[17px]">
                <div>ក្នុងការធ្វើលីមីតនៃអនុគមន៍សនិទានរាងមិនកំណត់<InlineMath math="\infty - \infty" /> យើងត្រូវ ៖</div>
                <div className="ml-2 space-y-2">
                    <div><strong>ដំណាក់កាល១</strong>: ទាញកត្តាមានឌឺក្រេខ្ពស់ជាងគេចេញជាផលគុណកត្តា</div>
                    <div><strong>ដំណាក់កាល២</strong>: បង្កើតកន្សោមថ្មីដែលលុបបំបាត់ការដក ∞-∞</div>
                    <div><strong>ដំណាក់កាល៣</strong>: ប្រើលក្ខណៈ <InlineMath math="lim_{x \to \infty} \frac{1}{x^n} = 0 ,(n > 0)" /> </div>
                    <div><strong>ដំណាក់កាល៤</strong>: គណនាតម្លៃនៃកន្សោមថ្មីនោះជាការស្រេច</div>
                    <div><strong>ដំណាក់កាល៥</strong>: បើការបង្កើតកន្សោម្មួយមិនបាន អាចប្រើវិធីសារពិសេសដូចជា <InlineMath math="e^x > n \ln x, \forall x > 0, n > 0" /></div>
                </div>
            </div>
        </div>
    },
    example: {
        question: <div className="text-left text-lg">គណនា <InlineMath math="lim_{x \to \infty} (x^3 - 4x^2 + 12)" /></div>,
        content: <div className="text-left text-lg">ដើម្បីគណនាលីមីតនេះ យើងធ្វើដូចខាងក្រោម:</div>,
        steps: [
            {
                title: "ជំនួសតម្លៃ x​ចូលដើម្បីពិនិត្យមើលទម្រង់",
                content: <div className="text-left space-y-2 text-lg">
                    <div>នៅពេល x → ∞:</div>
                    <div><InlineMath math="x^3 - 4x^2 + 12 = \infty^3 - 4(\infty^2) + 12" /></div> <div><InlineMath math="= \infty - \infty + 12" /></div>
                    <div>បានទម្រង់មិនកំណត់ <InlineMath math="\infty - \infty" /></div>
                </div>
            },
            {
                title: "ចាប់កត្តាដែលមានឌឺក្រេខ្ពស់បំផុត",
                content: <div className="text-left space-y-2 text-lg">
                    <div>កត្តាខ្ពស់បំផុតគឺ <InlineMath math="x^3" /></div>
                    <div>
                        <InlineMath math="x^3 - 4x^2 + 12 = x^3(1 - \frac{4}{x} + \frac{12}{x^3})" />
                    </div>
                </div>
            },
            {
                title: "គណនាលីមីត",
                content: <div className="text-left space-y-2">
                    <div className="text-base"><InlineMath math="\Rightarrow" /> <InlineMath math="lim_{x \to \infty} (x^3 - 4x^2 + 12)" /></div>
                    <div className="text-base"><InlineMath math="= lim_{x \to \infty} x^3(1 - \frac{4}{x} + \frac{12}{x^3})" /></div>
                    <div className="text-base"><InlineMath math="= lim_{x \to \infty} x^3 \cdot lim_{x \to \infty}(1 - \frac{4}{x} + \frac{12}{x^3})" /></div>
                    <div className="text-base"><InlineMath math="= \infty \cdot (1 - 0 + 0) = \infty \cdot 1 = \infty" /></div>
                    <div className="text-base">ព្រោះ <InlineMath math="lim_{x \to \infty} \frac{1}{x^n} = 0" /> <InlineMath math="(n > 0)" /></div>
                </div>
            },
        ],
        answer: <div className="text-left">
            <strong>ចម្លើយ</strong>: <InlineMath math="A = lim_{x \to \infty} (x^3 - 4x^2 + 12) = +\infty" />
        </div>
    },
    hint: {
        content: <div className="text-left">
            <div className="space-y-3 text-[16px]">
                <div>សម្រាប់អនុគមន៍លីមីតដែលមានទម្រង់ <InlineMath math="\infty - \infty" />:</div>
                <div className="ml-4 space-y-2 text-[16px]">
                    <div>• <strong>ទម្រង់ពហុធា</strong>: ចាប់កត្តាដែលមានឌឺក្រេខ្ពស់បំផុត</div>
                    <div>• <strong>ទម្រង់រ៉ាឌីកាល់</strong>: គុណនឹងកន្សោមឆ្លាស់​ ឬ​​កន្សោមផ្សេងដើម្បីតម្រូវរូបមន្ត</div>
                    <div>• <strong>ទម្រង់អ៊ិចស្ប៉ុណង់ស្យែល</strong>: ប្រើលក្ខខណ្ឌពិសេស <InlineMath math="e^x > n \ln x" /></div>
                </div>

                <div className="mt-6">
                    <div className="font-semibold mb-3">ឧទាហរណ៍ពីឯកសារ:</div>
                    <div className="space-y-3 ml-4">
                        <div>
                            <InlineMath math="A = lim_{x \to \infty} (x^3 - 4x^2 + 12)" />
                        </div>
                        <div>
                            <InlineMath math="B = lim_{x \to \infty} \left(\frac{x^2}{2x + 4} - \frac{x}{x + 2}\right)" />
                        </div>
                        <div>
                            <InlineMath math="C = lim_{x \to \infty} \left(\sqrt{x^2 - 11x + x}\right)" />
                        </div>
                        <div>
                            <InlineMath math="D = lim_{x \to \infty} \left[e^{2x} - 2x - \ln^2(x^2 + 1)\right]" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="font-semibold mb-2">ឧទាហរណ៍ A ការគណនាលម្អិត:</div>
                        <div className="ml-4 space-y-2">
                            <div><InlineMath math="A = lim_{x \to \infty} (x^3 - 4x^2 + 12)" /> ចាន់ឃើញនិទាន <InlineMath math="+\infty - \infty" /></div>
                            <div><InlineMath math="= lim_{x \to \infty} x^3\left(1 - \frac{4}{x} + \frac{12}{x^3}\right) = +\infty[1 - 0 + 0] = +\infty \cdot 1 = +\infty" /></div>
                            <div><strong>ចម្លើយ</strong>: <InlineMath math="A = lim_{x \to \infty} (x^3 - 4x^2 + 12) = +\infty" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (2x^2 - x + 3)" /></div>,
                options: ["+∞", "0", "-∞", "1"],
                correctAnswer: 0
            },
            {
                id: "q2",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (x^3 - 2x^2 + x)" /></div>,
                options: ["+∞", "-∞", "0", "1"],
                correctAnswer: 0
            },
            {
                id: "q3",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (-x^2 + 3x - 1)" /></div>,
                options: ["-∞", "+∞", "0", "3"],
                correctAnswer: 0
            },
            {
                id: "q4",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (5x^4 - 2x^3 + x^2)" /></div>,
                options: ["+∞", "0", "-∞", "5"],
                correctAnswer: 0
            },
            {
                id: "q5",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \left(\frac{x^2}{x + 1} - x\right)" /></div>,
                options: ["-1", "0", "+∞", "1"],
                correctAnswer: 0
            },
            {
                id: "q6",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)" /></div>,
                options: ["1/2", "0", "+∞", "-1/2"],
                correctAnswer: 0
            },
            {
                id: "q7",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (3x^2 - 5x + 2)" /></div>,
                options: ["+∞", "0", "-∞", "3"],
                correctAnswer: 0
            },
            {
                id: "q8",
                question: <div className="text-left">គណនា <InlineMath math="lim_{x \to \infty} (-2x^3 + x^2 - 4)" /></div>,
                options: ["-∞", "+∞", "0", "-2"],
                correctAnswer: 0
            }
        ]
    }
};

export default function LimitInfinityMinusInfinity() {
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