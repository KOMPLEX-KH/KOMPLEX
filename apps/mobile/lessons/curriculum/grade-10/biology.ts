import { Content } from "@core-types/docs/curriculum";
import { Leaf, Dna, FlaskConical, User, Sprout } from "lucide-react";
import ComingSoon from "@components/screens/docs/ComingSoon";

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "diversity-living-organisms",
      title: "នានាភាពនៃភាវៈរស់",
      englishTitle: "Diversity-of-Living-Organisms",
      icon: Leaf,
      topics: [
        {
          title: "ចំណែកថ្នាក់និងដើមឈើ មែកធាងពូជអម្បូរ",
          englishTitle: "Classification-and-Phylogenetic-Trees",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "វីរុសនិងបាក់តេរី",
          englishTitle: "Viruses-and-Bacteria",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ប្រូទីស",
          englishTitle: "Protists",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ផ្សិត",
          englishTitle: "Fungi",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "រុក្ខជាតិ",
          englishTitle: "Plants",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "សត្វ",
          englishTitle: "Animals",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "uniformity-living-organisms",
      title: "ឯកសណ្ឋានភាពនៃភាវៈរស់",
      englishTitle: "Uniformity-of-Living-Organisms",
      icon: Dna,
      topics: [
        {
          title: "កោសិកា",
          englishTitle: "Cells",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ប្រការីយ៉ូតនិងអឺការីយ៉ូត",
          englishTitle: "Prokaryotes-and-Eukaryotes",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "metabolism",
      title: "មេតាបូលីស",
      englishTitle: "Metabolism",
      icon: FlaskConical,
      topics: [
        {
          title: "រស្មីសំយោគ",
          englishTitle: "Photosynthesis",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ដង្ហើមកោសិកា",
          englishTitle: "Cellular-Respiration",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "human-biology",
      title: "ជីវវិទ្យាមនុស្ស",
      englishTitle: "Human-Biology",
      icon: User,
      topics: [
        {
          title: "ប្រព័ន្ធគ្រោងឆ្អឹង",
          englishTitle: "Skeletal-System",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ប្រព័ន្ធសាច់ដុំ",
          englishTitle: "Muscular-System",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "biology-agriculture",
      title: "ជីវវិទ្យាក្នុងវិស័យកសិកម្ម",
      englishTitle: "Biology-in-Agriculture",
      icon: Sprout,
      topics: [
        {
          title: "ជី",
          englishTitle: "Fertilizers",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "ការបង្កាត់",
          englishTitle: "Breeding",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
  ],
};
