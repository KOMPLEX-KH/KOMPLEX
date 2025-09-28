import { Topic } from "@/types/docs/curriculum";

export const Vector: Topic[] = [
  {
    title: "និយមន័យវ៉ិចទ័រ",
    englishTitle: "Vector-definition",
    component: () =>
      import("@/components/pages/docs/grade-12/math/vector/Vector-Definition"),
  },
  {
    title: "កូអរដោនេនៃវ៉ិចទ័រក្នុងលំហ",
    englishTitle: "2D-Vector-coordinates",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/vector/2D-Vector-Coordinates"
      ),
  },
  {
    title: "ផ្ទៃក្រឡា",
    englishTitle: "Shape-area",
    component: () =>
      import("@/components/pages/docs/grade-12/math/vector/Shape-Area"),
  },
  {
    title: "មាឌ",
    englishTitle: "Volume",
    component: () =>
      import("@/components/pages/docs/grade-12/math/vector/Volume"),
  },
  {
    title: "សមីការ",
    englishTitle: "Vector-Equations",
    component: () =>
      import("@/components/pages/docs/grade-12/math/vector/Equations"),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Vector-practice",
    component: () =>
      import("@/components/pages/docs/grade-12/math/vector/Vector-Practice"),
  },
];
