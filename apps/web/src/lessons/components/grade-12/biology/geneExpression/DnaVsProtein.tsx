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
    title: "១. ការប្រៀបធៀប",
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
        <ul className="list-disc ml-5 flex flex-col gap-3">
          <li>លក្ខណៈដូចគ្នា :</li>
          <p>_ ជាម៉ាក្រូម៉ូលេគុល</p>
          <p>_ ម៉ូលេគុលនីមួយៗ ជាច្រវាក់ម៉ូលេគុលតូចៗ ដែលជាម៉ូណូមែ</p>
          <p>
            _ ម៉ូលេគុលនីមួយៗ មានតំណលំដាប់ជាក់លាក់(នុយក្លេអូទីត ឬអាស៊ីតអាមីនេ)
          </p>
          <li>លក្ខណៈខុសគ្នា :</li>
          <div className="flex flex-col gap-3 md:flex-row md:gap-15 flex-wrap">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[15px]">+ ADN</p>
              <p>_ បង្កឡើងដោយនុយក្លេអូទីត៤ប្រភេទ។</p>
              <p>_ កើតពីច្រវាក់នុយក្លេអូទីតពីរបំពេញគ្នា។</p>
              <p>_ មានប្រវែងវែងជាង ម៉ាសម៉ូលេគុលធំ។</p>
              <p>_ នុយក្លេអូទីត៣កំណត់អាស៊ីតអាមីនេមួយ។</p>
              <p>_ តំណលំដាប់នុយក្លេអូទីត កំណត់តំណលំដាប់អាស៊ីតអាមីនេ។</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[15px]">+ ប្រូតេអ៊ីន</p>
              <p>_ បង្កឡើងដោយអាស៊ីតអាមីនេ ២០ប្រភេទ។</p>
              <p>_ កើតពីច្រវាក់ អាស៊ីតអាមីនេទោល។</p>
              <p>_ មានប្រវែងខ្លីជាង ម៉ាសម៉ូលេគុលតូច។</p>
              <p>_ អាស៊ីតអាមីនេមួយ កំណត់ឡើងដោយនុយក្លេអូទីត៣។</p>
              <p>_ តំណលំដាប់ អាស៊ីតអាមីនេកំណត់ឡើងដោយ តំណលំដាប់នុយក្លេអូទីត។</p>
            </div>
          </div>
        </ul>
      </>
    ),
  },
};

const DnaVsProtein = () => {
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
    </div>
  );
};

export default DnaVsProtein;
