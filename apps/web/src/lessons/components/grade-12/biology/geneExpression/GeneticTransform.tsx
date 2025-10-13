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

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២. ការចម្លងព័ត៌មានសេនេទិច",
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
        <div className="flex flex-col items-start gap-3">
          <p>អ៊ីដ្រូលីសARN គេទទួលបានធាតុបង្កបីគឺ:</p>
          <ul className="list-disc ml-5 flex flex-col gap-3">
            <li>
              អាស៊ីតផូស្វ័ររិច{" "}
              <span className="text-[13px]">
                <InlineMath math="H_2PO_4^-" />
              </span>
            </li>
            <li>
              ស្កររីបូស{" "}
              <span className="text-[13px]">
                <InlineMath math="C_5H_{10}O_5" />
              </span>
            </li>
            <li>
              បាសអាសូត{" "}
              <span className="text-[13px]">
                <InlineMath math="C_5H_5N_5O" />
              </span>
            </li>
            <p>_ ពួរីន: អាដេនីន(A) និងកានីន(G)</p>
            <p>_ ពីរីមីឌីន: ស៊ីតូស៊ីន(C) និងអ៊ុយរ៉ាស៊ីល (U)</p>
          </ul>
          <p>តាមមុខងារគេចែកARNជាបីប្រភេទគឺ:</p>
          <ul className="list-disc ml-5 flex flex-col gap-3">
            <li>
              ARNនាំសារ <InlineMath math="( ARN_{m} )" />
            </li>
            <li>
              ARNដឹកនាំ <InlineMath math="( ARN_{t} )" />
            </li>
            <li>
              ARNរីបូសូម <InlineMath math="( ARN_{r} )" />
            </li>
          </ul>
        </div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic3.png",
      imageAlt: "",
      explanation: [],
    },
  ],
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.១ រូបផ្គុំ ARN នាំសារ",
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
        <p>
          ម៉ូលេគុល{" "}
          <span className="text-[13px]">
            <InlineMath math="ARN_{m} " />
          </span>{" "}
          កើតឡើងពីច្រវាក់រីបូនុយក្លេអូទីតតែ1ខ្សែ ។ រីបូនុយក្លេអូទីតនីមួយៗ
          ផ្សំឡើងពីអាស៊ីតផូស្វ័ររិចមួយម៉ូលេគុល ស្កររីបូសមួយម៉ូលេគុល
          និងបាសអាសូតមួយម៉ូលេគុល។ ដោយបាសអាសូតមាន៤ប្រភេទគឺ A, U, C, G ។
          ដូចនេះរីបូនុយក្លេអូទីតក៏មាន៤ប្រភេទដែរ។
        </p>
      </>
    ),
  },
};

const FourthTopicContent: TopicContent = {
  definition: {
    title: "២.២ ចលនការចម្លងក្រម",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "អង់ស៊ីមARNប៉ូលីមេរ៉ាសមាននាទី",
    content: (
      <>
        <ul className="list-disc ml-5 flex flex-col gap-3">
          <li>
            ទទួលស្គាល់សញ្ញាសេនេទិចនៅលើADNដែលអាចឲ្យចាប់ផ្តើមនិងបញ្ចប់ការសំយោគ{" "}
            <span className="text-[13px]">
              <InlineMath math="ARN_{m} " />
            </span>{" "}
            ត្រង់កន្លែងជាក់លាក់
          </li>
          <li>
            បើកម៉ូលេគុល ADN ដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយ
            ដែលភ្ជាប់ច្រវាក់ទាំងពីរ។
          </li>
          <li>
            ធ្វើឲ្យមានប៉ូលីមែកម្មនៃនុយក្លេអូទីត (ឬការសំយោគARN):
            រីបូនុយក្លេអូទីតសេរីចូលទៅភ្ជាប់នឹងនុយក្លេអូទីតនៃច្រវាក់ម្ខាងរបស់អង្កត់ADN
            តាមគោលការណ៍បំពេញបាសគឺ A-U, T-A, C-G, G-C ។
          </li>
          <li>
            ពេលសំយោគរួចARN ក៏ផ្តាច់ខ្លួនចេញពីADN
            ហើយចាកចេញពីណៃ្វយ៉ូទៅក្នុងស៊ីតូប្លាស។
          </li>
          <li>ច្រវាក់ADNទាំងពីរ ក៏ភ្ជាប់គ្នាវិញ។</li>
          <li>
            ដូចនេះARN មាននាទីចម្លងព័ត៌មានសេនេទិចគឺ
            ចម្លងតំណលំដាប់នុយក្លេអូទីតច្រវាក់ម្ខាងរបស់អង្កត់ADN
            ឬសែនឲ្យទៅជាតំណលំដាប់រីបូនុយក្លេអូទីត
            ហើយបញ្ជូនតំណលំដាប់នេះទៅកាន់រីបូសូមដើម្បីសំយោគប្រូតេអ៊ីន។
          </li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic4.png",
      imageAlt: "",
      explanation: [
        "ចលនការចម្លងក្រមប្រព្រឹត្តទៅនៅក្នុងណ្វៃយ៉ូនៃកោសិកាក្នុងចន្លោះវគ្គរបស់វដ្តកោសិកា។",
        "ARNm ចម្លងព័ត៌មានសេនេទិចចេញពី ច្រវាក់ម្ខាងរបស់អង្កត់ADNឬសែន។",
      ],
    },
  ],
};

const GeneticTransform = () => {
  return (
    <div>
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
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox
            title={FourthTopicContent.definition.title}
            content={FourthTopicContent.definition.content}
          />
        )}
        {FourthTopicContent.tip && (
          <TipBox
            title={FourthTopicContent.tip.title}
            content={FourthTopicContent.tip.content}
          />
        )}
        {FourthTopicContent.imageExplanation &&
          Array.isArray(FourthTopicContent.imageExplanation) &&
          FourthTopicContent.imageExplanation.map(
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

export default GeneticTransform;
