import { Topic } from "@/types/docs/curriculum";

export const Fossil: Topic[] = [
  {
    title: "កំណផូសុីល",
    englishTitle: "fossil-formation",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/biology/flaskConical/FossilFormation"
      ),
  },
  {
    title: "ការកំណត់អាយុផូសុីល",
    englishTitle: "fossil-dating",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/biology/flaskConical/FossilDating"
      ),
  },
  {
    title: "សារសំខាន់នៃផូសុីល",
    englishTitle: "important-properties-of-fossil",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/biology/flaskConical/FossilImportance"
      ),
  },
];
