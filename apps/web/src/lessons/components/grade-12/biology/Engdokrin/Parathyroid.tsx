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
      title: "៣.៤. ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic58.jpg",
        imageAlt: "រូបភាព",
        explanation: [
          "ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត ជាក្រពេញរាងពងក្រពើតូចៗចំនួនបួន ដែលបង្កប់ក្នុងផ្នែកខាងក្រោយនៃក្រពេញទីរ៉ូអ៊ុីត។ ក្រពេញនេះផលិតអរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ុីត។"
      ],
        title: "ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត",
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>អរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ីតមាននាទីតម្រូវមេតាបូលីសកាល់ស្យូម និងផូស្វាតក្នុងសារពាង្គកាយ។</li>
            <p>_ កាល់ស្យូមមាននាទីចាំបាច់ សម្រាប់ការលូតលាស់ត្រឹមត្រូវសុខភាពឆ្អឹងនិងធ្មេញ កំណកឈាម លំនាំប្រសាទ និងការកន្ត្រាក់សាច់ដុំ។</p>
            <p>_ ផូស្វាតចូលរួមជាមួយកាល់ស្យូមបង្ករជាសមាសភាពឆ្អឹង និងជាសមាសភាពសំខាន់ៗជាច្រើននៃសារពាង្គកាយរួមបញ្ចូលទាំង ATP ADN និងARNផងដែរ។</p>
            <li>ការផលិតអរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ុតច្រើនពេកបណ្តាលឲ្យ</li>
            <p>_ មានការដកយកCa++ ពីក្នុងឆ្អឹង ហើយធ្វើឲ្យឆ្អឹងប្រែជាស្រួយងាយបាក់។</p>
            <p>_ អត្រាCa++ក្នុងឈាមកើនឡើង ហើយអត្រាផូស្វាតថយចុះ។</p>
            <li>ការផលិតអរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ុីតច្រើនពេកបណ្តាលឲ្យ</li>
            <p>_ អត្រាCa++ក្នុងឈាមចុះទាបដែលធ្វើឲ្យសាច់ដុំជាប់ឆ្អឹងប្រែជារួសហួសហេតុហើយកន្ត្រាក់យ៉ាងខ្លាំង(តេតាណូស)</p>
            <p>_ អត្រាផូស្វ័រក្នុងឈាមកើនឡើង។</p>

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



const Parathyroid = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default Parathyroid
