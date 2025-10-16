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
      title: "៣. ប្រព័ន្ធអង់ដូគ្រីនមនុស្ស",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic55.jpg",
        imageAlt: "រូបភាព",
        explanation: [
          "ក្រពេញអង់ដូគ្រីនសំខាន់ៗរបស់មនុស្សគឺ អ៊ុីប៉ូតាឡាមុស អីប៉ូភីស ក្រពេញទីរ៉ូអ៊ុត ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុត ក្រពេញទីមុស លំពែង ក្រពេញលើតម្រងនោម ក្រពេញភេទ(ពងស្វាស អូវែ) ក្រពះ និងពោះវៀនតូច។ ក្រពេញខ្លះជាអូតូគ្រីន និងខ្លះជាប៉ារ៉ាគ្រីន។",
          ""
      ],
        title: "ប្រព័ន្ធអង់ដូគ្រីនមនុស្ស",
  },
  {
      type: "tip",
      title: "ចំណុចសំខាន់",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អូតូគ្រីន ជាក្រពេញអង់ដូគ្រីន ដែលផលិតអរម៉ូន ហើយ អរម៉ូនរបស់វាមានឥទ្ធិពល ទៅលើកោសិកាគោលដៅខ្លួនឯង។</li>
            <p>ឧទាហរណ៍: កោសិកាពិសេសក្នុងក្រពះ។</p>
            <li>ប៉ារ៉ាគ្រីន ជាក្រពេញអង់ដូគ្រីន ដែលផលិតអរម៉ូនហើយអរម៉ូនរបស់វាមានអំពើទៅលើកោសិកាគោលដៅនៅកន្លែងផ្សេង។</li>
            <p>ឧទាហរណ៍: ក្រពេញអ៊ីប៉ូភីស អ៊ុប៉ូតាឡាមុស។</p>
            <li>ក្រពេញខ្លះជាអូតូគ្រីនផងនិងប៉ារ៉ាគ្រីនផង។</li>
            <p>ឧទាហរណ៍: ក្រពេញភេទ (ពងស្វាស អូវែ)។</p>
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



const Peopleangdukrin = () => {
  return (
    <div>
        <div>
            <ContentRendererV3 content={TOPIC_CONTENT_V3} />
        </div>
    </div>
  )
}

export default Peopleangdukrin
