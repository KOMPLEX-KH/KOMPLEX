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

  // Filter panel and dropdown states
  const [filterOpen, setFilterOpen] = useState(false);
  const [openSubjectDropdown, setOpenSubjectDropdown] = useState(false);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false);

  // Refs for click outside detection
  const panelRef = useRef<HTMLDivElement>(null);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const subjectDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
        setOpenSubjectDropdown(false);
        setOpenCategoryDropdown(false);
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
                ${active ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 hover:bg-indigo-50"}`}
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
          className="bg-indigo-600 text-white p-4 rounded-full"
        >
          <Filter className="w-5 h-5" />
        </button>

        {/* Filter panel */}
        {filterOpen && (
          <div
            ref={filterPanelRef}
            className="absolute bg-white rounded-2xl shadow-2xl border border-gray-200 z-[999] p-4 animate-slide-down"
            style={{
              top: "calc(100% + 10px)",
              right: "0",
              width: "280px",
            }}
          >
            {/* Subject Dropdown */}
            <div className="mb-4">
              <label className="flex text-sm font-semibold text-gray-700 mb-2  items-center gap-2">
                មុខវិជ្ជា
              </label>
              <div className="relative" ref={subjectDropdownRef}>
                <button
                  onClick={() => setOpenSubjectDropdown(!openSubjectDropdown)}
                  className="w-full relative appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <SubjectIcon className="w-4 h-4" />
                    <span>{selectedSubjectData?.name || "គ្រប់មុខវិជ្ជា"}</span>
                  </div>
                  <div className="absolute right-3">
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSubjectDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  
                </button>

                {openSubjectDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                      {subjects.map((subject) => {
                        const Icon = subject.icon;
                        const isSelected = selectedSubject === subject.id;
                        return (
                          <button
                            key={subject.id}
                            onClick={() => {
                              setSelectedSubject(subject.id);
                              setSelectedCategory("all");
                              setOpenSubjectDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium ${
                              isSelected
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                : 'hover:bg-gray-50 border-l-4 border-transparent text-gray-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span>{subject.name}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">មេរៀន</label>
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={() => setOpenCategoryDropdown(!openCategoryDropdown)}
                  className="w-full relative appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between"
                >
                  <span>{categories.find(c => c.id === selectedCategory)?.name || "គ្រប់មេរៀន"}</span>
                  <div className="absolute right-3">
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openCategoryDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  
                </button>

                {openCategoryDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                      {categories.map((category) => {
                        const isSelected = selectedCategory === category.id;
                        return (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSelectedCategory(category.id);
                              setOpenCategoryDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium ${
                              isSelected
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                : 'hover:bg-gray-50 border-l-4 border-transparent text-gray-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{category.name}</span>
                              {isSelected && <Check className="w-4 h-4" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full flex hover:bg-indigo-700 items-center justify-center gap-3 bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Filter className="w-5 h-5" />
              ស្វែងរក
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
