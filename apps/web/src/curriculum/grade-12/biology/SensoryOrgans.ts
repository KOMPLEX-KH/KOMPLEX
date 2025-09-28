import { Topic } from "@/types/docs/curriculum";

export const SensoryOrgans: Topic[] = [
  {
    title: "ចក្ខុវិញ្ញាណ",
    englishTitle: "visual-sense-sight",
    component: () => import("@/components/pages/docs/common/ComingSoon"),
  },
  {
    title: "សោតវិញ្ញាណ",
    englishTitle: "auditory-sense-hearing",
    component: () => import("@/components/pages/docs/common/ComingSoon"),
  },
  {
    title: "ឃានវិញ្ញាណ",
    englishTitle: "olfactory-sense-smell",
    component: () => import("@/components/pages/docs/common/ComingSoon"),
  },
  {
    title: "ជិវ្ហាវិញ្ញាណ",
    englishTitle: "gustatory-sense-taste",
    component: () => import("@/components/pages/docs/common/ComingSoon"),
  },
  {
    title: "កាយវិញ្ញាណ",
    englishTitle: "tactile-sense-touch",
    component: () => import("@/components/pages/docs/common/ComingSoon"),
  },
];
