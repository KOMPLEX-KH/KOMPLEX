import { Topic } from "@core-types/docs/curriculum";

export const Protein: Topic[] = [
  {
    title: "រូបផ្គុំរបស់ប្រូតេអ៊ីន",
    englishTitle: "structure-of-protein",
    component: () =>
      import("@/lessons/components/grade-12/biology/protein/StructureProtein"),
  },
  {
    title: "នាទីរបស់ប្រូតេអ៊ីន",
    englishTitle: "function-of-protein",
    component: () =>
      import("@/lessons/components/grade-12/biology/protein/FunctionProtein"),
  },
  {
    title: "ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន",
    englishTitle: "protein-denaturation",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/protein/ProteinDenaturation"
      ),
  },
];
