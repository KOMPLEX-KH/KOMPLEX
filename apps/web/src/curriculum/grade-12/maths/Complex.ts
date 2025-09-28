import ComplexDefinition from "@/components/pages/docs/grade-12/math/complex/Complex-Definition";
import ComplexModulus from "@/components/pages/docs/grade-12/math/complex/Complex-Modulus";
import ComplexMultiplicationDivision from "@/components/pages/docs/grade-12/math/complex/Complex-Multiplication-Devision";
import ComplexOperations from "@/components/pages/docs/grade-12/math/complex/Complex-Operations";
import ComplexPractice from "@/components/pages/docs/grade-12/math/complex/Complex-Practice";
import QuadraticEquation from "@/components/pages/docs/grade-12/math/complex/Quadratic-Equation";
import TrigonometricForm from "@/components/pages/docs/grade-12/math/complex/Trigonometric-Form";
import { Topic } from "@/types/docs/curriculum";

export const Complex: Topic[] = [
  {
    title: "និយមន័យកុំផ្លិច",
    englishTitle: "Complex-Definition",
    component: ComplexDefinition,
  },

  {
    title: "ប្រមាណវិធីបូក ដកចំនួនកុំផ្លិច",
    englishTitle: "Complex-Operations",
    component: ComplexOperations,
  },
  {
    title: "ប្រមាណវិធីគុណ និងចែកចំនួនកុំផ្លិច",
    englishTitle: "Complex-Multiplication-Division",
    component: ComplexMultiplicationDivision,
  },
  {
    title: "ម៉ូឌុលនៃកុំផ្លិច",
    englishTitle: "Complex-Modulus",
    component: ComplexModulus,
  },
  {
    title: "សមីការដឺក្រេទី ២",
    englishTitle: "Quadratic-Equation",
    component: QuadraticEquation,
  },
  {
    title: "ទម្រង់ត្រីកោណមាត្រ",
    englishTitle: "Trigonometric-Form",
    component: TrigonometricForm,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Complex-Practice",
    component: ComplexPractice,
  },
];
