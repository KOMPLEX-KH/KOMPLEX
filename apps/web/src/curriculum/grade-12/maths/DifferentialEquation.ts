import { Topic } from "@/types/docs/curriculum";

export const DifferentialEquation: Topic[] = [
  {
    title: "និយមន័យសមីការឌីផេរ៉ង់សែ្យល",
    englishTitle: "Differential-equation-definition",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/Differential-Definition"
      ),
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់១មានមេគុណថេរ",
    englishTitle: "Linear-differential-equation-homogeneous-order-1",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/LDE1"
      ),
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់២មានមេគុណថេរ",
    englishTitle: "Linear-differential-equation-homogeneous-order-2",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/LDE2"
      ),
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់ទូទៅមានមេគុណថេរ",
    englishTitle: "General-linear-differential-equation-homogeneous",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/LDE-General"
      ),
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលទម្រង់ផ្សេងៗ",
    englishTitle: "differential-equation",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/Various-Forms"
      ),
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Differential-practice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/math/differential-equation/Differential-Practice"
      ),
  },
];
