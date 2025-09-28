import LimitAsymptotes from "@/components/pages/docs/grade-12/math/limit/Limit-Asymptotes";
import LimitContinuity from "@/components/pages/docs/grade-12/math/limit/Limit-Continuity";
import LimitExponential from "@/components/pages/docs/grade-12/math/limit/Limit-Exponential";
import LimitInfinityMinusInfinity from "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Minus-Infinity";
import LimitInfinityOverInfinity from "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Over-Infinity";
import LimitLogarithmic from "@/components/pages/docs/grade-12/math/limit/Limit-Logarithmic";
import LimitPorformation from "@/components/pages/docs/grade-12/math/limit/Limit-Portformation";
import LimitPractice from "@/components/pages/docs/grade-12/math/limit/Limit-Practice";
import LimitTrigonometric from "@/components/pages/docs/grade-12/math/limit/Limit-Trigonometric";
import LimitZeroOverZero from "@/components/pages/docs/grade-12/math/limit/Limit-Zero-Over-Zero";
import LimitDefinition from "@/components/pages/docs/grade-12/math/limit/LimitDefinition";
import LHopitalRule from "@/components/pages/docs/grade-12/math/limit/L’Hôpital-Rule";
import { Topic } from "@/types/docs/curriculum";

export const Limit: Topic[] = [
  {
    title: "និយមន័យលីមីត",
    englishTitle: "definition",
    component: LimitDefinition,
  },
  {
    title: "ប្រមាណវិធីលេីលីមីត",
    englishTitle: "methods",
    component: LimitPorformation,
  },
  {
    title: "លីមីតរាង​ ០/០",
    englishTitle: "zero-over-zero",
    component: LimitZeroOverZero,
  },
  {
    title: "លីមីតរាង ∞/∞",
    englishTitle: "infinity-over-infinity",
    component: LimitInfinityOverInfinity,
  },
  {
    title: "លីមីតរាង +∞ - ∞",
    englishTitle: "infinity-minus-infinity",
    component: LimitInfinityMinusInfinity,
  },
  {
    title: "លីមីតអនុគមន៍ត្រីកោណមាត្រ",
    englishTitle: "trigonometric",
    component: LimitTrigonometric,
  },
  {
    title: "លីមីតអនុគមន៍អុិចស្បូណង់ស្យែល",
    englishTitle: "exponential",
    component: LimitExponential,
  },
  {
    title: "លីមីតឡូការីតនេពែ",
    englishTitle: "logarithmic",
    component: LimitLogarithmic,
  },
  {
    title: "ភាពជាប់នៃលីមីត",
    englishTitle: "continuity",
    component: LimitContinuity,
  },
  {
    title: "អាសុីមកូត",
    englishTitle: "asymptotes",
    component: LimitAsymptotes,
  },
  {
    title: "ទ្រឹស្តីបទឡូពីតាល់",
    englishTitle: "LHopitalRule",
    component: LHopitalRule,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "practice",
    component: LimitPractice,
  },
];
