
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";

export default function AngiospermReproductiveOrgan() {
    return (
        <>
            <div className="space-y-6">
                {/* Reproductive Organs Section */}
                <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                    <h3 className="text-xl font-semibold text-pink-800 mb-4">១.២.សរីរាង្គបន្តពូជ (Reproductive Organs)</h3>

                    {/* Flower Section */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">ក. ផ្កា (Flower)</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <ThreeDExplanationBox
                                title="រចនាសម្ព័ន្ធនៃផ្ការុក្ខជាតិអង់ស្យូស្ពៃម"
                                scale={1.5}
                                target={[0, 0.5, 0]}
                                canvasBackground="white"
                                src="/docs/grade-12/biology/gymnosperms/anatomy_of_a_flower.glb"
                                explanation={
                                    <div className="">
                                        <p className="mb-3">ផ្កាគឺជាសរីរាង្គបន្តពូជរបស់រុក្ខជាតិអង់ស្យូស្ពៃម ដែលមានផ្នែកសំខាន់ៗដូចខាងក្រោម៖</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-green-500 rounded"></div>
                                                <span className="text-gray-700"><strong>ត្របកផ្កា</strong></span>
                                            </div>
                                            <p>• ស្ថិតនៅខាងក្រោមត្របកផ្កា និងលើទម្រផ្កា</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-pink-700 rounded"></div>
                                                <span className="text-gray-700"><strong>ស្រទាប់ផ្កា</strong></span>
                                            </div>
                                            <p>• ទាក់ទាញសត្វល្អិតមកជួយបង្កាត់ពូជ</p>
                                            <p>• មានពណ៌ស្រស់ស្អាត និងមានក្លិនក្រអូប</p>

                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-700"><strong>កញ្ចុំកេសរឈ្មោល</strong></span>
                                            </div>
                                            <p>• ស្ថិតនៅជុំវិញកញ្ចុំកេសរញី (តាមរូប)</p>
                                            <div className="flex - flex-row items-center gap-3">
                                                <p>•  បង្គុំឡើងពី</p>
                                                <div className="w-4 h-4 bg-[rgb(227,141,28)]  rounded"></div>
                                                <span className="text-gray-700">គឺ ប្លោកលំអង និង</span>
                                                <div className="w-4 h-4 bg-green-600 rounded"></div>
                                                <span className="text-gray-700">គឺ ទងកេសរឈ្មោល</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <span className="text-gray-700"><strong>កញ្ចុំកេសរញី</strong></span>
                                            </div>
                                            <p>• មានទង 1 ខ្ពស់ជាងគេ (តាមរូប)</p>
                                            <div className="flex - flex-row items-center gap-3">
                                                <p>•  បង្គុំឡើងពី</p>
                                                <div className="w-4 h-4 bg-[rgb(144,144,35)]  rounded"></div>
                                                <span className="text-gray-700">គឺ ស្ទិចម៉ាត</span>
                                                <div className="w-4 h-4 bg-green-800 rounded"></div>
                                                <span className="text-gray-700">គឺ កកេសរញី និង</span>
                                                <div className="w-4 h-4 bg-green-800 rounded"></div>
                                                <span className="text-gray-700">អូវែដែលមានរាងស្ទើមូលនៅខាងក្រោម(ផ្ទុកអូវែ)</span>
                                            </div>


                                        </div>

                                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                            <p className="text-sm text-blue-800">
                                                <strong>ចំណាំ៖</strong> អូវុលមិនមែនជាកាម៉ែតញីទេ។វាជាទម្រង់ពហហុកោសិការដែលផ្ទុកកោសិការមេមួយ ហើយកោសិការមេនេះធ្វើមេយ៉ូស និងមីតូសបង្កើតបានជាថង់កំណរ ដែលមានកោសិការ 7ក្នុងនោះមានអូអូស្វ៊ែ 1។
                                                អូអូស្វ៊ែនេះហើយទើបជាកាម៉ែតញី។
                                            </p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}