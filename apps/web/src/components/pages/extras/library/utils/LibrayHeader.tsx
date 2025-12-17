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
  currentSubjectId?: number | null;
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
  currentSubjectId,
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
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full outline-none transition-colors"
          />
        </div>
        <SearchDropdown
          isOpen={isSearchFocused}
          searchQuery={searchQuery}
          books={books}
          onBookClick={(bookId) => {
            onBookClick(bookId);
          }}
          onClose={() => setIsSearchFocused(false)}
          currentSubjectId={currentSubjectId}
        />
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