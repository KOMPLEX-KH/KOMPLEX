'use client';

import { BookOpen, Eye, Bookmark, Calculator, Atom, Beaker, Microscope } from "lucide-react";

interface FormularCardProps {
  formula: {
    id: string;
    title: string;
    formula: string;
    description: string;
    subject: string;
    category: string;
    views: number;
    isSaved?: boolean;
  };
  onClick?: (id: string) => void;
}

const subjectIcons = {
  math: Calculator,
  physics: Atom,
  chemistry: Beaker,
  biology: Microscope,
};

export default function FormularCard({ formula, onClick }: FormularCardProps) {
  const Icon = subjectIcons[formula.subject as keyof typeof subjectIcons] || BookOpen;

  return (
    <div
      onClick={() => onClick?.(formula.id)}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300"
    >
      {/* Header */}
      <div className="bg-blue-50 p-4 relative overflow-hidden border-b border-blue-100">
        <div className="absolute top-0 right-0 opacity-5">
          <Icon className="w-32 h-32 transform rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-blue-700 text-xs font-medium">
              <Icon className="w-4 h-4" />
              <span>{formula.subject}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle bookmark
              }}
              className="p-1.5 bg-white hover:bg-blue-100 rounded-full transition-colors border border-blue-200"
            >
              <Bookmark className={`w-4 h-4 text-blue-600 ${formula.isSaved ? 'fill-blue-600' : ''}`} />
            </button>
          </div>
          <h3 className="text-gray-800 font-bold text-lg mb-1">{formula.title}</h3>
          <p className="text-blue-600 text-xs">{formula.category}</p>
        </div>
      </div>

      {/* Formula Display */}
      <div className="p-6 bg-gray-50">
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200 min-h-[80px] flex items-center justify-center">
          <div className="text-2xl font-mono font-bold text-gray-800 text-center group-hover:scale-105 transition-transform duration-300">
            {formula.formula}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{formula.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Eye className="w-4 h-4" />
            <span>{formula.views.toLocaleString()} ចំនួនមើល</span>
          </div>
          <div className="text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
            មើលលម្អិត →
          </div>
        </div>
      </div>
    </div>
  );
}
