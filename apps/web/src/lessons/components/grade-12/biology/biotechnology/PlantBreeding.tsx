import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១.១ ការបង្កាត់ជ្រេីសចំពោះរុក្ខជាតិ",
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
            ក្នុងការដាំដំណាំគេចង់បានរុក្ខជាតិជាអីប្រ៊ីតងាយស្រួលដាំ ឆាប់បានផល
            ធន់នឹងជម្ងឺ និងផ្តល់ទិន្នផលខ្ពស់។
          </li>
          <li>
            អីប្រ៊ីតកម្ម គឺជាការបង្កាត់រវាងមេបាប្រភេទខុសគ្នា ឬមានពូជខុសគ្នា
            ឬមានលក្ខណះខុសគ្នាផ្នែកសេនេទិច ដើម្បីឲ្យមានកូនចៅអីប្រ៊ីត។
          </li>
          <li>
            អេតេរ៉ូស៊ីល
            គឺជាបាតុភូតដែលផ្តល់ឲ្យក្នុងការបង្កាត់រវាងមេបាមានពូជខុសគ្នា
            ឬប្រភេទខុសគ្នា ឬមានសែស្រឡាយ ខុសគ្នា
            នូវសន្តានក្រោយជាអីប្រ៊ីតដែលមានកម្លាំងជីវិតខ្លាំង ផ្តល់ទិន្នផលខ្ពស់
            បង្កើនចំនួនអាឡែលអេតេរ៉ូស៊ីកូតពោលគឺកំណើនសមត្ថភាព។
          </li>
          <li>គេបង្កាត់មេបាពូជសុទ្ធមានលក្ខណះខុសគ្នា បានជាកូនអឺប្រ៊ីត។</li>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>P = អំពៅមានជាតិស្តរខ្ពស់ X អំពៅមានជាតិស្ករទាប</p>
        <p>មិនធន់ជម្ងឺ | ធន់នឹងជម្ងឺ</p>
        <p>នាំឲ F1 = អំពៅមានជាតិស្តរខ្ពស់ធន់នឹងជម្ងឺ</p>
      </div>,
    ],
  },
  imageExplanation: [
    {
      title: "",
      src: "/docs/grade-12/biology/adn/",
      imageAlt: "",
      explanation: [],
    },
  ],
};

const PlantBreeding = () => {
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

export default PlantBreeding;
