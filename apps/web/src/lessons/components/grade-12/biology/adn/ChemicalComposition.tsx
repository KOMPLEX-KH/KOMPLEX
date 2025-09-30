import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១.១ ពិសោធន៏របស់គ្រីភីត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <div className='flex flex-col gap-3 items-start'>
          <p>ភ្នឺម៉ូកូក ជាបាក់តេរីបង្កជំងឺរលាកសួតយ៉ាងធ្ងន់ធ្ងរដល់ថនិកសត្វ។ វាមានរូបរាងពីរបែប :</p>
          <ul className="list-disc ml-5">
            <li>រូបរាងS: មានស្រោមគ្លុយសុីត និងបង្កជំងឺយ៉ាងសាហាវ។</li>
            <li>រូបរាងR: គ្មានស្រោមគ្លុយសុីត និងមិនបង្កជំងឺ។</li>
          </ul>
        </div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ការពិសោធន៏របស់គ្រីភីត",
      src: "/docs/grade-12/biology/adn/kripit.jpg",
      imageAlt: "",
      explanation: [
        "លោកគ្រីភីត សម្លាប់បាក់តេរី S ដោយកម្ដៅ ហើយយកទៅលាយជាមួយបាក់តេរី R ។ បន្ទាប់មកគាត់យកល្បាយនោះចាក់ក្នុងខ្លួនសត្វកណ្តុរ ។ កណ្តុរនោះបានស្លាប់ដោយសារជំងឺរលាកសួត ហើយក្នុងឈាមសត្វកណ្តុរដែលស្លាប់មានបាក់តេរីមានជីវិត។",
        "សន្និដ្ឋាន : បាក់តេរី R គ្មានស្រោមបំប្លែងជាបាក់តេរី បង្កជំងឺរលាកសួត ហើយបញ្ជូនលក្ខណះថ្មីនោះទៅឲ្យសន្តានក្រោយ។ ព័ត៌មានសេនេទិចនៃពូជបាក់តេរី R ត្រូវបានបំប្លែងដោយសារធាតុមួយដែលបានមកពីបាក់តេរី S ងាប់ ។",
      ],
    },
  ]

}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.២ ពិសោធន៏របស់លោកអាវីរី",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "ពិសោធន៏របស់លោកអាវីរី",
      src: "/docs/grade-12/biology/mixs/pic1.png",
      imageAlt: "",
      explanation: [
        "លោកអាវីរីទាញយកADN ពីបាក់តេរី S តាមបច្ចេកទេសគីមី ដោយយកទៅលាយជាមួយបាក់តេរី R ហើយយកល្បាយនោះចាក់ឲ្យកណ្តុរ។ កណ្តុរនោះស្លាប់ដោយសារជំងឺរលាកសួត ហើយក្នុងឈាមរបស់កណ្តុរមានបាក់តេរី S មានជីវិត។",
        "សន្និដ្ឋាន : ADN របស់ S ជាម៉ូលេគុលបំប្លែង។",
        "ADN របស់ S ជ្រៀតចូលក្នុងADNរបស់បាក់តេរី R ធ្វើឲ្យ R មានលក្ខណះថ្មីគឺ មានស្រោមហើយក្លាយជាបាក់តេរី S ដែលបង្កជំងឺរលាកសួត។",
        "ADN ជាទម្រព័ត៌មានសេនេទិច ។"
      ],
    },
  ]

}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.៣ ពិសោធន៏របស់លោកហឺសុីនិងឆាស",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  imageExplanation: [
    {
      title: "ពិសោធន៏របស់លោកហឺសុីនិងឆាស",
      src: "/docs/grade-12/biology/adn/chas.jpg",
      imageAlt: "",
      explanation: [
        "លោកហឺស៊ី និងឆាសបានរៀបចំវីរុសបាក់តេរីយ៉ូផាសជាពីរក្រុមគឺ:",
        "ក្រុមទី១: ភ្ជាប់ស្ពាន់ធ័រវិទ្យុសកម្ម៣៥ទៅនឹងស្រោមប្រូតេអ៊ីន។",
        "ក្រុមទី២: ភ្ជាប់ផូស្វ័រវិទ្យុសកម្ម៣២ ទៅនឹងADN។",
        "គាត់ភ្ជាប់វីរុសទាំងពីរក្រុម ទៅនឹងបាក់តេរី ហើយរង់ចាំឲ្យវាបន្តពូជលើបាក់តេរី។",
        "គាត់សង្កេតឃើញថា ស្ពាន់ធ័រវិទ្យុសកម្ម៣៥ទាំងអស់នៅសល់ក្នុងវីរុស ឯផូស្វ័រវិទ្យុសកម្ម៣២ទាំងអស់ត្រូវបានបញ្ជូនទៅក្នុងបាក់តេរី។",
        "គាត់សន្និដ្ឋានថា វីរុសបញ្ចូល ADN ទៅក្នុងបាក់តេរីមិនមែនប្រូតេអ៊ីនទេ។ ដូចនេះ ADN ពិតជាទម្រព័ត៌មានសេនេទិច។",
      ],
    },
  ]

}

const ChemicalComposition = () => {
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
    </div>
  )
}

export default ChemicalComposition
