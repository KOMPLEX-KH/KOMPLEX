import { Topic } from "@/types/docs/curriculum";

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
    title: "ការចម្លងព័ត៍មានសេនេទិច",
    englishTitle: "genetic-information-replication",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/GeneticTransform"
      ),
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
    title: "ចលនការចម្លងក្រម",
    englishTitle: "transcription-process",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/Translation"
      ),
  },
  {
    title: "ការបកប្រែក្រម",
    englishTitle: "code-translation",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/CodeTranslation"
      ),
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
  {
    title: "រូបមន្តការសម្តែងចេញនៃសេន",
    englishTitle: "GeneticFormular",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/GeneticFormular"
      ),
  },
  {
    title: "សំណួរ & លំហាត់",
    englishTitle: "GeneticPractice",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/geneExpression/GeneticPractice"
      ),
  },
];
