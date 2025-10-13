import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";




export default function AngiospermVegetativeOrgan() {
    return (
        <>
            <div className="space-y-6">
                {/* Title */}
                {/* Vegetative Organs Section */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">១.១.សរីរាង្គលូតលាស់ (Vegetative Organs)</h3>

                    {/* Root Section */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">ក. ឬស (Root)</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <ThreeDExplanationBox
                                title="នាទី​ និងរូបផ្គុំនៃឬសរុក្ខជាតិ"
                                scale={15}
                                target={[0, 0, 0]}
                                canvasBackground='white'
                                src="/docs/grade-12/biology/gymnosperms/root.glb"
                                explanation={
                                    <div className="">
                                        <ul>
                                            <li>• ភ្ជាប់រុក្ខជាតិទៅនឹងដី</li>
                                            <li>• ផ្ទុកអាហារ</li>
                                            <li>• ស្រូបទឹក និងអំបិលខនិជពីដីទៅឲ្យដើម និងស្លឹក</li>
                                        </ul>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-green-600 rounded"></div>
                                                <span className="text-gray-700">អេពីឌែម(epidemis)</span>
                                            </div>
                                            <p>• ជាស្រទាប់ក្រៅបង្អស់ មានរោមសម្រាប់ស្រូបទឹកនឹងអំបិកខនិជ</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-red-600 rounded"></div>
                                                <span className="text-gray-700">ស៊ីឡែម(xylem)</span>
                                            </div>
                                            <p>• ជាសរសៃនាំដែលស្រូបទឹកនឹងអំបិកខនិជ</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                                <span className="text-gray-700"> ផ្លូអែម(Phloem)</span>
                                            </div>
                                            <p>• ជាសរសៃនាំដែលដឹកអាហារទៅគ្រប់កោសិកាដែលមិនបានធ្វើរស្មីសំយោគ</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-gray-500 rounded"></div>
                                                <span className="text-gray-700">ស្រទាប់មេ (vascular Cambium)</span>
                                            </div>
                                            <p>• ស្ថិតនៅចន្លោះស៊ីឡែមនិងផ្លូអែម មាននាទិផលិតស៊ីឡែមនិងផ្លូអែមថ្មី</p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {/* trunk Section */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">ខ.​ ដើម (Trunk)</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <ImageExplanationBox
                                title="នាទី និង ពំនុះនៃដើមរុក្ខជាតិ"
                                imageAlt="ផ្នែកខាងក្នុងនៅដើម"
                                src="/docs/grade-12/biology/gymnosperms/trunk.png"
                                explanation={
                                    <div className="">
                                        <ul>
                                            <li>• ទ្រទ្រង់ផ្នែកដែលនៅលើដី</li>
                                            <li>• ដើមខ្លះ ផ្ទុកអាហារ (ដំឡូង,ខ្ទឹមបារាំង​ )</li>
                                            <li>• ដឹកនាំទឹក និងអំបិលខនិជពីឬសទៅកាន់ស្លឹក</li>
                                            <li>• ដើមរុក្ខជាតិក៍មានបាច់សរសៃនាំដែរ ពោលគឺ <strong>ស៊ីឡែម</strong> និង <strong>ផ្លូអែម</strong> តែតម្រៀបគ្នាខុសពីឬសបន្តិច</li>
                                        </ul>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                                                <span className="text-gray-700">គឺជាសាច់ឈើខាងក្នុង</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-orange-200 rounded"></div>
                                                <span className="text-gray-700">គឺជាស៊ីឡែម</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-amber-700 rounded"></div>
                                                <span className="text-gray-700">គឺជាស្រទាប់មេ</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-amber-800 rounded"></div>
                                                <span className="text-gray-700">គឺជាផ្លូអែម</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-amber-900 rounded"></div>
                                                <span className="text-gray-700">គឺជាសំបកឈើខាងក្រៅ</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                        </div>
                    </div>
                    {/* leaf Section */}
                    <div className="bg-white p-4 rounded-lg block mx-auto">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">គ. ស្លឹក (Leaf)</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <ThreeDExplanationBox
                                title="រូបផ្គុំនៃស្លឹករុក្ខជាតិ"
                                scale={4}
                                target={[0, 1, 0]}
                                canvasBackground='white'
                                src="/docs/grade-12/biology/gymnosperms/ANATOMY.glb"
                                explanation={
                                    <div className="">
                                        <p>ស្លឹករបស់រុក្ខជាតិអង់ស្យូស្ពៃមមាន 3​ស្រទាប់ គឺ អេពីឌែម ប៉ាលីសាត និងស្រទាប់ស្ពោត</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-green-800 rounded"></div>
                                                <span className="text-gray-700">គឺគុយទីគុល (cuticle)</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-[rgb(144,144,35)] rounded"></div>
                                                <span className="text-gray-700">អេពីឌែម(epidemis)</span>
                                            </div>
                                            <p>• មានលើ-ក្រោម : មាននាទីការពារស្លឹករុក្ខជាតិពីការប់ះទង្គិច និង មានស្តូម៉ាតសម្រាប់បណ្ដុរឧស្ម័ន</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                                                <span className="text-gray-700"> ប៉ាលីសាត (Palisade)</span>
                                            </div>
                                            <p>• ស្ថិតនៅខាងក្រោមស្រទាប់អេពីឌែម</p>
                                            <p>• ជាស្រទាប់ដែលទទួលបានពន្លឺព្រះអាទិត្យច្រើនជាងគេ</p>
                                            <p>​•​ មានក្លរ៉ូប្លាសដែលផ្ទុកក្លរ៉ូភីល</p>
                                            <p>​•​ <strong>ក្លរ៉ូភីល</strong> ជាជាតិពណ៌បៃតងនៅក្នុងក្លរ៉ូប្លាសមាននាទិសម្រាប់ស្រូបយកថាមបលពន្លឺព្រះអាទិត្យសម្រាប់ធ្វើរស្មីសំយោគដើម្បិផលិតអាហារ</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-[rgb(0,153,0)] rounded"></div>
                                                <span className="text-gray-700">ស្រទាប់ស្ពោត (spongy mesophyll)</span>
                                            </div>
                                            <p>• ស្ថិតនៅខាងក្រោមស្រទាប់ប៉ាលីសាត</p>
                                            <div className="flex - flex-row items-center gap-3">
                                                <p>•  មាន</p>
                                                <div className="w-4 h-4 bg-blue-700 rounded"></div>
                                                <span className="text-gray-700">គឺ ស៊ីឡែម និង</span>
                                                <div className="w-4 h-4 bg-[rgb(185,185,45)] rounded"></div>
                                                <span className="text-gray-700">គឺ ផ្លូអែម</span>
                                            </div>
                                            <p>• ស្ថិតនៅខាងក្រោមស្រទាប់ប៉ាលីសាត</p>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-yellow-700 rounded"></div>
                                                <span className="text-gray-700">ស្តូម៉ាត(stomata)</span>
                                            </div>
                                            <p>• មាននាទីបណ្ដូរឧស្ម័ន និងបំភាយចំហាយទឹក</p>
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