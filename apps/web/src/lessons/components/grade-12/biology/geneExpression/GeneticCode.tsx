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
    title: "៣.១ ការចាំបាច់នៃក្រមមួយ",
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
          <li>ពីតំណលំដាប់នុយក្លេអូទីតនៃសែនទៅជាតំណលំដាប់អាស៊ីតអាមីនេនៃប្រូតេអ៊ីន ត្រូវមានអន្តរាគមន៍ពីប្រព័ន្ធនៃភាពត្រូវគ្នាមួយហៅថាក្រមសេនេទិច។</li>
          <li>ដោយADN មាននុយក្លេអូទីត៤ប្រភេទគឺ A, T, C, G យហើយប្រូតេអ៊ីនមានអាស៊ីតអាមីនេ២០ប្រភេទ តើនុយ៤ប្រភេទរបស់ADN កំណត់អាស៊ីតអាមីនេទាំង២០ប្រភេទរបស់ប្រូតេអ៊ុនបានដូចម្តេច?</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic5.png",
      imageAlt: "",
      explanation: [
        "សម្មតិកម្មទី១: បើនុយក្លេអូទីត1 កំណត់អាស៊ីតអាមីនេ1 ⇒ ចំនួនបន្សំ = 4¹ = 4 អាស៊ីតអាមីនេនៅសល់16ប្រភេទទៀតគ្មានក្រមកំណត់។",
        "សម្មតិកម្មទី២: បើនុយក្លេអូទីត2 កំណត់អាស៊ីតអាមីនេ2 ⇒ ចំនួនបន្សំ = 4² = 16 អាស៊ីតអាមីនេនៅសល់4ប្រភេទទៀតគ្មានក្រមកំណត់។",
        "សម្មតិកម្មទី៣: បើនុយក្លេអូទីត3 កំណត់អាស៊ីតអាមីនេ3 ⇒ ចំនួនបន្សំ = 4³ = 64 ត្រីធាតុ គឺគ្រប់គ្រាន់ដើម្បីកំណត់អាស៊ីតអាមីនេទាំង២០ប្រភេទ។ សម្មតិកម្មទី៣ អាចទទួលយកបាន ព្រោះវាមានត្រីធាតុលើសចំនួនអាស៊ីតអាមីនេ។ ដូចនេះអាចមានត្រីធាតុមួយ ឬច្រើនដែលកំណត់អាស៊ីតអាមីនេមួយ។"
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "៣.២ តារាងក្រមសេនេទិច",
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
          <li>ត្រីធាតុមួយ ឬកូដុងមួយជាព័ត៌មានសម្រាប់កំណត់អាស៊ីតអាមីនេមួយ។ កូដុងជាបាសបីតគ្នារបស់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> ។</li>
          <li>ក្រមសេនេទិចមានលក្ខណះជាសាកល។ ភាវរស់ទាំងអស់ចាប់ពីបាក់តេរីទៅមនុស្សមានក្រមសេនេទិចរួមគ្នាតែមួយចំពោះសត្វ ក៏ដូចចំពោះរុក្ខជាតិដែរ។</li>
          <li>គេប្រៀបប្រដូចក្រមសេនេទិចដូចវចនានុក្រម សម្រាប់បកប្រែភាសាអក្សរ ៤ តួរបស់ ADN ឲ្យទៅជាភាសាអក្សរ២០តួ នៃប្រូតេអ៊ីន។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic6.png",
      imageAlt: "",
      explanation: [
        "ក្នុងតារាងក្រមសេនេទិចមាន៦៤កូដុង ក្នុងនោះមាន:",
        "កូដុងស្តុបមាន៣គឺ UAA,UAG,UGA មិនកំណត់អាស៊ីតអាមីនេទេ។",
        "កូដុង៦១ កំណត់អាស៊ីតអាមីនេ២០ ដូចនេះអាស៊ីតអាមីនេមួយអាចកំណត់ឡើងដោយត្រីធាតុច្រើន។ ក្នុងនោះមានកូដុងAUG ជាកូដុងផ្តើមកំណត់អាស៊ីតអាមីនេមេត្យូនីន។",
      ],
    },
  ]
}

const GeneticCode = () => {
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
        {SecondTopicContent.imageExplanation &&
          Array.isArray(SecondTopicContent.imageExplanation) &&
          SecondTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
    </div>
  )
}

export default GeneticCode
