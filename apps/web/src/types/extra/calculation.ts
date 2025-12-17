import { Calculator, Atom, Dna, FlaskConical, BookOpen, Globe, Scroll } from "lucide-react";

export const ScienceSubjects = [
  { name: "គណិតវិទ្យា", icon: Calculator, color: "#3B82F6", key: "math", maxScore: 125 },
  { name: "រូបវិទ្យា", icon: Atom, color: "#8B5CF6", key: "physics", maxScore: 75 },
  { name: "ជីវវិទ្យា", icon: Dna, color: "#10B981", key: "biology", maxScore: 75 },
  { name: "គីមីវិទ្យា", icon: FlaskConical, color: "#F59E0B", key: "chemistry", maxScore: 75 },
  { name: "អក្សរសាស្ត្រខ្មែរ", icon: BookOpen, color: "#EC4899", key: "khmer", maxScore: 75 },
  { name: "ប្រវត្តិវិទ្យា", icon: Scroll, color: "#EF4444", key: "history", maxScore: 50 },
  { name: "អង់គ្លេស", icon: Globe, color: "#6366F1", key: "english", maxScore: 50 },
];

export function getSubjectScienceGrade(key: string, score: number) {
  if (score === 0) return "-";

  if (key === "math") {
    if (score >= 112) return "A";
    if (score >= 100) return "B";
    if (score >= 87) return "C";
    if (score >= 75) return "D";
    if (score >= 62) return "E";
    return "F";
  }

  if (["biology", "physics", "khmer", "chemistry"].includes(key)) {
    if (score >= 67) return "A";
    if (score >= 60) return "B";
    if (score >= 52) return "C";
    if (score >= 45) return "D";
    if (score >= 37) return "E";
    return "F";
  }

  if (["history", "english"].includes(key)) {
    if (score >= 45) return "A";
    if (score >= 40) return "B";
    if (score >= 35) return "C";
    if (score >= 30) return "D";
    if (score >= 25) return "E";
    return "F";
  }
  return "-";
}

export const SocialScienceSubjects = [
  { name: "គណិតវិទ្យា", icon: Calculator, color: "#3B82F6", key: "math", maxScore: 125 },
  { name: "អក្សរសាស្ត្រខ្មែរ", icon: BookOpen, color: "#EC4899", key: "khmer", maxScore: 75 },
  { name: "ប្រវត្តិវិទ្យា", icon: Scroll, color: "#EF4444", key: "history", maxScore: 50 },
  { name: "ភូមិវិទ្យា", icon: Scroll, color: "#EF4444", key: "geography", maxScore: 50 },
  { name: "សីលធម៌ ពលរដ្ឋវិទ្យា", icon: Scroll, color: "#EF4444", key: "ethics", maxScore: 50 },
  { name: "ផែនដី", icon: Scroll, color: "#EF4444", key: "earth", maxScore: 50 },
  { name: "អង់គ្លេស (បន្ថែម)", icon: Globe, color: "#6366F1", key: "english", maxScore: 50 },
];

export function getSubjectSocialScienceGrade(key: string, score: number) {
  if (score === 0) return "-";

  if (key === "khmer") {
    if (score >= 112) return "A";
    if (score >= 100) return "B";
    if (score >= 87) return "C";
    if (score >= 75) return "D";
    if (score >= 62) return "E";
    return "F";
  }

  if (["history", "geography", "ethics"].includes(key)) {
    if (score >= 67) return "A";
    if (score >= 60) return "B";
    if (score >= 52) return "C";
    if (score >= 45) return "D";
    if (score >= 37) return "E";
    return "F";
  }

  if (["earth", "english"].includes(key)) {
    if (score >= 45) return "A";
    if (score >= 40) return "B";
    if (score >= 35) return "C";
    if (score >= 30) return "D";
    if (score >= 25) return "E";
    return "F";
  }
  return "-";
}
