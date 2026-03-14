import api from "@/configs/axios";

// Import all service creators
import { createAuthService } from "@core-services/auth";
import { createUploadService } from "@core-services/upload";

// Feed services
import { createFeedNewsService } from "@core-services/feed/news";
import { createFeedExerciseService } from "@core-services/feed/exercises";
import { createFeedForumService } from "@core-services/feed/forums";
import { createFeedVideoService } from "@core-services/feed/videos";
import { createFeedBooksService } from "@core-services/feed/books";
import { createFeedCurriculumsService } from "@core-services/feed/curriculums";
import { createFeedForumCommentService } from "@core-services/feed/forum-comments";
import { createFeedForumReplyService } from "@core-services/feed/forum-replies";
import { createFeedVideoCommentService } from "@core-services/feed/video-comments";
import { createFeedVideoReplyService } from "@core-services/feed/video-replies";
import { createFeedSearchForumService } from "@core-services/feed/search/forums";
import { createFeedSearchVideoService } from "@core-services/feed/search/videos";
import { createFeedSearchNewsService } from "@core-services/feed/search/news";

// Me services
import { createMeBlogService } from "@core-services/me/blogs";
import { createMeAiService } from "@core-services/me/ai";
import { createMeExerciseService } from "@core-services/me/exercises";
import { createMeFollowService } from "@core-services/me/follow";
import { createMeForumService } from "@core-services/me/forums";
import { createMeForumCommentService } from "@core-services/me/forum-comments";
import { createMeForumReplyService } from "@core-services/me/forum-replies";
import { createMeVideoService } from "@core-services/me/videos";
import { createMeVideoCommentService } from "@core-services/me/video-comments";
import { createMeVideoReplyService } from "@core-services/me/video-replies";
import { createMeVideoHistoryService } from "@core-services/me/video-history";
import { createMeLastAccessedService } from "@core-services/me/last-accessed";

// User services
import { createUserBlogService } from "@core-services/user/blogs";
import { createUserForumService } from "@core-services/user/forums";
import { createUserProfileService } from "@core-services/user/profile";
import { createUserVideoService } from "@core-services/user/videos";

// Create service instances with the axios instance
export const authService = createAuthService(api);
export const uploadService = createUploadService(api);

// Feed services
export const feedExerciseService = createFeedExerciseService(api);
export const feedForumService = createFeedForumService(api);
export const feedVideoService = createFeedVideoService(api);
export const feedBooksService = createFeedBooksService(api);
export const feedCurriculumsService = createFeedCurriculumsService(api);
export const feedNewsService = createFeedNewsService(api);
export const feedForumCommentService = createFeedForumCommentService(api);
export const feedForumReplyService = createFeedForumReplyService(api);
export const feedVideoCommentService = createFeedVideoCommentService(api);
export const feedVideoReplyService = createFeedVideoReplyService(api);
export const feedSearchForumService = createFeedSearchForumService(api);
export const feedSearchVideoService = createFeedSearchVideoService(api);
export const feedSearchNewsService = createFeedSearchNewsService(api);
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
export const meLastAccessedService = createMeLastAccessedService(api);

// User services
export const userBlogService = createUserBlogService(api);
export const userForumService = createUserForumService(api);
export const userProfileService = createUserProfileService(api);
export const userVideoService = createUserVideoService(api);
