import TwoDVectorCoordinates from "@/components/pages/docs/grade-12/math/vector/2D-Vector-Coordinates";
import Equations from "@/components/pages/docs/grade-12/math/vector/Equations";
import ShapeArea from "@/components/pages/docs/grade-12/math/vector/Shape-Area";
import VectorDefinition from "@/components/pages/docs/grade-12/math/vector/Vector-Definition";
import VectorPractice from "@/components/pages/docs/grade-12/math/vector/Vector-Practice";
import { Topic } from "@/types/docs/curriculum";
import { Volume } from "lucide-react";

export const Vector: Topic[] = [
  {
    title: "និយមន័យវ៉ិចទ័រ",
    englishTitle: "Vector-definition",
    component: VectorDefinition,
  },
  {
    title: "កូអរដោនេនៃវ៉ិចទ័រក្នុងលំហ",
    englishTitle: "2D-Vector-coordinates",
    component: TwoDVectorCoordinates,
  },
  {
    title: "ផ្ទៃក្រឡា",
    englishTitle: "Shape-area",
    component: ShapeArea,
  },
  {
    title: "មាឌ",
    englishTitle: "Volume",
    component: Volume,
  },
  {
    title: "សមីការ",
    englishTitle: "Vector-Equations",
    component: Equations,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Vector-practice",
    component: VectorPractice,
  },
];
