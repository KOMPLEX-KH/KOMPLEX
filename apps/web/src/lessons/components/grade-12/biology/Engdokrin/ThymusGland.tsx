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
      title: "៣.៨. ក្រពេញទីមុស",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
           <li>ទីមុសជាក្រពេញនៃប្រព័ន្ធទឹករងៃ ដែលស្ថិតនៅខាងលើនៃទ្រូង ក្បែរបេះដូង។</li>
           <li> ក្រពេញទីមុសផលិតអរម៉ូនទីម៉ូស៊ីន។</li>
           <li>អរម៉ូនទីម៉ូស៊ីនមាននាទី: </li>
           <p>_ ធ្វើឲ្យឡាំផូស៊ីតដំបូង ក្លាយជាឡាំផូស៊ីតពេញលក្ខណះមានមុខងារក្នុងប្រព័ន្ធភាពស៊ាំ។</p>
           <p>_ ធ្វើឲ្យក្រពេញទឹករងៃ និងសរីរាង្គផ្សេងៗផលិតឡាំផូស៊ីតថ្មីៗ។</p>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "ក្រពេញទីមុស",
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



const ThymusGland = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default ThymusGland
