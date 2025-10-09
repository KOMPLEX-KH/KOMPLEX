import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import "katex/dist/katex.min.css";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "៤.១ ដំណាក់កាលផ្សេងៗនៃបន្ទេរសែន",
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
            វិស្វកម្មសេនេទិចជាសំណុំបច្ចេកទេសមួយ
            ដែលអាចធ្វើឲ្យមានបន្ទេរសែនចម្លែកមួយទៅក្នុងកោសិកាបណ្តុះមួយ
            ដើម្បីឲ្យកោសិកាធ្មួលទទួលបាននូវលក្ខណះថ្មីជាប់ទៅនឹងសែនបន្ទេរនោះ។
          </li>
          <li>វិស្វកម្មសេនេទិចមាន៤ជំហានគឺ:</li>
          <p>_ ការកាត់ម៉ូលេគុលADNជាអង្កត់តូចៗ ដោយប្រើអង់ស៊ីមបង្រួម។</p>
          <p>
            _
            ការបញ្ចូលអង្កត់ADNបន្ទេរទៅក្នុងប្លាស្មីតបាក់តេរីដោយប្រើអង់ស៊ីមភ្ជាប់។
          </p>
          <p>
            _ ការបង្កើតក្លូន ទុកឲ្យបាក់តេរីបន្តពូជបង្កើតបាក់តេរីច្រើន
            ដែលមានសែនបន្សំថ្មីដូចៗគ្នា។
          </p>
          <p>_ ការសំដែងចេញនៃសែន: ធ្វើឲ្យមានការចម្លងក្រម និងសំយោគប្រូតេអ៊ីន។</p>
          <li>
            ប្លាស្មីត គឺជាម៉ូលេគុលADNរាងជារង្វង់របស់បាក់តេរីដែលមានទំហំតូច
            ហើយមានលទ្ធភាពស្វ័យដំឡើងទ្វេដោយ ខ្លួនឯករាជ្យ។
            វាមាននាទីសំខាន់ក្នុងការធ្វើវិស្វកម្មសេនេទិច។
          </li>
          <li>
            អង់ស៊ីមបង្រួម ជាអង់ស៊ីមសម្រាប់កាត់ម៉ូលេគុលADN
            ជាអង្កត់តូចៗនៅត្រង់តំណលំដាប់នៃបាស។
          </li>
          <li>
            អង់ស៊ីមភ្ជាប់ ជាអង់ស៊ីមសម្រាប់ភ្ជាប់នុយក្លេអូទីតរវាងគ្នា
            ដើម្បីបង្កើតបានជាADN។
          </li>
        </ul>
      </>
    ),
  },
};

const GeneTransferStages = () => {
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
      </div>
    </div>
  );
};

export default GeneTransferStages;
