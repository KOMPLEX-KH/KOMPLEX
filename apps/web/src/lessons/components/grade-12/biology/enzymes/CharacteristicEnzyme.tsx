'use client'

import React from 'react'
import Image from 'next/image';
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import image from '../../../../../../public/docs/grade-12/biology/Enzyme/GraphEnzyme.png';
import image2 from '../../../../../../public/docs/grade-12/biology/Enzyme/GraphEnzymPh.png';
import image3 from '../../../../../../public/docs/grade-12/biology/Enzyme/GraphOfEnzymActivities.png';

import { ImageExplanationBox } from '@/components/pages/docs/boxes/explanation-box/ImageExplanationBox';
import { TipBox } from '@/components/pages/docs/boxes/TipBox';

const items: TopicContent_V3[] = [
  {
    type: "tip",
    title: "លក្ខណៈរបស់អង់សុីម",
    content: (
      <div>
        <p>
          អង់សុីម ជាប្រូតេអុីនដែលមានសកម្មភាពខ្លាំងក្លាគឺ អង់សុីមមួយចំនួនតូចអាចបង្កើនប្រតិកម្មគីមីបានមួយចំនួនធំ។
        </p>
      </div>
    )
  },
  {
    type: "example",
    question: "",
    content: (
      <div>
        <p>កាតាឡាសមួយម៉ូលេគុល អាចបំបែកម៉ូលេគុលអុីដ្រូសែនពែអុកសុីតរាប់លានតែក្នុងមួយវិនាទី</p>
      </div>
    )
  },
  {
    type: "hint",
    content: (
      <div>
        <p>
          អង់សុីមទាំងអស់ ជាប្រូតេអុីនមានអំពើជាយថាប្រភេទគឺអង់សុីមមួយប្រភេទមានអំពើលើស៊ុបស្ត្រាតតែមួយបែបប៉ុណ្នោះ។
        </p>
      </div>
    )
  },
  {
    type: "definition",
    title: "ក. ឥទ្ធិពលនៃសីតុណ្ហភាពលើសកម្មភាពអង់សុីម",
    content: (
      <ImageExplanationBox
        src={image.src}
        imageAlt="Graph of enzyme activity vs temperature"
        explanation={
          <div>
            <div className="ml-2  text-gray-800 ">
              <ul className="list-disc list-inside space-y-2">
                <li>សីតុណ្ហភាពកើនដល់ ១០°C សកម្មភាពអង់ស៊ីមកើនឡើងទ្វេដង</li>
                <li>សីតុណ្ហភាពនៅចន្លោះពី ៤០°C ទៅ ៤៥°C អង់ស៊ីមមានសកម្មភាពខ្លាំងក្លាបំផុត។</li>
                <li>សីតុណ្ហភាពខ្ពស់ពេក (លើសពី ៤៥°C) ឬទាបពេក (០°C) អង់ស៊ីមត្រូវបានបំផ្លាញ។</li>
              </ul>
            </div>
          </div>
        }
        title={"ក្រាបបង្ហាញអំពីឥទ្ធិពលនៃសីតុណ្ហភាពលើសកម្មភាពអង់សុីម"}
      />
    )
  },
  {
    type: "definition",
    title: "ខ. ឥទ្ធិពលpHទៅលើអង់សុីម",
    content: (
      <ImageExplanationBox
        src={image2.src}
        imageAlt="Graph of enzyme activity on pH"
        explanation={
          <div>
            <div className="ml-2  text-gray-800 ">
              <ul className="list-disc list-inside space-y-2">
                <li>កាលណាpH=7 សកម្មភាពអង់សុីមកើនដល់អតិបរិមារ(M)</li>
                <li><InlineMath math={String.raw`pH<7`} /> ពី 7 ទៅ 4.5 ឬ <InlineMath math={String.raw`pH>7`} /> ពី 7 ទៅ 9 សកម្មភាពអង់សុីមថយចុះ។</li>
                <li><InlineMath math={String.raw`pH=4`} /> ឬ​ <InlineMath math={String.raw`pH=9`} /> អង់សុីមត្រូវបាត់បង់។</li>
              </ul>
            </div>
          </div>
        }
        title={"ក្រាបបង្ហាញអំពីឥទ្ធិពលនៃសីតុណ្ហភាពលើសកម្មភាពអង់សុីម"}
      />
    )
  },
  {
    type: "definition",
    title: "គ. ឥទ្ធិពលកំហាប់ស៊ុបស្ត្រាតនិងអង់សុីមទៅលើប្រតិកម្ម",
    content: (
      <ImageExplanationBox
        src={image3.src}
        imageAlt=" Graph of enzyme activity vs substrate concentration"
        explanation={
          <div>
            <div className="ml-2  text-gray-800 ">
              <ul className="list-disc list-inside space-y-2">
                <li>កាលណាកំហាប់ស៊ុបស្រ្តាតកាន់តែច្រើន ល្បឿនប្រតិកម្មកាន់តែលឿន។</li>
                <li>កាលណាកំហាប់អង់សុីម និងស៊ុបស្រ្តាតកាន់តែខាប់ ល្បឿនប្រតិកម្មកាន់តែលឿនខ្លាំងជាង។</li>
                <li>ដូច្នេះល្បឿនប្រតិកម្ម សមាមាត្រទៅនីងកំហាប់អង់សុីម និងកំហាប់ស៊ុបស្ត្រាត។</li>
              </ul>
            </div>
          </div>
        }
        title={"ក្រាបបង្ហាញអំពីឥទ្ធិពលនៃសីតុណ្ហភាពលើសកម្មភាពអង់សុីម"}
      />
    )
  },
  {
    type: "definition",
    title: "ឃ. អង់សុីមត្រូវការកូរអង់សុីមដើម្បីធ្វើសកម្មភាព",
    content: (
      <div>
        <TipBox
          title="អង់សុីមត្រូវការកូរអង់សុីមដើម្បីធ្វើសកម្មភាព"
          content={
            <div>
              <p>
                កូអង់សុីម ជាអង្គធាតុសមាសដែលមិនមែនជាប្រូតេអុីន។ វាចូលរួមជាមួយអង់សុីមដើម្បីជំរុញល្បឿនប្រតិកម្មគីមី។

              </p>
              <p>
                <span className='text-blue-700'>ឧទាហរណ៏:</span> កូអង់សុីមមាន វីតាមីនBកំផ្លិច កូអង់សុីមA។

              </p>
            </div>
          }
        />
      </div>
    )
  },
  {
    type: "definition",
    title: "ង. អង់សុីមជាកាតាលីករដែលមានប្រតិកម្មបញ្រ្ចាស",
    content: (
      <div className='space-y-4'>
        <TipBox
          title="អង់សុីមជាកាតាលីករដែលមានប្រតិកម្មបញ្រ្ចាស"
          content={
            <div>
              <p>
                អង់សុីម អាចបំលែងជាម៉ូលេគុលមួយអោយទៅជាសារធាតុថ្មីមួយ ហើយសារធាតុថ្មីនេះក៏អាចប្រែប្រួលមកជាសារធាតុដើមវិញ។
              </p>
            </div>
          }
        />

      </div>
    )
  }

];


const CharacteristicEnzyme = () => {
  return <ContentRendererV3 content={items} />
}

export default CharacteristicEnzyme