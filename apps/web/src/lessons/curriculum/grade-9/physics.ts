import { Content } from "@/types/docs/curriculum";
import { Atom, Zap, Cog, Battery, Magnet, Eye } from "lucide-react";
import ComingSoon from "@components/pages/docs/ComingSoon";

export const physics: Content = {
  subject: "physics",
  title: "រូបវិទ្យា",
  englishTitle: "Physics",
  icon: Atom,
  lessons: [
    {
      lesson: "force-rotation-physics",
      title: "ផលរង្វិលនៃកម្លាំង",
      englishTitle: "Force-Rotation-Physics",
      icon: Zap,
      topics: [
        {
          title: "បង្គំនិងបំបែកកម្លាំង",
          englishTitle: "Combining-and-Decomposing-Forces",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ម៉ូម៉ង់នៃកម្លាំង",
          englishTitle: "Moment-of-Force",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ទីប្រជុំទម្ងន់",
          englishTitle: "Center-of-Gravity",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "simple-machines",
      title: "ម៉ាស៊ីនងាយ",
      englishTitle: "Simple-Machines",
      icon: Cog,
      topics: [
        {
          title: "ឃ្នាស់",
          englishTitle: "Lever",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ប្លង់ទេរ",
          englishTitle: "Inclined-Plane",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "កង់យោងនិងស្ពឺ",
          englishTitle: "Wheel-and-Axle-Gear",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "រ៉កនិងត្រើយ",
          englishTitle: "Pulley-and-Block",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ទិន្នផលម៉ាស៊ីនងាយ",
          englishTitle: "Efficiency-of-Simple-Machines",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "electricity",
      title: "អគ្គិសនី",
      englishTitle: "Electricity",
      icon: Battery,
      topics: [
        {
          title: "ថាមពលអគ្គិសនី",
          englishTitle: "Electrical-Energy",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ការប្រើប្រាស់ចរន្តអគ្គិសនីក្នុងគេហដ្ឋាន",
          englishTitle: "Household-Electrical-Current-Usage",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "electromagnetism",
      title: "អេឡិចត្រូម៉ាញេទិច",
      englishTitle: "Electromagnetism",
      icon: Magnet,
      topics: [
        {
          title: "ដែនម៉ាញេទិចបង្កើតដោយចរន្តអគ្គិសនី",
          englishTitle: "Magnetic-Field-Generated-by-Electric-Current",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "អេឡិចត្រូមេដែក",
          englishTitle: "Electromagnet",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "កម្លាំងម៉ាញេទិចលើចរន្តអគ្គិសនី",
          englishTitle: "Magnetic-Force-on-Electric-Current",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
          englishTitle: "Electromagnetic-Induction",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ត្រង់សូម៉ាទ័រឬត្រង់ស្នូ",
          englishTitle: "Transformer",
          component: () => import("@components/pages/docs/ComingSoon"),
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
          title: "ដំណាលត្រង់នៃពន្លឺ",
          englishTitle: "Rectilinear-Propagation-of-Light",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ចំណាំងផ្លាតនៃពន្លឺ",
          englishTitle: "Reflection-of-Light",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ចំណាំងបែរនៃពន្លឺ",
          englishTitle: "Refraction-of-Light",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
        {
          title: "ឡង់ទី",
          englishTitle: "Lens",
          component: () => import("@components/pages/docs/ComingSoon"),
        },
      ],
    },
  ],
};
