import FormAminoAcid from "@/components/pages/docs/grade-12/biology/aminoAcid/FormAminoAcid";
import TypesAminoAcid from "@/components/pages/docs/grade-12/biology/aminoAcid/TypesAminoAcid";
import Peptide from "@/components/pages/docs/grade-12/biology/aminoAcid/Peptide";
import { Topic } from "@/types/docs/curriculum";

export const AminoAcid: Topic[] = [
  {
    title: "ទម្រង់អាស៊ីតអាមីណេ",
    englishTitle: "forms-of-amino-acids",
    component: FormAminoAcid,
  },
  {
    title: "ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ",
    englishTitle: "different-types-of-amino-acids",
    component: TypesAminoAcid,
  },
  {
    title: "ប៉ិបទីត",
    englishTitle: "peptide",
    component: Peptide,
  },
];
