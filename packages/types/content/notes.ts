export interface Note {
    id: number;                    
    title: string;
    content: string;
    topic: string;
    tags: string[];
    isArchived: boolean;
    isPinned: boolean;
    reminderAt: string | null;
    createdAt: string;    
    updatedAt: string;
}