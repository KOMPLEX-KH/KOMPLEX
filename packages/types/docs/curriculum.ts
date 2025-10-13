// ===== CURRICULUM STRUCTURE TYPES =====
// These types define the hierarchical structure of the educational curriculum
// From Grade → Subject → Lesson → Topic

import { FC } from "react";

// ===== CURRICULUM HIERARCHY =====

// Grade level (e.g., Grade 12)
export interface Grade {
  grade: string; // English grade identifier (e.g., "grade-12")
  gradeKhmer: string; // Khmer grade name (e.g., "ថ្នាក់ទី១២")
  content: Content[]; // Subjects within this grade
}

// Subject within a grade (e.g., Mathematics, Physics)
export interface Content {
  subject: string; // English subject identifier (e.g., "math")
  title: string; // Khmer subject name (e.g., "គណិតវិទ្យា")
  englishTitle: string; // English subject name (e.g., "Mathematics")
  icon: React.ComponentType<{ size?: number; className?: string }>; // Subject icon
  lessons: Lesson[]; // Lessons within this subject
}

// Lesson within a subject (e.g., Limits, Derivatives)
export interface Lesson {
  lesson: string; // English lesson identifier (e.g., "limits")
  title: string; // Khmer lesson name (e.g., "លីមីត")
  englishTitle: string; // English lesson name (e.g., "Limits")
  icon: React.ComponentType<{ size?: number; className?: string }>; // Lesson icon
  topics: Topic[]; // Topics within this lesson
}

// Individual topic within a lesson (e.g., Zero over Zero, Infinity over Infinity)
export interface Topic {
  title: string; // Khmer topic name (e.g., "លីមីត ០/០")
  englishTitle: string; // English topic identifier (e.g., "zero-over-zero")
  component: () => Promise<{ default: FC }>;
  subtopics?: Topic[]; // Optional subtopics within this topic
}
