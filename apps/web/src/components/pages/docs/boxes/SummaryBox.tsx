import TipBox from "./TipBox";
import React from "react";
import { SummarySection } from "@/types/docs/topic";



export interface SummaryBoxProps {
    title?: string | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    sections: SummarySection[];
}

export default function SummaryBox({
    title,
    icon,
    sections,
}: SummaryBoxProps) {

    const content = (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {sections.map((section, index) => {
                const SectionIcon = section.icon;
                return (
                    <div
                        key={section.key ?? index}
                        className="bg-white p-4 rounded-3xl border border-indigo-100 shadow-sm"
                    >
                        <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                            {SectionIcon ? (
                                <SectionIcon className="w-5 h-5 text-indigo-600" />
                            ) : null}
                            {section.title}
                        </h4>
                        <div className="text-sm space-y-2">{section.content}</div>
                    </div>
                );
            })}
        </div>
    );

    return <TipBox title={title} icon={icon} content={content} />;
}
