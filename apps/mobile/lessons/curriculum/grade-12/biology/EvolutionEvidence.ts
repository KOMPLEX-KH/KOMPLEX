import { Topic } from "@core-types/docs/curriculum";

export const EvolutionEvidence: Topic[] = [
  {
    title: "បំណកស្រាយភស្ដុតាងនៃការវិវត្ត",
    englishTitle: "evolution-evidence-description",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/evolutionEvidence/Description"
      ),
  },
  {
    title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
    englishTitle: "comparative-study-between-species",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/evolutionEvidence/ComparativeStudy"
      ),
  },
  {
    title: "ដើមកំណើតប្រភេទ",
    englishTitle: "birth-of-species",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/evolutionEvidence/OriginOfSpecies"
      ),
  },
];
