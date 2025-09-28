import Acid_base_practice from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_practice";
import AcidbaseReaction from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_reaction";
import Acid_Base_Tables from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_Base_Table";
import Acid_base_theory from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_theory";
import Acid_base_titration from "@/components/pages/docs/grade-12/chemistry/acid_base/Acid_base_titration";
import Aqueous_solution_ph from "@/components/pages/docs/grade-12/chemistry/acid_base/Aqueous_solution_ph";
import { Topic } from "@/types/docs/curriculum";

export const AcidBase: Topic[] = [
  {
    title: "ទ្រឹស្តីអាសុីតបាស",
    englishTitle: "acid-base-theory",
    component: Acid_base_theory,
  },
  {
    title: "ប្រតិកម្មអាសុីតបាស",
    englishTitle: "acid-base-reactions",
    component: AcidbaseReaction,
  },
  {
    title: "សូលុយស្យុងក្នុងទឹកនិង ph",
    englishTitle: "aqueous-solutions-and-ph",
    component: Aqueous_solution_ph,
  },
  {
    title: "អត្រាកម្មអាសុីត-បាស",
    englishTitle: "Acid_base_titration",
    component: Acid_base_titration,
  },
  {
    title: "តារាងសមាសធាតុ",
    englishTitle: "Acid-Base-Table",
    component: Acid_Base_Tables,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "Acid_base_practice",
    component: Acid_base_practice,
  },
];
