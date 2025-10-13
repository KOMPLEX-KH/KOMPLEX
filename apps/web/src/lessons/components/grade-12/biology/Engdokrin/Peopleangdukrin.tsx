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
    title: "៣.ប្រព័ន្ធអង់ដូគ្រីនមនុស្ស",
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
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ក្រពេញអង់ដូគ្រីនសំខាន់ៗរបស់មនុស្សគឺ អ៊ុីប៉ូតាឡាមុស អីប៉ូភីស ក្រពេញទីរ៉ូអ៊ុត ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុត ក្រពេញ
            ទីមុស លំពែង ក្រពេញលើតម្រងនោម ក្រពេញភេទ(ពងស្វាស អូវែ) ក្រពះ និងពោះវៀនតូច។ ក្រពេញខ្លះជាអូតូគ្រីន និងខ្លះជាប៉ារ៉ាគ្រីន។</li>
            <li>អូតូគ្រីន ជាក្រពេញអង់ដូគ្រីន ដែលផលិតអរម៉ូន ហើយ អរម៉ូនរបស់វាមានឥទ្ធិពល ទៅលើកោសិកាគោលដៅខ្លួនឯង។</li>
            <p>ឧទាហរណ៍: កោសិកាពិសេសក្នុងក្រពះ។</p>
            <li>ប៉ារ៉ាគ្រីន ជាក្រពេញអង់ដូគ្រីន ដែលផលិតអរម៉ូនហើយអរម៉ូនរបស់វាមានអំពើទៅលើកោសិកាគោលដៅនៅកន្លែងផ្សេង។</li>
            <p>ឧទាហរណ៍: ក្រពេញអ៊ីប៉ូភីស អ៊ុប៉ូតាឡាមុស។</p>
            <li>ក្រពេញខ្លះជាអូតូគ្រីនផងនិងប៉ារ៉ាគ្រីនផង។</li>
            <p>ឧទាហរណ៍: ក្រពេញភេទ (ពងស្វាស អូវែ)។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពេញអុិចសូគ្រីន",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}


const Peopleangdukrin = () => {
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
                <ImageExplanationBox
                  key={index}
                  title={image.title}
                  src={image.src}
                  imageAlt={image.imageAlt}
                  explanation={image.explanation}
              />
              ))}
        </div>
    </div>
  )
}

export default Peopleangdukrin
