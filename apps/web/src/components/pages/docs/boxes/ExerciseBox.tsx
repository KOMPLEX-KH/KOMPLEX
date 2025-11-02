"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  BookAIcon,
  RotateCcw,
} from "lucide-react";
import { ExerciseQuestion } from "@/types/docs/topic";
import { InlineMath } from "react-katex";

export interface ExerciseBoxProps {
  questions: ExerciseQuestion[];
}

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

export function ExerciseBox({ questions }: ExerciseBoxProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<ExerciseQuestion[]>(() =>
    shuffleQuestions(questions)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Store answers for each question: { questionIndex: selectedAnswer }
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);
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

  return (
    <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-500/20 rounded-3xl p-4 my-6 shadow-lg shadow-indigo-500/15">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-indigo-500/20">
        <div className="text-indigo-600 font-semibold text-lg flex gap-2 items-center">
          <BookAIcon className="text-indigo-600" />
          លំហាត់អនុវត្តន៍
        </div>
        <div className="text-gray-600 text-sm flex items-center gap-2">
          <span>{currentQuestionIndex + 1}/{shuffledQuestions.length}</span>
          {(
            <span className={`${correctPercentage >= 80 ? 'text-green-500' : correctPercentage >= 60 ? 'text-yellow-500' : 'text-red-500'} font-semibold`}>
              <span className="text-gray-600">|</span> <span className="">{correctPercentage}%</span>
            </span>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="text-gray-800 font-semibold text-lg mb-4">
          {currentQuestion.question}
        </h4>

        {/* Options */}
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === currentQuestion.correctAnswer;
            const showCorrect = showResult && isCorrectAnswer;
            const showIncorrect = showResult && isSelected && !isCorrectAnswer;
            const showCorrectAnswer =
              showResult && isCorrectAnswer && !isSelected;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-full border-2 border-gray-200 transition-all duration-300 font-medium ${isSelected && !showResult
                  ? "border-indigo-500 bg-indigo-50/80 text-indigo-700"
                  : !showResult
                    ? "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-gray-700 cursor-pointer"
                    : ""
                  } ${showCorrect
                    ? "border-green-500 bg-green-50/80 text-green-700"
                    : ""
                  } ${showIncorrect
                    ? "border-red-500 bg-red-50/80 text-red-700"
                    : ""
                  } ${showCorrectAnswer
                    ? "border-green-500 bg-green-50/60 text-green-700"
                    : ""
                  } ${showResult ? "cursor-default" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">
                    {String.fromCharCode(0x1780 + index)}{" "}
                    {/* Khmer letters: ក, ខ, គ, ឃ */}
                  </span>
                  <span>
                    {typeof option === "string" &&
                      (option.startsWith("\\") || option.includes("{")) ? (
                      <InlineMath math={option} />
                    ) : (
                      option
                    )}
                  </span>
                  {showResult && (
                    <div className="ml-auto">
                      {showCorrect ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : showIncorrect ? (
                        <XCircle size={20} className="text-red-600" />
                      ) : showCorrectAnswer ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-indigo-500/20">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 text-white px-4 py-2 rounded-3xl transition-all duration-300"
        >
          <ChevronLeft size={18} />
          មុន
        </button>

        {/* Question Dots */}
        <div className="flex gap-2">
          {shuffledQuestions.map((_, index) => {
            const hasAnswer = answers[index] !== undefined;
            const isAnswered = answers[index] === shuffledQuestions[index].correctAnswer;
            return (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentQuestionIndex
                  ? "bg-indigo-600 ring-2 ring-indigo-300 ring-offset-1"
                  : hasAnswer
                    ? isAnswered
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-100 hover:bg-gray-200"
                  }`}
                title={
                  hasAnswer
                    ? isAnswered
                      ? "ត្រឹមត្រូវ"
                      : "មិនត្រឹមត្រូវ"
                    : "មិនទាន់ឆ្លើយ"
                }
              />
            );
          })}
        </div>

        {isLastQuestion ? (
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-3xl transition-all duration-300"
          >
            <RotateCcw size={18} />
            ធ្វើម្តងទៀត
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-3xl transition-all duration-300"
          >
            បន្ទាប់
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
