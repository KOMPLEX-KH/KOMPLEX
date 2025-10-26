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
      title: "៣.៣. ក្រពេញទីរ៉ូអ៊ុីត",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic57.jpg",
        imageAlt: "រូបភាព",
        explanation: [
          "ក្រពេញទីរ៉ូអ៊ីតស្ថិតនៅត្រង់ក ចំពីក្រោមបំពង់សំលេង និងនៅខាងមុខបំពង់ខ្យល់។ វាផលិតអរម៉ូនទីរ៉ូអ៊ីត និងអរម៉ូនកាលស៊ីតូនីន។"
      ],
        title: "ក្រពេញទីរ៉ូអ៊ុត",
  }, 
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនទីរ៉ុកស៊ីនបង្កឡើងពីអាស៊ីតអាមីនេទីរ៉ូស៊ីនពីរដោយភ្ជាប់អាតូមអ៊ីយ៉ូតចំនួនបួន។</li>
            <li>អរម៉ូនទីរ៉ុកស៊ីនមាននាទីបង្កើនអត្រាមេតាបូលីស ប្រូតេអ៊ីន ភ្លុយស៊ីត និងខ្លាញ់។</li>
            <p>_ ការបរិភោគអាហារកង្វះជាតិអ៊ីយ៉ូតនៅក្នុងរបបអាហារធ្វើឲ្យក្រពេញទីរ៉ូអ៊ីតប៉ោងធំដែលបណ្តាលឲ្យ
            កើតជំងឺពកកដើម្បីបង្ការជំងឺពកក ត្រូវបរិភោគអាហារ ដែលមានជាតិអីយ៉ូតក្នុងរបបអាហារប្រចាំថ្ងៃ តាមរយះអំបិលអ៊ីយ៉ូត ត្រីអាហារសមុទ្រជាដើម។</p>
            <p>_ បរិមាណទីរ៉ុកស៊ីនតិចពេក នៅពេលពេញវ័យបណ្តាលឲ្យកើតជំងឺមីសីដែម ដែលមានលក្ខណះមួយចំនួនដូចជាឡើងទម្ងន់ ជ្រុះសក់ ជីពចរលោតយឺត សីតុណ្ហភាពសារពាង្គកាយថយចុះ។</p>
            <p>_ បរិមាណទីរ៉ុកស៊ីនច្រើនពេក បណ្តាលឲ្យកើតជំងឺបាសីដូវ ដែលមានលក្ខណះមួយចំនួនដូចជាក្រពេញទីរ៉ូអ៊ីតរីកធំ
              ហើយសកម្មខ្លាំងកំណើនសីតុណ្ហភាពសារពាង្គកាយ កំណើនអត្រាចង្វាក់បេះដូង និងមេតាបូលីស កំណើនសម្ពាធឈាម ស្រកទម្ងន់។</p>
            <li>អរម៉ូនកាល់ស៊ីតូនីនមាននាទីតម្រូវកម្រិតកាល់ស្យូមក្នុងឈាម និងមានអំពើផ្ទុយនឹងអំពើរបស់អរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ីត។</li>
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



const Thyroid = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default Thyroid
