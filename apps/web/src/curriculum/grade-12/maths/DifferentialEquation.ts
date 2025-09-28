import differentialdefinition from "@/components/pages/docs/grade-12/math/differential-equation/Differential-Definition";
import DifferentialPractice from "@/components/pages/docs/grade-12/math/differential-equation/Differential-Practice";
import LDEGeneral from "@/components/pages/docs/grade-12/math/differential-equation/LDE-General";
import LDE1 from "@/components/pages/docs/grade-12/math/differential-equation/LDE1";
import LDE2 from "@/components/pages/docs/grade-12/math/differential-equation/LDE2";
import VariousForms from "@/components/pages/docs/grade-12/math/differential-equation/Various-Forms";
import { Topic } from "@/types/docs/curriculum";

export const DifferentialEquation: Topic[] = [
  {
    title: "និយមន័យសមីការឌីផេរ៉ង់សែ្យល",
    englishTitle: "Differential-equation-definition",
    component: differentialdefinition,
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់១មានមេគុណថេរ",
    englishTitle: "Linear-differential-equation-homogeneous-order-1",
    component: LDE1,
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់២មានមេគុណថេរ",
    englishTitle: "Linear-differential-equation-homogeneous-order-2",
    component: LDE2,
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលលីនែអ៌ែរលំដាប់ទូទៅមានមេគុណថេរ",
    englishTitle: "General-linear-differential-equation-homogeneous",
    component: LDEGeneral,
  },
  {
    title: "សមីការឌីផែរ៉ង់ស្សែលទម្រង់ផ្សេងៗ",
    englishTitle: "differential-equation",
    component: VariousForms,
  },
  {
    title: "លំហាត់អនុវត្ត",
    englishTitle: "Differential-practice",
    component: DifferentialPractice,
  },
];
