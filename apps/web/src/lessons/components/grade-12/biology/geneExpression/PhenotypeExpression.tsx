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
    title: "៥. តម្រូវនៃការសំដែងផេណូទីប (តម្រូវសំយោគប្រូតេអ៊ីន)",
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
          <li>
            គ្រប់កោសិកានៃសារពាង្គកាយមួយ មានសែន(ព័ត៌មានសេនេទិច)ដូចគ្នា
            ព្រោះជាលទ្ធផលនៃស៊ីកូតចែកខ្លួនតាមមីតូស។
          </li>
          <li>
            សែនទាំងអស់ក្នុងកោសិកា មានតែសែនមួយចំនួនទេដែលមានសកម្មភាព
            ព្រោះសែននីមួយៗមាននាទីទៅតាមមុខងារកោសិកា។
          </li>
          <li>
            សែននៃកោសិកានីមួយៗ
            សំយោគតែប្រូតេអ៊ីនណាដែលចាំបាច់ហើយនៅពេលត្រូវការតែប៉ុណ្ណោះ។
          </li>
          <li>
            តម្រូវសំយោគប្រូតេអ៊ីន ទទួលឥទ្ធិពលពីស៊ីតូប្លាស។
            ក្នុងការសំយោគប្រូតេអ៊ីនមានសែន៣ប្រភេទគឺ:
          </li>
          <p>
            _ សែនទម្រង់ ជាសែនដែលមានព័ត៌មានសេនេទិចសម្រាប់កំណត់ទម្រង់ប្រូតេអ៊ីន។
          </p>
          <p>_ សែនប្រតិបត្តិការ ជាសែនដែលមាននាទីបញ្ជាលើសែនទម្រង់។</p>
          <p>
            _ សែនតម្រូវឬសែនត្រួតពិនិត្យ ជាសែនទទួលឥទ្ធិពលពីស៊ីតូប្លាស
            ហើយមាននាទីបញ្ជាលើសែនប្រតិបត្តិការ។
          </p>
        </ul>
      </>
    ),
  },
};

const PhenotypeExpression = () => {
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

export default PhenotypeExpression;
