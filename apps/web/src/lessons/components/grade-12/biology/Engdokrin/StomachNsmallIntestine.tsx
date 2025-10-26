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
      title: "៣.៩. ក្រពះ និងពោះវៀនតូច",
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
           <li>កោសិកាពិសេសក្នុងភ្នាសក្រពះបញ្ចេញអរម៉ូនកាស្ទីន ដែលមាននាទីភ្ញោចក្រពេញម៉ិចសូគ្រីននៃក្រពះឲ្យបញ្ចេញរសក្រពះ។</li>
           <li>កោសិកាពិសេសនៃភ្នាសពោះវៀនតូចផលិតអរម៉ូនសេក្រេទីនដែលភ្ញោចឲ្យមានលំហូរនៃរសលំពែង។</li>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic60.jpg",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "ក្រពះ និងពោះវៀនតូច",
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



const StomachNsmallIntestine = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default StomachNsmallIntestine
