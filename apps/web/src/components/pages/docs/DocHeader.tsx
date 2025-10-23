'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, Check } from 'lucide-react';
import { Grade } from '@/types/docs/curriculum';
import { ICON_MAP } from '@/utils/icon';
import { feedCurriculumsService } from '@/services';

interface DocHeaderProps {
    currentGrade?: { id: number };
    currentSubject?: { id: number };
    currentLesson?: { id: number };
    currentTopic?: { id: number };
}

export default function DocHeader({
    currentGrade,
    currentSubject,
    currentLesson,
    currentTopic
}: DocHeaderProps) {

    const topicsScrollRef = useRef<HTMLDivElement>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [curriculum, setCurriculum] = useState<Grade[]>(
        () => {
            if (typeof window !== 'undefined') {
                const stored = localStorage.getItem("curriculum");
                return stored ? JSON.parse(stored) : [];
            }
            return [];
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

    // Find the current grade and subject data
    const gradeData = curriculum.find(g => g.id === currentGrade?.id);

    // Scroll to selected topic on mount and when topic changes
    useEffect(() => {
        if (topicsScrollRef.current && currentTopic && gradeData) {
            const container = topicsScrollRef.current;
            const activeTopic = container.querySelector('[data-is-active="true"]') as HTMLElement;

            if (activeTopic) {
                // Scroll to position the active topic with some padding from the left
                const topicLeft = activeTopic.offsetLeft;

                // Position the topic with some left padding (not at the very edge)
                const scrollLeft = Math.max(0, topicLeft - 140);

                container.scrollTo({
                    left: scrollLeft,
                });
            }
        }
    }, [currentTopic, currentLesson, currentSubject, currentGrade, gradeData]);

    // Handle scroll direction detection for mobile header hiding
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past initial 100px
                setIsScrollingDown(true);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsScrollingDown(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    if (!gradeData || !currentGrade || !currentSubject || !currentLesson || !currentTopic || curriculum.length === 0) return null;

    const subjects = gradeData.subjects;
    const grades = curriculum.map(g => ({ value: g.id, label: g.name }));

    // Get current selections
    const currentGradeData = grades.find(g => g.value === gradeData.id);
    const currentSubjectData = subjects.find(s => s.id === currentSubject.id);
    const currentLessonData = currentSubjectData?.lessons.find(l => l.id === currentLesson.id);

    const handleChangeGrade = (grade: number) => {
        const gradeData = curriculum.find(g => g.id === grade);
        if (gradeData) {
            const subjects = gradeData.subjects;
            const firstSubject = subjects[0];
            const firstLesson = firstSubject.lessons[0];
            const firstTopic = firstLesson.topics[0];
            window.location.href = `/docs/${gradeData.id}/${firstSubject.id}/${firstLesson.id}/${firstTopic.id}`;
        }
    }

    return (
        <>
            {/* Desktop Subject Header */}
            <div className="hidden lg:block fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            {subjects.map((subject) => {
                                const Icon = ICON_MAP[subject.icon];
                                const isActive = currentSubject.id === subject.id;
                                return (
                                    <Link
                                        key={subject.id}
                                        href={`/docs/${gradeData.id}/${subject.id}/${subject.lessons[0].id}/${subject.lessons[0].topics[0].id}`}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {subject.name}
                                    </Link>
                                );
                            })}
                        </div>
                        {/* Grade select for desktop */}
                        <div className="hidden lg:flex items-center bg-indigo-50/50 p-1 gap-4 rounded-full">
                            {grades.map((grade) => {
                                const isActive = gradeData.id === grade.value;
                                return (
                                    <button
                                        key={grade.value}
                                        onClick={() => handleChangeGrade(grade.value)}
                                        className={`flex items-center gap-2 p-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 backdrop-blur-sm ${isActive
                                            ? 'text-indigo-600 bg-indigo-100/80 border border-indigo-500/30 shadow-sm'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80 hover:border-indigo-500/20 border border-transparent'
                                            }`}
                                        // Add focus:outline-none
                                        tabIndex={0}
                                        // Optionally, you can add type="button" for clarity
                                        type="button"
                                    >
                                        <span className="focus:outline-none">{grade.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Grade Dropdown for mobile */}
                        <div className="flex lg:hidden items-center gap-2">
                            <Listbox value={currentGradeData} onChange={(grade) => {
                                if (grade) {
                                    handleChangeGrade(grade.value);
                                }
                            }}>
                                <div className="relative">
                                    <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-full px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-indigo-500 focus:outline-none  flex items-center justify-between  min-w-[120px] ">
                                        <span>{currentGradeData?.label}</span>
                                        <ChevronDown size={16} className="text-gray-500" />
                                    </Listbox.Button>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Listbox.Options className="absolute right-0 mt-2 w-48 bg-white rounded-full border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto">
                                            {grades.map((grade) => (
                                                <Listbox.Option
                                                    key={grade.value}
                                                    value={grade}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-3 px-4 text-sm ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                        }`
                                                    }
                                                >
                                                    {({ selected }) => (
                                                        <div className="flex items-center justify-between">
                                                            <span>{grade.label}</span>
                                                            {selected && <Check size={16} className="text-indigo-600" />}
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Subject Navigation */}
            <div className={`lg:hidden fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'
                }`}>
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {subjects.map((subject) => {
                                const Icon = ICON_MAP[subject.icon];
                                const isActive = currentSubject.id === subject.id;
                                return (
                                    <Link
                                        key={subject.id}
                                        href={`/docs/${gradeData.id}/${subject.id}/${subject.lessons[0].id}/${subject.lessons[0].topics[0].id}`}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium text-xs whitespace-nowrap flex-shrink-0 ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {subject.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Grade Dropdown */}
                        <Listbox value={currentGradeData} onChange={(grade) => {
                            if (grade) {
                                const targetGrade = curriculum.find(g => g.id === grade.value);
                                if (targetGrade) {
                                    window.location.href = `/docs/${targetGrade.id}/${targetGrade.subjects[0].id}/${targetGrade.subjects[0].lessons[0].id}/${targetGrade.subjects[0].lessons[0].topics[0].id}`;
                                }
                            }
                        }}>
                            <div className="relative">
                                <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-full px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm  focus:outline-none  flex items-center justify-between  max-w-[80px] min-w-[60px] ">
                                    <span className="truncate">{currentGradeData?.label}</span>
                                    <ChevronDown size={14} className="text-gray-500 flex-shrink-0" />
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute right-0 mt-2 w-40 bg-white/95 rounded-3xl border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto scrollbar-hide p-1.5 focus:outline-none">
                                        {grades.map((grade) => (
                                            <Listbox.Option
                                                key={grade.value}
                                                value={grade}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 px-2 text-xs rounded-full ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex items-center justify-between">
                                                        <span>{grade.label}</span>
                                                        {selected && <Check size={14} className="text-indigo-600" />}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>

            {/* Mobile Content Navigation */}
            <div className={`lg:hidden fixed w-full top-27 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'
                }`}>
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-start gap-3">
                        {/* Mobile Lesson Dropdown */}
                        <Listbox value={currentLessonData} onChange={(lesson) => {
                            if (lesson) {
                                window.location.href = `/docs/${gradeData.id}/${currentSubject.id}/${lesson.id}/${lesson.topics[0].id}`;
                            }
                        }}>
                            <div className="relative">
                                <Listbox.Button className="bg-white/95 border border-indigo-500/20 rounded-full px-2 py-2 text-xs font-medium text-gray-700 cursor-pointer transition-all duration-300 backdrop-blur-sm  focus:outline-none  flex items-center justify-between  max-w-[80px] min-w-[60px] ">
                                    <span className="truncate">{currentLessonData?.name}</span>
                                    <ChevronDown size={14} className="text-gray-500 flex-shrink-0" />
                                </Listbox.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options className="absolute left-0 mt-2 w-48 bg-white/95 rounded-3xl border border-indigo-500/20 shadow-lg backdrop-blur-sm z-50 max-h-60 overflow-auto scrollbar-hide p-1.5 focus:outline-none">
                                        {subjects.find(s => s.id === currentSubject.id)?.lessons.map(lesson => (
                                            <Listbox.Option
                                                key={lesson.id}
                                                value={lesson}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none py-2 px-2 text-xs rounded-full ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex items-center justify-between">
                                                        <span>{lesson.name}</span>
                                                        {selected && <Check size={14} className="text-indigo-600" />}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        {/* Mobile Topics */}
                        <div ref={topicsScrollRef} className="flex items-center gap-2 overflow-x-auto scrollbar-hide" id="topics-scroll-container">
                            {subjects.find(s => s.id === currentSubject.id)?.lessons.find(l => l.id === currentLesson.id)?.topics.map((topic, index) => {
                                const isActive = currentTopic.id === topic.id;
                                return (
                                    <Link
                                        key={topic.id}
                                        href={`/docs/${gradeData.id}/${currentSubject.id}/${currentLesson.id}/${topic.id}`}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 font-medium text-xs whitespace-nowrap flex-shrink-0 ${isActive
                                            ? 'text-indigo-600 bg-indigo-50/90 border border-indigo-500/20 shadow-sm'
                                            : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-indigo-500/10 hover:text-indigo-600 hover:bg-indigo-50/90'
                                            }`}
                                        data-topic-index={index}
                                        data-is-active={isActive}
                                    >
                                        {topic.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}