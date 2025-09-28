import PrincipleWaves from "@/components/pages/docs/grade-12/physic/waves/Principle-Waves";
import WavesPractice from "@/components/pages/docs/grade-12/physic/waves/Waves-Practice";
import { Topic } from "@/types/docs/curriculum";

export const Waves: Topic[] = [
  {
    title: "គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ",
    englishTitle: "wave-principle",
    component: PrincipleWaves,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "wave-practice",
    component: WavesPractice,
  },
];
