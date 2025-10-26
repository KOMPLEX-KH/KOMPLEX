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
      title: "១.៣. ចលនការនៃអំពើរបស់អរម៉ូន",
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
            <li>អរម៉ូនប៉ិបទីត:</li>
            <div className="flex flex-col items-start ml-3">
                <p>_ ជាម៉ូលេគុលនៃច្រវាក់អាស៊ីតអាមីនេ (ឬប្រូតេអ៊ីន)</p>
                <p>_ មិនរលាយក្នុងស្រទាប់លីពីត ដែលមានវត្តមានក្នុងភ្នាសកោសិកា</p>
                <p>_ មិនអាចឆ្លងកាត់ភ្នាសកោសិកាបាន។</p>
                <p>ឧទាហរណ៍: អរម៉ូនអាំងស៊ុយលីន គ្លុយកាកុង ទីរ៉ុកស៊ីន។</p>
            </div>
            <li>អរម៉ូនស្តេរ៉ូអ៊ុីត:</li>
            <div className="flex flex-col items-start ml-3">
                <p>_ ជាម៉ូលេគុលលីពីតតូចៗ ដែលផលិតពីកូឡេស្តេរ៉ុល</p>
                <p>_ រលាយក្នុងស្រទាប់លីពីត ដែលមានវត្តមានក្នុងភ្នាសកោសិកា</p>
                <p>_ មានលទ្ធភាពឆ្លងកាត់ភ្នាសកោសិកាបាន</p>
                <p>ឧទាហរណ៍: អរម៉ូនតេស្តូស្តេរ៉ូន អឺស្ត្រូសែន ប្រូសេស្តេរ៉ូន។</p>
            </div>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ក. អរម៉ូនប៉ិបទីត",
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
            <li>អរម៉ូនប៉ិបទីត(អ្នកនាំសារទី១) → ធ្មួល (លើភ្នាសកោសិកាគោលដៅ) →ម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល→ ATP (ក្នុងស៊ីតូប្លាស)→AMPវដ្ត(អ្នកនាំសារទី២)→អង់ស៊ីម (សកម្ម)→បំប្លែងនាទីកោសិកាគោលដៅ។</li>
            <li>អរម៉ូនប៉ិបទីតអាចភ្ជាប់ទៅនឹងភ្នាសកោសិកាគោលដៅដោយសារធ្មួលនៅលើភ្នាសមានទម្រង់ត្រូវគ្នាជាមួយអរម៉ូន។ចំណងភ្ជាប់រវាងអរម៉ូនឆ្មួល ធ្វើឲ្យមានការភ្ជាប់ទៅនឹងប្រូតេអុីនG ហើយធ្វើឲ្យអង់ស៊ីម ដែលភ្ជាប់លើផ្ទៃខាងក្នុងរបស់ភ្នាសកោសិកា សកម្មឡើង។ បន្ទាប់មកអង់ស៊ីមអាដេនីលស៊ីក្លាសបំប្លែងATP ទៅជាម៉ូលេគុលAMPវដ្ត។</li>
        </ul>
      ),
  },
  {
      type: "definition",
      title: "ខ. អរម៉ូនស្តេរ៉ូអ៊ុីត",
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
            <li>អរម៉ូនស្តេរ៉ូអ៊ុត ក្នុងស៊ីតូប្លាសកោសិកា→ម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល→ សែន→ARNm→សំយោគប្រូតេអ៊ីន (ក្នុងស៊ីតូប្លាស)→ បំប្លែងនាទីកោសិកាគោលដៅ។</li>
            <li>នៅពេលអរម៉ូនស្តេរ៉ូអ៊ុតជ្រាបចូលទៅក្នុងកោសិកា វាបានភ្ជាប់ទៅនឹងធ្មួលនៅក្នុងស៊ីតូប្លាសកោសិកា ហើយបង្កើតបានជាម៉ូលេគុលចម្រុះអរម៉ូនធ្មួល។ បន្ទាប់មក
            ម៉ូលេគុលចម្រុះនេះក៏ចូលទៅក្នុងណ្វៃយ៉ូកោសិកាគោលដៅ។ នៅក្នុងណ្វៃយ៉ូម៉ូលេគុលចម្រុះនេះ បានភ្ញោចសែនយថាប្រភេទមួយឲ្យចម្លងក្រមជា ARNm ។ ARNm ចេញពីណៃយ៉ូទៅក្នុងស៊ីតូប្លាសហើយដឹកនាំសំយោគប្រូតេអ៊ុនយថាប្រភេទមួយ។</li>
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



const HormoneFlow = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  )
}

export default HormoneFlow
