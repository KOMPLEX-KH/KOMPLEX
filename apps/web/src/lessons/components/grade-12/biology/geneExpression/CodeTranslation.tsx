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

export const FirstTopicContent: TopicContent = {
  definition: {
    title: "៤.១ រីបូសូម",
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
            រីបូសូមបង្កឡើងដោយឯកតារងពីរគឺ ឯកតារងតូចនិងឯកតារងធំឯកតារងនីមួយៗកើតពី{" "}
            <span className="text-[13px]">
              <InlineMath math="ARN_{r}" />
            </span>{" "}
            និងប្រូតេអ៊ីន។
          </li>
          <li>
            <span className="text-[13px]">
              <InlineMath math="ARN_{r}" />
            </span>{" "}
            កើតឡើងក្នុងណ្វៃយ៉ូ ឯប្រូតេអ៊ីនរីបូសូម
            កើតក្នុងស៊ីតូប្លាសបន្ទាប់មកធ្វើដំណើរចូលក្នុងណ្វៃយ៉ូ។
          </li>
          <li>
            ក្នុងណ្វៃយ៉ូ{" "}
            <span className="text-[13px]">
              <InlineMath math="ARN_{r}" />
            </span>{" "}
            និងប្រូតេអ៊ីនរីបូសូមភ្ជាប់គ្នាបង្កើតបានឯកតារងតូច និងឯកតារងធំ។
          </li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic7.png",
      imageAlt: "",
      explanation: [
        "ឯកតារងទាំងពីរចេញពីណ្វៃយ៉ូ ទៅក្នុងស៊ីតូប្លាសភ្ជាប់គ្នាបង្កើតបានរីបូសូម នៅលើបណ្តាញរ៉េទីគុយលូមអង់ដូប្លាស។",
        "រីបូសូមផ្តុំគ្នាជាប៉ូលីសូម កើតមានការសំយោគប្រូតេអ៊ីន នៅទីកន្លែងនេះ។",
      ],
    },
  ],
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "៤.២ ARN ដឹកនាំ",
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
            <span className="text-[13px]">
              <InlineMath math="ARN_{t}" />
            </span>{" "}
            ជាម៉ូលេគុលដែលខ្លីជាងគេ។
            វាកើតឡើងពីច្រវាក់រីបូនុយក្លេអូទីតតែ១ខ្សែដែលមានវីបូនុយក្លេអូទីតតែពី៧០ទៅ៨០ប៉ុណ្ណោះ។
          </li>
          <li>
            <span className="text-[13px]">
              <InlineMath math="ARN_{t}" />
            </span>{" "}
            មាននាទីដឹកអាស៊ីតអាមីនេពីស៊ីតូប្លាស
            ទៅកាន់រីបូសូមដើម្បីចូលរួមបកប្រែព័ត៌មានសេនេទិច ឲ្យទៅជាប្រូតេអ៊ីន។
          </li>
          <li>
            ការភ្ជាប់អាស៊ីតអាមីនេលើ{" "}
            <span className="text-[13px]">
              <InlineMath math="ARN_{t}" />
            </span>{" "}
            យថាប្រភេទប្រព្រឹត្តឡើងដោយអន្តរគមន៍ពី:
          </li>
          <p>
            _ អង់ស៊ីមអាមីណូអាស៊ីល{" "}
            <span className="text-[13px]">
              <InlineMath math="ARN_{t}" />
            </span>{" "}
            សាំងតេតាស
          </p>
          <p>_ ថាមពលATP ចាំបាច់សម្រាប់ភ្ជាប់នេះ</p>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic8.png",
      imageAlt: "",
      explanation: [
        "ARN_t រុំបត់បែនជារាងកំពកបី។ កំពកកណ្តាលមានបាសបីតគ្នាសម្រាប់បំពេញជាមួយកូដុងហៅថាអង់ទីកូដុង។",
        "ARN_t មានកន្លែងពិសេសពីរដែលទាក់ទងនឹងនាទីសំខាន់ពីរគឺ:",
        "_ ទទួលស្គាល់កូដុង (ARN_m) ដោយសាអង់ទីកូដុង",
        "_ ភ្ជាប់អាស៊ីតអាមីនេយថាប្រភេទមួយ",
      ],
    },
  ],
};

const CodeTranslation = () => {
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
    </div>
  );
};

export default CodeTranslation;
