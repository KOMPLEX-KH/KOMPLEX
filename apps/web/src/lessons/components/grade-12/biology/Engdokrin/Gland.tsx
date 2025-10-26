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
      title: "១.១ ក្រពេញ",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
          <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ក្រពេញជាកោសិកា ឬជាសរីរាង្គដែលកើតឡើងពីកោសិកាអេពីតេស្យូម ដែលមានឯកទេសកម្ម ក្នុងការបញ្ចេញសារធាតុចាំបាច់សម្រាប់សារពាង្គកាយ។</li>
            <li>ក្រពេញមានពីរបែបគឺ ក្រពេញអុិចសូគ្រីន និងក្រពេញអង់ដូគ្រីន។</li>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic54.png",
        imageAlt: "រូបភាព",
        explanation: [
        "ក្រពេញអិចសូគ្រីន ជាក្រពេញមានបំពង់នាំ ដែលបញ្ចេញរសរំលាយអាហារ និងសំណល់មេតាបូលីសទៅខាងក្រៅចរន្តឈាម។",
        "ឧទាហរណ៍: ក្រពេញទឹកដោះ ក្រពេញញើស ក្រពេញទឹកមាត់ ក្រពេញសេបូម។ល។"
      ],
        title: "ក្រពេញអុិចសូគ្រីន",
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic54.png",
        imageAlt: "រូបភាព",
        explanation: [
        "ក្រពេញអង់ដូគ្រីន ជាក្រពេញគ្មានបំពង់នាំដែលបញ្ចេញសារធាតុគីមីហៅថាអរម៉ូនហើយធ្វើដំណើរទៅក្នុងចរន្តឈាម។",
        "ឧទាហរណ៍: លំពែង ក្រពេញភេទ ក្រពះ ពោះវៀនតូច ។ល។"
      ],
        title: "ក្រពេញអង់ដូគ្រីន",
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

const Gland = () => {
  return (
    <div>
        <div className="">
            <ContentRendererV3 content={TOPIC_CONTENT_V3} />
        </div>
    </div>
  )
}

export default Gland
