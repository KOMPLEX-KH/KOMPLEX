import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { InlineMath } from "react-katex";

import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { BookAIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";


const EquilibriumPractice = () => {


    const summary: SummarySection[] = [
        {
            key: "formulas",
            title: "កន្សោមថេរលំនឹង",
            icon: BookAIcon,
            content: (
                <div className="text-[13px]" key={"f1"}>
                    <div className='flex items-center gap-2'>
                        <InlineMath math="K = " />
                        <div className='text-[17px]'>
                            <InlineMath math="\frac{[C]^{c} \cdot [D]^{d}}{[A]^{a} \cdot [B]^{b}} " />
                        </div>
                    </div>
                </div>
            )
        },
        {
            key: "formulas",
            title: "សូលុយស្យុងតំប៉ុង",
            icon: BookAIcon,
            content: (
                <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
                    <p>សូលុយស្យុងតំប៉ុង ជាសូលុយស្យុងដែលផ្សំឡេីងដោយអាសុីតខ្សោយ និងបាសឆ្លាស់របស់វា ឬសូលុយស្យុងបាសខ្សោយ និងអាសុីតឆ្លាស់របស់វា ហេីយមានកំហាប់ស្មេីរគ្នា។</p>
                </div>
            )
        },
    ];



    const practiceExercises: PracticeExercise[] = [
        {
            id: "ex1",
            title: "លំហាត់ទី ១",
            description: "លំហាត់ទី ១",
            problemType: "First Exercise",
            problems: [
                <div key="q1" className="text-[13px]">
                    <p>គេមានប្រតិកម្ម <InlineMath math="N_{2} (g) + 3H_{2} (g) \rightleftharpoons 2NH_{3} (g)" /> ដែលមានលំនឹងនៅសីតុ, 773 K និងមានតម្លៃថេរលំនឹង k=0.286 ។
                        សរសេរកន្សោមថេរលំនឹង K និងគណនាកំហាប់របស់ឌីអាសូត នៅពេលមានលំនឹង ដោយដឹងថានៅពេលមានលំនឹងនេះ
                        <InlineMath math="[H_{2}] = 0.42\ \text{mol/L}" /> និង <InlineMath math="[NH_{3}] = 0.113\ \text{mol/L}" />។</p>
                </div>
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p>កន្សោមថេរលំនឹង (K): <InlineMath math="K = \dfrac{[NH_{3}]^{2}}{[N_{2}]\,[H_{2}]^{3}}" /></p>


                    <p>ដើម្បីរក <InlineMath math="[N_{2}]" /> គេបាន <InlineMath math="[N_{2}] = \dfrac{[NH_{3}]^{2}}{K\,[H_{2}]^{3}}" /></p>

                    <p>ដោយ </p>
                    <InlineMath math="[NH_{3}]^{2} = (0.113)^{2} = 0.012769" />
                    <InlineMath math="[H_{2}]^{3} = (0.42)^{3} = 0.074088" />
                    <InlineMath math="K\,[H_{2}]^{3} = 0.286 \times 0.074088 = 0.021189168" />

                    <p>ដូច្នេះ:</p>
                    <InlineMath math="[N_{2}] = \dfrac{0.012769}{0.021189168} = 0.603\ \text{mol/L}" />
                </div>
            ]
        },

        {
            id: "ex2",
            title: "លំហាត់ទី ២",
            description: "លំហាត់ទី ២",
            problemType: "Second Exercise",
            problems: [
                <div key="q1" className="text-[13px]">
                    <p>គេមានប្រតិកម្ម : <InlineMath math="H_{2} (g) + Cl_{2} (g) \rightleftharpoons 2HCl (g)" /> ដែលមានលំនឹងនៅសីតុណ្ហភាព 1227°C ។ កំហាប់អង្គធាតុនៅពេលមានលំនឹងគីមី <InlineMath math="[H_{2}] = [Cl_{2}] = 4.5 \cdot 10^{-3} M" /> និង <InlineMath math="[HCl] = 62.5 \cdot 10^{-3} M" />។ ចូរគណនាតម្លៃថេរលំនឹង K ។</p>
                </div>
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">

                    <p>កន្សោមថេរលំនឹង (K) : <InlineMath math="K = \dfrac{[HCl]^{2}}{[H_{2}]\,[Cl_{2}]}" /></p>

                    <p>ដោយ</p>
                    <InlineMath math="[HCl] = 62.5\times10^{-3}\;M = 0.0625\;M" />
                    <InlineMath math="[H_{2}] = [Cl_{2}] = 4.5\times10^{-3}\;M = 0.0045\;M" />

                    <p>នាំឲ:</p>
                    <InlineMath math="[HCl]^{2} = (0.0625)^{2} = 0.00390625" />
                    <InlineMath math="[H_{2}][Cl_{2}] = (0.0045)(0.0045) = 2.025\times10^{-5}" />

                    <p>គេបាន:</p>
                    <InlineMath math="K = \dfrac{0.00390625}{2.025\times10^{-5}} = 192.90 = 1.93\times10^{2}" />

                </div>
            ]
        },
        {
            id: "ex6",
            title: "លំហាត់ទី ៦",
            description: "តេីលំនឹងប្រែប្រួលដូចម្តេចបេីគេឲប្រព័ន្ធលំនឹងនីមួយៗរងនូវបុព្វហេតុដូចខាងក្រោម ?",
            problemType: "Sixth Exercise",
            problems: [
                <div key="q1" className="text-[13px] flex flex-col items-start gap-3">
                    <p>ក. បង្កេីនកម្តៅប្រព័ន្ធ</p>
                    <span className='text-[12px]'><InlineMath math="CO (g) + H_{2}O (g) \rightleftharpoons CO (g) + H_{2} (g) + កម្តៅ" /></span>
                </div>,
                <div key="q2" className="text-[13px] flex flex-col items-start gap-3">
                    <p>ខ. បន្ថែមកាតាលីករឲប្រព័ន្ធ</p>
                    <span className='text-[12px]'><InlineMath math="CH_{4} (g) + H_{2}O (g) \rightleftharpoons CO (g) + 3H_{2} (g)" /></span>
                </div>,
                <div key="q3" className="text-[13px] flex flex-col items-start gap-3">
                    <p>គ. បេីគេបន្ថែមឧស្ម័ន <InlineMath math="CO_{2}" /> ឲទៅប្រព័ន្ធ</p>
                    <span className='text-[12px]'><InlineMath math="CaCO_{3} (s) + H_{2}O (l) + CO_{2} (g) \rightleftharpoons Ca(HCO_{3})_{2} (aq)" /></span>
                </div>,
                <div key="q4" className="text-[13px] flex flex-col items-start gap-3">
                    <p>ឃ. បញ្ចុះសីតុណ្ហភាពប្រព័ន្ធ</p>
                    <span className='text-[12px]'><InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g) + កម្តៅ" /></span>
                </div>,

            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p>លំនឹងរំកិលទៅខាងស្តាំ ដើម្បីស្រូបកម្តៅចេញ។ </p>
                </div>,
                <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
                    <p>មិនប៉ះពាល់លំនឹង</p>
                </div>,
                <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
                    <p>លំនឹងរំកិលទៅខាងស្តាំ</p>
                </div>,
                <div key="a4" className="flex flex-col items-start text-[13px] gap-3">
                    <p>លំនឹងរំកិលទៅខាងស្តាំ</p>
                </div>,
            ]
        },
        {
            id: "ex9",
            title: "លំហាត់ទី ៩",
            description: "តើសូលុយស្យុងខាងក្រោមនេះជាសូលុយស្យុងតំប៉ុងឬទេ? បើគេលាយ :",
            problemType: "Fourth Exercise",
            problems: [
                <span key="q1" className='text-[13px]'>20mL នៃសូលុយស្យុងអាសុីតខ្សោយ <InlineMath math="HCOOH" /> ដែលមានកំហាប់ 1 M និង 20mL នៃសូលុយស្យុង <InlineMath math="HCOONa" /> ដែលមានកំហាប់ 1 M ។</span>,
                <span key="q2" className='text-[13px]'>20mL នៃសូលុយស្យុង <InlineMath math="HNO_{2}" />  ដែលមានកំហាប់ 0.5 M និង 20mL នៃសូលុយស្យុង <InlineMath math="KCl" />  ដែលមានកំហាប់ 0.5 M ។</span>,
            ],
            answers: [
                <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
                    <p>ដោយ <InlineMath math="HCOOH" /> ជាអាសុីតខ្សោយ​ ហេីយ <InlineMath math="HCOO^{-}" /> ជាបានឆ្លាស់របស់វា ដោយមានកំហាប់ស្មើគ្នា។</p>
                    <p>ដូច្នេះ <InlineMath math="HCOOH" /> ជាសូលុយស្យុងតំប៉ុង</p>
                </div>,
                <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
                    <p>ដោយ <InlineMath math="HNO_{2}" /> ជាអាសុីតខ្សោយ ប៉ុន្តែ <InlineMath math="KCl" /> មិនផ្តល់បាសឆ្លាស់ (NO₂⁻) ទេ។</p>
                    <p>ដូច្នេះ មិនមែនជាសូលុយស្យុងតំប៉ុង</p>
                </div>,
            ]
        },
        {
            id: "ex5",
            title: "លំហាត់ទី ៥",
            description: "លំហាត់ទី ៥",
            problemType: "Fifth Exercise",
            problems: [
                <div key="q1" className="text-[13px]">
                    <p>សូលុយស្យុងអាសុីតខ្សោយ <InlineMath math="HA" /> នៅកំហាប់ 0.4 M មាន pH = 2.93 ។​ គណនាតម្លៃ <InlineMath math="K_{a}" /> នៃអាសុីត <InlineMath math="HA" /> ។</p>
                </div>,
                <div key="q2" className="flex flex-col gap-3 text-[13px] items-start">
                    <p>គេមានប្រតិកម្ម <InlineMath math="N_{2} (g) + 3H_{2} (g) \rightleftharpoons 2NH_{3} (g)" /> ដែលមានលំនឹងនៅសីតុណ្ហភាព 773 K និងមានតម្លៃថេរលំនឹង <InlineMath math="K = 0.286" /> ។ សរសេរកន្សោមថេរលំនឹង K និងគណនាកំហាប់របស់ឌីអាសូត នៅពេលមានលំនឹង ដោយដឹងថានៅពេលមានលំនឹងនេះ <InlineMath math="[H_{2}] = 0.42\;M" /> និង <InlineMath math="[NH_{3}] = 0.113\;M" />។</p>
                </div>
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p>គណនាកំហាប់អុីយ៉ុង <InlineMath math="[H^+]" /> ពី pH៖</p>
                    <InlineMath math="pH = 2.93 \implies [H^+] = 10^{-2.93} = 1.17 \times 10^{-3}\;M" />

                    <p>សំរាប់អាសុីតខ្សោយ៖</p>
                    <InlineMath math="HA \rightleftharpoons H^+ + A^-" />
                    <InlineMath math="K_a = \dfrac{[H^+]^2}{[HA] - [H^+]} = \dfrac{(1.17\times10^{-3})^2}{0.4 - 1.17\times10^{-3}}" />
                    <InlineMath math="K_a = \dfrac{1.37\times10^{-6}}{0.39883} = 3.44 \times 10^{-6}" />
                </div>,
                <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
                    <p>កន្សោមថេរលំនឹង (K) : <InlineMath math="K = \dfrac{[NH_{3}]^{2}}{[N_{2}]\,[H_{2}]^{3}}" /></p>


                    <p>ដើម្បីរក <InlineMath math="[N_{2}]" /> គេបាន : <InlineMath math="[N_{2}] = \dfrac{[NH_{3}]^{2}}{K\,[H_{2}]^{3}}" /></p>


                    <p>ដោយ</p>
                    <InlineMath math="[NH_{3}]^{2} = (0.113)^{2} = 0.012769" />
                    <InlineMath math="[H_{2}]^{3} = (0.42)^{3} = 0.074088" />
                    <InlineMath math="K\,[H_{2}]^{3} = 0.286 \times 0.074088 = 0.021189168" />

                    <p>គេបាន:</p>
                    <InlineMath math="[N_{2}] = \dfrac{0.012769}{0.021189168} = 0.6026\;M" />

                </div>
            ]
        },
        {
            id: "ex6",
            title: "លំហាត់ទី ៦",
            description: "លំហាត់ទី ៦",
            problemType: "Sixth Exercise",
            problems: [
                <div key="q1" className="flex flex-col gap-3 text-[13px] items-start">
                    <p>គេមានសូលុយស្យុង 500mL ដែលក្នុងនោះមានអាស៊ីតភ្លុយអរីឌ្រីច (HF) 0.06 mol និង សូដ្យូមភ្លុយអរូ (NaF) 0.06 mol រលាយ ។</p>
                    <p>ក. រកកំហាប់ដើមនៃ (HF) និង (NaF) ក្នុងល្បាយ ។</p>
                    <p>ខ. គណនាកំហាប់នៃអ៊ីយ៉ុងអ៊ីដ្រូញ៉ូម <InlineMath math="[H_{3}O^{+}]" /> និងគណនា pH នៃល្បាយសូលុយស្យុង ។</p>
                    <p>គ. តើល្បាយសូលុយស្យុងខាងលើ ជាសូលុយស្យុងតំប៉ុងដែរ ឬ ទេ ? ព្រោះអ្វី ?</p>
                    <p>គេឲ្យ <InlineMath math="log 6.7 = 0.8 , K_{a}(HF) = 6.7 \cdot 10^{-4}" /> </p>
                </div>
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">

                    <p>ក. គណនាកំហាប់ដើមនៃ HF និង NaF:</p>
                    <InlineMath math="[HF]_0 = \dfrac{0.06\;mol}{0.5\;L} = 0.12\;M" />
                    <InlineMath math="[NaF]_0 = \dfrac{0.06\;mol}{0.5\;L} = 0.12\;M" />

                    <p>ខ. គណនាកំហាប់អ៊ីយ៉ុងអ៊ីដ្រូញ៉ូម និង pH ប្រើសមីការតំប៉ុង (Henderson-Hasselbalch):</p>
                    <InlineMath math="pH = pK_a + \log\dfrac{[A^-]}{[HA]}" />
                    <InlineMath math="pK_a = -\log(6.7\times10^{-4}) = 3 - \log 6.7 = 3 - 0.8 = 2.2" />
                    <InlineMath math="[A^-] = [F^-] = 0.12\;M, \; [HA] = [HF] = 0.12\;M" />
                    <InlineMath math="pH = 2.2 + \log\dfrac{0.12}{0.12} = 2.2 + 0 = 2.2" />

                    <p>ដូចនេះ,</p>
                    <InlineMath math="[H_3O^+] = 10^{-pH} = 10^{-2.2} = 6.31\times10^{-3}\;M" />

                    <p>គ. ព្រោះល្បាយនេះមានអាសុីតខ្សោយ (HF) និងអំបិលរបស់វា (NaF) ក្នុងកំហាប់ស្មើគ្នា, ដូច្នេះនេះជាសូលុយស្យុងតំប៉ុង។</p>
                </div>
            ]
        },
        {
            id: "ex7",
            title: "លំហាត់ទី ៧",
            description: "លំហាត់ទី ៧",
            problemType: "Seventh Exercise",
            problems: [
                <div key="q1" className="flex flex-col gap-3 text-[13px] items-start">
                    <p>ហេតុអ្វីបានជាគេនិយាយថា កាលណាទំហំភាគល្អិត កាន់តែតូច ល្បឿនប្រតិកម្មកាន់តែលឿន? ចូរពន្យល់ ។</p>
                </div>,
                <div key="q2" className="flex flex-col gap-3 text-[13px] items-start">
                    <p>គេឲប្រព័ន្ធមមួយដែលមានសមីការតុល្យការលំនឹង <InlineMath math="2CO_{2} (g) + កម្តៅ \rightleftharpoons 2CO (g) + O_{2} (g)" /> គេឲប្រព័ន្ធរងនូវឥទ្ធិពលដូចខាងក្រោម តេីប្រព័ន្ធលំនឹងរំកិលដូចម្តេច ?</p>
                    <p>ក. រំដោះ <InlineMath math="CO" /></p>
                    <p>ខ. បន្ថែម <InlineMath math="O_{2}" /></p>
                    <p>គ. បង្កេីនសីតុណ្ហភាព</p>
                    <p>ឃ. បន្ថែម <InlineMath math="CO_{2}" /></p>
                    <p>ង. បង្កេីនមាឌប្រព័ន្ធ </p>
                    <p>ច. ផ្តល់កាតាលីករ </p>
                </div>
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p>កាលណាទំហំភាគល្អិតកាន់តែតូច នាំឲ្យមានការទង្គិចប្រសិទ្ធ រវាងអង្គធាតុប្រតិករ កាន់តែច្រើន ជាហេតុធ្វើឲ្យល្បឿនប្រតិកម្មកាន់តែលឿន ។</p>
                </div>,
                <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
                    <p>ក. រំដោះ <InlineMath math="CO" /> នាំឲលំនឹងរំកិលទៅខាងស្តាំ </p>
                    <p>ខ. បន្ថែម <InlineMath math="O_{2}" /> នាំឲលំនឹងរំកិលទៅខាងឆ្វេង</p>
                    <p>គ. បង្កេីនសីតុណ្ហភាព នាំឲលំនឹងរំកិលទៅខាងស្តាំ</p>
                    <p>ឃ. បន្ថែម <InlineMath math="CO_{2}" />នាំឲលំនឹងរំកិលទៅខាងស្តាំ</p>
                    <p>ង. បង្កេីនមាឌប្រព័ន្ធ នាំឲលំនឹងរំកិលទៅខាងស្តាំ</p>
                    <p>ច. ផ្តល់កាតាលីករ​ មិនប៉ះពាល់លើទីតាំងលំនឹង</p>
                </div>,
            ]
        },
        {
            id: "ex8",
            title: "លំហាត់ទី ៨",
            description: "បាក់ឌុប ២០២៣",
            problemType: "Eighth Exercise",
            problems: [
                <div key="q1" className="flex flex-col gap-3 text-[13px] items-start">
                    <p>សូលុយស្យុងអាស៊ីតអាសេទិច (CH₃ – COOH) មួយមានកំហាប់ 0.05 M នៅ 25°C។</p>
                    <p>ក.ចូរសរសេរសមីការអ៊ុយ៉ុងកម្មអាស៊ីតអាសេទិចក្នងទឹក។</p>
                    <p>ខ.ចូរគណនាកំហាប់អីយ៉ុងអីដ្រូញ៉ូម និង pH នៃសូលុយស្យុងនេះ។</p>
                    <p>គ.ចូរគណនាមេគុណអីយ៉ុងកម្មអាស៊ីត</p>
                    <p>គេឲថេរអុីយ៉ុងកម្មអាសុីត</p>
                    <div className="flex items-center gap-4 flex-wrap">
                        <InlineMath math="K_a = 1.8 \cdot 10^{-5}" />
                        <InlineMath math="\sqrt{9 \cdot 10^{-7}} = 9.5 \cdot 10^{-4}" />
                        <InlineMath math="log9.5= 0.98" />
                    </div>

                </div>,
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p>ក. សមីការអ៊ុយ៉ុងកម្មអាស៊ីតអាសេទិចក្នងទឹក</p>
                    <InlineMath math="CH_3COOH + H_2O \rightleftharpoons CH_3COO^- + H_3O^+" />
                    <p>ខ.គណនាកំហាប់អីយ៉ុងអីដ្រូញ៉ូម និង pH នៃសូលុយស្យុងនេះ</p>
                    <p>បម្រាប់ <InlineMath math="[CH_{3}COOH] = 0.05 M" /></p>
                    <div className="flex items-start gap-3 text-[12px] flex-wrap">
                        <div className="flex flex-col ">
                            <InlineMath math="CH_{3}-COOH" />
                            <InlineMath math="0.05M" />
                            <InlineMath math="-xM" />
                            <InlineMath math="(0.05-x)M" />
                        </div>
                        <InlineMath math="+ H_{2}O \rightleftharpoons" />
                        <div className="flex flex-col ">
                            <InlineMath math="CH_{3}COO^{-}" />
                            <InlineMath math="0M" />
                            <InlineMath math="+xM" />
                            <InlineMath math="+xM" />
                        </div>
                        <InlineMath math="+ H_{3}O^{+}" />
                    </div>
                    <p>តាមរូបមន្ត <InlineMath math="K_a = \frac{[CH_{3}COO^{-}][H_{3}O^{+}]}{[CH_{3}COOH]}" /></p>
                    <InlineMath math="= \frac{x^{2}}{0.05-x}" />
                    <p>ដោយ x តូចពេក x អាចចោលបាន 0.05 -x = 0.05M</p>
                    <InlineMath math="1.8 \cdot 10^{-5} = \frac{x^2}{0.05}" />
                    <InlineMath math="\Rightarrow x^2 = 1.8 \cdot 10^{-5} \cdot 5 \cdot 10^{-2}" />
                    <InlineMath math="\Rightarrow x = \sqrt{9 \cdot 10^{-7}} = 9.5 \cdot 10^{-4}" />
                    <p>តាមរូបមន្ត <InlineMath math="pH = -\log[H_{3}O^{+}]" /></p>
                    <InlineMath math="= -\log(9.5 \cdot 10^{-4})" />
                    <InlineMath math="= -(log9.5 + log(10^{-4}))" />
                    <InlineMath math="= -(0.98 - 4)" />
                    <InlineMath math="pH = 3.02" />
                    <p className="font-bold">គ. គណនាមេគុណអីយ៉ុងកម្មអាស៊ីត</p>
                    <p>តាមរូបមន្ត <InlineMath math="\alpha = \frac{[H_{3}O^{+}] \cdot 100}{[CH_{3}-COOH]}" /></p>
                    <p>ដោយ <InlineMath math="[H_{3}O^{+}] = 9.5 \cdot 10^{-4} M" /></p>
                    <InlineMath math="[CH_{3}-COOH] = 0.05M" />
                    <p>គេបាន <InlineMath math="\alpha = \frac{9.5 \cdot 10^{-4} \cdot 100}{0.05}" /></p>
                    <InlineMath math="\alpha = 1.9\%" />

                </div>,
            ]
        },
        {
            id: "ex9",
            title: "លំហាត់ទី ៩",
            description: "បាក់ឌុប ២០១៨",
            problemType: "Ninth Exercise",
            problems: [
                <div key={"q1"} className="flex flex-col gap-3 text-[13px] items-start">
                    <p>គេយក 0.15 mol នៃ <InlineMath math="Cl_{2}" /> និង <InlineMath math="NO_{2}" /> ដាក់ក្នុងប្រអប់បិទជិតដែលមានចំណុះ 1.5L ។ គេទុកឲប្រព័ន្ធមានលំនឹងនៅសីតុណ្ហភាពកំណត់មួយ ។ កំហាប់ <InlineMath math="NO_{2}Cl" /> ពេលមានលំនឹងគឺ 0.054 M ។ ចូរគណនាតម្លៃ K នៅសីតុណ្ហភាពនោះ ។</p>
                    <p>គេឲសមីការលំនឹង </p>
                    <InlineMath math="2NO_{2} + Cl_{2} \rightleftharpoons 2NO_{2}Cl" />

                </div>,
            ],
            answers: [
                <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
                    <p className="font-bold">គណនាតម្លៃ K</p>
                    <p>រក <InlineMath math="[NO_{2}], [Cl_{2}]" /></p>
                    <p>តាមរូបមន្ត <InlineMath math="C = \frac{n}{V}" /></p>
                    <InlineMath math="[NO_{2}]= \frac{n_{NO_{2}}}{V} = \frac{0.3}{1.5} = 0.2 M" />
                    <InlineMath math="[Cl_{2}]= \frac{n_{Cl_{2}}}{V} = \frac{0.15}{1.5} = 0.1 M" />
                    <div className="flex items-start gap-3 text-[11px]">
                        <div className="flex flex-col gap-1">
                            <InlineMath math="2NO_{2} " />
                            <InlineMath math="0.2 M" />
                            <InlineMath math="0.054 M" />
                            <InlineMath math="0.146 M" />
                        </div>
                        <span>+</span>
                        <div className="flex flex-col gap-1">
                            <InlineMath math="Cl_{2}" />
                            <InlineMath math="0.1 M" />
                            <InlineMath math="0.027 M" />
                            <InlineMath math="0.073 M" />
                        </div>
                        <InlineMath math="\rightleftharpoons" />
                        <div className="flex flex-col gap-1">
                            <InlineMath math="2NO_{2}Cl" />
                            <InlineMath math="0" />
                            <InlineMath math="0.054 M" />
                            <InlineMath math="0.054 M" />
                        </div>
                    </div>
                    <p>តាមកន្សោមថេរលំនឹង <InlineMath math="K = \frac{[NO_{2}Cl]^2}{[NO_{2}]^2[Cl_{2}]}" /></p>
                    <InlineMath math="= \frac{(0.054)^2}{(0.146)^2(0.073)}" />
                    <InlineMath math="K = 1.87" />
                </div>,
            ]
        },

    ];

    return (
        <>
            <SummaryBox
                title="រូបមន្តសំខាន់ៗ"
                sections={summary}
            />
            <TopicPracticeBox exercises={practiceExercises} />
        </>
    );
}

export default EquilibriumPractice