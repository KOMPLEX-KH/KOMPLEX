'use client';

import { Calendar, Tag, SortAsc, Clock, CalendarDays, CalendarRange, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface FilterPanelProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  availableTags: string[];
  notesCount: number;
}

export default function FilterPanel({
  selectedFilter,
  setSelectedFilter,
  selectedTag,
  setSelectedTag,
  sortBy,
  setSortBy,
  availableTags,
  notesCount,
}: FilterPanelProps) {
  const [openSortDropdown, setOpenSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setOpenSortDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const dateFilters = [
    { id: "all", label: "គ្រប់ពេល", icon: Calendar },
    { id: "today", label: "ថ្ងៃនេះ", icon: Clock },
    { id: "week", label: "សប្តាហ៍នេះ", icon: CalendarDays },
    { id: "month", label: "ខែនេះ", icon: CalendarRange },
  ];

  const sortOptions = [
    { id: "recent", label: "ថ្មីបំផុត" },
    { id: "oldest", label: "ចាស់បំផុត" },
    { id: "alphabetical", label: "តាមអក្ខរក្រម" },
  ];

  return (
    <div className="mb-6 space-y-4">
      
      {/* Date Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-gray-600 mr-2">កាលបរិច្ឆេទ:</span>
        {dateFilters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-sm font-medium ${
                selectedFilter === filter.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Tags and Sort Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-semibold text-gray-600">ស្លាក:</span>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setSelectedTag(tag === "គ្រប់ប្រភេទ" ? "all" : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  (selectedTag === "all" && tag === "គ្រប់ប្រភេទ") || selectedTag === tag
                    ? " text-blue-700 border-2 border-blue-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Sort and Count */}
        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2" ref={sortDropdownRef}>
            <SortAsc className="w-4 h-4 text-gray-500" />
            <div className="relative">
              <button
                onClick={() => setOpenSortDropdown(!openSortDropdown)}
                className="text-sm px-3 py-1.5 border border-gray-200 rounded-lg outline-none bg-white cursor-pointer font-medium text-gray-700 transition-all duration-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-200 flex items-center gap-2 min-w-[120px] justify-between"
              >
                <span>
                  {sortOptions.find(opt => opt.id === sortBy)?.label || "ថ្មីបំផុត"}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSortDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {openSortDropdown && (
                <div className="absolute top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <div className="max-h-48 overflow-y-auto">
                    {sortOptions.map((option) => {
                      const isSelected = sortBy === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortBy(option.id);
                            setOpenSortDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 transition-all duration-150 text-sm font-medium ${
                            isSelected
                              ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                              : 'hover:bg-gray-50 border-l-4 border-transparent text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option.label}</span>
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

          {/* Notes Count */}
          <div className="text-sm text-gray-500 font-medium px-3 py-1.5 bg-gray-100 rounded-lg">
            {notesCount} កំណត់ត្រា
          </div>
        </div>
      </div>

    </div>
  );
}
