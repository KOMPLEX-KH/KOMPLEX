import { Topic } from "@core-types/docs/curriculum";

export const Enzymes: Topic[] = [
  {
    title: "អ្វីជាអង់ស៊ីម?",
    englishTitle: "what-is-enzyme",
    component: () =>
      import("@/lessons/components/grade-12/biology/enzymes/EnzymeDefinition"),
  },
  {
    title: "ចំណែកថាក់របស់អង់ស៊ីម",
    englishTitle: "enzyme-function",
    component: () =>
      import("@/lessons/components/grade-12/biology/enzymes/EnzymeFunction"),
  },
  {
    title: "លក្ខណៈរបស់អង់ស៊ីម",
    englishTitle: "characteristics-of-enzymes",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/enzymes/CharacteristicEnzyme"
      ),
  },
];
