import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";

import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import {
  ThreeDExplanationBox,
  ThreeDExplanationBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import { InlineMath } from "react-katex";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "២.១ ធាតុបង្ករបស់ ADN",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <ul className="list-disc ml-5 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <li>អ៊ីដ្រូលីសម៉ូលេគុលADN ទទួលបានធាតុបង្កបី:</li>
            <ol className="ml-3 list-decimal">
              <li>
                អាស៊ីតផូស្វ័រិច <InlineMath math="H_3PO_4" />
              </li>
              <li>
                ស្ករដេអុកស៊ីរីបូស <InlineMath math="C_{5}H_{10}O_{4}" />
              </li>
              <li>បាសអាសូត</li>
              <p>_ បាសពួរីន: អាដេនីន(A) និងកានីន(G)។</p>
              <p>_ បាសពីរីមីឌីន: ទីមីន(T) និងស៊ីតូស៊ីន(C)។</p>
            </ol>
          </div>
          <div>
            <li>ម៉ូលេគុលADN ជាប៉ូលីមែនៃនុយក្លេអូទីត។</li>
          </div>
          <div>
            <li>
              នុយក្លេអូទីតនីមួយៗ ផ្សំឡើងពី អាស៊ីតផូស្វ័រិចមួយម៉ូលេគុល
              ស្ករដេអុកស៊ីរីបូសមួយម៉ូលេគុល និងបាសអាសូតមួយម៉ូលេគុល។
            </li>
          </div>
          <div>
            <li>
              ដោយសារបាសអាសូតមាន៤ប្រភេទគឺA,T,C,G
              ដូចនេះនុយក្លេអូទីតក៏មាន៤ប្រភេទដែរ។
            </li>
          </div>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "បាសអាសូត",
      src: "/docs/grade-12/biology/mixs/pic2.png",
      imageAlt: "",
      explanation: [
        "បាសពួរីន : អាដេនីន(A) , កានីន(G)",
        "បាសពីរីមីឌីន : ទីមីន(T) , ស៊ីតូស៊ីន(C)",
        "ការភ្ជាប់គូរពីរនេះធានាថា ADN មានរចនាសម្ព័ន្ធទ្វេស្រទាប់ដែលមានស្ថេរភាព",
      ],
    },
  ],
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.២ លក្ខណៈបាសអាសូត",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <div className="flex flex-col items-start gap-3">
          <p>
            ក្នុងឆ្នាំ១៩៥១ លោកសាហ្កាវ គីមី-ជីវ:វិទូ
            ជនជាតិអាមេរិកបង្ហាញនូវបរិមាណបាសអាសូត
            ក្នុងម៉ូលេគុលADNរបស់ភាវរស់មួយចំនួន(គិតជាភាគរយ):
          </p>
          <ul className="list-disc ml-3 flex flex-col gap-3">
            <li>បាសរបស់ADN ប្រែប្រួលពីប្រភេទមួយទៅប្រភេទមួយទៀត។</li>
            <li>ក្នុងប្រភេទភាវរស់មួយ %A = %T និង %C = %G ។</li>
            <li>បាសពួរីន A+G = 50% , បាសពីរីមីឌីន C+T = 50% ។</li>
            <li className="text-[13px]">
              <InlineMath math="A = T \Rightarrow \frac{A}{T} = 1 , \quad C = G \Rightarrow \frac{C}{G} = 1 , \Rightarrow \frac{A+G}{C+T} = 1" />{" "}
              ថេរជានិច្ច ។
            </li>
            <li className="text-[13px]">
              <InlineMath math="A ≠ C \Rightarrow \frac{A}{C}  1 , \quad T ≠ G \Rightarrow \frac{T}{G}  1 , \Rightarrow \frac{A+T}{C+G} ≠ 1" />{" "}
              ប្រែប្រួល ។
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.៣ គំរូម៉ូលេគុល ADN",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណាំ",
    content: (
      <>
        <div className="flex flex-col gap-3 items-start">
          <ul className="list-disc ml-3 flex flex-col gap-3">
            <li>តាមគោលការណ៏បំពេញបាស A-T , C-G នោះ A=T និង C=G</li>
            <p>_ -AGC TAC GGC TAC TAG-</p>
            <p>_ -TCG ATG CCG ATG ATC-</p>
            <li>
              ប្រវែងមួយជំហាន ឬមួយរង្វេលស្មេីនឹង 3.4nm មាន10គូបាសបំពេញគ្នា ។
              ដូចនេះចន្លោះពីនុយក្លេអូទីតមួយទៅនឹងនុយក្លេអូទីតមួយទៀតមានប្រវែង
              0.34nm ។
            </li>
          </ul>
        </div>
      </>
    ),
  },
  threeDExplanation: [
    {
      title: "ក្នុងឆ្នាំ១៩៥៣លោកវ៉ាត់ស៊ុន និងគ្រីកបានបង្ហាញថា៖",
      src: "/docs/grade-12/biology/mixs/test.glb",
      target: [0, 2, 0],
      scale: 2,
      canvasBackgroundColor: "white",
      explanation: [
        "ម៉ូលេគុលADN ជាប៉ូលីមែនៃនុយក្លេអូទីត។ វាកើតពីច្រវាក់នុយក្លេអូទីតពីរខ្សែស្របគ្នា រុំជារង្វេលជុំវិញអ័ក្សបញ្ឈរមួយ ដែលមានអង្កត់ផ្ចិត2nm ។",
        "ក្នុងច្រវាក់ម្ខាងៗ នុយក្លេអូទីតភ្ជាប់គ្នាដោយសម្ព័ន្ធគីមី(សម្ព័ន្ធកូវ៉ាឡង់) រវាងអាស៊ីតផូស្វ័រិចនៃនុយក្លេអូទីតមួយ ទៅនឹងស្ករដេអុកស៊ីរីបូសនៃនុយក្លេអូទីតមួយទៀតដែលនៅជាប់គ្នា។",
        "ច្រវាក់ទាំងពីររបស់ADN ភ្ជាប់គ្នាទៅវិញទៅមកដោយសារសម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយរវាងបាស២បំពេញគ្នាគឺ:",
        "បាសAបំពេញT(A-T)ភ្ជាប់ដោយសម្ព័ន្ធអ៊ីដ្រូសែន២",
        "បាសCបំពេញG(C-G)ភ្ជាប់ដោយសម្ព័ន្ធអ៊ីដ្រូសែន៣",
      ],
    },
  ],
  imageExplanation: [
    {
      title: "ក្នុងឆ្នាំ១៩៥៣លោកវ៉ាត់ស៊ុន និងគ្រីកបានបង្ហាញថា៖",
      src: "/docs/grade-12/biology/mixs/dnaPic.png",
      imageAlt: "",
      explanation: [
        "ម៉ូលេគុលADN ជាប៉ូលីមែនៃនុយក្លេអូទីត។ វាកើតពីច្រវាក់នុយក្លេអូទីតពីរខ្សែស្របគ្នា រុំជារង្វេលជុំវិញអ័ក្សបញ្ឈរមួយ ដែលមានអង្កត់ផ្ចិត2nm ។",
        "ក្នុងច្រវាក់ម្ខាងៗ នុយក្លេអូទីតភ្ជាប់គ្នាដោយសម្ព័ន្ធគីមី(សម្ព័ន្ធកូវ៉ាឡង់) រវាងអាស៊ីតផូស្វ័រិចនៃនុយក្លេអូទីតមួយ ទៅនឹងស្ករដេអុកស៊ីរីបូសនៃនុយក្លេអូទីតមួយទៀតដែលនៅជាប់គ្នា។",
        "ច្រវាក់ទាំងពីររបស់ADN ភ្ជាប់គ្នាទៅវិញទៅមកដោយសារសម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយរវាងបាស២បំពេញគ្នាគឺ:",
        "បាសAបំពេញT(A-T)ភ្ជាប់ដោយសម្ព័ន្ធអ៊ីដ្រូសែន២",
        "បាសCបំពេញG(C-G)ភ្ជាប់ដោយសម្ព័ន្ធអ៊ីដ្រូសែន៣",
      ],
    },
  ],
};

const MolecularForm = () => {
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
        {ThirdTopicContent.threeDExplanation &&
          Array.isArray(ThirdTopicContent.threeDExplanation) &&
          ThirdTopicContent.threeDExplanation.map(
            (threeD: ThreeDExplanationBoxProps, index: number) => (
              <ThreeDExplanationBox
                key={index}
                title={threeD.title}
                src={threeD.src}
                explanation={threeD.explanation}
                canvasBackgroundColor="white"
                scale={threeD.scale}
                target={threeD.target}
              />
            )
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

export default MolecularForm;
