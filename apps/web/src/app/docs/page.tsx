'use client';

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { Grade } from "@core-types/docs/curriculum";
import { feedCurriculumsService, meLastAccessedService } from "@/services";
import ContentError from "@/components/common/ContentError";
import { useAuth } from "@/hooks/useAuth";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Docs() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const hasRedirectedRef = useRef(false);
    const [curriculum, setCurriculum] = useState<Grade[]>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("curriculum");
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCurriculum = async () => {
            try {
                const curriculumData = await feedCurriculumsService.getCurriculum();

                if (!curriculumData || curriculumData.data.length === 0) {
                    setFetchError("រកមិនឃើញទិន្នន័យមេរៀន");
                    return;
                }

                setFetchError(null);
                setCurriculum(curriculumData.data);
                localStorage.setItem("curriculum", JSON.stringify(curriculumData));
            } catch (error) {
                setFetchError("មានបញ្ហា​ក្នុងការទាញយកមេរៀន សូមព្យាយាមម្តងទៀត។");
            }
        };

        if (curriculum.length === 0) {
            fetchCurriculum();
        }
    }, [curriculum.length]);

    const navigateToLastTopic = useCallback(async () => {
        try {
            setError(null);

            // If user is not logged in, navigate to default topic
            if (!user) {
                router.push("/docs/1/1/1/1");
                return;
            }

            // Get last accessed topic
            const response = await meLastAccessedService.getLastAccessed();
            const lastAccessed = response.data;

            // If no last topic, navigate to default
            if (!lastAccessed.lastTopic) {
                router.push("/docs/1/1/1/1");
                return;
            }

            // Get curriculum from localStorage
            const stored = localStorage.getItem('curriculum');
            if (!stored) {
                // If no curriculum, navigate to default
                router.push("/docs/1/1/1/1");
                return;
            }

            const curriculumData = JSON.parse(stored);
            const topicId = lastAccessed.lastTopic.id;

            // Search through all grades, subjects, lessons to find the topic
            let foundGrade: any = null;
            let foundSubject: any = null;
            let foundLesson: any = null;
            let foundTopic: any = null;

            for (const grade of curriculumData) {
                for (const subject of grade.subjects || []) {
                    for (const lesson of subject.lessons || []) {
                        const topic = lesson.topics?.find((t: any) => t.id === topicId);
                        if (topic) {
                            foundGrade = grade;
                            foundSubject = subject;
                            foundLesson = lesson;
                            foundTopic = topic;
                            break;
                        }
                    }
                    if (foundTopic) break;
                }
                if (foundTopic) break;
            }

            if (foundGrade && foundSubject && foundLesson && foundTopic) {
                router.push(`/docs/${foundGrade.id}/${foundSubject.id}/${foundLesson.id}/${foundTopic.id}`);
            } else {
                // Fallback to default if topic not found
                router.push("/docs/1/1/1/1");
            }
        } catch (err: any) {
            console.error('Error navigating to last topic:', err);
            setError(err.message || "មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។");
        }
    }, [router, user]);

    useEffect(() => {
        // Wait for auth state to resolve before deciding what to do
        if (authLoading) {
            return;
        }

        // Wait for curriculum to be loaded
        if (fetchError || !curriculum || curriculum.length === 0) {
            return;
        }

        // Only redirect if we haven't redirected yet
        if (hasRedirectedRef.current) {
            return;
        }

        hasRedirectedRef.current = true;
        navigateToLastTopic();
    }, [authLoading, fetchError, curriculum, navigateToLastTopic]);

    const handleRetry = () => {
        hasRedirectedRef.current = false;
        navigateToLastTopic();
    };

    if (fetchError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <ContentError type="error" message={fetchError} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-md w-full">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 rounded-full bg-red-100">
                            <AlertCircle size={48} className="text-red-600" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                មានបញ្ហាកើតឡើង
                            </h2>
                            <p className="text-base text-gray-600">
                                {error}
                            </p>
                        </div>
                        <button
                            onClick={handleRetry}
                            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-indigo-700 transition-colors"
                        >
                            <RefreshCw size={18} />
                            <span className="font-medium">ព្យាយាមម្តងទៀត</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 animation-pulse">
            <Logo isVertical={true} size="xl" isLoading={true} showBeta={false} />
        </div>
    );
}