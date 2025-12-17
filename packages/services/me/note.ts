import type { AxiosInstance } from "axios";
import {Note} from "../../types/content/notes";

export const getAllMyNoteService = async (api: AxiosInstance) => {
    try {
    const response = await api.get<Note[]>("me/notes");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all notes:", error);
    return null;
  }
}


export const getMyNoteById = (api: AxiosInstance) => async (id: number | string): Promise<Note | null> => {
    try{
        const response = await api.get<Note>(`me/notes/${id}`);
        return response.data;
    }catch(err){
        console.error(`Failed to fetch note with id ${id}:`, err);
        return null;
    }
}

export const createMyNote = (api: AxiosInstance) => async (noteData: Partial<Note>): Promise<Note | null> => {
    try{
        const response = await api.post<Note>("me/notes", noteData);
        return response.data;
    }catch(err){
        console.error("Failed to create note:", err);
    return null;
    }
}

export const updateMyNote = (api: AxiosInstance) => async (
  id: number | string,
  noteData: Partial<Note>
): Promise<{ message: string } | null> => {
    try{
        const response = await api.put<{ message: string }>(`me/notes/${id}`, noteData);
        return response.data;
    }catch(err){
        console.error(`Failed to update note with id ${id}:`, err);
        return null;
    }
}

export const deleteMyNote = (api: AxiosInstance) => async (
  id: number | string
): Promise<{ message: string } | null> => {
    try{
        const response = await api.delete<{ message: string }>(`/notes/${id}`);
        return response.data;
    }catch(err){
        console.error(`Failed to delete note with id ${id}:`, err);
        return null;
    }
}