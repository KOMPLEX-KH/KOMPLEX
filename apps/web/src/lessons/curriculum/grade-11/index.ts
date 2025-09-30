import { Grade } from "@/types/docs/curriculum";
import { math } from "./math";
import { chemistry } from "./chemistry";
import { biology } from "./biology";
import { physics } from "./physics";

export const grade11: Grade = {
  grade: "grade-11",
  gradeKhmer: "ថ្នាក់ទី១១",
  content: [math, physics, chemistry, biology],
};
