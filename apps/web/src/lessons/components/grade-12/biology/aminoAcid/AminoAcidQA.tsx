import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import HintBox from "@/components/pages/docs/boxes/HintBox";
import SummaryBox from "@/components/pages/docs/boxes/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";


const AminoAcidQA = () => {

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "",
      description: "សំណួរទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="q1">ដូចម្តេចដែលហៅថា ប៉ិបទីត? ចំណងប៉ិបទីត?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="q1">ដូចម្តេចដែលហៅថា ប៉ិបទីត? ចំណងប៉ិបទីត?</p>
          <p key="q2">ប៉ិបទីត ជាបណ្ដុំនៃការភ្ជាប់រវាងអាស៊ីតអាមីនេពីរ ឬច្រើន តែមិនលើសពី១០។</p>
          <p key="q3">ចំណងប៉ិបទីត ជាសម្ព័ន្ធកូវ៉ាឡង់ដែលភ្ជាប់រវាងបណ្តុំកាបុកស៊ីល (-COOH) នៃអាស៊ីតអាមីនេមួយ ទៅនឹងបណ្ដុំអាមីន <span className="text-[13px]"><InlineMath math="NH_{2}" /></span> នៃអាស៊ីតអាមីនេមួយទៀតដោយបាត់បង់មួយម៉ូលេគុលទឹក។</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "",
      description: "សំណួរទី ២",
      problemType: "Second Exercise",
      problems: [
        <p key="q1">ហេតុអ្វីបានជាគេនិយាយថា អាស៊ីតអាមីនេជាសារធាតុចំណូលទឹក?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="q1">បានជាគេនិយាយថាអាស៊ីតអាមីនេជាសារធាតុចំណូលទឹក ព្រោះវារលាយក្នុងទឹក ហើយអាចជ្រាបចូលតាមភ្នាស
            កោសិកា ចូលទៅក្នុងកោសិកាដោយងាយ។</p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "",
      description: "សំណួរទី ៣",
      problemType: "Third Exercise",
      problems: [
        <p key="q1">តើម៉ូលេគុលអាស៊ីតអាមីនេនីមួយៗផ្សំឡើងពីអ្វីខ្លះ? ចូរសរសេររូបមន្តទូទៅរបស់អាស៊ីតអាមីនេ។</p>,
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p>_ ម៉ូលេគុលអាស៊ីតអាមីនេនីមួយៗ ផ្សំឡើងពីកាបូនកណ្តាល ដោយភ្ជាប់អាតូមអមួយ បណ្ដុំកាបុកស៊ីល (-COOH)បណ្ដុំអាមីន <span className="text-[13px]"><InlineMath math="NH_{2}" /></span> និងរ៉ាឌីកាល់R។</p>
          <div className="flex items-start gap-3 flex-wrap">
            <p>_ រូបមន្តទូទៅអាសុីតអាមីនេ </p>
            <div className="flex items-start gap-1 text-[12px]">
              <InlineMath math="H_{2}N-" />
              <div className="flex flex-col gap-0">
                <InlineMath math="CH-COOH" />
                <InlineMath math="|" />
                <InlineMath math="R" />
              </div>
            </div>
          </div>
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "",
      description: "សំណួរទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <p key="q1">ហេតុអ្វីបានជាគេនិយាយថា តំណលំដាប់អាស៊ីតអាមីនេកំណត់ទម្រង់ និងនាទីរបស់ប្រូតេអ៊ុន?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p key="q1">បានជាគេនិយាយថាតំណលំដាប់អាស៊ីតអាមីនេកំណត់ទម្រង់ និងនាទីរបស់ប្រូតេអ៊ីន ពីព្រោះលំដាប់តម្រៀប
            អាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីនធ្វើឲ្យម៉ូលេគុលនេះមានទម្រង់ខុសៗគ្នា ហើយទម្រង់នេះជាអ្នកកំណត់នូវនាទីរបស់ប្រូតេអ៊ីន។</p>
        </div>
      ]
    },
    {
      id: "ex5",
      title: "",
      description: "សំណួរទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <p key={"q1"}>ចូរសរសេររូបមន្តឌីប៉ិបទីតដែលកើតឡើងពីការភ្ជាប់រវាងអាស៊ីតអាមីនេពីរ។</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <div className="flex items-start gap-1 text-[12px]">
            <InlineMath math="H_{2}N-" />
            <div className="flex flex-col gap-0">
              <InlineMath math="CH-CO-NH-" />
              <InlineMath math="|" />
              <InlineMath math="R_{1}" />
            </div>
            <div className="flex flex-col gap-0">
              <InlineMath math="CH-COOH" />
              <InlineMath math="|" />
              <InlineMath math="R_{2}" />
            </div>
          </div>
        </div>
      ]
    },
    {
      id: "ex6",
      title: "",
      description: "សំណួរទី ៦",
      problemType: "Sixth Exercise",
      problems: [
        <p key="q1">គេនិយាយថា អាស៊ីតអាមីនេមានលក្ខណះជាអាស៊ីតផង និងជាបាសផង។ តើពិតឬទេ? ចូរបញ្ជាក់អំណះអំណាងរបស់អ្នក។</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p>ពិត ពីព្រោះក្នុងម៉ូលេគុលអាស៊ីតអាមីនេមានបណ្ដុំកាបុកស៊ីល (-COOH)ផង និងបណ្ដុំអាមីន <span className="text-[13px]"><InlineMath math="NH_{2}" /></span> ផង។</p>
        </div>
      ]
    },
    {
      id: "ex7",
      title: "",
      description: "សំណួរទី ៧",
      problemType: "Seventh Exercise",
      problems: [
        <p key="q1">ហេតុអ្វីបានជាគេនិយាយថា អាស៊ីតអាមីនេជាអ្នកនាំសារ? ក្រៅពីអ្នកនាំសារ តើវាមាននាទីអ្វីទៀត។</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p>បានជាគេនិយាយថា អាស៊ីតអាមីនេជាអ្នកនាំសារ ពីព្រោះវាជាអ្នកបញ្ជូនព័ត៌មានប្រសាទ ហើយមានឥទ្ធិពលទៅ
            លើនាទីកោសិកាគោលដៅឬកោសិកាសាច់ដុំ។ ក្រៅពីអ្នកនាំសារ អាស៊ីតអាមីនេមាននាទីជាអ្នកដឹកនាំក្នុងមេតាបូលីស និងសម្របសម្រួលនាទីរបស់កោសិកា។</p>
        </div>
      ]
    },
    {
      id: "ex8",
      title: "",
      description: "សំណួរទី ៨",
      problemType: "Eighth Exercise",
      problems: [
        <p key="q1">ដូចម្តេចដែលហៅថា អាស៊ីតអាមីនេស្តង់ដា? អាស៊ីតអាមីនេគ្មានស្តង់ដា?</p>
      ],
      answers: [
        <div key={"a1"} className="flex flex-col gap-3 text-[15px]">
          <p>_ អាស៊ីតអាមីនេស្តង់ដា ជាអាស៊ីតអាមីនេទាំង២០ប្រភេទ ដែលជាធាតុបង្ករបស់ប្រូតេអ៊ីនគឺ វាមានក្រមសេនេទិចជាអ្នកកំណត់។</p>
          <p>_ អាស៊ីតអាមីនេគ្មានស្តង់ដា ជាអាស៊ីតអាមីនេដែលចាំបាច់ក្នុងមេតាបូលីសនៃកោសិកា ប៉ុន្តែវាមិនមែនជាធាតុបង្ករបស់ប្រូតេអ៊ីនទេ។</p>
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

export default AminoAcidQA
