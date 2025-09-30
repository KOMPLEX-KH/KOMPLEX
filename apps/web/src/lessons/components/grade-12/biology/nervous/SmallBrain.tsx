import { Brain, Lightbulb, Target, Zap } from "lucide-react"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"
import {ImageBox} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox"

export default function SmallBrain() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Target className="text-green-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ខួរតូច (Cerebellum)</h2>
                        <Target className="text-green-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Main Cerebellum Structure with 3D Model */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">រចនាសម្ព័ន្ធខួរតូច</h2>
                        
                        <ImageBox
                            title="ខួរតូច - មជ្ឈមណ្ឌលត្រួតពិនិត្យចលនា"
                            imageAlt="ខួរតូច"
                            src="/docs/grade-12/biology/gymnosperms/image.png"
                            explanation={
                                <div className=" p-4 rounded-lg">
                                    <h3 className="font-semibold text-green-800 mb-3">ខួរតូច និងលក្ខណៈសំខាន់ៗ</h3>
                                    <div className="space-y-3">
                                        
                                    </div><div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🧠</span>
                                            <div>
                                                <strong>ខួរតូច (Cerebellum)</strong>
                                            
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-base mt-1">ខួរតូចស្ថិតនៅផ្នែកខាងក្រោយ ខាងក្រោមខួរធំ។</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-basemt-1"> វាត្រួតពិនិត្យចលនាឆន្ទះទាំងអស់ និងចលនាអឆន្ទះមួយចំនួន។</p>
                                            </div>
                                        </div>  
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-base mt-1">ខួរតូច ក៏ចែកជាអឌ្ឍគោលខួរចំនួនពីរចំហៀងដែរ </p>
                                            </div>
                                        </div>  
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                            <p className="text-base mt-1">ប្រសិនខួរតូចមានការបាត់បង់ ឬខូតខាត គេសង្កេតឃើញថា សារពាង្គកាយបាត់បង់តុល្យភាព ឬមានចលនា
                                            កន្ត្រាក់ញ័រៗ។</p>
                                            </div>
                                        </div> 	
                                        
                              		
                                </div>
                            }
                        />
                    </div>

                    {/* Functions of Cerebellum */}


                    {/* Structure of Cerebellum */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ខួរកញ្ចឹងករ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        
                                        <div>
                                            <p><strong>ខួរកញ្ចឹងករ:</strong> ស្ថិតនៅខាងក្រោមខួរធំ ខាងមុខខួរតូច ហើយភ្ជាប់ទៅនឹងខួរឆ្អឹងខ្នង។
ស្រទាប់ក្រៅជាសារធាតុស ឯស្រទាប់ក្នុងជាសារធាតុប្រផេះ។
វាមាននាទីត្រួតពិនិត្យចលនាអឆន្ទះមួយចំនួនរបស់សារពាង្គកាយគឺ ចង្វាក់ដង្ហើម និងការកន្ត្រាក់បេះដូង។</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Functional Zones */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">បន្ថែម</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1    gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-800 mb-2"><p className="text-sm mt-1">នៅពេលសាច់ដុំបញ្ចូនអាំងភ្លុចប្រសាទ តាមផ្លូវប្រសាទវិញ្ញាណនាំទៅខួរតូច អាំងភ្លុចប្រសាទនេះផ្តល់ព័ត៌មានពី
ទីតាំង និងអត្រានៃការកន្ត្រាក់របស់សាច់ដុំ។ បន្ទាប់មកខួរតូចបញ្ចូនអាំងភ្លុចប្រសាទទៅសំបកខួរធំ ដើម្បីឲ្យ
សំបកខួរកែលំអ និងសម្របសម្រួលចលនានៃសាច់ដុំ។</p></h4>
                                       
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <h4 className="font-semibold text-blue-800 mb-2"><p className="text-sm mt-1">ដូចនេះសំបកខួរ និងខួរតូចធ្វើការរួមគ្នា ដើម្បីបង្កើត
                                        ចលនាឆន្ទះមួយមានសណ្តាប់ធ្នាប់និងរលូន។</p></h4>
                                    </div>
                                    
                        
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disorders */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ជំងឺពាក់ព័ន្ធនឹងខួរតូច</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-red-800 mb-3">សញ្ញានៃបញ្ហាខួរតូច</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700">Ataxia (ការខូចចលនា)</h4>
                                        <p className="text-sm text-gray-600">ការដើរមិនស្ថិរ ចលនាមិនសម្របសម្រួល</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700">Dysmetria</h4>
                                        <p className="text-sm text-gray-600">ការវាស់ចលនាមិនត្រឹមត្រូវ</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700">Tremor</h4>
                                        <p className="text-sm text-gray-600">ការញ័រដៃជើង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700">Dysarthria</h4>
                                        <p className="text-sm text-gray-600">ការនិយាយមិនច្បាស់</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Functions Summary */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 sm:p-6 rounded-lg border border-green-200">
                        <h3 className="text-lg font-semibold text-green-800 mb-4">🎯 សេចក្តីសង្ខេបនាទីខួរតូច</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-green-600 mt-1">⚡</span>
                                    <div>
                                        <strong>ការត្រួតពិនិត្យចលនា</strong>
                                        <p className="text-sm text-gray-600">ធ្វើឱ្យចលនារលូន ជាក់លាក់ និងមានសម្របសម្រួល</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-teal-600 mt-1">⚖️</span>
                                    <div>
                                        <strong>រក្សាតុល្យភាព</strong>
                                        <p className="text-sm text-gray-600">ការពារពីការដួល និងរក្សាទីតាំងរាងកាយ</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-blue-600 mt-1">📚</span>
                                    <div>
                                        <strong>ការរៀនចលនា</strong>
                                        <p className="text-sm text-gray-600">រៀននិងចាំចលនាថ្មី កែលម្អចលនាចាស់</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-purple-600 mt-1">🎯</span>
                                    <div>
                                        <strong>ការសម្របសម្រួល</strong>
                                        <p className="text-sm text-gray-600">សម្របសម្រួលចលនាពីផ្នែកផ្សេងៗនៃរាងកាយ</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-orange-600 mt-1">🧠</span>
                                    <div>
                                        <strong>ជួយការគិត</strong>
                                        <p className="text-sm text-gray-600">ចូលរួមក្នុងការគិត ភាសា និងអារម្មណ៍</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-red-600 mt-1">🎵</span>
                                    <div>
                                        <strong>ចង្វាក់ពេលវេលា</strong>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យចង្វាក់ពេលវេលានៃចលនា</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}