import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

// Extract types from generated API schemas
type GradeSchema = GetApiSchema<typeof SchemaMap.GradeSchema>;
type SubjectSchema = GetApiSchema<typeof SchemaMap.SubjectSchema>;
type LessonSchema = GetApiSchema<typeof SchemaMap.LessonSchema>;
type TopicSchema = GetApiSchema<typeof SchemaMap.TopicSchema>;
type FeedCurriculumsResponseSchema = GetApiSchema<typeof SchemaMap.FeedCurriculumsResponseSchema>;
type CurriculumTopicResponseSchema = GetApiSchema<typeof SchemaMap.CurriculumTopicResponse>;

// Export with names matching usage
export type Grade = GradeSchema;
export type Subject = SubjectSchema;
export type Lesson = LessonSchema;
export type Topic = TopicSchema;
export type FeedCurriculumsResponse = FeedCurriculumsResponseSchema;
export type CurriculumTopicResponse = CurriculumTopicResponseSchema;
