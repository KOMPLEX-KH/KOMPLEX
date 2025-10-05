import { Content } from "@core-types/docs/curriculum";
import { Atom, Zap, Flame, Eye, Battery } from "lucide-react";
import ComingSoon from "@components/screens/docs/ComingSoon";

export const physics: Content = {
  subject: "physics",
  title: "រូបវិទ្យា",
  englishTitle: "Physics",
  icon: Atom,
  lessons: [
    {
      lesson: "mechanics",
      title: "មេកានិច",
      englishTitle: "Mechanics",
      icon: Zap,
      topics: [
        {
          title: "ចលនាត្រង់",
          englishTitle: "Rectilinear-Motion",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ច្បាប់ចលនារបស់ញូតុន",
          englishTitle: "Newtons-Laws-of-Motion",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "កម្មន្ត ថាមពល និងអានុភាព",
          englishTitle: "Work-Energy-and-Power",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "សម្ពាធនៃសន្ទនីយស្តាទិច",
          englishTitle: "Pressure-of-Static-Fluids",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "thermodynamics",
      title: "ទែម៉ូឌីណាមិច",
      englishTitle: "Thermodynamics",
      icon: Flame,
      topics: [
        {
          title: "សីតុណ្ហភាព",
          englishTitle: "Temperature",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ទ្រឹស្តីស៊ីនេទិចនៃរូបធាតុ",
          englishTitle: "Kinetic-Theory-of-Matter",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "កម្ដៅ",
          englishTitle: "Heat",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "electricity-magnetism",
      title: "អគ្គិសនីនិងម៉ាញេទិច",
      englishTitle: "Electricity-and-Magnetism",
      icon: Battery,
      topics: [
        {
          title: "អេឡិចត្រូស្តាទិច",
          englishTitle: "Electrostatics",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ចរន្តជាប់និងម៉ាញេទិច",
          englishTitle: "Direct-Current-and-Magnetism",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ចរន្តឆ្លាស់",
          englishTitle: "Alternating-Current",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "optics",
      title: "អុបទិច",
      englishTitle: "Optics",
      icon: Eye,
      topics: [
        {
          title: "ធម្មជាតិនិងដំណាលនៃពន្លឺ",
          englishTitle: "Nature-and-Propagation-of-Light",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ឡង់ទី",
          englishTitle: "Lenses",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "energy-life",
      title: "ថាមពល និងជីវិត",
      englishTitle: "Energy-and-Life",
      icon: Atom,
      topics: [
        {
          title: "ការបំប្លែងថាមពលដែលមានប្រភពខុសៗគ្នាឱ្យទៅជាថាមពលអគ្គិសនី",
          englishTitle:
            "Conversion-of-Energy-from-Different-Sources-into-Electrical-Energy",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ការបំប្លែងថាមពលអគ្គិសនីឱ្យទៅជាថាមពលផ្សេងៗ",
          englishTitle:
            "Conversion-of-Electrical-Energy-into-Other-Forms-of-Energy",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
  ],
};
