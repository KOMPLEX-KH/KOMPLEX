'use client';

import { Search, Filter, ChevronDown, Check, Beaker, Calculator, Atom, Microscope, Grid3x3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface FormularHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const subjects = [
  { id: "all", name: "គ្រប់មុខវិជ្ជា", icon: Grid3x3 },
  { id: "math", name: "គណិតវិទ្យា", icon: Calculator },
  { id: "physics", name: "រូបវិទ្យា", icon: Atom },
  { id: "chemistry", name: "គីមីវិទ្យា", icon: Beaker },
  { id: "biology", name: "ជីវវិទ្យា", icon: Microscope },
];

const categories = [
  { id: "all", name: "គ្រប់ប្រភេទ" },
  { id: "algebra", name: "ពិជគណិត" },
  { id: "geometry", name: "ធរណីមាត្រ" },
  { id: "calculus", name: "គណនាវិភាគ" },
  { id: "mechanics", name: "យន្តវិទ្យា" },
  { id: "thermodynamics", name: "កម្តៅវិទ្យា" },
  { id: "electricity", name: "អគ្គិសនីវិទ្យា" },
  { id: "organic", name: "សរីរាង្គ" },
  { id: "inorganic", name: "អសរីរាង្គ" },
  { id: "genetics", name: "បេតិកជ្ញា" },
  { id: "ecology", name: "អេកូឡូស៊ី" },
];

export default function FormularHeader({
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedCategory,
  setSelectedCategory,
}: FormularHeaderProps) {
  const [openSubjectDropdown, setOpenSubjectDropdown] = useState(false);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false);
  const [openFilterPanel, setOpenFilterPanel] = useState(false);
  
  const subjectDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const filterPanelRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(event.target as Node)) {
        setOpenSubjectDropdown(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setOpenCategoryDropdown(false);
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

  // Get filtered categories based on selected subject
  const getFilteredCategories = () => {
    if (selectedSubject === "all") return [{ id: "all", name: "គ្រប់ប្រភេទ" }];
    
    if (selectedSubject === "math") {
      return [
        { id: "all", name: "គ្រប់ប្រភេទ" },
        { id: "algebra", name: "ពិជគណិត" },
        { id: "geometry", name: "ធរណីមាត្រ" },
        { id: "calculus", name: "គណនាវិភាគ" },
      ];
    } else if (selectedSubject === "physics") {
      return [
        { id: "all", name: "គ្រប់ប្រភេទ" },
        { id: "mechanics", name: "យន្តវិទ្យា" },
        { id: "thermodynamics", name: "កម្តៅវិទ្យា" },
        { id: "electricity", name: "អគ្គិសនីវិទ្យា" },
      ];
    } else if (selectedSubject === "chemistry") {
      return [
        { id: "all", name: "គ្រប់ប្រភេទ" },
        { id: "organic", name: "សរីរាង្គ" },
        { id: "inorganic", name: "អសរីរាង្គ" },
      ];
    } else if (selectedSubject === "biology") {
      return [
        { id: "all", name: "គ្រប់ប្រភេទ" },
        { id: "genetics", name: "បេតិកជ្ញា" },
        { id: "ecology", name: "អេកូឡូស៊ី" },
      ];
    }
    
    return [{ id: "all", name: "គ្រប់ប្រភេទ" }];
  };

  const filteredCategories = getFilteredCategories();
  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);
  const SubjectIcon = selectedSubjectData?.icon || Grid3x3;

  return (
    <div className="mb-6">
      {/* Subject Pills */}
      <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 font-medium text-sm ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {subject.name}
            </button>
          );
        })}
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
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-3xl outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />
        </div>

        {/* Filter Button */}
        <button
          ref={filterButtonRef}
          onClick={() => setOpenFilterPanel(!openFilterPanel)}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
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
            className="absolute bg-white rounded-2xl shadow-2xl border border-gray-200 z-[999] p-4 animate-slide-down"
            style={{
              top: "calc(100% + 10px)",
              right: "0",
              width: "280px",
            }}
          >
            {/* Subject Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <SubjectIcon className="w-4 h-4" />
                មុខវិជ្ជា
              </label>
              <div className="relative" ref={subjectDropdownRef}>
                <button
                  onClick={() => setOpenSubjectDropdown(!openSubjectDropdown)}
                  className="w-full appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between hover:border-blue-300 focus:ring-2 focus:ring-blue-200"
                >
                  <div className="flex items-center gap-2">
                    <SubjectIcon className="w-4 h-4" />
                    <span>{selectedSubjectData?.name || "គ្រប់មុខវិជ្ជា"}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSubjectDropdown ? 'rotate-180' : ''}`} />
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
                                <Icon className="w-4 h-4" />
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">ប្រភេទ</label>
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={() => setOpenCategoryDropdown(!openCategoryDropdown)}
                  className="w-full appearance-none bg-white border border-gray-200 py-2.5 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none flex items-center justify-between hover:border-blue-300 focus:ring-2 focus:ring-blue-200"
                >
                  <span>{filteredCategories.find(c => c.id === selectedCategory)?.name || "គ្រប់ប្រភេទ"}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openCategoryDropdown ? 'rotate-180' : ''}`} />
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
              អនុវត្ត
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
