import ComparativeStudy from "@/components/pages/docs/grade-12/biology/evolutionEvidence/ComparativeStudy";
import DescriptionDarwin from "@/components/pages/docs/grade-12/biology/evolutionEvidence/Description";
import OriginOfSpecies from "@/components/pages/docs/grade-12/biology/evolutionEvidence/OriginOfSpecies";
import { Topic } from "@/types/docs/curriculum";

export const EvolutionEvidence: Topic[] = [
  {
    title: "បំណកស្រាយភស្ដុតាងនៃការវិវត្ត",
    englishTitle: "evolution-evidence-description",
    component: DescriptionDarwin,
  },
  {
    title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
    englishTitle: "comparative-study-between-species",
    component: ComparativeStudy,
  },
  {
    title: "ដើមកំណើតប្រភេទ",
    englishTitle: "birth-of-species",
    component: OriginOfSpecies,
  },
];
