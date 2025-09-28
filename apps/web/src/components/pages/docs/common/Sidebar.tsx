'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { curriculum } from '@/curriculum';

interface SidebarProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
}

export default function Sidebar({
    currentGrade = 'grade-12',
    currentSubject = 'math',
    currentLesson = 'limits',
    currentTopic = 'zero-over-zero'
}: SidebarProps) {
    const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Initialize expanded lessons based on current lesson
    useEffect(() => {
        const gradeData = curriculum.find(g => g.grade === currentGrade);
        if (!gradeData) return;

        const subjectData = gradeData.content.find(s => s.subject === currentSubject);
        if (!subjectData) return;

        // Initialize all lessons as expanded, with current lesson highlighted
        const expandedState = subjectData.lessons.reduce((acc, lesson) => {
            acc[lesson.lesson] = true; // All lessons expanded
            return acc;
        }, {} as Record<string, boolean>);

        setExpandedLessons(expandedState);
    }, [currentGrade, currentSubject, currentLesson]);

    // Scroll to current lesson on mount only
    useEffect(() => {
        if (sidebarRef.current && currentLesson) {
            // Small delay to ensure DOM is fully rendered
            setTimeout(() => {
                // Find the lesson button element
                const lessonButton = sidebarRef.current?.querySelector(`[data-lesson="${currentLesson}"]`) as HTMLElement;

                if (lessonButton && sidebarRef.current) {
                    // Scroll the lesson to the top of the sidebar
                    const lessonTop = lessonButton.offsetTop;

                    sidebarRef.current.scrollTo({
                        top: lessonTop - 20, // 20px offset from top for better visibility
                    });
                }
            }, 100);
        }
    }, [currentLesson]); // Scroll when lesson changes

    // Save scroll position before navigation
    const handleLinkClick = () => {
        if (sidebarRef.current) {
            localStorage.setItem('sidebarScrollPosition', sidebarRef.current.scrollTop.toString());
        }
    };

    const toggleLesson = (e: React.MouseEvent, lessonId: string) => {
        e.preventDefault(); // Prevent scroll to top
        setExpandedLessons(prev => ({
            ...prev,
            [lessonId]: !prev[lessonId]
        }));
    };

    // Find the current grade and subject data
    const gradeData = curriculum.find(g => g.grade === currentGrade);
    if (!gradeData) return null;

    const subjectData = gradeData.content.find(s => s.subject === currentSubject);
    if (!subjectData) return null;

    return (
        <div
            ref={sidebarRef}
            className="hidden lg:block w-70 bg-white/95 backdrop-blur-md border-r border-indigo-500/10 overflow-y-auto fixed h-[calc(100vh-56px)] top-28 z-40 shadow-lg scrollbar-hide"
        >
            <div className="pb-12"> {/* Added bottom padding to ensure last lesson is visible */}
                <div className="p-4">
                    <div className="space-y-4">
                        {subjectData.lessons.map((lessonData) => {
                            const Icon = lessonData.icon;
                            const isExpanded = expandedLessons[lessonData.lesson];
                            const isActive = currentLesson === lessonData.lesson;

                            return (
                                <div key={lessonData.lesson} className="space-y-2">
                                    {/* Lesson Header */}
                                    <button
                                        data-lesson={lessonData.lesson}
                                        onClick={(e) => toggleLesson(e, lessonData.lesson)}
                                        className={`w-full flex items-center justify-between p-4 rounded-full shadow-lg shadow-indigo-500/15 ${isActive
                                            ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-500 '
                                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-500'} />
                                            <span className="font-semibold text-base">
                                                {lessonData.title}
                                            </span>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronDown size={18} className={isActive ? 'text-indigo-500' : 'text-gray-500'} />
                                        ) : (
                                            <ChevronRight size={18} className={isActive ? 'text-indigo-500' : 'text-gray-500'} />
                                        )}
                                    </button>

                                    {/* Topics */}
                                    {isExpanded && (
                                        <div className="ml-4 space-y-2">
                                            {lessonData.topics.map((topicData, index) => {
                                                const isTopicActive = currentTopic === topicData.englishTitle && lessonData.lesson === currentLesson;
                                                return (
                                                    <Link
                                                        key={index}
                                                        href={`/docs/${currentGrade}/${currentSubject}/${lessonData.lesson}/${topicData.englishTitle}`}
                                                        onClick={handleLinkClick}
                                                        className={`block px-4 py-3 rounded-full text-sm font-medium ${isTopicActive
                                                            ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                                                            : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
                                                            }`}
                                                    >
                                                        {topicData.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}