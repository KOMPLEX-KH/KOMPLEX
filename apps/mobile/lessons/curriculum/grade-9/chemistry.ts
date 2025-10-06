import { Content } from "@core-types/docs/curriculum";
import { FlaskConical, Table, Atom, Beaker } from "lucide-react";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "periodic-table-chemical-elements",
      title: "តារាងខួបនៃធាតុគីមី",
      englishTitle: "Periodic-Table-of-Chemical-Elements",
      icon: Table,
      topics: [
        {
          title: "តារាងខួបនៃធាតុគីមី",
          englishTitle: "Periodic-Table-of-Chemical-Elements",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "លក្ខណៈធាតុតាមក្រុម",
          englishTitle: "Characteristics-of-Elements-by-Group",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "carbon-oxygen-hydrogen",
      title: "កាបួន អុកស៊ីសែន និងអ៊ីដ្រូសែន",
      englishTitle: "Carbon-Oxygen-and-Hydrogen",
      icon: Atom,
      topics: [
        {
          title: "កាបួន",
          englishTitle: "Carbon",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អុកស៊ីសែន",
          englishTitle: "Oxygen",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អ៊ីដ្រូសែន",
          englishTitle: "Hydrogen",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
    {
      lesson: "oxide-acid-base-salt",
      title: "អុកស៊ីត អាស៊ីត បាស និងអំបិល",
      englishTitle: "Oxide-Acid-Base-and-Salt",
      icon: Beaker,
      topics: [
        {
          title: "អុកស៊ីត",
          englishTitle: "Oxide",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អាស៊ីត",
          englishTitle: "Acid",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "បាស",
          englishTitle: "Base",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
        {
          title: "អំបិល",
          englishTitle: "Salt",
          component: () => import("@components/screens/docs/ComingSoon"),
        },
      ],
    },
  ],
};
