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
    title: "១.១ ផូស៊ីល",
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
          <li>ផូស៊ីល ជាស្នាម ឬសំណល់របស់ភាវៈរស់ជំនាន់ដើម ដែលបានបន្សល់ទុកក្នុងស្រទាប់សិលា។</li>
          <li>ភស្តុតាងដែលបញ្ជាក់ថាភាវៈរស់វិវត្តគឺ ផូស៊ីល ការលូតលាស់របស់អំប្រ៊ីយ៉ុងនៃប្រភេទសត្វឆ្អឹងកងផ្សេងៗ និងភាពដូចគ្នានៃរូបផ្តុំសារពាង្គកាយ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ឆ្អឹងដាយណូស័រ ",
      src: "/docs/grade-12/biology/mixs/die.webp",
      imageAlt: "",
      explanation: [
        "រូបភាពនេះបង្ហាញពីឆ្អឹងដាយណូស័រ ដែលជាផូស៊ីលសារពាង្គកាយដែលបានរកឃើញនៅក្នុងស្រទាប់សិលា។",
        "ផូស៊ីលឆ្អឹងនេះជាសំណល់ដែលអាចផ្តល់ព័ត៌មានអំពីទំហំ និងរូបរាងសាច់ដុំ និងឆ្អឹងរបស់ដាយណូស័រ។",
        "វាជាភស្តុតាងសំខាន់សម្រាប់ការសិក្សាអំពីការវិវត្តន៍ និងប្រវត្តិជីវៈនៅសម័យមុន។",
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.២ ប្រៀបធៀបការលូតលាស់អំប្រ៊ីយ៉ុងសត្វប្រភេទផ្សេងៗ",
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
          <li>អំប្រ៊ីយ៉ុង ជាទម្រង់ដំបូងនៃសារពាង្គកាយដែលលូតលាស់ចាប់ពីស៊ីកូត រហូតដល់ដំណាក់កាលកើតសរីរាង្គផ្សេងៗ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic24.png",
      imageAlt: "",
      explanation: [
        "ក្នុងដំណាក់កាលដំបូង អំប្រ៊ីយ៉ុងនៃសត្វឆ្អឹងកងទាំងប្រាំថ្នាក់ មានលក្ខណះស្រដៀងគ្នា(កន្ទុយ ពង្រាងអវយវៈ រង្វះស្រកី ខួរឆ្អឹងខ្នង របត់ឈាមទោល។ល។",
        "ក្នុងដំណាក់កាលចុងក្រោយ ទើបសម្គាល់បានថាអំប្រ៊ីយ៉ុងរបស់សត្វថ្នាក់ណាមួយច្បាស់លាស់។ សន្និដ្ឋានថាសត្វឆ្អឹងកងទាំងប្រាំថ្នាក់វិវត្តចេញពីបុព្វរួមតែមួយ។",
      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.៣ ភាពដូចគ្នានៃរូបផ្តុំសារពាង្គកាយ",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "ភស្តុតាងដែលបង្ហាញថាសត្វឆ្អឹងកងទាំងអស់មានបុព្វរួមតែមួយ៖",
      src: "/docs/grade-12/biology/mixs/pic25.png",
      imageAlt: "",
      explanation: [
        "រូបផ្តុំក្នុងដូចគ្នា(គ្រោងឆ្អឹងក្នុង និងមានឆ្អឹងកង)។",
        "ស្លាបបក្សី ព្រុយដូហ្វាំង ដៃមនុស្ស មានរូបរាងនិងនាទីខុសគ្នា តែមានរូបផ្តុំដូចគ្នា។ ដូចនេះវាមានប្រភពតែមួយនៅក្នុងដំណាក់អំប្រ៊ីយ៉ុង។",
        "សរីរាង្គអូម៉ូឡូក ជាសរីរាង្គដែលមាននាទីខុសគ្នា តែមានរូបផ្តុំដូចគ្នានៅក្នុងប្លង់តែមួយហើយមានប្រភពតែមួយនៅដំណាក់អំប្រ៊ីយ៉ុង។",
      ],
    },
  ],
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <img src="/docs/grade-12/biology/adn/" alt="" />
        <p>អវៈយវៈខាងមុខ អវៈយវៈក្រោយ សំណុំខួរក្បាលរបស់សត្វឆ្អឹងកងទាំងប្រាំថ្នាក់ ជាសរីរាង្គអូម៉ូឡូក។</p>
      </div>,
    ],
  },
}


const DescriptionDarwin = () => {
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
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
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
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} />
        )}
      </div>
    </div>
  )
}

export default DescriptionDarwin
