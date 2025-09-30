import { TopicContent } from "@/types/docs/topic";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import { InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import HintBox from "@/components/pages/docs/boxes/HintBox"


const FirstTopicContent: TopicContent = {
    definition: {
        title: "៣. បុិបទីត",
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
                <ul className="list-disc ml-4 flex flex-col gap-3">
                    <li>សមីការគីមីនៃអាសុីតអាមីនេពីរ </li>
                    <img src="/docs/grade-12/biology/mixs/pic45.png" alt="" />
                </ul>
            </>
        ),
    },
    example: {
        question: [
            <div className="flex flex-col items-start gap-3" key={"q1"}>
                <div className="flex items-start gap-3 flex-wrap">
                    <p>រូបមន្តគីមីនៃឌីបុិបទីត </p>
                    <div className="flex items-start gap-1 text-[12px]">
                        <InlineMath math="H_{2}N-" />
                        <div className="flex flex-col gap-0">
                            <InlineMath math="CH-CO-NH-" />
                            <InlineMath math="|" />
                            <InlineMath math="R_{1}" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <InlineMath math="CH-COOH" />
                            <InlineMath math="|" />
                            <InlineMath math="R_{2}" />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-3 flex-wrap">
                    <p>រូបមន្តគីមីនៃទ្រីបុិបទីត </p>
                    <div className="flex items-start gap-1 text-[12px]">
                        <InlineMath math="H_{2}N-" />
                        <div className="flex flex-col gap-0">
                            <InlineMath math="CH-CO-NH-" />
                            <InlineMath math="|" />
                            <InlineMath math="R_{1}" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <InlineMath math="CH-CO-NH-" />
                            <InlineMath math="|" />
                            <InlineMath math="R_{2}" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <InlineMath math="CH-COOH" />
                            <InlineMath math="|" />
                            <InlineMath math="R_{3}" />
                        </div>
                    </div>
                </div>
            </div>
        ],
    },
    hint: {
        content:
            <>
                <ul className="list-disc flex flex-col gap-3 ml-4">
                    <li>ប៉ិបទីត ជាបណ្តុំរវាងការភ្ជាប់អាស៊ីតអាមីនេពីរ ឬច្រើន តែមិនលើសពី១០។</li>
                    <li>ចំណងប៉ិបទីត ជាសម្ព័ន្ធកូវ៉ាឡង់ដែលភ្ជាប់រវាងបណ្តុំកាបុកស៊ីល (-COOH) របស់អាស៊ីតអាមីនេមួយ ទៅនឹងអាមីន <span className="text-[13px]"><InlineMath math="NH_{2}" /></span> របស់អាស៊ីតអាមីនេមួយទៀត ដោយបាត់បង់មួយម៉ូលេគុលទឹក។</li>
                    <li>តេត្រាបុិបទីត ប៉ង់តាបុិបទីត... ។ លេីសពី១០អាសុីតអាមីនេ ហៅថាប៉ូលីបុិបទីត ។</li>
                </ul>
            </>
    },
}


const Peptide = () => {
    return (
        <div>
            <div>
                {FirstTopicContent.definition && (
                    <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
                )}
                {FirstTopicContent.tip && (
                    <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
                )}

                {FirstTopicContent.hint && (
                    <HintBox content={FirstTopicContent.hint.content} />
                )}
                {FirstTopicContent.example && (
                    <ExampleBox question={FirstTopicContent.example.question} />
                )}
            </div>
        </div>
    )
}

export default Peptide
