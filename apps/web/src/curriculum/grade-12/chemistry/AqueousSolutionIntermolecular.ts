import Aqueous_solution from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous_solution";
import Intermolecular_forces from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Intermolecular_forces";
import ChemisTables from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Table";
import AqueousPractice from "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous-Practice";
import { Topic } from "@/types/docs/curriculum";

export const AqueousSolutionIntermolecular: Topic[] = [
  {
    title: "សមាសធាតុសូលូស្យុងក្នុងទឹក",
    englishTitle: "AqueousSolutions",
    component: Aqueous_solution,
  },
  {
    title: "កម្លាំងអន្តរម៉ូលេគុល",
    englishTitle: "intermolecular-forces",
    component: Intermolecular_forces,
  },
  {
    title: "តារាងសមាសធាតុ",
    englishTitle: "ChemisTables",
    component: ChemisTables,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "AqueousPractice",
    component: AqueousPractice,
  },
];
