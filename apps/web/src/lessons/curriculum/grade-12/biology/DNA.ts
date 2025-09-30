import { Topic } from "@/types/docs/curriculum";

export const DNA: Topic[] = [
  {
    title: "សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច",
    englishTitle: "chemical-composition-of-genetic-information",
    component: () =>
      import("@/lessons/components/grade-12/biology/adn/ChemicalComposition"),
  },
  {
    title: "ទម្រង់ម៉ូលេគុល ADN",
    englishTitle: "molecular-form-of-dna",
    component: () =>
      import("@/lessons/components/grade-12/biology/adn/MolecularForm"),
  },
  {
    title: "ស្វ័យដំឡើងទ្វេ ADN",
    englishTitle: "quantity-of-dna-in-cell",
    component: () =>
      import("@/lessons/components/grade-12/biology/adn/DnaQuantity"),
  },
  {
    title: "រូបមន្តសង្ខេប",
    englishTitle: "summary-of-dna-replication",
    component: () =>
      import("@/lessons/components/grade-12/biology/adn/ADNFormulars"),
  },
  {
    title: "សំណួរ & លំហាត់",
    englishTitle: "dna-self-replication",
    component: () =>
      import("@/lessons/components/grade-12/biology/adn/QuestionAnswer"),
  },
];
