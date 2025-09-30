import { Topic } from "@/types/docs/curriculum";

export const Derivative: Topic[] = [
  {
    title: "និយមន័យដេរីវេ",
    englishTitle: "derivative-definition",
    component: () =>
      import("@/lessons/components/grade-12/math/derivative/Definition"),
  },
  {
    title: "រូបមន្តដេរីវេ",
    englishTitle: "derivative-rules",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-Performation"
      ),
  },
  {
    title: "ដេរីវេពីជគណិត",
    englishTitle: "derivative-geometric",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/derivative-Geometry"
      ),
  },
  {
    title: "ដេរីវេអនុគមន៍ត្រីកោណមាត្រ",
    englishTitle: "derivative-trigonometric",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-Trigonometric"
      ),
  },
  {
    title: "ដេរីវេអនុគមន៍អុិចស្បូណង់ស្យែល",
    englishTitle: "derivative-exponential",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-Exponential"
      ),
  },
  {
    title: "ដេរីវេឡូការីតនេពែ",
    englishTitle: "derivative-logarithmic",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-Logarithmic"
      ),
  },
  {
    title: "ដេរីវេឡូលំដាប់ខ្ពស់",
    englishTitle: "derivative-high-level",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-high-level"
      ),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "derivative-practice",
    component: () =>
      import(
        "@/lessons/components/grade-12/math/derivative/Derivative-Practice"
      ),
  },
];
