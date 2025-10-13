import { Topic } from "@core-types/docs/curriculum";

export const BioTechnology: Topic[] = [
  {
    title: "ការបង្កាត់ជ្រើសចំពោះរុក្ខជាតិ",
    englishTitle: "selective-breeding-plants",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/PlantBreeding"
      ),
  },
  {
    title: "ការបង្កាត់ជ្រើសចំពោះសត្វ",
    englishTitle: "selective-breeding-animals",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/AnimalBreeding"
      ),
  },
  {
    title: "កូនរុក្ខជាតិ",
    englishTitle: "plant-offspring",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/PlantOffspring"
      ),
  },
  {
    title: "កូនសត្វ",
    englishTitle: "animal-offspring",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/AnimalOffspring"
      ),
  },
  {
    title: "ប៉ូលីប្តូស៊ីឌី",
    englishTitle: "polyploidy",
    component: () =>
      import("@/lessons/components/grade-12/biology/biotechnology/Polyploidy"),
  },
  {
    title: "ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
    englishTitle: "stages-of-gene-transfer",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/GeneTransferStages"
      ),
  },
  {
    title: "ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន",
    englishTitle: "examples-in-gene-transfer",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/GeneTransferExamples"
      ),
  },
  {
    title: "វិស្វកម្មសេនេទិចក្នុងវិស័យ",
    englishTitle: "genetic-engineering-in-field",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/biotechnology/GeneticEngineering"
      ),
  },
  {
    title: "គ្រោះថ្នាក់",
    englishTitle: "dangers",
    component: () =>
      import("@/lessons/components/grade-12/biology/biotechnology/Dangers"),
  },
];
