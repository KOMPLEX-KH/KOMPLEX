'use client';

import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState, useEffect } from "react";
import BookContainer from "./BookContainer";
import { subjects, lessonsBySubject, Books } from "@/types/library/library";

export default function LibraryContent() {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [openPanel, setOpenPanel] = useState(false);

  const isFilterActive = selectedSubject !== "all" || selectedLesson !== "all";

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Get lessons list based on selected subject
  const lessons =
    selectedSubject === "all"
      ? [{ id: "all", name: "គ្រប់មេរៀន" }]
      : [{ id: "all", name: "គ្រប់មេរៀន" }, ...(lessonsBySubject[selectedSubject] || [])];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-4 rounded-t-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-3xl font-bold">បណ្ណាល័យកុំផ្លិច</h1>
          </div>
          <p className="text-blue-100">ស្វែងរកសៀវភៅសិក្សាគ្រប់មុខវិជ្ជា</p>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpenPanel(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop navbar */}
      <div className="hidden lg:block max-w-6xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="ស្វែងរកសៀវភៅ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border  rounded-xl"
          />
          {/* <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            ស្វែងរក
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Subject */}
          <div className="relative">
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedLesson("all"); // Reset lesson on subject change
              }}
              className="appearance-none cursor-pointer w-full pl-4 pr-10 py-3 border rounded-xl border-gray-400 "
            >
              {subjects.map((s) => (
                <option className="" key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* Lesson */}
          <div className="relative">
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="appearance-none w-full cursor-pointer pl-4 pr-10 py-3 border rounded-xl border-gray-400"
            >
              {lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* Filter Button */}
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* MOBILE navbar  */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-[999] transition-transform duration-300 ease-out ${
          openPanel ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setOpenPanel(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="px-6 pb-6 overflow-y-auto" style={{ maxHeight: "calc(85vh - 60px)" }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ស្វែងរក & ការជ្រើសរើស</h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ស្វែងរកសៀវភៅ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl"
            />
          </div>

          {/* <button className="w-full bg-blue-600 text-white py-3 rounded-xl mb-6 font-semibold hover:bg-blue-700 transition-colors">
            ស្វែងរក
          </button> */}

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">មុខវិជ្ជា</label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedLesson("all");
              }}
              className="w-full border border-gray-300 py-3 px-3 rounded-xl"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Lesson */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">មេរៀន</label>
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="w-full border border-gray-300 py-3 px-3 rounded-xl"
            >
              {lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setOpenPanel(false)}
            className="w-full flex hover:bg-blue-400 items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
          >
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {openPanel && (
        <div
          onClick={() => setOpenPanel(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] lg:hidden transition-opacity duration-300"
        />
      )}

      {/* mock test */}
      <div className="max-w-6xl mx-auto">
        <BookContainer books={Books} loading={loading}/>
      </div>
    </div>
  );
}
