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
      title: "៣.៧. ក្រពេញភេទ",
      content: (
          <div>
              
          </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <div className='flex flex-col gap-2 items-start'>
            <p>អរម៉ូនLH និងFSHភ្ញោចការបញ្ចេញអរម៉ូនពីអូវែនិងពងស្វាស ។</p>
        </div>
      ),
  },
  {
      type: "definition",
      title: "ក. អូវែ",
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
            <li>អូវែជា</li>
            <p>_ ក្រពេញម៉ិចសូគ្រីន: ផលិតនិងបញ្ចេញអូវុល(អូវ៉ូស៊ីតII)ពីអូវែទៅដៃស្បូន។</p>
            <p>_ ក្រពេញអង់ដូគ្រីន បញ្ចេញអរម៉ូនអឺស្ត្រូសែននិងប្រូសេស្តេរ៉ូន ទៅក្នុងឈាម។</p>
            <li>អូវែជាក្រពេញបន្តពូជញី ដែលមាននាទីផលិតកាម៉ែតញី និងអរម៉ូនភេទញី។ អរម៉ូនភេទញីមាន២គឺ អឺស្ត្រូសែននិងប្រូសេស្តេរ៉ូន។</li>
            <li>អឺស្ត្រូសែនមាននាទី:</li>
            <p>_ ធ្វើឲ្យស្រទាប់ភ្នាសសើមស្បូនឡើងក្រាស់ដោយបង្កើនចំណែក មីតូសនៃកោសិកា</p>
            <p>_ មានឥទ្ធិពលទៅលើលក្ខណះភេទបន្ទាប់របស់មនុស្សស្រីដូចជាស្បែកទន់ សំឡេងស្រួយ ក្រពេញទឹកដោះជាដើម</p>
            <p>_ ចូលរួមជាមួយប្រូសេស្តេរ៉ូន ដែលមាននាទីសំខាន់ក្នុងការធ្វើនិយតកម្មវដ្តភេទ។</p>
            <li>ប្រូសេស្តេរ៉ូនមាននាទី:</li>
            <p>_ ធ្វើឲ្យភ្នាសសើមស្បូនឡើងក្រាស់ត្រៀមកាច់សំបុក។</p>
            <p>_ ធ្វើឲ្យសាច់ដុំស្បូនសម្រាក ដើម្បីថែរក្សាគភ៌។</p>
            <p>_ ចូលរួមជាមួយអឺស្ត្រូសែន ដែលមាននាទីសំខាន់ក្នុងការធ្វើនិយតកម្មវដ្តភេទ។</p>
        </ul>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "អូវែ",
  },
  {
      type: "definition",
      title: "ខ. ពងស្វាស",
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
            <li>ពងស្វាសជាក្រពេញបន្តពូជឈ្មោល ដែលមាននាទីផលិតកាម៉ែតឈ្មោល និងអរម៉ូនភេទឈ្មោល។ អរម៉ូនភេទឈ្មោលគឺ អង់ដ្រូសែន ដែលមានអរម៉ូនតេស្តូស្តេរ៉ូន និងអរម៉ូន បង្អាក់។</li>
            <li>អរម៉ូនតេស្តូស្តេរ៉ូន ធ្វើឲ្យមានការលូតលាស់លក្ខណះភេទបន្ទាប់របស់មនុស្សប្រុសដូចជា សំឡេងគ្រល ដុះពុកចង្កា ពុកមាត់ រោមដៃជើងវែងៗនិងធ្វើឲ្យកំណល្ហែម៉ាតូសូអ៊ុតសកម្ម។</li>
            <li>អរម៉ូនបង្អាក់ ផលិតដោយកោសិកាស៊ែតូលី។ វាមាននាទីបង្អាក់ការបញ្ចេញអរម៉ូនFSH គឺវាចូលរួមក្នុងការត្រួតពិនិត្យតំណបត្រឡប់អវិជ្ជមាន។</li>
            <li>ពងស្វាសជា:</li>
            <p>_ ក្រពេញម៉ិចសូគ្រីន: បង្កើត និងបញ្ចេញស្ពៃម៉ាតូសូអ៊ុតមកក្រៅសារពាង្គកាយ។</p>
            <p>_ ក្រពេញអង់ដូគ្រីន: បញ្ចេញអរម៉ូនតេស្តូស្តេរ៉ូនទៅក្នុងចរន្តឈាមដោយផ្ទាល់។</p>
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
];




// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);


const GonadsSexGlands = () => {
  return (
    <div>
       <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default GonadsSexGlands
