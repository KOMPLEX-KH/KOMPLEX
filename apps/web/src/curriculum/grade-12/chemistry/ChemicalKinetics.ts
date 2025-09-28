import Chemica_Practice from "@components/pages/docs/grade-12/chemistry/chemica-kinetics/Kinetics-Practice";
import RateChemicalReaction from "@/components/pages/docs/grade-12/chemistry/chemica-kinetics/Rate-chemical-reaction";
import Reaction_rate_factors from "@/components/pages/docs/grade-12/chemistry/chemica-kinetics/Reaction_rate_factors";
import { Topic } from "@/types/docs/curriculum";

export const ChemicalKinetics: Topic[] = [
  {
    title: "ល្បឿនប្រតិកម្មគីមី",
    englishTitle: "RateChemicalReaction",
    component: RateChemicalReaction,
  },
  {
    title: "កត្តាជិះឥទ្ធិពលលេីល្បឿនប្រតិកម្ម",
    englishTitle: "FactorsAffectingtheRateofReaction",
    component: Reaction_rate_factors,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "ChemicaPractice",
    component: Chemica_Practice,
  },
];
