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
    title: "៣.៥. ក្រពេញលើតម្រងនោម",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ក្រពេញលើតម្រងនោមនីមួយៗមានពីរផ្នែក:",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ផ្នែកខាងក្រៅ ហៅថាក្រពេញករតិចលើតម្រងនោម។</li>
            <li>ផ្នែកខាងក្នុងហៅថាក្រពេញខួរលើតម្រងនោម។</li>
        </ul>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. ក្រពេញខួរលើតម្រងនោម",
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
            <li>ក្រពេញខួរលើតម្រងនោមផលិតអរម៉ូនពីរគឺ អរម៉ូនអេពីណេព្រីនឬអាដ្រេណាលីន និងណូអេពីណេព្រីន។</li>
            <li>អរម៉ូនណូអេពីណេព្រីន មានសកម្មភាពក្នុងការដឹកនាំអាំងភ្លុចប្រសាទទៅកាន់កោសិកាក្បែរៗវា និងមានឥទ្ធិពល ទៅលើការកន្ត្រាក់រួមតូចនៃសរសៃវ៉ែន។</li>
            <li>អរម៉ូនអេពីណេព្រីន ឬអាដ្រេណាលីនមាននាទី:</li>
            <p>_ បង្កើនអត្រាចង្វាក់បេះដូង ធ្វើឲ្យមានកំណើនកំហាប់ភ្លុយកូសកំណើនអត្រាកំណកឈាមក្នុងសរសៃឈាម កំណើនសម្ពាធឈាម។</p>
            <p>_ បណ្តាលឲ្យរន្ធប្រស្រីភ្នែករីកធំ និងបង្រួមសរសៃឈាមក្រោមស្បែក បណ្តាលឲ្យស្បែកឡើងស្លាំង និងបណ្តាលឲ្យញ័រ។</p>
            <p>_ ជាអរម៉ូនធ្វើឲ្យមានប្រតិកម្មទប់ទល់ និងគេចចេញ គឺវាធ្វើឲ្យសារពាង្គកាយឆ្លើយតបភ្លាមៗ ទៅនឹងភាពតានតឹង(ភ័យខ្លាច ខឹង ឈឺចាប់)។</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពេញខួរលើតម្រងនោម",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. ក្រពេញករតិចលើតម្រងនោម",
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
           <li>ក្រពេញករតិចលើតម្រងនោមផលិតអរម៉ូនពីរគឺ អរម៉ូនករទីសូល និងអរម៉ូនអាល់ដូស្តេរ៉ូន។</li>
           <li>អរម៉ូនករទីសូលជួយជម្រុញអ៊ីដ្រូលីស ប្រូតេអ៊ីន និងទ្រីគ្លីសេរីត ឲ្យទៅជាអាស៊ីតអាមីនេ និងអាស៊ីតខ្លាញ់(គ្លីសេវ៉ុល)។ បន្ទាប់មកនៅក្នុងថ្លើមបំប្លែងជាភ្លុយកូស។ ដូចនេះវាបង្កើនកម្រិតភ្លុយកូសនៅក្នុងឈាម។</li>
           <li>អរម៉ូនអាល់ដូស្តេរ៉ូន តម្រូវកម្រិតអីយ៉ុងសូដ្យូម (Na*) និងអ៊ីយ៉ុងបូតាស្យូម(K*) ក្នុងឈាមនៅត្រង់តម្រងនោម។</li>
           <p>_ អ៊ីប៉ូតាឡាមុសផលិតអរម៉ូន CRH ដែលទៅភ្ញោចអីប៉ូភីសមុខឲ្យបញ្ចេញអរម៉ូនអាដ្រេណូករទីកូត្រូប ។ បន្ទាប់មក
            អាដ្រេណូករទីកូតូប ក៏ទៅភ្ញោចក្រពេញលើតម្រងនោមឲ្យបញ្ចេញអរម៉ូនករទីសូល។</p>
            <p>_ នៅពេលកម្រិតសូដ្យូមក្នុងឈាមទាប តម្រងនោមផលិតអង់ស៊ីមរេណាំង។ កំណើនអង់ស៊ីមរេណាំងដែលផ្លាស់
            ប្រូតេអ៊ីនប្លាស្មាអង់ស៊ីយូតង់ស៊ីណូសែន ឲ្យទៅជាអង់ស៊ីយូតង់ស៊ីន និងអង់ស៊ីយូតង់ស៊ីនII ទៅភ្ញោចក្រពេញ
            ករតិចលើតម្រងនោមឲ្យបញ្ចេញអរម៉ូនអាល់ដូស្តេរ៉ូន។ អាល់ដូស្តេរ៉ូនធ្វើឲ្យមានការជ្រាបចេញនៃអ៊ីយ៉ុងសូដ្យូមពី
            តម្រងនោម ទៅកាន់ប្លាស្នានៃឈាម។ នៅពេលកម្រិតសូដ្យូមក្នុងឈាមកើនឡើង ទឹកត្រូវបានជ្រាបចេញពីតម្រង
            នោមទៅក្នុងឈាម ដែលជាហេតុធ្វើឲ្យសម្ពាធនិងមាឌឈាមត្រូវបានរក្សាលំនឹង។
            </p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពេញករតិចលើតម្រងនោម",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}


const AdrenalGlands = () => {
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

export default AdrenalGlands
