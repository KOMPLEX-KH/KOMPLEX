import AlternatingCircuits from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Alternating-Circuits";
import ElectricityPractice from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electricity-Practice";
import ElectromagneticInduction from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electromagnetic-Induction";
import MagneticField from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Magnetic-Field";
import SelfInduction from "@/components/pages/docs/grade-12/physic/electricity&magnetism/Self-Induction";
import { Topic } from "@/types/docs/curriculum";

export const ElectricityMagnetism: Topic[] = [
  {
    title: "ដែននិងកម្លាំងម៉ាញេទិច",
    englishTitle: "magneticField",
    component: MagneticField,
  },
  {
    title: "អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
    englishTitle: "Electromagnetic-Induction",
    component: ElectromagneticInduction,
  },
  {
    title: "អូតូអាំងឌុចស្យុង",
    englishTitle: "AutoElectromagneticInduction",
    component: SelfInduction,
  },
  {
    title: "សៀគ្វីចរន្តឆ្លាស់",
    englishTitle: "AlternatingCurrentCircuits",
    component: AlternatingCircuits,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "electromagneticmagnetismpractice",
    component: ElectricityPractice,
  },
];
