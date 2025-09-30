import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣. សារះសំខាន់នៃផូស៊ីល",
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
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>ធ្វើឲ្យយើងស្គាល់ប្រវត្តិនៃការវិវត្តរបស់ភាវៈរស់ដូចជា ការកកើត ការរីកចម្រើន និងការវិនាសបាត់បង់ទៅវិញ នៃប្រភេទភាវៈរស់នីមួយៗ។</li>
          <li>ធ្វើឲ្យយើងស្គាល់ពីប្រវត្តិនៃផែនដី ដែលបង្ហាញនូវលក្ខណះអាកាសធាតុនាសម័យកាលនីមួយៗ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic33.png",
      imageAlt: "",
      explanation: [
        "សត្វឥតឆ្អឹងកងកើតឡើងនៅសម័យកំព្រីយាង ស័កប៉ាឡេអូសូម៉ិច។",
        "ល្មូនទី១ កើតឡើងនៅកាលសម័យកាបូនីភែស័កប៉ាឡេអូសូអ៊ុច។",
        "បក្សីទី១ កើតឡើងនៅកាលសម័យកាបូនីភែស័កមេសូសូអ៊ុច។",
        "ថនិកសត្វទី១ កើតឡើងនៅកាលសម័យសួរ៉ាស៊ិច ស័កមេសូសូអ៊ុច។",
        "មនុស្សកើតឡើងនៅកាលសម័យក្វាទែនែ ស័កមេសូសូអ៊ុច។",
      ],
    },
  ]
}


const FossilImportance = () => {
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

export default FossilImportance
