import type { AxiosInstance } from "axios";

export const getAllMyNoteService = async (api: AxiosInstance) => {
    try {
    const response = await api.get("me/notes");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all notes:", error);
    return null;
  }
}


export const getMyNoteById = (api: AxiosInstance) => async (id: number | string) => {
    try{
        const response = await api.get(`me/notes/${id}`);
        return response.data;
    }catch(err){
        console.error(`Failed to fetch note with id ${id}:`, err);
        return null;
    }
}

export const createMyNote = (api: AxiosInstance) => async (noteData: any) => {
    try{
        const response = await api.post("me/notes", noteData);
        return response.data;
    }catch(err){
        console.error("Failed to create note:", err);
    return null;
    }
}

export const updateMyNote = (api: AxiosInstance) => async (
  id: number | string,
  noteData: any
) => {
    try{
        const response = await api.put(`me/notes/${id}`, noteData);
        return response.data;
    }catch(err){
        console.error(`Failed to update note with id ${id}:`, err);
        return null;
    }
}

export const deleteMyNote = (api: AxiosInstance) => async (
  id: number | string
) => {
    try{
        const response = await api.delete(`/notes/${id}`);
        return response.data;
    }catch(err){
        console.error(`Failed to delete note with id ${id}:`, err);
        return null;
    }
}