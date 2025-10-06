import { Content } from "@core-types/docs/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
} from "lucide-react";

import { Complex } from "./Complex";
import { Limit } from "./Limit";
import { Derivative } from "./Derivative";
import { Integral } from "./Integral";
import { DifferentialEquation } from "./DifferentialEquation";
import { Probability } from "./Probability";
import { Vector } from "./Vector";
import { Conic } from "./Conic";
import { Function } from "./Function";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "Complex",
      title: "កុំផ្លិច",
      englishTitle: "Complex",
      icon: Target,
      topics: Complex,
    },
    {
      lesson: "limits",
      title: "លីមីត",
      englishTitle: "Limits",
      icon: Target,
      topics: Limit,
    },
    {
      lesson: "derivatives",
      title: "ដេរីវេ",
      englishTitle: "Derivatives",
      icon: FunctionSquare,
      topics: Derivative,
    },
    {
      lesson: "integration",
      title: "អាំងតេក្រាល",
      englishTitle: "Integration",
      icon: Variable,
      topics: Integral,
    },
    {
      lesson: "diffential-equations",
      title: "សមីការឌីផេរ៉ង់សែ្យល",
      englishTitle: "Differential-Equations",
      icon: Box,
      topics: DifferentialEquation,
    },
    {
      lesson: "Probability",
      title: "ប្រូបាប",
      englishTitle: "Probability",
      icon: Box,
      topics: Probability,
    },
    {
      lesson: "vectors",
      title: "វ៉ិចទ័រ",
      englishTitle: "Vectors",
      icon: Box,
      topics: Vector,
    },
    {
      lesson: "Conics",
      title: "កោនិក",
      englishTitle: "Conics",
      icon: Box,
      topics: Conic,
    },
    {
      lesson: "Functions",
      title: "អនុគមន៍",
      englishTitle: "Functions",
      icon: Box,
      topics: Function,
    },
    // {
    //   lesson: "exam-questions",
    //   title: "វិញ្ញាសាប្រឡង",
    //   englishTitle: "Exam-Questions",
    //   icon: BookOpen,
    //   topics: [
    //     // BacII Years
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២៤",
    //       englishTitle: "BacII-2024",
    //       component: BacII2024,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២៣",
    //       englishTitle: "BacII-2023",
    //       component: BacII2023,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២២",
    //       englishTitle: "BacII-2022",
    //       component: BacII2022,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២១",
    //       englishTitle: "BacII-2021",
    //       component: BacII2021,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០២០",
    //       englishTitle: "BacII-2020",
    //       component: BacII2020,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៩",
    //       englishTitle: "BacII-2019",
    //       component: BacII2019,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៨",
    //       englishTitle: "BacII-2018",
    //       component: BacII2018,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៧",
    //       englishTitle: "BacII-2017",
    //       component: BacII2017,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៦",
    //       englishTitle: "BacII-2016",
    //       component: BacII2016,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៥",
    //       englishTitle: "BacII-2015",
    //       component: BacII2015,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៤",
    //       englishTitle: "BacII-2014",
    //       component: BacII2014,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១៣",
    //       englishTitle: "BacII-2013",
    //       component: BacII2013,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១២",
    //       englishTitle: "BacII-2012",
    //       component: BacII2012,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១១",
    //       englishTitle: "BacII-2011",
    //       component: BacII2011,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០១០",
    //       englishTitle: "BacII-2010",
    //       component: BacII2010,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៩",
    //       englishTitle: "BacII-2009",
    //       component: BacII2009,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៨",
    //       englishTitle: "BacII-2008",
    //       component: BacII2008,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៧",
    //       englishTitle: "BacII-2007",
    //       component: BacII2007,
    //     },
    //     {
    //       title: "វិញ្ញាសាបាក់ឌុប ២០០៦",
    //       englishTitle: "BacII-2006",
    //       component: BacII2006,
    //     },

    //     // Preparation Sets
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១",
    //       englishTitle: "Preparation-Set-1",
    //       component: Prep1,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ២",
    //       englishTitle: "Preparation-Set-2",
    //       component: Prep2,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៣",
    //       englishTitle: "Preparation-Set-3",
    //       component: Prep3,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៤",
    //       englishTitle: "Preparation-Set-4",
    //       component: Prep4,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៥",
    //       englishTitle: "Preparation-Set-5",
    //       component: Prep5,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៦",
    //       englishTitle: "Preparation-Set-6",
    //       component: Prep6,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៧",
    //       englishTitle: "Preparation-Set-7",
    //       component: Prep7,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៨",
    //       englishTitle: "Preparation-Set-8",
    //       component: Prep8,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ៩",
    //       englishTitle: "Preparation-Set-9",
    //       component: Prep9,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១០",
    //       englishTitle: "Preparation-Set-10",
    //       component: Prep10,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១១",
    //       englishTitle: "Preparation-Set-11",
    //       component: Prep11,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១២",
    //       englishTitle: "Preparation-Set-12",
    //       component: Prep12,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៣",
    //       englishTitle: "Preparation-Set-13",
    //       component: Prep13,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៤",
    //       englishTitle: "Preparation-Set-14",
    //       component: Prep14,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៥",
    //       englishTitle: "Preparation-Set-15",
    //       component: Prep15,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៦",
    //       englishTitle: "Preparation-Set-16",
    //       component: Prep16,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៧",
    //       englishTitle: "Preparation-Set-17",
    //       component: Prep17,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៨",
    //       englishTitle: "Preparation-Set-18",
    //       component: Prep18,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ១៩",
    //       englishTitle: "Preparation-Set-19",
    //       component: Prep19,
    //     },
    //     {
    //       title: "វិញ្ញាសាត្រៀមទី ២០",
    //       englishTitle: "Preparation-Set-20",
    //       component: Prep20,
    //     },
    //   ],
    // },
  ],
};
