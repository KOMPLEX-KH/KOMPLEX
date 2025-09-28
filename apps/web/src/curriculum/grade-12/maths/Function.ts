import EquationFunction from "@/components/pages/docs/grade-12/math/function/Equation-Function";
import ExponentialFunction from "@/components/pages/docs/grade-12/math/function/Exponential-Function";
import FunctionAnalysisPlan from "@/components/pages/docs/grade-12/math/function/Function-Analysis-Plan";
import FunctionDefinition from "@/components/pages/docs/grade-12/math/function/Function-Definition";
import FunctionPractice from "@/components/pages/docs/grade-12/math/function/Function-Practice";
import LogarithmicFunction from "@/components/pages/docs/grade-12/math/function/Logarithmic-Function";
import PolynomialFunction from "@/components/pages/docs/grade-12/math/function/Polynomial-Function";
import { Topic } from "@/types/docs/curriculum";

export const Function: Topic[] = [
  {
    title: "និយមន័យអនុគមន៍",
    englishTitle: "Function-Definition",
    component: FunctionDefinition,
  },
  {
    title: "អនុគមន៍សនិទាន",
    englishTitle: "Polynomial-Function",
    component: PolynomialFunction,
  },
  {
    title: "អនុគមន៍អិចស្បូណង់ស្យែល ",
    englishTitle: "Exponential-Function",
    component: ExponentialFunction,
  },
  {
    title: "អនុគមន៍ឡូការីត",
    englishTitle: "Logarithmic-Function",
    component: LogarithmicFunction,
  },
  {
    title: "សមីការ",
    englishTitle: "Equation-Function",
    component: EquationFunction,
  },
  {
    title: "ប្លង់សិក្សាអនុគមន៍",
    englishTitle: "Function-Analysis-Plan",
    component: FunctionAnalysisPlan,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Function-Practice",
    component: FunctionPractice,
  },
];
