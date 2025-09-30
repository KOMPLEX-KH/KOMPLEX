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
    title: "១. ទម្រង់អាស៊ីតអាមីណេ",
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
          <li>ប្រូតេអ៊ីន ជាសមាសធាតុគីមីគ្រឹះនៃជីវិត។</li>
          <li>ម៉ូណូមែរបស់ប្រូតេអ៊ីនគឺ អាស៊ីតអាមីនេ។</li>
          <li>អាស៊ីតអាមីនេផ្សំឡើងពីធាតុគីមី៤គឺ C H O N ជួនកាលមានផូស្វាត និងស្ពាន់ធ័រ។</li>
          <li>ម៉ូលេគុលអាស៊ីតអាមីនេនីមួយៗផ្សំឡើងពីកាបូនកណ្តាលដោយភ្ជាប់អាតូមអមួយ បណ្ដុំកាបុកស៊ីល (-COOH) បណ្តុំអាមីន និងរ៉ាឌីកាល់ R ។</li>
          <li>រូបមន្តទូទៅរបស់អាស៊ីតអាមីនេគឺ:</li>
          <div className="flex items-start gap-3">
            <p>_ រូបមន្តស្ទេីលាត </p>
            <div className="flex items-start gap-1 text-[12px]">
              <InlineMath math="R-" />
              <div className="flex flex-col gap-0">
                <InlineMath math="CH-COOH" />
                <InlineMath math="|" />
                <InlineMath math="NH_{2}" />
              </div>
            </div>
          </div>
          <li>អាស៊ីតអាមីនេ ជាសារធាតុចំណូលទឹក</li>
          <li>នៅកម្រិត pH=7 បណ្ដុំកាបុកស៊ីលបំបែកទៅជាទម្រង់បាស <span className='text-[13px]'><InlineMath math="(COO^{-})" /></span> ហើយបណ្ដុំអាមីនបំបែកទៅជាទម្រង់អាស៊ីត <span className='text-[13px]'><InlineMath math="(-NH_{3}^{+})" /></span></li>
          <li>អាស៊ីតអាមីនេនីមួយៗ មានលក្ខណះជាអាស៊ីតផង និងជាបាសផង។</li>
          <li>អាស៊ីតអាមីនេមួយចំនួន ឬកម្លាយរបស់វាមាននាទីជាអ្នកនាំសារ។</li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <ul className="flex flex-col items-start gap-3 list-disc pl-4" key="q1">
        <li>គ្លីស៊ីន អាស៊ីតគ្លុយតាមិច សេរ៉ូតូនីនក្លាយមកពី ទ្រីបតូហ្វាន វាជាអ្នកបញ្ជូនព័ត៌មានប្រសាទ ហើយមានឥទ្ធិពល
          ទៅលើនាទីរបស់កោសិកាគោលដៅ (ឬកោសិកាសាច់ដុំ)។</li>
        <li>ទីរ៉ុកស៊ីនអុីនដល និងអាស៊ីតអាសេទិចឬអុកស៊ីន មាននាទីសម្របសម្រួលនាទីកោសិកា។</li>
        <li>អាស៊ីនីន ស៊ីត្រុយលីន និងអ័រនីទីនមាននាទីដឹកនាំមេតាបូលីសក្នុងកោសិកា។</li>
      </ul>,
    ],
  },
}



const FormAminoAcid = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}
        {FirstTopicContent.example && (
          <ExampleBox question={FirstTopicContent.example.question} />
        )}
      </div>
    </div>
  )
}

export default FormAminoAcid
