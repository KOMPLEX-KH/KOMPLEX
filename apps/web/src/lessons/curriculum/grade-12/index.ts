import { Grade } from "@/types/docs/curriculum";
import { math } from "./maths/index";
import { chemistry } from "./chemistry/index";
import { biology } from "./biology/index";
import { physics } from "./physics/index";

export const grade12: Grade = {
  grade: "grade-12",
  gradeKhmer: "ថ្នាក់ទី១២",
  content: [math, physics, chemistry, biology],
};
