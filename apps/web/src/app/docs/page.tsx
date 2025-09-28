'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { curriculum } from "@/curriculum";
import { Logo } from "@/components/common/Logo";

export default function Docs() {
    const router = useRouter();

    useEffect(() => {
        // Redirect after a short delay to show loading state
        const timer = setTimeout(() => {
            router.push(`/docs/${curriculum[0].grade}/${curriculum[0].content[0].subject}/${curriculum[0].content[0].lessons[0].englishTitle}/${curriculum[0].content[0].lessons[0].topics[0].englishTitle}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 animation-pulse">
            <Logo isVertical={true} size="xl" isLoading={true} />
        </div>
    );
}