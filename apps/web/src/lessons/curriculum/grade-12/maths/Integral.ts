import { Topic } from "@/types/docs/curriculum";

export const Integral: Topic[] = [
  {
    title: "និយមន័យអាំងតេក្រាល",
    englishTitle: "Integral-definition",
    component: () =>
      import("@/lessons/components/grade-12/math/integral/integral-Definition"),
  },
  {
    title: "រូបមន្តអាំងតេក្រាល",
    englishTitle: "Integral-formular",
    component: () =>
      import("@/lessons/components/grade-12/math/integral/Integral-formular"),
  },
  {
    title: "អាំងតេក្រាលមិនកំណត់",
    englishTitle: "indefinite",
    component: () =>
      import("@/lessons/components/grade-12/math/integral/Indefinite-Integral"),
  },
  {
    title: "អាំងតេក្រាលកំណត់",
    englishTitle: "definite",
    component: () =>
      import("@/lessons/components/grade-12/math/integral/Definite-Integral"),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Integral-practice",
    component: () =>
      import("@/lessons/components/grade-12/math/integral/Integral-Practice"),
  },
];
