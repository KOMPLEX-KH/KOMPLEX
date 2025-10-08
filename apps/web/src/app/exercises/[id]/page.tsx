"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Clock, Flag } from "lucide-react";
import { useParams } from "next/navigation";
import { ExerciseBox } from "@/components/pages/exercises/ExerciseBox";
import PracticeInfo from "@/components/pages/exercises/ExerciseInfo";
import PracticeResult from "@/components/pages/exercises/ExerciseResult";
import ContentError from "@components/common/ContentError";
import {
  ExerciseWithQuestions,
  ExerciseSection,
} from "@/types/content/exercises";
import { feedExerciseService, meExerciseService } from "@/services/index";
import { transformBackendDataToSections } from "@core-utils/transform";
import { useAuth } from "@hooks/useAuth";

export default function LessonPage() {
  const params = useParams();
  const { id } = params;

  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [answers, setAnswers] = useState<{
    [sectionId: string]: { [questionId: string]: number };
  }>({});

  // New state for backend data
  const [exerciseData, setExerciseData] =
    useState<ExerciseWithQuestions | null>(null);
  const [examSections, setExamSections] = useState<ExerciseSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [examStartTime, setExamStartTime] = useState<number>(0);

  const { user, openLoginModal } = useAuth();

  // Fetch exercise data from backend
  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        setLoading(true);
        setError(null);
        if (!user) {
          openLoginModal();
          return;
        }
        // Use the lesson param as the exercise ID
        const data = await feedExerciseService.getExerciseById(id as string);
        setExerciseData(data);

        // Transform backend data to exam sections
        const sections = transformBackendDataToSections(data);
        setExamSections(sections);

        console.log("Fetched exercise data:", data);
      } catch (err) {
        setError("មានបញ្ហាក្នុងការទាញយកលំហាត់");
        console.error("Error fetching exercise:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchExerciseData();
    }
  }, [id]);

  const totalTime = examSections.reduce(
    (sum, section) => sum + section.timeLimit,
    0
  );
  const currentSectionData = examSections[currentSection];

  useEffect(() => {
    if (isExamStarted && !examCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeExpiry(); // Submit when time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    isExamStarted,
    examCompleted,
    examSections,
    answers,
    exerciseData,
    examStartTime,
  ]);

  const startExam = () => {
    setIsExamStarted(true);
    setTimeRemaining(totalTime * 60); // Convert to seconds
    setExamStartTime(Date.now()); // Track start time
    setCurrentQuestionIndex(0); // Reset to first question
  };

  const handleSectionChange = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
    setCurrentQuestionIndex(0); // Always start at question 1 when switching sections
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSubmit = (questionId: number, choiceId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [`section-${currentSection + 1}`]: {
        ...prev[`section-${currentSection + 1}`],
        [questionId]: choiceId,
      },
    }));
  };

  const calculateSectionScore = (section: ExerciseSection) => {
    const sectionAnswers = answers[section.id] || {};
    let correct = 0;
    const total = section.questions.length;

    section.questions.forEach((question) => {
      if (
        sectionAnswers[question.id] ===
        question.choices.find((choice) => choice.isCorrect)?.id
      ) {
        correct++;
      }
    });

    return { correct, total };
  };

  const getOverallScore = () => {
    let totalCorrect = 0;
    let totalQuestions = 0;

    examSections.forEach((section) => {
      const score = calculateSectionScore(section);
      totalCorrect += score.correct;
      totalQuestions += score.total;
    });

    return { correct: totalCorrect, total: totalQuestions };
  };

  // Submit exercise results to backend
  const submitExercise = async () => {
    if (!exerciseData || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const overallScore = getOverallScore();
      const timeTakenInSeconds = Math.floor(
        (Date.now() - examStartTime) / 1000
      );

      // Prepare answers array in the format expected by backend
      const submissionAnswers: { questionId: number; isCorrect: boolean }[] =
        [];

      examSections.forEach((section) => {
        const sectionAnswers = answers[section.id] || {};
        section.questions.forEach((question) => {
          const selectedChoiceId = sectionAnswers[question.id];
          const correctChoice = question.choices.find(
            (choice) => choice.isCorrect
          );
          const isCorrect = selectedChoiceId === correctChoice?.id;

          submissionAnswers.push({
            questionId: question.id,
            isCorrect: isCorrect,
          });
        });
      });

      const submissionData = {
        score: (overallScore.correct * 100) / overallScore.total,
        timeTaken: timeTakenInSeconds,
        answers: submissionAnswers,
      };

      console.log("Submitting exercise:", submissionData);

      await meExerciseService.submitExercise(id as string, submissionData);

      console.log("Exercise submitted successfully");
    } catch (error) {
      console.error("Error submitting exercise:", error);
      alert("មានបញ្ហាកើតឡើងពេលបញ្ជូនលទ្ធផល សូមព្យាយាមម្តងទៀត");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Complete exam and submit results
  const completeExam = async () => {
    setExamCompleted(true);
    await submitExercise();
  };

  // Handle time expiry
  const handleTimeExpiry = useCallback(async () => {
    await completeExam();
  }, [examSections, answers, exerciseData, examStartTime]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14">
        <div className="max-w-7xl w-full mx-auto px-5 py-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-8 bg-gray-200 rounded-3xl w-64 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-3xl w-32 animate-pulse"></div>
              </div>
            </div>

            {/* Section Navigation Skeleton */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 bg-gray-200 rounded-3xl w-24 animate-pulse"
                ></div>
              ))}
            </div>

            {/* Exercise Box Skeleton */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-500/20 rounded-3xl p-6 my-6 shadow-lg shadow-indigo-500/15">
              {/* Question Skeleton */}
              <div className="mb-6">
                <div className="h-6 bg-gray-200 rounded-3xl w-3/4 mb-4 animate-pulse"></div>

                {/* Choices Skeleton */}
                <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                  {[1, 2, 3, 4].map((j) => (
                    <div
                      key={j}
                      className="h-16 bg-gray-100 rounded-3xl border-2 border-gray-200 animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Navigation Skeleton */}
              <div className="flex items-center justify-center gap-10 mt-6 pt-4 border-t border-indigo-500/20">
                <div className="h-10 bg-gray-200 rounded-3xl w-20 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-3xl w-20 animate-pulse"></div>
              </div>
            </div>

            {/* Bottom Navigation Skeleton */}
            <div className="flex items-center justify-between mt-6">
              <div className="h-12 bg-gray-200 rounded-3xl w-32 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-3xl w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !exerciseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14">
        <div className="max-w-md mx-auto px-6">
          <ContentError type="error" message={error || "រកមិនឃើញលំហាត់នេះទេ"} />
        </div>
      </div>
    );
  }

  if (!isExamStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14 ">
        <div className="max-w-7xl m-auto px-4 py-8 w-full">
          {loading ? (
            <div className="bg-white rounded-3xl shadow-lg p-8">
              {/* Title Skeleton */}
              <div className="text-center mb-8">
                <div className="h-10 bg-gray-200 rounded-3xl w-96 mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
              </div>

              {/* Sections Skeleton */}
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-3xl p-4"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-3xl animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Start Button Skeleton */}
              <div className="text-center mt-8">
                <div className="h-12 bg-gray-200 rounded-3xl w-48 mx-auto animate-pulse"></div>
              </div>
            </div>
          ) : (
            <PracticeInfo
              examTitle={exerciseData.title}
              examSections={examSections}
              totalTime={totalTime}
              onStartExam={startExam}
            />
          )}
        </div>
      </div>
    );
  }

  if (examCompleted) {
    const overallScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-14 ">
        <div className="max-w-7xl m-auto px-4 py-8 w-full">
          <PracticeResult
            examSections={examSections}
            overallScore={overallScore}
            sectionScores={Object.fromEntries(
              examSections.map((section) => [
                section.id,
                calculateSectionScore(section),
              ])
            )}
            onRetakeExam={() => {
              setIsExamStarted(false);
              setExamCompleted(false);
              setAnswers({});
              setCurrentSection(0);
              setCurrentQuestionIndex(0);
            }}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center mx-5">
      <div className="max-w-7xl w-full mx-auto px-4 py-8  bg-white rounded-3xl shadow-lg">
        {/* Header with Timer */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">
                វិញ្ញាសា{exerciseData?.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <Clock size={20} className="text-indigo-600" />
                <span>{formatTime(timeRemaining)}</span>
              </div>
            </div>
            <button
              onClick={completeExam}
              disabled={isSubmitting}
              className="flex items-center gap-2 text-center bg-red-500/20 border border-red-500 text-red-600 px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Flag size={20} />
              <span className="text-red-600 hidden lg:flex">
                {isSubmitting ? "កំពុងបញ្ជូន..." : "បញ្ចប់វិញ្ញាសា"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide ">
          {examSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === currentSection
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Current Section */}
        <ExerciseBox
          questions={currentSectionData.questions}
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSubmit={handleAnswerSubmit}
          onQuestionChange={setCurrentQuestionIndex}
          sectionAnswers={answers[`section-${currentSection + 1}`] || {}}
        />

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              const prevSection = Math.max(0, currentSection - 1);
              handleSectionChange(prevSection);
            }}
            disabled={currentSection === 0}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-md disabled:shadow-none"
          >
            <ArrowLeft size={20} />
            ផ្នែកមុន
          </button>

          {currentSection === examSections.length - 1 ? (
            <button
              onClick={completeExam}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-md disabled:shadow-none"
            >
              {isSubmitting ? "កំពុងបញ្ជូន..." : "បញ្ចប់វិញ្ញាសា"}
            </button>
          ) : (
            <button
              onClick={() => {
                const nextSection = currentSection + 1;
                handleSectionChange(nextSection);
              }}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-md"
            >
              ផ្នែកបន្ទាប់
              <ArrowLeft size={20} className="rotate-180" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
