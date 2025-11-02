// ===== CURRICULUM STRUCTURE TYPES =====
// These types define the hierarchical structure of the educational curriculum
// From Grade → Subject → Lesson → Topic

import { FC } from "react";

// ===== CURRICULUM HIERARCHY =====

// Grade level (e.g., Grade 12)
export interface Grade {
  id: number;
  name: string; // Khmer grade name (e.g., "ថ្នាក់ទី១២")
  subjects: Subject[]; // Subjects within this grade
  orderIndex: number;
}

// Subject within a grade (e.g., Mathematics, Physics)
export interface Subject {
  id: number;
  name: string; // Khmer subject name (e.g., "គណិតវិទ្យា")
  icon: string; // Subject icon
  lessons: Lesson[]; // Lessons within this subject
  orderIndex: number;
}

// Lesson within a subject (e.g., Limits, Derivatives)
export interface Lesson {
  id: number;
  name: string; // Khmer lesson name (e.g., "លីមីត")
  icon: string; // Lesson icon
  topics: Topic[]; // Topics within this lesson
  orderIndex: number;
}

// Individual topic within a lesson (e.g., Zero over Zero, Infinity over Infinity)
export interface Topic {
  id: number;
  name: string; // Khmer topic name (e.g., "លីមីត ០/០")
  component: string;
  componentCode: string;
  orderIndex: number;
}
