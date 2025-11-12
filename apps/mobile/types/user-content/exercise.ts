export interface ExerciseDashboard {
  totalExercisesCompleted: number;
  totalAttempts: number;
  averageScore: number;
}

export interface ExerciseHistory {
  id: number;
  title: string;
  score: number;
  timeTaken: number;
  createdAt: string | null;
}

export interface SectionScore {
  sectionName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

export interface ExerciseAttempt {
  id: number;
  score: number;
  timeTaken: number;
  createdAt: string;
  sectionScores: SectionScore[];
}

export interface ExerciseWithAttempts {
  exerciseId: number;
  title: string;
  totalAttempts: number;
  bestScore: number;
  averageScore: number;
  lastAttempted: string;
  attempts: ExerciseAttempt[];
}

// REPORT

export interface ReportSectionScore {
  section: string;
  correctAnswers: number;
  totalQuestions: number;
  score: number;
}

export interface ReportExerciseAttempt {
  exerciseHistoryId: number;
  sectionScores: ReportSectionScore[];
}

export interface ExerciseReport {
  maxScore: number;
  numberOfAttempts: number;
  averageScore: string;
  attempts: ReportExerciseAttempt[];
}
