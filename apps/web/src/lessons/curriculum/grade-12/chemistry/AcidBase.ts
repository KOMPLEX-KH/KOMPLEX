import { Topic } from "@/types/docs/curriculum";

export const AcidBase: Topic[] = [
  {
    title: "ទ្រឹស្តីអាសុីតបាស",
    englishTitle: "acid-base-theory",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Acid_base_theory"
      ),
  },
  {
    title: "ប្រតិកម្មអាសុីតបាស",
    englishTitle: "acid-base-reactions",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Acid_base_reaction"
      ),
  },
  {
    title: "សូលុយស្យុងក្នុងទឹកនិង ph",
    englishTitle: "aqueous-solutions-and-ph",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Aqueous_solution_ph"
      ),
  },
  {
    title: "អត្រាកម្មអាសុីត-បាស",
    englishTitle: "Acid_base_titration",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Acid_base_titration"
      ),
  },
  {
    title: "តារាងសមាសធាតុ",
    englishTitle: "Acid-Base-Table",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Acid_Base_Table"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "Acid_base_practice",
    component: () =>
      import(
        "@/lessons/components/grade-12/chemistry/acid_base/Acid_base_practice"
      ),
  },
];
