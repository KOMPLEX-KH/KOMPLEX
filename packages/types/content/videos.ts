import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Comment } from "./comments";
import { Media } from "./media";

export interface ExerciseChoice {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExerciseQuestion {
  id: number;
  exerciseId: number;
  userId: number | null;
  title: string;
  questionType: string;
  section: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  choices: ExerciseChoice[];
}

export interface VideoExercise {
  id: number;
  videoId: number;
  userId: number;
  duration: number;
  title: string;
  description: string;
  subject: string;
  grade: string;
  createdAt: string;
  updatedAt: string;
  questions: ExerciseQuestion[];
}

type FeedVideosResponse = GetApiSchema<typeof SchemaMap.FeedVideosResponse>;
type FeedVideoItem = FeedVideosResponse["data"][number];

export type VideoPost = FeedVideoItem & {
  videoUrlForDeletion?: string;
  thumbnailUrlForDeletion?: string;
  isSave?: boolean;
  exercises?: VideoExercise[];
};

export interface VideoComment extends Comment {
  videoId: number;
}

type MeVideoHistoryResponse = GetApiSchema<typeof SchemaMap.MeVideoHistoryResponse>;
export type VideoHistory = MeVideoHistoryResponse["data"][number];

export interface VideoReply {
  id: number;
  userId: number;
  profileImage: string;
  videoCommentId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLiked: boolean;
}