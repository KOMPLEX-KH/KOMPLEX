import { Topic } from "@/types/docs/curriculum";

export const ChemicalEquilibrium: Topic[] = [
  {
    title: "ធម្មជាតិនៃលំនឹងគីមី",
    englishTitle: "nature-of-chemical-equilibrium",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/chemical_equilibrium/Nature_equilibrium"
      ),
  },
  {
    title: "ការរំកិលលំនឹង",
    englishTitle: "shift-in-equilibrium",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/chemical_equilibrium/Equilibrium_shift"
      ),
  },
  {
    title: "លំនឹងនៃអាសុីត បាស និងអំបិល",
    englishTitle: "Equilibrium_Acid_Base_Salt",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/chemical_equilibrium/Equilibrium_Acid_Base_Salt"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "EquilibriumPractice",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/chemical_equilibrium/Equilibrium-Practice"
      ),
  },
];
