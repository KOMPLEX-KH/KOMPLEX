import GymnospermLifeCycle from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermLifeCycle";
import GymnospermReproductiveOrgans from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermReproductiveOrgans";
import GymnospermTypes from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermTypes";
import GymnospermVegetativeOrgans from "@/components/pages/docs/grade-12/biology/gymnosperms/GymnospermVegetativeOrgans";
import { Topic } from "@/types/docs/curriculum";

export const Gymnosperms: Topic[] = [
  {
    title: "ប្រភេទនៃស៊ីមណូស្ពែម",
    englishTitle: "gymnosperms-types",
    component: GymnospermTypes,
  },
  {
    title: "សរីរាង្គលូតលាស់",
    englishTitle: "gymnosperms-vegetative-organs",
    component: GymnospermVegetativeOrgans,
  },
  {
    title: "សរីរាង្គបន្តពូជ",
    englishTitle: "gymnosperms-reproductive-organs",
    component: GymnospermReproductiveOrgans,
  },
  {
    title: "វដ្តជីវិតស៊ីមណូស្ពែម",
    englishTitle: "gymnosperms-life-cycle",
    component: GymnospermLifeCycle,
  },
];
