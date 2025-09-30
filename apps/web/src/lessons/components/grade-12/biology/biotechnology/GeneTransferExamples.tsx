import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "ក. ការផលិតអរម៉ូនអាំងស៊ុយលីន",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic11.png",
      imageAlt: "",
      explanation: [
        "យកក្រូម៉ូសូមរបស់មនុស្សដែលផ្ទុកសែនសំយោគអាំងស៊ុយលីន។",
        "កាត់យកសែនសំយោគអាំងស៊ុយលីនដោយប្រើអង់ស៊ីមបង្រួម។",
        "យកប្លាស្មីតបាក់តេរីចេញពីបាក់តេរី។",
        "រួចកាត់យកអង្កត់មួយរបស់ADNចេញពីប្លាស្មីតដោយប្រើអង់ស៊ីមបង្រួម។",
        "ភ្ជាប់សែនរបស់មនុស្ស ទៅនឹងប្លាស្មីតរបស់បាក់តេរីដោយប្រើអង់ស៊ីមភ្ជាប់។",
        "រួចបញ្ចូលប្លាស្មីតនេះទៅក្នងបាក់តេរីមួយ។",
        "ទុកឲ្យបាក់តេរីបន្តពូជ បង្កើតបាក់តេរីច្រើន ធ្វើឲ្យមានសែនសំយោគអាំងស៊ុយលីនក៏កាន់តែច្រើន។",
        "សែននីមួយៗ សំយោគប្រូតេអ៊ីនអាំងស៊ុយលីនដែលអាចឲ្យគេប្រើប្រាស់បាន។"
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ខ. រុក្ខជាតិបន្ទេរសែន",
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
        <p>រុក្ខជាតិវិស្វកម្មសេនេទិច ធន់នឹងជម្ងឺ សត្វល្អិតចង្រៃ អាកាសធាតុ ថ្នាំសម្លាប់សត្វល្អិត ថ្នាំសម្លាប់ស្មៅ ធ្វើឲ្យរុក្ខជាតិមានផ្លែផ្កាច្រើន ជួយបង្កើនគុណភាពដំណាំ។</p>
      </>
    ),
  },
}

const GeneTransferExamples = () => {
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
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}
      </div>
    </div>
  )
}

export default GeneTransferExamples
