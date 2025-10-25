"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើវ៉ិចទ័រគឺជាអ្វី?",
    content:
      "វ៉ិចទ័រគឺជាអថេរដែលមានទំហំ ទិស ទិសដៅ និងប្រវែង។ វាអាចត្រូវបានបង្ហាញដោយសមីការដូចជា v = ai + bj ដែល a និង b ជាចំនួនពិត។",
  },
  {
    type: "tip",
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <>
        • វ៉ិចទ័រមានទិស និងប្រវែង។ <br />
        • វ៉ិចទ័រអាចត្រូវបានបង្ហាញដោយសមីការដូចជា v = ai + bj។ <br />
        • វ៉ិចទ័រអាចត្រូវបានគណនាដោយប្រើសមីការបូក និងដក។ <br />
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <>
        <ul>
          <li>វ៉ិចទ័រមានទិស និងប្រវែង។</li>
          <li>វ៉ិចទ័រអាចត្រូវបានផ្តល់ជាគូអរដោនេ ឬសមីការ (u = ai + bj)។</li>
          <li>
            ប្រវែងវ៉ិចទ័រ <InlineMath math={"|\vec{u}| = sqrt{a^2 + b^2}"} />។
          </li>
          <li>វ៉ិចទ័រអាចបូក ដក និងគុណដោយចំនួនពិត។</li>
          <li>វ៉ិចទ័រត្រូវបានប្រើសម្រាប់បង្ហាញទិសដៅ និងចលនា។</li>
        </ul>
      </>
    ),
  },
  {
    type: "definition",
    title: "វ៉ិចទ័រប្រាប់ទិស នៃបន្ទាត់",
    content: (
      <>
        វ៉ិចទ័រប្រាប់ទិសនៃបន្ទាត់ <InlineMath math="(D)" /> គឺវ៉ិចទ័រមួយដែលស្រប
        នឹងបន្ទាត់ <InlineMath math="(D)" />។<br />
        វ៉ិចទ័រប្រាប់ទិសនៃ <InlineMath math="(D)" /> គឺគ្រប់វ៉ិចទ័រ{" "}
        <InlineMath math="\overrightarrow{AB}" /> ដែលមាន <InlineMath math="A" />{" "}
        និង <InlineMath math="B" /> ជាចំណុចស្ថិតលើបន្ទាត់{" "}
        <InlineMath math="(D)" /> និង <InlineMath math="A ≠ B" />។
      </>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈនៃវ៉ិចទ័រប្រាប់ទិស",
    content: (
      <>
        • វ៉ិចទ័រប្រាប់ទិសមានទិសដៅស្រប នឹងបន្ទាត់�।
        <br />
        • ប្រសិនបើបន្ទាត់ <InlineMath math="(D)" /> មានវ៉ិចទ័រប្រាប់ទិស{" "}
        <InlineMath math="\vec{u}" /> នោះគ្រប់វ៉ិចទ័រ{" "}
        <InlineMath math="\vec{v}" /> ដែល{" "}
        <InlineMath math="\vec{v} = k \vec{u}" /> (<InlineMath math="k ≠ 0" />)
        ក៏ជាវ៉ិចទ័រប្រាប់ទិសដែរ។ <br />
        • វ៉ិចទ័រប្រាប់ទិសពីចំណុចលើបន្ទាត់ប្រសិនបើ <InlineMath math="A" /> និង{" "}
        <InlineMath math="B" /> ជាចំណុចលើបន្ទាត់ <InlineMath math="(D)" /> ហើយ{" "}
        <InlineMath math="A ≠ B" /> នោះ{" "}
        <InlineMath math="\overrightarrow{AB}" /> គឺជាវ៉ិចទ័រប្រាប់ទិសនៃ{" "}
        <InlineMath math="(D)" />។ <br />•
        បន្ទាត់ពីរដែលមានវ៉ិចទ័រប្រាប់ទិសស្របគ្នា
        គេអាចថាបន្ទាត់ទាំងពីរនោះជាបន្ទាត់ស្របគ្នា។
      </>
    ),
  },
  {
    type: "imageExplanation",
    src: "/vector-graph.png",
    imageAlt: "ក្រាប",
    explanation: (
      <>
        <div>
          ក្នុងក្រាបខាងឆ្វេងនេះ ៖
          <ul className="list-disc list-inside mt-2 space-y-1">
            បន្ទាត់ពណ៌ក្រហម និង បន្ទាត់ពណ៌ខៀវមានមេគុណប្រាប់ទិសដូចគ្នា។
            <br />
            បន្ទាត់ពណ៌បៃតងកាត់បន្ទាត់ទាំងពីរ
          </ul>
        </div>
      </>
    ),
  },
];

// Stage 2: Serialize to JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialize to restore renderable content
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

export default function VectorDefinition() {
  return <ContentRendererV3 content={restoredContent} />;
}