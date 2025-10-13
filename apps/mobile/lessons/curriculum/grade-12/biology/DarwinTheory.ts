import { Topic } from "@core-types/docs/curriculum";

export const DarwinTheory: Topic[] = [
  {
    title: "ការសង្កេតរបស់ដាវិន",
    englishTitle: "darwins-observations",
    component: () =>
      import("@/lessons/components/grade-12/biology/darwinTheory/Observations"),
  },
  {
    title: "ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស",
    englishTitle: "organisms-galapagos-islands",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/darwinTheory/GalapagosOrganisms"
      ),
  },
  {
    title: "ការវិវត្ត",
    englishTitle: "evolution",
    component: () =>
      import("@/lessons/components/grade-12/biology/darwinTheory/Evolution"),
  },
  {
    title: "ជម្រើសដោយធម្មជាតិ",
    englishTitle: "natural-selection",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/darwinTheory/NaturalSelection"
      ),
  },
];
