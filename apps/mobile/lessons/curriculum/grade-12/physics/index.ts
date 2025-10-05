import { Content } from "@core-types/docs/curriculum";
import { Atom } from "lucide-react";
import { Thermodynamics } from "./Thermodynamics";
import { Waves } from "./Waves";
import { ElectricityMagnetism } from "./ElectricityMagnetism";

export const physics: Content = {
  subject: "physics",
  title: "រូបវិទ្យា",
  englishTitle: "Physics",
  icon: Atom,
  lessons: [
    {
      lesson: "thermodynamics",
      title: "ទែម៉ូឌីណាមិច",
      englishTitle: "Thermodynamics",
      icon: Atom,
      topics: Thermodynamics,
    },
    {
      lesson: "waves",
      title: "រលក",
      englishTitle: "Waves",
      icon: Atom,
      topics: Waves,
    },
    {
      lesson: "electricityMagnetism",
      title: "អគ្គិសនី និងម៉ាញេទិច",
      englishTitle: "ElectricityMagnetism",
      icon: Atom,
      topics: ElectricityMagnetism,
    },
  ],
};
