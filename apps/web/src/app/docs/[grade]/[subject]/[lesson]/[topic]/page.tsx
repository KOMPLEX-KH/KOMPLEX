'use client';

import DocHeader from "@/components/pages/docs/DocHeader";
import Sidebar from "@/components/pages/docs/Sidebar";
import TopicWrapper from "@/components/pages/docs/TopicWrapper";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Grade } from "@/types/docs/curriculum";
import { deserializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import ComingSoon from "@/components/pages/docs/ComingSoon";
import Skeleton from "@/components/pages/docs/Skeleton";
import { feedCurriculumsService } from "@/services";
import { DoTopicExercise } from "@/components/pages/docs/boxes/DoTopicExercise";


type Params = { grade: string; subject: string; lesson: string; topic: string };

// Get navigation data from curriculum
const getNavigation = (curriculum: Grade[], params: Params) => {
    const grade = curriculum.find(g => g.id === parseInt(params.grade));
    const subject = grade?.subjects.find(s => s.id === parseInt(params.subject));
    const lesson = subject?.lessons.find(l => l.id === parseInt(params.lesson));
    const topic = lesson?.topics.find(t => t.id === parseInt(params.topic));

    if (!topic || !lesson || !subject || !grade) return { prev: null, next: null };

    const currentIndex = lesson.topics.findIndex(t => t.id === topic.id);

    const prev = currentIndex > 0 ? {
        title: lesson.topics[currentIndex - 1].name,
        link: `/docs/${grade.id}/${subject.id}/${lesson.id}/${lesson.topics[currentIndex - 1].id}`
    } : null;

    const next = currentIndex < lesson.topics.length - 1 ? {
        title: lesson.topics[currentIndex + 1].name,
        link: `/docs/${grade.id}/${subject.id}/${lesson.id}/${lesson.topics[currentIndex + 1].id}`
    } : null;

    return { prev, next };
};

export default function Page() {
    const params = useParams() as Params;

    // Topic data state
    const [topicComponent, setTopicComponent] = useState<string | null>(null);
    const [navigation, setNavigation] = useState<{ prev: { title: string; link: string } | null; next: { title: string; link: string } | null } | null>(null);
    const [isLoadingTopic, setIsLoadingTopic] = useState(true);
    const [isExercise, setIsExercise] = useState(false);
    // Curriculum state (for sidebar only) - initialized from localStorage
    const [curriculum, setCurriculum] = useState<Grade[]>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem("curriculum");
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });

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
    }, [curriculum.length, params.grade, params.subject, params.lesson, params.topic]);


    // Fetch topic component (just the JSON string)
    useEffect(() => {
        const fetchTopicComponent = async () => {
            try {
                setIsLoadingTopic(true);
                const topicData = await feedCurriculumsService.getTopicComponent(params.topic);
                setTopicComponent(topicData ? JSON.stringify(topicData.component) : null);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                // If we get an error, handle 404 or others properly for redirect
                if (error.response && error.response.status === 404) {
                    window.location.href = "/not-found";
                } else {
                    console.error('Error fetching topic component:', error);
                    window.location.href = "/not-found";
                }
            } finally {
                setIsLoadingTopic(false);
            }
        };

        if (curriculum.find(g => g.id === parseInt(params.grade))?.subjects.find(s => s.id === parseInt(params.subject))?.lessons.find(l => l.id === parseInt(params.lesson))?.topics.find(t => t.id === parseInt(params.topic))?.exerciseId) {
            setIsExercise(true);
            return;
        }

        fetchTopicComponent();
    }, [params.grade, params.subject, params.lesson, params.topic]);

    // Update navigation when curriculum or params change
    useEffect(() => {
        if (curriculum.length > 0) {
            const nav = getNavigation(curriculum, params);
            setNavigation(nav);
        }
    }, [curriculum, params]);

    // Get topic info from curriculum
    const getTopicInfo = () => {
        const grade = curriculum.find(g => g.id === parseInt(params.grade));
        const subject = grade?.subjects.find(s => s.id === parseInt(params.subject));
        const lesson = subject?.lessons.find(l => l.id === parseInt(params.lesson));
        const topic = lesson?.topics.find(t => t.id === parseInt(params.topic));

        return { grade, subject, lesson, topic };
    };

    // Show loading while topic is loading
    if (isLoadingTopic) {
        return (
            <div className="flex bg-gray-50 min-h-screen">
                <Sidebar
                    currentGrade={curriculum.length > 0 ? { id: parseInt(params.grade) } : undefined}
                    currentSubject={curriculum.length > 0 ? { id: parseInt(params.subject) } : undefined}
                    currentLesson={curriculum.length > 0 ? { id: parseInt(params.lesson) } : undefined}
                    currentTopic={curriculum.length > 0 ? { id: parseInt(params.topic) } : undefined}
                />
                <DocHeader
                    currentGrade={{ id: parseInt(params.grade) }}
                    currentSubject={{ id: parseInt(params.subject) }}
                    currentLesson={{ id: parseInt(params.lesson) }}
                    currentTopic={{ id: parseInt(params.topic) }}
                />
                <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
                    <TopicWrapper
                        title={getTopicInfo().topic?.name}
                        prev={navigation?.prev}
                        next={navigation?.next}
                    >
                        {!isExercise ? (
                            <Skeleton />
                        ) : (
                            <DoTopicExercise
                                title={getTopicInfo().topic?.name}
                                exerciseId={getTopicInfo().topic?.exerciseId}
                            />
                        )}
                    </TopicWrapper>
                </div>

            </div>
        );
    }

    // Show not found if no topic component
    if (!topicComponent || JSON.parse(topicComponent).length === 0) {
        console.log("No topic component");
        return (
            <div className="flex bg-gray-50 min-h-screen">
                <Sidebar
                    currentGrade={{ id: parseInt(params.grade) }}
                    currentSubject={{ id: parseInt(params.subject) }}
                    currentLesson={{ id: parseInt(params.lesson) }}
                    currentTopic={{ id: parseInt(params.topic) }}
                />
                <DocHeader
                    currentGrade={{ id: parseInt(params.grade) }}
                    currentSubject={{ id: parseInt(params.subject) }}
                    currentLesson={{ id: parseInt(params.lesson) }}
                    currentTopic={{ id: parseInt(params.topic) }}
                />
                <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
                    <TopicWrapper
                        title={getTopicInfo().topic?.name}
                        prev={navigation?.prev}
                        next={navigation?.next}
                    >
                        <ComingSoon />
                    </TopicWrapper>
                </div>
            </div>
        )
    }

    const Component = topicComponent ? deserializeTopicContentV3(topicComponent as string) : null;

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar
                currentGrade={{ id: parseInt(params.grade) }}
                currentSubject={{ id: parseInt(params.subject) }}
                currentLesson={{ id: parseInt(params.lesson) }}
                currentTopic={{ id: parseInt(params.topic) }}
            />
            <DocHeader
                currentGrade={{ id: parseInt(params.grade) }}
                currentSubject={{ id: parseInt(params.subject) }}
                currentLesson={{ id: parseInt(params.lesson) }}
                currentTopic={{ id: parseInt(params.topic) }}
            />
            <div className="w-full lg:ml-70 lg:mt-30 mt-40 p-5 lg:p-6">
                <TopicWrapper
                    title={getTopicInfo().topic?.name}
                    prev={navigation?.prev}
                    next={navigation?.next}
                >
                    <ContentRendererV3
                        content={Component}
                    />
                </TopicWrapper>
            </div>
        </div>
    );
}