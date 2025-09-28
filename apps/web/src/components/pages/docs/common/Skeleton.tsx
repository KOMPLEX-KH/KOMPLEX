import { Logo } from "@/components/common/Logo";
import React from "react";
import DefinitionBox from "./box/DefinitionBox";
import TipBox from "./box/TipBox";
import HintBox from "./box/HintBox";
import WarningBox from "./box/WarningBox";
import ExampleBox from "./box/ExampleBox";
import { ImageBox } from "./box/explanation-box/ImageExplanationBox";

export default function Skeleton() {
    // Generic data for background components
    const genericDefinition = {
        title: "ចំណងជើងមេរៀន",
        content: "មេរៀននេះស្តីអំពីប្រធានបទសំខាន់។ វាផ្តល់នូវសេចក្តីពន្យល់មូលដ្ឋាន និងព័ត៌មានសំខាន់ៗ ដើម្បីជួយឱ្យអ្នកចាប់ផ្តើមបានយល់។"
    };

    const genericTip = {
        title: "ចំណាំសំខាន់ៗ",
        content: "សូមចងចាំពិនិត្យមើលមាតិកាសំខាន់ៗ និងឧទាហរណ៍ក្នុងមេរៀននេះ មុននឹងបន្តទៅប្រធានបទបន្ទាប់។"
    };

    const genericHint = {
        title: "ព័ត៌មានបន្ថែម",
        content: "អ្នកអាចរកព័ត៌មានបន្ថែមបានពីឯកសារយោង ឬពីគ្រូបង្រៀនរបស់អ្នក។"
    };

    const genericWarning = {
        title: "ព័ត៌មានបន្ថែម",
        content: "អ្នកអាចរកព័ត៌មានបន្ថែមបានពីឯកសារយោង ឬពីគ្រូបង្រៀនរបស់អ្នក។"
    };

    const genericImage = {
        title: "រូបភាពឧទាហរណ៍",
        src: "/angkor.jpg",
        imageAlt: "រូបភាពឧទាហរណ៍",
        explanation: "នេះជារូបភាពឧទាហរណ៍ដើម្បីបង្ហាញពីគំនិតសំខាន់ៗក្នុងមេរៀន។"
    };

    const genericExample = {
        question: "ឧទាហរណ៍សាមញ្ញ",
        content: "នេះជាឧទាហរណ៍មួយដើម្បីបង្ហាញពីរបៀបដែលអ្នកអាចអនុវត្តចំណេះដឹងដែលបានរៀន។",
        steps: [
            {
                title: "ជំហានទី១",
                content: "ពិនិត្យមើលបញ្ហា និងយល់ពីអ្វីដែលត្រូវរក។"
            },
            {
                title: "ជំហានទី២",
                content: "អនុវត្តរូបមន្ត ឬវិធីសាស្ត្រដែលបានរៀន។"
            },
            {
                title: "ជំហានទី៣",
                content: "ពិនិត្យមើលចម្លើយ និងធ្វើការបញ្ជាក់។"
            }
        ],
        answer: "ចម្លើយគឺជាការអនុវត្តជាក់ស្តែងនៃចំណេះដឹង។"
    };

    return (
        <div className="relative w-full h-full min-h-[600px] overflow-hidden">
            {/* Background Components with Generic Data */}
            <div className="absolute inset-0 opacity-50 pointer-events-none h-full">
                <div className="p-2 space-y-4">
                    <DefinitionBox
                        title={genericDefinition.title}
                        content={genericDefinition.content}
                    />
                    <TipBox
                        title={genericTip.title}
                        content={genericTip.content}
                    />
                    <HintBox
                        content={genericHint.content}
                    />
                    <ExampleBox
                        question={genericExample.question}
                        content={genericExample.content}
                        steps={genericExample.steps}
                        answer={genericExample.answer}
                    />
                    <ImageBox
                        title={genericImage.title}
                        src={genericImage.src}
                        imageAlt={genericImage.imageAlt}
                        explanation={genericImage.explanation}
                    />
                    <WarningBox content={genericWarning.content} />
                </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm">
                <div className="text-center space-y-4 p-8">
                    {/* Icon Skeleton */}
                    <Logo isLoading={true} size="xl" isVertical={true} />
                </div>
            </div>
        </div>
    );
}
