import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ការសង្កេតរបស់ដាវិន",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ដាវិនសង្កេតឃើញភាវៈរស់ប្លែកៗ",
      src: "/docs/grade-12/biology/mixs/pic20.avif",
      imageAlt: "",
      explanation: [
        "ផូស៊ីលសត្វខ្លះមានលក្ខណះខុសប្លែកពីសត្វសព្វថ្ងៃ ហើយខ្លះទៀតក៏មានលក្ខណះដូចសត្វសព្វថ្ងៃខ្លះដែរ។",
        "នៅប្រជុំកោះកាឡាប៉ាកូសភាវៈរស់មានលក្ខណះប្លែកៗ ខុសគ្នាពីកោះមួយទៅកោះមួយទៀត។",
        "លក្ខណះនីមួយៗ ជាលក្ខណះបណ្ដុំនៃភាវៈរស់នៅក្នុងមជ្ឈដ្ឋានមួយ។",
        "សត្វនៅលើកោះកាឡាប៉ាកូស មានលក្ខណះដូចគ្នាខ្លះជាមួយសត្វនៅលើទ្វីបអាមេរិចខាងត្បូង។",
        "ដាវិនសន្និដ្ឋានថា សត្វនៅលើកោះមានដើមកំណើតពីសត្វនៅលើទ្វីប។",
      ],
    },
  ],
};

const Observations = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox
            title={FirstTopicContent.definition.title}
            content={FirstTopicContent.definition.content}
          />
        )}
        {FirstTopicContent.imageExplanation &&
          Array.isArray(FirstTopicContent.imageExplanation) &&
          FirstTopicContent.imageExplanation.map(
            (image: ImageBoxProps, index: number) => (
              <ImageExplanationBox
                key={index}
                title={image.title}
                src={image.src}
                imageAlt={image.imageAlt}
                explanation={image.explanation}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Observations;
