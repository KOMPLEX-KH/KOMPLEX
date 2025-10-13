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
    title: "៣.២. ក្រពេញអុីប៉ូភីស",
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
            <li>អ៊ីប៉ូភីស ជាក្រពេញតូចមួយមានអង្កត់ផ្ចិតប្រហែល១Cmដែលស្ថិតនៅក្នុងខួរក្បាលខាងក្រោមស៊ីប៉ូតាឡាមុស។</li>
            <li>អីប៉ូភីសចែកជា២ផ្នែកគឺ អ៊ីប៉ូភីសមុខ និងអីប៉ូភីសក្រោយ។</li>
        </ul>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. អ៊ីប៉ូភីសក្រោយ",
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
            <li>មិនផលិតអរម៉ូនទេ ប៉ុន្តែវាស្តុកអរម៉ូនADH និងអុកស៊ីតូស៊ីនដែលផលិតដោយអុីប៉ូតាឡាមុស។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អ៊ីប៉ូភីសក្រោយ",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. អ៊ីប៉ូភីសមុខ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "អ៊ីប៉ូភីសមុខផលិតអរម៉ូនចំនួន៦",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនលូតលាត់ ឬសូម៉ាតូត្រូពីន: មានឥទ្ធិពលទៅលើការលូតលាស់កំពស់គឺ ឆ្អឹងនិងឆ្អឹងខ្ចី។</li>
            <li>អរម៉ូនប្រូឡាក់ទីន: ធ្វើឲ្យក្រពេញទឹកដោះលូតលាស់ និងផលិតទឹកដោះក្នុងមេតាបូលីស ភ្លុយស៊ីត និងខ្លាញ់ផលិតក្រោយពេលសម្រាលកូន</li>
            <li>អរម៉ូនមេឡាណូស៊ីតស្ទីមុយឡង់: ភ្ញោចកោសិកាមេឡាណូស៊ីតរបស់ស្បែកឲ្យផលិតជាតិពណ៌មេឡានីន។</li>
            <li>អរម៉ូនទីរ៉េអូស្លីមុយលីន: ភ្ញោចក្រពេញទីរ៉ូអ៊ុតឲ្យផលិតអរម៉ូន ទីរ៉ុកស៊ីន។</li>
            <li>អរម៉ូនអាដ្រេណូករទីកូត្រូប: ភ្ញោចក្រពេញករតិចលើតម្រងនោម ឲ្យផលិតអរម៉ូនករទីសូល។</li>
            <li>អរម៉ូនកូណាដូស្លីមុយលីន (អរម៉ូនFSH និងLH): ភ្ញោចក្រពេញភេទ (អូវែ ពងស្វាស) ឲ្យបញ្ចេញអរម៉ូនភេទ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អ៊ីប៉ូភីសមុខ",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const HypophysisPituitaryGland = () => {
  return (
    <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}

        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}
        {SecondTopicContent.imageExplanation &&
          Array.isArray(SecondTopicContent.imageExplanation) &&
          SecondTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageExplanationBox
              key={index}
              title={image.title}
              src={image.src}
              imageAlt={image.imageAlt}
              explanation={image.explanation}
            />
          ))}

        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
        )}
        {ThirdTopicContent.imageExplanation &&
          Array.isArray(ThirdTopicContent.imageExplanation) &&
          ThirdTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
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

export default HypophysisPituitaryGland