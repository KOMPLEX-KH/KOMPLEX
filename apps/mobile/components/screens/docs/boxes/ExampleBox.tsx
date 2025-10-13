import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { Search } from 'lucide-react-native';

export interface ExampleBoxProps {
    question: string | React.ReactNode;
    content?: string | string[] | React.ReactNode;
    steps?: Array<{ title: string; content: string }>;
    answer?: string | React.ReactNode;
}

function AnswerBox({ answer }: { answer: string | React.ReactNode }) {
    return (
        <View style={tw("bg-green-50/60 border-2 border-green-500 rounded-3xl p-5 my-4")}>
            <Text style={tw("text-green-800 font-semibold")}>
                ចម្លើយៈ {answer}
            </Text>
        </View>
    );
}

export default function ExampleBox({ question, content, steps, answer }: ExampleBoxProps) {
    return (
        <View style={tw("bg-amber-50/90 border-2 border-amber-500 rounded-3xl p-4 shadow-lg")}>
            {/* Header */}
            <View style={tw("flex-row items-center gap-3 mb-4")}>
                <Search size={20} color="#d97706" />
                <Text style={tw("text-amber-800 font-semibold text-lg")}>
                    ឧទាហរណ៍
                </Text>
            </View>

            {/* Question */}
            <Text style={tw("text-gray-800 mb-4 font-medium")}>
                {question}
            </Text>

            {/* Content */}
            {content && (
                <Text style={tw("text-gray-800 mb-4 font-medium")}>
                    {content}
                </Text>
            )}

            {/* Solution Steps */}
            {steps?.some(step => step.content) && (
                <View style={tw("mb-4")}>
                    <View style={tw("space-y-4")}>
                        {steps.map((step, index) =>
                            step.content && (
                                <View key={index} style={tw("space-y-2")}>
                                    <Text style={tw("font-semibold text-black")}>
                                        ជំហានទី{index + 1}៖ {step.title}
                                    </Text>
                                    <View style={tw("p-3 bg-white rounded-3xl border-2 border-gray-200")}>
                                        <Text style={tw("text-sm text-black")}>
                                            {step.content}
                                        </Text>
                                    </View>
                                </View>
                            )
                        )}
                    </View>
                </View>
            )}

            {/* Answer */}
            {answer && <AnswerBox answer={answer} />}
        </View>
    );
}
