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
      title: "៣.៥. ក្រពេញលើតម្រងនោម",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ក្រពេញលើតម្រងនោមនីមួយៗមានពីរផ្នែក:",
      content: (
          <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ផ្នែកខាងក្រៅ ហៅថាក្រពេញករតិចលើតម្រងនោម។</li>
            <li>ផ្នែកខាងក្នុងហៅថាក្រពេញខួរលើតម្រងនោម។</li>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ក. ក្រពេញខួរលើតម្រងនោម",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណុចសំខាន់:",
      content: (
          <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
             <li>ក្រពេញខួរលើតម្រងនោមផលិតអរម៉ូនពីរគឺ អរម៉ូនអេពីណេព្រីនឬអាដ្រេណាលីន និងណូអេពីណេព្រីន។</li>
             <li>អរម៉ូនណូអេពីណេព្រីន មានសកម្មភាពក្នុងការដឹកនាំអាំងភ្លុចប្រសាទទៅកាន់កោសិកាក្បែរៗវា និងមានឥទ្ធិពល ទៅលើការកន្ត្រាក់រួមតូចនៃសរសៃវ៉ែន។</li>
             <li>អរម៉ូនអេពីណេព្រីន ឬអាដ្រេណាលីនមាននាទី:</li>
             <p>_ បង្កើនអត្រាចង្វាក់បេះដូង ធ្វើឲ្យមានកំណើនកំហាប់ភ្លុយកូសកំណើនអត្រាកំណកឈាមក្នុងសរសៃឈាម កំណើនសម្ពាធឈាម។</p>
             <p>_ បណ្តាលឲ្យរន្ធប្រស្រីភ្នែករីកធំ និងបង្រួមសរសៃឈាមក្រោមស្បែក បណ្តាលឲ្យស្បែកឡើងស្លាំង និងបណ្តាលឲ្យញ័រ។</p>
             <p>_ ជាអរម៉ូនធ្វើឲ្យមានប្រតិកម្មទប់ទល់ និងគេចចេញ គឺវាធ្វើឲ្យសារពាង្គកាយឆ្លើយតបភ្លាមៗ ទៅនឹងភាពតានតឹង(ភ័យខ្លាច ខឹង ឈឺចាប់)។</p>
         </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "ក្រពេញខួរលើតម្រងនោម",
  },
  {
      type: "definition",
      title: "ខ. ក្រពេញករតិចលើតម្រងនោម",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណុចសំខាន់:",
      content: (
          <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ក្រពេញករតិចលើតម្រងនោមផលិតអរម៉ូនពីរគឺ អរម៉ូនករទីសូល និងអរម៉ូនអាល់ដូស្តេរ៉ូន។</li>
            <li>អរម៉ូនករទីសូលជួយជម្រុញអ៊ីដ្រូលីស ប្រូតេអ៊ីន និងទ្រីគ្លីសេរីត ឲ្យទៅជាអាស៊ីតអាមីនេ និងអាស៊ីតខ្លាញ់(គ្លីសេវ៉ុល)។ បន្ទាប់មកនៅក្នុងថ្លើមបំប្លែងជាភ្លុយកូស។ ដូចនេះវាបង្កើនកម្រិតភ្លុយកូសនៅក្នុងឈាម។</li>
            <li>អរម៉ូនអាល់ដូស្តេរ៉ូន តម្រូវកម្រិតអីយ៉ុងសូដ្យូម (Na*) និងអ៊ីយ៉ុងបូតាស្យូម(K*) ក្នុងឈាមនៅត្រង់តម្រងនោម។</li>
            <p>_ អ៊ីប៉ូតាឡាមុសផលិតអរម៉ូន CRH ដែលទៅភ្ញោចអីប៉ូភីសមុខឲ្យបញ្ចេញអរម៉ូនអាដ្រេណូករទីកូត្រូប ។ បន្ទាប់មក
             អាដ្រេណូករទីកូតូប ក៏ទៅភ្ញោចក្រពេញលើតម្រងនោមឲ្យបញ្ចេញអរម៉ូនករទីសូល។</p>
             <p>_ នៅពេលកម្រិតសូដ្យូមក្នុងឈាមទាប តម្រងនោមផលិតអង់ស៊ីមរេណាំង។ កំណើនអង់ស៊ីមរេណាំងដែលផ្លាស់
             ប្រូតេអ៊ីនប្លាស្មាអង់ស៊ីយូតង់ស៊ីណូសែន ឲ្យទៅជាអង់ស៊ីយូតង់ស៊ីន និងអង់ស៊ីយូតង់ស៊ីនII ទៅភ្ញោចក្រពេញ
             ករតិចលើតម្រងនោមឲ្យបញ្ចេញអរម៉ូនអាល់ដូស្តេរ៉ូន។ អាល់ដូស្តេរ៉ូនធ្វើឲ្យមានការជ្រាបចេញនៃអ៊ីយ៉ុងសូដ្យូមពី
             តម្រងនោម ទៅកាន់ប្លាស្នានៃឈាម។ នៅពេលកម្រិតសូដ្យូមក្នុងឈាមកើនឡើង ទឹកត្រូវបានជ្រាបចេញពីតម្រង
             នោមទៅក្នុងឈាម ដែលជាហេតុធ្វើឲ្យសម្ពាធនិងមាឌឈាមត្រូវបានរក្សាលំនឹង។
             </p>
         </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "ក្រពេញករតិចលើតម្រងនោម",
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


const AdrenalGlands = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default AdrenalGlands
