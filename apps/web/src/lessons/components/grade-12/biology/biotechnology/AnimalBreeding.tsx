import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "ក. ការបង្កាត់ជិត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>ការបង្កាត់ជិត គឺជាការបង្កាត់សត្វ ដែលកើតចេញពីមេបាមួយគូឬរវាងមេបានិងកូនរបស់វា។</li>
          <li>ផ្តល់សន្តានក្រោយមានកម្លាំងជីវិតខ្សោយ លទ្ធភាពបន្តពូជថយចុះ បង្កើតភាពមិនប្រក្រតីនៃក្រូម៉ូសូម នាំទៅរកការផុតពូជ។</li>
          <li>អាចបង្កើតនិងរក្សានូវពូជសុទ្ធ ចំពោះលក្ខណះអន់ដែលគេចង់បាន។</li>
          <li>ការបង្កាត់ជិតធ្វើឡើងចំពោះសត្វដែលគេចិញ្ចឹមដូចជា គោ ក្របី ឆ្កែ ឆ្មា ជាដើម។</li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

      </div>,
    ],
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic34.png",
      imageAlt: "",
      explanation: [
        "រូបភាពនេះបង្ហាញពីការបង្កាត់ជិត ដែលសត្វកូនកើតចេញពីមេបា និងមានលក្ខណៈស្រដៀងម្តាយ។",
        "ការបង្កាត់ជិតអាចបង្កើតពូជសុទ្ធសម្រាប់លក្ខណៈដែលចង់រក្សា, ប៉ុន្តែសុខភាពកូនអាចខ្សោយ ឬមានភាពមិនប្រក្រតីនៃក្រូម៉ូសូម។",
        "វិធីនេះប្រើសម្រាប់សត្វចិញ្ចឹមដើម្បីរក្សាពូជសុទ្ធ ឬលក្ខណៈពិសេសដែលមានតម្លៃសេដ្ឋកិច្ច។"
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ខ. ការបង្កាត់ឆ្ងាយ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>ការបង្កាត់រវាងមេបាពូជខុសគ្នា ឬប្រភេទខុសគ្នា ឬសែស្រឡាយឆ្ងាយដាច់ពីគ្នា។</li>
          <li>ផ្តល់អីប្រ៊ីតមានកម្លាំងជីវិតខ្លាំង ធន់នឹងជម្ងឺ ឆាប់លូតលាស់បានល្អ ផ្តល់ទិន្នផលខ្ពស់។</li>
          <li>អារ មិនអាចបង្កកំណើតបាន(ករណីមេបាមានប្រភេទខុសគ្នា) ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ឧទាហរណ៏",
      src: "/docs/grade-12/biology/mixs/pic32.png",
      imageAlt: "",
      explanation: [
        "សេះញីបង្កាត់ជាមួយលាឈ្មោលទទួលបានមុយលេ(មុយលេជាអុីប្រ៊ីតអារ)។",
        "វាជាវិធីសាស្ត្រដែលកសិករ និងជំនាញបណ្តុះបណ្តាលប្រើប្រាស់ដើម្បីបង្កើនផលិតភាព និងធន់នឹងជំងឺ។",
        "បង្កាត់ឆ្ងាយអាចប្រើបានក្នុងសត្វ និងរុក្ខជាតិ ដើម្បីបង្កើតពូជថ្មីដែលមានលក្ខណៈល្អប្រសើរ។"
      ],
    },
  ]
}


const AnimalBreeding = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}
        {FirstTopicContent.example && (
          <ExampleBox question={FirstTopicContent.example.question} />
        )}
        {FirstTopicContent.imageExplanation &&
          Array.isArray(FirstTopicContent.imageExplanation) &&
          FirstTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}
        {SecondTopicContent.example && (
          <ExampleBox question={SecondTopicContent.example.question} />
        )}
        {SecondTopicContent.imageExplanation &&
          Array.isArray(SecondTopicContent.imageExplanation) &&
          SecondTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>

    </div>
  )
}

export default AnimalBreeding
