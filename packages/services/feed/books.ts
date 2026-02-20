import type { AxiosInstance } from "axios";
import type { Book } from "../../types/content/books";
import { ApiWrapper } from "../../types/apiWrapper";

export const createFeedBooksService = (api: AxiosInstance) => {
  return {

    // Get all books
    getAllBooks: async (): Promise<ApiWrapper<Book[]>> => {
      try {
        const response = await api.get<ApiWrapper<Book[]>>(`/feed/books`);
        return response.data as ApiWrapper<Book[]>;
      } catch (error) {
        console.error("Error fetching all books:", error);
        throw new Error("Failed to fetch books");
      }
    },

    // Get a single book by ID
    // getBookById: async (id: string): Promise<Book> => {
    //   try {
    //     const response = await api.get(`/feed/books/${id}`);
    //     return response.data;
    //   } catch (error) {
    //     console.error("Error fetching book:", error);
    //     throw new Error("Failed to fetch book");
    //   }
    // },

    // Get all subjects
    // getAllSubjects: async (): Promise<{ subjects: Subject[] }> => {
    //   try {
    //     const response = await api.get(`/feed/librarys/subjects`);
    //     return {
    //       subjects: response.data,
    //     };
    //   } catch (error) {
    //     console.error("Error fetching subjects:", error);
    //     return { subjects: [] };
    //   }
    // },

    // // Get all grades
    // getAllGrades: async (): Promise<{ grades: Grade[] }> => {
    //   try {
    //     const response = await api.get(`/feed/librarys/grades`);
    //     return {
    //       grades: response.data
    //     };
    //   } catch (error) {
    //     console.error("Error fetching grades:", error);
    //     return { grades: [] };
    //   }
    // },

    // Get all lessons
    // getAllLessons: async (): Promise<{ lessons: Lesson[] }> => {
    //   try {
    //     const response = await api.get(`/feed/librarys/lessons`);
    //     return {
    //       lessons: response.data
    //     };
    //   } catch (error) {
    //     console.error("Error fetching lessons:", error);
    //     return { lessons: [] };
    //   }
    // },

    // Get books by subject (category)
    // getBooksBySubject: async (subjectId: string): Promise<{
    //   books: Book[];
    //   hasMore: boolean;
    // }> => {
    //   try {
    //     const response = await api.get(`/feed/librarys/subject/${subjectId}`);
    //     return {
    //       books: response.data.data || response.data,
    //       hasMore: response.data.hasMore || false,
    //     };
    //   } catch (error) {
    //     console.error("Error fetching books by category:", error);
    //     throw new Error("Failed to fetch books by category");
    //   }
    // },

    // Get books by lesson
    // getBooksByLesson: async (lessonId: string): Promise<{
    //   books: Book[];
    //   hasMore: boolean;
    // }> => {
    //   try {
    //     const response = await api.get(`/feed/librarys/lesson/${lessonId}`);
    //     return {
    //       books: response.data.data || response.data,
    //       hasMore: response.data.hasMore || false,
    //     };
    //   } catch (error) {
    //     console.error("Error fetching books by lesson:", error);
    //     throw new Error("Failed to fetch books by lesson");
    //   }
    // },

    // Filter books
    // filterBooks: async (filters: {
    //   subjectId?: string;
    //   lessonId?: string;
    //   grade?: string;
    //   searchQuery?: string;
    // }): Promise<{
    //   books: Book[];
    //   hasMore: boolean;
    // }> => {
    //   try {
    //     const response = await api.post(`/feed/librarys/filter`, filters);
    //     return {
    //       books: response.data.data || response.data,
    //       hasMore: response.data.hasMore || false,
    //     };
    //   } catch (error) {
    //     console.error("Error filtering books:", error);
    //     throw new Error("Failed to filter books");
    //   }
    // },

    // Get recommended books (using filter)
    // getRecommendedBooks: async (): Promise<{
    //   books: Book[];
    //   hasMore: boolean;
    // }> => {
    //   try {
    //     // Filter for recommended books
    //     const response = await api.post(`/feed/librarys/filter`, {
    //       isRecommended: true,
    //     });
    //     return {
    //       books: response.data.data || response.data,
    //       hasMore: response.data.hasMore || false,
    //     };
    //   } catch (error) {
    //     console.error("Error fetching recommended books:", error);
    //     throw new Error("Failed to fetch recommended books");
    //   }
    // },
  };
};