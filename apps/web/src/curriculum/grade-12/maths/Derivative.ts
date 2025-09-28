import DerivativePerformation from "@components/pages/docs/grade-12/math/derivative/Derivative-Performation";
import DerivativeDefinition from "@/components/pages/docs/grade-12/math/derivative/Definition";
import { Topic } from "@/types/docs/curriculum";
import DerivativeGeometric from "@/components/pages/docs/grade-12/math/derivative/derivative-Geometry";
import DerivativeTrigonometric from "@/components/pages/docs/grade-12/math/derivative/Derivative-Trigonometric";
import DerivativeExponential from "@/components/pages/docs/grade-12/math/derivative/Derivative-Exponential";
import DerivativeLogarithmic from "@/components/pages/docs/grade-12/math/derivative/Derivative-Logarithmic";
import DerivativeHighLevel from "@/components/pages/docs/grade-12/math/derivative/Derivative-high-level";
import DerivativePractice from "@/components/pages/docs/grade-12/math/derivative/Derivative-Practice";

export const Derivative: Topic[] = [
  {
    title: "និយមន័យដេរីវេ",
    englishTitle: "derivative-definition",
    component: DerivativeDefinition,
  },
  {
    title: "រូបមន្តដេរីវេ",
    englishTitle: "derivative-rules",
    component: DerivativePerformation,
  },
  {
    title: "ដេរីវេពីជគណិត",
    englishTitle: "derivative-geometric",
    component: DerivativeGeometric,
  },
  {
    title: "ដេរីវេអនុគមន៍ត្រីកោណមាត្រ",
    englishTitle: "derivative-trigonometric",
    component: DerivativeTrigonometric,
  },
  {
    title: "ដេរីវេអនុគមន៍អុិចស្បូណង់ស្យែល",
    englishTitle: "derivative-exponential",
    component: DerivativeExponential,
  },
  {
    title: "ដេរីវេឡូការីតនេពែ",
    englishTitle: "derivative-logarithmic",
    component: DerivativeLogarithmic,
  },
  {
    title: "ដេរីវេឡូលំដាប់ខ្ពស់",
    englishTitle: "derivative-high-level",
    component: DerivativeHighLevel,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "derivative-practice",
    component: DerivativePractice,
  },
];
