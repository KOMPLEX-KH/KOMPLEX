import { useState } from "react";
import { View, Pressable } from "react-native";
import { ChevronDown, ChevronUp, Edit } from "lucide-react-native";
import { TopicPracticeBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

export default function TopicPracticeBox({ exercises }: TopicPracticeBoxProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <View style={tw("gap-4 border-t border-indigo-200 pt-4")}>
      <View style={tw("py-4")}>
        <View style={tw("flex-row items-center gap-2")}>
          <Edit size={24} color="#4f46e5" />
          <Text style={tw("text-2xl font-semibold text-indigo-600")}>
            លំហាត់គំរូ
          </Text>
        </View>
      </View>
      {/* Exercises */}
      {exercises.map((exercise) => (
        <View
          key={exercise.id}
          style={tw("bg-white rounded-3xl border border-indigo-200")}
        >
          {/* Exercise Header */}
          <View style={tw("bg-indigo-50 p-4")}>
            <Text style={tw("text-xl font-semibold text-indigo-600")}>
              {exercise.description}
            </Text>
          </View>

          {/* Exercise Content */}
          <View style={tw("p-4 gap-4")}>
            {exercise.problems.map((problem, index) => {
              const questionId = `${exercise.id}-${index}`;
              const isExpanded = expandedQuestions[questionId];
              return (
                <View
                  key={index}
                  style={tw("bg-indigo-50/50 rounded-3xl border border-indigo-100")}
                >
                  <View style={tw("p-2")}>
                    <Pressable
                      onPress={() => toggleQuestion(questionId)}
                      style={tw("flex-row items-center gap-3 mb-3 p-2 rounded-3xl")}
                    >
                      <View style={tw("bg-white rounded-full w-6 h-6 items-center justify-center")}>
                        <Text style={tw("text-indigo-600 text-sm font-medium")}>
                          {index + 1}
                        </Text>
                      </View>
                      <View style={tw("flex-1")}>
                        <Text style={tw("text-gray-800 font-medium")}>
                          {problem}
                        </Text>
                      </View>
                      {isExpanded ? (
                        <ChevronUp size={24} color="#4f46e5" />
                      ) : (
                        <ChevronDown size={24} color="#4f46e5" />
                      )}
                    </Pressable>

                    {/* Answer Section */}
                    {isExpanded &&
                      exercise.answers &&
                      exercise.answers[index] && (
                        <View style={tw("mt-3 p-3 border-t border-indigo-200")}>
                          <Text style={tw("text-md text-indigo-600 font-bold mb-2")}>
                            ចម្លើយ:
                          </Text>
                          <View style={tw("bg-white rounded-3xl p-4 border border-indigo-100")}>
                            <Text style={tw("text-gray-700")}>
                              {exercise.answers[index]}
                            </Text>
                          </View>
                        </View>
                      )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}
