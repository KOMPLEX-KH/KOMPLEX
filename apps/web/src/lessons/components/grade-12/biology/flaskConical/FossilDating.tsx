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
    title: "២. ការកំណត់អាយុផូស៊ីល",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className="flex flex-col items-start gap-2">
          <p>អ្នកវិទ្យាសាស្ត្រអាចកំណត់អាយុផូស៊ីលតាមរបៀប២យ៉ាងគឺ៖</p>
          <ul className="list-disc ml-4 flex flex-col gap-2">
            <li>ការកំណត់តាមស្រទាប់សិលា</li>
            <li>ការកំណត់តាមសារធាតុវិទ្យុសកម្ម។</li>
          </ul>
        </div>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.១ ការកំណត់តាមស្រទាប់សិលា",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic31.png",
      imageAlt: "",
      explanation: [
        "គេប្រៀបធៀបអាយុធៀបផូស៊ីល ដែលមាននៅក្នុង ស្រទាប់សិលាកម្ទេចកំណ។",
        "ផូស៊ីលនៅស្រទាប់លើគេបង្អស់ មានអាយុតិចជាងគេ ហើយផូស៊ីលស្ថិតនៅស្រទាប់ក្រោមគេបង្អស់មានអាយុច្រើនជាងគេ។",
      ],
    },
  ],
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.២ ការកំណត់តាមសារធាតុវិទ្យុសកម្ម",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>
            សារធាតុវិទ្យុសកម្មអាចបំបែក ហើយប្លែងជាសារធាតុមួយផ្សេងទៀត
            ហើយល្បឿននៃការបំបែកនេះថេរ មិនទាក់ទង នឹងលក្ខខណ្ឌនៃមជ្ឈដ្ឋានក្រៅទេ។
          </li>
          <li>
            ក្នុងការកំណត់អាយុសិលា ឬផូស៊ីល
            គេអាចគណនារយះពេលនៃការបំបែកសារធាតុវិទ្យុសកម្ម ដែលមានក្នុងផូស៊ីល
            ឬសិលានោះ។
          </li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>
          ចំពោះផូស៊ីល គេអាចគណនារយះពេលនៃការបំបែក <InlineMath math="C^{14} " /> ។
          គេប្រៀបធៀបផលធៀប <InlineMath math="\frac{C^{14}}{C^{12}}" />{" "}
          នៅក្នុងផូស៊ីល និងក្នុង បរិយាកាស។
          បើផលធៀបនៅក្នុងផូស៊ីលស្មើនិងពាក់កណ្តាលនៃផលធៀបក្នុងបរិយាកាស
          ផូស៊ីលមានអាយុ5730ឆ្នាំ។
        </p>
      </div>,
    ],
  },
};

const FossilDating = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox
            title={FirstTopicContent.definition.title}
            content={FirstTopicContent.definition.content}
          />
        )}
        {FirstTopicContent.tip && (
          <TipBox
            title={FirstTopicContent.tip.title}
            content={FirstTopicContent.tip.content}
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
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox
            title={SecondTopicContent.definition.title}
            content={SecondTopicContent.definition.content}
          />
        )}
        {SecondTopicContent.tip && (
          <TipBox
            title={SecondTopicContent.tip.title}
            content={SecondTopicContent.tip.content}
          />
        )}
        {SecondTopicContent.imageExplanation &&
          Array.isArray(SecondTopicContent.imageExplanation) &&
          SecondTopicContent.imageExplanation.map(
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
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox
            title={ThirdTopicContent.definition.title}
            content={ThirdTopicContent.definition.content}
          />
        )}
        {ThirdTopicContent.tip && (
          <TipBox
            title={ThirdTopicContent.tip.title}
            content={ThirdTopicContent.tip.content}
          />
        )}
        {ThirdTopicContent.imageExplanation &&
          Array.isArray(ThirdTopicContent.imageExplanation) &&
          ThirdTopicContent.imageExplanation.map(
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
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} />
        )}
      </div>
    </div>
  );
};

export default FossilDating;
