import FossilDating from "@/components/pages/docs/grade-12/biology/flaskConical/FossilDating";
import FossilFormation from "@/components/pages/docs/grade-12/biology/flaskConical/FossilFormation";
import FossilImportance from "@/components/pages/docs/grade-12/biology/flaskConical/FossilImportance";
import { Topic } from "@/types/docs/curriculum";

export const Fossil: Topic[] = [
  {
    title: "កំណផូសុីល",
    englishTitle: "fossil-formation",
    component: FossilFormation,
  },
  {
    title: "ការកំណត់អាយុផូសុីល",
    englishTitle: "fossil-dating",
    component: FossilDating,
  },
  {
    title: "សារសំខាន់នៃផូសុីល",
    englishTitle: "important-properties-of-fossil",
    component: FossilImportance,
  },
];
