import FirstLawThermodynamics from '@components/pages/docs/grade-12/physic/thermodynamic/First-Law-Thermodynamics';
import KineticTheory from "@/components/pages/docs/grade-12/physic/thermodynamic/Kinetic-Theory";
import { Topic } from "@/types/docs/curriculum";
import Engines from '@/components/pages/docs/grade-12/physic/thermodynamic/Engines';
import ThermoPractice from '@/components/pages/docs/grade-12/physic/thermodynamic/Thermo-Practice';


export const Thermodynamics: Topic[] = [
  {
    title: "ទ្រឹស្តីសុីនេទិច",
    englishTitle: "KineticTheory",
    component: KineticTheory,
  },
  {
    title: "ច្បាប់ទីមួយទែម៉ូឌីណាមិច",
    englishTitle: "FirstLawofThermodynamics",
    component: FirstLawThermodynamics,
  },
  {
    title: "ម៉ាសុីន",
    englishTitle: "Heat-Engines",
    component: Engines,
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "thermodynamics-practice",
    component: ThermoPractice,
  },
];
