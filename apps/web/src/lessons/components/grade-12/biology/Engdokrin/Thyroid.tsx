import { TopicContent, TopicContent_V3 } from "@/types/docs/topic";
import {DefinitionBox }from "@components/pages/docs/boxes/DefinitionBox";
import {TipBox} from "@components/pages/docs/boxes/TipBox";
import {ExampleBox} from "@components/pages/docs/boxes/ExampleBox";
import {WarningBox} from "@components/pages/docs/boxes/WarningBox";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@components/pages/docs/boxes/explanation-box/3DExplanationBox";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "៣.៣. ក្រពេញទីរ៉ូអ៊ុត",
    content:
      <>
        <div className="flex flex-col items-start">
        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='flex flex-col gap-2 items-start list-disc ml-5'>
            <li>វាផលិតអរម៉ូន២គឺ អរម៉ូនទីរ៉ុកស៊ីន និងកាល់ស៊ីតូនីន។</li>
            <li>អរម៉ូនទីរ៉ុកស៊ីនបង្កឡើងពីអាស៊ីតអាមីនេទីរ៉ូស៊ីនពីរដោយភ្ជាប់អាតូមអ៊ីយ៉ូតចំនួនបួន។</li>
            <li>អរម៉ូនទីរ៉ុកស៊ីនមាននាទីបង្កើនអត្រាមេតាបូលីស ប្រូតេអ៊ីន ភ្លុយស៊ីត និងខ្លាញ់។</li>
            <p>_ ការបរិភោគអាហារកង្វះជាតិអ៊ីយ៉ូតនៅក្នុងរបបអាហារធ្វើឲ្យក្រពេញទីរ៉ូអ៊ីតប៉ោងធំដែលបណ្តាលឲ្យ
            កើតជំងឺពកកដើម្បីបង្ការជំងឺពកក ត្រូវបរិភោគអាហារ ដែលមានជាតិអីយ៉ូតក្នុងរបបអាហារប្រចាំថ្ងៃ តាមរយះអំបិលអ៊ីយ៉ូត ត្រីអាហារសមុទ្រជាដើម។</p>
            <p>_ បរិមាណទីរ៉ុកស៊ីនតិចពេក នៅពេលពេញវ័យបណ្តាលឲ្យកើតជំងឺមីសីដែម ដែលមានលក្ខណះមួយចំនួនដូចជាឡើងទម្ងន់ ជ្រុះសក់ ជីពចរលោតយឺត សីតុណ្ហភាពសារពាង្គកាយថយចុះ។</p>
            <p>_ បរិមាណទីរ៉ុកស៊ីនច្រើនពេក បណ្តាលឲ្យកើតជំងឺបាសីដូវ ដែលមានលក្ខណះមួយចំនួនដូចជាក្រពេញទីរ៉ូអ៊ីតរីកធំ
              ហើយសកម្មខ្លាំងកំណើនសីតុណ្ហភាពសារពាង្គកាយ កំណើនអត្រាចង្វាក់បេះដូង និងមេតាបូលីស កំណើនសម្ពាធឈាម ស្រកទម្ងន់។</p>
            <li>អរម៉ូនកាល់ស៊ីតូនីនមាននាទីតម្រូវកម្រិតកាល់ស្យូមក្នុងឈាម និងមានអំពើផ្ទុយនឹងអំពើរបស់អរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ីត។</li>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ក្រពេញទីរ៉ូអ៊ុត",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
          "ក្រពេញទីរ៉ូអ៊ុតស្ថិតនៅត្រង់ក ចំពីក្រោមបំពង់សំឡេង និងនៅខាងមុខបំពង់ខ្យល់។",
          ""
      ],
    },
  ]
}


const Thyroid = () => {
  return (
    <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}
        {FirstTopicContent.imageExplanation &&
          Array.isArray(FirstTopicContent.imageExplanation) &&
          FirstTopicContent.imageExplanation.map((image: ImageBoxProps, index: number) => (
            <ImageExplanationBox
              key={index}
              title={image.title}
              src={image.src}
              imageAlt={image.imageAlt}
              explanation={image.explanation}
            />
          ))}
    </div>
  )
}

export default Thyroid
