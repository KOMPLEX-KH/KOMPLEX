import { Topic } from "@/types/docs/curriculum";

export const Conic: Topic[] = [
  {
    title: "និយមន័យកោនិក",
    englishTitle: "Conic-definition",
    component: () =>
      import("@/components/pages/docs/grade-12/math/conic/Conic-Definition"),
  },
  {
    title: "ប៉ារ៉ាបូល",
    englishTitle: "Parabola",
    component: () =>
      import("@/components/pages/docs/grade-12/math/conic/Parabola"),
  },
  {
    title: "អេលីប",
    englishTitle: "Ellipse",
    component: () =>
      import("@/components/pages/docs/grade-12/math/conic/Ellipse"),
  },
  {
    title: "អុីពែបូល",
    englishTitle: "Hyperbola",
    component: () =>
      import("@/components/pages/docs/grade-12/math/conic/Hyperbola"),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Conic-Practice",
    component: () =>
      import("@/components/pages/docs/grade-12/math/conic/Conic-Practice"),
  },
];
