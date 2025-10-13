import { TopicContent } from "@/types/docs/topic";
import { ThreeDExplanationBox, ThreeDExplanationBoxProps } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";

const TOPIC_CONTENT: TopicContent = {

    threeDExplanation: [
        {
            title: "រូបភាពនៃកោន និង ប្រៀបធៀបកោនឈ្មោល និង កោនញី",
            src: "/docs/grade-12/biology/gymnosperms/pine_cone.glb",
            target: [0, 6, 0],
            scale: 7,
            canvasBackgroundColor: "white",
            explanation: <div>
                <div>
                    <div><strong>លក្ខណះដូចគ្នា</strong></div>
                    <ul>
                        <li>• កោនគ្របដណ្ដប់ដោយស្រកា និងជាសរីរាង្គបន្តពូជ</li>
                        <li>• មាននាទីផលិតកាម៉ែត</li>
                    </ul>
                </div>
                <div>
                    <div><strong>លក្ខណះខុសគ្នា</strong></div>
                    <div ><strong>+ កោនឈ្មោល</strong>
                        <ul className="ml-4">
                            <li>• មានទំហំតូច</li>
                            <li>• កោនផលិតបានគ្រាប់លំអងច្រើន</li>
                            <li>• កោនឈ្មោលជ្រុះក្រោយពេលជ្រុះគ្រាប់លំអង</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><strong>+ កោនញី</strong>
                        <ul className="ml-4">
                            <li>• មានទំហំធំ</li>
                            <li>• កោនផលិតបានអូវុលពីរ</li>
                            <li>• កោនញីនៅលើដើមរហូតគ្រាប់ជ្រុះ</li>
                        </ul>
                    </div>
                </div>
            </div>
        },
    ]

}


export default function GymnospermReproductiveOrgans() {
    return (
        <>
            <div className="space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">២.២.សរីរាង្គបន្តពូជ</h2>

                {/* Content */}
                <div className="space-y-4">
                    {/* Male Reproductive Organs */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">សរីរាង្គបន្តពូជឈ្មោល (Male Reproductive Organs)</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold mr-2">+</span>
                                <span><strong>សរីរាង្គបន្តពូជឈ្មោល ឬកេសរឈ្មោលគឺ ស្រកាមួយដែលផ្ទុកមីក្រូស្ប៉ូរ៉ង់។</strong></span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>មីក្រូស្ស៊ីរ៉ង់ផលិតគ្រាប់លំអង ឬមីក្រូស្ស៊ី។</span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>គ្រាប់លំអងមានណ្វៃយ៉ូពីរគឺ ណ្វៃបន្តពូជ និងណ្វៃលូតលាស់។</span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>កោសិកាបន្តពូជ ឲ្យកំណើតជាកាម៉ែតឈ្មោលពីរ (ស្ពែម៉ាតូសូអ៊ីត ឬអង់តេរ៉ូសួអ៊ីត)។</span>
                            </li>
                        </ul>
                    </div>

                    {/* Female Reproductive Organs */}
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-pink-800 mb-3">សរីរាង្គបន្តពូជញី (Female Reproductive Organs)</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-600 font-bold mr-2">+</span>
                                <span><strong>សរីរាង្គបន្តពូជញីគឺ ស្រកាកេសរញី។</strong></span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>មានរូបផ្តុំប្រែប្រួល ជួនកាលវាបង្កជាស្រកាដែល មានផ្ទុកអូវុល ជួនកាលវារួញក្លាយជាអូវុលននល។</span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>ស្រកាកេសរញីបើកចំហជានិច្ច គ្មានអ្វីសម្រាប់បិទបាំងការពារអូវុលទេ។</span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>អូវុលមានសភាពត្រង់ ហើយមានស្រោមតែមួយ។</span>
                            </li>
                            <li className="flex items-start ml-4">
                                <span className="text-red-600 font-bold mr-2">-</span>
                                <span>ប្រូតាល់ញីកើតមកពីការលូតលាស់របស់ម៉ាក្រូស៉្ប ដែលកើតនៅក្នុងនុយសែល។</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img
                    src="/docs/grade-12/biology/gymnosperms/life_cycle.png"
                    alt="Gymnosperm Reproductive Organs"
                    className="w-full max-w-[700px] h-auto mx-auto"
                />
                {TOPIC_CONTENT.threeDExplanation &&
                    Array.isArray(TOPIC_CONTENT.threeDExplanation) &&
                    TOPIC_CONTENT.threeDExplanation.map((threeD: ThreeDExplanationBoxProps, index: number) => (
                        <ThreeDExplanationBox key={index} title={threeD.title} src={threeD.src} explanation={threeD.explanation} />
                    ))}
                {/* Key Points Summary */}
                <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-2">ចំណុចសំខាន់ (Key Points)</h4>
                    <ul className="text-gray-700 space-y-1">
                        <li>• កោនជាសរីរាង្គបន្តពូជ វាមាននាទីផលិតកាម៉ែតញី និង កាម៉ែតឈ្មោល</li>
                        <li>• កោនញីជាកន្លែងបង្កកំណើតរវាងកាម៉ែតទាំងពីរហើយលូតលាស់ទៅជាអំប៊្រីយ់ុងដែលជាផ្នែកមួយនៃគ្រាប់</li>
                        <li>• កេសរឈ្មោលផលិតគ្រាប់លំអង(Male cones produce pollen)</li>
                        <li>• កេសរញីផលិតអូវុល (Female cones produce ovules)</li>
                        <li>• អូវុលគ្មានស្រោមការពារទេ (Ovules are not protected by ovary wall)</li>

                    </ul>
                </div>
            </div>
        </>
    )
}