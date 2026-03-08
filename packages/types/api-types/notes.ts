import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type MeNotesResponse = GetApiSchema<typeof SchemaMap.MeNotesResponse>;
export type Note = MeNotesResponse["data"][number];