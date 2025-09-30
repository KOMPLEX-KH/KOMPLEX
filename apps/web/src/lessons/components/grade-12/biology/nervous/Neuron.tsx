import { Lightbulb } from "lucide-react"
import ThreeDBox from "@/components/pages/docs/boxes/3DBox"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"
import { div } from "framer-motion/client"

export default function Neuron() {
    return(
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ណឺរ៉ូន</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Section 4.1 - What is Neuron */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.ណឺរ៉ូន</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-3">
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-blue-600 mr-2">•</span>
                                ណឺរ៉ូន ជាកោសិកាឯកទេស ដែលមាននាទីដឹកនាំព័ត៌មានប្រសាទទៅពាសពេញសារពាង្គកាយ។។
                            </p>
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-blue-600 mr-2">•</span>
                                គេចែកណឺរ៉ូនដោយផ្អែកលើភាពពន្លយស៊ីតូប្លាសនិងនាទីរបស់វា
                            </p>
                        </div>
                    </div>

                    {/* Section 4.2 - Structure of Neuron */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.១ រចនាសម្ព័ន្ធណឺរ៉ូន</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                       <ThreeDExplanationBox 
                       title="រចនាសម្ព័ន្ធណឺរ៉ូន"
                       scale={2}
                       target={[0,0,0]}
                       src="/docs/grade-12/biology/gymnosperms/neuron.glb"
                       explanation = {
                        <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-3">ផ្នែកសំខាន់ៗរបស់ណឺរ៉ូន</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តួកោសិកា (Cell Body/Soma)</strong>
                                            <p className="text-sm mt-1">ណឺរ៉ូនមានតួកោសិកាធំហើយបែកចេញពីតួកោសិកាជាសរសៃឆ្មារៗ ហើយខ្លីមានច្រើនគឺ ដង់ឌ្រីត និង
                                            សរសៃវែងមួយគឺអាក់សូន។ ក្នុងតួកោសិកាមានផ្ទុកណ្វៃយ៉ូ និងធាតុកោសិកាដូចជា មីតូកុង ប្រដាប់កុលស៊ី
                                            សារធាតុនីស និងណ៏រ៉ូភីប៊្រី</p>
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ដង់ឌ្រីត</strong>
                                            <p className="text-sm mt-1">ជាសរសៃឆ្មារៗ ហើយខ្លី មានច្រើនបែកចេញពីតួកោសិកា។ ដង់ឌ្រីតមាននាទីទទួលព័ត៌មានពីណឺរ៉ូន
                                            ផ្សេងៗ និងបញ្ចូនទៅតួកោសិកានៃណឺរ៉ូន។</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-purple-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អាក់សូន (Axon)</strong>
                                            <p className="text-sm mt-1">ជាពន្លយដែលបែកចេញពីតួកោសិកា ហើយមានទម្រង់ដូចជាដង់ឌ្រីត។ អាក់សូនមានតែមួយគត់ធំ
                                            ហើយវែង។</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                       }
                       />
                        </div>
                    </div>

                    {/* Section 4.3 - Types of Neurons */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.២ ប្រភេទនៃណឺរ៉ូន</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">បើផ្អែកលើភាពពន្លយស៊ីតូប្លាសណឺរ៉ូនមាន 3​ ប្រភេទ</p>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនឯកប៉ូល"
                                scale={0.2}
                                target={[0,1,0]}
                                src="/docs/grade-12/biology/gymnosperms/ekpol.glb"
                                explanation = {<div>
                                    <h3 className="font-semibold text-blue-800 mb-3">និយមន័យ:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>  
                                        <div>
                                            <strong>ណឺរ៉ូនឯកប៉ូល : ណឺរ៉ូនដែលមានពន្លយខ្លីមួយ
                                            បែកចេញពីតួកោសិកា។</strong>
                                           
                                        </div>
                                    </div>
                                </div>
                                </div>}
                                />
                                </div>
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនទ្វេរប៉ូល"
                                scale={0.2}
                                target={[0,1,0]}
                                src="/docs/grade-12/biology/gymnosperms/tvepol.glb"
                                explanation = {     
                                    <div>
                                        <h3 className="font-semibold text-blue-800 mb-3">និយមន័យ:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ណឺរ៉ូនទ្វេប៉ូល: ណឺរ៉ូនដែលតួកោសិកាមានពន្លយ
                                            ពីរស្របគ្នាគឺ មួយជាអាក់សូន និងមួយទៀតជាដង់ឌ្រីត</strong>
                                        </div>
                                    </div>
                                    
                                </div>
                                    </div>}
                                />
                                </div>
                                <div><ThreeDExplanationBox 
                                title="ណឺរ៉ូនពហុប៉ូល"
                                scale={0.2}
                                target={[0,1,0]}
                                src="/docs/grade-12/biology/gymnosperms/multi.glb"
                                explanation = {     
                                    <div>
                                        <h3 className="font-semibold text-blue-800 mb-3">និយមន័យ: </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>ណឺរ៉ូនពហុប៉ូល: សឺរ៉ូនដែលតួកោសិកាមានពន្លយច្រើន បែកចេញពីតួកោសិកា ជាសរសៃឆ្មារៗហើយខ្លីមានច្រើន
                                            ជាដង់ឌ្រីត នឹងអាក់សូនមានតែមួយគត់ធំហើយវែង។</strong>
                                        </div>
                                    </div>
                       
                                </div>
                                    </div>
                                }
                                />
                                </div>
                           
                            </div>
                        </div>
                    </div>

                    {/* Section 4.4 - How Neurons Work */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ពាក់ព័ន្ធនឹងនាទី</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-800 mb-3">ដោយផ្អែកលើនាទីណឺរ៉ូនក៌មាន 3ដែរ:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">១</div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800">ណឺរ៉ូនវិញ្ញាណនាំ</h4>
                                            <p className="text-sm text-gray-600">មាននាទីដឹកនាំព័ត៌មានពីធ្មួលវិញ្ញាណទៅកាន់មជ្ឈមណ្ឌលប្រសាទ។ តួកោសិកាស្ថិតនៅតាម
                                            បណ្តោយសរសៃប្រសាទ បង្កើតបានជាកំពកហៅថាកង់គ្លីយ៉ុង។</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">២</div>
                                        <div>
                                            <h4 className="font-semibold text-green-800">ណឺរ៉ូនចលករ</h4>
                                            <p className="text-sm text-gray-600">មាននាទីដឹកនាំព័ត៌មានពីមជ្ឈមណ្ឌលប្រសាទទៅកាន់សរីរាង្គប្រតិកម្ម (សាច់ដុំ ឬក្រពេញ)។ តួ
                                            កោសិកាប្រសាទស្ថិតនៅខាងចុងម្ខាងនៃណឺរ៉ូន ដែលកប់នៅក្នុងខួរក្បាល ឬខួរឆ្អឹងខ្នង។</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">៣</div>
                                        <div>
                                            <h4 className="font-semibold text-purple-800">អន្តរណឺរ៉ូន ឬ ណឺរ៉ូនភ្ជាប់</h4>
                                            <p className="text-sm text-gray-600"> មាននាទីបញ្ចូនបន្តនូវព័ត៌មានពីណឺរ៉ូនមួយទៅណឺរ៉ូនមួយទៀត។</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៥ អាំងភ្លុចប្រសាទ
                        </h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex flex-row items-center">
                                <h3 className="font-semibold text-indigo-800 mb-3">មកដឹងពីនិយមន័យនឹងលក្ខណ:ខ្លះៗរបស់អាំងភ្លុចប្រសាទ​</h3>
                                <Lightbulb className="text-yellow-500 mb-2" size={20} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើអាំងភ្លុចប្រសាទជាអ្វី?</h4>
                                        <p className="text-sm text-gray-600">វាជាព័ត៌មានប្រសាទដែលណឺរ៉ូនដឹកនាំ</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើណឺរ៉ូនបញ្ជូនព័ត៌មានមានទិសដៅយ៉ាងណា?</h4>
                                        <p className="text-sm text-gray-600">អាំងភ្លុចប្រសាទមានទិសដៅ ពីដង់ឌ្រីតមួយន
                                        អឺរ៉ូ ចូលទៅក្នុងតួកោសិកា ហើយចុះតាម
                                        អាក់សូនរហូតដល់ស្មាញអាក់សូន។</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើវាមានរូបរាងទេ?</h4>
                                        <p className="text-sm text-gray-600">អាំងភ្លុចប្រសាទធ្វើដំណើរតាមបណ្ដោយអឺរ៉ូន
                                            ក្រោមរូបរាងជាសញ្ញាអគ្គិសនីនិងគីមី</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">តើវាលឿនយ៉ាងណាទើបយើងពីការឈឺចាប់យើងភ្លាមៗយ៉ាងនេះ</h4>
                                        <p className="text-sm text-gray-600">វាធ្វើដំណើរក្នុងល្បឿន120m/s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                </div>
                    {/* Section 4.5 - Synapse */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៤ ស៊ីណាប់ (Synapse)</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="mb-3">
                                    <span className="text-red-600 mr-2">•</span>
                                    <strong>ស៊ីណាប់ជាអ្វី? នៅកន្លែងណា?</strong> ។
                                </p>
                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div className="bg-white p-3 rounded-lg border">
                                        <h4 className="font-semibold text-red-800 mb-2">ស៊ីណាប់ជាអ្វី?</h4>
                                        <p className="text-sm text-gray-600">ជាលំហចន្លោះពីដង់ឌ្រីតនៃណឺរ៉ូនមួយទៅនឹងអាក់សូននៃណឺរ៉ូនបន្ទាប់។</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border">
                                        <h4 className="font-semibold text-red-800 mb-2">តើអាំងភ្លុចប្រសាទឆ្លងកាត់ស៊ីណាប់យ៉ាងដូចម្ដេច ?</h4>
                                        <p className="text-sm text-gray-600">នៅចុងអាក់សូនមានថង់តូចៗជាច្រើន ដែលផ្ទុកសារធាតុ
គីមី(សឺរ៉ូនបញ្ចូនសារ)។ ពេលអាំងភ្លុចប្រសាទទៅដល់ចុងអាក់សូន ថង់ទាំងនោះផ្ទុះបែកហើយបញ្ចេញណឺរ៉ូនបញ្ចូនសារ
សាយឆ្លងកាត់ស៊ីណាប់។ បន្ទាប់មកអឺរ៉ូនបញ្ចូនសារនេះបង្កើតអាំងភ្លុចប្រសាទ នៅក្នុងដង់ឌ្រីតរបស់ណឺរ៉ូនបន្ទាប់ រួចវាធ្វើ
ដំណើរតាមតួកោសិកា និងចុះតាមអាក់សូនរហូតដល់ចុងអាក់សូន។</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.៥ អាំងភ្លុចប្រសាទ
                        </h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <p className="pl-2 border-l-2 border-gray-200">
                                <span className="text-indigo-600 mr-2">•</span>
                                នឺរ៉ូត្រាន្សមីតទ័រ គឺជាសារធាតុគីមីដែលបញ្ជូនសេចក្តីពីណឺរ៉ូនមួយទៅណឺរ៉ូនមួយទៀតនៅស៊ីណាប។
                            </p>
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-indigo-800 mb-3">នឺរ៉ូត្រាន្សមីតទ័រសំខាន់ៗ:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">អាសេទីលកូលីន</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យសាច់ដុំ និងការចាំ</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">ដូប៉ាមីន</h4>
                                        <p className="text-sm text-gray-600">ទាក់ទងនឹងភាពរីករាយ និងចលនា</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">សេរ៉ូតូនីន</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យអារម្មណ៍ និងការគេង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700">GABA</h4>
                                        <p className="text-sm text-gray-600">បន្ថយសកម្មភាពណឺរ៉ូន</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Section 4.6 - Neurotransmitters */}

                    {/* Summary Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4"> នៅពេលទូរស័ព្ទរោទន៍ អ្នកលើកទូរស័ព្ទដើម្បីឆ្លើយតប។ ចូររៀបរាប់ពីដំណើរការចូលរួមរបស់អ៊ឺរ៉ូន។</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <span className="text-blue-600 mt-1">🧠</span>
                                <p className="text-gray-700">នៅពេលឮទូរស័ព្ទរោទ៍ អ្នកលើកទូរស័ព្ទដើម្បីឆ្លើយតប។ ក្នុងដំណើរការនេះមានណឺរ៉ូនបីប្រភេទចូលរួមគឺ៖</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-green-600 mt-1">⚡</span>
                                <p className="text-gray-700">អឺរ៉ូនវិញ្ញាណនាំ នៅពេលឆួលវិញ្ញាណចាប់យករំញោចពីមជ្ឈដ្ឋានខាងក្រៅ អាំងភ្លុចប្រសាទកើតឡើងភ្លាម។</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-purple-600 mt-1">🔄</span>
                                <p className="text-gray-700">ធ្នូលនៅក្នុងត្រចៀកចាប់យកសូរសំឡេងរោទ៍របស់ទូរស័ព្ទ ហើយបង្កើតអាំងភ្លុចប្រសាទនៅក្នុងណឺរ៉ូនវិញ្ញាណនាំ។</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-orange-600 mt-1">💊</span>
                                <p className="text-gray-700">អឺរ៉ូនភ្ជាប់(អន្តរអឺរ៉ូន): ចេញពីណឺរ៉ូនវិញ្ញាណនាំ អាំងភ្លុចប្រសាទ ឆ្លងកាត់ទៅណឺរ៉ូនភ្ជាប់ដែលស្ថិតនៅក្នុងខួរ
ក្បាល។ នៅពេលនោះខួរក្បាលបកស្រាយអាំងភ្លុចប្រសាទ ដែលបានមកពីអឺរ៉ូនភ្ជាប់ ហើយធ្វើឲ្យដឹងថាទូរស័ព្ទ
កំពុងរោទ៍។ ខួរក្បាលក៏បានសម្រេចចិត្តថា តើគួរឆ្លើយតបតាមទូរស័ព្ទឬទ?</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}