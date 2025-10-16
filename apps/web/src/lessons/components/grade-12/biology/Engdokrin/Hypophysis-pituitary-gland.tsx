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
      title: "៣.២. ក្រពេញអុីប៉ូភីស",
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
            <li>អ៊ីប៉ូភីស ជាក្រពេញតូចមួយមានអង្កត់ផ្ចិតប្រហែល១Cmដែលស្ថិតនៅក្នុងខួរក្បាលខាងក្រោមស៊ីប៉ូតាឡាមុស។</li>
            <li>អីប៉ូភីសចែកជា២ផ្នែកគឺ អ៊ីប៉ូភីសមុខ និងអីប៉ូភីសក្រោយ។</li>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ក. អ៊ីប៉ូភីសក្រោយ",
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
            <li>មិនផលិតអរម៉ូនទេ ប៉ុន្តែវាស្តុកអរម៉ូនADH និងអុកស៊ីតូស៊ីនដែលផលិតដោយអុីប៉ូតាឡាមុស។</li>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "ពងស្វាស",
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "អ៊ីប៉ូភីសក្រោយ",
  },
  {
      type: "definition",
      title: "ខ. អ៊ីប៉ូភីសមុខ",
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
            <li>អរម៉ូនលូតលាត់ ឬសូម៉ាតូត្រូពីន: មានឥទ្ធិពលទៅលើការលូតលាស់កំពស់គឺ ឆ្អឹងនិងឆ្អឹងខ្ចី។</li>
            <li>អរម៉ូនប្រូឡាក់ទីន: ធ្វើឲ្យក្រពេញទឹកដោះលូតលាស់ និងផលិតទឹកដោះក្នុងមេតាបូលីស ភ្លុយស៊ីត និងខ្លាញ់ផលិតក្រោយពេលសម្រាលកូន</li>
            <li>អរម៉ូនមេឡាណូស៊ីតស្ទីមុយឡង់: ភ្ញោចកោសិកាមេឡាណូស៊ីតរបស់ស្បែកឲ្យផលិតជាតិពណ៌មេឡានីន។</li>
            <li>អរម៉ូនទីរ៉េអូស្លីមុយលីន: ភ្ញោចក្រពេញទីរ៉ូអ៊ុតឲ្យផលិតអរម៉ូន ទីរ៉ុកស៊ីន។</li>
            <li>អរម៉ូនអាដ្រេណូករទីកូត្រូប: ភ្ញោចក្រពេញករតិចលើតម្រងនោម ឲ្យផលិតអរម៉ូនករទីសូល។</li>
            <li>អរម៉ូនកូណាដូស្លីមុយលីន (អរម៉ូនFSH និងLH): ភ្ញោចក្រពេញភេទ (អូវែ ពងស្វាស) ឲ្យបញ្ចេញអរម៉ូនភេទ។</li>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "អ៊ីប៉ូភីសមុខ",
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


const HypophysisPituitaryGland = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default HypophysisPituitaryGland