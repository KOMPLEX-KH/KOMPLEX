import { Content, TopicComponent } from "@/types/docs/curriculum";
import { FlaskConical } from "lucide-react";
import dynamic from "next/dynamic";
const RateChemicalReaction: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemica-kinetics/Rate-chemical-reaction"
    )
);
const Reaction_rate_factors: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemica-kinetics/Reaction_rate_factors"
    )
);
const Aqueous_solution: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous_solution"
    )
);
const Intermolecular_forces: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Intermolecular_forces"
    )
);
const Acid_base_theory: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Acid_base_theory"
    )
);
const AcidbaseReaction: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Acid_base_reaction"
    )
);
const Aqueous_solution_ph: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Aqueous_solution_ph"
    )
);
const Equilibrium_shift: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium_shift"
    )
);
const Nature_equilibrium: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemical_equilibrium/Nature_equilibrium"
    )
);
const Ester_fat_oil: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/organic_chemistry/Ester_fat_oil"
    )
);
const Aliphatic_acid_derivatives: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/organic_chemistry/Aliphatic_acid_derivatives"
    )
);
const Inorganic_compounds: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/organic_chemistry/Inorganic_compounds"
    )
);
const Chemica_Practice: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemica-kinetics/Kinetics-Practice"
    )
);
const AqueousPractice: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Aqueous-Practice"
    )
);
const Acid_base_practice: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Acid_base_practice"
    )
);
const EquilibriumPractice: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium-Practice"
    )
);
const OrganicPractice: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/organic_chemistry/Organic-Practice"
    )
);
const ChemisTables: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/aqueous_solution_forces/Table"
    )
);
const Acid_Base_Tables: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Acid_Base_Table"
    )
);
const Acid_base_titration: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/acid_base/Acid_base_titration"
    )
);
const Equilibrium_Acid_Base_Salt: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/chemistry/chemical_equilibrium/Equilibrium_Acid_Base_Salt"
    )
);

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
      topics: [
        {
          title: "ល្បឿនប្រតិកម្មគីមី",
          englishTitle: "RateChemicalReaction",
          component: RateChemicalReaction,
        },
        {
          title: "កត្តាជិះឥទ្ធិពលលេីល្បឿនប្រតិកម្ម",
          englishTitle: "FactorsAffectingtheRateofReaction",
          component: Reaction_rate_factors,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "ChemicaPractice",
          component: Chemica_Practice,
        },
      ],
    },
    {
      lesson: "aqueous_solution_intermolecular",
      title: "សមាសធាតុសូលូស្យុងក្នុងទឹកនិង កម្លាំងអន្តរម៉ូលេគុល",
      englishTitle: "AqueousSolutionsandIntermolecularForces",
      icon: FlaskConical,
      topics: [
        {
          title: "សមាសធាតុសូលូស្យុងក្នុងទឹក",
          englishTitle: "AqueousSolutions",
          component: Aqueous_solution,
        },
        {
          title: "កម្លាំងអន្តរម៉ូលេគុល",
          englishTitle: "intermolecular-forces",
          component: Intermolecular_forces,
        },
        {
          title: "តារាងសមាសធាតុ",
          englishTitle: "ChemisTables",
          component: ChemisTables,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "AqueousPractice",
          component: AqueousPractice,
        },
      ],
    },
    {
      lesson: "acid_base",
      title: "អាសុីត បាស",
      englishTitle: "Acid-Base",
      icon: FlaskConical,
      topics: [
        {
          title: "ទ្រឹស្តីអាសុីតបាស",
          englishTitle: "acid-base-theory",
          component: Acid_base_theory,
        },
        {
          title: "ប្រតិកម្មអាសុីតបាស",
          englishTitle: "acid-base-reactions",
          component: AcidbaseReaction,
        },
        {
          title: "សូលុយស្យុងក្នុងទឹកនិង ph",
          englishTitle: "aqueous-solutions-and-ph",
          component: Aqueous_solution_ph,
        },
        {
          title: "អត្រាកម្មអាសុីត-បាស",
          englishTitle: "Acid_base_titration",
          component: Acid_base_titration,
        },
        {
          title: "តារាងសមាសធាតុ",
          englishTitle: "Acid-Base-Table",
          component: Acid_Base_Tables,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "Acid_base_practice",
          component: Acid_base_practice,
        },
      ],
    },
    {
      lesson: "chemical_equilibrium",
      title: "លំនឹងគីមី",
      englishTitle: "ChemicalEquilibrium",
      icon: FlaskConical,
      topics: [
        {
          title: "ធម្មជាតិនៃលំនឹងគីមី",
          englishTitle: "nature-of-chemical-equilibrium",
          component: Nature_equilibrium,
        },
        {
          title: "ការរំកិលលំនឹង",
          englishTitle: "shift-in-equilibrium",
          component: Equilibrium_shift,
        },
        {
          title: "លំនឹងនៃអាសុីត បាស និងអំបិល",
          englishTitle: "Equilibrium_Acid_Base_Salt",
          component: Equilibrium_Acid_Base_Salt,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "EquilibriumPractice",
          component: EquilibriumPractice,
        },
      ],
    },
    {
      lesson: "organic_chemistry",
      title: "គីមីសរីរាង្គ",
      englishTitle: "OrganicChemistry",
      icon: FlaskConical,
      topics: [
        {
          title: "អេស្ទែ ខ្លាញ់និងប្រេង",
          englishTitle: "Ester_fats_and_oils",
          component: Ester_fat_oil,
        },
        {
          title: "ស្រលាយអាលីផាទិចអាសូត",
          englishTitle: "aliphatic_acid_derivatives",
          component: Aliphatic_acid_derivatives,
        },
        {
          title: "សមាសធាតុប្រហេីរ",
          englishTitle: "inorganic_compounds",
          component: Inorganic_compounds,
        },
        {
          title: "លំហាត់អនុវត្តន៍",
          englishTitle: "OrganicPractice",
          component: OrganicPractice,
        },
      ],
    },
  ],
};
