import Integralformular from "@components/pages/docs/grade-12/math/integral/Integral-formular";
import IntergralDefinition from "@components/pages/docs/grade-12/math/integral/integral-Definition";
import { Topic } from "@/types/docs/curriculum";
import IndefiniteIntegral from "@/components/pages/docs/grade-12/math/integral/Indefinite-Integral";
import DefiniteIntegral from "@components/pages/docs/grade-12/math/integral/integral-Definition";
import IntegralPractice from "@/components/pages/docs/grade-12/math/integral/Integral-Practice";

export const Integral: Topic[] = [
  {
    title: "និយមន័យអាំងតេក្រាល",
    englishTitle: "Integral-definition",
    component: IntergralDefinition,
  },
  {
    title: "រូបមន្តអាំងតេក្រាល",
    englishTitle: "Integral-formular",
    component: Integralformular,
  },
  {
    title: "អាំងតេក្រាលមិនកំណត់",
    englishTitle: "indefinite",
    component: IndefiniteIntegral,
  },
  {
    title: "អាំងតេក្រាលកំណត់",
    englishTitle: "definite",
    component: DefiniteIntegral,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Integral-practice",
    component: IntegralPractice,
  },
];
