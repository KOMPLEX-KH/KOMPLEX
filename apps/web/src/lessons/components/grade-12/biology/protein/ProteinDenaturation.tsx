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
    title: "កត្តាដែលធ្វើឲ្យប្រូតេអ៊ីនបាត់បង់គុណភាព",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់:",
    content: (
      <>
        <ul className="list-disc ml-4 flex flex-col gap-3">
          <li>
            អាស៊ីត ឬបាសខ្លាំង : បម្រែបម្រួល pH
            ធ្វើឲ្យកើនឬបាត់បង់អីយ៉ុងអាស៊ីតអាមីនេក្នុងច្រវាក់ប៉ូលីប៉ិបទីត
            ដែលបណ្តាលឲ្យសម្ព័ន្ធអ៊ីដ្រូសែនត្រូវបានបង្អាក់។
          </li>
          <li>
            អង្គធាតុរំលាយ : សារធាតុរំលាយមិនប៉ូលែ
            ផ្តាច់សម្ព័ន្ធជ្រាបទឹកនៃទម្រង់ទី3 និងទី4របស់ប្រូតេអ៊ីន។
            សារធាតុរំលាយប៉ូលែផ្តាច់សម្ព័ន្ធអីយ៉ុងនៃទម្រង់ប្រូតេអ៊ីន។
          </li>
          <li>
            សាប៊ូ: ម៉ូលេគុលសាប៊ូបង្អាក់ភាពបត់បែនរបស់ប្រូតេអ៊ីន
            ហើយធ្វើឲ្យច្រវាក់ប៉ូលីប៉ិបទីតរលា។
          </li>
          <li>
            ភ្នាក់ងារផ្សេងៗ: អ៊ុយរ៉េបង្អាក់សម្ព័ន្ធអ៊ីដ្រូសែន
            និងការជ្រាបចូលនៃទឹក។
          </li>
          <li>
            កំហាប់អំបិល:
            កំណើននៃកំហាប់អំបិលធ្វើឲ្យកម្រិតរលាយក្នុងទឹកនៃប្រូតេអ៊ីនសរសៃគួរឲ្យកត់សម្គាល់។
          </li>
          <li>
            លោហៈធាតុធ្ងន់: បារត សំណ ផ្តាច់សម្ព័ន្ធអីយ៉ុងរវាងបន្ទុកអគ្គិសនី(+)
            និងបន្ទុកអគ្គិសនី(-) ធ្វើឲ្យទម្រង់ និងនាទីរបស់ប្រូតេអ៊ីនប្រែប្រួល។
          </li>
          <li>
            បម្រែបម្រួលសីតុណ្ហភាព: សីតុណ្ហភាពកាន់តែខ្ពស់
            សកម្មភាពប្រូតេអ៊ីនកើនឡើង។ សីតុណ្ហភាពថយចុះ
            ការចងសម្ព័ន្ធអ៊ីដ្រូសែនត្រូវបានបង្អាក់។
          </li>
          <li>
            ចលនាមេកានិច: ការកូរ ឬកិន បង្អាក់កម្លាំងបង្កើនទម្រង់ប្រូតេអ៊ីន។
          </li>
        </ul>
      </>
    ),
  },
};

const ProteinDenaturation = () => {
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
    </div>
  );
};

export default ProteinDenaturation;
