'use client'

import React from 'react';
import { Target, Clock } from 'lucide-react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/navigation';

interface Topic {
    id: string;
    name: string;
    questionCount: number;
    estimatedTime: string;
    userProgress: number;
    attempts: number;
}

interface PracticeCardProps {
    topic: Topic;
    subjectId: string;
    subjectColors: {
        bg: string;
        border: string;
    };
}

export default function PracticeCard({ topic, subjectColors }: PracticeCardProps) {
    const { user, openLoginModal } = useAuth();
    const router = useRouter();
    const isDisabled = topic.questionCount <= 1;

    const handleCardClick = () => {
        if (!user) {
            openLoginModal();
        } else {
            router.push(`/exercises/${topic.id}`);
        }
    };

    const CardContent = () => (
        <div className={`${subjectColors.bg} border-2 ${subjectColors.border} rounded-3xl lg:p-6 p-4 transition-all group ${isDisabled
            ? ' cursor-not-allowed'
            : 'hover:shadow-md hover:scale-101'
            }`}>
            <div className="mb-4">
                <h4 className={`text-lg font-semibold transition-colors mb-2 ${isDisabled ? 'text-gray-500' : 'text-gray-900 group-hover:text-indigo-600'
                    }`}>
                    {topic.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Target size={16} />
                    <span>{topic.questionCount} សំណួរ</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{topic.estimatedTime} នាទី</span>
                </div>
            </div>

            {/* Progress Section */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                {topic.attempts > 0 ? (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">ពិន្ទុខ្ពស់បំផុត</span>
                        </div>
                        <div className="rounded-full h-2 flex items-center justify-between relative w-full gap-4">
                            <div className='relative w-full'>
                                <div className="absolute left-0 bg-gray-200 h-2 rounded-full transition-all duration-300" style={{ width: '100%' }}></div>
                                <div
                                    className="bg-indigo-500 h-2 rounded-full transition-all duration-300 text-right pr-2 absolute"
                                    style={{ width: `${topic.userProgress}%` }}
                                ></div>
                            </div>
                            <span className="font-semibold text-xs text-indigo-500 mt-1.5">{topic.userProgress}%</span>
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                            បានព្យាយាម {topic.attempts} ដង
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <div className="text-sm text-gray-500">មិនទាន់បានចាប់ផ្តើម</div>
                    </div>
                )}
            </div>
        </div>
    );

    return isDisabled ? (
        <div className="relative">
            <CardContent />
            <div className="absolute inset-0 bg-gray-400/50  rounded-3xl flex items-center justify-center">
                <span className=" font-medium text-gray-600 bg-indigo-50 border border-indigo-500 px-3 py-5 rounded-full shadow-sm">
                    នឹងមកជូននូវឆាប់នេះ
                </span>
            </div>
        </div>
    ) : (
        <div onClick={handleCardClick} className="cursor-pointer">
            <CardContent />
        </div>
    );
}
