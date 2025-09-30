import { Topic } from "@/types/docs/curriculum";

export const Gymnosperms: Topic[] = [
  {
    title: "ប្រភេទនៃស៊ីមណូស្ពែម",
    englishTitle: "gymnosperms-types",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/gymnosperms/GymnospermTypes"
      ),
  },
  {
    title: "សរីរាង្គលូតលាស់",
    englishTitle: "gymnosperms-vegetative-organs",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/gymnosperms/GymnospermVegetativeOrgans"
      ),
  },
  {
    title: "សរីរាង្គបន្តពូជ",
    englishTitle: "gymnosperms-reproductive-organs",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/gymnosperms/GymnospermReproductiveOrgans"
      ),
  },
  {
    title: "វដ្តជីវិតស៊ីមណូស្ពែម",
    englishTitle: "gymnosperms-life-cycle",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/gymnosperms/GymnospermLifeCycle"
      ),
  },
];
