import { Lightbulb } from "lucide-react";

export default function Role() {
    return(
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">តួនាទីប្រព័ន្ធប្រសាទ</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">
                    

                    
                    
                    {/* Main Functions Summary */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4">ចំណុចសំខាន់នៃតួនាទីប្រព័ន្ធប្រសាទ</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-3 rounded-lg border-l-4 border-blue-400">
                                <h4 className="font-semibold text-blue-700 mb-2">ទទួលព័ត៌មាន</h4>
                                <p className="text-sm text-gray-600">
                                អ្នកអាចដឹងពីអ្វីៗ ដែលកើតមាននៅក្នុងមជ្ឈដ្ឋានជុំវិញខ្លួនរបស់អ្នកដោយសារប្រព័ន្ធប្រសាទ។
                                ឧទាហរណ៍: មិត្តអ្នកកំពុងនិយាយរឿងកំប្លែង។
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-green-400">
                                <h4 className="font-semibold text-green-700 mb-2">ឆ្លើយតបព័ត៌មាន</h4>
                                <p className="text-sm text-gray-600">
                                បម្រែបម្រួល ឬសញ្ញាណាមួយនៅក្នុងមជ្ឈដ្ឋានខាងក្រៅ ដែលធ្វើឲ្យសារពាង្គកាយមាន
                                ប្រតិកម្មតបហៅថារំញោច។
                                ឧទាហរណ៍: សំឡេងងូងៗរបស់សត្វមូសជារំញោចធ្វើឲ្យអ្នកទះមូស។
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border-l-4 border-purple-400">
                                <h4 className="font-semibold text-purple-700 mb-2">តំហែរក្សាថេរលំនឹង</h4>
                                <p className="text-sm text-gray-600">
                                 ប្រព័ន្ធប្រសាទជួយថែរក្សាលំនឹង ដោយបញ្ជាឲ្យសារពាង្គកាយ ឆ្លើយតបឲ្យបានសមស្របនឹងព័ត៌មាន ដែលទទួលបាន។
                            ឧទាហរណ៍: នៅពេលអ្នកឃ្លាន អ្នកត្រូវបរិភោគអាហារ។
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Process Flow */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">ដំណើរការនៃប្រព័ន្ធប្រសាទ</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">១</div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">រំញោចពីបរិស្ថាន</h4>
                                    <p className="text-sm text-gray-600">ព័ត៌មានពីខាងក្រៅ ឬខាងក្នុងសារពាង្គកាយ</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">២</div>
                                <div>
                                    <h4 className="font-semibold text-green-800">សរីរាង្គវិញ្ញាណទទួល</h4>
                                    <p className="text-sm text-gray-600">ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត ស្បែក</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">៣</div>
                                <div>
                                    <h4 className="font-semibold text-purple-800">បញ្ជូនទៅមជ្ឈមណ្ឌលប្រសាទ</h4>
                                    <p className="text-sm text-gray-600">តាមខួរឆ្អឹងខ្នង ទៅកាន់ខួរក្បាលដើម្បីបកប្រែព័ត៌មាន</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400"></div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg">
                                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">៤</div>
                                <div>
                                    <h4 className="font-semibold text-orange-800">បញ្ជាការឆ្លើយតប</h4>
                                    <p className="text-sm text-gray-600">ទៅកាន់សាច់ដុំ ក្រពេញ ឬសរីរាង្គផ្សេងៗ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>
        </>
    )
}