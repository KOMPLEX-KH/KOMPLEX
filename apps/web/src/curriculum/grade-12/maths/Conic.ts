import ConicDefinition from "@/components/pages/docs/grade-12/math/conic/Conic-Definition";
import ConicPractice from "@/components/pages/docs/grade-12/math/conic/Conic-Practice";
import Ellipse from "@/components/pages/docs/grade-12/math/conic/Ellipse";
import Hyperbola from "@/components/pages/docs/grade-12/math/conic/Hyperbola";
import Parabola from "@/components/pages/docs/grade-12/math/conic/Parabola";
import { Topic } from "@/types/docs/curriculum";

export const Conic: Topic[] = [
  {
    title: "និយមន័យកោនិក",
    englishTitle: "Conic-definition",
    component: ConicDefinition,
  },
  {
    title: "ប៉ារ៉ាបូល",
    englishTitle: "Parabola",
    component: Parabola,
  },
  {
    title: "អេលីប",
    englishTitle: "Ellipse",
    component: Ellipse,
  },
  {
    title: "អុីពែបូល",
    englishTitle: "Hyperbola",
    component: Hyperbola,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Conic-Practice",
    component: ConicPractice,
  },
];
