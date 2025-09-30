import { Brain, Lightbulb } from "lucide-react"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"

export default function BigBrain() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Brain className="text-purple-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ខួរធំ (Cerebrum)</h2>
                        <Brain className="text-purple-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Main Brain Structure with 3D Model */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">រចនាសម្ព័ន្ធខួរធំ</h2>
                        
                        <ThreeDExplanationBox 
                            title="ខួរធំ - ផ្នែកធំបំផុតនៃខួរក្បាល"
                            scale={2}
                            target={[0,1,0]}
                            src="/docs/grade-12/biology/gymnosperms/kpork.glb"
                            explanation={
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-purple-800 mb-3">ខួរធំ និងផ្នែកសំខាន់ៗ</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <span className="text-purple-600 mt-1">🧠</span>
                                            <div>
                                                <p className="text-sm mt-1">ជាផ្នែកធំបំផុតនៃខួរក្បាល ដែលកាន់កាប់ប្រហែល 80% នៃទម្ងន់ខួរក្បាលទាំងមូល។ </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-blue-600 mt-1">🔹</span>
                                            <div>  
                                                <p className="text-sm mt-1">ស្រទាប់ក្រៅ ឬសំបកខួរជាផ្នែកសំខាន់ ដែលបង្កឡើងពីសារធាតុប្រផេះ។
                                                សារធាតុប្រផេះនេះកើតពីតួកោសិកានៃណឺរ៉ូនចលករ និងណឺរ៉ូនភ្ជាប់។</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-sm mt-1">ស្រទាប់ក្នុងជាសារធាតុសដែលកើតពីភីបប្រសាទ។</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-sm mt-1">ផ្ទៃសំបកខួរនៃខួរធំមានផ្នត់ជាច្រើន។ ផ្នត់ទាំងនេះបង្កើនផ្ទៃតំបន់សារធាតុប្រផេះ និងបង្កើនបំណិនគិត។</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-sm mt-1">នៅចំកណ្តាលខួរក្បាល មានចង្អួរយ៉ាងជ្រៅមួយដែលចែកខួរធំចាប់ពីផ្នែកខាងមុខទៅខាងក្រោយ ជាអឌ្ឍគោលខួរ
ស្តាំ និងអឌ្ឍគោលខួរឆ្វេង។ អឌ្ឍគោលទាំងពីរនេះ
មានទំនាក់ទំនងជាមួយគ្នាឆ្លងកាត់តាមបាច់ប្រសាទ។
ក្រៅពីចង្អូរនេះមានផ្នត់ជ្រៅមួយចំនួន</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    {/* Brain Parts and Functions */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ផ្នែកសំខាន់ៗនៃខួរធំ</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <h4 className="font-semibold text-blue-400 mb-2">កំពកខាងមុខ​​ ឬ​កំពកថ្ងាស (Frontal Lobe)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការគិត ការសម្រេចចិត្ត</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យចលនាឆន្ទ:</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យភាសានិងការនិយាយ</p>
                            «
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <h4 className="font-semibold text-green-800 mb-2">កំពកសៀតផ្កា (Parietal Lobe)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យទៅលើរសជាតិ</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យក្លិន</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការឭ(ល្បឺ)</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                                        <h4 className="font-semibold text-red-800 mb-2">កំពកពយ  (Occipital Lobe)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការមើលឃើញ</p>
                                            <p className="text-sm text-gray-600">• បកស្រាយព័ត៌មានពីភ្នែក</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការយល់ឃើញពណ៌</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការយល់ឃើញរូបរាង</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-300">
                                        <h4 className="font-semibold text-yellow-300 mb-2">កំពកចំហៀង (Temporal Lobe)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• មានទំនាក់ទំនងលើកាយវិញ្ញាណ</p>
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យការឈឺចាប់</p>
                                            <p className="text-sm text-gray-600">• សម្ពាធ ការប៉ះទង្គិច</p>
                                            <p className="text-sm text-gray-600">• កម្ដៅ ត្រជាក់</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cerebral Cortex */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">សំបកខួរ (Cerebral Cortex)</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Lightbulb className="text-yellow-500 mr-2" size={20} />
                                    <h3 className="font-semibold text-indigo-800">លក្ខណៈពិសេសនៃសំបកមខួរ</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-indigo-600 mt-1">🔹</span>
                                        <div>
                                            <p> សំបកខួរមាននាទីជាច្រើន មានត្រួតពិនិត្យ <strong>សតិ បញ្ញា ប្រឌិតញ្ញាណ ពិចារណា។</strong> 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-indigo-600 mt-1">🔹</span>
                                        <div>
                                            <p>ក្រៅពីនេះ វាទទួលព័ត៌មានពីសរីរាង្គវិញ្ញាណទាំងប្រាំមាន<strong> ស្បែក ត្រចៀក ភ្នែក ច្រមុះ និងអណ្តាត</strong></p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brain Hemispheres */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">អឌ្ឍគោលខួរ (Brain Hemispheres)</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <h4 className="font-semibold text-green-800 mb-2">អឌ្ឍគោលខួរឆ្វេង (Left Hemisphere)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យសារពាង្គកាយផ្នែកខាងស្ដាំ</p>
                                            <p className="text-sm text-gray-600">• អាំងភ្លុចប្រសាទចេញពីសារពាង្គកាយ
                                            ខាងស្តាំ ធ្វើដំណើរឆ្ពោះទៅកាន់អឌ្ឍគោលខួរឆ្វេង។</p>
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <h4 className="font-semibold text-blue-800 mb-2">អឌ្ឍគោលខួរស្ដាំ (Right Hemisphere)</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">• ត្រួតពិនិត្យចលនាសារពាង្គកាយចំហៀងខាងឆ្វេង </p>
                                            <p className="text-sm text-gray-600">• អាំងភ្លុចប្រសាទចេញពីសារពាង្គកាយ
                                            ខាងឆ្វេងធ្វើដំណើរឆ្ពោះទៅកាន់អឌ្ឍគោលខួរស្ដាំ</p>
                                         
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4 bg-white p-3 rounded-lg border">
                                    <p className="text-sm text-gray-600">អឌ្ឍគោលខួរឆ្វេង លុបលើអឌ្ឍគោលខួរស្ដាំ នាំឲ្យចលនាខាងស្តាំលុបលើចលនាខាងឆ្វេង។
អឌ្ឍគោលខួរឆ្វេង ជាមជ្ឈមណ្ឌលនៃការគណនា ឯអឌ្ឍគោលខួរស្ដាំជាមជ្ឍមណ្ឌល តន្ត្រី និងសិល្បៈ។</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">៤.១ រចនាសម្ព័ន្ធណឺរ៉ូន</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                       <ThreeDExplanationBox 
                       title="រចនាសម្ព័ន្ធណឺរ៉ូន"
                       scale={1}
                       target={[0,0,0]}
                       src="/docs/grade-12/biology/gymnosperms/kompork.glb"
                       explanation = {
                        <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 mt-1">🔹</span>
                                        <div>
                                            <strong>តាឡាមូស</strong>
                                            <p>ជាស្ថានីយបញ្ចូនបន្ត</p>
                                            <p>មាននាទី:
ចាប់យកអាំងភ្លុចប្រសាទពីណឺរ៉ូនវិញ្ញាណនាំ ហើយបញ្ចូនទៅផ្នែកត្រឹមត្រូវនៅក្នុងសំបកខួរក្បាលដែលនឹងត្រូវបក
ស្រាយ។</p>                                    <p>ជ្រើសរើសព័ត៌មានមួយចំនួនដែលអាចទប់ស្កាត់មិនឲ្យ
រំភើបខ្លាំងពេក។</p>
                                        </div>
                                    </div>  
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 mt-1">🔹</span>
                                        <div>
                                            <strong>អ៊ីប៉ូតាឡាមូស</strong>
                                            <p>ស្ថិតនៅផ្នែកបាតនៃខួរធំខាងក្រោមតាឡាមុស​និងលើក្រពេញអ៊ីប៉ូភីស</p>
                                            <p>វាត្រួតពិនិត្យការស្រេកឃ្លាន 
                                            </p>
                                            <p>តំហែរក្សាសីតុណ្ហភាព តុល្យភាពទឹក និងសម្ពាធឈាម។
                                            </p>
                                            <p>បង្កើន ឬភ្ញោចការបញ្ចេញអរម៉ូនរបស់ក្រពេញអ៊ីប៉ូភីស។
                                            </p>
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
        </>
    )
}