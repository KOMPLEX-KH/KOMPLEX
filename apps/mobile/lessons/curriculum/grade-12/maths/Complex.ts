import { Topic } from "@core-types/docs/curriculum";

export const Complex: Topic[] = [
  {
    title: "និយមន័យកុំផ្លិច",
    englishTitle: "Complex-Definition",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Complex-Definition"),
  },
  {
    title: "ប្រមាណវិធីបូក ដកចំនួនកុំផ្លិច",
    englishTitle: "Complex-Operations",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Complex-Operations"),
  },
  {
    title: "ប្រមាណវិធីគុណ និងចែកចំនួនកុំផ្លិច",
    englishTitle: "Complex-Multiplication-Division",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/complex/Complex-Multiplication-Devision"
      ),
  },
  {
    title: "ម៉ូឌុលនៃកុំផ្លិច", 
    englishTitle: "Complex-Modulus",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Complex-Modulus"),
  },
  {
    title: "សមីការដឺក្រេទី ២",
    englishTitle: "Quadratic-Equation",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Quadratic-Equation"),
  },
  {
    title: "ទម្រង់ត្រីកោណមាត្រ",
    englishTitle: "Trigonometric-Form",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Trigonometric-Form"),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Complex-Practice",
    component: () =>
      import("@/lessons/components/grade-12/math/complex/Complex-Practice"),
  },
];
