'use client';
import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState } from "react";
import { Books } from "@/types/library/library";

export default function LibraryContent() {
  const [selectedSubject, setSelectedSubject] = useState('គ្រប់មុខវិជ្ជា');
  const [selectedLesson, setSelectedLesson] = useState('គ្រប់មេរៀន');
  const [searchQuery, setSearchQuery] = useState('');
  const [openPanel, setOpenPanel] = useState(false);

  const subjects = [
    { id: 'all', name: 'គ្រប់មុខវិជ្ជា' },
    { id: 'math', name: 'គណិតវិទ្យា' },
    { id: 'physics', name: 'រូបវិទ្យា' },
    { id: 'biology', name: 'ជីវវិទ្យា' },
    { id: 'chemistry', name: 'គីមីវិទ្យា' },
    { id: 'khmer', name: 'អក្សរសាស្ត្រខ្មែរ' },
    { id: 'history', name: 'ប្រវត្តិវិទ្យា' },
    { id: 'english', name: 'អង់គ្លេស' },
  ];

  const lessons = [
    { id: 'all', name: 'គ្រប់មេរៀន' },
    { id: 'lesson1', name: 'មេរៀនទី១' },
    { id: 'lesson2', name: 'មេរៀនទី២' },
    { id: 'lesson3', name: 'មេរៀនទី៣' },
    { id: 'lesson4', name: 'មេរៀនទី៤' },
    { id: 'lesson5', name: 'មេរៀនទី៥' },
    { id: 'lesson6', name: 'មេរៀនទី៦' },
    { id: 'lesson7', name: 'មេរៀនទី៧' },
    { id: 'lesson8', name: 'មេរៀនទី៨' },
    { id: 'lesson9', name: 'មេរៀនទី៩' },
    { id: 'lesson10', name: 'មេរៀនទី១០' },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Header */}
      <div>
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
          
          {/* Title */}
          <div className="flex items-center gap-3 justify-center">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">បណ្ណាល័យកុំផ្លិច</h1>
              <p className="text-sm text-gray-600">ស្វែងរកសៀវភៅសិក្សាគ្រប់មុខវិជ្ជា</p>
            </div>
          </div>

          {/* 🔵 Mobile Filter Button */}
          <button
            onClick={() => setOpenPanel(true)}
            className="lg:hidden p-2 rounded-xl bg-blue-500 text-white shadow"
          >
            <Filter className="w-6 h-6" />
          </button>

        </div>

        {/* 🔵 Desktop Filter Section (Normal) */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ស្វែងរកសៀវភៅ..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button className="px-6 w-full sm:w-50 py-3 rounded-xl bg-blue-500 hover:bg-blue-400
                               flex items-center justify-center gap-2 text-sm font-medium text-white">
              <Search className="w-5 h-5" />
              ស្វែងរក
            </button>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {/* Subject */}
            <div className="relative">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="appearance-none w-full pl-4 pr-10 py-3 border rounded-xl border-gray-400"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
            </div>

            {/* Lesson */}
            <div className="relative">
              <select
                value={selectedLesson}
                onChange={(e) => setSelectedLesson(e.target.value)}
                className="appearance-none w-full pl-4 pr-10 py-3 border rounded-xl border-gray-400"
              >
                {lessons.map((l) => (
                  <option key={l.id} value={l.name}>{l.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
            </div>

            <button className="w-full py-3 rounded-xl bg-blue-500 text-white flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>

          </div>
        </div>
      </div>

      {/* ⭐ MOBILE SLIDE-IN PANEL ⭐ */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-5 z-[999] 
                      transform transition-transform duration-300 
                      ${openPanel ? "translate-x-0" : "translate-x-full"} lg:hidden`}>

        {/* Close button */}
        <button
          onClick={() => setOpenPanel(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold mb-4">ស្វែងរក & ការជ្រើសរើស</h2>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="ស្វែងរកសៀវភៅ..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="w-full py-3 mb-4 rounded-xl bg-blue-500 text-white flex items-center justify-center gap-2">
          <Search className="w-5 h-5" />
          ស្វែងរក
        </button>

        {/* Subject */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full mb-3 border py-3 px-3 rounded-xl"
        >
          {subjects.map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>

        {/* Lesson */}
        <select
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(e.target.value)}
          className="w-full mb-3 border py-3 px-3 rounded-xl"
        >
          {lessons.map((l) => (
            <option key={l.id} value={l.name}>{l.name}</option>
          ))}
        </select>

        <button className="w-full py-3 rounded-xl bg-blue-500 text-white flex items-center justify-center gap-2">
          <Filter className="w-5 h-5" />
          Filter
        </button>

      </div>

      {/* Dim + Blur background when panel open */}
      {openPanel && (
        <div 
          onClick={() => setOpenPanel(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] lg:hidden"
        />
      )}

    </div>
  );
}
