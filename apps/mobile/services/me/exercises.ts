import type { AxiosInstance } from "axios";
import type {
  ExerciseDashboard,
  ExerciseHistory,
  ExerciseWithAttempts,
  ExerciseReport,
} from "../../types/user-content/exercise";
import type { Exercise } from "../../types/content/exercises";

export const createMeExerciseService = (api: AxiosInstance) => {
  return {
    // Get exercise dashboard
    getExerciseDashboard: async (): Promise<ExerciseDashboard> => {
      try {
        const response = await api.get<ExerciseDashboard>(
          `/me/exercises/dashboard`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching exercise dashboard:", error);
        throw new Error("Failed to fetch exercise dashboard");
      }
    },

    // Get exercise history
    getExerciseHistory: async (): Promise<ExerciseHistory[]> => {
      try {
        const response = await api.get<ExerciseHistory[]>(
          `/me/exercises/history`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching exercise history:", error);
        throw new Error("Failed to fetch exercise history");
      }
    },

    // Get exercises with attempts by grade
    getExercisesWithAttempts: async (
      grade: string
    ): Promise<ExerciseWithAttempts[]> => {
      try {
        const response = await api.get<ExerciseWithAttempts[]>(
          `/feed/exercises/?grade=${grade}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching exercises with attempts:", error);
        throw new Error("Failed to fetch exercises with attempts");
      }
    },

    // Get exercise report by ID
    getExerciseReport: async (id: string): Promise<ExerciseReport> => {
      try {
        const response = await api.get<ExerciseReport>(`/me/exercises/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching exercise report:", error);
        throw new Error("Failed to fetch exercise report");
      }
    },

    // Update an exercise
    updateExercise: async (
      id: string,
      exerciseData: Partial<Exercise>
    ): Promise<Exercise> => {
      try {
        const response = await api.put(`/me/exercises/${id}`, exerciseData);
        return response.data;
      } catch (error) {
        console.error("Error updating exercise:", error);
        throw new Error("Failed to update exercise");
      }
    },

    // Delete an exercise
    deleteExercise: async (id: string): Promise<void> => {
      try {
        await api.delete(`/me/exercises/${id}`);
      } catch (error) {
        console.error("Error deleting exercise:", error);
        throw new Error("Failed to delete exercise");
      }
    },

    // Submit exercise results
    submitExercise: async (
      id: string,
      submissionData: {
        score: number;
        timeTaken: number;
        answers: { questionId: number; isCorrect: boolean }[];
      }
    ): Promise<void> => {
      try {
        await api.post(`/me/exercises/${id}/submit`, submissionData);
      } catch (error) {
        console.error("Error submitting exercise:", error);
        throw new Error("Failed to submit exercise");
      }
    },

    // USER CONTENT EXERCISES

    // Create a new exercise
    createExercise: async (
      exerciseData: Partial<Exercise>
    ): Promise<Exercise> => {
      try {
        const response = await api.post(`/me/exercises`, exerciseData);
        return response.data;
      } catch (error) {
        console.error("Error creating exercise:", error);
        throw new Error("Failed to create exercise");
      }
    },
  };
};
