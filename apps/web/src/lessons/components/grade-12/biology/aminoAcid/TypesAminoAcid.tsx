import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "២. ប្រភេទផ្សេងៗនៃអាសុីតអាមីនេ",
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
            អ៊ីដ្រូលីសប្រូតេអ៊ុនទទួលបានម៉ូណូមែ២០ប្រភេទ។ ម៉ូណូមែរបស់ប្រូតេអ៊ីន
            គឺអាស៊ីតអាមីនេ។
          </li>
          <li>អាស៊ីតអាមីនេនីមួយៗខុសគ្នាដោយសារ រ៉ាឌីកាល់R។</li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key={"q1"}>
        <div className="flex items-start gap-3">
          <p key={"p1"}>អាឡានីន </p>
          <div className="flex items-start gap-1 text-[12px]">
            <InlineMath math="H_{2}N-" />
            <div className="flex flex-col gap-0">
              <InlineMath math="CH-COOH" />
              <InlineMath math="|" />
              <InlineMath math="CH_{3}" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <p>សេរីន </p>
          <div className="flex items-start gap-1 text-[12px]">
            <InlineMath math="H_{2}N-" />
            <div className="flex flex-col gap-0">
              <InlineMath math="CH-COOH" />
              <InlineMath math="|" />
              <InlineMath math="CH_{2}OH" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <p>គ្លីស៊ីន </p>
          <div className="flex items-start gap-1 text-[12px]">
            <InlineMath math="H_{2}N-" />
            <div className="flex flex-col gap-0">
              <InlineMath math="CH-COOH" />
              <InlineMath math="|" />
              <InlineMath math="H" />
            </div>
          </div>
        </div>
      </div>,
    ],
  },
  hint: {
    content: (
      <>
        <ul className="list-disc flex flex-col gap-3 ml-4">
          <li>
            អាស៊ីតអាមីនេស្តង់ដា ជាអាស៊ីតអាមីនេទាំង២០ប្រភេទ
            ដែលជាធាតុបង្ករបស់ប្រូតេអ៊ីនគឺ វាមានក្រមសេនេទិចជាអ្នកកំណត់។
          </li>
          <li>
            អាស៊ីតអាមីនេគ្មានស្តង់ដា
            ជាអាស៊ីតអាមីនេដែលចាំបាច់ក្នងមេតាបូលីសនៃកោសិកា
            ប៉ុន្តែវាមិនមែនជាធាតុបង្ករបស់ប្រូតេអ៊ីនទេ។
          </li>
        </ul>
      </>
    ),
  },
};

const TypesAminoAcid = () => {
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
        {FirstTopicContent.example && (
          <ExampleBox question={FirstTopicContent.example.question} />
        )}
        {FirstTopicContent.hint && (
          <HintBox content={FirstTopicContent.hint.content} />
        )}
      </div>
    </div>
  );
};

export default TypesAminoAcid;
