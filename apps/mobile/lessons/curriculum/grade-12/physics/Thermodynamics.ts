import { Topic } from "@core-types/docs/curriculum";

export const Thermodynamics: Topic[] = [
  {
    title: "ទ្រឹស្តីសុីនេទិច",
    englishTitle: "KineticTheory",
    component: () =>
      import(
        "@/lessons/components/grade-12/physic/thermodynamic/Kinetic-Theory"
      ),
  },
  {
    title: "ច្បាប់ទីមួយទែម៉ូឌីណាមិច",
    englishTitle: "FirstLawofThermodynamics",
    component: () =>
      import(
        "@/lessons/components/grade-12/physic/thermodynamic/First-Law-Thermodynamics"
      ),
  },
  {
    title: "ម៉ាសុីន",
    englishTitle: "Heat-Engines",
    component: () =>
      import("@/lessons/components/grade-12/physic/thermodynamic/Engines"),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "thermodynamics-practice",
    component: () =>
      import(
        "@/lessons/components/grade-12/physic/thermodynamic/Thermo-Practice"
      ),
  },
];
