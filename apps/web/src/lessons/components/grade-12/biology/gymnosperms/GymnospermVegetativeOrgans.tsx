import { TopicContent } from "@/types/docs/topic";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";

const VergetativeOrgansContent: TopicContent = {
  definition: {
    title: "តើសរីរាង្គលូតលាស់របស់ស៊ីមណូស្តែមមានអ្វីខ្លះ?",
    content: "សរីរាង្គលូតលាស់របស់ស៊ីមណូស្តែមមាន 3​គឺ​ ដើម ឬស និង​ ស្លឹក",
  },
  tip: {
    title: "លក្ខណៈសំខាន់",
    content: (
      <div>
        <p>
          <strong>ដើម</strong> : មានសណ្ឋានជាដើមទោល ត្រង់
          និងបញ្ចប់ដោយកូនស្លឹកឬកន្សើមមែកនៅកំពូលដើម។
        </p>
        <p>
          <strong>ឬស</strong> : ឬសខ្លះជាឬសកែវ{" "}
        </p>
        <p>
          <strong>ស្លឹក</strong> : ក្រាស់ ស្តូម៉ាតតិចតែកប់ជ្រៅ​ ស្លឹកមានទំហំធំ
          ទ្រនុងនិងរាងប្លែកៗគឺ:
          <ul>
            <li>• មានទ្រនុងស្និត និងមានសភាពដូចស្លឹកដូង(ប្រង់)</li>
            <li>• រាងម្ជុល មានទ្រនុងស្លឹកតែមួយ(ពពួកស្រល់)</li>
            <li>• រាងផ្លិត មានទ្រនុងរាងជាកង្ហារ(គីងកូ)</li>
            <li>• រាងស្រការ តម្រៀបគ្របដណ្ដប់ផ្ទៃមែក</li>
          </ul>
        </p>
      </div>
    ),
  },
};
export default function GymnospermVegetativeOrgans() {
  return (
    <>
      {VergetativeOrgansContent.definition && (
        <DefinitionBox
          title={VergetativeOrgansContent.definition.title}
          content={VergetativeOrgansContent.definition.content}
        />
      )}
      {VergetativeOrgansContent.tip && (
        <TipBox
          title={VergetativeOrgansContent.tip.title}
          content={VergetativeOrgansContent.tip.content}
        />
      )}
    </>
  );
}
