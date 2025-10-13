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
    title: "៣.៤.ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត",
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
            <li>ក្រពេញប៉ារ៉ាទីរ៉ូអ៊ុីត ជាក្រពេញរាងពងក្រពើតូចៗចំនួនបួន ដែលបង្កប់ក្នុងផ្នែកខាងក្រោយនៃក្រពេញទីរ៉ូអ៊ុីត។</li>
            <li>ក្រពេញនេះផលិតអរម៉ូនប៉ារ៉ាទីរ៉ូអ៊ុីត។</li>
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
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អុីប៉ូតាឡាមុស",
      src: "/docs/grade-12/biology/",
      imageAlt: "",
      explanation: [
        
      ],
    },
  ]
}

const Parathyroid = () => {
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

export default Parathyroid
