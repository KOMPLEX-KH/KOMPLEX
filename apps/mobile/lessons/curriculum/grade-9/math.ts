import { Content } from "@core-types/docs/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
  BookOpen,
  Hash,
  BarChart3,
  Percent,
  X,
  Minus,
  PieChart,
  TrendingUp,
  Dice1,
  MapPin,
  LineChart,
  Triangle,
  Circle,
  Square,
} from "lucide-react";
import ComingSoon from "@components/screens/docs/ComingSoon";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "irrational-numbers",
      title: "ចំនួនអសនិទាន",
      englishTitle: "Irrational-Numbers",
      icon: Hash,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "proportion",
      title: "សមាមាត្រ",
      englishTitle: "Proportion",
      icon: Percent,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "algebraic-expressions",
      title: "កន្សោមពីជគណិត",
      englishTitle: "Algebraic-Expressions",
      icon: X,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "first-degree-equation-one-unknown",
      title: "សមីការដឺក្រេទី 1 មានមួយអញ្ញាត",
      englishTitle: "First-Degree-Equation-With-One-Unknown",
      icon: Minus,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "first-degree-inequality-one-unknown",
      title: "វិសមីការដឺក្រេទី 1 មានមួយអញ្ញាត",
      englishTitle: "First-Degree-Inequality-With-One-Unknown",
      icon: Minus,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "frequency-distribution",
      title: "បំណែងចែកប្រេកង់",
      englishTitle: "Frequency-Distribution",
      icon: PieChart,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "statistical-mean",
      title: "មធ្យមស្ថិតិ",
      englishTitle: "Statistical-Mean",
      icon: TrendingUp,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "probability",
      title: "ប្រូបាប",
      englishTitle: "Probability",
      icon: Dice1,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "distance-between-two-points",
      title: "ចម្ងាយរវាងពីរចំណុច",
      englishTitle: "Distance-Between-Two-Points",
      icon: MapPin,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
            component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "equation-of-line",
      title: "សមីការនៃបន្ទាត់",
      englishTitle: "Equation-of-a-Line",
      icon: LineChart,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "system-first-degree-equations-two-unknowns",
      title: "ប្រព័ន្ធសមីការដឺក្រេទី 1 មានពីរអញ្ញាត",
      englishTitle: "System-of-First-Degree-Equations-With-Two-Unknowns",
      icon: X,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "pythagorean-theorem",
      title: "ទ្រឹស្តីបទពីតាគ័រ",
      englishTitle: "Pythagorean-Theorem",
      icon: Triangle,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "circle-and-line",
      title: "រង្វង់និងបន្ទាត់",
      englishTitle: "Circle-and-Line",
      icon: Circle,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "properties-angles-circle",
      title: "លក្ខណៈមុំនៃរង្វង់",
      englishTitle: "Properties-of-Angles-in-a-Circle",
      icon: Circle,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "thales-theorem",
      title: "ទ្រឹស្តីបទតាលែស",
      englishTitle: "Thales-Theorem",
      icon: Triangle,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "similar-triangles",
      title: "ត្រីកោណដូចគ្នា",
      englishTitle: "Similar-Triangles",
      icon: Triangle,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "polygon",
      title: "ពហុកោណ",
      englishTitle: "Polygon",
      icon: Square,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "solids",
      title: "សូលីត",
      englishTitle: "Solids",
      icon: Box,
      topics: [
        {
          title: "នឹងមកដល់ឆាប់នេះ",
          englishTitle: "coming-soon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
  ],
};
