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
    title: "៤.១ បច្ចេកវិទ្យាក្នុងការផលិត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "ក្នុងវិស័យសុខាភិបាល",
      src: "/docs/grade-12/biology/mixs/pic12.png",
      imageAlt: "",
      explanation: [
        "មានផលិតអាំងស៊ុយលីន អាំងទែផេរ៉ូន អាំងទែឡីគីន អង់ទីហ្សូទិច វ៉ាក់សាំង អង់ទីករ អេរីត្រូប្រូតេអ៊ីន...។"
      ],
    },
    {
      title: "ក្នុងវិស័យកសិកម្ម",
      src: "/docs/grade-12/biology/mixs/pic13.png",
      imageAlt: "",
      explanation: [
        "គេធ្វើឲ្យរុក្ខជាតិមានផ្កា ផ្លែច្រើន ធន់នឹងជម្ងឺ ធន់នឹងអាកាសធាតុ និងថ្នាំសម្លាប់សត្វល្អិត ថ្នាំសម្លាប់ស្មៅ...។",
        "បង្កើតបាក់តេរីភ្ជាប់អាសូត។",
        "បន្ថែមសារធាតុចិញ្ចឹមចូលទៅក្នុងគ្រាប់ធុញ្ញជាតិ។",
      ],
    },
    {
      title: "ក្នុងវិស័យបរិស្ថាន",
      src: "/docs/grade-12/biology/mixs/pic15.jpg",
      imageAlt: "",
      explanation: [
        "បង្កើតពូជបាក់តេរី ដែលអាចបំប្លែងប្រេងឆៅឬប្រេងសម្រាប់សម្អាតសមុទ្រពេលមានបញ្ហាកំពប់ប្រេងក្នុងសមុទ្រ។",
      ],
    },
    {
      title: "ក្នុងវិស័យឧស្សាហកម្មស្បៀង",
      src: "/docs/grade-12/biology/mixs/pic14.jpg",
      imageAlt: "",
      explanation: [
        "មានផលិតអាហារមានអរម៉ូន ទឹកដោះគោជូរ ផលិតស្រាបៀរ នំប៉័ងប្រូម៉ាស...។"
      ],
    },
  ]
}


const GeneticEngineering = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.imageExplanation &&
          Array.isArray(FirstTopicContent.imageExplanation) &&
          FirstTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
    </div>
  )
}

export default GeneticEngineering
