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
    title: "៣.៨. ក្រពេញទីមុស",
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
           <li>ទីមុសជាក្រពេញនៃប្រព័ន្ធទឹករងៃ ដែលស្ថិតនៅខាងលើនៃទ្រូង ក្បែរបេះដូង។</li>
           <li> ក្រពេញទីមុសផលិតអរម៉ូនទីម៉ូស៊ីន។</li>
           <li>អរម៉ូនទីម៉ូស៊ីនមាននាទី: </li>
           <p>_ ធ្វើឲ្យឡាំផូស៊ីតដំបូង ក្លាយជាឡាំផូស៊ីតពេញលក្ខណះមានមុខងារក្នុងប្រព័ន្ធភាពស៊ាំ។</p>
           <p>_ ធ្វើឲ្យក្រពេញទឹករងៃ និងសរីរាង្គផ្សេងៗផលិតឡាំផូស៊ីតថ្មីៗ។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពេញទីមុស",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
          
      ],
    },
  ]
}

const ThymusGland = () => {
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

export default ThymusGland
