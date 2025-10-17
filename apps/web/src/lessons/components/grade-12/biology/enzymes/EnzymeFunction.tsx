'use client'

import React from 'react'
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { DefinitionBox } from '@/components/pages/docs/boxes/DefinitionBox';
import { deserializeTopicContentV3, serializeTopicContentV3 } from '@/components/pages/docs/utils/ContentSerializerV2';



const Content: TopicContent_V3[] = [
  {
    type: "tip",
    title: "ចំណែកថ្នាក់អង់សុីម",
    content: (
      <div className='space-y-2'>
        <p>គេធ្វើចំណែកថ្នាក់អង់សុីម ដោយផ្អែកលើកត្តា២យ៉ាងគឺ:</p>
        <ul className='list-disc space-y-1 ml-6'>

          <li>
            <p>យថាប្រភេទនៃកាតាលីករ ដែលជម្រុញល្បឿនប្រតិកម្មគីមី។</p>
          </li>
          <li>
            <p>យកឈ្មោះស៊ុបស្រ្តាត ហើយបញ្ចប់ដោយពាក្យ <span className='text-red-500 font-semibold'>អាស</span>។</p>
          </li>
        </ul>
      </div>
    )
  },
  {
    type: "definition",
    title: "",
    content: (
      <div className="w-full max-w-xl mx-auto my-6 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg shadow-md bg-white">
          <thead>
            <tr className="bg-blue-100 ">
              <th className="border px-2 py-2 font-semibold text-blue-700">ស៊ុបស្រ្តាត</th>
              <th className="border px-2 py-2 font-semibold text-blue-700">អង់សុីម</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 sm:px-4 text-center">លីពិត</td>
              <td className="border px-4 py-2 sm:px-4 text-center">លីប៉ាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">អ៊ុយរេ</td>
              <td className="border px-4 py-2 text-center">អ៊ុយរេអាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">ម៉ាល់តូស</td>
              <td className="border px-4 py-2 text-center">ម៉ាល់តាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">អាស៊ីតរីបូនុយក្លេអុិច</td>
              <td className="border px-4 py-2 text-center">រីបូនុយក្លេអាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">ឡាក់តូស</td>
              <td className="border px-4 py-2 text-center">ឡាក់តាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">សាការ៉ូស</td>
              <td className="border px-4 py-2 text-center">សាការ៉ាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">ប្រូតេអុីន</td>
              <td className="border px-4 py-2 text-center">ប្រូតេអាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">អាមីដុង</td>
              <td className="border px-4 py-2 text-center">អាមីឡាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">ផូស្ចាត</td>
              <td className="border px-4 py-2 text-center">ផូស្វាតតាស</td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border px-4 py-2 text-center">បុិបទីត</td>
              <td className="border px-4 py-2 text-center">បុិបទីដាស</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    type: 'definition',
    title: "គេធ្វើចំណែកថ្នាក់អង់សុីមជា៦ក្រុមធំៗ",
    content:
      (
        < >
          <DefinitionBox
            title="១. អុកសុីរេដុកតាស"
            content={
              <div className="space-y-2​ text">
                <p>
                  <strong>អុកសុីរេដុកតាស</strong> ជាអង់សុីមដែលចូលរួមក្នុងប្រតិកម្មអុកសុីដូរេដុកម្ម។
                </p>
                <p>
                  ថ្នាក់រងរបស់ក្រុមនេះមាន​ <span className="text-black-700 font-semibold  "> ដេអុីដ្រូសែនណាស អុកសុីសែនណាស ពែអុកសុីដាស អុីដ្រុកសុីឡាស អុកសុីដាស និងរេដុតាស</span>។
                </p>
              </div>
            }
          />

          <DefinitionBox
            title="២. ត្រង់ស៊្វែរ៉ាស"
            content={
              <div className="space-y-2​">
                <p>
                  <strong>ត្រង់ស្វែរ៉ាស</strong> ជាអង់សុីមដែលចុលរួមប្រតិកម្មគីមីយថាប្រភេទ ដោយផ្ទេរម៉ូលេគុល ពីបណ្តុំមួយ ទៅបណ្តុំមួយទៀតដូចជា​ <span className="font-semibold"> បណ្តុំអាមីន បណ្តុំកាបុកសុីល មេទីល ផូស្វ័រិល</span>។
                </p>
                <p>
                  <span className="text-red-700 font-semibold  ">ឧទាហរណ៏:</span> <strong>ត្រង់ស៍កាបុកសុីឡាស</strong>
                </p>
              </div>
            }
          />

          <DefinitionBox
            title="៣. អុីដ្រូឡាស"
            content={
              <div className="space-y-2​ text">
                <p>
                  <strong>អុីដ្រូឡាស</strong> ជាអង់សុីមដែលចូលរួមក្នុងប្រតិកម្មអុីដ្រូលីស។
                </p>
                <p>
                  អុីដ្រូឡាសមាន: <span className="font-semibold"> កាបូអុីដ្រាត</span> (អាមីឡាស​ សែលុយឡាស)​ <span className="font-semibold">ប្រូតេអាស លីប៉ាស អេស្ទែរ៉ាស ផូស្វាតាស និងបុិបទីដាស</span>។
                </p>
              </div>
            }
          />

          <DefinitionBox
            title="៤. លីយ៉ាស"
            content={
              <div className="space-y-2​ text">
                <p>
                  <strong>លីយ៉ាស</strong> ជាអង់សុីមដែល បំបែកទឺក(<InlineMath math={String.raw`H_2O`} />) កាបូនឌីអុកសុីត(<InlineMath math={String.raw`CO_2`} />) និងអាម៉ូញាក់(<InlineMath math={String.raw`NH_3`} />) ។
                </p>
                <p>
                  ក្នុងនោះមាន <span className="font-semibold"> ដេអុីដ្រាតាស ឌែមីណាលីយ៉ាស</span>។
                </p>
              </div>
            }
          />

          <DefinitionBox
            title="៥. អុីសូមែរ៉ាស"
            content={
              <div className="space-y-2​ text">
                <p>
                  <strong>អុីសូមែរ៉ាស</strong> ជាអង់សុីមដែល ជម្រុញប្រតិកម្មក្នុងម៉ូលេគុល ដើម្បីរៀបចំម៉ូលេគុលជាថ្មីឡើងវិញ ។

                </p>
                <span className="text-red-700 font-semibold ml-4">ឧទាហរណ៏:</span>
                <div className='space-y-2 ml-12'>
                  <ul className='list-disc'>

                    <li>
                      <p>
                        <strong>អេពីមេរ៉ាស</strong> ជាអង់សុីមដែលជម្រុញប្រតិកម្ម ក្នុងការរៀបចំបញ្ច្រាសនូវអាតូមកាបូន។
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>មុយតាស</strong> ជាអង់សុីមដែលជម្រុញប្រតិកម្មក្នុងម៉ូលេគុល ដោយធ្វើអោយប្រែប្រួលនូវនាទីនៃបណ្តំុផ្សេងៗ។
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            }
          />

          <DefinitionBox
            title="៦. លីហ្គាស"
            content={
              <div className="space-y-2​ text">
                <p>
                  <strong>លីហ្កាស</strong> ជាអង់សុីមដែលចូលរួមក្នុងប្រតិកម្មបង្កើតសម្ព័ន្ធគីមីរវាងម៉ូលេគុលស៊ុបស្រ្តាតពីរ។
                </p>
                <p>
                  លីហ្កាសរួមមាន: <span className="font-semibold"> សាំងតេតាស កាបុកសុីឡាស</span>​។
                </p>
              </div>
            }
          />
        </>
      )
  },

];

const EnzymeFunction = () => {
  const serialized = serializeTopicContentV3(Content);
  const deserialized = deserializeTopicContentV3(serialized);
  return <ContentRendererV3 content={deserialized} />
}

export default EnzymeFunction