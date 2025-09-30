import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "១.១ ដំណេីរក្លាយជាថ្ម",
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

        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic30.jpg",
      imageAlt: "",
      explanation: [
        "សំណល់ភាវរស់ខ្លះដែលកប់ជាប់ក្នុងកម្ទេចកំណប្លែងទៅជាថ្ម។",
        "ដោយសារធាតុខនិជដែលរលាយក្នុងទឹកស្រូបចូលក្នុងសំណល់ភាវៈរស់ ហើយជំនួសសំណល់ភាវៈរស់ប្លែងទៅជាថ្ម។"
      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.២ ពុម្ភក្រៅ និងពុម្ភក្នុង",
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
          <li>ពុម្ពក្រៅ: ភាវៈរស់មួយងាប់ ហើយធ្លាក់ក្នុងទឹក វាកប់ជាប់ក្នុងកម្ទេចកំណ។ បន្ទាប់មកសារពាង្គកាយនោះរលួយបន្សល់តែពុម្ពទទេ ដែលបង្ហាញពីរូបរាងនៃភាវៈរស់នោះ។</li>
          <li>ពុម្ពក្នុង: កើតឡើងដោយមានកម្ទេចកំណ ធ្លាក់មកបំពេញពុម្ពក្រៅហើយសូនបានជារូបសារពាង្គកាយនៃភាវៈរស់។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic31.jpg",
      imageAlt: "",
      explanation: [

      ],
    },
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic36.png",
      imageAlt: "",
      explanation: [

      ],
    },
  ]
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.៣ ការរក្សាទុកសារពាង្គកាយទាំងមូល",
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
        <p>ផូស៊ីលក៏អាចជាសារពាង្គកាយទាំងមូលកប់ក្នុងជ័ររុក្ខជាតិ ឬក្នុងទឹកកក។</p>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic33.jpg",
      imageAlt: "",
      explanation: [

      ],
    },
  ]
}


const FossilFormation = () => {
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
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
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

export default FossilFormation
