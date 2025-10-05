import { Topic } from "@core-types/docs/curriculum";

export const Fossil: Topic[] = [
  {
    title: "កំណផូសុីល",
    englishTitle: "fossil-formation",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/flaskConical/FossilFormation"
      ),
  },
  {
    title: "ការកំណត់អាយុផូសុីល",
    englishTitle: "fossil-dating",
    component: () =>
      import("@/lessons/components/grade-12/biology/flaskConical/FossilDating"),
  },
  {
    title: "សារសំខាន់នៃផូសុីល",
    englishTitle: "important-properties-of-fossil",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/flaskConical/FossilImportance"
      ),
  },
];
