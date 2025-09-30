import { MessageCircle, HelpCircle, Lightbulb } from 'lucide-react';

export default function Advantage() {
    const qaData = [
        {
            question: "តើរុក្ខជាតិអង់ស្យូស្ពែមមានសារ:សំខាន់អ្វីខ្លះសម្រាប់មនុស្សនិងសត្វ?",
            answer: "រុក្ខជាតិអង់ស្យូស្ពែមមានសា:សំខាន់ដល់មនុស្សនិងសត្វដូចជា ៖\n\n+ ជាប្រភពអាហារសម្រាប់មនុស្សនិងសត្វ\n+ ជាឲសថសម្រាប់ព្យាបាលជម្ងឺ\n+ ជាគ្រឿងសង្ហារឹម និងគ្រឿងសំណង់\n+ ជាប្រភពប្រេងសម្រាប់ប្រើប្រាស់\n+ ជាប្រភពផលិតក្រដាស់សម្រាប់ប្រើប្រាស់\n+ ជាប្រភពផលិតអំបោះ​ ឬក្រដាស់\n+ ជ័រកៅស៊ូយកទៅធ្វើកង់ឡានឬសម្ភារ:ផ្សេងៗ\n+ ប្រើប្រាស់ផ្សេងៗទៀតសម្រាប់តម្រូវការមនុស្ស"
        }
    ];

    return (
        <>
            <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">អត្ថប្រយោជន៍អង់ស្យូស្ពែម</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                    <p className="text-gray-600 text-lg">ស្វែងយល់ពីអត្ថប្រយោជន៍របស់រុក្ខជាតិអង់ស្យូស្ពែម</p>
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
                                        សំណួរ 44: {qa.question}
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