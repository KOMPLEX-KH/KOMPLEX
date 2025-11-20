'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { Grade } from "@/types/docs/curriculum";
import { feedCurriculumsService } from "@/services";
import ContentError from "@/components/common/ContentError";

export default function Docs() {
    const router = useRouter();
    const [curriculum, setCurriculum] = useState<Grade[]>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("curriculum");
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCurriculum = async () => {
            try {
                const curriculumData = await feedCurriculumsService.getCurriculum();

                if (!curriculumData || curriculumData.length === 0) {
                    setFetchError("រកមិនឃើញទិន្នន័យមេរៀន");
                    return;
                }

                setFetchError(null);
                setCurriculum(curriculumData);
                localStorage.setItem("curriculum", JSON.stringify(curriculumData));
            } catch (error) {
                console.error("Error fetching curriculum:", error);
                setFetchError("មានបញ្ហា​ក្នុងការទាញយកមេរៀន សូមព្យាយាមម្តងទៀត។");
            }
        };

        if (curriculum.length === 0) {
            fetchCurriculum();
        }
    }, [curriculum.length]);

    useEffect(() => {
        if (fetchError || !curriculum || curriculum.length === 0) return;

        const timer = setTimeout(() => {
            router.push(
                `/docs/${curriculum[0].id}/${curriculum[0].subjects[0].id}/${curriculum[0].subjects[0].lessons[0].id}/${curriculum[0].subjects[0].lessons[0].topics[0].id}`
            );
        }, 1000);

        return () => clearTimeout(timer);
    }, [router, curriculum, fetchError]);

    if (fetchError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <ContentError type="error" message={fetchError} />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 animation-pulse">
            <Logo isVertical={true} size="xl" isLoading={true} showBeta={false} />
        </div>
    );
}