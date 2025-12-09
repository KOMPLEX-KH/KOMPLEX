export interface Book {
  id: string;
  title: string;
  lessonId: string;
  isRecommended: boolean;
  categoryId: string;
  grade: string;
  description: string;
  pdfSrc: string;
  imageSrc: string;
  author: string;
  type: string;
  views: number;
}

export interface Subject {
  id: string;
  name: string;
}
