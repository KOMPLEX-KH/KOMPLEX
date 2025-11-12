import api from "@/configs/axios";

// Import all service creators
import { createAuthService } from "./auth";
import { createUploadService } from "./upload";

// Feed services
import { createFeedBlogService } from "./feed/blogs";
import { createFeedExerciseService } from "./feed/exercises";
import { createFeedForumService } from "./feed/forums";
import { createFeedVideoService } from "./feed/videos";
import { createFeedCurriculumsService } from "./feed/curriculums";
import { createFeedForumCommentService } from "./feed/forum-comments";
import { createFeedForumReplyService } from "./feed/forum-replies";
import { createFeedVideoCommentService } from "./feed/video-comments";
import { createFeedVideoReplyService } from "./feed/video-replies";
import { createFeedSearchBlogService } from "./feed/search/blogs";
import { createFeedSearchForumService } from "./feed/search/forums";
import { createFeedSearchVideoService } from "./feed/search/videos";

// Me services
import { createMeBlogService } from "./me/blogs";
import { createMeAiService } from "./me/ai";
import { createMeExerciseService } from "./me/exercises";
import { createMeFollowService } from "./me/follow";
import { createMeForumService } from "./me/forums";
import { createMeForumCommentService } from "./me/forum-comments";
import { createMeForumReplyService } from "./me/forum-replies";
import { createMeVideoService } from "./me/videos";
import { createMeVideoCommentService } from "./me/video-comments";
import { createMeVideoReplyService } from "./me/video-replies";
import { createMeVideoHistoryService } from "./me/video-history";

// User services
import { createUserBlogService } from "./user/blogs";
import { createUserForumService } from "./user/forums";
import { createUserProfileService } from "./user/profile";
import { createUserVideoService } from "./user/videos";

// Create service instances with the axios instance
export const authService = createAuthService(api);
export const uploadService = createUploadService(api);

// Feed services
export const feedBlogService = createFeedBlogService(api);
export const feedExerciseService = createFeedExerciseService(api);
export const feedForumService = createFeedForumService(api);
export const feedVideoService = createFeedVideoService(api);
export const feedCurriculumsService = createFeedCurriculumsService(api);
export const feedForumCommentService = createFeedForumCommentService(api);
export const feedForumReplyService = createFeedForumReplyService(api);
export const feedVideoCommentService = createFeedVideoCommentService(api);
export const feedVideoReplyService = createFeedVideoReplyService(api);
export const feedSearchBlogService = createFeedSearchBlogService(api);
export const feedSearchForumService = createFeedSearchForumService(api);
export const feedSearchVideoService = createFeedSearchVideoService(api);

// Me services
export const meBlogService = createMeBlogService(api);
export const meAiService = createMeAiService(api);
export const meExerciseService = createMeExerciseService(api);
export const meFollowService = createMeFollowService(api);
export const meForumService = createMeForumService(api);
export const meForumCommentService = createMeForumCommentService(api);
export const meForumReplyService = createMeForumReplyService(api);
export const meVideoService = createMeVideoService(api);
export const meVideoCommentService = createMeVideoCommentService(api);
export const meVideoReplyService = createMeVideoReplyService(api);
export const meVideoHistoryService = createMeVideoHistoryService(api);

// User services
export const userBlogService = createUserBlogService(api);
export const userForumService = createUserForumService(api);
export const userProfileService = createUserProfileService(api);
export const userVideoService = createUserVideoService(api);
