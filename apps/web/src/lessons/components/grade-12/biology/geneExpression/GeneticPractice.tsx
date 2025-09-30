import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { InlineMath } from "react-katex";

import { PracticeExercise } from "@/types/docs/topic";


const GeneticPractice = () => {

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "",
      description: "សំណួរទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="p1">ដូចម្តេចដែលហៅថាសែន?</p>
      ],
      answers: [
        <div key="div1" className="flex flex-col gap-3 text-[15px]">
          <p key="p2">សែន ជាអង្កត់មួយរបស់ADN ។</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "",
      description: "សំណួរទី ២",
      problemType: "Second Exercise",
      problems: [
        <p key="p3">ចូរប្រៀបធៀប <span className="text-[13px]"><InlineMath math="ADN" /></span> និង <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span></p>
      ],
      answers: [
        <ul key="ul1" className="list-disc pl-5">
          <li>លក្ខណះដូចគ្នា</li>
          <p key="p4">_ ជាប្រភេទអាស៊ីតនុយក្លេអ៊ុិច</p>
          <p key="p5">_ មានអាស៊ីតផូស្វ័រិច</p>
          <p key="p6">_ មានបាសអាសូត A, C, G</p>
          <li>លក្ខណៈខុសគ្នា :</li>
          <div className="flex flex-col gap-3 md:flex-row md:gap-15 flex-wrap">
            <div className="flex flex-col gap-2">
              <span className="text-[13px]"><InlineMath math="+ ADN" /></span>
              <p key="p7">_ កើតពីច្រវាក់នុយក្លេអូទីតពីរបំពេញគ្នា ។</p>
              <p key="p8">_ ស្គរដេអុកស៊ីរីបូស ។</p>
              <p key="p9">_ មានបាសT អត់ U ។</p>
              <p key="p10">_ មាននុយក្លេអូទីតច្រេីនពីរាប់មុឺនទៅរាប់លាន ប្រវែងវែងជាង ។</p>
              <p key="p11">_ ម៉ាសម៉ូលេគុលធំ ។</p>
              <p key="p12">_ អង្កត់មួយរបស់ ADN កំណត់សំយោគ <span className="text-[13px]"><InlineMath math="ARN_{m}" /> </span> មួយ ។</p>
              <p key="p13">_ ផ្ទុកព័ត៌មានសេនេទិចសម្រាប់ចម្លងចេញនូវ <span className="text-[13px]"><InlineMath math="ARN_{m}" /> </span> ។</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[13px]"><InlineMath math="+ ARN_{m}" /></span>
              <p key="p14">_ កើតពីច្រវាក់នុយក្លេអូទីតតែម្ខាង។</p>
              <p key="p15">_ ស្កររីបូស។</p>
              <p key="p16">_ មានបាស U អត់ T ។</p>
              <p key="p17">_ មាននុយក្លេអូទីតតិច ពីរាប់រយទៅរាប់ពាន់ប្រវែងខ្លីជាង។</p>
              <p key="p18">_ ម៉ាសម៉ូលេគុលតូច។</p>
              <p key="p19">_ <span className="text-[13px]"><InlineMath math="+ ARN_{m}" /></span>  មួយសំយោគចេញពីអង្កត់មួយរបស់ADN។</p>
              <p key="p20">_ ចម្លងព័ត៌មានសេនេទិចរបស់ADN។</p>
            </div>
          </div>
        </ul>
      ]
    },
    {
      id: "ex3",
      title: "",
      description: "សំណួរទី ៣",
      problemType: "Third Exercise",
      problems: [
        <p key="p21">តើមានបាតុភូតអ្វី កើតឡើងនៅពេលដែលរីបូសូមលោតដល់កូដុងស្តុប?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="div2">
          <p key="p22">នៅពេលដែលរីបូសូមលោតដល់កូដុងស្តុប (UAA UAG UGA) ចលនការសំយោគប្រូតេអ៊ីនត្រូវបាន
            បញ្ចប់ដោយធាតុចម្រុះសាំញ៉ាំមាន <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> រីបូសូម <span className="text-[13px]"><InlineMath math="ARN_{t}" /></span> និងច្រវាក់ប៉ូលីប៉ិបទីតបានបំបែកចេញពីគ្នា ហើយភ្លាម
            នោះអាស៊ីតអាមីនេមេត្យូនីនត្រូវបានផ្តាច់ចេញពីច្រវាក់ប៉ូលីប៉ិបទីតដែរ។</p>
        </div>
      ]
    },
    {
      id: "ex4",
      title: "",
      description: "សំណួរទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <p key="p23">ចូរនិយាយពីចលនការចម្លងក្រម។</p>],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="div3">
          <p>ចលនការចម្លងក្រមប្រព្រឹត្តទៅនៅលើម៉ូលេគុលADN នៅចន្លោះវគ្គរបស់វដ្តកោសិកាក្រោមអំពើរបស់អង់ស៊ីមARNប៉ូលីមែរ៉ាស។ ARNប៉ូលីមែរ៉ាសមាននាទី៖</p>
          <ul className="list-disc pl-5 flex flex-col items-start text-[14px]">
            <li>ទទួលស្គាល់សញ្ញាសេនេទិច លើម៉ូលេគុលADN ដែលអាចឲ្យចាប់ផ្តើម និងបញ្ចប់ការសំយោគម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នៅត្រង់កន្លែងជាក់លាក់។</li>
            <li>បើកម៉ូលេគុលADNដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនដែលភ្ជាប់ច្រវាក់ទាំងពីររបស់ADN។</li>
            <li>ធ្វើឲ្យមានប៉ូលីមែកម្មនៃរីបូនុយក្លេអូទីត: រីបូនុយក្លេអូទីតសេរីចូលមកបំពេញច្រវ៉ាក់ម្ខាងរបស់អង្កត់ADNតាមគោលការណ៍បំពេញបាស A-U, T-A, C-G, G-C។</li>
            <li>សំយោគចប់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> ផ្តាច់ខ្លួនចេញពីADN ហើយចាកចេញពីណៃយ៉ូទៅក្នុងស៊ីតូប្លាស។</li>
          </ul>
        </div>
      ]
    },
    {
      id: "ex5",
      title: "",
      description: "សំណួរទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <p key="p25">ហេតុអ្វីបានជាគេនិយាយថាADNជាម៉ាក្រូម៉ូលេគុលមានក្រម?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="div4">
          <p>បានជាគេនិយាយថាADNជាម៉ាក្រូម៉ូលេគុលមានក្រម ពីព្រោះម៉ូលេគុលADNកើតឡើងពីនុយក្លេអូទីតជាច្រើន
            តភ្ជាប់គ្នាតាមតំណលំដាប់ជាក់លាក់ ហៅថាតំណលំដាប់នុយក្លេអូទីត។ ម៉្យាងទៀតតំណលំដាប់នុយក្លេអូទីតរបស់ADN
            ជាក្រមជាក់លាក់សម្រាប់កំណត់តំណលំដាប់រីបូនុយក្លេអូទីតរបស់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span>  ដើម្បីសំយោគប្រូតេអ៊ុនយថាប្រភេទ។</p>
        </div>
      ]
    },
    {
      id: "ex6",
      title: "",
      description: "សំណួរទី ៦",
      problemType: "Sixth Exercise",
      problems: [
        <p key="p26">តើគេប្រៀបប្រដូចក្រមសេនេទិចទៅនឹងអ្វី?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="div5">
          <p>គេប្រៀបប្រដូចក្រមសេនេទិចដូចវចនានុក្រមសម្រាប់បកប្រែភាសាអក្សរ4តួរបស់ADN ឲ្យទៅជាភាសាអក្សរ20តួររបស់ប្រូតេអ៊ីន។</p>
        </div>
      ]
    },
    {
      id: "ex7",
      title: "",
      description: "សំណួរទី ៧",
      problemType: "Seventh Exercise",
      problems: [
        <p key="p27">ចូរពណ៌នាពីនាទី <span className="text-[13px]"><InlineMath math="ADN" /></span>  <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> <span className="text-[13px]"><InlineMath math="ARN_{t}" /></span> <span className="text-[13px]"><InlineMath math="ARN_{r}" /></span> ក្នុងចលនការសំយោគប្រូតេអុីន ។</p>
      ],
      answers: [
        <ul className="list-disc pl-5 flex flex-col items-start text-[14px] gap-4" key={"q1"}>
          <li><span className="text-[13px]"><InlineMath math="ADN" /></span>: មាននាទីផ្ទុកព័ត៌មានសេនេទិច សម្រាប់សំយោគចេញពីARN។</li>
          <li><span className="text-[13px]"><InlineMath math="ARN_{m}" /></span>: មាននាទីចម្លងព័ត៌មានសេនេទិចគឺ ចម្លងតំណលំដាប់នុយក្លេអូទីតចេញពីច្រវាក់ម្ខាងរបស់សែន ឲ្យទៅជាតំណលំដាប់រីបូនុយក្លេអូទីត ហើយបញ្ជូនតំណលំដាប់រីបូនុយក្លេអូទីតទៅកាន់រីបូសូម ដើម្បីសំយោគប្រូតេអ៊ីន។</li>
          <li><span className="text-[13px]"><InlineMath math="ARN_{t}" /></span>: មាននាទីដឹកអាស៊ីតអាមីនេពីស៊ីតូប្លាស ទៅកាន់រីបូសូម និងតម្រូវអង់ទីកូដុងជាមួយកូដុង ដើម្បីចូលរួមមកប្រែព័ត៌មានសេនេទិចឲ្យទៅជាប្រូតេអ៊ីន។</li>
          <li><span className="text-[13px]"><InlineMath math="ARN_{r}" /></span>: មាននាទីចូលរួមជាមួយប្រូតេអ៊ីន បង្កើតជារីបូសូម ដែលជារោងជាងសំយោគប្រូតេអ៊ីន។</li>
        </ul>
      ]
    },
    {
      id: "ex8",
      title: "",
      description: "លំហាត់ទី ១",
      problemType: "Eighth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key={"q1"}>
          <p>សែនមួយ មាននុយក្លេអូទីតប្រភេទ C = 20% នៃចំនួននុយក្លេអូទីតទាំងអស់។ សែននេះកំណត់សំយោគប្រូតេអ៊ីនមួយដែលមានអាស៊ីតអាមីនេចំនួន198។ ម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> ដែលសំយោគចេញពីសែនខាងលើមានវីបូនុយក្លេអូទីតទាំងបួន
            ប្រភេទគឺ A, U, C, G ដែលក្នុងនោះវីបូនុយក្លេអូទីត <span className="text-[13px]"><InlineMath math="U_{ARN_{m}} = 25\% , G_{ARN_{m}} = 30\%" /></span></p>
          <p>ក.រកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន ?</p>
          <p>ខ.រកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span></p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[13px]" key={"q1"}>
          <p className="font-bold">ក.រកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន</p>
          <p>សែនមាន <InlineMath math="C = 20\% នៃ M" /></p>
          <p>អាសុីតអាមីនេ = 198</p>
          <InlineMath math="U_{ARN_{m}} = 25\% , G_{ARN_{m}} = 30\%" />
          <p>ដោយនុយក្លេអូទីត១ ជាក្រមនៃអាស៊ីតអាមីនេមួយនៅលើច្រវាក់ម្ខាងរបស់សែន ហើយនៅលើច្រវាក់ម្ខាងរបស់សែនមានត្រីធាតុមួយត្រូវនឹងកូដុងផ្តើម និងមានត្រីធាតុមួយទៀតត្រូវនឹងកូដុងស្តុប</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនអាសុីតអាមីនេ = <InlineMath math="\frac{M_{សែន}}{2 \times 3} -2 " /></p>
          <p><InlineMath math="\Rightarrow \frac{M_{សែន}}{2} = (198+2) \times 3 = 600 " /> នុយក្លេអូទីត</p>
          <p>ចំនួននុយក្លេអូទីតសរុប <InlineMath math="M_{សែន} = 1200 " /> នុយក្លេអូទីត</p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="C = \frac{1200 \times 20}{100} = 240 " /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <InlineMath math="\Rightarrow M = A + T + C + G" />
          <InlineMath math="\Rightarrow M = 2A + 2C" />
          <InlineMath math="\Rightarrow A = \frac{M}{2} -C = \frac{1200}{2} - 240 = 360" />
          <p>ដូច្នេះ <InlineMath math="A=T= 360" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C=G= 240" /> នុយក្លេអូទីត</p>
          <p className="font-bold">ខ. រកចំនួនរីបូនុយក្លេអូទីតរាល់ប្រភេទនីមួយៗរបស់ <InlineMath math="ARN_{m}" /></p>
          <p>ដោយ <InlineMath math="ARN_{m}" /> ចំលងចេញពីច្រវាក់ម្ខាងនៃសែន</p>
          <p><InlineMath math="\Rightarrow m = \frac{M_{សែន}}{2} = \frac{1200}{2} = 600 " /> នុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow U = \frac{600 \times 25}{100} = 150 " /> នុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow m = \frac{600 \times 30}{100} = 180 " /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏ចំលងក្រម</p>
          <InlineMath math="A_{សែន} = T_{សែន} - (A+U)_{ARN_{m}}" />
          <p><InlineMath math="A_{ARN_{m}} = A_{សែន} - U_{ARN_{m}} = 360 -150 = 210 " /> រីបូនុយក្លេអូទីត</p>
          <InlineMath math="C_{សែន} = G_{សែន} - (C+G)_{ARN_{m}}" />
          <p><InlineMath math="C_{ARN_{m}} = C_{សែន} - G_{ARN_{m}} = 240 -180 = 60 " /> រីបូនុយក្លេអូទីត</p>
          <p>ដូច្នេះ <InlineMath math="A_{ARN_{m}} = 210 " /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="U_{ARN_{m}} = 150 " /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="C_{ARN_{m}} = 60 " /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="G_{ARN_{m}} = 180 " /> រីបូនុយក្លេអូទីត</p>
        </div>
      ]
    },
    {
      id: "ex9",
      title: "",
      description: "លំហាត់ទី ២",
      problemType: "Ninth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key={"q1"}>
          <p>សែនមួយមានផលបូកនុយក្លេអូទីតប្រភេទ C និង G ស្មើនឹង 75% នៃនុយក្លេអូទីតទាំងអស់ ហើយមានចំនួនសម្ព័ន្ធអ៊ីដ្រូសែនសរុប 4125 ។</p>
          <p>ក.គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន ។</p>
          <p>ខ.គណនាប្រវែងសែនគិតជាមីក្រូម៉ែត ?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[13px]" key={"q1"}>
          <p className="font-bold">ក.គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន</p>
          <p>បំរាប់ <InlineMath math="\%C + \%G = 75\%" /></p>
          <p><InlineMath math="L = 4125 " /> សម្ព័ន្ធអុីដ្រូសែន</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <InlineMath math="2\%C = 75\% \Rightarrow \%C = \frac{75\%}{2} = 37.5\%" />
          <p>យេីងបាន <InlineMath math="\%A + \%T + \%C + \%G = 100\%" /></p>
          <InlineMath math="A + C = 50\%" />
          <InlineMath math="\Rightarrow \%A  = 50\% - 37.5\% = 12.5 \%" />
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="A = \frac{M \times 12.5}{100} = \frac{12.5M}{100}" /></p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="C = \frac{M \times 37.5}{100} = \frac{37.5M}{100}" /></p>
          <p>A ចងភ្ជាប់T ដោយសម្ព័ន្ធអុីដ្រូសែន2</p>
          <p>C ចងភ្ជាប់G ដោយសម្ព័ន្ធអុីដ្រូសែន3</p>
          <InlineMath math="\Rightarrow L = 2A + 3C " />
          <InlineMath math="\Rightarrow 2A + 3C = 4125" />
          <InlineMath math="\Rightarrow 2(\frac{12.5M}{100}) + 3(\frac{37.5M}{100}) = 4125" />
          <InlineMath math="\Rightarrow 25M + 112.5M = 412500" />
          <p><InlineMath math="\Rightarrow M = 3000" /> នុយក្លេអូទីត</p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="A = \frac{12.5M}{100} = \frac{12.5 \times 3000}{100}" /></p>
          <p><InlineMath math="\Rightarrow A = 375" /> នុយក្លេអូទីត</p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="C = \frac{37.5M}{100} = \frac{37.5 \times 3000}{100}" /></p>
          <p><InlineMath math="\Rightarrow C = 1125" /> នុយក្លេអូទីត</p>
          <p>ដូច្នេះ <InlineMath math="A=T=375" /> នុយក្លេអូទីត</p>
          <p> <InlineMath math="C=G=1125" /> នុយក្លេអូទីត</p>
          <p className="font-bold">ខ. គណនាប្រវែងសែនគិតជាមីក្រូម៉ែត</p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l = \frac{3000}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l = 510 nm" />
          <p>ដោយ <InlineMath math="1nm = 10^{-3} um" /></p>
          <p>ដូច្នេះ  <InlineMath math=" l = 0.51 um" /></p>
        </div>
      ]
    },
    {
      id: "ex10",
      title: "",
      description: "លំហាត់ទី ៣",
      problemType: "Tenth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key={"q1"}>
          <p>ម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> មួយមានសមាសភាពរីបូនុយក្លេអូទីត A, U, C, G ដែលចែកជាសមាមាត្រតាមលំដាប់លំដោយដូចតទៅ៖ 9:7:3:1។ ម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នេះមានប្រវែង 326.4nm។</p>
          <p>ក.គណនាចំនួនរីបូនុយក្លេអូទីតប្រភេទនីមួយៗរបស់ម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នេះ។</p>
          <p>ខ.គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែនដែលកំណត់សំយោគម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នេះ ។</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[13px]" key={"q1"}>
          <p>ក.គណនាចំនួនរីបូនុយក្លេអូទីតប្រភេទនីមួយៗរបស់ម៉ូលេគុល <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> នេះ។</p>
          <p>បំរាប់ <InlineMath math="l_{ARN_{m}} = 326.4 nm" /></p>
          <p><InlineMath math="ARN_{m} : A, U , G , C " /> ត្រូវសមាមាត្រ 9 : 7 : 3 : 1</p>
          <p>ដោយពីរីបូនុយក្លេអូទីតមួយទៅរីបូនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l_{ARN_{m}} = m \times 0.34 nm" />
          <p><InlineMath math="\Rightarrow m = \frac{l_{ARN_{m}}}{0.34} = 960" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow \frac{A}{9}=\frac{U}{7}=\frac{G}{3}=\frac{C}{1}= \frac{A+U+C+G}{9+7+3+1}=\frac{m}{20}=\frac{960}{20}= 48" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow \frac{A}{9}= 48 \Rightarrow A = 432" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow \frac{U}{7}= 48 \Rightarrow U = 336" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow \frac{G}{3}= 48 \Rightarrow G = 144" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow \frac{C}{1}= 48 \Rightarrow C = 48" /> រីបូនុយក្លេអូទីត</p>
          <p>ដូចនេះ <InlineMath math="A_{ARN_{m}} = 432" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="U_{ARN_{m}} = 336" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="G_{ARN_{m}} = 144" /> រីបូនុយក្លេអូទីត</p>
          <p><InlineMath math="C_{ARN_{m}} = 48" /> រីបូនុយក្លេអូទីត</p>
          <p className="font-bold">ខ. គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន</p>
          <p>តាមគោលការណ៏ចំលងក្រម</p>
          <InlineMath math="A_{សែន} = T_{សែន} = (A+U)_{ARN_{m}}" />
          <p><InlineMath math="= 432 + 336 = 768" /> នុយក្លេអូទីត</p>
          <InlineMath math="C_{សែន} = G_{សែន} = (C+G)_{ARN_{m}}" />
          <p><InlineMath math="= 48 + 144 = 192" /> នុយក្លេអូទីត</p>
          <p>ដូចនេះ <InlineMath math="A_{សែន} = T_{សែន} = 768" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C_{សែន} = G_{សែន} = 192" /> នុយក្លេអូទីត</p>
        </div>
      ]
    },
    {
      id: "ex11",
      title: "",
      description: "លំហាត់ទី ៤",
      problemType: "Eleventh Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key={"q1"}>
          <p>ប្រភេទប្រូតេអ៊ីនមួយមានម៉ាសម៉ូលេគុល 66000ខ្នាតកាបូន ។ ដោយដឹងថាម៉ាសម៉ូលេគុលរបស់អាស៊ីតអាមីនេមួយគឺ110ខ្នាតកាបូន ។</p>
          <p>ក.គណនាចំនួនសម្ព័ន្ធប៉ិបទីតក្នុងម៉ូលេគុលប្រូតេអ៊ីននេះ ?</p>
          <p>ខ.តើសែនដែលកំនត់សយោគប្រូតេអ៊ីនខាងលើមានប្រវែងប៉ុន្មាន µm ?</p>
          <p>គ.តើ <span className="text-[13px]"><InlineMath math="ARN_{m}" /></span> មានម៉ាសម៉ូលេគុលប៉ុន្មាន? បើម៉ាសម៉ូលេគុលមធ្យមនៃនុយក្លេអូទីតមួយគឺ 300ខ្នាតកាបូន ។</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[13px]" key={"q1"}>
          <p className="font-bold">ក.គណនាចំនួនសម្ព័ន្ធប៉ិបទីតក្នុងម៉ូលេគុលប្រូតេអ៊ីន</p>
          <p>បំរាប់: ម៉ាសម៉ូលេគុលប្រូតេអ៊ីន66000ខ្នាតកាបូន</p>
          <p>ដោយអាស៊ីតអាមីនេមួយមានម៉ាសម៉ូលេគុល 110 ខ្នាតកាបូន</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនអាសុីតអាមីនេ= <InlineMath math="\frac{66000}{110}= 600 " /> អាសុីតអាមីនេ</p>
          <p>ដោយអាស៊ីតអាមីនេ2 ភ្ជាប់គ្នាដោយសម្ព័ន្ធប៉ិបទីត1</p>
          <p><InlineMath math="\Rightarrow L' " /> = ចំនួនអាសុីតអាមីនេ -1 = 600 -1 = 599 សម្ព័ន្ធបុិបទីត</p>
          <p>ដូចនេះ <InlineMath math=" L'= 599 " /> សម្ព័ន្ធបុិបទីត</p>
          <p className="font-bold">ខ. រកប្រវែងសែនកំនត់សំយោគប្រូតេអុីន</p>
          <p>ដោយនុយក្លេអូទីត១ ជាក្រមនៃអាស៊ីតអាមីនេមួយនៅលើច្រវាក់ម្ខាងរបស់សែន ហើយនៅលើច្រវាក់ម្ខាងរបស់សែនមានត្រីធាតុមួយត្រូវនឹងកូដុងផ្តើម និងមានត្រីធាតុមួយទៀតត្រូវនឹងកូដុងស្តុប</p>
          <p><InlineMath math="\Rightarrow L' " /> ចំនួនអាសុីតអាមីនេ = <InlineMath math="\frac{M_{សែន}}{6} -2" /></p>
          <InlineMath math="\Rightarrow M_{សែន} = (ចំនួនអាសុីតអាមីនេ + 2) \times 6" />
          <p><InlineMath math="\Rightarrow M_{សែន} = (600 + 2) \times 6 = 3612" /> នុយក្លេអូទីត</p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l = \frac{3612}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l = 614.04 nm" />
          <p>ដោយ <InlineMath math="1nm = 10^{-3} um" /></p>
          <p>ដូចនេះ <InlineMath math=" l = 61404 \times 10^{-5} um" /></p>
          <p className="font-bold">គ. រកម៉ាសម៉ូលេគុលរបស់ <InlineMath math="ARN_{m}" /></p>
          <p>ដោយនុយក្លេអូទីតមួយមានម៉ាសម៉ូលេគុលមធ្យមស្មេី 300ខ្នាតកាបូន</p>
          <p><InlineMath math="\Rightarrow" /> ម៉ាសម៉ូលេគុល<InlineMath math="ARN_{m}" /> = 1806 x 300 = 541800 ខ្នាតកាបូន</p>
          <p>ដូច្នេះ ម៉ាសម៉ូលេគុល<InlineMath math="ARN_{m}" /> = 541800 ខ្នាតកាបូន</p>
        </div>
      ]
    },
    {
      id: "ex12",
      title: "",
      description: "លំហាត់ទី ៥",
      problemType: "Twelth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key={"q1"}>
          <p>សែនមួយមាននុយក្លេអូទីតប្រភេទអាដេនីនចំនួន 264 ស្មើនឹង 22%នៃចំនួននុយក្លេអូទីតសរុបរបស់សែន ។ ចូររក ៖</p>
          <p>ក.ចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន ?</p>
          <p>ខ.ប្រវែងរបស់សែនគិតជាមីក្រុង ?</p>
          <p>គ.តើសែនខាងលើនេះដឹកនាំសំយោគប្រូតេអ៊ីនដែលមានអាស៊ីតអាមីនចំនួនប៉ុន្មាន ?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[13px]" key={"q1"}>
          <p className="font-bold">ក. គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់សែន</p>
          <p>បំរាប់ : <InlineMath math="A_{សែន} = 264" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="A_{សែន} = 22\% នៃ M_{សែន}" /></p>
          <p>យេីងបាន <InlineMath math="A_{សែន} = \frac{22}{100} \times M_{សែន}" /></p>
          <InlineMath math="M_{សែន} = \frac{A_{សែន} \times 100}{22}" />
          <p><InlineMath math="M_{សែន} = \frac{264 \times 100}{22} = 1200" /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <InlineMath math="\Rightarrow M_{សែន} = 2A_{សែន} + 2C_{សែន}" />
          <p><InlineMath math="\Rightarrow C_{សែន} = \frac{M_{សែន}}{2} - A_{សែន} = \frac{1200}{2} - 264 = 336" /> នុយក្លេអូទីត</p>
          <p>ដូចនេះ <InlineMath math="A_{សែន} = T_{សែន} = 264" /> នុយក្លេអូទីត</p>
          <p> <InlineMath math="C_{សែន} = G_{សែន} = 336" /> នុយក្លេអូទីត</p>
          <p className="font-bold">ខ. រកប្រវែងសែន</p>
          <p>ដោយពីនុយក្លេអូទីត1ទៅនុយក្លេអូទីត1ទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l_{សែន} = \frac{M_{សែន}}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l_{សែន} = \frac{1200}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l_{សែន} = 204 nm" />
          <p>ដោយ <InlineMath math="1nm = 10^{-3} um" /></p>
          <p>ដូចនេះ <InlineMath math=" l_{សែន} = 204 \times 10^{-3} um" /></p>
          <p className="font-bold">គ. រកចំនួនអាសុីតអាមីនេក្នុងម៉ូលេគុលប្រូតេអុីន</p>
          <p>ដោយនុយក្លេអូទីត3 ជាក្រមនៃអាស៊ីតអាមីនេមួយនៅលើច្រវាក់ម្ខាងរបស់សែន ហើយនៅលើច្រវាក់ម្ខាងរបស់សែនមានត្រីធាតុមួយត្រូវនឹងកូដុងផ្តេីមនិងមានត្រីធាតុមួយទៀតត្រូវនឹងកូដុងស្តុប</p>
          <p><InlineMath math="\Rightarrow " />ចំនួនអាសុីតអាមីនេ = <InlineMath math="\frac{M_{សែន}}{6} -2 = \frac{1200}{6} -2 = 198" /> អាសុីតអាមីនេ</p>
          <p>ដូចនេះ ចំនួនអាសុីតអាមីនេ= 198</p>


        </div>
      ]
    },
  ];
  return (
    <div>
      <>
        <TopicPracticeBox exercises={practiceExercises} />
      </>
    </div>
  )
}

export default GeneticPractice
