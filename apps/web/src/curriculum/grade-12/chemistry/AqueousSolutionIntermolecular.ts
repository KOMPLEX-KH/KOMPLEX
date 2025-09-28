import { Topic } from "@/types/docs/curriculum";

export const AqueousSolutionIntermolecular: Topic[] = [
  {
    title: "សមាសធាតុសូលូស្យុងក្នុងទឹក",
    englishTitle: "AqueousSolutions",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous_solution"
      ),
  },
  {
    title: "កម្លាំងអន្តរម៉ូលេគុល",
    englishTitle: "intermolecular-forces",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Intermolecular_forces"
      ),
  },
  {
    title: "តារាងសមាសធាតុ",
    englishTitle: "ChemisTables",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Table"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "AqueousPractice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous-Practice"
      ),
  },
];
