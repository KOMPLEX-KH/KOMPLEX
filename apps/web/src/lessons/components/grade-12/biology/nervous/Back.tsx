import { Activity, Heart, Lightbulb, Zap, Eye, Ear } from "lucide-react"
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox"

export default function Back() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Activity className="text-orange-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ខួរឆ្អឹងខ្នង (spine cord)</h2>
                        <Activity className="text-orange-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Main Brainstem Structure with 3D Model */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">ពំនុះនៃឆ្អឹងខ្នង</h2>
                        
                        <ThreeDExplanationBox 
                            title="ខួរកញ្ចឹង - មជ្ឈមណ្ឌលត្រួតពិនិត្យជីវិត"
                            scale={5}
                            target={[0,0,0]}
                            src="/docs/grade-12/biology/gymnosperms/back.glb"
                            explanation={
                                <div className="bg-p-4 rounded-lg">
                                    <h3 className="font-semibold text-orange-800 mb-3">ខួរឆ្អឹងខ្នង និងលក្ខណៈសំខាន់ៗ</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <span className="text-orange-600 mt-1">🧠</span>
                                            <div>
                                                <strong>ខួរឆ្អឹងខ្នង (spine cord)</strong>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-base mt-1">ខួរឆ្អឹងខ្នងស្ថិតនៅក្នុងប្រហោងឆ្អឹងកងខ្នង មានរាងជាអក្សរអ។
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-basemt-1"> ស្រទាប់ក្រៅជាសារធាតុស ឯស្រទាប់ក្នុងជាសារធាតុប្រផេះ។
                                                </p>
                                            </div>
                                        </div> 
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-basemt-1"> ខួរឆ្អឹងខ្នង ការពារដោយឆ្អឹងខ្នង ស្រោមខួរ និងទឹកខួរ។
                                                </p>
                                            </div>
                                        </div>  
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-basemt-1"> ព័ត៌មានផ្នែកវិញ្ញាណនាំ និងចលករឆ្លងកាត់ពីខួរក្បាលទៅផ្នែកផ្សេងៗទៀតនៃសារពាង្គកាយតាមរយះខួរឆ្អឹងខ្នង។

                                                </p>
                                            </div>
                                        </div>  
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-600 mt-1">🔹</span>
                                            <div>
                                                <p className="text-basemt-1"> សរសៃប្រសាទវិញ្ញាណនាំ និងចលករទាំងអស់ដែលស្ថិតក្រោមកញ្ចឹងក ត្រូវតែឆ្លងកាត់តាមខួរឆ្អឹងខ្នងទៅកាន់ខួរក្បាល ឬទៅ
                                                សរីរាង្គផ្សេងៗ។</p>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    {/* Parts of Brainstem */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">សារ:សំខាន់ៗនៃខួរឆ្អឹងខ្នង</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1  gap-4">
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-300">
                                        <div className="flex items-center mb-2">
                                            <Eye className="text-blue-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-blue-800">កន្លែងភ្ជាប់សរសៃប្រសាទនៃបរិមណ្ឌលប្រសាទ ទៅនឹងខួរក្បាល</h4>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                                        <div className="flex items-center mb-2">
                                            <Ear className="text-green-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-green-800">អាំងភ្លុចប្រសាទចេញពីណឺរ៉ូនវិញ្ញាណនាំ ចូលតាមខួរឆ្អឹងខ្នងដោយឆ្លងកាត់អន្តរណឺរ៉ូន
                                            ទៅកាន់ណ៏រ៉ូនចលករ។</h4>
                                        </div>
                                       
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                                        <div className="flex items-center mb-2">
                                            <Heart className="text-red-600 mr-2" size={20} />
                                            <h4 className="font-semibold text-red-800">ខួរឆ្អឹងខ្នងត្រួតពិនិត្យរ៉េផ្លិចខ្លះៗ ដែលជាតំណបស្វ័យប្រវត្តិ។</h4>
                                        </div>
                                       
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