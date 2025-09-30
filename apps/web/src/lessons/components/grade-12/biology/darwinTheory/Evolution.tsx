import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import { ImageBox, ImageBoxProps } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import 'katex/dist/katex.min.css'


const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣.១ វិចាររបស់ដាវិន",
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
          <li>ការវិវត្តគឺជាការផ្លាស់ប្តូរជាបន្តបន្ទាប់ក្នុងរយះពេលដ៏យូរអង្វែងនៃទម្រង់របស់សត្វនិងរុក្ខជាតិដែលនាំឲ្យលេចចេញនូវទម្រង់ថ្មីៗផ្សេងទៀតរបស់សត្វ ឬរុក្ខជាតិ។</li>
          <li>បម្រែបម្រួលជាកំណែប្រែ ដែលធ្វើឲ្យមានលក្ខណៈខុសគ្នារវាងឯកត្តះនៅក្នុងប្រភេទតែមួយ។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic35.png",
      imageAlt: "",
      explanation: [

      ],
    },
  ]
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "៣.២ ជម្រេីសដោយមនុស្ស",
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
        <p>នៅក្នុងហ្វូងសត្វចិញ្ចឹមបើមនុស្សសង្កេតឃើញសត្វមានលក្ខណះប្លែក ហើយលក្ខណះនោះមានប្រយោជន៍ចំពោះ
          ខ្លួន មនុស្សនឹងជ្រើសរើសយកឯកត្តៈនោះរក្សាទុក ហើយធ្វើការបន្តពូជដោយឡែកជាច្រើនជំនាន់។ ការធ្វើបែបនេះ គេនឹងទទួលបានពូជសត្វស្រុកមួយបែបថ្មីទៀត។</p>
      </>
    ),
  },
}

const Evolution = () => {
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
      </div>
    </div>
  )
}

export default Evolution
