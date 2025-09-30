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
    title: "៤.៣ ចលនាការបកប្រែក្រម",
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
        <p>ចលនការបកប្រែក្រមមានបីដំណាក់គឺ ដំណាក់ដំបូង ដំណាក់លូតវែង និងដំណាក់បញ្ចប់។</p>
      </>
    ),
  },
}


const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. ដំណាក់ដំបូង",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic40.png",
      imageAlt: "",
      explanation: [
        "ផ្តើមដោយកូដុងផ្តើម AUG ដែលត្រូវនឹងអាស៊ីតអាមីនេមេត្យូនីន ការតម្រូវអង់ទីកូដុង កូដុងនៅក្នុងថត Pនៃរីបូសូម។",
        "កូដុងផ្តើម AUG មានតែ1គត់គ្រប់ច្រវ៉ាក់ប៉ូលីប៉ិបទីត ដែលកំពុងសំយោគ មានអាស៊ីតអាមីនេមេត្យូនីន។",
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. ដំណាក់លូតវែង",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic41.png",
      imageAlt: "",
      explanation: [
        "ARN_t ទី2 ភ្ជាប់កូដុងទី2 នៃARN_m តម្រូវអង់ទីកូដុង និងកូដុងក្នុងថតនៃរីបូសូម។",
        "ចំណងប៉ិបទីតទី១រវាងអាស៊ីតអាមីនេពីរជាប់គ្នា កើតឡើងដោយអង់ស៊ីមបញ្ចេញដោយរីបូសូម។",
        "រីបូសូមបំលាស់ទីតាមបណ្តោយ ARN_m ម្តង1កូដុងៗ ARN_t ដឹកអាស៊ីតអាមីនេ ទៅទម្លាក់ជាបន្តបន្ទាប់ក្នុងថតA នៃរីបូសូម។ អាស៊ីតអាមីនេទាំងនេះភ្ជាប់គ្នាដោយចំណងប៉ិបទីតនាំឲ្យច្រវាក់ប៉ូលីប៉ិបទីតកាន់តែលូតវែង។",
      ],
    },
  ]
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "គ. ដំណាក់បញ្ចប់",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic42.png",
      imageAlt: "",
      explanation: [
        "នៅពេលរីបូសូមលោតដល់កូដុងស្តុប (UAA ឬUAG ឬUGA) ចលនការសំយោគប្រូតេអ៊ីនត្រូវបានបញ្ចប់ ដោយសារធាតុចម្រុះមាន ARN_t, ARN_m រីបូសូម និងច្រវ៉ាក់ប៉ូលីប៉ិបទីត ត្រូវបានបំបែកចេញពីគ្នា ហើយភ្លាមនោះមេត្យូនីន ក៏បានផ្តាច់ចេញពីច្រវ៉ាក់ប៉ូលីប៉ិបទីតដែរ។",
        "ARN_m នីមួយៗធ្វើការជាមួយរីបូសូមច្រើន(ប៉ូលីសូម)",
        "រីបូសូមទី1ផ្លាស់ទីបានប្រវែង 5 ទៅ10nm រីបូសូមទី2 ភ្ជាប់លើARN_m បន្ទាប់មកទី3 ទី4 ...។",
      ],
    },
  ]
}




const Translation = () => {
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
    </div>
  )
}

export default Translation
