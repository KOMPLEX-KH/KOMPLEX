import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { div } from "three/tsl";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT: TopicContent = {
    definition: {
        title: "តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?",
        content:
            "សមីការឌីផែរ៉ង់ស្សែលគឺជាជាសមីការដែលមានអនុគមន៍និងដេរីវេមួយឬច្រេីននៃអនុគមន៍នោះ។",
    },
    tip: {
        title: "ចំណុចសំខាន់ៗ",
        content:
            "ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។",
    },
    example: {
        question: (
            <div className="flex flex-col items-start gap-3">
                <p>សមីការ​ :</p>
                <div className="flex items-center gap-2 flex-wrap">
                    <BlockMath math="y' + y = 3" />,
                    <BlockMath math="y'' - 4y' + 6y = 0" />,
                    <BlockMath math="xy' - 5y = x^2" />,
                    <BlockMath math="\frac{dy}{dx} + 7y = 8x + 2" />,
                    <BlockMath math="\frac{d^2y}{dx^2} + 2 \frac{dy}{dx} - 3y = \cos{x}" />
                    <span>,... សុទ្ធតែជាសមីការឌីផែរ៉ង់ស្សែល។</span>
                </div>
            </div>
        ),
    },
    exercise: {
        questions: [
            {
                id: "q1",
                question: "y' + y = x  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0,
            },
            {
                id: "q2",
                question: "x² + y² = 25  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1,
            },
            {
                id: "q3",
                question: "dy/dx = 3x²  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0,
            },
            {
                id: "q4",
                question: "y = mx + b  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?",
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1,
            },
        ],
    },
    warning: {
        content:
            "កុំច្រឡំសមីការដែលមានអថេរច្រើនជាសមីការឌីផែរ៉ង់ស្សែល បើសិនវាមិនមានដេរីវេទេ។",
    },
};

const differentialdefinition = () => {
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

            {TOPIC_CONTENT.example && (
                <ExampleBox
                    question={TOPIC_CONTENT.example.question}
                    steps={TOPIC_CONTENT.example.steps}
                    answer={TOPIC_CONTENT.example.answer}
                />
            )}
            {TOPIC_CONTENT.exercise && (
                <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
            )}
            {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}
            {TOPIC_CONTENT.warning && (
                <WarningBox content={TOPIC_CONTENT.warning.content} />
            )}
        </>
    );
};

export default differentialdefinition;
