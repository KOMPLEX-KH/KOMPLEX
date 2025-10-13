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
    title: "៣.៧. ក្រពេញភេទ",
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
            <p>អរម៉ូនLH និងFSHភ្ញោចការបញ្ចេញអរម៉ូនពីអូវែនិងពងស្វាស ។</p>
        </div>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. អូវែ",
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
            
            <li>អូវែជា</li>
            <p>_ ក្រពេញម៉ិចសូគ្រីន: ផលិតនិងបញ្ចេញអូវុល(អូវ៉ូស៊ីតII)ពីអូវែទៅដៃស្បូន។</p>
            <p>_ ក្រពេញអង់ដូគ្រីន បញ្ចេញអរម៉ូនអឺស្ត្រូសែននិងប្រូសេស្តេរ៉ូន ទៅក្នុងឈាម។</p>
            <li>អូវែជាក្រពេញបន្តពូជញី ដែលមាននាទីផលិតកាម៉ែតញី និងអរម៉ូនភេទញី។ អរម៉ូនភេទញីមាន២គឺ អឺស្ត្រូសែននិងប្រូសេស្តេរ៉ូន។</li>
            <li>អឺស្ត្រូសែនមាននាទី:</li>
            <p>_ ធ្វើឲ្យស្រទាប់ភ្នាសសើមស្បូនឡើងក្រាស់ដោយបង្កើនចំណែក មីតូសនៃកោសិកា</p>
            <p>_ មានឥទ្ធិពលទៅលើលក្ខណះភេទបន្ទាប់របស់មនុស្សស្រីដូចជាស្បែកទន់ សំឡេងស្រួយ ក្រពេញទឹកដោះជាដើម</p>
            <p>_ ចូលរួមជាមួយប្រូសេស្តេរ៉ូន ដែលមាននាទីសំខាន់ក្នុងការធ្វើនិយតកម្មវដ្តភេទ។</p>
            <li>ប្រូសេស្តេរ៉ូនមាននាទី:</li>
            <p>_ ធ្វើឲ្យភ្នាសសើមស្បូនឡើងក្រាស់ត្រៀមកាច់សំបុក។</p>
            <p>_ ធ្វើឲ្យសាច់ដុំស្បូនសម្រាក ដើម្បីថែរក្សាគភ៌។</p>
            <p>_ ចូលរួមជាមួយអឺស្ត្រូសែន ដែលមាននាទីសំខាន់ក្នុងការធ្វើនិយតកម្មវដ្តភេទ។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អូវែ",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [

      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. ពងស្វាស",
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
            <li>ពងស្វាសជាក្រពេញបន្តពូជឈ្មោល ដែលមាននាទីផលិតកាម៉ែតឈ្មោល និងអរម៉ូនភេទឈ្មោល។ អរម៉ូនភេទឈ្មោលគឺ អង់ដ្រូសែន ដែលមានអរម៉ូនតេស្តូស្តេរ៉ូន និងអរម៉ូន បង្អាក់។</li>
            <li>អរម៉ូនតេស្តូស្តេរ៉ូន ធ្វើឲ្យមានការលូតលាស់លក្ខណះភេទបន្ទាប់របស់មនុស្សប្រុសដូចជា សំឡេងគ្រល ដុះពុកចង្កា ពុកមាត់ រោមដៃជើងវែងៗនិងធ្វើឲ្យកំណល្ហែម៉ាតូសូអ៊ុតសកម្ម។</li>
            <li>អរម៉ូនបង្អាក់ ផលិតដោយកោសិកាស៊ែតូលី។ វាមាននាទីបង្អាក់ការបញ្ចេញអរម៉ូនFSH គឺវាចូលរួមក្នុងការត្រួតពិនិត្យតំណបត្រឡប់អវិជ្ជមាន។</li>
            <li>ពងស្វាសជា:</li>
            <p>_ ក្រពេញម៉ិចសូគ្រីន: បង្កើត និងបញ្ចេញស្ពៃម៉ាតូសូអ៊ុតមកក្រៅសារពាង្គកាយ។</p>
            <p>_ ក្រពេញអង់ដូគ្រីន: បញ្ចេញអរម៉ូនតេស្តូស្តេរ៉ូនទៅក្នុងចរន្តឈាមដោយផ្ទាល់។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ពងស្វាស",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const GonadsSexGlands = () => {
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
    </div>
  )
}

export default GonadsSexGlands
