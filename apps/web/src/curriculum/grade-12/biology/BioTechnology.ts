import PlantBreeding from "@/components/pages/docs/grade-12/biology/biotechnology/PlantBreeding";
import AnimalBreeding from "@/components/pages/docs/grade-12/biology/biotechnology/AnimalBreeding";
import PlantOffspring from "@/components/pages/docs/grade-12/biology/biotechnology/PlantOffspring";
import AnimalOffspring from "@/components/pages/docs/grade-12/biology/biotechnology/AnimalOffspring";
import Polyploidy from "@/components/pages/docs/grade-12/biology/biotechnology/Polyploidy";
import GeneTransferStages from "@/components/pages/docs/grade-12/biology/biotechnology/GeneTransferStages";
import GeneTransferExamples from "@/components/pages/docs/grade-12/biology/biotechnology/GeneTransferExamples";
import GeneticEngineering from "@/components/pages/docs/grade-12/biology/biotechnology/GeneticEngineering";
import Dangers from "@/components/pages/docs/grade-12/biology/biotechnology/Dangers";
import { Topic } from "@/types/docs/curriculum";

export const BioTechnology: Topic[] = [
  {
    title: "ការបង្កាត់ជ្រើសចំពោះរុក្ខជាតិ",
    englishTitle: "selective-breeding-plants",
    component: PlantBreeding,
  },
  {
    title: "ការបង្កាត់ជ្រើសចំពោះសត្វ",
    englishTitle: "selective-breeding-animals",
    component: AnimalBreeding,
  },
  {
    title: "កូនរុក្ខជាតិ",
    englishTitle: "plant-offspring",
    component: PlantOffspring,
  },
  {
    title: "កូនសត្វ",
    englishTitle: "animal-offspring",
    component: AnimalOffspring,
  },
  {
    title: "ប៉ូលីប្តូស៊ីឌី",
    englishTitle: "polyploidy",
    component: Polyploidy,
  },
  {
    title: "ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
    englishTitle: "stages-of-gene-transfer",
    component: GeneTransferStages,
  },
  {
    title: "ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន",
    englishTitle: "examples-in-gene-transfer",
    component: GeneTransferExamples,
  },
  {
    title: "វិស្វកម្មសេនេទិចក្នុងវិស័យ",
    englishTitle: "genetic-engineering-in-field",
    component: GeneticEngineering,
  },
  {
    title: "គ្រោះថ្នាក់",
    englishTitle: "dangers",
    component: Dangers,
  },
];
