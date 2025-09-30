import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import HintBox from "@/components/pages/docs/boxes/HintBox";
import SummaryBox from "@/components/pages/docs/boxes/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";
import { div } from "three/tsl";

const ProbabilityPractice = () => {

    const summary: SummarySection[] = [
        {
            key: "formulas",
            title: "គោលការណ៍របាប់",
            icon: BookAIcon,
            content: (
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>គោលការណ៍ផលបូក :</p>
                        <BlockMath math={"n(A) + n(B) = n(A \\cup B)"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>គោលការណ៍ផលគុណ</p>
                        <BlockMath math={"n(A) + n(B) = n(A \\cap B)"} />
                    </div>
                </div>
            )
        },
        {
            key: "methods",
            title: "បន្សំ និងចម្លាស់",
            icon: WrenchIcon,
            content: (
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>ចម្លាស់</p>
                        <BlockMath math={"P(n,r) = \\frac{n!}{(n-r)!}"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>បន្សំ</p>
                        <BlockMath math={"C(n,r) = \\frac{n!}{r!(n-r)!}"} />
                    </div>
                </div>
            )
        },
        {
            key: "characteristic",
            title: "ព្រឹត្តការណ៍សមាស",
            icon: ChartBarIcon,
            content: (
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>ស្វីតផលគុណ</p>
                        <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap w-full">
                        <p>ស្វីតផលបូក</p>
                        <BlockMath math={"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"} />
                    </div>
                </div>
            )
        },

    ];
    const practiceExercises: PracticeExercise[] = [
        {
            id: "ex1",
            title: "លំហាត់អនុវត្តទី ១",
            description: "លំហាត់អនុវត្តទី ១",
            problemType: "Probab Exercise1",
            problems: [
                <div key="p1">
                    <div className="flex flex-col items-start gap-3">
                        <p>គេហូតបៀរពីរសន្លឹកចេញបៀរ ៥២សន្លឹក។ គណនាប្រូបាបនៃព្រឹត្តការណ៍ដែលបៀរ ២ សន្លឹកមានអាត់មួយយ៉ាងតិច។</p>
                    </div>

                </div>,
                <div className="flex flex-col items-start gap-3" key="q2">
                    <p>គេបោះកាក់មួយដែលមានមុខ H និងខ្នង​ T ចំនួនពីរដង។</p>
                    <p>ក. គណនាប្រូបាបដែលយ៉ាងហោចណាស់ទទួលបានមុខមួយកេីតឡេីង</p>
                    <p>ខ. គណនាប្រូបាបដែលគេទទួលបានមុខកេីតឡេីងពេលបោះលេីកទីមួយ។</p>
                </div>,

            ],
            answers: [
                <div key="a1" className="flex flex-col items-start gap-2">
                    <div className="flex flex-col items-start gap-2">
                        <p>តាង</p>
                        <p>A ជាព្រឹត្តការណ៍ដែលហូតបានបានបៀរពីរសន្លឹកមានសន្លឹកអាត់មួយយ៉ាងតិច</p>
                        <div className="flex items-center flex-wrap gap-2">
                            <BlockMath math={"\\overline{A}"} />
                            <p>ជាព្រឹត្តការណ៍ដែលហូតបានបានបៀរពីរ</p>
                            <p>សន្លឹកគ្មានសន្លឹកអាត់មួយសោះ</p>
                        </div>
                        <div className="flex items-start gap-2 flex-col mt-2">
                            <p>ដោយបៀរមាន៥២ សន្លឹកគេហូតយក ២សន្លឹកនោះករណីអាចគឺ </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <BlockMath math={"n(s) = C(52,2)= \\frac{52!}{2!(52-2)!}"} />
                                <BlockMath math={"= 1326"} />
                                <p>ករណី</p>
                            </div>
                        </div>
                        <div>
                            <p>បៀរគ្មានសន្លឹកអាត់គឺ 52-4= 48 សន្លឹក</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(\\overline{A}) = C(48,2) = \\frac{48!}{2!(48-2)!}"} />
                            <BlockMath math={"= 1128"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"P(\\overline{A}) = \\frac{n(\\overline{A})}{n(s)}= \\frac{1128}{1326}"} />
                            <BlockMath math={"= 0.8506"} />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow P(A) = 1 - P(\\overline{A}) = 1 - 0.8506"} />
                            <BlockMath math={"= 0.1494"} />
                        </div>
                    </div>

                </div>,
                <div key="a2" className="flex flex-col items-start gap-2">
                    <p className="font-semibold">ក. គណនាប្រូបាបដែលយ៉ាងហោចណាស់ទទួលបានមុខ​ H មួយកេីតឡេីង</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <p>តាង A ជាព្រឹត្តការណ៍ដែលយ៉ាងហោចណាស់មានមុខ​ H មួយកេីតឡេីងគឺ </p>
                        <BlockMath math={"\\{HH, HT, TH, TT\\}"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <BlockMath math={"\\Rightarrow P(A) = \\frac{n(A)}{n(S)} = \\frac{3}{4} = 0.75"} />
                    </div>


                    <p className="font-semibold mb-3">ខ. គណនាប្រូបាបដែលគេទទួលបានមុខ H កេីតឡេីងពេលបោះលេីកទីមួយ</p>
                    <div className="flex items-center gap-2 flex-wrap ">
                        <p>តាង B ជាព្រឹត្តការណ៍ដែលដែលគេទទួលបានមុខ​ H មួយកេីតឡេីងគឺ </p>
                        <BlockMath math={"\\{HH, HT\\}"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <BlockMath math={"\\Rightarrow P(B) = \\frac{n(B)}{n(S)} = \\frac{2}{4} = 0.5"} />
                    </div>
                </div>,
            ]
        },
        {
            id: "ex2",
            title: "លំហាត់អនុវត្តទី ២",
            description: "លំហាត់អនុវត្តទី ២",
            problemType: "Probab Exercise1",
            problems: [
                <div className="flex flex-col items-start gap-3" key="q1">
                    <p>ក្នុងប្រអប់មួយមានបិចខៀវចំនួន៧ និងក្រហម៥ដេីម។ គេចាប់យក៤ដេីមដោយចៃដន្យ។ រកប្រូបាបដែលគេចាប់បាន :</p>
                    <p>ក. បិចខៀវទាំងអស់</p>
                    <p>ខ. បិចខៀវ២ដេីម</p>
                    <p>គ. បិចក្រហមមួយយ៉ាងតិច</p>
                </div>,
                <div className="flex flex-col items-start gap-3" key="q2">
                    <p>ឧបមាថាកំណេីតកំណេីតកូនប្រុសនិងកូនស្រីមានសំណាងដូចគ្នា។ រកប្រូបាបដែលគ្រួសារមួយមានកូន៥នាក់</p>
                    <p>ក. សុទ្ធតែកូនស្រី</p>
                    <p>ខ. យ៉ាងតិចកូនប្រុស១នាក់</p>
                    <p>គ. កូនច្បងជាស្រីបន្ទាប់មកកូនប្រុស២នាក់</p>
                </div>,
            ],
            answers: [
                <div key="a1" className="space-y-2">
                    <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">រកចំនួនករណីអាច</p>
                        <p>ក្នុងប្រអប់មួយមានបិច១២ដេីម ហេីយគេចាប់យក៤ដេីមដោយចៃដន្យ</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(s)=C(12,4) = \\frac{12!}{4!(12-4)!}"} />
                            <BlockMath math={" = 495"} />
                            <p>ករណី</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ក. រកប្រូបាបដែលចាប់បានប៊ិចខៀវទាំងអស់</p>
                        <p>តាង A ជាព្រឹត្តការណ៍ដែលចាប់បានប៊ិចខៀវទាំងអស់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(A)=C(7,4) = \\frac{7!}{4!(7-4)!}"} />
                            <BlockMath math={"= 35"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(A)= \\frac{n(A)}{n(S)} = \\frac{35}{495} = 0.0707"} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ. រកប្រូបាបដែលចាប់បានប៊ិចខៀវ២ដេីម</p>
                        <p>តាង B ជាព្រឹត្តការណ៍ដែលចាប់បានប៊ិចខៀវ២ដេីម</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(B)=C(7,2) \\cdot C(5,2) ="} />
                            <BlockMath math={"\\frac{7!}{2!(7-2)!} \\cdot \\frac{5!}{2!(5-2)!} = 210"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(B)= \\frac{n(B)}{n(S)} = \\frac{210}{495} = 0.4242"} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">គ. រកប្រូបាបដែលចាប់បានប៊ិចក្រហមមួយយ៉ាងតិច</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង</p>
                            <BlockMath math={"\\overline{A}"} />
                            <p>ជាព្រឹត្តការណ៍ដែលចាប់បានប៊ិច</p>
                            <p>ក្រហមមួយយ៉ាងតិច</p>

                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <p>ដោយព្រឹត្តការណ៍ A និងព្រឹត្តការណ៍</p>
                            <BlockMath math={"\\overline{A}"} />
                            <p>ជាព្រឹត្តការណ៍ផ្ទុយគ្នា</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <p>គេបាន</p>
                            <BlockMath math={"P(\\overline{A})=1-P(A)=1-0.0707"} />
                            <BlockMath math={"=0.9293"} />
                        </div>
                    </div>
                </div>,
                <div key="a2" className="space-y-2">
                    <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">រកចំនួនករណីអាច</p>
                        <p>ដោយគ្រួសារមួយមានកូនសរុប៥នាក់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(s)= 2^5 = 32"} />
                            <p>ករណី</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ក. រកប្រូបាបដែលសុទ្ធតែកូនស្រី</p>
                        <p>តាង G ជាព្រឹត្តការណ៍ដែលកូន៥នាក់សុទ្ធតែកូនស្រី</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(G)= 1"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(G)= \\frac{n(G)}{n(S)} = \\frac{1}{32} = 0.03125"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ. រកប្រូបាបដែលមានយ៉ាងតិចកូនប្រុសពីរនាក់</p>
                        <p>តាង B ជាព្រឹត្តការណ៍ដែលមានកូនប្រុសពីរនាក់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(B)= 4"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(B)= \\frac{n(B)}{n(S)} = \\frac{4}{32} = 0.125"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">គ. រកប្រូបាបដែលកូនច្បងជាស្រីបន្ទាប់មកកូនប្រុសពីរនាក់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង C ជាព្រឹត្តការណ៍ដែលដែលកូនច្បងជាស្រីបន្ទាប់មកកូនប្រុសពីរនាក់</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <p>ដែល (សបបសប) (សបបបស) </p>
                            <BlockMath math={"\\Rightarrow n(C)= 2"} />
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <p>គេបាន</p>
                            <BlockMath math={"P(C)= \\frac{n(C)}{n(S)} = \\frac{2}{32} = 0.0625"} />
                        </div>
                    </div>
                </div>,

            ]
        },
        {
            id: "ex3",
            title: "លំហាត់អនុវត្តទី ៣",
            description: "លំហាត់អនុវត្តទី ៣",
            problemType: "Probab Exercise1",
            problems: [
                <div key="p1">
                    <div className="flex flex-col items-start gap-3">
                        <p>ក្នុងកាបូបមានក្រដាសប្រាក់ ១០០០​រៀលចំនួន៥សន្លឹកនិងប្រាប់ ៥០០រៀលចំនួន៤សន្លឹក។ គេហូតយក៣សន្លឹកដោយចៃដន្យ។ រកប្រូបាបនៃព្រឹត្តការណ៍</p>
                        <p>ក. ហូតបានប្រាក់ ២៥០០ រៀល</p>
                        <p>ខ. ហូតបានប្រាក់ ១៥០០រៀល</p>
                    </div>

                </div>,
                <div key="p2" className="flex flex-col items-start gap-3">
                    <p>ក្នុងប្រអប់មួយមានថ្នាំគីណាល់ ៧គ្រាប់និងថ្នាំអាស្ទីរីន ៥គ្រាប់។ គេចាប់យកថ្នាំ ៤គ្រាប់ចេញពីប្រអប់ដោយចៃដន្យ។ រកប្រូបាបដែលគេចាប់បាន:</p>
                    <p>ក. ថ្នាំគីណាល់ទាំង ៤គ្រាប់</p>
                    <p>ខ. ថ្នាំអាស្ទីរីនមួយគ្រាប់យ៉ាងតិច។</p>
                </div>
            ],
            answers: [
                <div key="a1" className="space-y-2">
                    <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">រកចំនួនករណីអាច</p>
                        <p>ដោយក្នុងកាបូបមានក្រដាសប្រាក់៩សន្លឹកហេីយគេហូតយក៣សន្លឹកដោយចៃដន្យ</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(s)= C(9,3) =  \\frac{9!}{3!(9-3)!}"} />
                            <BlockMath math={"= 84"} />
                            <p>ករណី</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ក. រកប្រូបាបដែលហូតបានប្រាក់២៥០០ រៀល</p>
                        <p>តាង A ជាព្រឹត្តការណ៍ដែលហូតបានប្រាក់ ២៥០០ រៀល</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ដេីម្បីបានប្រាក់ ២៥០០ រៀល គេត្រូវហូតក្រដាសប្រាក់ ១០០០ រៀល ២សន្លឹក និងប្រាក់ ៥០០ រៀល ១សន្លឹក</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow n(A)= C(5,2) \\cdot C(4,1) = "} />
                            <BlockMath math={"10 \\cdot 4 = 40"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(A)= \\frac{n(A)}{n(S)} = \\frac{40}{84} = 0.4762"} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ. រកប្រូបាបដែលហូតបានប្រាក់១៥០០ រៀល</p>
                        <p>តាង B ជាព្រឹត្តការណ៍ដែលហូតបានប្រាក់ ១៥០០ រៀល</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ដេីម្បីបានប្រាក់ ១៥០០ រៀល គេត្រូវហូតក្រដាសប្រាក់ ៥០០ បីសន្លឹក</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow n(B)= C(4,3) = 4"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(B)= \\frac{n(B)}{n(S)} = \\frac{4}{84} = 0.0476"} />
                        </div>
                    </div>

                </div>,
                <div key="a2">

                    <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">រកចំនួនករណីអាច</p>
                        <p>ដោយក្នុងប្រអប់មានថ្នាំ១២ គ្រាប់ហេីយគេចាប់យកថ្នាំ ៤គ្រាប់ចេញពីប្រអប់ដោយចៃដន្យ</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(s)= \\frac{12!}{4!8!} = 495"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ក.​រកប្រូបាបដែលគេចាប់បានថ្នាំគីណាល់ទាំង ៤គ្រាប់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង A ជាព្រឹត្តការណ៍ដែលគេចាប់បានថ្នាំគីណាល់ទាំង ៤គ្រាប់</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ដោយថ្នាំគីណាល់ក្នុងថង់មាន៧គ្រាប់ ហេីយគេចាប់យក ៤គ្រាប់។</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(A)= \\frac{7!}{4!3!} = 35"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(A)= \\frac{n(A)}{n(S)} = \\frac{35}{495} = 0.0707"} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ.​រកប្រូបាបដែលគេចាប់បានថ្នាំអាស្ទីរីនមួយគ្រាប់យ៉ាងតិច</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង B ជាព្រឹត្តការណ៍ដែលគេចាប់បានថ្នាំអាស្ទីរីនមួយគ្រាប់យ៉ាងតិច</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>មានន័យថាចាប់បានថ្នាំអាស្ទីរីនម១គ្រាប់ ថ្នាំគីណាល់៣គ្រាប់​ ឬថ្នាំអាស្ទីរីន២គ្រាប់ និងថ្នាំគីណាល់២គ្រាប់​ ឬថ្នាំអាស្ទីរីន ៣គ្រាប់ និង ថ្នាំគីណាល១គ្រាប់ ឬថ្នាំអាស្ទីរីន៤គ្រាប់</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"n(B)= C(5,1) \\cdot C(7,3) + C(5,2)"} />
                            <BlockMath math={" \\cdot C(7,2) + C(5,3) \\cdot C(7,1) +"} />
                            <BlockMath math={"C(5,4) = 460"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(B)= \\frac{n(B)}{n(S)} = \\frac{460}{495} = 0.9293"} />
                        </div>
                    </div>
                </div>,
            ]
        },
        {
            id: "ex4",
            title: "លំហាត់អនុវត្តទី ៤",
            description: "លំហាត់អនុវត្តទី ៤",
            problemType: "Probab Exercise1",
            problems: [
                <div key="p1">
                    <div className="flex flex-col items-start gap-3">
                        <p>គេតម្រៀបក្មេងប្រុស៤នាក់ និងស្រី៣នាក់ឧ៌្យឈរជាជួរដេីម្បីទទួលអំណោយ។ </p>
                        <p>ក. តេីការឈរនេះមានប៉ុន្មានរបៀប</p>
                        <p>ខ. រកប្រូបាបដែលក្មេងប្រុសឈរនៅចុងសងខាង</p>
                        <p>គ. រកប្រូបាបដែលក្មេងប្រុសឈរនៅជិតគ្នា</p>
                    </div>

                </div>,
            ],
            answers: [
                <div key="a1" className="space-y-2">
                    <div className="flex flex-col items-start gap-2">
                        <p className="font-semibold">ក. តេីការឈរនេះមានប៉ុន្មានរបៀប</p>
                        <p>ដោយគេតម្រៀបក្មេងប្រុស៤នាក់ និងស្រី៣នាក់ សរុប៧នាក់</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(s)= 7! = 5040"} />
                            <p>ករណី</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ. រកប្រូបាបដែលក្មេងប្រុសឈរនៅចុងសងខាង</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង A ជាព្រឹត្តការណ៍ដែលក្មេងប្រុសឈរនៅចុងសងខាង</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(A)= C(4,2) \\cdot 5! = 1440"} />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(A)= \\frac{n(A)}{n(s)} = \\frac{1440}{5040} = 0.2857"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">គ. រកប្រូបាបដែលក្មេងប្រុសឈរនៅជិតគ្នា</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>តាង B ជាព្រឹត្តការណ៍ដែលក្មេងប្រុសឈរនៅជិតគ្នា</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <BlockMath math={"\\Rightarrow n(B)= 4! \\cdot 4! = 576"} />
                            <p>ករណី</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>គេបាន</p>
                            <BlockMath math={"P(B)= \\frac{n(B)}{n(S)} = \\frac{576}{5040} = 0.1143"} />
                        </div>
                    </div>


                </div>,
            ]
        },
        {
            id: "ex5",
            title: "លំហាត់អនុវត្តទី ៥",
            description: "លំហាត់អនុវត្តទី ៥",
            problemType: "Probab Exercise1",
            problems: [
                <div key="p1">
                    <div className="flex flex-col items-start gap-3">
                        <p>ឧបមាថាមានមនុស្សពីរនាក់ A និង B ហូតសន្លឹកឆ្នោតមួយសន្លឹកតាមវេន(A ទី១, B បន្ទាប់) ដោយមិនដាក់ទៅវិញពីសន្លឹក ១០សន្លឹក ដែលក្នុងនោះមានសន្លឹកឆ្នោត៣ ជាសន្លឹកឆ្នោតឈ្នះ។ រកប្រូបាបដែល B ហូតបានសន្លឹកឈ្នះឆ្នោត។</p>
                    </div>

                </div>,
                <div key="p2" className="flex flex-col items-start gap-3">
                    <p>ក្នុងកម្មវិធីប្រលងមួយ គ្រូឧ្យសំណួរត្រៀមទៅសិស្ស ១០០សំណួរ។ សិស្សម្នាក់ៗត្រូវចាប់យកសំណួរ៣ដោយចៃដន្យ។ សិស្ស A រៀបចំដោះស្រាយចម្លេីយបាន 1/4 នៃសំណួរទាំងអស់។ រកប្រូបាបដែលសិស្សA ចាប់បានសំណួរដែលបានត្រៀមចម្លេីយរួចស្រេច</p>
                    <p>ក. ៣សំណួរ</p>
                    <p>ខ. ២សំណួរ</p>
                    <p>គ. គ្មានសំណួរត្រៀម</p>
                </div>,
            ],
            answers: [
                <div key="a1" className="space-y-2">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">រកប្រូបាបដែល B ហូតបានសន្លឹកឈ្នះឆ្នោត</p>
                        <p>មានន័យថាលេីកទី១ Aហូតបានសន្លឹកឈ្នះ ហេីយBហូតបានសន្លឹកឈ្នះបន្ទាប់ឬ លេីកទី១ A ហូតបានសន្លឹកចាញ់ហេីយ Bហូតបានសន្លឹកឈ្នះបន្ទាប់ដដែល</p>
                    </div>
                    <div>
                        <p>តាង</p>
                        <p>C ជាព្រឹត្តការណ៍ដែល A ហូតបានសន្លឹកឈ្នះមួយ</p>
                        <p>D ជាព្រឹត្តការណ៍ដែល B ហូតបានសន្លឹកឈ្នះមួយ</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <p>គេបាន</p>
                        <BlockMath math={"P(D) = P(C \\cap D) + P(\\overline{C} \\cap D) "} />
                    </div>
                    <p>ដោយ</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <BlockMath math={"P(C \\cap D) = P(C) \\cdot P(D/C)"} />
                        <BlockMath math={"= \\frac{3}{10} \\cdot \\frac{2}{9}= \\frac{1}{15}"} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <BlockMath math={"P(\\overline{C} \\cap D) = P(\\overline{C}) \\cdot P(D/\\overline{C})"} />
                        <BlockMath math={" = \\frac{7}{10} \\cdot \\frac{3}{9} = \\frac{7}{30}"} />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <p>គេបាន</p>
                        <BlockMath math={"P(D) = \\frac{1}{15} + \\frac{7}{30} = \\frac{3}{10}= 0.3"} />
                    </div>

                </div>,
                <div key="a2" className="space-y-2">
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">រកប្រូបាបដែលសិស្ស A ចាប់បានសំណួរដែលបានត្រៀមចម្លេីយរួចស្រេច</p>
                        <p>ដោយគ្រូបានផ្តល់សំណួរទាំងអស់ ១០០សំណួរហេីយសិស្សម្នាក់ៗត្រូវចាប់យកសំណួរ ៣ ដោយចៃដន្យនោះ</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow n(s)= C(100,3) ="} />
                            <BlockMath math={"\\frac{100!}{3! \\cdot (100-3)!} = 161700"} />
                            <p>ករណី</p>
                        </div>
                        <p>ហេីយសិស្ស A រៀបចំដោះស្រាយចម្លេីយបាន 1/4 នៃសំណួរទាំងអស់គឺស្មេីនឹង២៥សំណួរ។</p>
                        <p>តាង x ជាចំនួនសំណួរដែលត្រៀម :</p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ក. រកប្រូបាបដែលសិស្ស A ចាប់បានសំណួរដែលបានត្រៀមចម្លេីយរួចស្រេច៣សំណួរ</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow P(x=3) = \\frac{C(25,3)}{C(100,3)} ="} />
                            <BlockMath math={"\\frac{2300}{161700} = 0.0142"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">ខ. រកប្រូបាបដែលសិស្ស A ចាប់បានសំណួរដែលបានត្រៀមចម្លេីយរួចស្រេច២សំណួរ</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow P(x=2) = \\frac{C(25,2) \\cdot C(75,1)}{C(100,3)}"} />
                            <BlockMath math={"= \\frac{22500}{161700} = 0.139"} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <p className="font-semibold">គ. រកប្រូបាបដែលសិស្ស A គ្មានត្រៀមសំណួរ</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <BlockMath math={"\\Rightarrow P(x=0) = \\frac{C(25,0) \\cdot C(75,3)}{C(100,3)}"} />
                            <BlockMath math={"= \\frac{67525}{161700} = 0.417"} />
                        </div>
                    </div>
                </div>,
            ]
        },
    ];

    return (
        <>
            <SummaryBox
                title="រូបមន្តគន្លឹះ សំខាន់នៃប្រូបាប"
                sections={summary}
            />
            <TopicPracticeBox exercises={practiceExercises} />
        </>
    )
}

export default ProbabilityPractice
