import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import HintBox from "@/components/pages/docs/boxes/HintBox";
import SummaryBox from "@/components/pages/docs/boxes/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";
import { div } from "three/tsl";
import { p, ul } from "framer-motion/client";


const EvolutionQA = () => {

  const practiceExercises: PracticeExercise[] = [

    {
      id: "ex1",
      title: "",
      description: "សំណួរទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="p1">ភស្តុតាងអ្វីខ្លះដែលបញ្ជាក់ថាភាវៈរស់វិវត្ត?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="p1">ភស្តុតាងដែលបញ្ជាក់ថាភាវៈរស់វិវត្ត:</p>
          <p key="p2">ផូស៊ីល</p>
          <p key="p3">ការលូតលាស់អំប្រ៊ីយ៉ុងសត្វឆ្អឹងកងប្រភេទផ្សេងៗ តាមកាយវិភាគវិទ្យាប្រៀបធៀប</p>
          <p key="p4">ភាពដូចគ្នានៃរូបផ្គុំសារពាង្គកាយ។</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "",
      description: "សំណួរទី ២",
      problemType: "Second Exercise",
      problems: [
        <p key="p1">តើកត្តាអ្វីខ្លះដែលបណ្តាលឲ្យកើតមានភាវៈរស់ប្រភេទថ្មី? ចូររៀបរាប់ ។</p>
      ],
      answers: [
        <div className="flex flex-col gap-2 items-start" key="a1">
          <p key="p1">កត្តាដែលធ្វើឲ្យកើតប្រភេទថ្មីមានពីរគឺ៖</p>
          <ul className="list-disc pl-5 flex flex-col gap-3 items-start">
            <li key="p1">កត្តារបាំងភូមិសាស្ត្រ :</li>
            <p>_ ពពួកផ្សេងៗត្រូវបែកចេញពីគ្នា ហើយមិនអាចមានទំនាក់ទំនងជាមួយគ្នា។ ក្រោមឥទ្ធិពលនៃជម្រើសនៃធម្មជាតិ ពពួកនីមួយៗមានលក្ខណៈបន្សំទៅនឹងមជ្ឈដ្ឋានរៀងៗខ្លួន។ ឆ្លងកាត់រយៈពេលដ៏យូរមកពពួកទាំងនោះមានលក្ខណៈខុសគ្នាកាន់តែច្រើនឡើងៗ ហើយមិនអាចបន្តពូជជាមួយគ្នា ដូច្នេះក៏ក្លាយជាប្រភេទផ្សេងៗពីគ្នា។</p>
            <li>កត្តារបាំងជីវសាស្ត្រ:</li>
            <p>_ ឯកត្តមានរូបរាង និងទំហំប្រដាប់បន្តពូជខុសគ្នា។</p>
            <p>_ ឯកត្តធ្វើការបន្តពូជនៅរដូវនិងខែខុសគ្នា។</p>
            <p>_ ការទាក់ទាញរវាងសត្វញី និងសត្វឈ្មោលដើម្បីធ្វើការបន្តពូជមានរបៀបខុសគ្នា។</p>
            <p>_ កាម៉ែតញីឈ្មោលក្នុងប្រភេទខុសគ្នាមិនអាចរលាយចូលគ្នាបាន។</p>


          </ul>
        </div>

      ]
    },
    {
      id: "ex3",
      title: "",
      description: "សំណួរទី ៣",
      problemType: "Third Exercise",
      problems: [
        <p key="p1">ដូចម្តេចដែលហៅថាបម្រែបម្រួល? តើបម្រែបម្រួលបណ្តាលមកពីអ្វី?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="p2">បម្រែបម្រួលជាភាពខុសគ្នារវាងឯកត្តះនៅក្នុងប្រភេទតែមួយ។ បម្រែបម្រួលបណ្តាលមកពីមុយតាស្យុងសែន និងបន្សំថ្មីនៃសែនក្នុងពេលមេយ៉ូស និងក្នុងពេលបង្កកំណើត។</p>
        </div>
      ]
    },
    {
      id: "ex4",
      title: "",
      description: "សំណួរទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <p key="p1">តើការសង្កេតពីការលូតលាស់អំប្រ៊ីយ៉ុងនៃសត្វឆ្អឹងកងផ្សេងៗនៅដំណាក់ដំបូង នាំឲ្យយើងសន្និដ្ឋានដូចម្តេចដែរ?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p>យើងសង្កេតឃើញថា នៅដំណាក់លូតលាស់ដំបូងអំប្រ៊ីយ៉ុងនៃសត្វឆ្អឹងកងថ្នាក់ប្រាំថ្នាក់មានលក្ខណះដូចគ្នា(មានកន្ទុយ រង្វះស្រកីនៅសងខាងដើមក)។ ដូចនេះយើងសន្និដ្ឋានថាគ្រប់ប្រភេទនៃសត្វឆ្អឹងកងមានបុព្វរួមតែមួយ។</p>
        </div>
      ]
    },
    {
      id: "ex5",
      title: "",
      description: "សំណួរទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <p key="p1">តើប្រភេទជាអ្វី?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="p2">ប្រភេទ ជាក្រុមសារពាង្គកាយដែលមានរូបរាងស្រដៀងគ្នា ហើយធ្វើការបន្តពូជជាមួយគ្នាបាន ដោយបង្កើតកូនចៅដែលអាចបន្តពូជបាន។</p>
        </div>
      ]
    },
    {
      id: "ex6",
      title: "",
      description: "សំណួរទី ៦",
      problemType: "Sixth Exercise",
      problems: [
        <p key="p1">ក. តើកត្តាអ្វីខ្លះដែលជុំរុញឲ្យមានការកកើតប្រភេទថ្មីៗ?</p>,
        <p key="p2">ខ. តើកត្តារបាំងភូមិសាស្ត្រមានអ្វីខ្លះ?</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col gap-3 text-[15px]">
          <p key="p1">ក. កត្តាដែលជុំរុញឲ្យមានការកកើតប្រភេទថ្មីៗគឺ កត្តារបាំងភូមិសាស្ត្រ និងកត្តារបាំងជីវសាស្ត្រ។</p>
        </div>,
        <div key="a2" className="flex flex-col gap-3 text-[15px]">
          <p key="p2">ខ. កត្តារបាំងភូមិសាស្ត្រគឺ ភ្នំទឹកកក ភ្នំភ្លើង ដៃសមុទ្រ។</p>
        </div>,
      ]
    },
    {
      id: "ex7",
      title: "",
      description: "សំណួរទី ៧",
      problemType: "Seventh Exercise",
      problems: [
        <p key={"q1"}>ហេតុដូចម្តេចបានជារបាំងភូមិសាស្ត្រអាចធ្វើឲ្យកើតប្រភេទថ្មីៗ?</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col gap-3 text-[15px]">
          <p key="p1">កាលណាមានរបាំងភូមិសាស្ត្រ ពពួកផ្សេងៗត្រូវបែកចេញពីគ្នា ហើយមិនអាចមានទំនាក់ទំនងជាមួយគ្នា។ ក្រោម
            ឥទ្ធិពលនៃជម្រើសដោយធម្មជាតិ ពពួកនីមួយៗមានលក្ខណះបន្សំទៅនឹងមជ្ឈដ្ឋានរៀងៗខ្លួន។ ឆ្លងកាត់តាមរយះដ៏យូរ
            មក ពពួកទាំងនោះមានលក្ខណះខុសគ្នាកាន់តែច្រើនឡើងៗ ហើយមិនអាចបន្តពូជជាមួយគ្នាបាន ដូច្នេះក៏ក្លាយជាប្រភេទផ្សេងគ្នា។</p>
        </div>
      ]
    },
    {
      id: "ex8",
      title: "",
      description: "សំណួរទី ៨",
      problemType: "Eighth Exercise",
      problems: [
        <p key="p1">តើរបាំងជីវសាស្ត្រមានអ្វីខ្លះ?</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col gap-3 text-[15px]">
          <p key="p1">កត្តារបាំងជីវសាស្ត្រគឺ:</p>
          <ul className="list-disc pl-5 flex flex-col gap-3 items-start">
            <li key="p1">ឯកត្តះមានរូបរាងនិងទំហំប្រដាប់បន្តពូជខុសគ្នា។</li>
            <li key="p2">ឯកត្តះធ្វើការបន្តពូជនៅរដូវនិងខែខុសគ្នា។</li>
            <li key="p3">ការទាក់ទាញរវាងសត្វញីនិងសត្វឈ្មោល ដើម្បីធ្វើការបន្តពូជរបៀបខុសគ្នា។</li>
            <li key="p4">កាម៉ែតញីឈ្មោលក្នុងប្រភេទខុសគ្នា មិនអាចរលាយចូលគ្នាបាន។</li>
          </ul>
        </div>
      ]
    },
    {
      id: "ex9",
      title: "",
      description: "សំណួរទី ៩",
      problemType: "Ninth Exercise",
      problems: [
        <p key={"q1"}>តើផូស៊ីលផ្តល់ភស្តុតាងនៃការវិវត្តដូចម្តេចខ្លះ?</p>
      ],
      answers: [
        <div key={"a1"} className="flex flex-col gap-3 text-[15px]">
          <p key={"p1"}>ផូស៊ីលផ្តល់ភស្តុតាងនៃការវិវត្តះ :</p>
          <ul className="list-disc pl-5 flex flex-col gap-3 items-start">
            <li key={"p1"}>ឲ្យអ្នកវិទ្យាសាស្ត្រអាចសិក្សាពីប្រវត្តិនៃការវិវត្តរបស់ភាវៈរស់នៅលើផែនដី ក៏អាចឲ្យស្គាល់ប្រវត្តិនៃការកកើត ការរីកចម្រើន និងការរលត់ផុតពូជនៃប្រភេទភាវៈរស់ខ្លះៗ។</li>
            <li>ជាឯកសារដ៏មានតម្លៃសម្រាប់សិក្សាពីប្រវត្តិផែនដី ប្រភេទផូស៊ីល ដែលរស់នៅក្នុងសម័យកាលណាមួយនៃធរណីកាលបង្ហាញនូវលក្ខណះអាកាសធាតុនាសម័យកាលនីមួយៗ។</li>
          </ul>
        </div>
      ]
    },
    {
      id: "ex10",
      title: "",
      description: "សំណួរទី ១០",
      problemType: "Tenth Exercise",
      problems: [
        <p key={"q1"}>តើការបង្កើតកូនចៅហួសប្រមាណមាននាទីដូចម្តេចក្នងការវិវត្ត?</p>
      ],
      answers: [
        <div key={"a1"} className="flex flex-col gap-3 text-[15px]">
          <p key={"p1"}>ការបង្កើតកូនចៅហួសប្រមាណពីបរិមាណអាហារ និងកន្លែងរស់នៅ នាំឲ្យមានការប្រជែងរស់នៅជម្រើសដោយ
            ធម្មជាតិ។ ភាវៈរស់ដែលមានបម្រែបម្រួលគឺ មានលក្ខណះអាចបន្សំនឹងមជ្ឈដ្ឋានរស់នៅ ហើយបន្តពូជ និងបញ្ជូនលក្ខណះ
            របស់ខ្លួនទៅសន្ដានក្រោយ។ ឆ្លងកាត់ច្រើនជំនាន់មក ចំពោះប្រភេទភាវៈរស់មួយ លក្ខណះមានប្រយោជន៍ត្រូវបានប្រមូល
            គរផ្តុំ ឯលក្ខណះគ្មានប្រយោជន៍ត្រូវបានបាត់បង់។</p>
        </div>
      ]
    },
    {
      id: "ex11",
      title: "",
      description: "សំណួរទី ១១",
      problemType: "Eleventh Exercise",
      problems: [
        <p key={"q1"}>ដូចម្តេចដែលហៅថាសរីរាង្គអូម៉ូឡូក?</p>
      ],
      answers: [
        <div key={"a1"} className="flex flex-col gap-3 text-[15px]">
          <p>ដែលហៅថាសរីរាង្គអូម៉ូឡូកគឺជាសរីរាង្គដែលមានឆ្អឹង ខាងក្នុងប្រហាក់ប្រហែលឬដូចគ្នាស ប៉ុន្ដែមានមុខងារខុសគ្នា ។ សរីរាង្គអាណាឡូកគឺជាសរីរាង្គដែលមាននាទីដូចគ្នា តែមានទម្រង់និងលក្ខណៈខុសគ្នា ។</p>
        </div>
      ]
    },
  ];
  return (
    <div>
      <>
        <TopicPracticeBox exercises={practiceExercises} />
      </>
    </div>
  )
}

export default EvolutionQA
