import { Topic } from "@/types/docs/curriculum";

export const AminoAcid: Topic[] = [
  {
    title: "ទម្រង់អាស៊ីតអាមីណេ",
    englishTitle: "forms-of-amino-acids",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/biology/aminoAcid/FormAminoAcid"
      ),
  },
  {
    title: "ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ",
    englishTitle: "different-types-of-amino-acids",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/biology/aminoAcid/TypesAminoAcid"
      ),
  },
  {
    title: "ប៉ិបទីត",
    englishTitle: "peptide",
    component: () =>
      import("@/components/pages/docs/grade-12/biology/aminoAcid/Peptide"),
  },
];
