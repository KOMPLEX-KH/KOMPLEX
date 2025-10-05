import { Grade } from "@core-types/docs/curriculum";
import { math } from "./math";
import { chemistry } from "./chemistry";
import { biology } from "./biology";
import { physics } from "./physics";

export const grade10: Grade = {
  grade: "grade-10",
  gradeKhmer: "ថ្នាក់ទី១០",
  content: [math, physics, chemistry, biology],
};
