import { Calculator, Atom, Dna, FlaskConical, BookOpen, Globe, Scroll, LucideIcon } from "lucide-react";

export type SubjectType = "science" | "social";

export interface Subject {
  key: string;
  name: string;
  icon: LucideIcon;
  maxScore: number;
  type: SubjectType;
}

export const ScienceSubjects: Subject[] = [
  { key: "math", name: "គណិតវិទ្យា", icon: Calculator, maxScore: 125, type: "science" },
  { key: "physics", name: "រូបវិទ្យា", icon: Atom, maxScore: 75, type: "science" },
  { key: "biology", name: "ជីវវិទ្យា", icon: Dna, maxScore: 75, type: "science" },
  { key: "chemistry", name: "គីមីវិទ្យា", icon: FlaskConical, maxScore: 75, type: "science" },
  { key: "khmer", name: "អក្សរសាស្ត្រខ្មែរ", icon: BookOpen, maxScore: 75, type: "science" },
  { key: "history", name: "ប្រវត្តិវិទ្យា", icon: Scroll, maxScore: 50, type: "science" },
  { key: "english", name: "អង់គ្លេស", icon: Globe, maxScore: 50, type: "science" },
];

export const SocialScienceSubjects : Subject[] = [
  { key: "math", name: "គណិតវិទ្យា", icon: Calculator, maxScore: 125, type: "social" },
  { key: "khmer", name: "អក្សរសាស្ត្រខ្មែរ", icon: BookOpen, maxScore: 75, type: "social" },
  { key: "history", name: "ប្រវត្តិវិទ្យា", icon: Scroll, maxScore: 50, type: "social" },
  { key: "geography", name: "ភូមិវិទ្យា", icon: Globe, maxScore: 50, type: "social" },
  { key: "ethics", name: "សីលធម៌ ពលរដ្ឋវិទ្យា", icon: BookOpen, maxScore: 50, type: "social" },
  { key: "earth", name: "ផែនដី", icon: FlaskConical, maxScore: 50, type: "social" },
  { key: "english", name: "អង់គ្លេស (បន្ថែម)", icon: Globe, maxScore: 50, type: "social" },
];


export const allSubjects = [...ScienceSubjects, ...SocialScienceSubjects] as const;

export type SubjectKey = typeof allSubjects[number]["key"];

export type Scores = Partial<Record<SubjectKey, string>>;


export const totalGrade : [number , string][] = [
  [427, "A"],
  [380, "B"],
  [332, "C"],
  [285, "D"],
  [237, "E"],
]

const gradeScale125: [number, string][] = [
  [112, "A"],
  [100, "B"],
  [87, "C"],
  [75, "D"],
  [62, "E"],
]

const gradeScale75: [number, string][] = [
  [67, "A"],
  [60, "B"],
  [52, "C"],
  [45, "D"],
  [37, "E"],
];

const gradeScale50: [number, string][] = [
  [45, "A"],
  [40, "B"],
  [35, "C"],
  [30, "D"],
  [25, "E"],
];


function calculateGrade(score: number , scale: [number, string][]){
  for(const [min, grade] of scale){
    if(score >= min) return grade;
  }
  return "F";
}



export function getSubjectScienceGrade(key: string, score: number) {
  if (score === 0) return "-";
  if(key === "math") return calculateGrade(score , gradeScale125);
  if (["biology", "physics", "khmer", "chemistry"].includes(key))
    return calculateGrade(score, gradeScale75);
  if (["history", "english"].includes(key))
    return calculateGrade(score, gradeScale50);
  
  return "-";
}


export function getSubjectSocialScienceGrade(key: string, score: number) {
  if (score === 0) return "-";
  if (key === "khmer") return calculateGrade(score, gradeScale125);
  if (["history", "geography", "ethics"].includes(key))
    return calculateGrade(score, gradeScale75);
  if (["earth", "english"].includes(key))
    return calculateGrade(score, gradeScale50);

  return "-";
}

export function calculateTotalGrade(totalPoints: number): string{
  for(const [point, grade] of totalGrade){
    if(totalPoints >= point) return grade;
  }
  return "F";
}

