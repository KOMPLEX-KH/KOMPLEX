import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title:
      "២.១ ការប្រៀបធៀបភាវៈរស់នៅប្រជុំកោះកាឡាប៉ាកូសជាមួយភាវៈរស់នៅអាមេរិចខាងត្បូង",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic21.webp",
      imageAlt: "",
      explanation: [
        "បង្គួយនៅលើកោះកាឡាប៉ាកូសមានក្រញ៉ាំជើងធំដែលអាចធ្វើឲ្យវាអាចតោងថ្មរអិលតាមមាត់សមុទ្រ ហើយវាស៊ីសារាយសមុទ្រ។",
      ],
    },
    {
      title: "",
      src: "/docs/grade-12/biology/mixs/pic23.jpg",
      imageAlt: "",
      explanation: [
        "បង្គួយនៅលើទ្វីបអាមេរិចខាងត្បូងមានក្រញ៉ាំជើងតូចៗ សម្រាប់តោងលើដើមឈើ វាស៊ីសត្វល្អិត និងស្លឹក។",
      ],
    },
  ],
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២.២ ការប្រៀបធៀបភាវៈរស់ផ្សេងៗនៃប្រជុំកោះកាឡាប៉ាកូស",
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
          ដាវិនសង្កេតឃើញភាវៈរស់ មានលក្ខណះខុសគ្នាខ្លះៗ ដូចជា
          អណ្ដើកលើកោះខ្លះមានស្នូករាងមូល ហើយកោះខ្លះទៀតអណ្ដើកមានស្នូកសំប៉ែត។
        </p>
      </>
    ),
  },
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "២.៣. បន្សំ",
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
        <ul className="list-disc pl-5 flex flex-col gap-3 ">
          <li>
            បន្សំ ជាលក្ខណះមួយដែលធ្វើឲ្យភាវៈរស់ រស់រានមានជីវិត
            និងបន្តពូជបានសមស្របទៅនឹងមជ្ឈដ្ឋានដែលវារស់នៅ។
          </li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "លក្ខណះបន្សំរបស់សត្វស្លាបនៅលើប្រជុំកោះកាឡាប៉ាកូស៖",
      src: "/docs/grade-12/biology/mixs/pic22.jpg",
      imageAlt: "",
      explanation: [
        "ចំពុះវែងហើយតូចឆ្មារដើម្បីជញ្ជក់ស្រូបអាហារ។",
        "ចំពុះរាងកោងខុប ហើយស្រួច ដើម្បីចាប់ស៊ីរំពារ។",
        "ចំពុះវែងហើយធំសម្រាប់កើបត្រងយកអាហារ។",
        "ចំពុះសំប៉ែត សម្រាប់កញ្ជ្រោកយកអាហារក្នុងភក់។",
      ],
    },
  ],
};

const GalapagosOrganisms = () => {
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

export default GalapagosOrganisms;
