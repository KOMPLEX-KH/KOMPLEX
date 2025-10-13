import { Content } from "@/types/docs/curriculum";
import {
  Calculator,
  Target,
  FunctionSquare,
  Variable,
  Box,
  BookOpen,
  Brain,
  Square,
  Circle,
  Triangle,
  BarChart3,
  Hash,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import ComingSoon from "@components/pages/docs/ComingSoon";

export const math: Content = {
  subject: "math",
  title: "គណិតវិទ្យា",
  englishTitle: "Mathematics",
  icon: Calculator,
  lessons: [
    {
      lesson: "logic-sets-numbers",
      title: "តក្កវិទ្យា សំណុំនិងចំនួន",
      englishTitle: "Logic-Sets-and-Numbers",
      icon: Brain,
      topics: [
        {
          title: "តក្កវិទ្យា",
          englishTitle: "Logic",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "សំណុំ",
          englishTitle: "Sets",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ចំនួន",
          englishTitle: "Numbers",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "polynomials",
      title: "ពហុធា",
      englishTitle: "Polynomials",
      icon: Square,
      topics: [
        {
          title: "ពហុធា",
          englishTitle: "Polynomials",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ប្រមាណវិធីចែកពហុធា",
          englishTitle: "Polynomial-Division-Operations",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "equations-inequalities",
      title: "សមីការនិងវិសមីការ",
      englishTitle: "Equations-and-Inequalities",
      icon: FunctionSquare,
      topics: [
        {
          title: "សមីការដឺក្រេទី 2មានមួយអញ្ញាតិ",
          englishTitle: "Quadratic-Equations-with-One-Variable",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ប្រព័ន្ធសមីការដឺក្រេលំដាប់ខ្ពស់",
          englishTitle: "Systems-of-Higher-Degree-Equations",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "វិសមីការ",
          englishTitle: "Inequalities",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "plane-geometry",
      title: "ធរណីមាត្រក្នុងប្លង់",
      englishTitle: "Plane-Geometry",
      icon: Circle,
      topics: [
        {
          title: "កូអរដោនេនៃចំណុច",
          englishTitle: "Coordinates-of-a-Point",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "សមីការបន្ទាត់",
          englishTitle: "Equation-of-a-Line",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "សមីការរង្វង់",
          englishTitle: "Equation-of-a-Circle",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ដំណោះស្រាយវិសមីការតាមក្រាប",
          englishTitle: "Graphical-Solutions-of-Inequalities",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "functions-function-graphs",
      title: "អនុគមន៍និងក្រាបអនុគមន៍",
      englishTitle: "Functions-and-Function-Graphs",
      icon: Target,
      topics: [
        {
          title: "អនុគមន៍ និងក្រាបនៃអនុគមន៍",
          englishTitle: "Functions-and-Graphs-of-Functions",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "អនុគមន៍ដឺក្រេទី 2 និងក្រាបរបស់វា",
          englishTitle: "Quadratic-Functions-and-Their-Graphs",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "អនុគមន៍សនិទាន អនុគមន៍អសនិទាន",
          englishTitle: "Rational-Functions-Irrational-Functions",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "trigonometric-ratios",
      title: "ផលធៀបត្រីកោណមាត្រ",
      englishTitle: "Trigonometric-Ratios",
      icon: Triangle,
      topics: [
        {
          title: "ផលធៀបត្រីកោណមាត្រ",
          englishTitle: "Trigonometric-Ratios",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ការអនុវត្តនៃផលធៀបត្រីកោណមាត្រ",
          englishTitle: "Application-of-Trigonometric-Ratios",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "statistics",
      title: "ស្ថិតិ",
      englishTitle: "Statistics",
      icon: BarChart3,
      topics: [
        {
          title: "បំណែងចែកប្រេកង់និងការតាងក្រាប",
          englishTitle: "Frequency-Distribution-and-Graphing",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "រង្វាស់ទីតាំង",
          englishTitle: "Measures-of-Position",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "permutations-combinations",
      title: "ចម្លាស់និងបន្សំ",
      englishTitle: "Permutations-and-Combinations",
      icon: Hash,
      topics: [
        {
          title: "ចម្លាស់",
          englishTitle: "Permutations",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "បន្សំ",
          englishTitle: "Combinations",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "vectors-plane",
      title: "វ៉ិចទ័រក្នុងប្លង់",
      englishTitle: "Vectors-in-a-Plane",
      icon: ArrowRight,
      topics: [
        {
          title: "វ៉ិចទ័រនិងប្រមាណវិធីលើវ៉ិចទ័រ",
          englishTitle: "Vectors-and-Operations-on-Vectors",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ការអនុវត្តនៃវ៉ិចទ័រ",
          englishTitle: "Application-of-Vectors",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "geometric-transformations-plane",
      title: "បំលែងរូបក្នុងប្លង់",
      englishTitle: "Geometric-Transformations-in-a-Plane",
      icon: RotateCcw,
      topics: [
        {
          title: "បំលែងកិល",
          englishTitle: "Translation",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "បំលែងឆ្លុះ",
          englishTitle: "Reflection",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "បំលែងវិល",
          englishTitle: "Rotation",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "បំលែងចាំង",
          englishTitle: "Dilation",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "geometry-space",
      title: "ធរណីមាត្រក្នុងលំហ",
      englishTitle: "Geometry-in-Space",
      icon: Box,
      topics: [
        {
          title: "រូបធរណីមាត្រក្នុងលំហ",
          englishTitle: "Geometric-Figures-in-Space",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "បន្ទាត់និងប្លង់ស្របក្នុងលំហ",
          englishTitle: "Parallel-Lines-and-Planes-in-Space",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ភាពអរតួកូណាល់ក្នុងលំហ",
          englishTitle: "Orthogonality-in-Space",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
  ],
};
