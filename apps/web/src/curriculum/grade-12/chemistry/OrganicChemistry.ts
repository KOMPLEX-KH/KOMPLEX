import Aliphatic_acid_derivatives from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Aliphatic_acid_derivatives";
import Ester_fat_oil from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Ester_fat_oil";
import Inorganic_compounds from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Inorganic_compounds";
import OrganicPractice from "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Organic-Practice";
import { Topic } from "@/types/docs/curriculum";

export const OrganicChemistry: Topic[] = [
  {
    title: "អេស្ទែ ខ្លាញ់និងប្រេង",
    englishTitle: "Ester_fats_and_oils",
    component: Ester_fat_oil,
  },
  {
    title: "ស្រលាយអាលីផាទិចអាសូត",
    englishTitle: "aliphatic_acid_derivatives",
    component: Aliphatic_acid_derivatives,
  },
  {
    title: "សមាសធាតុប្រហេីរ",
    englishTitle: "inorganic_compounds",
    component: Inorganic_compounds,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "OrganicPractice",
    component: OrganicPractice,
  },
];
