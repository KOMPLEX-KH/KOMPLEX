import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

// Extract types from generated API schemas
type GradeSchema = GetApiSchema<typeof SchemaMap.GradeSchema>;
type SubjectSchema = GetApiSchema<typeof SchemaMap.SubjectSchema>;
type LessonSchema = GetApiSchema<typeof SchemaMap.LessonSchema>;
type TopicSchema = GetApiSchema<typeof SchemaMap.TopicSchema>;
type CurriculumTopicResponseSchema = GetApiSchema<typeof SchemaMap.CurriculumTopicResponse>;
type LastAccessedItemSchema = GetApiSchema<typeof SchemaMap.LastAccessedItemSchema>;
type MeLastAccessedResponseSchema = GetApiSchema<typeof SchemaMap.MeLastAccessedResponseSchema>;

// Export with names matching usage
export type Grade = GradeSchema;
export type Subject = SubjectSchema;
export type Lesson = LessonSchema;
export type Topic = TopicSchema;
// FeedCurriculumsResponse is actually GradeSchema[] (array of GradeSchema)
export type FeedCurriculumsResponse = GradeSchema[];
export type CurriculumTopicResponse = CurriculumTopicResponseSchema;
export type LastAccessedItem = LastAccessedItemSchema;
export type MeLastAccessedResponse = MeLastAccessedResponseSchema;