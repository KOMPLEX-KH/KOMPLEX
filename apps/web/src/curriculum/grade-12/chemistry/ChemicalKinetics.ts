import { Topic } from "@/types/docs/curriculum";

export const ChemicalKinetics: Topic[] = [
  {
    title: "ល្បឿនប្រតិកម្មគីមី",
    englishTitle: "RateChemicalReaction",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/chemica-kinetics/Rate-chemical-reaction"
      ),
  },
  {
    title: "កត្តាជិះឥទ្ធិពលលេីល្បឿនប្រតិកម្ម",
    englishTitle: "FactorsAffectingtheRateofReaction",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/chemica-kinetics/Reaction_rate_factors"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "ChemicaPractice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/chemica-kinetics/Kinetics-Practice"
      ),
  },
];
