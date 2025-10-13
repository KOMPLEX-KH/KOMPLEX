import { Grade } from "@core-types/docs/curriculum";
import { math } from "./math";
import { chemistry } from "./chemistry";
import { biology } from "./biology";
import { physics } from "./physics";

export const grade9: Grade = {
  grade: "grade-9",
  gradeKhmer: "ថ្នាក់ទី៩",
  content: [math, physics, chemistry, biology],
};
