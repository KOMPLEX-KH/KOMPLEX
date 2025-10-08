import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@components/pages/docs/common/box/DefinitionBox";
import TipBox from "@components/pages/docs/common/box/TipBox";
import ExampleBox from "@components/pages/docs/common/box/ExampleBox";
import WarningBox from "@components/pages/docs/common/box/WarningBox";
import { ImageBox, ImageBoxProps } from "@components/pages/docs/common/box/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@components/pages/docs/common/box/explanation-box/3DExplanationBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ក្រពេញ",
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
            <li>ក្រពេញជាកោសិកា ឬជាសរីរាង្គដែលកើតឡើងពីកោសិកាអេពីតេស្យូម ដែលមានឯកទេសកម្ម ក្នុងការបញ្ចេញសារធាតុចាំបាច់សម្រាប់សារពាង្គកាយ។</li>
            <li>ក្រពេញមានពីរបែបគឺ ក្រពេញអុិចសូគ្រីន និងក្រពេញអង់ដូគ្រីន។</li>
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
        "ក្រពេញអិចសូគ្រីន ជាក្រពេញមានបំពង់នាំ ដែលបញ្ចេញរសរំលាយអាហារ និងសំណល់មេតាបូលីសទៅខាងក្រៅចរន្តឈាម។",
        "ឧទាហរណ៍: ក្រពេញទឹកដោះ ក្រពេញញើស ក្រពេញទឹកមាត់ ក្រពេញសេបូម។ល។"
      ],
    },
    {
      title: "ក្រពេញអង់ដូគ្រីន",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
       "ក្រពេញអង់ដូគ្រីន ជាក្រពេញគ្មានបំពង់នាំដែលបញ្ចេញសារធាតុគីមីហៅថាអរម៉ូនហើយធ្វើដំណើរទៅក្នុងចរន្តឈាម។",
       "ឧទាហរណ៍: លំពែង ក្រពេញភេទ ក្រពះ ពោះវៀនតូច ។ល។"
      ],
    },
  ]

}

const Gland = () => {
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
    </div>
  )
}

export default Gland
