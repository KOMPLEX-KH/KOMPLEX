import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣. ដេីមកំណេីតប្រភេទ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <p>ប្រភេទជាក្រុមសារពាង្គកាយដែលមានរូបរាងស្រដៀងគ្នា ហើយធ្វើការបន្តពូជជាមួយគ្នាបានដោយបង្កើតកូនចៅដែលអាចបន្តពូជបានទៀត។</p>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ឧទាហរណ៏ប្រភេទសត្វបក្សី",
      src: "/docs/grade-12/biology/mixs/pic28.png",
      imageAlt: "ពីរបក្សីស្រដៀងគ្នា",
      explanation: [
        "រូបភាពនេះបង្ហាញពីពីរបក្សីដែលស្រដៀងគ្នា ហើយចូលក្នុងប្រភេទដូចគ្នា។",
        "ពួកវាអាចធ្វើការបន្តពូជគ្នា និងបង្កើតកូនចៅដែលអាចបន្តពូជបាន។",
        "វាបង្ហាញពីលក្ខណៈសាមញ្ញនៃការកំណត់ប្រភេទដោយផ្អែកលើរូបរាង និងសមាសភាពសារពាង្គកាយ។",
        "ការប្រៀបធៀបប្រភេទជួយសិក្សាអំពីការរីកចម្រើន និងការវិវត្តន៍របស់សត្វក្នុងបរិស្ថានផ្សេងៗ។"
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. របាំងភូមិសាស្ត្រ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>កាលណាមានរបាំងភូមិសាស្ត្រ ពពួកផ្សេងៗត្រូវបែកចេញពីគ្នា មិនអាចមានទំនាក់ទំនងជាមួយគ្នា។ ក្រោម
            ឥទ្ធិពលនៃជម្រើសដោយធម្មជាតិពពួកនីមួយៗមានលក្ខណះបន្សំទៅនឹងមជ្ឈដ្ឋានរៀងខ្លួន។</li>
          <li>ឆ្លងកាត់រយះពេលដ៏យូរមក ពពួកទាំងនោះមានលក្ខណះខុសគ្នាកាន់តែច្រើនឡើងៗ ហើយមិនអាចបន្តពូជជាមួយគ្នាបាន ដូច្នេះវាក៏ក្លាយជាប្រភេទផ្សេងៗពីគ្នា។</li>
        </ul>
      </>
    ),
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. របាំងជីវសាស្ត្រ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className="flex flex-col items-start gap-3">
          <p>ការលេចឡើងនៃប្រភេទថ្មី បណ្តាលមកពីការកកើតរបាំងបន្តពូជរវាងឯកន្លះ។ របាំងបន្តពូជ ជារបាំងជីវសាស្ត្រ។</p>
          <ul className="list-disc ml-4 flex flex-col gap-3">
            <li>ឯកត្តះមានរូបរាង និងទំហំប្រដាប់បន្តពូជខុសគ្នា។</li>
            <li>ឯកត្តះធ្វើការបន្តពូជនៅរដូវនិងខែខុសគ្នា។</li>
            <li>ការទាក់ទាញរវាងសត្វញីឈ្មោល ដើម្បីធ្វើការបន្តពូជមានរបៀបខុសគ្នា។</li>
            <li>កាម៉ែតញីឈ្មោលក្នុងប្រភេទខុសគ្នាមិនអាចរលាយចូលគ្នាបាន។</li>
          </ul>
        </div>
      </>
    ),
  },
}


const OriginOfSpecies = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
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
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
        )}
      </div>
    </div>
  )
}

export default OriginOfSpecies
