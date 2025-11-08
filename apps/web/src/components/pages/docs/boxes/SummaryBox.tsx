// src/components/pages/docs/boxes/SummaryBox.tsx
import React from "react";
import { SummarySection } from "@core-types/docs/boxProps";
import { SummaryBoxProps } from "@core-types/docs/boxProps";
import * as Icons from "lucide-react";
import { Lightbulb } from "lucide-react";

export function SummaryBox({
  title,
  icon = "Lightbulb", // Use Lightbulb as the default icon
  sections,
}: SummaryBoxProps) {

  // This is the grid content you already created
  const sectionsContent = (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
      {sections.map((section, index) => {
        const SectionIcon = Icons[icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
        return (
          <div
            key={section.key ?? index}
            className="bg-white p-4 rounded-3xl border border-indigo-100 shadow-sm"
          >
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
              {SectionIcon ? (
                <SectionIcon size={20} className="text-indigo-600" />
              ) : <Lightbulb size={20} className="text-indigo-600" />}
              {section.title}
            </h4>
            <div className="text-sm space-y-2">{section.content}</div>
          </div>
        );
      })}
    </div>
  );

  // This is the wrapper JSX from TipBox.
  // By moving it here, we break the circular import.
  return (
    <div className="lg:bg-indigo-50/80 lg:border-l-4 lg:border-indigo-600  lg:p-4 my-6 lg:rounded-r-3xl lg:shadow-lg shadow-indigo-500/10 backdrop-blur-sm">
      {title && (
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb size={20} className="text-indigo-600" />
          <h4 className="text-indigo-600 font-semibold text-xl">{title}</h4>
        </div>
      )}
      <div className="text-gray-700 leading-relaxed text-base">
        {/* Render your grid content directly */}
        {sectionsContent}
      </div>
    </div>
  );
}