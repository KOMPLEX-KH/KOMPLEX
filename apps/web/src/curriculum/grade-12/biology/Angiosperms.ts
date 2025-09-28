import AngiospermVegetativeOrgan from "@/components/pages/docs/grade-12/biology/angiosperm/AngiospermVegetativeOrgan";
import AngiospermReproductiveOrgan from "@/components/pages/docs/grade-12/biology/angiosperm/AngiospermReproductiveOrgan";
import PollinationProcess from "@/components/pages/docs/grade-12/biology/angiosperm/PollinationProcess";
import Reproduction from "@/components/pages/docs/grade-12/biology/angiosperm/Reproduction";
import LifeCycle from "@/components/pages/docs/grade-12/biology/angiosperm/LifeCycle";
import Comparision from "@/components/pages/docs/grade-12/biology/angiosperm/Comparision";
import Advantage from "@/components/pages/docs/grade-12/biology/angiosperm/Advantage";
import { Topic } from "@/types/docs/curriculum";

export const Angiosperms: Topic[] = [
  {
    title: "សរីរាង្គលូតលាស់",
    englishTitle: "angiosperms-vegetative-organs",
    component: AngiospermVegetativeOrgan,
  },
  {
    title: "សរីរាង្គបន្តពូជ",
    englishTitle: "angiosperms-reproductive-organs",
    component: AngiospermReproductiveOrgan,
  },
  {
    title: "ដំណើរលំអង",
    englishTitle: "angiosperms-pollination-process",
    component: PollinationProcess,
  },
  {
    title: "ការបន្តពូជរបស់អង់ស្យូស្ពៃម",
    englishTitle: "angiosperms-reproduction",
    component: Reproduction,
  },
  {
    title: "វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា",
    englishTitle: "angiosperms-flowering-plants-life-cycle",
    component: LifeCycle,
  },
  {
    title: "ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន",
    englishTitle: "angiosperms-monocot-dicot-comparison",
    component: Comparision,
  },
  {
    title: "ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់",
    englishTitle: "angiosperms-seed-plants-benefits",
    component: Advantage,
  },
];
