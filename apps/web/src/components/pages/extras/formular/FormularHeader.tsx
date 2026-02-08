'use client';

import { Search, Filter, ChevronDown, Check, Grid3x3 } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Grade } from "@/types/docs/curriculum";
import { getSubjectIcon } from "@core-utils/transform";

interface FormularHeaderProps {
  curriculum: Grade[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
}

export default function FormularHeader({
  curriculum,
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedCategory,
  setSelectedCategory,
  selectedGrade,
  setSelectedGrade
}: FormularHeaderProps) {

  // one dropdown state
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"subject" | "category" | null>(null);


  const panelRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // subjects based on grade
  const subjects = useMemo(() => {
    const grade = curriculum.find(g => String(g.id) === selectedGrade);
    return grade?.subjects.map(s => ({
      id: String(s.id),
      name: s.name,
      icon: getSubjectIcon(s.name)
    })) || [];
  }, [curriculum, selectedGrade]);

  // reset subject when grade changes
  useEffect(() => {
    if (subjects.length) {
      setSelectedSubject(subjects[0].id);
      setSelectedCategory("all");
    }
  }, [subjects.length]);

  // categories from lessons
  const categories = useMemo(() => {
    if (!selectedSubject) return [{ id: "all", name: "គ្រប់មេរៀន" }];

    const grade = curriculum.find(g => String(g.id) === selectedGrade);
    const subject = grade?.subjects.find(s => String(s.id) === selectedSubject);

    if (!subject?.lessons?.length) {
      return [{ id: "all", name: "គ្រប់មេរៀន" }];
    }

    return [
      { id: "all", name: "គ្រប់មេរៀន" },
      ...subject.lessons.map(l => ({
        id: String(l.id),
        name: l.name
      }))
    ];
  }, [curriculum, selectedGrade, selectedSubject]);

  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);
  const SubjectIcon = selectedSubjectData?.icon || Grid3x3;

  return (
    <div className="mb-6" ref={panelRef}>

      {/* Subject pills */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {subjects.map(s => {
          const Icon = s.icon;
          const active = selectedSubject === s.id;

          return (
            <button
              key={s.id}
              onClick={() => {
                setSelectedSubject(s.id);
                setSelectedCategory("all");
              }}
              className={`px-4 py-2 rounded-full flex gap-2 items-center text-sm font-medium transition
                ${active ? "bg-indigo-600 text-white" : "bg-white border border-gray-400 hover:bg-indigo-50"}`}
            >
              <Icon className="w-4 h-4" />
              {s.name}
            </button>
          );
        })}
      </div>

      {/* Search + filter */}
      <div className="flex gap-3 relative">

        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="ស្វែងរករូបមន្ត..."
            className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-full focus:outline-none"
          />
        </div>

        <button
           onClick={() => setFilterOpen(!filterOpen)}
          className="bg-indigo-600 text-white p-3 rounded-3xl"
        >
          <Filter className="w-5 h-5" />
        </button>

        {/* Filter panel */}
        {filterOpen && (
          <div className="absolute right-0 top-full mt-3 bg-white shadow-xl rounded-3xl p-4 w-[280px]">

            {/* Subject */}
            <button
              onClick={() =>
                setDropdown(dropdown === "subject" ? null : "subject")
              }
              className="w-full flex justify-between items-center border rounded-3xl px-4 py-2 mb-3"
            >
              <div className="flex gap-2 items-center">
                <SubjectIcon className="w-4 h-4" />
                {selectedSubjectData?.name}
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdown === "subject" && subjects.map(s => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSubject(s.id);
                  setSelectedCategory("all");
                  setDropdown(null);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-indigo-50"
              >
                {s.name}
              </button>
            ))}

            {/* Category */}
            <button
              onClick={() =>
                setDropdown(dropdown === "category" ? null : "category")
              }
              className="w-full flex justify-between items-center border rounded-3xl px-4 py-2 mt-3"
            >
              {categories.find(c => c.id === selectedCategory)?.name}
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdown === "category" && categories.map(c => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCategory(c.id);
                  setDropdown(null);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-indigo-50"
              >
                {c.name}
              </button>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
