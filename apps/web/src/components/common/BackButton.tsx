import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const BackButton = ({ href }: { href: string }) => {

    return (
        <div className=" sticky mb-3  top-18 z-[9999]">
            <Link href={href} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                <div className='p-1 bg-white dark:bg-zinc-800 rounded-full shadow-lg'><ChevronLeft className="w-6 h-6" /></div>
            </Link>
        </div>
    );
};