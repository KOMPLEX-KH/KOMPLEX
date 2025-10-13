import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";

import { Lightbulb } from "lucide-react";

export default function Spine() {
    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ស្វែងយល់ពីប្រព័ន្ធប្រសាទស្មុគស្មាញរបស់សត្វឆ្អឹងកង</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Introduction */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">១ រូបផ្គុំប្រព័ន្ធប្រសាទសត្វឆ្អឹងកង</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-3">
                            <p className="pl-2 border-l-2 border-gray-200">
                            <span className="text-blue-600 mr-2">•</span>
                            ប្រព័ន្ធប្រសាទមានមជ្ឈមណ្ឌលប្រសាទនិងបរិមណ្ឌលប្រសាទ។
                            </p>
                            <p className="pl-2 border-l-2 border-gray-200">
                            <span className="text-green-600 mr-2">→</span>
                            មជ្ឈមណ្ឌលប្រសាទមានខួរក្បាល និងខួរឆ្អឹងខ្នង។
                            </p>
                            <p className="pl-2 border-l-2 border-gray-200">
                            <span className="text-green-600 mr-2">→</span>
                            បរិមណ្ឌលប្រសាទមានសរសៃវិញ្ញាណនាំ និងសរសៃប្រសាទ ចលករ។</p>
                            <p className="pl-2 border-l-2 border-gray-200">
                            <span className="text-blue-600 mr-2">•</span>
                            សរសៃប្រសាទវិញ្ញាណនាំ ដឹកនាំព័ត៌មានពីសរីរាង្គវិញ្ញាណទៅកាន់មជ្ឈមណ្ឌលប្រសាទ។
                            សរសៃប្រសាទចលករមានប្រព័ន្ធប្រសាទឆន្ទះ(សាច់ដុំជាប់ឆ្អឹង) ប្រព័ន្ធប្រសាទអឆន្ទះ(ក្រពេញមួយចំនួននិង
                            សាច់ដុំរលីងសរីរាង្គ) និងប្រព័ន្ធអឺរ៉ូនអង់ដូគ្រីន(ក្រពេញអង់ដូគ្រីន)។</p>
                        </div>
                    </div>

                    {/* Section 2.1 */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">២ តម្រូវប្រសាទសត្វឆ្អឹងកង</h2>
                        <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-3">
                            <p className="pl-2 border-l-2 border-gray-200">
                            <span className="text-blue-600 mr-2">•</span>
                            ប្រព័ន្ធប្រសាទសត្វឆ្អឹងកងមានការអភិវឌ្ឍខ្ពស់ដោយខួរក្បាលវាមានការលូតលាស់ល្អ និងមាន សរីរាង្គវិញ្ញាណច្រើន ។
                            </p>
                            <p>+ អឌ្ឍគោលខួរជាតំបន់វិនិច្ឆ័យនៃខួរក្បាលដោយវាទទួលបកស្រាយកំណត់តំណបទៅនឹង
                            ព័ត៌មានរបស់សរីរាង្គវិញ្ញាណ ។</p>
                            <p>+ ខួរតូចមាននាទីសម្របសម្រួលចលនា និងត្រួតពិនិត្យលំនឹង។ សរីរាង្គឃានវិញ្ញាណរបស់
                            មនុស្សមានអនុភាពទាបជាងគេ បើធៀបជាមួយឆ្កែ ឆ្មា ចំណែកឯឆ្កែ ប្រចៀវ ផ្សោត មានភាពរួស
                            ជាមួយសំឡេង ខ្ពស់ជាងមនុស្ស ។</p>
                           
                        </div>
                    </div>

                    {/* Comparison Section */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-3">តើសត្វមានឆ្អឹងកង និងសត្វឥតឆ្អឹងកងខុសគ្នាត្រង់ណាខ្លះ?</h3>
                        <div className="space-y-2 sm:space-y-3 text-gray-700">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-2">សត្វមានឆ្អឹងកង</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• មានមជ្ឈមណ្ឌលប្រសាទកណ្តាល</li>
                                        <li>• ខួរក្បាលអភិវឌ្ឍន៍ខ្ពស់</li>
                                        <li>• សរីរាង្គវិញ្ញាណស្មុគស្មាញ</li>
                                        <li>• ការឆ្លើយតបរហ័ស</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-3 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 mb-2">សត្វគ្មានឆ្អឹងកង</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• បណ្តាញប្រសាទសាមញ្ញ</li>
                                        <li>• គ្មានខួរក្បាលពិតប្រាកដ</li>
                                        <li>• សរីរាង្គវិញ្ញាណមូលដ្ឋាន</li>
                                        <li>• ការឆ្លើយតបយឺត</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}