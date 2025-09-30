import { Content } from "@/types/docs/curriculum";
import { FlaskConical } from "lucide-react";
import { ChemicalKinetics } from "./ChemicalKinetics";
import { AqueousSolutionIntermolecular } from "./AqueousSolutionIntermolecular";
import { AcidBase } from "./AcidBase";
import { ChemicalEquilibrium } from "./ChemicalEquilibrium";
import { OrganicChemistry } from "./OrganicChemistry";

export const chemistry: Content = {
  subject: "chemistry",
  title: "គីមីវិទ្យា",
  englishTitle: "Chemistry",
  icon: FlaskConical,
  lessons: [
    {
      lesson: "ChemicalKinetics",
      title: "សុីនេទិចគីមី",
      englishTitle: "ChemicalKinetics",
      icon: FlaskConical,
      topics: ChemicalKinetics,
    },
    {
      lesson: "aqueous_solution_intermolecular",
      title: "សមាសធាតុសូលូស្យុងក្នុងទឹកនិង កម្លាំងអន្តរម៉ូលេគុល",
      englishTitle: "AqueousSolutionsandIntermolecularForces",
      icon: FlaskConical,
      topics: AqueousSolutionIntermolecular,
    },
    {
      lesson: "acid_base",
      title: "អាសុីត បាស",
      englishTitle: "Acid-Base",
      icon: FlaskConical,
      topics: AcidBase,
    },
    {
      lesson: "chemical_equilibrium",
      title: "លំនឹងគីមី",
      englishTitle: "ChemicalEquilibrium",
      icon: FlaskConical,
      topics: ChemicalEquilibrium,
    },
    {
      lesson: "organic_chemistry",
      title: "គីមីសរីរាង្គ",
      englishTitle: "OrganicChemistry",
      icon: FlaskConical,
      topics: OrganicChemistry,
    },
  ],
};
