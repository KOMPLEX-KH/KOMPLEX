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
    title: "៣.៩. ក្រពះ និងពោះវៀនតូច",
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
           <li>កោសិកាពិសេសក្នុងភ្នាសក្រពះបញ្ចេញអរម៉ូនកាស្ទីន ដែលមាននាទីភ្ញោចក្រពេញម៉ិចសូគ្រីននៃក្រពះឲ្យបញ្ចេញរសក្រពះ។</li>
           <li>កោសិកាពិសេសនៃភ្នាសពោះវៀនតូចផលិតអរម៉ូនសេក្រេទីនដែលភ្ញោចឲ្យមានលំហូរនៃរសលំពែង។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពះ និងពោះវៀនតូច",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
          
      ],
    },
  ]
}

const glandnhormone = () => {
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

export default glandnhormone
