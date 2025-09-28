import { Topic } from "@/types/docs/curriculum";

export const Function: Topic[] = [
  {
    title: "និយមន័យអនុគមន៍",
    englishTitle: "Function-Definition",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Function-Definition"
      ),
  },
  {
    title: "អនុគមន៍សនិទាន",
    englishTitle: "Polynomial-Function",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Polynomial-Function"
      ),
  },
  {
    title: "អនុគមន៍អិចស្បូណង់ស្យែល ",
    englishTitle: "Exponential-Function",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Exponential-Function"
      ),
  },
  {
    title: "អនុគមន៍ឡូការីត",
    englishTitle: "Logarithmic-Function",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Logarithmic-Function"
      ),
  },
  {
    title: "សមីការ",
    englishTitle: "Equation-Function",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Equation-Function"
      ),
  },
  {
    title: "ប្លង់សិក្សាអនុគមន៍",
    englishTitle: "Function-Analysis-Plan",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Function-Analysis-Plan"
      ),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Function-Practice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/function/Function-Practice"
      ),
  },
];
