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
      title: "៣.១ អុីប៉ូតាឡាមុស",
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
            <li>កោសិកាណឺរ៉ូនបញ្ចេញក្នុងអីប៉ូតាឡាមុស ផលិតអរម៉ូន២គឺ ADH និងអុកស៊ីស៊ីន ហើយបញ្ជូនតាមអាក់សូន ផ្នែកខាងចុងអាក់សូន ស្តុកទុកក្នុងអីបូភីសក្រោយ។</li>
            <li>អរម៉ូនADH ភ្ញោចបំពង់ប្រមូលផ្តុំនៅក្នុងតម្រងនោមធ្វើឲ្យទឹកជ្រាបចេញវិញទៅក្នុងឈាម។</li>
            <li>អរម៉ូនអុកស៊ីតូស៊ីនមាននាទី:</li>
            <p>_ ភ្ញោចការកន្ត្រាក់នៃសាច់ដុំរបស់ស្បូន ដែលជួយរុញទារកឲ្យចេញពីស្បូនម្តាយនៅពេលសម្រាលកូន</p>
            <p>_ ភ្ញោចសាច់ដុំដែលស្ថិតនៅជុំវិញ ក្រពេញទឹកដោះឲ្យកន្ត្រាក់ដើម្បីបញ្ចេញទឹកដោះតាមរន្ធតូចៗនៅជុំវិញចុងដោះ។</p>
        </ul>
      ),
  },

  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "អុីប៉ូតាឡាមុស",
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

const Hypothalamus = () => {
  return (
    <div>
      <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default Hypothalamus
