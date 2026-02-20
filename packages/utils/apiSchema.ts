import type { components } from "../types/auto-api-types/index";


export type GetApiSchema<
    T extends SchemaKey
// @ts-ignore
> = components["schemas"][typeof SchemaMap[T]];


export const SchemaMap = {
    // Auth
    SignupResponse: "SignupResponse",
    SignupBody: "SignupBody",
    SocialLoginResponse: "SocialLoginResponse",
    SocialLoginBody: "SocialLoginBody",

    // Upload
    UploadUrlResponse: "UploadUrlResponse",
    UploadUrlBody: "UploadUrlBody",

    // Feed - Videos
    FeedVideoItemSchema: "FeedVideoItemSchema",
    RecommendedVideosItemSchema: "RecommendedVideosItemSchema",
    FeedVideoCommentItemResponseSchema: "FeedVideoCommentItemResponseSchema",
    FeedVideoReplyItemResponseSchema: "FeedVideoReplyItemResponseSchema",

    // Feed - Forums
    FeedForumItemSchema: "FeedForumItemSchema",
    FeedForumItemResponseSchema: "FeedForumItemResponseSchema",
    FeedForumCommentItemResponseSchema: "FeedForumCommentItemResponseSchema",
    FeedForumReplyItemResponseSchema: "FeedForumReplyItemResponseSchema",

    // Feed - News (fixed: FeedNewsItemSchema exists, not FeedNewsResponse)
    FeedNewsResponse: "FeedNewsItemSchema", // Backward compatibility alias
    FeedNewsItemSchema: "FeedNewsItemSchema",

    // Feed - Exercises
    FeedExercisesResponse: "FeedExercisesResponse",

    // Feed - Curriculum (fixed: returns GradeSchema[], not FeedCurriculumsResponseSchema)
    FeedCurriculumsResponseSchema: "GradeSchema", // Backward compatibility alias
    GradeSchema: "GradeSchema",
    SubjectSchema: "SubjectSchema",
    LessonSchema: "LessonSchema",
    TopicSchema: "TopicSchema",
    CurriculumTopicResponse: "CurriculumTopicResponse",

    // Feed - Library/Books
    BookItemSchema: "BookItemSchema",

    // Common
    MediaSchema: "MediaSchema",

    // Search (inline types - keeping for backward compatibility but these don't exist as schemas)
    SearchVideosResponse: "FeedVideoItemSchema", // Alias to closest match
    SearchForumsResponse: "FeedForumItemSchema", // Alias to closest match
    SearchNewsResponse: "FeedNewsItemSchema", // Alias to closest match

    // User Profile
    UserProfileResponse: "UserProfileResponse",

    // User Content (inline types - keeping for backward compatibility)
    UserVideosResponse: "FeedVideoItemSchema", // Alias to closest match
    UserForumsResponse: "FeedForumItemSchema", // Alias to closest match

    // Me - User Info
    MeResponse: "MeResponse",
    MeProfileResponse: "MeProfileResponse",
    MeDashboardResponse: "MeDashboardResponse",
    MeLastAccessedResponseSchema: "MeLastAccessedResponseSchema",
    LastAccessedItemSchema: "LastAccessedItemSchema",

    // Me - Video History (inline type - keeping for backward compatibility)
    MeVideoHistoryResponse: "FeedVideoItemSchema", // Alias to closest match

    // Me - Feedback
    MePostFeedbackResponse: "MePostFeedbackBody", // Response is unknown[], using body as placeholder
    MePostFeedbackBody: "MePostFeedbackBody",

    // Me - Follow (fixed: returns arrays of item schemas)
    MeFollowersResponse: "MeFollowersItemSchema", // Backward compatibility alias
    MeFollowingResponse: "MeFollowingItemSchema", // Backward compatibility alias
    MeFollowersItemSchema: "MeFollowersItemSchema",
    MeFollowingItemSchema: "MeFollowingItemSchema",
    MeFollowUserResponse: "MePostFeedbackBody", // Response is unknown, using placeholder
    MeUnfollowUserResponse: "MePostFeedbackBody", // Response is unknown, using placeholder

    // Me - Videos
    MeGetMyVideosResponse: "MeGetMyVideosResponse",
    MeMyVideoItem: "MeMyVideoItem",
    MePostVideoResponse: "MePostVideoResponse",
    MePostVideoBody: "MePostVideoBody",
    MeDeleteVideoResponse: "MeDeleteVideoResponse",

    // Me - Forums (inline types - keeping for backward compatibility)
    MeGetForumsResponse: "FeedForumItemSchema", // Alias to closest match
    MeForumItem: "FeedForumItemSchema", // Alias to closest match
    MePostForumResponse: "MePostFeedbackBody", // Response is unknown, using placeholder
    MePostForumBody: "MePostForumBody",
    MeDeleteForumResponse: "MePostFeedbackBody", // Response is unknown, using placeholder
    MeLikeForumResponse: "MePostFeedbackBody", // Response is unknown, using placeholder
    MePostForumCommentResponse: "MePostFeedbackBody", // Response is unknown, using placeholder
    MePostForumCommentBody: "MePostForumCommentBody",

    // Me - Notes
    MeNotesResponse: "MeNotesResponse",

    // Me - AI General (fixed: returns single item schema, not array response)
    MeAiGeneralTabsResponse: "MeAiGeneralTabItemSchema", // Backward compatibility alias
    MeAiGeneralTabItemSchema: "MeAiGeneralTabItemSchema",
    MeCreateAiGeneralTabResponse: "MeCreateAiGeneralTabResponse",
    MeCreateAiGeneralTabBody: "MeCreateAiGeneralTabBody",
    MeAiGeneralTabHistoryResponse: "MeAiGeneralTabHistoryItemSchema", // Backward compatibility alias
    MeAiGeneralTabHistoryItemSchema: "MeAiGeneralTabHistoryItemSchema",
    MePostAiGeneralResponse: "MePostAiGeneralResponse",
    MePostAiGeneralBody: "MePostAiGeneralBody",
    MeUpdateAiGeneralTabResponse: "MeUpdateAiGeneralTabResponse",
    MeUpdateAiGeneralTabBody: "MeUpdateAiGeneralTabBody",
    MeDeleteAiGeneralTabResponse: "MeDeleteAiGeneralTabResponse",
    MeRateAiGeneralResponse: "MeRateAiGeneralResponse",
    MeRateAiGeneralBody: "MeRateAiGeneralBody",

    // Me - AI Topics (fixed: returns single item schema, not array response)
    MeGetAiTopicsResponse: "MeAiTopicItemSchema", // Backward compatibility alias
    MeAiTopicItemSchema: "MeAiTopicItemSchema",
    MeAiTopicHistoryResponse: "MeAiTopicHistoryItem", // Backward compatibility alias
    MeAiTopicHistoryItem: "MeAiTopicHistoryItem",
    MeCallAiTopicResponse: "MeCallAiTopicResponse",
    MeCallAiTopicBody: "MeCallAiTopicBody",
    MeDeleteAiTopicResponse: "MeDeleteAiTopicResponse",
    MeRateAiTopicResponse: "MeRateAiTopicResponse",
    MeRateAiTopicBody: "MeRateAiTopicBody",
} as const;

export type SchemaKey = keyof typeof SchemaMap;

