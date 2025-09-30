'use client';

import React from 'react';
import { FileText, BookOpen, Bot } from 'lucide-react';


export interface ExamQuestionBoxProps {
    // PDF URLs
    questionPdfUrl: string;

    // Flexible answer - either PDF URL or structured data
    answerPdfUrl: string;
}

export default function ExamQuestionBox({
    questionPdfUrl,
    answerPdfUrl,
}: ExamQuestionBoxProps) {

    const hasAnswerContent = answerPdfUrl;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            {/* Questions PDF Box */}
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <FileText size={20} className="text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">វិញ្ញាសា</h3>
                </div>

                <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <iframe
                        src={`${questionPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                        className="w-full h-[800px] aspect-[9/16] border-0"
                        title="Question PDF"
                        onLoad={() => { }}
                    />


                </div>
            </div>

            {/* Answers Box - Flexible Content */}
            <div className="bg-indigo-50/80 border border-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen size={20} className="text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">ដំណោះស្រាយ</h3>
                </div>

                {answerPdfUrl ? (
                    // PDF Answer with iframe
                    <div className="bg-white rounded-lg p-2 border border-gray-200">
                        <iframe
                            src={`${answerPdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=30&view=FitH`}
                            className="w-full h-[800px] aspect-[9/16] border-0"
                            title="Answer PDF"
                            onLoad={() => { }}
                        />
                    </div>
                ) : (
                    // No answer content
                    <div className="text-center text-gray-500 py-8 bg-white rounded-3xl border border-gray-200">
                        គ្មានចម្លើយ
                    </div>
                )}
            </div>

            {/* Action Buttons - Full Width Below */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 justify-center items-center">

                {/* AI Follow-up Button */}
                <button
                    onClick={() => { }}
                    className="inline-flex items-center gap-2 rounded-3xl bg-indigo-500/10 border border-indigo-500 px-4 py-3 text-sm font-semibold text-indigo-500 shadow-sm hover:bg-indigo-500/10 transition-all duration-200"
                >
                    <Bot size={18} />
                    ផ្ទៀងផ្ទាត់ជាមួយ AI
                </button>
            </div>
        </div>
    );
}
