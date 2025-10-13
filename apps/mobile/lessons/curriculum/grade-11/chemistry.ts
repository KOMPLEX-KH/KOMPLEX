import { Content } from "@core-types/docs/curriculum";
import {
  FlaskConical,
  Calculator,
  Beaker,
  Atom,
  ThermometerSun,
  FlaskRound,
  Shapes,
  TestTube,
  Flame,
} from "lucide-react";
import ComingSoon from "@components/screens/docs/ComingSoon";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "chemical-calculations",
      title: "ការគណនាក្នុងគីមី",
      englishTitle: "Chemical-Calculations",
      icon: Calculator,
      topics: [
        {
          title: "រូបមន្តនិងសមីការគីមី",
          englishTitle: "Chemical-Formulas-and-Equations",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ចំនួនម៉ូល",
          englishTitle: "Number-of-Moles",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "metals",
      title: "លោហៈ",
      englishTitle: "Metals",
      icon: Beaker,
      topics: [
        {
          title: "លក្ខណៈលោហៈ",
          englishTitle: "Properties-of-Metals",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "យោបកលោហៈ",
          englishTitle: "Metallurgy",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "oxidation-reduction-electrochemistry",
      title: "អុកស៊ីតកម្ម រេដុកម្ម និងអេឡិចត្រូគីមី",
      englishTitle: "Oxidation-Reduction-and-Electrochemistry",
      icon: Atom,
      topics: [
        {
          title: "ប្រតិកម្មអុកស៊ីតកម្ម-រេដុកម្មក្នុងសូលុយស្យុងទឹក",
          englishTitle: "Oxidation-Reduction-Reactions-in-Aqueous-Solutions",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ប៉ូតង់ស្យែលអុកស៊ីដូរេដុកម្ម",
          englishTitle: "Oxidation-Reduction-Potential",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ចំនួនអុកស៊ីតកម្ម",
          englishTitle: "Oxidation-Number",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ថ្មពិលអេឡិចត្រូគីមី",
          englishTitle: "Electrochemical-Cells",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អគ្គិសនីវិភាគ",
          englishTitle: "Electrolysis",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "chemical-reactions-energy",
      title: "ប្រតិកម្មគីមីនិងថាមពល",
      englishTitle: "Chemical-Reactions-and-Energy",
      icon: ThermometerSun,
      topics: [
        {
          title: "ថាមពលគីមី",
          englishTitle: "Chemical-Energy",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "កម្ដៅប្រតិកម្ម",
          englishTitle: "Heat-of-Reaction",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "inorganic-compounds",
      title: "សមាសធាតុអសរីរាង្គ",
      englishTitle: "Inorganic-Compounds",
      icon: FlaskRound,
      topics: [
        {
          title: "អាម៉ូញ៉ាក់",
          englishTitle: "Ammonia",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អាស៊ីតស៊ុលផួរិច",
          englishTitle: "Sulfuric-Acid",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "សមាសធាតុកាល់ស្យូម",
          englishTitle: "Calcium-Compounds",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "stereochemistry",
      title: "ស្តេរ៉េអូគីមី",
      englishTitle: "Stereochemistry",
      icon: Shapes,
      topics: [
        {
          title: "ធរណីមាត្រនៃម៉ូលេគុល",
          englishTitle: "Molecular-Geometry",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "រូបសណ្ឋាននិងទ្រង់ទ្រាយនៃម៉ូលេគុល",
          englishTitle: "Conformation-and-Configuration-of-Molecules",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "organic-chemistry",
      title: "គីមីសរីរាង្គ",
      englishTitle: "Organic-Chemistry",
      icon: Flame,
      topics: [
        {
          title: "អាល់កុលនិងអេទែ",
          englishTitle: "Alcohols-and-Ethers",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អាល់ដេអ៊ុតនិងសេតូន",
          englishTitle: "Aldehydes-and-Ketones",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អាស៊ីតកាបុកស៊ីលិច",
          englishTitle: "Carboxylic-Acids",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
  ],
};
