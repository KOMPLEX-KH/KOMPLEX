import { Topic } from "@/types/docs/curriculum";

export const Probability: Topic[] = [
  {
    title: "គោលការណ៍របាប់",
    englishTitle: "CountingPrinciple",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Counting-Principle"
      ),
  },
  {
    title: "និយមន័យប្រូបាប",
    englishTitle: "Probability-Definition",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Probability-Definition"
      ),
  },
  {
    title: "ប្រូបាបចម្លាស់",
    englishTitle: "Probability-Permutation",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Probab-Permutation"
      ),
  },
  {
    title: "ប្រូបាបបន្សំ",
    englishTitle: "Probability-Combination",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Probab-Combination"
      ),
  },
  {
    title: "ប្រូបាបនៃព្រឹត្តការណ៍សមាស",
    englishTitle: "ProbabCompound",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Probab-Compound"
      ),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Probability-Practice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/probability/Probab-Practice"
      ),
  },
];
