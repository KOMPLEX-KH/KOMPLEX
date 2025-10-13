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
    title: "៣.៦.លំពែង",
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
            <li>លំពែងជាក្រពេញអង់ដូគ្រីនផង និងអិចសូគ្រីនផង (ក្រពេញចម្រុះ)។</li>
            <li>ក្រពេញម៉ិចសូគ្រីន វាបញ្ចេញរសរំលាយអាហារ ទៅក្នុងបំពង់នាំលំពែង។</li>
            <li>ក្រពេញអង់ដូគ្រីន: វាបញ្ចេញអរម៉ូនទៅក្នុងឈាមដោយផ្ទាល់។</li>
            <li>លំពែងជាក្រពេញអង់ដូគ្រីន ដែលកើតឡើងពីកោសិកាមួយក្រុមហៅថាអីឡូឡង់សេរ៉ង់។ ស៊ីឡូនីមួយៗកើតពី
            កោសិកាពីរបែបគឺកោសិកាអាល់ហ្វា(a)បញ្ចេញគ្លុយកាកុង និងកោសិកាបេតា (B)បញ្ចេញអរម៉ូនអាំងស៊ុយលីន។ អរម៉ូន
            ទាំងពីរនេះតម្រូវមេតាបូលីសស្អុយកូសនៅក្នុងឈាម។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "លំពែង",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. អាំងស៊ុយលីន",
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
            <li>ក្រោយពេលបរិភោគអាហារ សារធាតុចិញ្ចឹមដែលមាននៅក្នុងឈាមគឺ ភ្លុយកូស អាស៊ីតអាមីនេ អំបិលខនិជ
            វីតាមីន អាស៊ីតខ្លាញ់ និងគ្លីសេរ៉ុល។ ភ្លុយកូសមានឥទ្ធិពលទៅលើលំពែង។</li>
            <li>នៅពេលកម្រិតភ្លុយកូសឡើងខ្ពស់ អាំងស៊ុយលីនភ្ញោចកោសិកាគោលដៅ (មានកោសិកាថ្លើម កោសិកាសាច់ដុំ
            ជាប់ឆ្អឹង ជាលិកាខ្លាញ់) ឲ្យចាប់យកគ្លុយកូសប្រើប្រាស់ជាប្រភពថាមពល សម្រាប់សកម្មភាពផ្សេងៗ។ ក្រៅពីនេះ
            ចំពោះម៉ូលេគុលគ្លុយកូសដែលនៅសល់ អាំងស៊ុយលីនបំប្លែងឲ្យទៅជាគ្លីកូសែន ហើយស្តុកទុកក្នុងថ្លើម និងសាច់
            ដុំជាប់ឆ្អឹង។ ម៉្យាងទៀតគ្លុយកូសក៏ត្រូវបានបំប្លែងជា ខ្លាញ់ហើយស្តុកទុកក្នុងជាលិកាខ្លាញ់។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អាំងស៊ុយលីន",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. គ្លុយកាកុង",
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
        <div className='flex flex-col gap-2 items-start'>
            <p>ការបន្ថយកំហាប់គ្លុយកូសក្រោមកម្រិតកំណត់ បានភ្ញោចលំពែងឲ្យបញ្ចេញអរម៉ូនគ្លុយកាកុងទៅក្នុងចរន្តឈាម។
            ដើម្បីបង្កើនកំហាប់គ្លុយកូសឲ្យដល់កម្រិតកំណត់ ភ្លុយកាកុងបានភ្ញោចកោសិកាគោលដៅឲ្យផលិតគ្លុយកូស។ នៅក្នុងថ្លើម
            គ្លុយកាកុងបំប្លែងគ្លីកូសែនឲ្យទៅជាគ្លុយកូស បន្ទាប់មកគ្លុយកូសសាយចេញពីថ្លើមចូលទៅក្នុងចរន្តឈាមយ៉ាងរហ័ស។ នៅ
            ពេលគ្លីកូសែនក្នុងថ្លើមបញ្ចេញអស់ គ្លុយកាកុងនឹងធ្វើឲ្យអាស៊ីតអាមីនេ និងអាស៊ីតខ្លាញ់ប្លែងទៅជាគ្លុយកូសវិញ។</p>
        </div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អាំងស៊ុយលីន",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "គ. ជំងឺទឹកនោមផ្អែម",
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
            <li>ជំងឺទឹកនោមផ្អែមបណ្តាលមកពី កោសិកាអ៊ីឡូឡង់សេរ៉ុង (កោសិកា​ B) ផលិតអរម៉ូនអាំងស៊ុយលីនមិនគ្រប់គ្រាន់បរិមាណគ្លុយកូសក្នុងឈាមកើនឡើង ហើយតម្រងនោមមិនអាចធ្វើឲ្យគ្លុយកូសទាំងអស់ជ្រាបចេញវិញបាន។</li>
            <li>បរិមាណគ្លុយកូសច្រើនក្នុងទឹកនោម បណ្តាលឲ្យកើតជំងឺទឹកនោមផ្អែម។</li>
            <li>ជំងឺទឹកនោមផ្អែមមានរោគសញ្ញាដូចជា ស្រេកទឹកខ្លាំង នោមច្រើន(ញឹកញាប់) កម្លាំងចុះខ្សោយ ស្រកទម្ងន់ ករណីធ្ងន់ធ្ងរអាចដំបៅលើខ្នងជាដើម។</li>
            <li>ការព្យាបាលដ៏មានប្រសិទ្ធភាពគឺ របបអាហារត្រឹមត្រូវ លេបឳសថឲ្យទៀងទាត់ និងចាក់អាំងស៊ុយលីនរៀងរាល់ថ្ងៃទើបអាចត្រួតពិនិត្យជំងឺបាន។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អាំងស៊ុយលីន",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}


const Pancreas = () => {
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
        
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.tip && (
          <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
        )}
        {FourthTopicContent.imageExplanation &&
          Array.isArray(FourthTopicContent.imageExplanation) &&
          FourthTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
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

export default Pancreas
