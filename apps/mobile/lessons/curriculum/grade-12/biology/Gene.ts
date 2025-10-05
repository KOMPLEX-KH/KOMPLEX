import { Topic } from "@core-types/docs/curriculum";

export const Gene: Topic[] = [
  {
    title: "ភាពត្រូវគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន",
    englishTitle: "dna-protein-comparison",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/DnaVsProtein"
      ),
  },
  {
    title: "រូបផ្តុំ ARN នាំសារ (ARNm)",
    englishTitle: "messenger-rna-mrna",
    component: () => import("@/components/screens/docs/ComingSoon"),
  },
  {
    title: "ចលនការចម្លងក្រម",
    englishTitle: "transcription-process",
    component: () => import("@/components/screens/docs/ComingSoon"),
  },
  {
    title: "ក្រមសេនេទិច",
    englishTitle: "genetic-code",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/GeneticCode"
      ),
  },
  {
    title: "រីបូសូម",
    englishTitle: "ribosome",
    component: () =>
      import("@/lessons/components/grade-12/biology/geneExpression/Ribosome"),
  },
  {
    title: "ARN ដឹកនាំ (ARNt)",
    englishTitle: "transfer-rna-trna",
    component: () => import("@/components/screens/docs/ComingSoon"),
  },
  {
    title: "ចលនការបកប្រែក្រម",
    englishTitle: "translation-process",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/Translation"
      ),
  },
  {
    title: "តម្រូវនៃការសំដែងផេណូទីប",
    englishTitle: "requirements-for-phenotypic-expression",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/PhenotypeExpression"
      ),
  },
];
