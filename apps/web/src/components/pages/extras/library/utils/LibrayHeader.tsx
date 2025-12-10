'use client';

import { Search, BookOpen, ChevronDown, Filter, X, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { Subject, Book } from "@core-types/content/library";
import SearchDropdown from "./SearchDropdown";

interface ExtraHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedLesson: string;
  setSelectedLesson: (lesson: string) => void;
  openSubjectDropdown: boolean;
  setOpenSubjectDropdown: (open: boolean) => void;
  openLessonDropdown: boolean;
  setOpenLessonDropdown: (open: boolean) => void;
  filterRef: React.RefObject<HTMLButtonElement>;
  panelRef: React.RefObject<HTMLDivElement>;
  openPanel: boolean;
  setOpenPanel: (open: boolean) => void;
  lessons: { id: string; name: string }[];
  subjects: Subject[];
  books: Book[];
  onBookClick: (bookId: string) => void;
}

export default function ExtraHeader({
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedLesson,
  setSelectedLesson,
  openSubjectDropdown,
  setOpenSubjectDropdown,
  openLessonDropdown,
  setOpenLessonDropdown,
  filterRef,
  panelRef,
  openPanel,
  setOpenPanel,
  lessons,
  subjects,
  books,
  onBookClick,
}: ExtraHeaderProps) {

  const subjectDropdownRef = useRef(null);
  const lessonDropdownRef = useRef(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(event.target)) {
        setOpenSubjectDropdown(false);
      }
      if (lessonDropdownRef.current && !lessonDropdownRef.current.contains(event.target)) {
        setOpenLessonDropdown(false);
      }
      if (panelRef.current && !panelRef.current.contains(event.target) && 
          filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>  
      <div className="flex items-center gap-3 relative" ref={searchRef}>          
        
        {/* Search section */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <input
            type="text"
            placeholder="ស្វែងរកសៀវភៅ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-3xl outline-none transition-colors"
          />
        </div>

        {/* filter btn section */}
        <button ref={filterRef}
          onClick={() => setOpenPanel(!openPanel)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Filter className="w-5 h-5" />
        </button>

        {/* Search Dropdown - Full Width */}
        <SearchDropdown
          isOpen={isSearchFocused}
          searchQuery={searchQuery}
          books={books}
          onBookClick={(bookId) => {
            onBookClick(bookId);
          }}
          onClose={() => setIsSearchFocused(false)}
        />

        {openPanel && (
          <div ref={panelRef}
            className="absolute bg-white rounded-2xl shadow-2xl border-1 border-gray-200 z-[999] p-3 animate-slide-down"
            style={{
              top: "110%",
              right: "0",
              width: "270px",
            }}
          >
        
            {/* Subject section */}
            <div className="mb-4 mt-2">
              <label className="block text-sm  font-semibold text-gray-700 mb-2">មុខវិជ្ជា</label>
              <div className="relative" ref={subjectDropdownRef}>
                <button
                  onClick={() => setOpenSubjectDropdown(!openSubjectDropdown)}
                  className="w-full appearance-none bg-white border-1 border-gray-200 focus:ring-blue-200 py-3 px-4 pr-10 rounded-3xl cursor-pointer transition-all duration-200 text-gray-500 font-medium outline-none flex items-center justify-between"
                >
                  <span>{subjects.find(s => s.id === selectedSubject)?.name || "គ្រប់ប្រភេទ"}</span>
                  <div className="absolute right-4">
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSubjectDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  
                </button>
                
                {openSubjectDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="max-h-48 overflow-y-auto">
                      {subjects.length > 0 ? (
                        subjects.map((s) => {
                          const isSelected = selectedSubject === s.id;
                          return (
                            <button
                              key={s.id}
                              onClick={() => {
                                setSelectedSubject(s.id);
                                setSelectedLesson("all");
                                setOpenSubjectDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium ${
                                isSelected
                                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                  : 'hover:bg-gray-50 border-l-4 border-transparent text-gray-700'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{s.name}</span>
                                {isSelected && <Check className="w-4 h-4" />}
                              </div>
                            </button>
                          );
                        })
                      ) : (
                        <button
                          onClick={() => setOpenSubjectDropdown(false)}
                          className="w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        >
                          <div className="flex items-center justify-between">
                            <span>គ្រប់ប្រភេទ</span>
                            <Check className="w-4 h-4" />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
              
            {/* Lesson section */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">មេរៀន</label>
              <div className="relative" ref={lessonDropdownRef}>
                <button
                  onClick={() => setOpenLessonDropdown(!openLessonDropdown)}
                  className="w-full appearance-none text-gray-500 bg-white border-1 border-gray-200 focus:ring-blue-200 py-3 px-4 pr-10 rounded-3xl cursor-pointer transition-all duration-200 font-medium outline-none flex items-center justify-between"
                >
                  <span>{lessons.find(l => l.id === selectedLesson)?.name}</span>
                  <div className="absolute right-5">
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openLessonDropdown ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {openLessonDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="max-h-48 overflow-y-auto">
                      {lessons.map((l) => {
                        const isSelected = selectedLesson === l.id;
                        return (
                          <button
                            key={l.id}
                            onClick={() => {
                              setSelectedLesson(l.id);
                              setOpenLessonDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium ${
                              isSelected
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                : 'hover:bg-gray-50 border-l-4 border-transparent text-gray-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{l.name}</span>
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
              
            <button onClick={() => setOpenPanel(false)}
              className="w-full flex hover:bg-indigo-400 items-center justify-center gap-3 bg-indigo-600 text-white py-3 rounded-3xl font-bold transition-all duration-300"
            >
              <Filter className="w-5 h-5" />
              Filter
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
      `}</style>
    </>
  );
}