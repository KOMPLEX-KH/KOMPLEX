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
    title: "១.២. អរម៉ូន",
    content:
      <>
        <div className="flex flex-col items-start">
            <p>អរម៉ូនជាសារធាតុគីមី ដែលផលិតចេញពីក្រពេញអង់ដូគ្រីន។ វាមានឥទ្ធិពលទៅលើមេតាបូលីសរបស់កោសិកាគោលដៅ។</p>
        </div>
      </>
  },
  tip: {
    title: "មេតាបូលីសមាន",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>មេតាបូលីសមាន:</li>
            <p>_ កាតាបូលីសបំបែកម៉ូលេគុលអាហារដើម្បីទទួលបានថាមពល។</p>
            <p>_ អាណាបូលីស សំយោគសមាសធាតុទាំងអស់ ដែលកោសិកាត្រូវការដើម្បីលូតលាស់ធំធាត់។</p>
            <li>មេតាបូលីស ជាដំណើរការបំបែក និងសំយោគម៉ូលេគុលអាហារឲ្យទៅជាថាមពល និងការលូតលាស់ធំធាត់របស់សារពាង្គកាយ។</li>
            <li>កោសិកាគោលដៅជាកោសិកាដែលអរម៉ូនមានអំពើលើ។</li>
            <li>អរម៉ូនមិនមានឥទ្ធិពលទៅលើសារពាង្គកាយទាំងមូលទេ គឺវាមានឥទ្ធិពលនៅកន្លែងណាមួយដែលត្រូវការវាតែប៉ុណ្ណោះ។</li>
            <li>អរម៉ូនភ្ញោចតែកោសិកាគោលដៅ ដោយសារកោសិកាគោលដៅមានធ្មួលនៅលើភ្នាសកោសិកា។ ឆួលកោសិកាគោលដៅមានទម្រង់ត្រូវគ្នា នឹងទម្រង់របស់អរម៉ូន ដែលបង្កើតបានជាសារធាតុចម្រុះអរម៉ូន-ធ្មួល។ សារធាតុចម្រុះនេះហើយ ដែលធ្វើឲ្យកោសិកាគោលដៅឆ្លើយតបទៅនិងអំពើរបស់អរម៉ូន។</li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>ការជញ្ជក់ដោះម្តាយរបស់ទារកបានភ្លេចក្រពេញអីបូភីសក្រោយឲ្យបញ្ចេញអរម៉ូនអុកស៊ីតូស៊ីន។ អុកស៊ីតូស៊ីនបានធ្វើដំណើរតាមចរន្តឈាមម្តាយ ទៅភ្លេចសាច់ដុំដែលស្ថិតនៅជុំវិញក្រពេញទឹកដោះឲ្យកន្ត្រាក់ ដើម្បីបញ្ចេញទឹកដោះតាមរន្ធតូចៗនៅជុំវិញចុងដោះ។</p>
      </div>,
    ],
  },
}

const Hormone = () => {
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

export default Hormone
