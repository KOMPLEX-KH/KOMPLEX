"use client";

import React from "react";
import { InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
  deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { GraphExplanationBox } from "@/components/pages/docs/boxes/explanation-box/GraphExplanationBox";

const ellipseGraphExplanation = {
  expressions: [{ id: "ellipse1", latex: "x^2 + y^2 = 1", color: "#2d6cdf" }],
  explanation: (
    <>
      <strong>អេលីប (Ellipse):</strong> <br />
      • ទម្រង់ទូទៅ: <InlineMath math="\frac{x²}{a²} + \frac{y²}{b²} = 1" /> ឬ{" "}
      <InlineMath math="\frac{(x-h)²}{a²} + \frac{(y-k)²}{b²} = 1" /> <br />
      • កើតឡើងពេលផ្ទៃរាបកាត់កោនិចមិនឆ្លងកាត់កំពូលទេ។ <br />
      • មានចំណុចកំណុំពីរ
      និងផលបូកចម្ងាយពីចំណុចណាមួយនៅលើអេលីបទៅកំណុំទាំងពីរគឺថេរ។ <br />
      • អេលីបអាចមានទិសផ្សេងៗគ្នា (ផ្ដេក ឬបញ្ឈរ) និងអាចផ្លាស់ទីលំនៅ។ <br />
    </>
  ),
};

const parabolaGraphExplanation = {
  expressions: [
    { id: "parabola1", latex: "(x-3)^2 = 8(y-1)", color: "#dc2626" },
    { id: "parabola2", latex: "(x-h)^2 = 4p(y-k)", color: "#eab308" },
    { id: "parabola3", latex: "(y-k)^2 = 4p(x-h)", color: "#ca8a04" },
  ],
  explanation: (
    <>
      <strong>ប៉ារ៉ាបូល (Parabola):</strong> <br />
      • ទម្រង់ទូទៅ: <InlineMath math="y = ax² + bx + c" /> ឬ{" "}
      <InlineMath math="x = ay² + by + c" /> <br />
      • ទម្រង់ស្តង់ដារ: <InlineMath math="(x-h)² = 4p(y-k)" /> ឬ{" "}
      <InlineMath math="(y-k)² = 4p(x-h)" /> <br />
      • កើតឡើងពេលផ្ទៃរាបកាត់កោនិចស្របនឹងបន្ទាត់ប៉ូលីនីមាត្រ។ <br />
      • មានចំណុចកំណុំមួយ និងបន្ទាត់ប្រាប់ទិសមួយ។ <br />
      • ប៉ារ៉ាបូលអាចបើកឡើងលើ ចុះក្រោម ទៅខាងស្ដាំ ឬទៅខាងឆ្វេង។ <br />
    </>
  ),
};

const hyperbolaGraphExplanation = {
  expressions: [
    { id: "hyperbola1", latex: "\\frac{x^2}{9} - \\frac{y^2}{4} = 1", color: "#c026d3" },
  ],
  explanation: (
    <div className="mt-4">
      <strong>អុីពែបូល (Hyperbola):</strong> <br />
      • ទម្រង់ទូទៅ: <InlineMath math="\frac{x²}{a²} - \frac{y²}{b²} = 1" /> ឬ{" "}
      <InlineMath math="\frac{y²}{a²} - \frac{x²}{b²} = 1" /> <br />
      • កើតឡើងពេលផ្ទៃរាបកាត់កោនិចឆ្លងកាត់ទាំងពីរប្រសព្វ។ <br />
      • មានចំណុចកំណុំពីរ
      និងផលដកចម្ងាយពីចំណុចណាមួយនៅលើអុីពែបូលទៅកំណុំទាំងពីរគឺថេរ។ <br />
      • អុីពែបូលមានពីរសាខា និងអាចមានទិសផ្សេងៗគ្នា។ <br />
    </div>
  ),
};

const TOPIC_CONTENT_V3: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើកោនិកគឺជាអ្វី?",
    content: (
      <div>
        កោនិក គឺជាសំណុំចំណុចដែលបំពេញលក្ខខណ្ឌមួយពាក់ព័ន្ធនឹងចម្ងាយពីចំណុចថេរ និងបន្ទាត់ថេរ។
      </div>
    ),
  },
  {
    type: "tip",
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="ml-2">
        • កោនិកមានបីប្រភេទសំខាន់ៗ៖ ប៉ារ៉ាបូល អេលីប និងអុីពែបូល។ <br />
        • កោនិកកើតឡើងពីការកាត់រង្វង់នៃប៉ូលីនីមាត្រដែលមានទិសផ្សេងៗ។ <br />
        • កោនិកអាចកំណត់ដោយសមីការគណិតវិទ្យា។ <br />
        • កោនិកមានលក្ខណៈពិសេសពាក់ព័ន្ធនឹងចម្ងាយពីចំណុចថេរ (កំណុំ)
        និងបន្ទាត់ថេរ (បន្ទាត់ប្រាប់ទិស)។ <br />
        • កោនិកត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយក្នុងគណិតវិទ្យា
        និងវិទ្យាសាស្ត្រផ្សេងៗ។ <br /> <br />
      </div>
    ),
  },
  {
    type: "hint",
    content:
      "ពេលសិក្សាអំពីកោនិក ត្រូវចាប់អារម្មណ៍លើទម្រង់សមីការនីមួយៗ ដើម្បីសម្គាល់ប្រភេទ។",
  },
  {
    type: "warning",
    content:
      "កុំច្រឡំរវាងអេលីប ប៉ារ៉ាបូល និងអុីពែបូល។ សូមពិនិត្យសមីការឱ្យម៉ត់ចត់។",
  },
  {
    type: "custom",
    content: (
      <GraphExplanationBox
        expressions={ellipseGraphExplanation.expressions}
        explanation={ellipseGraphExplanation.explanation}
      />
    ),
  },
  {
    type: "custom",
    content: (
      <GraphExplanationBox
        expressions={parabolaGraphExplanation.expressions}
        explanation={parabolaGraphExplanation.explanation}
      />
    ),
  },
  {
    type: "custom",
    content: (
      <GraphExplanationBox
        expressions={hyperbolaGraphExplanation.expressions}
        explanation={hyperbolaGraphExplanation.explanation}
      />
    ),
  },
];

// Serialize & Deserialize (same as in your structure)
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const ConicDefinitionV3 = () => {
  return (
    <>
      <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
      </div>
    </>
  );
};

export default ConicDefinitionV3;
