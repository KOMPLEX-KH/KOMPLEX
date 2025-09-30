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
    title: "២.១ កាតាលីករ",
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
        <div className=" flex flex-col gap-3">
          <p>ប្រូតេអ៊ីន ចូលរួមក្នុងលំនាំនៃការរលាយអាហារ និងក្នុងប្រតិកម្មផ្សេងៗ ដោយបង្កើតល្បឿនប្រតិកម្មគីមី វាចាប់យក
            ថាមពល និងធ្វើជីវសំយោគ។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>រីប៊ុយឡូប៊ីផូស្វាតកាបុកស៊ីឡាស នីត្រូសែណាស។</p>
      </div>,
    ],
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.២ ប្រូតេអ៊ីនទម្រង់",
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
        <div className=" flex flex-col gap-3">
          <p>ប្រូតេអ៊ីន ជាសមាសធាតុចម្បងក្នុងការភ្ជាប់ជាលិកា និងធ្វើឲ្យជាលិកាក្នុងសារពាង្គកាយមានភាពយឺត។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>កូឡាសែន អេឡាស្ទីន។</p>
      </div>,
    ],
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.៣ អ្នកធ្វើចលនា",
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
        <div className=" flex flex-col gap-3">
          <p>ប្រូតេអ៊ីនអាក់ទីន ទុយប៊ុយលីន និងប្រូតេអ៊ីនផ្សេងៗក្នុងស៊ីតូប្លាស បង្កើតជាគ្រោងឆ្អឹងកោសិកា ធ្វើសកម្មភាព
            ចំណែកកោសិកា អិចសូស៊ីតូស អង់ដូស៊ីតូស និងចលនារបស់គោលិកាសផងដែរ។</p>
          <ul className="list-disc ml-4 flex flex-col gap-3">
            <li>អិចសូស៊ីតូស ជាការដឹកនាំសារធាតុចេញពីក្នុងកោសិកាដោយថង់ស៊ីតូប្លាស។</li>
            <li>អង់ដូស៊ីតូស ជាការដឹកនាំសារធាតុចូលទៅក្នុងកោសិកាដោយថង់ស៊ីតូប្លាស។</li>
          </ul>
        </div>
      </>
    ),
  },
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "២.៤ អ្នកការពារ",
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
          <li>ប្រូតេអ៊ីនកេរ៉ាទីន ការពារសារពាង្គកាយប្រឆាំងនិងការជ្រៀតចូលនៃមេរោគនៅពេលមានរបួស។</li>
          <li>ប្រូតេអ៊ីនត្រុំប៊ីន និងភីប្រ៊ីណូសែន ការពារការបាត់បង់ឈាម នៅពេលដាច់សរសៃឈាម ដោយធ្វើឲ្យឈាមកក។</li>
          <li>ប្រូតេអ៊ីនអង់ទីករ ការពារសារពាង្គកាយ ពីការជ្រៀតចូលនៃភ្នាក់ងារបង្ករោគ។</li>
        </ul>
      </>
    ),
  },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "២.៥ អ្នកតម្រូវ (អរម៉ូន)",
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
        <div className=" flex flex-col gap-3">
          <p>អរម៉ូនក្នុងកោសិកាយថាប្រភេទ ប្រែប្រួលទៅតាមនាទីរបស់កោសិកា។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <ul className="flex list-disc flex-col pl-4 items-start gap-3" key="q1">
        <li>អាំងស៊ុយលីន និងភ្លុយកាកុង តម្រូវមេតាបូលីសស្អុយកូសក្នុងឈាម។</li>
        <li>អរម៉ូនលូតលាស់ភ្លេចកោសិកាលូតលាស់ឲ្យធ្វើចំណែក។</li>
      </ul>,
    ],
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "២.៦ អ្នកដឹកនាំ",
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
        <div className=" flex flex-col gap-3">
          <p>ប្រូតេអ៊ីនដឹកនាំម៉ូលេគុល ឬអីយ៉ុងនៃសារធាតុផ្សេងៗចូលក្នុងកោសិកា។</p>
          <ul className="list-disc ml-4 flex flex-col gap-3 pl-3">
            <li>អុីយ៉ុង <span className='text-[13px]'><InlineMath math="Na^{+} , Mg^{+} , Ca^{+} , SO_{4}^{-} " /></span> ។ល។</li>
            <li>ប្រូតេអីនអេម៉ូក្លូប៊ីន ដឹកនាំអុកស៊ីសែនពីសួតទៅជាលិកា។</li>
            <li>លីប៉ូប្រូតេអ៊ុនដឹកនាំលីពីតពីថ្លើមនិងពោះវៀនតូចទៅកាន់សរីរាង្គ ផ្សេងៗ។</li>
          </ul>
          <p>តាមទម្រង់របស់វា គេចែកប្រូតេអ៊ីនជាពីរក្រុម:</p>
          <ul className="list-disc ml-4 flex flex-col gap-3 pl-3">
            <li>ប្រូតេអ៊ីនសរសៃ ជាម៉ូលេគុលវែងៗ ហើយស្វិត មិនរលាយក្នុងទឹក និងមាននាទីជាប្រូតេអ៊ីនទម្រង់ អ្នកធ្វើចលនានិងជាអ្នកការពារ។ </li>
            <li>ប្រូតេអ៊ីនគ្រាប់ ជាម៉ូលេគុលរាងមូលតូចៗ ហើយរលាយក្នុងទឹក និងមាននាទីជាអង់ស៊ីម អ្នកដឹកនាំ អង់ទឹករ។</li>
          </ul>
          <p>តាមសមាសភាពរបស់វា គេចែកប្រូតេអ៊ីនជា:</p>
          <ul className="list-disc ml-4 flex flex-col gap-3 pl-3">
            <li>ប្រូតេអ៊ីនងាយ ជាប្រូតេអ៊ីនដែលផ្សំឡើងពីអាស៊ីតអាមីនេសុទ្ធ។ </li>
            <li>ប្រូតេអ៊ីនសាំញ៉ាំ ជាប្រូតេអ៊ីនដែលផ្សំឡើងពីអាស៊ីតអាមីនេ និងសមាសធាតុដទៃទៀត ដែលមិនមែនជាប្រូតេអ៊ីន។</li>
            <li>ក្រុមប្រូស្ដេទិចជាផ្នែកមួយនៃម៉ូលេគុលសាំញ៉ាំ (អេតេរ៉ូប្រូតេអ៊ីន) ដែលមិនមែនជាអាស៊ីតអាមីនេ ហើយតួនាទីសំខាន់ ក្នុងសកម្មភាពនៃប្រូតេអ៊ីន។</li>
          </ul>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <ul className="flex list-disc flex-col pl-4 items-start gap-3" key="q1">
        <li>លីប៉ូប្រូតេអ៊ីន ផ្ទុកលីពីត</li>
        <li>គ្លីកូប្រូតេអ៊ីន ផ្ទុកកាបូនអ៊ីដ្រាត</li>
        <li>ផូស្វ័រប្រូតេអ៊ីន ផ្ទុកផូស្វាត</li>
        <li>មេតាឡូប្រូតេអ៊ីន ផ្ទុកអីយ៉ុងលោហៈ</li>
        <li>ស្ពាន់ធ័រប្រូតេអ៊ីន ផ្ទុកស្ពាន់ធ័រ</li>
      </ul>,
    ],
  },
}





const FunctionProtein = () => {
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
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}
        {SecondTopicContent.example && (
          <ExampleBox question={SecondTopicContent.example.question} />
        )}
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
        )}
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} />
        )}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.tip && (
          <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
        )}
        {FourthTopicContent.example && (
          <ExampleBox question={FourthTopicContent.example.question} />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
        )}
        {FifthTopicContent.tip && (
          <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
        )}
        {FifthTopicContent.example && (
          <ExampleBox question={FifthTopicContent.example.question} />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
        )}
        {SixthTopicContent.tip && (
          <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
        )}
        {SixthTopicContent.example && (
          <ExampleBox question={SixthTopicContent.example.question} />
        )}
      </div>
    </div>
  )
}

export default FunctionProtein
