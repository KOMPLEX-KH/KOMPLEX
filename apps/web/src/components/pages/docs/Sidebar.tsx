'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Grade } from '@core-types/docs/curriculum';
import { ICON_MAP } from '@/utils/icon';
import SidebarSkeleton from './SidebarSkeleton';
import { feedCurriculumsService } from '@/services';

interface SidebarProps {
    currentGrade?: { id: number };
    currentSubject?: { id: number };
    currentLesson?: { id: number };
    currentTopic?: { id: number };
}

export default function Sidebar({
    currentGrade,
    currentSubject,
    currentLesson,
    currentTopic,
}: SidebarProps) {
    const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
    const sidebarRef = useRef<HTMLDivElement>(null);

    const [curriculum, setCurriculum] = useState<Grade[]>(
        () => {
            const stored = localStorage.getItem("curriculum");
            return stored ? JSON.parse(stored) : [];
        }
    );

    // Fallback fetch if curriculum is empty (shouldn't happen with layout.tsx)
    useEffect(() => {
        if (curriculum.length === 0) {
            const fetchCurriculum = async () => {
                try {
                    const curriculumData = await feedCurriculumsService.getCurriculum();
                    setCurriculum(curriculumData);
                    localStorage.setItem('curriculum', JSON.stringify(curriculumData));
                } catch (error) {
                    console.error('Error fetching curriculum:', error);
                }
            };
            fetchCurriculum();
        }
    }, [curriculum.length]);
    // Initialize expanded lessons based on current lesson
    useEffect(() => {
        if (!currentGrade || !currentSubject) return;

        const gradeData = curriculum.find(g => g.id === currentGrade.id);
        if (!gradeData) return;

        const subjectData = gradeData.subjects.find(s => s.id === currentSubject.id);
        if (!subjectData) return;

        // Initialize all lessons as expanded, with current lesson highlighted
        const expandedState = subjectData.lessons.reduce((acc, lesson) => {
            acc[lesson.id] = true; // All lessons expanded
            return acc;
        }, {} as Record<string, boolean>);

        setExpandedLessons(expandedState);
    }, [currentGrade, currentSubject, currentLesson, curriculum]);

    // Scroll to current lesson on mount only
    useEffect(() => {
        if (sidebarRef.current && currentLesson && curriculum.length > 0) {
            // Small delay to ensure DOM is fully rendered
            setTimeout(() => {
                // Find the lesson button element
                const lessonButton = sidebarRef.current?.querySelector(`[data-lesson="${currentLesson.id}"]`) as HTMLElement;

                if (lessonButton && sidebarRef.current) {
                    // Scroll the lesson to the top of the sidebar
                    const lessonTop = lessonButton.offsetTop;

                    sidebarRef.current.scrollTo({
                        top: lessonTop - 20, // 20px offset from top for better visibility
                    });
                }
            }, 100);
        }
    }, [currentLesson, curriculum]); // Scroll when lesson changes

    // Save scroll position before navigation
    const handleLinkClick = () => {
        if (sidebarRef.current) {
            localStorage.setItem('sidebarScrollPosition', sidebarRef.current.scrollTop.toString());
        }
    };

    const toggleLesson = (e: React.MouseEvent, lessonId: number) => {
        e.preventDefault(); // Prevent scroll to top
        setExpandedLessons(prev => ({
            ...prev,
            [lessonId]: !prev[lessonId]
        }));
    };

    // Find the current grade and subject data
    if (!currentGrade || !currentSubject || !currentLesson || !currentTopic || curriculum.length === 0) {
        return <SidebarSkeleton />;
    }

    const gradeData = curriculum.find(g => g.id === currentGrade.id);
    if (!gradeData) return <SidebarSkeleton />;

    const subjectData = gradeData.subjects.find(s => s.id === currentSubject.id);
    if (!subjectData) return <SidebarSkeleton />;



    return (
        <div
            ref={sidebarRef}
            className="hidden lg:block w-70 bg-white/95 backdrop-blur-md border-r border-indigo-500/10 overflow-y-auto fixed h-[calc(100vh-56px)] top-28 z-40 shadow-lg scrollbar-hide"
        >
            <div className="pb-12"> {/* Added bottom padding to ensure last lesson is visible */}
                <div className="p-4">
                    <div className="space-y-4">
                        {subjectData.lessons.map((lessonData) => {
                            const Icon = ICON_MAP[lessonData.icon];
                            const isExpanded = expandedLessons[lessonData.id];
                            const isActive = currentLesson?.id === lessonData.id;

                            return (
                                <div key={lessonData.id} className="space-y-2">
                                    {/* Lesson Header */}
                                    <button
                                        data-lesson={lessonData.id}
                                        onClick={(e) => toggleLesson(e, lessonData.id)}
                                        className={`w-full flex items-center justify-between p-4 rounded-full shadow-lg shadow-indigo-500/15 ${isActive
                                            ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-500 '
                                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className='w-5 h-5 ' />
                                            <span className="font-semibold text-base">
                                                {lessonData.name}
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
                                                const isTopicActive = currentTopic?.id === topicData.id && currentLesson?.id === lessonData.id;
                                                return (
                                                    <Link
                                                        key={index}
                                                        href={`/docs/${currentGrade?.id}/${currentSubject?.id}/${lessonData.id}/${topicData.id}`}
                                                        onClick={handleLinkClick}
                                                        className={`block px-4 py-3 rounded-full text-sm font-medium ${isTopicActive
                                                            ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                                                            : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/60'
                                                            }`}
                                                    >
                                                        {topicData.name}
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