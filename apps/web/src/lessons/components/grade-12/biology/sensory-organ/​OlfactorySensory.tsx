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
      <ImageExplanationBox
        title=""
        src="/docs/grade-12/biology/​OlfactorySensory/​OlfactorySensory.png"
        imageAlt=""
        explanation={[
          <div>
            • ច្រមុះជាសេរីរាង្គមួយ មាននាទីសំខាន់ក្នុងដំណកដង្ហើម និងទទួលក្លិន។ <br /><br />
            • តំបន់ឃានវិញ្ញាណ ជាស្រទាប់សើម ដែលកើតពីកោសិកា ៣ យ៉ាងគឺ <br />
            <div className="ml-6">
              - កោសិកាទ្រទ្រង់ <br />
              - កោសិកាមូលដ្ឋាន <br />
              - កោសិកាឃានវិញ្ញាណ។ <br />
            </div>
          </div>,
        ]}
      />
    ),
  },
  {
    type: "tip",
    title: "នាទីរបស់កោសិកានីមូយៗមាន",
    content: (
      <div>
        • <b>កោសិកាទ្រទ្រង់</b> ផ្ដល់សារធាតុចិញ្ចឹម ដល់កោសិកាឃានវិញ្ញាណ និងធ្វើឲស្លេស្មក្នុងរន្ធច្រមុះមានពណ៌លឿងភ្លាវ។ <br />
        • <b>កោសិកាមូលដ្ឋាន</b> ជាស្រទាប់បាត សម្រាប់ទ្រទ្រង់ផ្នែកដែលពាក់ព័ន្ធនឹងឃានវិញ្ញាណ។ <br />
        • <b>ស្រទាប់កោសិកាឃានវិញ្ញាណ</b> ជាធ្មួលវិញ្ញាណក្លិនដែលចាប់យកម៉ូលេគុលក្លិន ដើម្បីបង្កើតជាអាំងភ្លុចប្រសាទ។
      </div>

    ),
  },
  {
    type: "example",
    question: (
      <div>
        <p>នៅពេលម៉ូលេគុលក្លិនត្រូវបានស្រូបចូល  ហើយរលាយនៅក្នុងស្រទាប់ស្លេស្មនៃច្រមុះ។ 
          ពេលនោះរោមញ័រនៃកោសិកាឃានវិញ្ញាណ(ធ្មួលក្លិន)  ត្រូវបានភ្ញោចដោយសារធាតុគីមីរលាយនេះ 
          ហើយបង្កើតបានជាអាំងភ្លេចប្រសាទ  ដែលត្រូវដឹកនាំតាមសរសៃប្រសាទឃានវិញ្ញាណ  ទៅកាន់ខួរក្បាលត្រង់កំពកសៀតផ្កា។
        </p>
      </div>
    ),
  },

];

export default function OlfactorySensory() {
  return <ContentRendererV3 content={content} />;
}
