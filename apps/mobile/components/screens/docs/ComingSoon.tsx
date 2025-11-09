import React from "react";
import { View, Text, ScrollView } from "react-native";
import { tw } from "@/utils/styles";
import { BookOpen } from "lucide-react-native";

// Import all box components
import DefinitionBox from "./boxes/DefinitionBox";
import TipBox from "./boxes/TipBox";
import ExampleBox from "./boxes/ExampleBox";
import ExerciseBox from "./boxes/ExerciseBox";
import HintBox from "./boxes/HintBox";
import WarningBox from "./boxes/WarningBox";
import CustomBox from "./boxes/CustomBox";
import ThreeDBox from "./boxes/3DBox";
import GraphBox from "./boxes/GraphBox";
import SummaryBox from "./boxes/SummaryBox";
import TopicPracticeBox from "./boxes/TopicPracticeBox";
import ImageExplanationBox from "./boxes/explanation-box/ImageExplanationBox";
import VideoExplanationBox from "./boxes/explanation-box/VideoExplanationBox";
import GraphExplanationBox from "./boxes/explanation-box/GraphExplanationBox";
import ThreeDExplanationBox from "./boxes/explanation-box/3DExplanationBox";
import ThreeDExplanationBox2 from "./boxes/explanation-box/3DExplanationBox2";

export default function ComingSoon() {
    // Mock data for all box components
    const mockDefinition = {
        title: "លីមីត",
        content: "លីមីតគឺជាតម្លៃដែលអនុគមន៍មួយចង់ទៅដល់នៅពេលអថេរចូលជិតតម្លៃជាក់លាក់មួយ។ វាជាគំនិតគ្រឹះក្នុងការគណនាដេរីវេ។"
    };

    const mockTip = {
        title: "គន្លឹះសំខាន់",
        content: "ពេលគណនាលីមីត សូមចងចាំពិនិត្យមើលថាតើមានការបែងចែកដោយសូន្យ ឬរូបមន្តមិនកំណត់ដែរឬទេ។"
    };

    const mockExample = {
        question: "គណនាលីមីត: lim(x→2) (x² - 4)/(x - 2)",
        content: "យើងត្រូវប្រើប្រាស់កត្តាកំណត់ដើម្បីគណនាលីមីតនេះ។",
        steps: [
            {
                title: "កត្តាកំណត់",
                content: "(x² - 4) = (x - 2)(x + 2)"
            },
            {
                title: "សម្រួល",
                content: "lim(x→2) (x - 2)(x + 2)/(x - 2) = lim(x→2) (x + 2)"
            },
            {
                title: "គណនា",
                content: "= 2 + 2 = 4"
            }
        ],
        answer: "4"
    };

    const mockExercise = {
        questions: [
            {
                id: "q1",
                question: "គណនា lim(x→0) sin(x)/x",
                options: ["0", "1", "∞", "មិនកំណត់"],
                correctAnswer: 1
            },
            {
                id: "q2",
                question: "គណនា lim(x→3) (x² - 9)/(x - 3)",
                options: ["3", "6", "9", "0"],
                correctAnswer: 1
            }
        ]
    };

    const mockHint = {
        content: "លីមីតអាចជាចំនួនកំណត់ ឬអនន្ត។ វាក៏អាចមិនមានដែរ ប្រសិនបើអនុគមន៍មិនចូលជិតតម្លៃណាមួយ។"
    };

    const mockWarning = {
        content: "កុំច្រឡំរវាងលីមីតខាងស្តាំ លីមីតខាងឆ្វេង និងលីមីតទ្វេចំហៀង។ ពួកគេមាននិយមន័យខុសគ្នា។"
    };

    const mockCustom = {
        title: "ការពន្យល់បន្ថែម",
        content: "នេះគឺជាប្រអប់ផ្ទាល់ខ្លួនដែលអាចប្រែប្រួលបាន។",
        backgroundColor: "bg-blue-50",
        borderColor: "border-blue-500",
        titleColor: "text-blue-900",
        iconColor: "text-blue-600"
    };

    const mockGraph = {
        expressions: [
            { id: "1", latex: "y = x^2", color: "#4f46e5" },
            { id: "2", latex: "y = 2x + 1", color: "#dc2626" }
        ]
    };

    const mockSummary = {
        title: "សរុបមេរៀន",
        icon: "Lightbulb",
        sections: [
            {
                key: "definition",
                title: "និយមន័យលីមីត",
                content: "លីមីតគឺជាតម្លៃដែលអនុគមន៍ f(x) ចង់ទៅដល់នៅពេល x ចូលជិត a"
            },
            {
                key: "properties",
                title: "លក្ខណៈសម្បត្តិ",
                content: [
                    "លីមីតនៃផលបូក = ផលបូកនៃលីមីត",
                    "លីមីតនៃផលគុណ = ផលគុណនៃលីមីត",
                    "លីមីតនៃផលចែក = ផលចែកនៃលីមីត"
                ]
            },
            {
                key: "examples",
                title: "ឧទាហរណ៍",
                content: "lim(x→0) sin(x)/x = 1"
            }
        ]
    };

    const mockPractice = {
        exercises: [
            {
                id: "ex1",
                title: "លំហាត់លីមីតមូលដ្ឋាន",
                description: "លំហាត់លីមីតមូលដ្ឋាន",
                problems: [
                    "គណនា lim(x→1) (x² - 1)/(x - 1)",
                    "គណនា lim(x→0) (1 - cos(x))/x²"
                ],
                answers: [
                    "2",
                    "1/2"
                ]
            }
        ]
    };

    const mockImageExplanation = {
        src: "/logo.png",
        imageAlt: "ក្រាហ្វលីមីត",
        title: "ការពន្យល់ដោយរូបភាព",
        explanation: "រូបភាពនេះបង្ហាញពីការបង្ហាញក្រាហ្វិកនៃលីមីត។"
    };

    const mockVideoExplanation = {
        src: "/test.mp4",
        videoTitle: "ការពន្យល់ដោយវីដេអូ",
        explanation: "វីដេអូនេះនឹងពន្យល់អំពីគំនិតលីមីតដោយលម្អិត។"
    };

    const mockGraphExplanation = {
        expressions: [
            { id: "1", latex: "f(x) = x^2", color: "#4f46e5" }
        ],
        explanation: "ក្រាហ្វនេះបង្ហាញពីអនុគមន៍ f(x) = x²។"
    };

    const mockThreeDExplanation = {
        explanation: "រូបភាព 3D នេះជួយក្នុងការយល់ដឹងអំពីលីមីត។",
        src: "/test2.glb",
        scale: 8,
        target: [0, 0, 0] as [number, number, number],
        height: 400
    };

    return (
        <ScrollView
            style={tw("flex-1 bg-white")}
            contentContainerStyle={tw("px-4 py-8")}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style={tw("items-center mb-8")}>
                <View style={tw("w-20 h-20 bg-indigo-500 rounded-full items-center justify-center mb-4")}>
                    <BookOpen size={40} color="white" />
                </View>
                <Text style={tw("text-2xl font-bold text-gray-800 text-center mb-2")}>
                    Box Components Showcase
                </Text>
                <Text style={tw("text-gray-600 text-center")}>
                    ការបង្ហាញប្រអប់ទាំងអស់
                </Text>
            </View>

            {/* 3D Explanation Box */}
            <ThreeDExplanationBox2
                explanation={mockThreeDExplanation.explanation}
                src={mockThreeDExplanation.src}
                scale={mockThreeDExplanation.scale}
                target={mockThreeDExplanation.target}
                height={mockThreeDExplanation.height}
            />

            {/* Definition Box */}
            <DefinitionBox
                title={mockDefinition.title}
                content={mockDefinition.content}
            />

            {/* Tip Box */}
            <TipBox
                title={mockTip.title}
                content={mockTip.content}
            />

            {/* Example Box */}
            <ExampleBox
                question={mockExample.question}
                content={mockExample.content}
                steps={mockExample.steps}
                answer={mockExample.answer}
            />

            {/* Exercise Box */}
            <ExerciseBox questions={mockExercise.questions} />

            {/* Hint Box */}
            <HintBox content={mockHint.content} />

            {/* Warning Box */}
            <WarningBox content={mockWarning.content} />

            {/* Custom Box */}
            <CustomBox
                title={mockCustom.title}
                content={mockCustom.content}
                backgroundColor={mockCustom.backgroundColor}
                borderColor={mockCustom.borderColor}
                titleColor={mockCustom.titleColor}
                iconColor={mockCustom.iconColor}
            />

            {/* Graph Box */}
            <GraphBox
                expressions={mockGraph.expressions}
            />

            {/* Summary Box */}
            <SummaryBox
                title={mockSummary.title}
                icon={mockSummary.icon}
                sections={mockSummary.sections}
            />

            {/* Topic Practice Box */}
            <TopicPracticeBox exercises={mockPractice.exercises} />

            {/* Image Explanation Box */}
            <ImageExplanationBox
                src={mockImageExplanation.src}
                imageAlt={mockImageExplanation.imageAlt}
                title={mockImageExplanation.title}
                explanation={mockImageExplanation.explanation}
            />

            {/* Video Explanation Box */}
            <VideoExplanationBox
                src={mockVideoExplanation.src}
                videoTitle={mockVideoExplanation.videoTitle}
                explanation={mockVideoExplanation.explanation}
            />

            {/* Graph Explanation Box */}
            <GraphExplanationBox
                expressions={mockGraphExplanation.expressions}
                explanation={mockGraphExplanation.explanation}
            />



            {/* Footer spacing */}
            <View style={tw("h-8")} />
        </ScrollView>
    );
}
