import { MessageCircle, HelpCircle, Lightbulb } from 'lucide-react';

export default function Comparision() {
    const qaData = [
        {
            question: "តើអង់ស្យូស្ពែមជាអ្វី?",
            answer: " អង់ស្យូស្ពែម គឺរុក្ខជាតិមានគ្រាប់​ដែលមានសំបកការពារពីខាងក្រៅ"
        },
        {
            question: "តើរុក្ខជាតិអង់ស្យូស្ពែមមានប៉ុន្មានប្រភេទ?អ្វីខ្លះ?",
            answer: "រុក្ខជាតិអង់ស្យូស្ពែមមាន2ប្រភេទ គឺម៉ូណូកូទីលេដូន និងឌីកូទីលេដូន"
        },
        {
            question: "ហេតុអ្វីបានជាគេហៅរុក្ខជាតិម៉ូណូកូទីលេដូន?",
            answer: "ព្រោះវាមានកូទីលេដុងមួយ ឬក្លែបគ្រាប់1"
        },
        {
            question: "ហេតុអ្វីបានជាគេហៅរុក្ខជាតិឌីកូទីលេដូន?",
            answer: "ព្រោះវាមានកូទីលេដុង2 ឬក្លែបគ្រាប់2"
        },
        {
            question: "តើសរីរាង្គភេទរបស់អង់ស្យួស្ពែមជាអ្វី?",
            answer: "សរីរាង្គភេទរបស់អង់ស្យួស្ពែមជាផ្កា"
        },
        {
            question: "តើផ្នែកផ្សេងៗនៃផ្កាមានអ្វីខ្លះ?",
            answer: "ផ្នែកសំខាន់ៗរបស់ផ្កាមាន ត្របកផ្កា ស្រទាប់ផ្កា កញ្ចុំកេសរញី និងកញ្ចុំកេសរឈ្មោល"
        },  
        {
            question: "តើប្រៀបធៀបរុក្ខជាតិម៉ុណូកូទីលេដូន និងឌីកូទីលេដូន។",
            answer: <div className="text-sm sm:text-base">
                <p className="mb-2">ចម្លើយ: ប្រៀបធៀបរុក្ខជាតិម៉ុណូកូទីលេដូន និងឌីកូទីលេដូន:</p> 
                <div className="mb-3">
                    <p className="font-semibold text-green-700 mb-2">+ លក្ខណៈដូចគ្នា:</p>
                    <div className="ml-3 space-y-1">
                        <p>- ជាប្រភេទរុក្ខជាតិអង់ស្យូស្ពែម</p>
                        <p>- មានផ្កាជាសរីរាង្គភេទនិងគ្រាប់មានសំបកការពារពីខាងក្រៅ</p>
                    </div>  
                </div>
                
                <div className="mb-3">
                    <p className="font-semibold text-red-700 mb-2">+ លក្ខណៈខុសគ្នា:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                            <div className="font-bold text-blue-700 text-center p-2 bg-blue-50 rounded mb-3">ម៉ូណូកូទីលេដូន</div>
                            <div className="space-y-2">
                                <p className="text-xs sm:text-sm">• គ្រាប់មានកូទីលេដុង១</p>
                                <p className="text-xs sm:text-sm">• ស្លឹកមានទ្រនុងស្រប</p>
                                <p className="text-xs sm:text-sm">• ផ្កាមាន៣ស្រទាប់ឬពហុគុណនឹង៣</p>
                                <p className="text-xs sm:text-sm">• ដើមមានបាច់សរសៃនាំស្ថិតនៅរាយប៉ាយ</p>
                                <p className="text-xs sm:text-sm">• ឬសជាឬសស្ញែ</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <div className="font-bold text-blue-700 text-center p-2 bg-blue-50 rounded mb-3">ឌីកូទីលេដូន</div>
                            <div className="space-y-2">
                                <p className="text-xs sm:text-sm">• គ្រាប់មានកូទីលេដុង២</p>
                                <p className="text-xs sm:text-sm">• ស្លឹកមានទ្រនុងបែកខ្នែង</p>
                                <p className="text-xs sm:text-sm">• ផ្កាមាន៤ ឬ ៥ ស្រទាប់</p>
                                <p className="text-xs sm:text-sm">• ដើមមានបាច់សរសៃនាំនៅជារង្វង់</p>
                                <p className="text-xs sm:text-sm">• ឬសជាឬសកែវ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    ];

    return (
        <>
            <div className="space-y-4 sm:space-y-6 p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-2">
                        <Lightbulb className="text-yellow-500 flex-shrink-0" size={24} />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">តើរុក្ខជាតិអង់ស្យូស្ពែម មានប៉ុន្មានប្រភេទ?</h2>
                        <Lightbulb className="text-yellow-500 flex-shrink-0" size={24} />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">ហើយវាខុសគ្នាដូចម្ដេចទៅ?</p>
                </div>

                {/* Q&A Cards */}
                <div className="grid gap-4 sm:gap-6">
                    {qaData.map((qa, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            {/* Question */}
                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 sm:p-4 border-b border-gray-100">
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <HelpCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-800">
                                        សំណួរ {index + 1}: {qa.question}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Answer */}
                            <div className="p-3 sm:p-4 bg-white">
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <MessageCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                    <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                        {typeof qa.answer === 'string' ? qa.answer.split('\n').map((line: string, lineIndex: number) => (
                                            <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : ""}>
                                                {line}
                                            </p>
                                        )) : qa.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}