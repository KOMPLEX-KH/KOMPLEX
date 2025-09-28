import { Topic } from "@/types/docs/curriculum";

export const ElectricityMagnetism: Topic[] = [
  {
    title: "ដែននិងកម្លាំងម៉ាញេទិច",
    englishTitle: "magneticField",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/physic/electricity&magnetism/Magnetic-Field"
      ),
  },
  {
    title: "អាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច",
    englishTitle: "Electromagnetic-Induction",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electromagnetic-Induction"
      ),
  },
  {
    title: "អូតូអាំងឌុចស្យុង",
    englishTitle: "AutoElectromagneticInduction",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/physic/electricity&magnetism/Self-Induction"
      ),
  },
  {
    title: "សៀគ្វីចរន្តឆ្លាស់",
    englishTitle: "AlternatingCurrentCircuits",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/physic/electricity&magnetism/Alternating-Circuits"
      ),
  },
  {
    title: "លំហាត់អនុវត្តន៍",
    englishTitle: "electromagneticmagnetismpractice",
    component: () =>
      import(
        "@/components/pages/docs/grade-12/physic/electricity&magnetism/Electricity-Practice"
      ),
  },
];
