import Observations from "@/components/pages/docs/grade-12/biology/darwinTheory/Observations";
import GalapagosOrganisms from "@/components/pages/docs/grade-12/biology/darwinTheory/GalapagosOrganisms";
import Evolution from "@/components/pages/docs/grade-12/biology/darwinTheory/Evolution";
import NaturalSelection from "@/components/pages/docs/grade-12/biology/darwinTheory/NaturalSelection";
import { Topic } from "@/types/docs/curriculum";

export const DarwinTheory: Topic[] = [
  {
    title: "ការសង្កេតរបស់ដាវិន",
    englishTitle: "darwins-observations",
    component: Observations,
  },
  {
    title: "ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស",
    englishTitle: "organisms-galapagos-islands",
    component: GalapagosOrganisms,
  },
  {
    title: "ការវិវត្ត",
    englishTitle: "evolution",
    component: Evolution,
  },
  {
    title: "ជម្រើសដោយធម្មជាតិ",
    englishTitle: "natural-selection",
    component: NaturalSelection,
  },
];
