import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. រូបផ្គុំរបស់ប្រូតេអុីន",
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
          <li>ប្រូតេអ៊ុន ជាប៉ូលីមែនៃអាស៊ីតអាមីនេ ដែលកើតឡើងពីច្រវាក់ប៉ូលីប៉ិបទីតមួយ ឬច្រើន ហើយមានអាស៊ីតអាមីនេលើសពី៥០ឡើងទៅ។</li>
          <li>ម៉ូលេគុលដែលទាបបំផុត មានអាស៊ីតអាមីនេតិចជាង៥០ហៅថាប៉ូលីប៉ិបទីត។</li>
        </ul>
      </>
    ),
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ ទម្រង់ទី១",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic50.png",
      imageAlt: "",
      explanation: [
        "ទម្រង់ទី១ របស់ប្រូតេអ៊ីន កើតឡើងពីអាស៊ីតអាមីនេសុទ្ធ។",
        "ទម្រង់ទី១ ខុសគ្នាដោយសារ តំណលំដាប់(ចំនួនប្រភេទ ទីតាំង) អាស៊ីតអាមីនេ។",
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.២ ទម្រង់ទី២",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic50.png",
      imageAlt: "",
      explanation: [
        "ច្រវាក់ប៉ូលីប៉ិបទីតបត់បែនជាខ្សែខ្ចៅ។",
        "វារឹងមាំដោយសារសម្ព័ន្ធអ៊ីដ្រូសែនរវាងបណ្តុំកាបុកស៊ីលនិងបណ្ដុំអាមីន។",
        "ចំណងប៉ិបទីតរឹងមាំដោយសារ កាបូនជាចំណុចបង្វិលរបស់ច្រវាក់ប៉ូលីប៉ិបទីត",
        "ទម្រង់បត់បែនរបស់ច្រវាក់ប៉ូលីប៉ិបទីតមានពីរប្រភេទគឺ",
        "_ ក្នុងទម្រង់បត់បែនស្រប (ផ្នត់រង្វេលa)ច្រវាក់ប៉ូលីប៉ិបទីតតម្រៀបទៅតាមទិសដៅតែមួយ។",
        "_ ក្នុងទម្រង់បត់បែនមិនស្រប (ផ្នត់សន្លឹក B) ច្រវ៉ាក់ប៉ូលីប៉ិបទីតតម្រៀបក្នុងទិសដៅផ្ទុយគ្នា។",
        "_ ផ្នត់សន្លឹកមានភាពសាំញាំនិងរឹងមាំជាងផ្នត់រង្វេល a។",
      ],
    },
  ]
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "១.៣ ទម្រង់ទី៣",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic53.png",
      imageAlt: "",
      explanation: [
        "ច្រវាក់ប៉ូលីប៉ិបទីតបត់បែនជាច្រើនផ្នត់ ធ្វើឲ្យអាស៊ីតអាមីនេឃ្លាតគ្នា ស្ថិតមកនៅជាប់គ្នាវិញ។",
        "ដោយសារភាពបត់បែនជាច្រើនផ្នត់ វាក៏ក្លាយជាប្រូតេអ៊ីនគ្រាប់ លំនាំនេះម៉ូលេគុលទឹកភាគច្រើន មិនអាចជ្រាបចូលទៅដល់ផ្នែកខាងក្នុងនៃប្រូតេអ៊ីន។",
        "ប្រូតេអ៊ីនគ្រាប់ ផ្ទុកគ្រាប់តូចៗ ហៅថាដូមេន ដែលមានទម្រង់ជាក់លាក់ធ្វើឲ្យមាននាទីយថាប្រភេទ។"
      ],
    },
  ]
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "១.៤ ទម្រង់ទី៤",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic51.png",
      imageAlt: "",
      explanation: [
        "ទម្រង់ទី៤ មានលក្ខណះកាន់តែសាំញ៉ាំ ដោយវាបង្កឡើងពីច្រវាក់ប៉ូលីប៉ិបទីតបី ឬបួន។",
      ],
    },
  ]
}



const StructureProtein = () => {
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
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.imageExplanation &&
          Array.isArray(SecondTopicContent.imageExplanation) &&
          SecondTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.imageExplanation &&
          Array.isArray(ThirdTopicContent.imageExplanation) &&
          ThirdTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.imageExplanation &&
          Array.isArray(FourthTopicContent.imageExplanation) &&
          FourthTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
        )}
        {FifthTopicContent.imageExplanation &&
          Array.isArray(FifthTopicContent.imageExplanation) &&
          FifthTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageBox key={index} title={image.title} src={image.src} imageAlt={image.imageAlt} explanation={image.explanation} />
          ))}
      </div>
    </div>
  )
}

export default StructureProtein
