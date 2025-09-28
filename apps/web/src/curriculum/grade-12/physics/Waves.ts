import { Topic } from "@/types/docs/curriculum";

export const Waves: Topic[] = [
  {
    title: "គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ",
    englishTitle: "wave-principle",
    component: () => import("@/components/pages/docs/grade-12/physic/waves/Principle-Waves"),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "wave-practice",
    component: () => import("@/components/pages/docs/grade-12/physic/waves/Waves-Practice"),
  },
];
