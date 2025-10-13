import { TopicContent } from "@/types/docs/topic";
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
    title: "២.ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន",
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
            <li>អរម៉ូនត្រូវបានសំយោគនៅពេលសារពាង្គកាយត្រូវការ</li>
            <li>សារពាង្គកាយត្រូវការអរម៉ូន ក្នុងបរិមាណតិចតួចប៉ុណ្ណោះ ហើយបរិមាណនេះត្រូវតែថេរជានិច្ច</li>
            <li>ប្រសិនបើសារពាង្គកាយមានបរិមាណអរម៉ូនច្រើន ឬតិចជាងបរិមាណកំណត់ ក្នុងសារពាង្គកាយ មានដំណើរការ</li>
            <li>មិនប្រក្រតី ដែលបណ្តាលឲ្យសារពាង្គកាយមានជំងឺធ្ងន់ធ្ងរ</li>
            <li>តំណបត្រឡប់អវិជ្ជមានជាកំណើននៃសារធាតុមួយ បង្អាក់ដំណើរការដែលដឹកនាំឲ្យមានកំណើននោះ</li>
        </ul>
      </>
    ),
  },
  
}


const EndokrinControl = () => {
  return (
    <div>
        <div>
            {FirstTopicContent.definition && (
              <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
            )}
            {FirstTopicContent.tip && (
              <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
            )}
        </div>
    </div>
  )
}

export default EndokrinControl
