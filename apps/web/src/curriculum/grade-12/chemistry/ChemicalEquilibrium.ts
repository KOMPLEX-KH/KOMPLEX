import EquilibriumPractice from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium-Practice";
import Equilibrium_Acid_Base_Salt from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium_Acid_Base_Salt";
import Equilibrium_shift from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium_shift";
import Nature_equilibrium from "@/components/pages/docs/grade-12/chemistry/chemical_equilibrium/Nature_equilibrium";
import { Topic } from "@/types/docs/curriculum";

export const ChemicalEquilibrium: Topic[] = [
  {
    title: "ធម្មជាតិនៃលំនឹងគីមី",
    englishTitle: "nature-of-chemical-equilibrium",
    component: Nature_equilibrium,
  },
  {
    title: "ការរំកិលលំនឹង",
    englishTitle: "shift-in-equilibrium",
    component: Equilibrium_shift,
  },
  {
    title: "លំនឹងនៃអាសុីត បាស និងអំបិល",
    englishTitle: "Equilibrium_Acid_Base_Salt",
    component: Equilibrium_Acid_Base_Salt,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "EquilibriumPractice",
    component: EquilibriumPractice,
  },
];
