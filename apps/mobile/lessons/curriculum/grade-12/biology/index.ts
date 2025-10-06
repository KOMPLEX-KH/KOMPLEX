import { Content } from "@core-types/docs/curriculum";
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
} from "lucide-react";
import { Gymnosperms } from "./Gymnosperms";
import { Angiosperms } from "./Angiosperms";
import { NervousSystem } from "./NervousSystem";
import { SensoryOrgans } from "./SensoryOrgans";
import { EndocrineSystem } from "./EndocrineSystem";
import { AminoAcid } from "./AminoAcid";
import { Protein } from "./Protein";
import { Enzymes } from "./Enzymes";
import { DNA } from "./DNA";
import { Gene } from "./Gene";
import { BioTechnology } from "./BioTechnology";
import { DarwinTheory } from "./DarwinTheory";
import { Fossil } from "./Fossil";

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
      topics: Gymnosperms,
    },
    {
      lesson: "angiosperms",
      title: "អង់ស្យូស្ពែម",
      englishTitle: "Angiosperms",
      icon: Flower2,
      topics: Angiosperms,
    },
    {
      lesson: "nervous-system",
      title: "តម្រូវប្រសាទ",
      englishTitle: "Medicine and Nervous System",
      icon: Brain,
      topics: NervousSystem,
    },
    {
      lesson: "sensory-organs",
      title: "សរីរាង្គវិញ្ញាណ",
      englishTitle: "Sensory Organs",
      icon: Eye,
      topics: SensoryOrgans,
    },
    {
      lesson: "endocrine-system",
      title: "ប្រពន្ធ័អង់ដូគ្រីន",
      englishTitle: "Endocrine System",
      icon: Activity,
      topics: EndocrineSystem,
    },
    {
      lesson: "amino-acid",
      title: "អាសុីតអាមីណេ",
      englishTitle: "Amino Acid",
      icon: Atom,
      topics: AminoAcid,
    },
    {
      lesson: "protein",
      title: "ប្រូតេអុីន",
      englishTitle: "Protein",
      icon: Beaker,
      topics: Protein,
    },
    {
      lesson: "enzymes",
      title: "អង់សុីម",
      englishTitle: "Enzymes",
      icon: Microscope,
      topics: Enzymes,
    },
    {
      lesson: "dna",
      title: "ADN ជាទម្រព័ត៏មានសេនេទិច",
      englishTitle: "DNA",
      icon: Dna,
      topics: DNA,
    },
    {
      lesson: "gene",
      title: "ការសម្ដែងចេញនៃសែន",
      englishTitle: "Gene Expression",
      icon: Activity,
      topics: Gene,
    },
    {
      lesson: "bio-technology",
      title: "បច្ចេកវិទ្យាជីវ",
      englishTitle: "Bio Technology",
      icon: Lightbulb,
      topics: BioTechnology,
    },
    {
      lesson: "darwin-theory",
      title: "ទ្រិស្ដីលោកដាវីន",
      englishTitle: "Darwin Theory",
      icon: Search,
      topics: DarwinTheory,
    },
    {
      lesson: "fossil",
      title: "កំណត់ត្រាផូសុីល",
      englishTitle: "Fossil",
      icon: FlaskConical,
      topics: Fossil,
    },
  ],
};
