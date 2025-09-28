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
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/LimitDefinition"),
  },
  {
    title: "ប្រមាណវិធីលេីលីមីត",
    englishTitle: "methods",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Portformation"),
  },
  {
    title: "លីមីតរាង​ ០/០",
    englishTitle: "zero-over-zero",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/limit/Limit-Zero-Over-Zero"
      ),
  },
  {
    title: "លីមីតរាង ∞/∞",
    englishTitle: "infinity-over-infinity",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Over-Infinity"
      ),
  },
  {
    title: "លីមីតរាង +∞ - ∞",
    englishTitle: "infinity-minus-infinity",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/limit/Limit-Infinity-Minus-Infinity"
      ),
  },
  {
    title: "លីមីតអនុគមន៍ត្រីកោណមាត្រ",
    englishTitle: "trigonometric",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Trigonometric"),
  },
  {
    title: "លីមីតអនុគមន៍អុិចស្បូណង់ស្យែល",
    englishTitle: "exponential",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Exponential"),
  },
  {
    title: "លីមីតឡូការីតនេពែ",
    englishTitle: "logarithmic",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Logarithmic"),
  },
  {
    title: "ភាពជាប់នៃលីមីត",
    englishTitle: "continuity",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Continuity"),
  },
  {
    title: "អាសុីមកូត",
    englishTitle: "asymptotes",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Asymptotes"),
  },
  {
    title: "ទ្រឹស្តីបទឡូពីតាល់",
    englishTitle: "LHopitalRule",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/L’Hôpital-Rule"),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "practice",
    component: () =>
      import("@/components/pages/docs/grade-12/math/limit/Limit-Practice"),
  },
];
