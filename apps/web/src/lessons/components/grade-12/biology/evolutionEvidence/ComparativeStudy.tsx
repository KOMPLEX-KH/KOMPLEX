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
    title: "២. ទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទផ្សេងៗ",
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
            អ្នកវិទ្យាសាស្ត្រធ្វើការប្រៀបធៀបម៉ូលេគុលADN
            និងម៉ូលេគុលប្រូតេអីននៃប្រភេទផ្សេងៗ
            ដើម្បីកំណត់រកទំនាក់ទំនងសែស្រឡាយរវាងប្រភេទភាវៈរស់ផ្សេងៗ។
          </li>
          <li>
            ភាវៈរស់ដែលមានទំនាក់ទំនងសែស្រឡាយជិត
            តែងមានតំណលំដាប់នុយក្លេអូទីតក្នុងម៉ូលេគុលADN
            និងតំណលំដាប់អាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីនដូចគ្នាភាគច្រើន។
          </li>
        </ul>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.១. ម៉ូលេគុលប្រូតេអ៊ីន",
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
            រូបផ្គុំរបស់ភាវៈរស់ទាំងអស់ បង្កឡើងពីប្រូតេអ៊ីន
            ដែលមានអាស៊ីតអាមីនេ២០ប្រភេទ។
          </li>
          <li>
            ប្រភេទប្រូតេអ៊ីនខុសគ្នា ដោយសារតំណលំដាប់ (ចំនួន ប្រភេទ និងទីតាំង)
            អាស៊ីតអាមីនេ។
          </li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <img src="/docs/grade-12/biology/adn/" alt="" />
        <p>
          ប្រូតេអ៊ីនអាំងស៊ុយលីនក្នុងថ្នាក់ថនិកសត្វ
          ខុសគ្នាពីប្រភេទមួយទៅប្រភេទមួយទៀតត្រង់តែអាស៊ីតអាមីនេទី​ 8 ទី 9 និងទី
          10។
        </p>
      </div>,
    ],
  },
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.២ ម៉ូលេគុលADN",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "គេអាចសន្និដ្ឋាននូវប្រវត្តិនៃការវិវត្តរបស់ភាវៈរស់ដោយ",
      src: "/docs/grade-12/biology/mixs/pic27.png",
      imageAlt: "",
      explanation: [
        "កំណត់រកតំណលំដាប់នុយក្លេអូទីតក្នុងសែន។",
        "កំណត់រកតំណលំដាប់អាស៊ីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអ៊ីន។",
      ],
    },
  ],
};

const ComparativeStudy = () => {
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
      </div>
    </div>
  );
};

export default ComparativeStudy;
