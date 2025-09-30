
import { MessageCircle, HelpCircle, Lightbulb } from 'lucide-react';

export default function PollinationProcess() {
    const qaData = [
        {
            question: "តើដំណើរលំអងគឺជាអ្វីទៅ?",
            answer: "វាជាការផ្ទេរគ្រាប់លំអងពីប្លោកលំអងទៅលើស្ទិចម៉ាត"
        },
        {
            question: "តើវាមានប៉ុន្មានប្រភេទ?",
            answer: "វាមាន2ប្រភេទគឺស្វ័យដំណើរលំអង និងដំណើរលំអងកាត់"
        },
        {
            question: "ចុះដំណើរលំអងឯងជាអ្វីវិញ?",
            answer: "ស្វ័យដំណើរលំអងអាចហៅម៉្យាងទៀតថាដំណើរលំអងឯង"
        },
        {
            question: "ស្វ័យដំណើរលំអង? តើវាជាអ្វី?",
            answer: "វាជាការផ្ទេរគ្រាប់លំអងពីប្លោកលំអងនៃកេសរឈ្មោលទៅលើស្ទិចម៉ាតនៃកេសរញីក្នុងផ្កាតែ លើដើមតែមួយ។"
        },
        {
            question: "ចុះបើផ្កាផ្សេងគ្នា លើដើមតែមួយ ឬដើមផ្សេងគ្នា តែប្រភេទដូចគ្នាវិញតើជាអ្វី? ",
            answer: "វាជាដំណើរលំអងកាត់"
        },
        {
            question: "និយមន័យដំណើរលំអងកាត់",
            answer: "វាជាការផ្ទេរគ្រាប់លំអងពីប្លោកលំអងនៃកេសរឈ្មោលទៅលើស្ទិចម៉ាតនៃកេសរញីក្នុងផ្កាផ្សេងគ្នា លើដើមតែមួយ​ ឬដើមផ្សេងគ្នា ក្នុងប្រភេទតែមួយ"
        },
        {
            question: "បើទៅដើមផ្សេងគ្នាដូច្នេះ តើដំណើរលំអងកាត់អាចប្រព្រឹត្តទៅបានតាមមធ្យោបាយណាខ្លះ?",
            answer: "វាប្រព្រឹត្តិទៅបានទៅតាម ទឹក ខ្យល់ សត្វល្អិត ឃ្មុំ មេអំបៅ បក្សីផ្សេងៗ"
        },
        {
            question: "តើមនុស្សអាចប្រព្រឹត្តដំណើរលំអងបានទេ?",
            answer: "ប្រាកដជាបាន គេហោដំណើរលំអងនោះជា ដំណើរលំអងសប្បនិម្មិត"
        },
        {
            question: "ដំណើរលំអងសប្បនិម្មិតអ្វី?",
            answer: "ជាការផ្ទេរគ្រាប់លំអងនៃផ្ការបស់រុក្ខជាតិមួយ ទៅដាក់លើស្ទិចម៉ាតនៃរុក្ខជាតិមួយទៀតតាមរយ:មនុស្ស"
        },
        {
            question: "ហេតុអ្វីបានជាមនុស្សធ្វើបែបនោះ?",
            answer: "គឺដើម្បីបង្កាត់បានរុក្ខជាតិដេលមានលក្ខណ:ពិសេសៗ ទៅតាមអ្វីដែលគេចង់បាន"
        }
    ];

    return (
        <>
            <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Lightbulb className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">ចុម!! ដំណើរលំអងហ្នឹងជាអ្វី?</h2>
                        <Lightbulb className="text-yellow-500" size={32} />
                    </div>
                    <p className="text-gray-600 text-lg">ចង់ចេះអត់? ស្រួលទេ!</p>
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
                                        សំណួរ {index + 1}: {qa.question}
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