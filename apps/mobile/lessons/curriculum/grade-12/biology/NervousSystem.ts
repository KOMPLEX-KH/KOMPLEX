import { Topic } from "@core-types/docs/curriculum";

export const NervousSystem: Topic[] = [
  {
    title: "តម្រូវប្រសាទសត្វឥតឆ្អឹងកង",
    englishTitle: "nervous-system-invertebrates",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/NoneSpine"),
  },
  {
    title: "តម្រូវប្រសាទសត្វឆ្អឹងកង",
    englishTitle: "nervous-system-vertebrates",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/Spine"),
  },
  {
    title: "នាទីប្រព័ន្ធប្រសាទ",
    englishTitle: "nervous-system-function",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/Role"),
  },
  {
    title: "ណឺរ៉ូន (ឬកោសិកាប្រសាទ)",
    englishTitle: "neuron-nerve-cell",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/Neuron"),
  },
  {
    title: "ខួរក្បាល",
    englishTitle: "central-nervous-system",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/CentralNervous"),
  },
  {
    title: "ខួរធំ",
    englishTitle: "brain",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/BigBrain"),
  },
  {
    title: "ខួរតូច",
    englishTitle: "smallbrain",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/SmallBrain"),
  },
  {
    title: "ខួរឆ្អឹងខ្នង",
    englishTitle: "spinal-cord",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/Back"),
  },
  {
    title: "បរិមណ្ឌលប្រសាទ",
    englishTitle: "peripheral-nervous-system",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/PeripheralNervous"),
  },
  {
    title: "ថ្នាំនិងប្រព័ន្ធប្រសាទ",
    englishTitle: "nervous-system-and-drugs",
    component: () =>
      import("@/lessons/components/grade-12/biology/nervous/Medicine"),
  },
];
