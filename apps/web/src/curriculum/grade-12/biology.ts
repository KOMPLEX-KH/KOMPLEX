import { Content, TopicComponent } from "@/types/docs/curriculum";
import dynamic from "next/dynamic";
import {
  Leaf,
  Flower2,
  Brain,
  Eye,
  Activity,
  Atom,
  Beaker,
  FlaskConical,
  Dna,
  Lightbulb,
  Microscope,
  Search,
  Hammer,
} from "lucide-react";
const GymnospermTypes: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/gymnosperms/GymnospermTypes"
    )
);
const GymnospermVegetativeOrgans: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/gymnosperms/GymnospermVegetativeOrgans"
    )
);
const GymnospermReproductiveOrgans: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/gymnosperms/GymnospermReproductiveOrgans"
    )
);
const GymnospermLifeCycle: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/gymnosperms/GymnospermLifeCycle"
    )
);
const ComingSoon: TopicComponent = dynamic(
  () => import("@components/pages/docs/common/ComingSoon")
);
const FormAminoAcid: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/aminoAcid/FormAminoAcid")
);
const TypesAminoAcid: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/aminoAcid/TypesAminoAcid")
);
const Peptide: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/aminoAcid/Peptide")
);
const StructureProtein: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/protein/StructureProtein")
);
const FunctionProtein: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/protein/FunctionProtein")
);
const ProteinDenaturation: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/protein/ProteinDenaturation"
    )
);
const EnzymeDefinition: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/enzymes/EnzymeDefinition")
);
const EnzymeFunction: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/enzymes/EnzymeFunction")
);
const CharacteristicEnzyme: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/enzymes/CharacteristicEnzyme"
    )
);
const ChemicalComposition: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/adn/ChemicalComposition")
);
const MolecularForm: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/adn/MolecularForm")
);
const DnaQuantity: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/adn/DnaQuantity")
);
const DnaVsProtein: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/geneExpression/DnaVsProtein"
    )
);
const GeneticCode: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/geneExpression/GeneticCode")
);
const Ribosome: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/geneExpression/Ribosome")
);
const Translation: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/geneExpression/Translation")
);
const PhenotypeExpression: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/geneExpression/PhenotypeExpression"
    )
);
const PlantBreeding: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/PlantBreeding"
    )
);
const AnimalBreeding: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/AnimalBreeding"
    )
);
const PlantOffspring: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/PlantOffspring"
    )
);
const AnimalOffspring: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/AnimalOffspring"
    )
);
const Polyploidy: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/biotechnology/Polyploidy")
);
const GeneTransferStages: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/GeneTransferStages"
    )
);
const GeneTransferExamples: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/GeneTransferExamples"
    )
);
const GeneticEngineering: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/biotechnology/GeneticEngineering"
    )
);
const Dangers: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/biotechnology/Dangers")
);
const Observations: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/darwinTheory/Observations")
);
const GalapagosOrganisms: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/darwinTheory/GalapagosOrganisms"
    )
);
const Evolution: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/darwinTheory/Evolution")
);
const NaturalSelection: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/darwinTheory/NaturalSelection"
    )
);
const DescriptionDarwin: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/evolutionEvidence/Description"
    )
);
const ComparativeStudy: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/evolutionEvidence/ComparativeStudy"
    )
);
const OriginOfSpecies: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/evolutionEvidence/OriginOfSpecies"
    )
);
const FossilFormation: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/flaskConical/FossilFormation"
    )
);
const FossilDating: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/flaskConical/FossilDating")
);
const FossilImportance: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/flaskConical/FossilImportance"
    )
);
const AngiospermVegetativeOrgan: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/angiosperm/AngiospermVegetativeOrgan"
    )
);
const AngiospermReproductiveOrgan: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/angiosperm/AngiospermReproductiveOrgan"
    )
);
const PollinationProcess: TopicComponent = dynamic(
  () =>
    import(
      "@components/pages/docs/grade-12/biology/angiosperm/PollinationProcess"
    )
);
const Reproduction: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/angiosperm/Reproduction")
);
const LifeCycle: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/angiosperm/LifeCycle")
);
const Comparision: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/angiosperm/Comparision")
);
const Advantage: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/angiosperm/Advantage")
);
const NoneSpine: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/NoneSpine")
);
const Spine: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/Spine")
);
const Role: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/Role")
);
const Neuron: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/Neuron")
);
const CentralNervous: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/CentralNervous")
);
const ADNFormulars: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/adn/ADNFormulars")
);
const QuestionAnswer: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/adn/QuestionAnswer")
);
const BigBrain: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/BigBrain")
);
const SmallBrain: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/SmallBrain")
);
const Medicine: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/Medicine")
);
const PeripheralNervous: TopicComponent = dynamic(
  () =>
    import("@components/pages/docs/grade-12/biology/nervous/PeripheralNervous")
);
const Back: TopicComponent = dynamic(
  () => import("@components/pages/docs/grade-12/biology/nervous/Back")
);

export const biology: Content = {
  subject: "biology",
  title: "ជីវវិទ្យា",
  englishTitle: "Biology",
  icon: Leaf,
  lessons: [
    {
      lesson: "gymnosperms",
      title: "ស៊ីមណូស្ពែម",
      englishTitle: "Gymnosperms",
      icon: Leaf,
      topics: [
        {
          title: "ប្រភេទនៃស៊ីមណូស្ពែម",
          englishTitle: "gymnosperms-types",
          component: GymnospermTypes,
        },
        {
          title: "សរីរាង្គលូតលាស់",
          englishTitle: "gymnosperms-vegetative-organs",
          component: GymnospermVegetativeOrgans,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "gymnosperms-reproductive-organs",
          component: GymnospermReproductiveOrgans,
        },
        {
          title: "វដ្តជីវិតស៊ីមណូស្ពែម",
          englishTitle: "gymnosperms-life-cycle",
          component: GymnospermLifeCycle,
        },
      ],
    },
    {
      lesson: "angiosperms",
      title: "អង់ស្យូស្ពែម",
      englishTitle: "Angiosperms",
      icon: Flower2,
      topics: [
        {
          title: "សរីរាង្គលូតលាស់",
          englishTitle: "angiosperms-vegetative-organs",
          component: AngiospermVegetativeOrgan,
        },
        {
          title: "សរីរាង្គបន្តពូជ",
          englishTitle: "angiosperms-reproductive-organs",
          component: AngiospermReproductiveOrgan,
        },
        {
          title: "ដំណើរលំអង",
          englishTitle: "angiosperms-pollination-process",
          component: PollinationProcess,
        },
        {
          title: "ការបន្តពូជរបស់អង់ស្យូស្ពៃម",
          englishTitle: "angiosperms-reproduction",
          component: Reproduction,
        },
        {
          title: "វដ្តជីវិតរបស់រុក្ខជាតិមានផ្កា",
          englishTitle: "angiosperms-flowering-plants-life-cycle",
          component: LifeCycle,
        },
        {
          title: "ប្រៀបធៀបម៉ូណូកូទីលេដូននិងឌីកូទីលេដូន",
          englishTitle: "angiosperms-monocot-dicot-comparison",
          component: Comparision,
        },
        {
          title: "ផលប្រយោជន៍របស់រុក្ខជាតិមានគ្រាប់",
          englishTitle: "angiosperms-seed-plants-benefits",
          component: Advantage,
        },
      ],
    },
    {
      lesson: "nervous-system",
      title: "តម្រូវប្រសាទ",
      englishTitle: "Medicine and Nervous System",
      icon: Brain,
      topics: [
        {
          title: "តម្រូវប្រសាទសត្វឥតឆ្អឹងកង",
          englishTitle: "nervous-system-invertebrates",
          component: NoneSpine,
        },
        {
          title: "តម្រូវប្រសាទសត្វឆ្អឹងកង",
          englishTitle: "nervous-system-vertebrates",
          component: Spine,
        },
        {
          title: "នាទីប្រព័ន្ធប្រសាទ",
          englishTitle: "nervous-system-function",
          component: Role,
        },
        {
          title: "ណឺរ៉ូន (ឬកោសិកាប្រសាទ)",
          englishTitle: "neuron-nerve-cell",
          component: Neuron,
        },
        {
          title: "ខួរក្បាល",
          englishTitle: "central-nervous-system",
          component: CentralNervous,
        },
        {
          title: "ខួរធំ",
          englishTitle: "brain",
          component: BigBrain,
        },
        {
          title: "ខួរតូច",
          englishTitle: "smallbrain",
          component: SmallBrain,
        },
        {
          title: "ខួរឆ្អឹងខ្នង",
          englishTitle: "spinal-cord",
          component: Back,
        },
        {
          title: "បរិមណ្ឌលប្រសាទ",
          englishTitle: "peripheral-nervous-system",
          component: PeripheralNervous,
        },
        {
          title: "ថ្នាំនិងប្រព័ន្ធប្រសាទ",
          englishTitle: "nervous-system-and-drugs",
          component: Medicine,
        },
      ],
    },
    {
      lesson: "sensory-organs",
      title: "សរីរាង្គវិញ្ញាណ",
      englishTitle: "Sensory Organs",
      icon: Eye,
      topics: [
        {
          title: "ចក្ខុវិញ្ញាណ",
          englishTitle: "visual-sense-sight",
          component: ComingSoon,
        },
        {
          title: "សោតវិញ្ញាណ",
          englishTitle: "auditory-sense-hearing",
          component: ComingSoon,
        },
        {
          title: "ឃានវិញ្ញាណ",
          englishTitle: "olfactory-sense-smell",
          component: ComingSoon,
        },
        {
          title: "ជិវ្ហាវិញ្ញាណ",
          englishTitle: "gustatory-sense-taste",
          component: ComingSoon,
        },
        {
          title: "កាយវិញ្ញាណ",
          englishTitle: "tactile-sense-touch",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "endocrine-system",
      title: "ប្រពន្ធ័អង់ដូគ្រីន",
      englishTitle: "Endocrine System",
      icon: Activity,
      topics: [
        {
          title: "ក្រពេញ",
          englishTitle: "gland",
          component: ComingSoon,
        },
        {
          title: "អរម៉ូន",
          englishTitle: "hormone",
          component: ComingSoon,
        },
        {
          title: "ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន",
          englishTitle: "control-of-endocrine-system",
          component: ComingSoon,
        },
        {
          title: "អីប៉ូតាឡាមុស",
          englishTitle: "hypothalamus",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញអីប៉ូភីស",
          englishTitle: "hypophysis-pituitary-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញទីរ៉ូអ៊ុត ",
          englishTitle: "thyroid-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញប៉ារ៉ាទីវ៉ូអ៊ុត ",
          englishTitle: "parathyroid-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញលើតម្រងនោម ",
          englishTitle: "adrenal-glands",
          component: ComingSoon,
        },
        {
          title: "លំពែង ",
          englishTitle: "pancreas",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញភេទ",
          englishTitle: "gonads-sex-glands",
          component: ComingSoon,
        },
        {
          title: "ក្រពេញទីមុស",
          englishTitle: "thymus-gland",
          component: ComingSoon,
        },
        {
          title: "ក្រពះនិងពោះវៀនតូច",
          englishTitle: "stomach-and-small-intestine",
          component: ComingSoon,
        },
      ],
    },
    {
      lesson: "amino-acid",
      title: "អាសុីតអាមីណេ",
      englishTitle: "Amino Acid",
      icon: Atom,
      topics: [
        {
          title: "ទម្រង់អាស៊ីតអាមីណេ",
          englishTitle: "forms-of-amino-acids",
          component: FormAminoAcid,
        },
        {
          title: "ប្រភេទផ្សេងៗនៃអាស៊ីតអាមីណេ",
          englishTitle: "different-types-of-amino-acids",
          component: TypesAminoAcid,
        },
        {
          title: "ប៉ិបទីត",
          englishTitle: "peptide",
          component: Peptide,
        },
      ],
    },
    {
      lesson: "protein",
      title: "ប្រូតេអុីន",
      englishTitle: "Protein",
      icon: Beaker,
      topics: [
        {
          title: "រូបផ្គុំរបស់ប្រូតេអ៊ីន",
          englishTitle: "structure-of-protein",
          component: StructureProtein,
        },
        {
          title: "នាទីរបស់ប្រូតេអ៊ីន",
          englishTitle: "function-of-protein",
          component: FunctionProtein,
        },
        {
          title: "ការបាត់បង់គុណភាពរបស់ប្រូតេអ៊ីន",
          englishTitle: "protein-denaturation",
          component: ProteinDenaturation,
        },
      ],
    },
    {
      lesson: "enzymes",
      title: "អង់សុីម",
      englishTitle: "Enzymes",
      icon: Microscope,
      topics: [
        {
          title: "អ្វីជាអង់ស៊ីម?",
          englishTitle: "what-is-enzyme",
          component: EnzymeDefinition,
        },
        {
          title: "ចំណែកថាក់របស់អង់ស៊ីម",
          englishTitle: "enzyme-function",
          component: EnzymeFunction,
        },
        {
          title: "លក្ខណៈរបស់អង់ស៊ីម",
          englishTitle: "characteristics-of-enzymes",
          component: CharacteristicEnzyme,
        },
      ],
    },
    {
      lesson: "dna",
      title: "ADN ជាទម្រព័ត៏មានសេនេទិច",
      englishTitle: "DNA",
      icon: Dna,
      topics: [
        {
          title: "សមាសធាតុគីមីនៃព័ត៏មានសេនេទិច",
          englishTitle: "chemical-composition-of-genetic-information",
          component: ChemicalComposition,
        },
        {
          title: "ទម្រង់ម៉ូលេគុល ADN",
          englishTitle: "molecular-form-of-dna",
          component: MolecularForm,
        },
        {
          title: "ស្វ័យដំឡើងទ្វេ ADN",
          englishTitle: "quantity-of-dna-in-cell",
          component: DnaQuantity,
        },
        {
          title: "រូបមន្តសង្ខេប",
          englishTitle: "summary-of-dna-replication",
          component: ADNFormulars,
        },
        {
          title: "សំណួរ & លំហាត់",
          englishTitle: "dna-self-replication",
          component: QuestionAnswer,
        },
      ],
    },
    {
      lesson: "gene",
      title: "ការសម្ដែងចេញនៃសែន",
      englishTitle: "Gene Expression",
      icon: Activity,
      topics: [
        {
          title: "ភាពត្រូវគ្នានិងខុសគ្នានៃ ADN និងប្រូតេអ៊ីន",
          englishTitle: "dna-protein-comparison",
          component: DnaVsProtein,
        },
        {
          title: "រូបផ្តុំ ARN នាំសារ (ARNm)",
          englishTitle: "messenger-rna-mrna",
          component: ComingSoon,
        },
        {
          title: "ចលនការចម្លងក្រម",
          englishTitle: "transcription-process",
          component: ComingSoon,
        },
        {
          title: "ក្រមសេនេទិច",
          englishTitle: "genetic-code",
          component: GeneticCode,
        },
        {
          title: "រីបូសូម",
          englishTitle: "ribosome",
          component: Ribosome,
        },
        {
          title: "ARN ដឹកនាំ (ARNt)",
          englishTitle: "transfer-rna-trna",
          component: ComingSoon,
        },
        {
          title: "ចលនការបកប្រែក្រម",
          englishTitle: "translation-process",
          component: Translation,
        },
        {
          title: "តម្រូវនៃការសំដែងផេណូទីប",
          englishTitle: "requirements-for-phenotypic-expression",
          component: PhenotypeExpression,
        },
      ],
    },
    {
      lesson: "bio-technology",
      title: "បច្ចេកវិទ្យាជីវ",
      englishTitle: "Bio Technology",
      icon: Lightbulb,
      topics: [
        {
          title: "ការបង្កាត់ជ្រើសចំពោះរុក្ខជាតិ",
          englishTitle: "selective-breeding-plants",
          component: PlantBreeding,
        },
        {
          title: "ការបង្កាត់ជ្រើសចំពោះសត្វ",
          englishTitle: "selective-breeding-animals",
          component: AnimalBreeding,
        },
        {
          title: "កូនរុក្ខជាតិ",
          englishTitle: "plant-offspring",
          component: PlantOffspring,
        },
        {
          title: "កូនសត្វ",
          englishTitle: "animal-offspring",
          component: AnimalOffspring,
        },
        {
          title: "ប៉ូលីប្តូស៊ីឌី",
          englishTitle: "polyploidy",
          component: Polyploidy,
        },
        {
          title: "ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
          englishTitle: "stages-of-gene-transfer",
          component: GeneTransferStages,
        },
        {
          title: "ឧទាហរណ៍ផ្សេងៗក្នុងបន្ទេរសែន",
          englishTitle: "examples-in-gene-transfer",
          component: GeneTransferExamples,
        },
        {
          title: "វិស្វកម្មសេនេទិចក្នុងវិស័យ",
          englishTitle: "genetic-engineering-in-field",
          component: GeneticEngineering,
        },
        {
          title: "គ្រោះថ្នាក់",
          englishTitle: "dangers",
          component: Dangers,
        },
      ],
    },
    {
      lesson: "darwin-theory",
      title: "ទ្រិស្ដីលោកដាវីន",
      englishTitle: "Darwin Theory",
      icon: Search,
      topics: [
        {
          title: "ការសង្កេតរបស់ដាវិន",
          englishTitle: "darwins-observations",
          component: Observations,
        },
        {
          title: "ភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូស",
          englishTitle: "organisms-galapagos-islands",
          component: GalapagosOrganisms,
        },
        {
          title: "ការវិវត្ត",
          englishTitle: "evolution",
          component: Evolution,
        },
        {
          title: "ជម្រើសដោយធម្មជាតិ",
          englishTitle: "natural-selection",
          component: NaturalSelection,
        },
      ],
    },
    {
      lesson: "evolution-evidence",
      title: "ភស្ដុតាងនៃការវិវត្ត",
      englishTitle: "Evolution Evidence",
      icon: Hammer,
      topics: [
        {
          title: "បំណកស្រាយភស្ដុតាងនៃការវិវត្ត",
          englishTitle: "evolution-evidence-description",
          component: DescriptionDarwin,
        },
        {
          title: "ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេង",
          englishTitle: "comparative-study-between-species",
          component: ComparativeStudy,
        },
        {
          title: "ដើមកំណើតប្រភេទ",
          englishTitle: "birth-of-species",
          component: OriginOfSpecies,
        },
      ],
    },
    {
      lesson: "fossil",
      title: "កំណត់ត្រាផូសុីល",
      englishTitle: "Fossil",
      icon: FlaskConical,
      topics: [
        {
          title: "កំណផូសុីល",
          englishTitle: "fossil-formation",
          component: FossilFormation,
        },
        {
          title: "ការកំណត់អាយុផូសុីល",
          englishTitle: "fossil-dating",
          component: FossilDating,
        },
        {
          title: "សារសំខាន់នៃផូសុីល",
          englishTitle: "important-properties-of-fossil",
          component: FossilImportance,
        },
      ],
    },
  ],
};
