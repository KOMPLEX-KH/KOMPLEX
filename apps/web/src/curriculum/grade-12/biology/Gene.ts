import ComingSoon from "@/components/pages/docs/common/ComingSoon";
import DnaVsProtein from "@/components/pages/docs/grade-12/biology/geneExpression/DnaVsProtein";
import GeneticCode from "@/components/pages/docs/grade-12/biology/geneExpression/GeneticCode";
import PhenotypeExpression from "@/components/pages/docs/grade-12/biology/geneExpression/PhenotypeExpression";
import Ribosome from "@/components/pages/docs/grade-12/biology/geneExpression/Ribosome";
import Translation from "@/components/pages/docs/grade-12/biology/geneExpression/Translation";
import { Topic } from "@/types/docs/curriculum";

export const Gene: Topic[] = [
  {
    title: "ភាពត្រូវគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន",
    englishTitle: "dna-protein-comparison",
    component: DnaVsProtein,
  },
  {
    title: "រូបផ្តុំ ARN នាំសារ (ARNm)",
    englishTitle: "messenger-rna-mrna",
    component: ComingSoon,
  },
  {
    title: "ចលនការចម្លងក្រម",
    englishTitle: "transcription-process",
    component: ComingSoon,
  },
  {
    title: "ក្រមសេនេទិច",
    englishTitle: "genetic-code",
    component: GeneticCode,
  },
  {
    title: "រីបូសូម",
    englishTitle: "ribosome",
    component: Ribosome,
  },
  {
    title: "ARN ដឹកនាំ (ARNt)",
    englishTitle: "transfer-rna-trna",
    component: ComingSoon,
  },
  {
    title: "ចលនការបកប្រែក្រម",
    englishTitle: "translation-process",
    component: Translation,
  },
  {
    title: "តម្រូវនៃការសំដែងផេណូទីប",
    englishTitle: "requirements-for-phenotypic-expression",
    component: PhenotypeExpression,
  },
];
