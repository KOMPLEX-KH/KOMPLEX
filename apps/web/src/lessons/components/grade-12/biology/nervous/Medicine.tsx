import { Stethoscope, Pill, Brain, Heart, Activity, Lightbulb, Shield, Zap } from "lucide-react"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"

export default function Medicine() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Stethoscope className="text-emerald-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ការអនុវត្តក្នុងវេជ្ជសាស្ត្រ (Medical Applications)</h2>
                        <Stethoscope className="text-emerald-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
             

                    {/* Diagnostic Methods */}
           

                    {/* Common Neurological Disorders */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ជំងឺប្រព័ន្ធប្រសាទទូទៅ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-red-800 mb-3">ជំងឺសំខាន់ៗ និងការព្យាបាល</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700 mb-2">ជំងឺដាច់សរសៃឈាមខួរក្បាល (Stroke)</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600"><strong>មូលហេតុ:</strong> ការបិទស្ទះសរសៃឈាម</p>
                                            <p className="text-sm text-gray-600"><strong>សញ្ញា:</strong> ខ្វាក់ ការនិយាយលំបាក</p>
                                            <p className="text-sm text-gray-600"><strong>ការព្យាបាល:</strong> ថ្នាំរំលាយកំណកឈាម</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700 mb-2">ជំងឺឆ្កួតជ្រូក (Epilepsy)</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600"><strong>មូលហេតុ:</strong> សកម្មភាពអគ្គិសនីខុសប្រក្រតី</p>
                                            <p className="text-sm text-gray-600"><strong>សញ្ញា:</strong> ការប្រកាច់ ការបាត់ស្មារតី</p>
                                            <p className="text-sm text-gray-600"><strong>ការព្យាបាល:</strong> ថ្នាំទប់ការប្រកាច់</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700 mb-2">ជំងឺផាកឃីនសុន (Parkinson&apos;s Disease)</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600"><strong>មូលហេតុ:</strong> ការបាត់បង់ណឺរ៉ូនដូប៉ាមីន</p>
                                            <p className="text-sm text-gray-600"><strong>សញ្ញា:</strong> ការញ័រ ចលនាយឺត</p>
                                            <p className="text-sm text-gray-600"><strong>ការព្យាបាល:</strong> ថ្នាំ L-DOPA</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <h4 className="font-semibold text-red-700 mb-2">ជំងឺភ្លេចភ្លាំង (Alzheimer&apos;s Disease)</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600"><strong>មូលហេតុ:</strong> ការបាក់ណឺរ៉ូន</p>
                                            <p className="text-sm text-gray-600"><strong>សញ្ញា:</strong> ការភ្លេច ការច្រំដែល</p>
                                            <p className="text-sm text-gray-600"><strong>ការព្យាបាល:</strong> ថ្នាំបន្ថយសញ្ញា</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">វិធីសាស្ត្រធ្វើរោគវិនិច្ឆ័យ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-3">បច្ចេកវិទ្យាធ្វើរោគវិនិច្ឆ័យ</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <div className="flex items-center mb-2">
                                            <Brain className="text-blue-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-blue-800">MRI (Magnetic Resonance Imaging)</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ថតរូបខួរក្បាលនិងខួរឆ្អឹងខ្នង</p>
                                            <p className="text-sm text-gray-600">• រកឃើញដុំសាច់ ឬការខូចខាត</p>
                                            <p className="text-sm text-gray-600">• មិនប្រើកាំរស្មី X</p>
                                            <p className="text-sm text-gray-600">• ផ្តល់រូបភាពច្បាស់លាស់</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <div className="flex items-center mb-2">
                                            <Activity className="text-green-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-green-800">EEG (Electroencephalogram)</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• វាស់សកម្មភាពអគ្គិសនីខួរក្បាល</p>
                                            <p className="text-sm text-gray-600">• រកឃើញជំងឺឆ្កួតជ្រូក</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការគេង</p>
                                            <p className="text-sm text-gray-600">• មិនមានគ្រោះថ្នាក់</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-300">
                                        <div className="flex items-center mb-2">
                                            <Zap className="text-purple-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-purple-800">EMG (Electromyography)</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• វាស់សកម្មភាពអគ្គិសនីសាច់ដុំ</p>
                                            <p className="text-sm text-gray-600">• រកឃើញបញ្ហាសរសៃប្រសាទ</p>
                                            <p className="text-sm text-gray-600">• ធ្វើរោគវិនិច្ឆ័យការខ្វាក់</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការធ្វើការសាច់ដុំ</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <div className="flex items-center mb-2">
                                            <Heart className="text-red-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-red-800">CT Scan</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ថតរូបខួរក្បាលដោយកាំរស្មី X</p>
                                            <p className="text-sm text-gray-600">• រកឃើញការប្រេះឈាម</p>
                                            <p className="text-sm text-gray-600">• ធ្វើរោគវិនិច្ឆ័យរហ័ស</p>
                                            <p className="text-sm text-gray-600">• សម្រាប់ករណីបន្ទាន់</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Treatment Methods */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">វិធីសាស្ត្រព្យាបាល</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-800 mb-3">ការព្យាបាលជំងឺប្រព័ន្ធប្រសាទ</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <div className="flex items-center mb-2">
                                            <Pill className="text-green-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-green-800">ការព្យាបាលដោយថ្នាំ</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ថ្នាំទប់ការប្រកាច់</p>
                                            <p className="text-sm text-gray-600">• ថ្នាំប្រឆាំងនឹងការថប់បារម្ភ</p>
                                            <p className="text-sm text-gray-600">• ថ្នាំបន្ថយការឈឺចាប់</p>
                                            <p className="text-sm text-gray-600">• ថ្នាំកែលម្អការចាំ</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <div className="flex items-center mb-2">
                                            <Activity className="text-blue-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-blue-800">ការព្យាបាលរូបវន្ត</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ការហាត់ប្រាណចលនា</p>
                                            <p className="text-sm text-gray-600">• ការព្យាបាលដោយការនិយាយ</p>
                                            <p className="text-sm text-gray-600">• ការហាត់ប្រាណការចាប់អារម្មណ៍</p>
                                            <p className="text-sm text-gray-600">• ការកែលម្អតុល្យភាព</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-300">
                                        <div className="flex items-center mb-2">
                                            <Zap className="text-purple-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-purple-800">ការព្យាបាលដោយវះកាត់</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ការដកដុំសាច់ខួរក្បាល</p>
                                            <p className="text-sm text-gray-600">• ការដាក់ឧបករណ៍ជំនួយ</p>
                                            <p className="text-sm text-gray-600">• ការកែស្រួលសរសៃប្រសាទ</p>
                                            <p className="text-sm text-gray-600">• ការផ្ទេរកោសិកា</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Medical Technology */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">បច្ចេកវិទ្យាវេជ្ជសាស្ត្រទំនើប</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Lightbulb className="text-yellow-500 mr-2" size={20} />
                                    <h3 className="font-semibold text-indigo-800">បច្ចេកវិទ្យាថ្មីៗ</h3>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700 mb-2">Deep Brain Stimulation (DBS)</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            ការដាក់ឧបករណ៍អគ្គិសនីក្នុងខួរក្បាលដើម្បីព្យាបាលជំងឺផាកឃីនសុន និងជំងឺឆ្កួតជ្រូក។
                                        </p>
                                        <div className="text-xs text-indigo-600">
                                            • បន្ថយការញ័រ • កែលម្អចលនា • បន្ថយការប្រកាច់
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700 mb-2">Brain-Computer Interface</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            ការភ្ជាប់ខួរក្បាលទៅកុំព្យូទ័រដើម្បីជួយអ្នកខ្វាក់ត្រួតពិនិត្យឧបករណ៍ដោយគំនិត។
                                        </p>
                                        <div className="text-xs text-indigo-600">
                                            • ត្រួតពិនិត្យដោយគំនិត • ជួយអ្នកពិការ • បច្ចេកវិទ្យាអនាគត
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700 mb-2">Stem Cell Therapy</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            ការប្រើកោសិកាដើមដើម្បីជួសជុលណឺរ៉ូនដែលខូចខាត និងព្យាបាលជំងឺប្រព័ន្ធប្រសាទ។
                                        </p>
                                        <div className="text-xs text-indigo-600">
                                            • ជួសជុលកោសិកា • បង្កើតណឺរ៉ូនថ្មី • ការព្យាបាលអនាគត
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-300">
                                        <h4 className="font-semibold text-indigo-700 mb-2">Gene Therapy</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            ការកែសម្រួលហ្សែនដើម្បីព្យាបាលជំងឺតំណពូជប្រព័ន្ធប្រសាទ។
                                        </p>
                                        <div className="text-xs text-indigo-600">
                                            • កែហ្សែនខូច • ការព្យាបាលមូលហេតុ • បច្ចេកវិទ្យាទំនើប
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prevention and Lifestyle */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-yellow-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ការការពារ និងរបៀបរស់នៅ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Shield className="text-yellow-600 mr-2" size={20} />
                                    <h3 className="font-semibold text-yellow-800">ការការពារសុខភាពប្រព័ន្ធប្រសាទ</h3>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-300">
                                        <h4 className="font-semibold text-yellow-700 mb-2">របបអាហារល្អ</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600">• ញុំាអាហារសម្បូរវីតាមីន</p>
                                            <p className="text-sm text-gray-600">• ញុំាត្រីដែលមានអូម៉េហ្គា ៣</p>
                                            <p className="text-sm text-gray-600">• ជៀសវាងជាតិស្ករច្រើន</p>
                                            <p className="text-sm text-gray-600">• ផឹកទឹកគ្រប់គ្រាន់</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-300">
                                        <h4 className="font-semibold text-yellow-700 mb-2">ការហាត់ប្រាណ</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600">• ហាត់ប្រាណទៀងទាត់</p>
                                            <p className="text-sm text-gray-600">• ការហាត់ប្រាណខួរក្បាល</p>
                                            <p className="text-sm text-gray-600">• ការអានសៀវភៅ</p>
                                            <p className="text-sm text-gray-600">• ការលេងល្បែងគំនិត</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-300">
                                        <h4 className="font-semibold text-yellow-700 mb-2">ការគេងគ្រប់គ្រាន់</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600">• គេង ៧-៩ ម៉ោងក្នុងមួយយប់</p>
                                            <p className="text-sm text-gray-600">• មានកាលវិភាគគេងទៀងទាត់</p>
                                            <p className="text-sm text-gray-600">• ជៀសវាងកាហ្វេមុនគេង</p>
                                            <p className="text-sm text-gray-600">• បង្កើតបរិយាកាសគេងល្អ</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-300">
                                        <h4 className="font-semibold text-yellow-700 mb-2">ការគ្រប់គ្រងស្ត្រេស</h4>
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600">• ការធ្វើសមាធិ</p>
                                            <p className="text-sm text-gray-600">• ការហាត់សម្រាក</p>
                                            <p className="text-sm text-gray-600">• ការទំនាក់ទំនងសង្គម</p>
                                            <p className="text-sm text-gray-600">• ការរកសកម្មភាពកំសាន្ត</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 sm:p-6 rounded-lg border border-emerald-200">
                        <h3 className="text-lg font-semibold text-emerald-800 mb-4">🏥 សេចក្តីសង្ខេបការអនុវត្តក្នុងវេជ្ជសាស្ត្រ</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-emerald-600 mt-1">🔍</span>
                                    <div>
                                        <strong>ការធ្វើរោគវិនិច្ឆ័យ</strong>
                                        <p className="text-sm text-gray-600">MRI, EEG, EMG, CT Scan សម្រាប់រកឃើញបញ្ហា</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-blue-600 mt-1">💊</span>
                                    <div>
                                        <strong>ការព្យាបាល</strong>
                                        <p className="text-sm text-gray-600">ថ្នាំ ការព្យាបាលរូបវន្ត និងការវះកាត់</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-purple-600 mt-1">🔬</span>
                                    <div>
                                        <strong>បច្ចេកវិទ្យាទំនើប</strong>
                                        <p className="text-sm text-gray-600">DBS, BCI, ការព្យាបាលកោសិកាដើម</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-red-600 mt-1">🚨</span>
                                    <div>
                                        <strong>ជំងឺសំខាន់ៗ</strong>
                                        <p className="text-sm text-gray-600">Stroke, Epilepsy, Parkinsons, Alzheimer&apos;s</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-yellow-600 mt-1">🛡️</span>
                                    <div>
                                        <strong>ការការពារ</strong>
                                        <p className="text-sm text-gray-600">របបអាហារល្អ ការហាត់ប្រាណ ការគេងគ្រប់គ្រាន់</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-green-600 mt-1">🔮</span>
                                    <div>
                                        <strong>អនាគត</strong>
                                        <p className="text-sm text-gray-600">ការព្យាបាលហ្សែន និងបច្ចេកវិទ្យាថ្មីៗ</p>
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