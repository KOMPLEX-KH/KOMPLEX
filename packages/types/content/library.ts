export interface Book {
  id: number;                    
  title: string;
  author: string | null;       
  gradeId: number | null;       
  lessonId: number | null;       
  isRecommended: boolean;
  subjectId: number | null;     
  publishedDate: string | null;
  description: string | null;  
  pdfUrl: string | null;    
  imageUrl: string | null;   
  createdAt: string;    
  updatedAt: string;
}

export interface Grade {
  id: number;
  name: string;
  orderIndex?: number;
}

export interface Subject {
  id: number;                    
  name: string;
  icon?: string;
  orderIndex?: number;
}

export interface Lesson {
  id: number;
  name: string;
  subjectId: number;
  icon?: string;
  orderIndex?: number;
}