import FunctionProtein from "@/components/pages/docs/grade-12/biology/protein/FunctionProtein";
import ProteinDenaturation from "@/components/pages/docs/grade-12/biology/protein/ProteinDenaturation";
import StructureProtein from "@/components/pages/docs/grade-12/biology/protein/StructureProtein";
import { Topic } from "@/types/docs/curriculum";

export const Protein: Topic[] = [
  {
    title: "រូបផ្គុំរបស់ប្រូតេអ៊ីន",
    englishTitle: "structure-of-protein",
    component: StructureProtein,
  },
  {
    title: "នាទីរបស់ប្រូតេអ៊ីន",
    englishTitle: "function-of-protein",
    component: FunctionProtein,
  },
  {
    title: "ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន",
    englishTitle: "protein-denaturation",
    component: ProteinDenaturation,
  },
];
