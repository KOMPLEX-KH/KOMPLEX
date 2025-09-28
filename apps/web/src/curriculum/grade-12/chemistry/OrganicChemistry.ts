import { Topic } from "@/types/docs/curriculum";

export const OrganicChemistry: Topic[] = [
  {
    title: "អេស្ទែ ខ្លាញ់និងប្រេង",
    englishTitle: "Ester_fats_and_oils",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Ester_fat_oil"
      ),
  },
  {
    title: "ស្រលាយអាលីផាទិចអាសូត",
    englishTitle: "aliphatic_acid_derivatives",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Aliphatic_acid_derivatives"
      ),
  },
  {
    title: "សមាសធាតុប្រហេីរ",
    englishTitle: "inorganic_compounds",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Inorganic_compounds"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "OrganicPractice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/organic_chemistry/Organic-Practice"
      ),
  },
];
