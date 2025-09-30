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
    title: "",
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
      src: "/docs/grade-12/biology/adn/",
      imageAlt: "",
      explanation: [

      ],
    },
  ]
}




const Ribosome = () => {
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
    </div>
  )
}

export default Ribosome
