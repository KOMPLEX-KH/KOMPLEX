import { TopicContent, TopicContent_V3 } from "@/types/docs/topic";
import {DefinitionBox }from "@components/pages/docs/boxes/DefinitionBox";
import {TipBox} from "@components/pages/docs/boxes/TipBox";
import {ExampleBox} from "@components/pages/docs/boxes/ExampleBox";
import {WarningBox} from "@components/pages/docs/boxes/WarningBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@components/pages/docs/boxes/explanation-box/3DExplanationBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣.១ អុីប៉ូតាឡាមុស",
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
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>កោសិកាណឺរ៉ូនបញ្ចេញក្នុងអីប៉ូតាឡាមុស ផលិតអរម៉ូន២គឺ ADH និងអុកស៊ីស៊ីន ហើយបញ្ជូនតាមអាក់សូន ផ្នែកខាងចុងអាក់សូន ស្តុកទុកក្នុងអីបូភីសក្រោយ។</li>
            <li>អរម៉ូនADH ភ្ញោចបំពង់ប្រមូលផ្តុំនៅក្នុងតម្រងនោមធ្វើឲ្យទឹកជ្រាបចេញវិញទៅក្នុងឈាម។</li>
            <li>អរម៉ូនអុកស៊ីតូស៊ីនមាននាទី:</li>
            <p>_ ភ្ញោចការកន្ត្រាក់នៃសាច់ដុំរបស់ស្បូន ដែលជួយរុញទារកឲ្យចេញពីស្បូនម្តាយនៅពេលសម្រាលកូន</p>
            <p>_ ភ្ញោចសាច់ដុំដែលស្ថិតនៅជុំវិញ ក្រពេញទឹកដោះឲ្យកន្ត្រាក់ដើម្បីបញ្ចេញទឹកដោះតាមរន្ធតូចៗនៅជុំវិញចុងដោះ។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អុីប៉ូតាឡាមុស",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const Hypothalamus = () => {
  return (
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
          <ImageExplanationBox
            key={index}
            title={image.title}
            src={image.src}
            imageAlt={image.imageAlt}
            explanation={image.explanation}
          />
        ))}
    </div>
  )
}

export default Hypothalamus
