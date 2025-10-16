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

const TOPIC_CONTENT_V3: TopicContent_V3[] = [
  {
      type: "definition",
      title: "២. ការត្រួតពិនិត្យនៃប្រព័ន្ធអង់ដូគ្រីន",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណុចសំខាន់",
      content: (
          <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនត្រូវបានសំយោគនៅពេលសារពាង្គកាយត្រូវការ</li>
            <li>សារពាង្គកាយត្រូវការអរម៉ូន ក្នុងបរិមាណតិចតួចប៉ុណ្ណោះ ហើយបរិមាណនេះត្រូវតែថេរជានិច្ច</li>
            <li>ប្រសិនបើសារពាង្គកាយមានបរិមាណអរម៉ូនច្រើន ឬតិចជាងបរិមាណកំណត់ ក្នុងសារពាង្គកាយ មានដំណើរការ</li>
            <li>មិនប្រក្រតី ដែលបណ្តាលឲ្យសារពាង្គកាយមានជំងឺធ្ងន់ធ្ងរ</li>
            <li>តំណបត្រឡប់អវិជ្ជមានជាកំណើននៃសារធាតុមួយ បង្អាក់ដំណើរការដែលដឹកនាំឲ្យមានកំណើននោះ</li>
        </ul>
      ),
  },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);


const EndokrinControl = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default EndokrinControl
