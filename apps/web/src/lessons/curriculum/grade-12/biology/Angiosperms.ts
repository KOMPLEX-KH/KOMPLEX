import { Topic } from "@/types/docs/curriculum";

export const Angiosperms: Topic[] = [
  {
    title: "សរីរាង្គលូតលាស់",
    englishTitle: "angiosperms-vegetative-organs",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/angiosperm/AngiospermVegetativeOrgan"
      ),
  },
  {
    title: "សរីរាង្គបន្តពូជ",
    englishTitle: "angiosperms-reproductive-organs",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/angiosperm/AngiospermReproductiveOrgan"
      ),
  },
  {
    title: "ដំណើរលំអង",
    englishTitle: "angiosperms-pollination-process",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/angiosperm/PollinationProcess"
      ),
  },
  {
    title: "ការបន្តពូជរបស់អង់ស្យូស្ពៃម",
    englishTitle: "angiosperms-reproduction",
    component: () =>
      import("@/lessons/components/grade-12/biology/angiosperm/Reproduction"),
  },
  {
    title: "វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា",
    englishTitle: "angiosperms-flowering-plants-life-cycle",
    component: () =>
      import("@/lessons/components/grade-12/biology/angiosperm/LifeCycle"),
  },
  {
    title: "ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន",
    englishTitle: "angiosperms-monocot-dicot-comparison",
    component: () =>
      import("@/lessons/components/grade-12/biology/angiosperm/Comparision"),
  },
  {
    title: "ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់",
    englishTitle: "angiosperms-seed-plants-benefits",
    component: () =>
      import("@/lessons/components/grade-12/biology/angiosperm/Advantage"),
  },
];
