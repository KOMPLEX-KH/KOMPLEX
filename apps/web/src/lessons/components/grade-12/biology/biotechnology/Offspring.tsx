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
    title: "២. ក្លូន",
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
            ក្លូន គឺជាកោសិកាលូតលាស់មួយក្រុម
            ឬសារពាង្គកាយមួយក្រុមដែលកើតចេញពីកោសិកាមេតែមួយ
            ហើយមានព័ត៌មានសេនេទិចដូចគ្នា។
          </li>
          <li>
            គេបណ្តុះបាក់តេរីក្នុងប្រអប់ប៉េទ្រីក្នុងមជ្ឈដ្ឋានចិញ្ចឹមអាកា-អាកាបាក់តេរីចែកខ្លួនជាបន្តបន្ទាប់ហើយបង្កើតបានបាក់តេរីរាប់លាន
            បាក់តេរីទាំងអស់នោះហៅថាក្លូន។
          </li>
        </ul>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.១ ក្លូនរុក្ខជាតិ",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/carrot.png",
      imageAlt: "",
      explanation: [
        "គេយកពន្លកការ៉ុតមួយទៅបណ្តុះក្នុងបំពង់កែវ ដែលមានមជ្ឈដ្ឋានចិញ្ចឹម។",
        "1ខែក្រោយមកគេទទួលបានម៉ាសកោសិកាធំមួយហៅថាមីក្រូកាល់។",
        "គេកាត់មីក្រូកាល់ជាបំណែកតូចៗ រួចយកទៅបណ្តុះបន្តក្នុងបំពង់កែវផ្សេងទៀត។",
        "គេធ្វើបែបនេះដដែលៗបន្តទៅទៀតរហូតដល់ខែទី១០ គេទទួលបានកាល់រាប់រយពាន់។",
        "នៅខែទី១០ គេយកកាល់ទាំងនេះទៅដាក់ក្នុងបំពង់កែវដែលមានមជ្ឈដ្ឋានចិញ្ចឹមសម្រាប់ឲ្យកាល់ទាំងនេះ មានលទ្ធភាពបង្កបានជាឬស ដើម ស្លឹក។",
        "ទីបញ្ចប់គេបានកូនរុក្ខជាតិដូចៗគ្នារាប់រយពាន់ដើម។",
      ],
    },
  ],
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.២ ក្លូនសត្វ",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1"></div>,
    ],
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/cow.png",
      imageAlt: "",
      explanation: [
        "ដំបូងគេជ្រើសរើសមេគោពូជល្អមួយ (ផ្តល់សាច់ និងទឹកដោះច្រើន)។",
        "បន្ទាប់មកគេបញ្ចូលស្តែម៉ាតូសូអ៊ុតរបស់គោឈ្មោលល្អមួយ ទៅក្នុងស្បូនរបស់មេនោះ ដើម្បីធ្វើឲ្យវាមានការបង្កកំណើត។",
        "ក្រោយការបង្កកំណើត គេទុកឲ្យស៊ីកូតធ្វើមីតូសបន្តបន្ទាប់បានជាអំប្រ៊ីយ៉ុងដែលមានកោសិកាចំនួន៣២",
        "តាមបច្ចេកវិទ្យា គេយកអំប្រ៊ីយ៉ុងនោះចេញពីមេគោ ហើយគេដកយកណ្វៃយ៉ូ ចេញពីកោសិកាទាំង១០ របស់អំប្រ៊ីយ៉ុងនេះទៅបញ្ចូលក្នុងអូវុល១០ ដែលគេបានដកយកណ្វៃយ៉ូចេញ។ អូវុលទាំង១០នេះជាអូវុលរបស់មេគោទាំង១០ពូជផ្សេងៗគ្នា។",
        "គេទុកកោសិកាទាំង១០នេះក្នុងកែវ ដើម្បីឲ្យធ្វើមីតូស បន្ទាប់មកយកអំប្រ៊ីយ៉ុងទាំង១០ទៅដាក់បញ្ចូលក្នុងស្បូននៃមេគោទាំង១០។",
        "ក្រោយមកមេគោទាំង១០ខាងលើបានបង្កើតកូនគោ១០ក្បាលដែលមានលក្ខណះដូចគ្នាទាំងអស់។",
      ],
    },
  ],
};

const Offspring = () => {
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

export default Offspring;
