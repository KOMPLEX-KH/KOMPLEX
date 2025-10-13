import { Topic } from "@/types/docs/curriculum";

export const EndocrineSystem: Topic[] = [
  {
    title: "ក្រពេញ",
    englishTitle: "gland",  
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Gland"
    ),
  },
  {
    title: "អរម៉ូន",
    englishTitle: "hormone",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Hormone"
    ),
  },
  {
    title: "ចលនាការនៃអំពេីរបស់អរម៉ូន",
    englishTitle: "movement-of-hormone-actions",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/HormoneFlow"
    ),
  },
  {
    title: "ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន",
    englishTitle: "control-of-endocrine-system",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/EndokrinControl"
    ),
  },
  {
    title: "ប្រព័ន្ធអង់ដូគ្រីនមនុស្ស",
    englishTitle: "peopleangdukrin",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Peopleangdukrin"
    ),
  },
  {
    title: "អុីប៉ូតាឡាមុស",
    englishTitle: "hypothalamus",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Hypothalamus"
    ),
  },
  {
    title: "ក្រពេញអុីប៉ូភីស",
    englishTitle: "hypophysis-pituitary-gland",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Hypophysis-pituitary-gland"
    ),
  },
  {
    title: "ក្រពេញទីរ៉ូអ៊ុត ",
    englishTitle: "thyroid-gland",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Thyroid"
    ),
  },
  {
    title: "ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត",
    englishTitle: "parathyroid-gland",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Parathyroid"
    ),
  },
  {
    title: "ក្រពេញលើតម្រងនោម",
    englishTitle: "adrenal-glands",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/AdrenalGlands"
    ),
  },
  {
    title: "លំពែង",
    englishTitle: "pancreas",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/Pancreas"
    ),
  },
  {
    title: "ក្រពេញភេទ",
    englishTitle: "gonads-sex-glands",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/GonadsSexGlands"
    ),
  },
  {
    title: "ក្រពេញទីមុស",
    englishTitle: "thymus-gland",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/ThymusGland"
    ),
  },
  {
    title: "ក្រពះនិងពោះវៀនតូច",
    englishTitle: "stomach-and-small-intestine",
    component: () =>
      import(
        "@/lessons/components/grade-12/biology/Engdokrin/StomachNsmallIntestine"
    ),
  },
];
