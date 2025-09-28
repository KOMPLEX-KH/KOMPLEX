import CountingPrinciple from "@/components/pages/docs/grade-12/math/probability/Counting-Principle";
import ProbabilityCombination from "@/components/pages/docs/grade-12/math/probability/Probab-Combination";
import ProbabCompound from "@/components/pages/docs/grade-12/math/probability/Probab-Compound";
import ProbabilityPermutation from "@/components/pages/docs/grade-12/math/probability/Probab-Permutation";
import ProbabilityPractice from "@/components/pages/docs/grade-12/math/probability/Probab-Practice";
import ProbabilityDefinition from "@/components/pages/docs/grade-12/math/probability/Probability-Definition";
import { Topic } from "@/types/docs/curriculum";

export const Probability: Topic[] = [
  {
    title: "គោលការណ៍របាប់",
    englishTitle: "CountingPrinciple",
    component: CountingPrinciple,
  },
  {
    title: "និយមន័យប្រូបាប",
    englishTitle: "Probability-Definition",
    component: ProbabilityDefinition,
  },
  {
    title: "ប្រូបាបចម្លាស់",
    englishTitle: "Probability-Permutation",
    component: ProbabilityPermutation,
  },
  {
    title: "ប្រូបាបបន្សំ",
    englishTitle: "Probability-Combination",
    component: ProbabilityCombination,
  },
  {
    title: "ប្រូបាបនៃព្រឹត្តការណ៍សមាស",
    englishTitle: "ProbabCompound",
    component: ProbabCompound,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Probability-Practice",
    component: ProbabilityPractice,
  },
];
