import { Network, Zap, Lightbulb, Eye, Hand, Heart, Activity } from "lucide-react"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"

export default function PeripheralNervous() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Network className="text-cyan-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ប្រព័ន្ធប្រសាទកាយ (Peripheral Nervous System)</h2>
                        <Network className="text-cyan-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    
                    {/* Components of PNS */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">សមាសធាតុនៃប្រព័ន្ធប្រសាទកាយ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <div className="flex items-center mb-2">
                                            <Network className="text-blue-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-blue-800">សរសៃប្រសាទ៣១គូ</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ចេញពីខួរឆ្អឹងខ្នង</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យសាច់ដុំ និងធ្មួលវិញ្ញាណ</p>
                                            <p className="text-sm text-gray-600">• បែងចែកទៅតាមតំបន់ផ្សេងៗ</p>
                                            <p className="text-sm text-gray-600">• ភ្ជាប់ទៅសរីរាង្គគោលដៅ</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <div className="flex items-center mb-2">
                                            <Eye className="text-green-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-green-800">សរសៃប្រសាទក្បាល១២គូ</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ចេញពីខួរក្បាលផ្ទាល់</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យធ្មួលវិញ្ញាណ</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យមុខ និងក</p>
                                            <p className="text-sm text-gray-600">• នាទីពិសេសៗ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spinal Nerves */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">សរសៃប្រសាទខួរឆ្អឹងខ្នង</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-purple-800 mb-3">ការបែងចែកសរសៃប្រសាទ៣១គូ</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-700">សរសៃប្រសាទក (៨គូ)</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យក និងសាច់ដុំក</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-700">សរសៃប្រសាទទ្រូង (១២គូ)</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យទ្រូង និងសាច់ដុំទ្រូង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-700">សរសៃប្រសាទចង្កេះ (៥គូ)</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យចង្កេះ និងជើង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-700">សរសៃប្រសាទត្រគាក (៥គូ)</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យត្រគាក និងជើង</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300">
                                        <h4 className="font-semibold text-purple-700">សរសៃប្រសាទកន្ទុយ (១គូ)</h4>
                                        <p className="text-sm text-gray-600">ត្រួតពិនិត្យតំបន់កន្ទុយ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Functional Divisions */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ការបែងចែកតាមនាទី</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <div className="flex items-center mb-2">
                                            <Hand className="text-green-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-green-800">ប្រព័ន្ធប្រសាទសូម៉ាទិក</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យចលនាដោយឆន្ទៈ</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យសាច់ដុំគ្រោងឆ្អឹង</p>
                                            <p className="text-sm text-gray-600">• ធ្មួលវិញ្ញាណប៉ះពាល់</p>
                                            <p className="text-sm text-gray-600">• អាចត្រួតពិនិត្យបាន</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <div className="flex items-center mb-2">
                                            <Heart className="text-red-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-red-800">ប្រព័ន្ធប្រសាទស្វ័យប្រវត្តិ</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យដោយស្វ័យប្រវត្តិ</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យសរីរាង្គខាងក្នុង</p>
                                            <p className="text-sm text-gray-600">• បេះដូង សួត ក្រពេញ</p>
                                            <p className="text-sm text-gray-600">• មិនអាចត្រួតពិនិត្យបាន</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Autonomic Nervous System Details */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ប្រព័ន្ធប្រសាទស្វ័យប្រវត្តិ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Activity className="text-red-500 mr-2" size={20} />
                                    <h3 className="font-semibold text-red-800">ការបែងចែកប្រព័ន្ធប្រសាទស្វ័យប្រវត្តិ</h3>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-300">
                                        <h4 className="font-semibold text-orange-800 mb-2">ប្រព័ន្ធស៊ីមផាទីក</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• បង្កើនសកម្មភាព (Fight or Flight)</p>
                                            <p className="text-sm text-gray-600">• បង្កើនចង្វាក់បេះដូង</p>
                                            <p className="text-sm text-gray-600">• ពង្រីកក្រចកភ្នែក</p>
                                            <p className="text-sm text-gray-600">• បន្ថយការរំលាយអាហារ</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <h4 className="font-semibold text-blue-800 mb-2">ប្រព័ន្ធប៉ារ៉ាស៊ីមផាទីក</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• បន្ថយសកម្មភាព (Rest and Digest)</p>
                                            <p className="text-sm text-gray-600">• បន្ថយចង្វាក់បេះដូង</p>
                                            <p className="text-sm text-gray-600">• បង្រួមក្រចកភ្នែក</p>
                                            <p className="text-sm text-gray-600">• បង្កើនការរំលាយអាហារ</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg border">
                                    <h4 className="font-semibold text-gray-800 mb-2">ឧទាហរណ៍នៃការធ្វើការ</h4>
                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>ពេលមានគ្រោះថ្នាក់:</strong> ប្រព័ន្ធស៊ីមផាទីកធ្វើការ - បេះដូងវាយលឿន ដង្ហើមលឿន ភ្នែកពង្រីក រាងកាយត្រៀមខ្លួនសម្រាប់ការបត់បែន។
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>ពេលសម្រាក:</strong> ប្រព័ន្ធប៉ារ៉ាស៊ីមផាទីកធ្វើការ - បេះដូងវាយយឺត ការរំលាយអាហារដំណើរការល្អ រាងកាយសម្រាក។
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nerve Pathways */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ផ្លូវដំណើរអាំងភ្លុចប្រសាទ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Lightbulb className="text-yellow-500 mr-2" size={20} />
                                    <h3 className="font-semibold text-indigo-800">ការដំណើរការនៃអាំងភ្លុចប្រសាទ</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border">
                                        <h4 className="font-semibold text-indigo-700 mb-2">ផ្លូវចូល (Afferent/Sensory)</h4>
                                        <p className="text-sm text-gray-600">
                                            ធ្មួលវិញ្ញាណ → សរសៃប្រសាទវិញ្ញាណនាំ → ខួរឆ្អឹងខ្នង/ខួរក្បាល → បកស្រាយព័ត៌មាន
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border">
                                        <h4 className="font-semibold text-indigo-700 mb-2">ផ្លូវចេញ (Efferent/Motor)</h4>
                                        <p className="text-sm text-gray-600">
                                            ខួរក្បាល/ខួរឆ្អឹងខ្នង → សរសៃប្រសាទចលករ → សាច់ដុំ/ក្រពេញ → សកម្មភាព
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border">
                                        <h4 className="font-semibold text-indigo-700 mb-2">ការឆ្លើយតបដោយស្វ័យប្រវត្តិ (Reflex Arc)</h4>
                                        <p className="text-sm text-gray-600">
                                            ធ្មួលវិញ្ញាណ → សរសៃប្រសាទវិញ្ញាណនាំ → ខួរឆ្អឹងខ្នង → សរសៃប្រសាទចលករ → សាច់ដុំ (មិនចាំបាច់ឆ្លងកាត់ខួរក្បាល)
                                        </p>
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