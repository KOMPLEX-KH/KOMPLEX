export const subjects = [
  { id: "all", name: "គ្រប់មុខវិជ្ជា" },
  { id: "math", name: "គណិតវិទ្យា" },
  { id: "physics", name: "រូបវិទ្យា" },
  { id: "chemistry", name: "គីមីវិទ្យា" },
  { id: "biology", name: "ជីវវិទ្យា" },
  { id: "khmer", name: "អក្សរសិល្ប៍ខ្មែរ" },
  { id: "history", name: "ប្រវត្តិសាស្ត្រ" },
  { id: "english", name: "អង់គ្លេស" },
];

export const lessonsBySubject = {
  math: [
    { id: "limit", name: "Limit" },
    { id: "integral", name: "អាំងតេក្រាល (Integral)" },
    { id: "komplex", name: "កុំផ្លិច" },
  ],

  physics: [
    { id: "newton", name: "ច្បាប់ Newton" },
    { id: "motion", name: "ចលនា" },
    { id: "energy", name: "ថាមពល" },
  ],

  chemistry: [
    { id: "atom", name: "អាតូម" },
    { id: "bonding", name: "Chemical Bonding" },
  ],

  biology: [
    { id: "cell", name: "កោសិកា" },
    { id: "life", name: "ពិភពជីវិត" },
  ],

  khmer: [
    { id: "literature", name: "អក្សរសាស្ត្រ" },
  ],

  history: [
    { id: "world", name: "ប្រវត្តិសាស្ត្រពិភពលោក" },
    { id: "asia", name: "អាស៊ីបុរាណ" },
  ],

  english: [
    { id: "grammar", name: "អង់គ្លេស Grammar" },
    { id: "reading", name: "Reading Skill" },
  ],
};


// mock data
export const Books = [
  {
    id: "1",
    title: "អាំងតេក្រាល ផ្នែក ១",
    subject: "math",
    lessons: ["integral"],
    grade: "ទី១២",
    description: "មេរៀនស្តីពីអាំងតេក្រាលដំបូងចំពោះសិស្សថ្នាក់ទី១២។",
    pdfSrc: "/pdfs/math/integral1.pdf",
    imageSrc: "/images/math/integral1.jpg",
    author: "គ្រូ សុភា",
    type: "book",
    views: 1200,
  },

  {
    id: "2",
    title: "មូលដ្ឋានរូបវិទ្យា",
    subject: "physics",
    lessons: ["newton", "energy"],
    grade: "ទី១១",
    description: "សៀវភៅនេះពន្យល់អំពីច្បាប់និយាយទំនាក់ទំនងរវាងវត្ថុ។",
    pdfSrc: "/pdfs/physics/basic_physics.pdf",
    imageSrc: "/images/physics/basic_physics.jpg",
    author: "គ្រូ វុទ្ធி",
    type: "book",
    views: 900,
  },

  {
    id: "3",
    title: "អាសុីត បាស",
    subject: "chemistry",
    lessons: ["acid"],
    grade: "ទី១០",
    description: "បង្ហាញពីបំលែងគីមី និងរចនាសម្ព័ន្ធអាតូម។",
    pdfSrc: "/pdfs/chemistry/intro_chem.pdf",
    imageSrc: "/images/chemistry/intro_chem.jpg",
    author: "គ្រូ ច័ន្ទស្រី",
    type: "book",
    views: 450,
  },

  {
    id: "4",
    title: "វចនានុក្រមភាសាអង់គ្លេស",
    subject: "english",
    lessons: ["grammar"],
    grade: "សិស្សទូទៅ",
    description: "សៀវភៅ Grammar ត្រូវការសម្រាប់ការរៀនអង់គ្លេស។",
    pdfSrc: "/pdfs/english/grammar.pdf",
    imageSrc: "/images/english/grammar.jpg",
    author: "Teacher John",
    type: "book",
    views: 830,
  },
];
