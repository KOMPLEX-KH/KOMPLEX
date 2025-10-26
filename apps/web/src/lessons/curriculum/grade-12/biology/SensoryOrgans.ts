import { Topic } from "@/types/docs/curriculum";

export const SensoryOrgans: Topic[] = [
  {
    title: "ចក្ខុវិញ្ញាណ",
    englishTitle: "visual-sense-sight",
    component: () => import("@/lessons/components/grade-12/biology/sensory-organ/VisualSensory"),
  },
  {
    title: "សោតវិញ្ញាណ",
    englishTitle: "auditory-sense-hearing",
    component: () => import("@/lessons/components/grade-12/biology/sensory-organ/AuditorySensory"),
  },
  {
    title: "ឃានវិញ្ញាណ",
    englishTitle: "olfactory-sense-smell",
    component: () => import("@/lessons/components/grade-12/biology/sensory-organ/​OlfactorySensory"),
  },
  {
    title: "ជិវ្ហាវិញ្ញាណ",
    englishTitle: "gustatory-sense-taste",
    component: () => import("@/lessons/components/grade-12/biology/sensory-organ/GustatorySensory"),
  },
  {
    title: "កាយវិញ្ញាណ",
    englishTitle: "tactile-sense-touch",
    component: () => import("@/lessons/components/grade-12/biology/sensory-organ/TactileSensory"),
  },
];
