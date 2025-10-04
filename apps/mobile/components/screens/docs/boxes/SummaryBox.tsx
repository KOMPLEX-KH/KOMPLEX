import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import TipBox from "./TipBox";

export interface SummarySection {
    key?: string;
    title: string;
    content: string | string[] | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
}

export interface SummaryBoxProps {
    title?: string | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    sections: SummarySection[];
}

export default function SummaryBox({
    title,
    icon,
    sections,
}: SummaryBoxProps) {

    const content = (
        <View style={tw("grid grid-cols-1 gap-4")}>
            {sections.map((section, index) => {
                const SectionIcon = section.icon;
                return (
                    <View
                        key={section.key ?? index}
                        style={tw("bg-white p-4 rounded-3xl border border-indigo-100 shadow-sm")}
                    >
                        <View style={tw("flex-row items-center gap-2 mb-3")}>
                            {SectionIcon ? (
                                <SectionIcon size={20} color="#4f46e5" />
                            ) : null}
                            <Text style={tw("font-semibold text-indigo-800")}>
                                {section.title}
                            </Text>
                        </View>
                        <View style={tw("space-y-2")}>
                            {typeof section.content === 'string' ? (
                                <Text style={tw("text-sm")}>{section.content}</Text>
                            ) : Array.isArray(section.content) ? (
                                section.content.map((item, itemIndex) => (
                                    <Text key={itemIndex} style={tw("text-sm")}>{item}</Text>
                                ))
                            ) : (
                                <Text style={tw("text-sm")}>{section.content}</Text>
                            )}
                        </View>
                    </View>
                );
            })}
        </View>
    );

    return <TipBox title={title} icon={icon} content={content} />;
}
