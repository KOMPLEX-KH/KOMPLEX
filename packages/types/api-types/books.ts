import { SchemaMap } from "../../utils/apiSchema";
import { GetApiSchema } from "../../utils/apiSchema";

type BookItemSchema = GetApiSchema<typeof SchemaMap.BookItemSchema>;
export type Book = BookItemSchema;