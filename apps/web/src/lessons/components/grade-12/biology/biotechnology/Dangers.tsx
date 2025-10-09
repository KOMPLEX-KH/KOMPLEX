import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import {
  ThreeDExplanationBox,
  ThreeDExplanationBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "ផលវិបាកនៃវិស្វកម្មសេនេទិច",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "គ្រោះថ្នាក់ប៉ះពាល់ដល់បរិស្ថាន",
      src: "/docs/grade-12/biology/mixs/pic16.jpg",
      imageAlt: "",
      explanation: [
        "រុក្ខជាតិGMធ្វើឲ្យបាត់បង់ដល់ជីវិតជីវចម្រុះ។",
        "សត្វល្អិតធន់នឹងរុក្ខជាតិ GM មានសកម្មភាពជាតិពុលដូចរុក្ខជាតិ GM ធ្វើឲ្យរុក្ខជាតិឈ្មោលអារមិនអាចផលិតគ្រាប់លំអងសម្រាប់បន្តពូជ។",
      ],
    },
    {
      title: "គ្រោះថ្នាក់ដល់សុខភាព",
      src: "/docs/grade-12/biology/mixs/pic17.png",
      imageAlt: "",
      explanation: [
        "ផលិតសារធាតុគីមីប្រើប្រាស់ក្នុងសង្គ្រាម។",
        "អង់ទីហ្សូទិចមិនអាចព្យាបាលជម្ងឺ ដែលបណ្តាលមកពីមានសែនធន់នឹងអង់ទីហ្សូទិច។",
      ],
    },
    {
      title: "ប៉ះពាល់សីលធម៌ និងសង្គម",
      src: "/docs/grade-12/biology/mixs/pic18.png",
      imageAlt: "",
      explanation: [
        "ធ្វើឲ្យមានសែនមុយតាស្យុង ដែលមានឥទ្ធិពលអាក្រក់ ដល់សន្តានក្រោយ។",
        "ប៉ះពាល់ជាមួយសាសនា បែងចែកវណ្ណះ (មានតែអ្នកមានទើបធ្វើវិស្វកម្មសេនេទិចបាន)។",
      ],
    },
    {
      title: "គ្រោះថ្នាក់ប៉ះពាល់ដល់សេដ្ឋកិច្ច",
      src: "/docs/grade-12/biology/mixs/money.jpg",
      imageAlt: "",
      explanation: [
        "ក្រុមហ៊ុនដែលផលិតគ្រាប់រុក្ខជាតិGM មានសិទ្ធិការពារស្របច្បាប់មិនអនុញ្ញាតឲ្យក្រុមហ៊ុនដទៃផលិតរុក្ខជាតិGM។ ដូចនេះកសិករត្រូវទិញគ្រាប់ពូជពីក្រុមហ៊ុននោះជារៀងរាល់ឆ្នាំ។",
      ],
    },
  ],
};

const Dangers = () => {
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

export default Dangers;
