import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type MeResponse = GetApiSchema<typeof SchemaMap.MeResponse>;
export type User = MeResponse & {
  numberOfFollowers?: number;
  numberOfFollowing?: number;
  totalLikesAndSaves?: number;
  bio?: string;
  location?: string;
  isFollowing?: boolean;
  stats?: {
    blogs: number;
    videos: number;
    forums: number;
    exercises: number;
  };
};
