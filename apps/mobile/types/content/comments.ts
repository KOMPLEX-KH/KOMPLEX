import { Media } from "./media";

export interface Comment {
    id: number;
    userId: number;
    profileImage: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    media: Media[];
    username: string;
    isLiked: boolean;
  }