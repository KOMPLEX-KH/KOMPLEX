import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { Search } from 'lucide-react-native';
import { ExampleBoxProps } from '@core-types/docs/boxProps';

function AnswerBox({ answer }: { answer: string | React.ReactNode }) {
    return (
        <View style={tw("bg-green-50 border-2 border-green-500 rounded-3xl p-5 my-4")}>
            <Text style={tw("text-green-800 font-semibold")}>
                ចម្លើយៈ
                {"\n"}
            </Text>
            {answer}
        </View>
    );
}

export default function ExampleBox({ question, content, steps, answer }: ExampleBoxProps) {
    return (
        <View style={tw("bg-yellow-50 border-2 border-yellow-500 rounded-3xl p-4 my-6")}>
            {/* Header */}
            <View style={tw("flex-row items-center gap-3 mb-4")}>
                <Search size={20} color="#d97706" />
                <Text style={tw("text-yellow-800 font-semibold text-lg")}>
                    ឧទាហរណ៍
                </Text>
            </View>

            {/* Question */}
            <View style={tw("mb-4")}>
                <Text style={tw("text-yellow-800 font-medium")}>{question}</Text>
            </View>

            {/* Content */}
            {content && (
                <View style={tw("mb-4")}>
                    <Text style={tw("text-gray-800 font-medium")}>{content}</Text>
                </View>
            )}

            {/* Solution Steps */}
            {steps?.some(step => step.content) && (
                <View style={tw("mb-4 gap-4")}>
                    {steps.map((step, index) =>
                        step.content && (
                            <View key={index} style={tw("gap-2")}>
                                <Text style={tw("text-black")}>
                                    ជំហានទី{index + 1}៖ {step.title}
                                </Text>
                                <View style={tw("bg-white rounded-3xl border-2 border-gray-200 p-3")}>
                                    <Text style={tw("text-sm text-black")}>
                                        {step.content}
                                    </Text>
                                </View>
                            </View>
                        )
                    )}
                </View>
            )}

            {/* Answer */}
            {answer && <AnswerBox answer={answer} />}
        </View>
    );
}
