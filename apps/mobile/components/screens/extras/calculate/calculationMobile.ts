import {
  Calculator,
  Atom,
  Dna,
  FlaskConical,
  BookOpen,
  Globe,
  Scroll,
} from 'lucide-react-native';
import type { ComponentType } from 'react';
import {
  getSubjectScienceGrade,
  getSubjectSocialScienceGrade,
  calculateTotalGrade,
} from '@core-types/extra/calculation';
import type { SubjectKey, Scores } from '@core-types/extra/calculation';

export type SubjectType = 'science' | 'social';

export interface Subject {
  key: string;
  name: string;
  icon: ComponentType<{ size?: number; color?: string }>;
  maxScore: number;
  type: SubjectType;
}

export const ScienceSubjects: Subject[] = [
  { key: 'math', name: 'គណិតវិទ្យា', icon: Calculator, maxScore: 125, type: 'science' },
  { key: 'physics', name: 'រូបវិទ្យា', icon: Atom, maxScore: 75, type: 'science' },
  { key: 'biology', name: 'ជីវវិទ្យា', icon: Dna, maxScore: 75, type: 'science' },
  { key: 'chemistry', name: 'គីមីវិទ្យា', icon: FlaskConical, maxScore: 75, type: 'science' },
  { key: 'khmer', name: 'អក្សរសាស្ត្រខ្មែរ', icon: BookOpen, maxScore: 75, type: 'science' },
  { key: 'history', name: 'ប្រវត្តិវិទ្យា', icon: Scroll, maxScore: 50, type: 'science' },
  { key: 'english', name: 'អង់គ្លេស', icon: Globe, maxScore: 50, type: 'science' },
];

export const SocialScienceSubjects: Subject[] = [
  { key: 'math', name: 'គណិតវិទ្យា', icon: Calculator, maxScore: 125, type: 'social' },
  { key: 'khmer', name: 'អក្សរសាស្ត្រខ្មែរ', icon: BookOpen, maxScore: 75, type: 'social' },
  { key: 'history', name: 'ប្រវត្តិវិទ្យា', icon: Scroll, maxScore: 50, type: 'social' },
  { key: 'geography', name: 'ភូមិវិទ្យា', icon: Globe, maxScore: 50, type: 'social' },
  { key: 'ethics', name: 'សីលធម៌ ពលរដ្ឋវិទ្យា', icon: BookOpen, maxScore: 50, type: 'social' },
  { key: 'earth', name: 'ផែនដី', icon: FlaskConical, maxScore: 50, type: 'social' },
  { key: 'english', name: 'អង់គ្លេស (បន្ថែម)', icon: Globe, maxScore: 50, type: 'social' },
];

export { getSubjectScienceGrade, getSubjectSocialScienceGrade, calculateTotalGrade };
export type { SubjectKey, Scores };
