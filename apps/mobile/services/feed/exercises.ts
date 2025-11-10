import type { AxiosInstance } from "axios";
import type {
  Exercise,
  ExerciseWithQuestions,
} from "../../types/content/exercises";

export const createFeedExerciseService = (api: AxiosInstance) => {
  return {
    // Get exercises by grade
    getExercisesByGrade: async (grade: string): Promise<Exercise> => {
      try {
        const response = await api.get<Exercise>(
          `/feed/exercises?grade=${grade}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching exercises by grade:", error);
        throw new Error("Failed to fetch exercises");
      }
    },

    // Get exercise by ID with questions
    getExerciseById: async (id: string): Promise<ExerciseWithQuestions> => {
      try {
        const response = await api.get<ExerciseWithQuestions>(
          `/feed/exercises/${id}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching exercise by ID:", error);
        throw new Error("Failed to fetch exercise");
      }
    },
  };
};
