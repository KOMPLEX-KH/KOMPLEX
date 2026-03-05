import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";
import { RefAttributes } from "react";

// FOR STRING AS KEY
export interface Exercise {
  [subjectName: string]: ExerciseData[];
}

// FOR BASE EXERCISE PAGE =======================================================================
export interface ExerciseData {
  id: number;
  title: string;
  duration: number;
  subject: string;
  grade: number;
  numberOfQuestions: number;
  numberOfAttempts: number;
  highestScore: number;
}

// Frontend display interfaces
export interface Topic {
  id: string;
  name: string;
  questionCount: number;
  estimatedTime: string;
  userProgress: number;
  attempts: number;
}

export interface Subject {
  id: string;
  name: string;
  icon:React.ReactNode | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  color: string;
  topics: Topic[];
}

// FOR EXERCISE PAGE =======================================================================


export interface Choice {
    id: number;
    text: string;
    isCorrect: boolean;
}

export interface Question {
    id: number;
    title: string;
    imageUrl: string | null;
    section: string;
    choices: Choice[];
}

export interface ExerciseWithQuestions {
    id: number;
    title: string;
    description: string;
    subject: string;
    topic: string;
    grade: number;
    duration: number;
    createdAt: string;
    updatedAt: string;
    questions: Question[];
}

// Frontend display interfaces
export interface ExerciseSection {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    timeLimit: number; // in minutes
}

