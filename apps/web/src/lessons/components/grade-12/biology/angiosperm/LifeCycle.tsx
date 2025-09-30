import { MessageCircle, HelpCircle, Lightbulb } from 'lucide-react';

export default function LifeCycle() {
    const qaData = [
        {
            question: "តើវដ្ដជីវិតរបស់រុក្ខជាតិមានផ្កាមានប៉ុន្មានដំណាក់កាល?អ្វីខ្លះ?",
            answer: " វដ្ដជីវិតរបស់រុក្ខជាតិមានផ្កាមាន 2ដំណាក់កាលគឺ: ដំណាក់ផ្កា និងដំណាក់គ្រាប់ "
        },
        {
            question: "តើដំណាក់ផ្កាមានក្រូម៉ូសូមចំនួនប៉ុន្មាន?",
            answer: " នៅដំណាក់ផ្កាមានក្រូម៉ូសូមស្មើនឹង 2n ក្រូម៉ូសូម"
        },
        {
            question: "តើដំណាក់គ្រាប់មានក្រូម៉ូសូមចំនួនប៉ុន្មាន?",
            answer: "នៅដំណាក់គ្រាប់ក្រូម៉ូសូមមានអាប្លូអ៊ីត n"
        }
    ];

    return (
        <>
            <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">វដ្តជីវិតអង់ស្យូស្ពែម</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                    <p className="text-gray-600 text-lg">ស្វែងយល់ពីវដ្តជីវិតរបស់រុក្ខជាតិអង់ស្យូស្ពែម</p>
                </div>

                {/* Q&A Cards */}
                <div className="grid gap-6">
                    {qaData.map((qa, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            {/* Question */}
                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 border-b border-gray-100">
                                <div className="flex items-start gap-3">
                                    <HelpCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                                    <h3 className="text-lg font-semibold text-blue-800">
                                        សំណួរ {index +1}: {qa.question}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Answer */}
                            <div className="p-4 bg-white">
                                <div className="flex items-start gap-3">
                                    <MessageCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                                    <div className="text-gray-700 leading-relaxed">
                                        {qa.answer.split('\n').map((line, lineIndex) => (
                                            <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : ""}>
                                                {line}
                                            </p>
                                        ))}
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