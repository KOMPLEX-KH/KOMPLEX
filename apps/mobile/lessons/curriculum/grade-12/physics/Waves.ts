import { Topic } from "@core-types/docs/curriculum";

export const Waves: Topic[] = [
  {
    title: "គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ",
    englishTitle: "wave-principle",
    component: () =>
      import("@/lessons/components/grade-12/physic/waves/Principle-Waves"),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "wave-practice",
    component: () =>
      import("@/lessons/components/grade-12/physic/waves/Waves-Practice"),
  },
];
