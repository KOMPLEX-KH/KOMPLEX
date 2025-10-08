import React from "react";
import { View } from "react-native";
import { tw } from "@/utils/styles";
import { Text } from "@/components/common/Text";
import { BookOpen } from "lucide-react-native";
import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";
import DefinitionBox from "./boxes/DefinitionBox";
import TipBox from "./boxes/TipBox";
import { HintBox } from "./boxes/HintBox";
import WarningBox from "./boxes/WarningBox";
import { SummaryBox } from "./boxes/SummaryBox";
import { CheckCircle, Star, Target } from "lucide-react-native";

export default function ComingSoon() {
    // Fake data for background components
    const fakeDefinition = {
        title: "លីមីត",
        content: "លីមីតគឺជាតម្លៃដែលអនុគមន៍មួយចង់ទៅដល់នៅពេលអថេរចូលជិតតម្លៃជាក់លាក់មួយ។ វាជាគំនិតគ្រឹះក្នុងការគណនាដេរីវេ។"
    };

    const fakeTip = {
        title: "គន្លឹះសំខាន់",
        content: "ពេលគណនាលីមីត សូមចងចាំពិនិត្យមើលថាតើមានការបែងចែកដោយសូន្យ ឬរូបមន្តមិនកំណត់ដែរឬទេ។"
    };

    const fakeHint = {
        content: "លីមីតអាចជាចំនួនកំណត់ ឬអនន្ត។ វាក៏អាចមិនមានដែរ ប្រសិនបើអនុគមន៍មិនចូលជិតតម្លៃណាមួយ។"
    };

    const fakeWarning = {
        content: "កុំច្រឡំរវាងលីមីតខាងស្តាំ លីមីតខាងឆ្វេង និងលីមីតទ្វេចំហៀង។ ពួកគេមាននិយមន័យខុសគ្នា។"
    };

    const fakeSummary = {
        title: "សរុបមេរៀន",
        icon: CheckCircle,
        sections: [
            {
                key: "definition",
                title: "និយមន័យលីមីត",
                content: "លីមីតគឺជាតម្លៃដែលអនុគមន៍ f(x) ចង់ទៅដល់នៅពេល x ចូលជិត a",
                icon: Target
            },
            {
                key: "properties",
                title: "លក្ខណៈសម្បត្តិ",
                content: [
                    "លីមីតនៃផលបូក = ផលបូកនៃលីមីត",
                    "លីមីតនៃផលគុណ = ផលគុណនៃលីមីត",
                    "លីមីតនៃផលចែក = ផលចែកនៃលីមីត"
                ],
                icon: Star
            }
        ]
    };

    return (
        <View style={tw("relative flex-1 overflow-hidden")}>
            {/* Background Components with Fake Data */}
            <View style={tw("absolute inset-0 opacity-20 pointer-events-none")}>
                <View style={tw("p-6 gap-4")}>
                    <DefinitionBox
                        title={fakeDefinition.title}
                        content={fakeDefinition.content}
                    />
                    <TipBox
                        title={fakeTip.title}
                        content={fakeTip.content}
                    />
                    <HintBox content={fakeHint.content} />
                    <WarningBox content={fakeWarning.content} />
                    <SummaryBox
                        title={fakeSummary.title}
                        icon={fakeSummary.icon}
                        sections={fakeSummary.sections}
                    />
                </View>
            </View>

            {/* Overlay Content */}
            <View style={tw("absolute inset-0 flex items-center justify-center bg-white/80")}>
                <View style={tw("items-center gap-6 p-8")}>
                    {/* Icon */}
                    <View style={tw("w-20 h-20 bg-indigo-500 rounded-full items-center justify-center shadow-lg")}>
                        <BookOpen size={40} color="white" />
                    </View>

                    {/* Text */}
                    <View style={tw("items-center gap-2")}>
                        <Text style={tw("text-2xl font-bold text-gray-800 text-center")}>
                            មេរៀននឹងមកដល់ឆាប់ៗ
                        </Text>
                        <Text style={tw("text-gray-600 text-center max-w-xs")}>
                            មេរៀននេះកំពុងត្រូវបានរៀបចំ សូមរង់ចាំឆាប់ៗនេះ
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
