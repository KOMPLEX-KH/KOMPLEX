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
    title: "១.៣. ចលនការនៃអំពើរបស់អរម៉ូន",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ប្រព័ន្ធអង់ដូគ្រីនអរម៉ូនមាន២ក្រុម",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនប៉ិបទីត:</li>
            <div className="flex flex-col items-start ml-3">
                <p>_ ជាម៉ូលេគុលនៃច្រវាក់អាស៊ីតអាមីនេ (ឬប្រូតេអ៊ីន)</p>
                <p>_ មិនរលាយក្នុងស្រទាប់លីពីត ដែលមានវត្តមានក្នុងភ្នាសកោសិកា</p>
                <p>_ មិនអាចឆ្លងកាត់ភ្នាសកោសិកាបាន។</p>
                <p>ឧទាហរណ៍: អរម៉ូនអាំងស៊ុយលីន គ្លុយកាកុង ទីរ៉ុកស៊ីន។</p>
            </div>
            <li>អរម៉ូនស្តេរ៉ូអ៊ុីត:</li>
            <div className="flex flex-col items-start ml-3">
                <p>_ ជាម៉ូលេគុលលីពីតតូចៗ ដែលផលិតពីកូឡេស្តេរ៉ុល</p>
                <p>_ រលាយក្នុងស្រទាប់លីពីត ដែលមានវត្តមានក្នុងភ្នាសកោសិកា</p>
                <p>_ មានលទ្ធភាពឆ្លងកាត់ភ្នាសកោសិកាបាន</p>
                <p>ឧទាហរណ៍: អរម៉ូនតេស្តូស្តេរ៉ូន អឺស្ត្រូសែន ប្រូសេស្តេរ៉ូន។</p>
            </div>
        </ul>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. អរម៉ូនប៉ិបទីត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "សកម្មភាពអរម៉ូនប៉ិបទីត",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនប៉ិបទីត(អ្នកនាំសារទី១) → ធ្មួល (លើភ្នាសកោសិកាគោលដៅ) →ម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល→ ATP (ក្នុងស៊ីតូប្លាស)→AMPវដ្ត(អ្នកនាំសារទី២)→អង់ស៊ីម (សកម្ម)→បំប្លែងនាទីកោសិកាគោលដៅ។</li>
            <li>អរម៉ូនប៉ិបទីតអាចភ្ជាប់ទៅនឹងភ្នាសកោសិកាគោលដៅដោយសារធ្មួលនៅលើភ្នាសមានទម្រង់ត្រូវគ្នាជាមួយអរម៉ូន។ចំណងភ្ជាប់រវាងអរម៉ូនឆ្មួល ធ្វើឲ្យមានការភ្ជាប់ទៅនឹងប្រូតេអុីនG ហើយធ្វើឲ្យអង់ស៊ីម ដែលភ្ជាប់លើផ្ទៃខាងក្នុងរបស់ភ្នាសកោសិកា សកម្មឡើង។ បន្ទាប់មកអង់ស៊ីមអាដេនីលស៊ីក្លាសបំប្លែងATP ទៅជាម៉ូលេគុលAMPវដ្ត។</li>
        </ul>
      </>
    ),
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. អរម៉ូនស្តេរ៉ូអ៊ុីត",
    content:
      <>
        <div className="flex flex-col items-start">
            
        </div>
      </>
  },
  tip: {
    title: "សកម្មភាពអរម៉ូនស្តេរ៉ូអ៊ុីត",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនស្តេរ៉ូអ៊ុត ក្នុងស៊ីតូប្លាសកោសិកា→ម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល→ សែន→ARNm→សំយោគប្រូតេអ៊ីន (ក្នុងស៊ីតូប្លាស)→ បំប្លែងនាទីកោសិកាគោលដៅ។</li>
            <li>នៅពេលអរម៉ូនស្តេរ៉ូអ៊ុតជ្រាបចូលទៅក្នុងកោសិកា វាបានភ្ជាប់ទៅនឹងធ្មួលនៅក្នុងស៊ីតូប្លាសកោសិកា ហើយបង្កើតបានជាម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល។ បន្ទាប់មក
            ម៉ូលេគុលចម្រុះនេះក៏ចូលទៅក្នុងណ្វៃយ៉ូកោសិកាគោលដៅ។ នៅក្នុងណ្វៃយ៉ូម៉ូលេគុលចម្រុះនេះ បានភ្ញោចសែនយថាប្រភេទមួយឲ្យចម្លងក្រមជា ARNm ។ ARNm ចេញពីណៃយ៉ូទៅក្នុងស៊ីតូប្លាសហើយដឹកនាំសំយោគប្រូតេអ៊ុនយថាប្រភេទមួយ។</li>
        </ul>
      </>
    ),
  },
}

const HormoneFlow = () => {
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
        <div>
            {SecondTopicContent.definition && (
              <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
            )}
            {SecondTopicContent.tip && (
              <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
            )}
        </div>
        <div>
            {ThirdTopicContent.definition && (
              <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
            )}
            {ThirdTopicContent.tip && (
              <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
            )}
        </div>
    </div>
  )
}

export default HormoneFlow
