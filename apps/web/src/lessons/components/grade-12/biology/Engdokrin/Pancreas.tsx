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
      title: "៣.៦.លំពែង",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic67.jpg",
        imageAlt: "រូបភាព",
        explanation: [
          "លំពែង គឺជា​សរីរាង្គ​ក្រពេញ​មាន​រាង​វែង​ហើយ​សំ​ប៉ែត ដែល​ស្ថិតនៅ​ពីក្រោយ​ក្រពះ​នៅ​ផ្នែក​ខាងលើ​នៃ​ពោះ​។ លំពែង​មាន​តួនាទី​ផលិត​អង់ស៊ីម​ដែល​ជួយ​ដល់​ការរំលាយ​អាហារ និង​ពពួក​អ័រម៉ូន​ដែល​ជួយ​គ្រប់គ្រង​កម្រិត​ជាតិ​ស្ករ (​គ្លុយកូស​) នៅក្នុង​រាងកាយ​។"
      ],
        title: "លំពែង",
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>លំពែងជាក្រពេញអង់ដូគ្រីនផង និងអិចសូគ្រីនផង (ក្រពេញចម្រុះ)។</li>
            <li>ក្រពេញម៉ិចសូគ្រីន វាបញ្ចេញរសរំលាយអាហារ ទៅក្នុងបំពង់នាំលំពែង។</li>
            <li>ក្រពេញអង់ដូគ្រីន: វាបញ្ចេញអរម៉ូនទៅក្នុងឈាមដោយផ្ទាល់។</li>
            <li>លំពែងជាក្រពេញអង់ដូគ្រីន ដែលកើតឡើងពីកោសិកាមួយក្រុមហៅថាអីឡូឡង់សេរ៉ង់។ ស៊ីឡូនីមួយៗកើតពី
            កោសិកាពីរបែបគឺកោសិកាអាល់ហ្វា(a)បញ្ចេញគ្លុយកាកុង និងកោសិកាបេតា (B)បញ្ចេញអរម៉ូនអាំងស៊ុយលីន។ អរម៉ូន
            ទាំងពីរនេះតម្រូវមេតាបូលីសស្អុយកូសនៅក្នុងឈាម។</li>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ក. អាំងស៊ុយលីន",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic59.webp",
        imageAlt: "រូបភាព",
        explanation: [
          "អាំងស៊ុយលីន គឺជាអ័រម៉ូនមួយប្រភេទ ដែលជាសារធាតុគីមីមួយ ត្រូវបានផលិតនៅក្នុងផ្នែកមួយនៃរាងកាយ ដើម្បីឲ្យមានសកម្មភាពមួយផ្សេងទៀត។ វាគឺជាប្រូតេអ៊ីន ដែលទទួលខុសត្រូវក្នុងការកំណត់កម្រិតជាតិស្ករនៅក្នុងឈាម ដែលជាផ្នែកមួយនៃការរំលាយអាហារ។"
      ],
        title: "អាំងស៊ុយលីន",
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ក្រោយពេលបរិភោគអាហារ សារធាតុចិញ្ចឹមដែលមាននៅក្នុងឈាមគឺ ភ្លុយកូស អាស៊ីតអាមីនេ អំបិលខនិជ
            វីតាមីន អាស៊ីតខ្លាញ់ និងគ្លីសេរ៉ុល។ ភ្លុយកូសមានឥទ្ធិពលទៅលើលំពែង។</li>
            <li>នៅពេលកម្រិតភ្លុយកូសឡើងខ្ពស់ អាំងស៊ុយលីនភ្ញោចកោសិកាគោលដៅ (មានកោសិកាថ្លើម កោសិកាសាច់ដុំ
            ជាប់ឆ្អឹង ជាលិកាខ្លាញ់) ឲ្យចាប់យកគ្លុយកូសប្រើប្រាស់ជាប្រភពថាមពល សម្រាប់សកម្មភាពផ្សេងៗ។ ក្រៅពីនេះ
            ចំពោះម៉ូលេគុលគ្លុយកូសដែលនៅសល់ អាំងស៊ុយលីនបំប្លែងឲ្យទៅជាគ្លីកូសែន ហើយស្តុកទុកក្នុងថ្លើម និងសាច់
            ដុំជាប់ឆ្អឹង។ ម៉្យាងទៀតគ្លុយកូសក៏ត្រូវបានបំប្លែងជា ខ្លាញ់ហើយស្តុកទុកក្នុងជាលិកាខ្លាញ់។</li>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ខ. គ្លុយកាកុង",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <div className='flex flex-col gap-2 items-start'>
            <p>ការបន្ថយកំហាប់គ្លុយកូសក្រោមកម្រិតកំណត់ បានភ្ញោចលំពែងឲ្យបញ្ចេញអរម៉ូនគ្លុយកាកុងទៅក្នុងចរន្តឈាម។
            ដើម្បីបង្កើនកំហាប់គ្លុយកូសឲ្យដល់កម្រិតកំណត់ ភ្លុយកាកុងបានភ្ញោចកោសិកាគោលដៅឲ្យផលិតគ្លុយកូស។ នៅក្នុងថ្លើម
            គ្លុយកាកុងបំប្លែងគ្លីកូសែនឲ្យទៅជាគ្លុយកូស បន្ទាប់មកគ្លុយកូសសាយចេញពីថ្លើមចូលទៅក្នុងចរន្តឈាមយ៉ាងរហ័ស។ នៅ
            ពេលគ្លីកូសែនក្នុងថ្លើមបញ្ចេញអស់ គ្លុយកាកុងនឹងធ្វើឲ្យអាស៊ីតអាមីនេ និងអាស៊ីតខ្លាញ់ប្លែងទៅជាគ្លុយកូសវិញ។</p>
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/",
        imageAlt: "រូបភាព",
        explanation: [
        
      ],
        title: "គ្លុយកាកុង",
  },
  {
      type: "definition",
      title: "គ. ជំងឺទឹកនោមផ្អែម",
      content: (
          <div className="flex flex-col items-start">
        </div>
      ),
  },
  {
        type: "imageExplanation",
        src: "/docs/grade-12/biology/mixs/pic64.jpg",
        imageAlt: "រូបភាព",
        explanation: [
          "ជំងឺទឹកនោមផ្អែម គឺជាជំងឺដែលរាងកាយមានកម្រិតស្ករខ្ពស់លើសធម្មតា ដែលកើតឡើងពីការដែលរាងកាយមិនអាចប្រើប្រាស់ស្ករជាថាមពលបានយ៉ាងធម្មតា។ "
      ],
        title: "ជំងឺទឹកនោមផ្អែម",
  },
  {
      type: "tip",
      title: "ចំណាំ",
      content: (
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>ជំងឺទឹកនោមផ្អែមបណ្តាលមកពី កោសិកាអ៊ីឡូឡង់សេរ៉ុង (កោសិកា​ B) ផលិតអរម៉ូនអាំងស៊ុយលីនមិនគ្រប់គ្រាន់បរិមាណគ្លុយកូសក្នុងឈាមកើនឡើង ហើយតម្រងនោមមិនអាចធ្វើឲ្យគ្លុយកូសទាំងអស់ជ្រាបចេញវិញបាន។</li>
            <li>បរិមាណគ្លុយកូសច្រើនក្នុងទឹកនោម បណ្តាលឲ្យកើតជំងឺទឹកនោមផ្អែម។</li>
            <li>ជំងឺទឹកនោមផ្អែមមានរោគសញ្ញាដូចជា ស្រេកទឹកខ្លាំង នោមច្រើន(ញឹកញាប់) កម្លាំងចុះខ្សោយ ស្រកទម្ងន់ ករណីធ្ងន់ធ្ងរអាចដំបៅលើខ្នងជាដើម។</li>
            <li>ការព្យាបាលដ៏មានប្រសិទ្ធភាពគឺ របបអាហារត្រឹមត្រូវ លេបឳសថឲ្យទៀងទាត់ និងចាក់អាំងស៊ុយលីនរៀងរាល់ថ្ងៃទើបអាចត្រួតពិនិត្យជំងឺបាន។</li>
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



const Pancreas = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default Pancreas
