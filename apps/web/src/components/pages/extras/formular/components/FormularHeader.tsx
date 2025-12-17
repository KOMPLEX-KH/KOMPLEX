'use client';

import { Search, Filter, ChevronDown, Check, Beaker, Calculator, Atom, Microscope, Grid3x3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Grade } from "@/types/docs/curriculum";
import { getSubjectIcon } from "@core-utils/transform";
import { feedCurriculumsService } from "@/services";

interface FormularHeaderProps {
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
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedCategory,
  setSelectedCategory,
  selectedGrade,
  setSelectedGrade
}: FormularHeaderProps) {
  const [curriculum, setCurriculum] = useState<Grade[]>([]);
  const [openSubjectDropdown, setOpenSubjectDropdown] = useState(false);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false);
  const [openFilterPanel, setOpenFilterPanel] = useState(false);
  const [openGradeDropdown, setOpenGradeDropdown] = useState(false);
  
  const subjectDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);
  
  // Fetch curriculum data
  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        // Try to get from localStorage first
        const stored = localStorage.getItem('curriculum');
        if (stored) {
          setCurriculum(JSON.parse(stored));
        } else {
          // Fetch from API if not in localStorage
          const curriculumData = await feedCurriculumsService.getCurriculum();
          setCurriculum(curriculumData);
          localStorage.setItem('curriculum', JSON.stringify(curriculumData));
        }
      } catch (error) {
        console.error('Error fetching curriculum:', error);
      }
    };

    fetchCurriculum();
  }, []);

  const grades = [
    ...curriculum.map(g => ({ id: String(g.id), name: g.name }))
  ];

  // Filter subjects based on selected grade
  const subjects = curriculum
    .filter(g => String(g.id) === selectedGrade)
    .flatMap(grade => 
      grade.subjects.map(subject => ({
        id: String(subject.id),
        name: subject.name,
        icon: getSubjectIcon(subject.name)
      }))
    );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(event.target as Node)) {
        setOpenSubjectDropdown(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setOpenCategoryDropdown(false);
      }
      if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(event.target as Node)) {
        setOpenGradeDropdown(false);
      }
      if (
        filterPanelRef.current && 
        !filterPanelRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setOpenFilterPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset subject when grade changes
  useEffect(() => {
    if (subjects.length > 0) {
      setSelectedSubject(subjects[0].id);
    }
  }, [selectedGrade, curriculum.length]);

  // Get lessons based on selected subject
  const getFilteredCategories = () => {
    if (!selectedSubject || selectedSubject === "all") {
      return [{ id: "all", name: "គ្រប់មេរៀន" }];
    }

    // Find the selected subject's lessons
    const grade = curriculum.find(g => String(g.id) === selectedGrade);
    const subject = grade?.subjects.find(s => String(s.id) === selectedSubject);
    
    if (!subject || !subject.lessons) {
      return [{ id: "all", name: "គ្រប់មេរៀន" }];
    }

    // Map lessons to category format
    const lessons = subject.lessons.map(lesson => ({
      id: String(lesson.id),
      name: lesson.name
    }));

    return [
      { id: "all", name: "គ្រប់មេរៀន" },
      ...lessons
    ];
  };

  const filteredCategories = getFilteredCategories();
  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);
  const SubjectIcon = selectedSubjectData?.icon || Grid3x3;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-4">
        
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide  lg:flex-1 lg:w-auto min-w-0">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const isSelected = selectedSubject === subject.id;
          return (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject.id);
                setSelectedCategory("all");
              }}
              className={`flex items-center gap-2 px-4 sm:py-2.5 py-2 rounded-full whitespace-nowrap transition-all duration-200 font-medium sm:text-sm text-[12px]  ${
                isSelected
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {subject.name}
            </button>
          );
        })}
        </div>

        {/* <div className="relative" ref={gradeDropdownRef}>
          <button
            disabled
            className="flex sm:text-sm text-[12px] items-center gap-2 px-3 sm:py-2.5 py-2 bg-gray-50 border-2 border-gray-300 rounded-3xl font-medium text-gray-500 justify-between cursor-not-allowed opacity-60"
          >
            <span>{grades.find(g => g.id === selectedGrade)?.name || "ថ្នាក់ទី១២"}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
        </div> */}
      </div>

      {/* Search and Filter Row */}
      <div className="relative flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <input
            type="text"
            placeholder="ស្វែងរករូបមន្ត..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full outline-none transition-all duration-200"
          />
        </div>

        {/* Filter Button */}
        <button
          ref={filterButtonRef}
          onClick={() => setOpenFilterPanel(!openFilterPanel)}
          className={`p-3 rounded-3xl shadow-lg transition-all duration-300 flex items-center gap-2 ${
            openFilterPanel
              ? "bg-indigo-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          <Filter className="w-5 h-5" />
        </button>

        {/* Filter Panel */}
        {openFilterPanel && (
          <div
            ref={filterPanelRef}
            className="absolute bg-white rounded-3xl shadow-2xl border border-gray-200 z-[999] p-4 animate-slide-down"
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
                  className="w-full relative appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-3xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between hover:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
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
                  <div className="absolute top-full mt-1 w-full bg-white rounded-3xl shadow-xl border border-gray-200 z-50 overflow-hidden">
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
                                ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
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
                  className="w-full relative appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-3xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between hover:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
                >
                  <span>{filteredCategories.find(c => c.id === selectedCategory)?.name || "គ្រប់មេរៀន"}</span>
                  <div className="absolute right-3">
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openCategoryDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  
                </button>

                {openCategoryDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                      {filteredCategories.map((category) => {
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
              onClick={() => setOpenFilterPanel(false)}
              className="w-full flex hover:bg-indigo-700 items-center justify-center gap-3 bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Filter className="w-5 h-5" />
              ស្វែងរក
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
