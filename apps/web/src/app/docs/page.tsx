'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { Grade } from "@/types/docs/curriculum";
import axios from "@/configs/axios";

export default function Docs() {
    const router = useRouter();
    const [curriculum, setCurriculum] = useState<Grade[]>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem("curriculum");
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });

    useEffect(() => {
        const fetchCurriculum = async () => {
            const res = await axios.get('http://localhost:6969/api/feed/lessons');
            localStorage.setItem('curriculum', JSON.stringify(res.data.data));
            setCurriculum(res.data.data);
        };

        if (curriculum.length === 0) {
            fetchCurriculum();
        }
    }, [curriculum]);

    useEffect(() => {
        // Redirect after a short delay to show loading state
        const timer = setTimeout(() => {
            router.push(`/docs/${curriculum[0].id}/${curriculum[0].content[0].id}/${curriculum[0].content[0].lessons[0].id}/${curriculum[0].content[0].lessons[0].topics[0].id}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [router, curriculum]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 animation-pulse">
            <Logo isVertical={true} size="xl" isLoading={true} />
        </div>
    );
}