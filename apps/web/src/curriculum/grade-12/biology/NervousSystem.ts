import Back from "@/components/pages/docs/grade-12/biology/nervous/Back";
import BigBrain from "@/components/pages/docs/grade-12/biology/nervous/BigBrain";
import CentralNervous from "@/components/pages/docs/grade-12/biology/nervous/CentralNervous";
import Medicine from "@/components/pages/docs/grade-12/biology/nervous/Medicine";
import Neuron from "@/components/pages/docs/grade-12/biology/nervous/Neuron";
import NoneSpine from "@/components/pages/docs/grade-12/biology/nervous/NoneSpine";
import PeripheralNervous from "@/components/pages/docs/grade-12/biology/nervous/PeripheralNervous";
import Role from "@/components/pages/docs/grade-12/biology/nervous/Role";
import SmallBrain from "@/components/pages/docs/grade-12/biology/nervous/SmallBrain";
import Spine from "@/components/pages/docs/grade-12/biology/nervous/Spine";
import { Topic } from "@/types/docs/curriculum";

export const NervousSystem: Topic[] = [
  {
    title: "តម្រូវប្រសាទសត្វឥតឆ្អឹងកង",
    englishTitle: "nervous-system-invertebrates",
    component: NoneSpine,
  },
  {
    title: "តម្រូវប្រសាទសត្វឆ្អឹងកង",
    englishTitle: "nervous-system-vertebrates",
    component: Spine,
  },
  {
    title: "នាទីប្រព័ន្ធប្រសាទ",
    englishTitle: "nervous-system-function",
    component: Role,
  },
  {
    title: "ណឺរ៉ូន (ឬកោសិកាប្រសាទ)",
    englishTitle: "neuron-nerve-cell",
    component: Neuron,
  },
  {
    title: "ខួរក្បាល",
    englishTitle: "central-nervous-system",
    component: CentralNervous,
  },
  {
    title: "ខួរធំ",
    englishTitle: "brain",
    component: BigBrain,
  },
  {
    title: "ខួរតូច",
    englishTitle: "smallbrain",
    component: SmallBrain,
  },
  {
    title: "ខួរឆ្អឹងខ្នង",
    englishTitle: "spinal-cord",
    component: Back,
  },
  {
    title: "បរិមណ្ឌលប្រសាទ",
    englishTitle: "peripheral-nervous-system",
    component: PeripheralNervous,
  },
  {
    title: "ថ្នាំនិងប្រព័ន្ធប្រសាទ",
    englishTitle: "nervous-system-and-drugs",
    component: Medicine,
  },
];
