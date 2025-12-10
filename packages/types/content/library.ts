export interface Book {
  id: string;
  title: string;
  lessonId: string;
  isRecommended: boolean;
  subjectId: string;
  grade: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
  author: string;
  type: string;
  views?: number;
}

export interface Subject {
  id: string;
  name: string;
}


export const subjectNameMap: Record<string, string> = {
    "1": "គណិតវិទ្យា",
    "2": "រូបវិទ្យា",
    "3": "គីមីវិទ្យា",
    "4": "ជីវវិទ្យា",
    "5": "អក្សរសិល្ប៍ខ្មែរ",
    "6": "ប្រវត្តិសាស្ត្រ",
    "7": "អង់គ្លេស",
    "all": "គ្រប់មុខវិជ្ជា",
    "math": "គណិតវិទ្យា",
    "physics": "រូបវិទ្យា",
    "chemistry": "គីមីវិទ្យា",
    "biology": "ជីវវិទ្យា",
    "khmer": "អក្សរសិល្ប៍ខ្មែរ",
    "history": "ប្រវត្តិសាស្ត្រ",
    "english": "អង់គ្លេស",
  };