import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Calculator, Atom, Dna, BookOpen, LucideProps } from "lucide-react";
import {
  Exercise,
  Subject,
  Topic,
  ExerciseWithQuestions,
  ExerciseSection,
  Question,
} from "../types/api-types/exercises";

// SUBJECT UTILITIES ==========================================================

// Get subject icon based on subject name
export const getSubjectIcon = (
  subjectName: string
): ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
> => {
  const iconMap: {
    [key: string]: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  } = {
    "គណិតវិទ្យា": Calculator,
    "រូបវិទ្យា": Atom,
    "គីមីវិទ្យា": Dna,
    "ជីវវិទ្យា": Dna,
  };
  return iconMap[subjectName] || BookOpen;
};

// Get subject color based on subject name
export const getSubjectColor = (subjectName: string): string => {
  const colorMap: { [key: string]: string } = {
    "គណិតវិទ្យា": "bg-blue-500",
    "រូបវិទ្យា": "bg-purple-500",
    "គីមីវិទ្យា": "bg-green-500",
    "ជីវវិទ្យា": "bg-red-500",
  };
  return colorMap[subjectName] || "bg-gray-500";
};

// Get subject color variants for UI styling
export const getSubjectColorVariants = (color: string) => {
  const colorMap: { [key: string]: { bg: string; border: string } } = {
    "bg-blue-500": { bg: "bg-indigo-50/80", border: "border-indigo-500" },
    "bg-purple-500": { bg: "bg-purple-50/80", border: "border-purple-300" },
    "bg-green-500": { bg: "bg-green-50/80", border: "border-green-300" },
    "bg-emerald-500": { bg: "bg-emerald-50/80", border: "border-emerald-300" },
    "bg-amber-500": { bg: "bg-amber-50/80", border: "border-amber-300" },
    "bg-red-500": { bg: "bg-red-50/80", border: "border-red-300" },
    "bg-gray-500": { bg: "bg-gray-50/80", border: "border-gray-300" },
  };
  return colorMap[color] || { bg: "bg-gray-50/80", border: "border-gray-300" };
};

// DATA TRANSFORMATION ========================================================

// Transform backend exercise data to frontend Subject format
export const transformBackendDataToSubjects = (
  backendData: Exercise
): Subject[] => {
  return Object.entries(backendData).map(([subjectName, exercises]) => {
    const topics: Topic[] = exercises.map((exercise) => ({
      id: exercise.id.toString(),
      name: exercise.title,
      questionCount: exercise.numberOfQuestions,
      estimatedTime: `${exercise.duration}`,
      userProgress: exercise.highestScore,
      attempts: exercise.numberOfAttempts,
    }));

    return {
      id: subjectName.toLowerCase().replace(/\s+/g, "-"),
      name: subjectName,
      icon: getSubjectIcon(subjectName),
      color: getSubjectColor(subjectName),
      topics: topics,
    };
  });
};

// Transform backend exercise data to frontend ExerciseSection format
export const transformBackendDataToSections = (
  backendData: ExerciseWithQuestions
): ExerciseSection[] => {
  // Group questions by section
  const sectionMap = new Map<string, Question[]>();

  backendData.questions.forEach((question) => {
    if (!sectionMap.has(question.section)) {
      sectionMap.set(question.section, []);
    }
    sectionMap.get(question.section)!.push(question);
  });

  // Convert to ExamSection format
  const sections: ExerciseSection[] = [];
  const totalDuration = backendData.duration;
  const sectionCount = sectionMap.size;
  const timePerSection = Math.ceil(totalDuration / sectionCount);

  Array.from(sectionMap.entries()).forEach(
    ([sectionName, questions], index) => {
      const transformedQuestions: Question[] = questions.map((question) => {
        return {
          id: question.id,
          title: question.title,
          imageUrl: question.imageUrl,
          section: question.section,
          choices: question.choices,
        };
      });

      sections.push({
        id: `section-${index + 1}`,
        title: sectionName,
        description: `Questions for ${sectionName}`,
        timeLimit: timePerSection,
        questions: transformedQuestions,
      });
    }
  );

  // SOMEHOW REVERSING IT WORK 
  // ! TOCHANGE

  return sections.reverse();
};
