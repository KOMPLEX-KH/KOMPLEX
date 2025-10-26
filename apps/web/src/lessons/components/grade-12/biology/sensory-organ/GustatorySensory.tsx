import React from "react";
import "katex/dist/katex.min.css";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";

const content : TopicContent_V3[] = [
  {
    type: "tip",
    title: "",
    content: (
      <div>
        <p>អណ្តាតមានលក្ខណៈដូចជាបន្ទះដែលមានអញ្រ្ចាញនៅពាសពេញផ្ទៃអណ្ដាតជាពិសេសផ្នែកកណ្ដាលនៃអណ្ដាត</p>
        <p>កាលណាកម្តៅកាន់តែក្តៅខ្លាំង ចលនានៃការប៉ះទង្គិចរបស់ម៉ូលេគុលកាន់តែកើនឡើង។</p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "",
    content: (
      <ImageExplanationBox
        title=""
        src="/docs/grade-12/biology/GustatorySensory/GustatorySensory.png"
        imageAlt=""
        explanation={[
          <div key="gustatory-sensory-explanation">
            • អណ្តាតមានលក្ខណៈដូចជាបន្ទះដែលមានអញ្រ្ចាញនៅពាសពេញផ្ទៃអណ្ដាតជាពិសេសផ្នែកកណ្ដាលនៃអណ្ដាត<br />
            • អញ្រ្ចាញជាកន្ទួលតូចៗដែលមានបង្កបពន្លកជីវ្ហាវិញ្ញាណ។<br />
            • ពន្លកជីវ្ហាវិញ្ញាណជាធ្មួលវិញ្ញាណរសជាតិ។ ភាគច្រើនវាស្ថិតនៅលើផ្ទៃអណ្ដាត ប៉ុន្តែវាក៏មាននៅលើផ្ទៃក្រអូមមាត់ដើមក និងកន្លើតផងដែរ។ <br />
            •  ពន្លកជីវ្ហាវិញ្ញាណមានរាងពងក្រពើ ដែលស្ថិតនៅតាមបណ្ដោយ ផ្ទៃជញ្ជាំងនៃអញ្រ្ចាញនីមួយៗ។ អញ្រ្ចាញមួយមានពន្លកជីវ្ហាវិញ្ញាណច្រើន។ 
            ពន្លកជីវ្ហាវិញ្ញាណនីមួយៗកើតពីកោសិការាងទ្រវែងគឺ កោសិកាទ្រទ្រង់ និងកោសិកាពន្លកជីវ្ហាវិញ្ញាណដែលបញ្ចប់ដោយរន្ធល្អិតៗ។ 
            រន្ធល្អិតៗទាំងនេះបើកចំហទៅរកផ្ទៃនៃអណ្ដាត នៅក្នុងរន្ធរសជាតិមួយ។ នៅក្នុងកោសិកាពន្លកជីវ្ហាវិញ្ញាណមានណឺរ៉ូនវិញ្ញាណមួយ 
            ឬច្រើនផ្ដុំគ្នាបានជាសរសៃប្រសាទវិញ្ញាណនាំ។<br />
          </div>, 
        ]}
      />
    ),
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div>
        រសជាតិសំខាន់ៗនៃអណ្ដាតមាន4គឺ ផ្អែម ប្រៃ ជូរ និងល្វីង។ <br />
        <div className="ml-2">
          • ទទួលរសជាតិផ្អែម នៅចុងអណ្តាត ផ្នែកមុខ<br />
          • ទទួលរសជាតិប្រៃ នៅគែមសងខាងអណ្ដាតផ្នែកមុខ <br />
          • ទទួលរសជាតិជូរ នៅគែមសងខាងអណ្ដាតផ្នែកបន្ទាប់ <br />
          • ទទួលរសជាតិល្វីង នៅគល់អណ្ដាត <br />
        </div>
      </div>

    ),
  },
  {
    type: "example",
    question: (
      <div key="gustatory-sensory-example">
        នៅពេលពន្លកជីវ្ហាវិញ្ញាណ ត្រូវបានភ្ញោចកោសិកាវិញ្ញាណរសជាតិក៏បង្កើតអាំងភ្លេចប្រសាទ 
        ដែលត្រូវបានបញ្ជូនទៅកាន់ខួរក្បាលត្រង់កំពកសៀតផ្កា តាមសរសៃប្រសាទវិញ្ញាណនាំ។ <br />
        បន្ទាប់មកខួរក្បាលបកប្រែអាំងភ្លុចប្រសាទនេះឲទៅជារសជាតិ។
      </div>
    ),
  },

];

export default function GustatorySensory() {
  return <ContentRendererV3 content={content} />;
}