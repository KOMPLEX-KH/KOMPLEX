import { useState, useEffect, useRef, useMemo } from "react";
import { View, Pressable, ScrollView } from "react-native";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  BookOpen,
  RotateCcw,
} from "lucide-react-native";
import { ExerciseQuestion, ExerciseBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import MathRenderer from "@/components/helper/MathRenderer";
import { tw } from "@/utils/styles";

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle questions and their options, tracking correct answer
function shuffleQuestions(questions: ExerciseQuestion[]): ExerciseQuestion[] {
  const shuffledQuestions = shuffleArray(questions);

  return shuffledQuestions.map((question) => {
    const originalOptions = [...question.options];
    // Ensure correctAnswer is a number
    const originalCorrectAnswer = typeof question.correctAnswer === 'number'
      ? question.correctAnswer
      : 0;

    // Ensure index is within bounds
    if (originalCorrectAnswer < 0 || originalCorrectAnswer >= originalOptions.length) {
      return {
        ...question,
        correctAnswer: 0,
      };
    }

    const correctOption = originalOptions[originalCorrectAnswer];

    // Shuffle options
    const shuffledOptions = shuffleArray(originalOptions);

    // Find the new index of the correct answer after shuffling
    const newCorrectAnswer = shuffledOptions.findIndex(
      (option) => {
        const optionValue = option;
        const correctValue = correctOption;
        // Compare using string representation for reliability
        return String(optionValue) === String(correctValue);
      }
    );

    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer >= 0 ? newCorrectAnswer : 0,
    };
  });
}

export default function ExerciseBox({ questions }: ExerciseBoxProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<ExerciseQuestion[]>(() =>
    shuffleQuestions(questions)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Store answers for each question: { questionIndex: selectedAnswer }
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Track when an answer was just selected (to trigger auto-advance)
  const justAnsweredRef = useRef<number | null>(null);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex] ?? null;
  const showResult = selectedAnswer !== null;

  // Calculate percentage of correct answers
  const correctPercentage = useMemo(() => {
    const totalAnswered = Object.keys(answers).length;
    if (totalAnswered === 0) return 0;

    const correctCount = shuffledQuestions.reduce((count, question, index) => {
      const userAnswer = answers[index];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);

    return Math.round((correctCount / totalAnswered) * 100);
  }, [answers, shuffledQuestions]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Auto-advance after showing result for 2 seconds (only if just answered)
  useEffect(() => {
    // Only auto-advance if this question was just answered (not when navigating back)
    if (
      showResult &&
      justAnsweredRef.current === currentQuestionIndex &&
      currentQuestionIndex < shuffledQuestions.length - 1
    ) {
      // Clear any existing timer
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }

      // Set new timer
      autoAdvanceTimerRef.current = setTimeout(() => {
        justAnsweredRef.current = null; // Clear the flag before advancing
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 2000); // 2 seconds delay

      return () => {
        if (autoAdvanceTimerRef.current) {
          clearTimeout(autoAdvanceTimerRef.current);
        }
      };
    } else {
      // Clear the flag when navigating to a question (not just answered)
      if (justAnsweredRef.current !== currentQuestionIndex) {
        justAnsweredRef.current = null;
      }
    }
  }, [showResult, currentQuestionIndex, shuffledQuestions.length]);

  const handleAnswerSelect = (optionIndex: number) => {
    // Only allow selection if question hasn't been answered
    if (!showResult) {
      // Mark this question as just answered to trigger auto-advance
      justAnsweredRef.current = currentQuestionIndex;

      // Save answer for current question
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: optionIndex,
      }));
    }
  };

  const handleRetry = () => {
    // Clear auto-advance timer
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }
    // Clear the just-answered flag
    justAnsweredRef.current = null;

    // Reset everything and re-shuffle
    setShuffledQuestions(shuffleQuestions(questions));
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      // Clear auto-advance timer if user manually navigates
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      // Clear the just-answered flag when navigating manually
      justAnsweredRef.current = null;
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      // Clear auto-advance timer if user manually navigates
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      // Clear the just-answered flag when navigating manually
      justAnsweredRef.current = null;
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index: number) => {
    // Clear auto-advance timer if user manually navigates
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }
    // Clear the just-answered flag when navigating manually
    justAnsweredRef.current = null;
    setCurrentQuestionIndex(index);
  };

  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;

  const renderOption = (option: string, index: number) => {
    const isSelected = selectedAnswer === index;
    const isCorrectAnswer = index === currentQuestion.correctAnswer;
    const showCorrect = showResult && isCorrectAnswer;
    const showIncorrect = showResult && isSelected && !isCorrectAnswer;
    const showCorrectAnswer = showResult && isCorrectAnswer && !isSelected;

    // Check if option is math
    const isMath = typeof option === "string" && (option.startsWith("\\") || option.includes("{"));

    // Determine button style
    let buttonStyle = tw("w-full p-4 rounded-full border-2");
    if (isSelected && !showResult) {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-indigo-500 bg-indigo-50");
    } else if (showCorrect) {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-green-500 bg-green-50");
    } else if (showIncorrect) {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-red-500 bg-red-50");
    } else if (showCorrectAnswer) {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-green-500 bg-green-50");
    } else if (!showResult) {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-gray-200 bg-white");
    } else {
      buttonStyle = tw("w-full p-4 rounded-full border-2 border-gray-200 bg-white");
    }

    // Determine text color
    let textColor = "text-gray-700";
    if (isSelected && !showResult) {
      textColor = "text-indigo-700";
    } else if (showCorrect || showCorrectAnswer) {
      textColor = "text-green-700";
    } else if (showIncorrect) {
      textColor = "text-red-700";
    }

    return (
      <Pressable
        key={index}
        onPress={() => handleAnswerSelect(index)}
        disabled={showResult}
        style={buttonStyle}
      >
        <View style={tw("flex-row items-center gap-3")}>
          <Text style={tw("text-lg font-semibold")}>
            {String.fromCharCode(0x1780 + index)}{" "}
          </Text>
          <View style={tw("flex-1")}>
            {isMath ? (
              <MathRenderer math={option}  />
            ) : (
              <Text style={tw(textColor)}>{option}</Text>
            )}
          </View>
          {showResult && (
            <View>
              {showCorrect ? (
                <CheckCircle size={20} color="#16a34a" />
              ) : showIncorrect ? (
                <XCircle size={20} color="#dc2626" />
              ) : showCorrectAnswer ? (
                <CheckCircle size={20} color="#16a34a" />
              ) : null}
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={tw("bg-white border-2 border-indigo-500/20 rounded-3xl p-4 my-6")}>
      {/* Header */}
      <View style={tw("flex-row items-center justify-between mb-6 pb-4 border-b border-indigo-500/20")}>
        <View style={tw("flex-row items-center gap-2")}>
          <BookOpen size={20} color="#4f46e5" />
          <Text style={tw("text-indigo-600 font-semibold text-lg")}>
            លំហាត់អនុវត្តន៍
          </Text>
        </View>
        <View style={tw("flex-row items-center gap-2")}>
          <Text style={tw("text-gray-600 text-sm")}>
            {currentQuestionIndex + 1}/{shuffledQuestions.length}
          </Text>
          <Text style={tw("text-gray-600 text-sm")}>|</Text>
          <Text
            style={tw(
              `text-sm font-semibold ${correctPercentage >= 80
                ? "text-green-500"
                : correctPercentage >= 60
                  ? "text-yellow-500"
                  : "text-red-500"
              }`
            )}
          >
            {correctPercentage}%
          </Text>
        </View>
      </View>

      {/* Question */}
      <View style={tw("mb-6")}>
        <View style={tw("mb-4")}>
          <Text style={tw("text-gray-800 font-semibold text-lg")}>
            {typeof currentQuestion.question === 'string' ? (
              currentQuestion.question.startsWith("\\") || currentQuestion.question.includes("{") ? (
                <MathRenderer math={currentQuestion.question} />
              ) : (
                currentQuestion.question
              )
            ) : (
              currentQuestion.question
            )}
          </Text>
        </View>

        {/* Options */}
        <View style={tw("gap-4")}>
          {currentQuestion.options.map((option, index) => renderOption(option, index))}
        </View>
      </View>

      {/* Navigation */}
      <View style={tw("flex-row items-center justify-between mt-6 pt-4 border-t border-indigo-500/20")}>
        <Pressable
          onPress={prevQuestion}
          disabled={currentQuestionIndex === 0}
          style={tw(
            `flex-row items-center gap-2 px-4 py-2 rounded-3xl ${currentQuestionIndex === 0 ? "bg-gray-50" : "bg-indigo-500"
            }`
          )}
        >
          <ChevronLeft size={18} color={currentQuestionIndex === 0 ? "#9ca3af" : "#ffffff"} />
          <Text
            style={tw(
              `font-medium ${currentQuestionIndex === 0 ? "text-gray-400" : "text-white"}`
            )}
          >
            មុន
          </Text>
        </Pressable>

        {/* Question Dots */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw("flex-row gap-2")}>
          {shuffledQuestions.map((_, index) => {
            const hasAnswer = answers[index] !== undefined;
            const isAnswered = answers[index] === shuffledQuestions[index].correctAnswer;
            const isCurrent = index === currentQuestionIndex;

            let dotColor = "#e5e7eb"; // gray-100
            if (isCurrent) {
              dotColor = "#4f46e5"; // indigo-600
            } else if (hasAnswer) {
              dotColor = isAnswered ? "#22c55e" : "#ef4444"; // green-500 or red-500
            }

            return (
              <Pressable
                key={index}
                onPress={() => goToQuestion(index)}
                style={tw(
                  `w-3 h-3 rounded-full ${isCurrent ? "ring-2 ring-indigo-300 ring-offset-1" : ""
                  }`
                )}
              >
                <View
                  style={[
                    tw("w-3 h-3 rounded-full"),
                    { backgroundColor: dotColor },
                  ]}
                />
              </Pressable>
            );
          })}
        </ScrollView>

        {isLastQuestion ? (
          <Pressable
            onPress={handleRetry}
            style={tw("flex-row items-center gap-2 bg-indigo-500 px-4 py-2 rounded-3xl")}
          >
            <RotateCcw size={18} color="#ffffff" />
            <Text style={tw("text-white font-medium")}>ធ្វើម្តងទៀត</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={nextQuestion}
            style={tw("flex-row items-center gap-2 bg-indigo-500 px-4 py-2 rounded-3xl")}
          >
            <Text style={tw("text-white font-medium")}>បន្ទាប់</Text>
            <ChevronRight size={18} color="#ffffff" />
          </Pressable>
        )}
      </View>
    </View>
  );
}
