import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣.១ បរិមាណ ADN ក្នុងកោសិកា",
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
          <p>
            នុយក្លេអូទីតតែ៤ប្រភេទអាចបង្កើតបាន ADN ខុសៗគ្នាជាច្រើនរាប់មិនអស់។
            ADNមានលក្ខណះពិសេសដូចតទៅ៖
          </p>
          <ul className="list-disc ml-3 flex flex-col gap-3">
            <li>
              ឯកត្តះក្នុងប្រភេទមួយ មានADNខុសៗគ្នា ដោយសារតំណលំដាប់ (ចំនួន ប្រភេទ
              និងទីតាំង) នុយក្លេអូទីត។
            </li>
            <li>ឯកត្តះក្នុងប្រភេទតែមួយ បរិមាណADNថេរជានិច្ច។</li>
            <li>បរិមាណADN ប្រែប្រួលពីប្រភេទមួយ ទៅប្រភេទមួយទៀត។</li>
            <li>
              បរិមាណADN ប្រែប្រួលទៅតាមប្រភេទកោសិកា។ ក្នុងកោសិកាបន្តពូជ បរិមាណADN
              មានតែពាក់កណ្តាលក្នុងកោសិកាលូតលាស់។
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "៣.២ ស្វ័យតំឡេីងទ្វេ ADN",
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
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>ស្វ័យដំឡើងទ្វេADN ធ្វើនៅក្នុងណ្វៃយ៉ូ នៅវគ្គ S នៃចន្លោះវគ្គ។</li>
          <li>
            ស្វ័យដំឡើងទ្វេADN ជាបាតុភូតមួយដែលម៉ូលេគុលADN
            មេមួយបង្កើតដោយខ្លួនឯងនូវម៉ូលេគុលADNកូនពីរដូចគ្នាបេះបិទហើយដូចគ្នាទៅនឹងម៉ូលេគុល
            ADNមេ។
          </li>
        </ul>
      </>
    ),
  },
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ក. ដំណើរការស្វ័យតំឡើងទ្វេ ADN",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ដំណើរការស្វ័យតំឡើងទ្វេ ADN",
      src: "/docs/grade-12/biology/adn/pic1.png",
      imageAlt: "",
      explanation: [
        "ដំបូងច្រវ៉ាក់ទាំងពីររបស់ADNចាប់ផ្តើមរលា។",
        "ច្រវាក់ទាំងពីររបស់ ADNមេ បែកចេញពីគ្នាដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយដែលភ្ជាប់បាសទាំងពីរ។",
        "នុយក្លេអូទីតសេរីក្នុងណ្វៃយ៉ូ រត់ទៅភ្ជាប់នុយក្លេអូទីតក្នុងច្រវាក់នីមួយៗនៃម៉ូលេគុល ADN មេ តាមគោលការណ៍បំពេញបាស A-T,C-G ។",
        "ការផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែន និងការភ្ជាប់នុយក្លេអូទីតសេរីប្រព្រឹត្តទៅក្រោមអំពើរបស់អង់ស៊ីម ADNប៉ូលីមែរ៉ាស។",
        "ពេលស្វ័យដំឡើងទ្វេADN ច្រវ៉ាក់នីមួយៗនៃម៉ូលេគុលADN មេ ធ្វើជាពុម្ពគំរូ សម្រាប់សំយោគច្រវាក់ម្ខាងទៀត។ ហេតុនេះគេបានADN កូនពីរដូចគ្នាបេះបិទ ដែលADNកូននីមួយៗមានច្រវ៉ាក់ម្ខាងជារបស់ADNមេ ច្រវាក់ម្ខាងទៀតជាច្រវ៉ាក់កើតថ្មី។ ដូចនេះស្វ័យដំឡើងទ្វេ ADNប្រព្រឹត្តទៅតាមរបៀបពាក់កណ្តាលរក្សាទុក។",
      ],
    },
  ],
};

const FourthTopicContent: TopicContent = {
  definition: {
    title: "ខ. ស្វ័យតំឡេីងទ្វេ ADNក្នុងប្រូការីយ៉ូត",
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
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>
            ចាប់ផ្តើមពីចំណុចតែមួយ (ភ្នែកស្វ័យដំឡើងទ្វេ)
            រួចញែកទៅតាមទិសដៅពីរផ្ទុយគ្នា រហូតជួបគ្នា។
          </li>
          <li>
            មានសភាពលឿនប្រហែល{" "}
            <span className="text-[13px]">
              <InlineMath math="10^{6}" />
            </span>{" "}
            គូបាសក្នុងមួយនាទី។
          </li>
        </ul>
      </>
    ),
  },
};

const FifthTopicContent: TopicContent = {
  definition: {
    title: "គ. ស្វ័យតំឡេីងទ្វេ ADNក្នុងអឺការីយ៉ូត",
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
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>
            ចាប់ផ្តើមពីចំណុចជាច្រើន (ភ្នែកស្វ័យដំឡើងទ្វេ)
            រួចញែកទៅតាមទិសដៅពីរផ្ទុយគ្នារហូតជួបគ្នា។
          </li>
          <li>មានសភាពយឺតប្រហែល500ទៅ5000 គូបាសក្នុងមួយវិនាទី។</li>
        </ul>
      </>
    ),
  },
};

const SixthTopicContent: TopicContent = {
  definition: {
    title: "៣.៣ នាទីស្វ័យតំឡើងទ្វេ",
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
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>រ៉ាប់រងការដំឡើងទ្វេនៃក្រូម៉ូសូម។</li>
          <li>រ៉ាប់រងចំនួន និងរូបរាងក្រូម៉ូសូមឲ្យនៅដដែលក្រោយចំណែកកោសិកា។</li>
          <li>រក្សាព័ត៌មានសេនេទិចឲ្យនៅថេរដដែលឆ្លងកាត់ជំនាន់កោសិកា។</li>
        </ul>
      </>
    ),
  },
};

const DnaQuantity = () => {
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
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox
            title={FifthTopicContent.definition.title}
            content={FifthTopicContent.definition.content}
          />
        )}
        {FifthTopicContent.tip && (
          <TipBox
            title={FifthTopicContent.tip.title}
            content={FifthTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox
            title={SixthTopicContent.definition.title}
            content={SixthTopicContent.definition.content}
          />
        )}
        {SixthTopicContent.tip && (
          <TipBox
            title={SixthTopicContent.tip.title}
            content={SixthTopicContent.tip.content}
          />
        )}
      </div>
    </div>
  );
};

export default DnaQuantity;
