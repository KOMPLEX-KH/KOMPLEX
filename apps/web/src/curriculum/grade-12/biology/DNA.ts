import ChemicalComposition from "@/components/pages/docs/grade-12/biology/adn/ChemicalComposition";
import MolecularForm from "@/components/pages/docs/grade-12/biology/adn/MolecularForm";
import DnaQuantity from "@/components/pages/docs/grade-12/biology/adn/DnaQuantity";
import ADNFormulars from "@/components/pages/docs/grade-12/biology/adn/ADNFormulars";
import QuestionAnswer from "@/components/pages/docs/grade-12/biology/adn/QuestionAnswer";
import { Topic } from "@/types/docs/curriculum";

export const DNA: Topic[] = [
  {
    title: "សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច",
    englishTitle: "chemical-composition-of-genetic-information",
    component: ChemicalComposition,
  },
  {
    title: "ទម្រង់ម៉ូលេគុល ADN",
    englishTitle: "molecular-form-of-dna",
    component: MolecularForm,
  },
  {
    title: "ស្វ័យដំឡើងទ្វេ ADN",
    englishTitle: "quantity-of-dna-in-cell",
    component: DnaQuantity,
  },
  {
    title: "រូបមន្តសង្ខេប",
    englishTitle: "summary-of-dna-replication",
    component: ADNFormulars,
  },
  {
    title: "សំណួរ & លំហាត់",
    englishTitle: "dna-self-replication",
    component: QuestionAnswer,
  },
];
