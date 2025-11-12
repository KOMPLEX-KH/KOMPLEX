import { Media } from "./media";

export interface Blog {
  id: number;
  userId: number;
  profileImage: string;
  isFollowing: boolean;
  username: string;
  title: string;
  type: string;
  topic: string;
  description: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  isSaved: boolean;
  media: Media[];
}
