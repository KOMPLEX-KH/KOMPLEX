import EnzymeDefinition from "@/components/pages/docs/grade-12/biology/enzymes/EnzymeDefinition";
import EnzymeFunction from "@/components/pages/docs/grade-12/biology/enzymes/EnzymeFunction";
import CharacteristicEnzyme from "@/components/pages/docs/grade-12/biology/enzymes/CharacteristicEnzyme";
import { Topic } from "@/types/docs/curriculum";

export const Enzymes: Topic[] = [
  {
    title: "អ្វីជាអង់ស៊ីម?",
    englishTitle: "what-is-enzyme",
    component: EnzymeDefinition,
  },
  {
    title: "ចំណែកថាក់របស់អង់ស៊ីម",
    englishTitle: "enzyme-function",
    component: EnzymeFunction,
  },
  {
    title: "លក្ខណៈរបស់អង់ស៊ីម",
    englishTitle: "characteristics-of-enzymes",
    component: CharacteristicEnzyme,
  },
];
