import { View, ScrollView } from "react-native";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import { SummarySection } from "@core-types/docs/boxProps";
import { SummaryBoxProps } from "@core-types/docs/boxProps";
import * as Icons from "lucide-react-native";
import { Lightbulb } from "lucide-react-native";

export default function SummaryBox({
  title,
  icon = "Lightbulb",
  sections,
}: SummaryBoxProps) {
  const SectionIcon = (Icons as any)[icon as keyof typeof Icons] as React.ComponentType<{
    size?: number;
    color?: string;
  }> || Lightbulb;

  return (
    <View style={tw("bg-indigo-50 border-l-4 border-indigo-600 p-4 my-6 rounded-r-3xl")}>
      {title && (
        <View style={tw("flex-row items-center gap-3 mb-3")}>
          <Lightbulb size={20} color="#4f46e5" />
          <Text style={tw("text-indigo-600 font-semibold text-xl")}>{title}</Text>
        </View>
      )}
      <View style={tw("flex gap-4")}>
        {sections.map((section, index) => (
          <View
            key={section.key ?? index}
            style={tw("bg-white p-4 rounded-3xl border border-indigo-100 w-full")}
          >
            <View style={tw("flex-row items-center gap-2 mb-3")}>
              {SectionIcon && <SectionIcon size={20} color="#4f46e5" />}
              <Text style={tw("font-semibold text-indigo-800")}>{section.title}</Text>
            </View>
            <View style={tw("gap-2")}>
              {typeof section.content === 'string' ? (
                <Text style={tw("text-sm")}>{section.content}</Text>
              ) : Array.isArray(section.content) ? (
                section.content.map((item, i) => (
                  <Text key={i} style={tw("text-sm")}>{item}</Text>
                ))
              ) : (
                section.content
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
