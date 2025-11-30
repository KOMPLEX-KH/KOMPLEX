'use client';

import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { categories, lessonsBySubject, Books } from "@/types/library/library";
import { useRouter, useSearchParams } from "next/navigation";
import SaveBooks from "./SaveBooks";
import { Save } from "lucide-react";


export default function ExtraHeader({
    searchQuery,
    setSearchQuery,
    selectedSubject,
    setSelectedSubject,
    selectedLesson,
    setSelectedLesson,
    openPanel,
    setOpenPanel,
    filterRef,
    panelRef,
    lessons,
}) {
    
    return(
        <>  
            <div className="flex items-center gap-3 relative">          
                
                {/* Search section */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ស្វែងរកសៀវភៅ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-500 outline-none"
                  />
                </div>
                
    
                {/* filter btn section */}
                <button ref={filterRef}
                  onClick={() => setOpenPanel(!openPanel)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Filter className="w-5 h-5" />
                </button>

                

        
                {openPanel && (
                  <div ref={panelRef}
                    className="absolute bg-white rounded-2xl shadow-2xl border-1 border-gray-200 z-[999] p-3 animate-slide-down"
                    style={{
                      top: "110%",
                      right: "0",
                      width: "270px",
                    }}
                  >
                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setOpenPanel(false)}
                      className="absolute p-3 top-4 right-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">ការជ្រើសរើស</h2>
                
                    {/* Subject section */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">មុខវិជ្ជា</label>
                      <div className="relative">
                        <select value={selectedSubject}
                          onChange={(e) => {
                            setSelectedSubject(e.target.value);
                            setSelectedLesson("all");
                          }}
                          className="w-full appearance-none bg-white border-2 border-gray-200  focus:ring-blue-200 py-3 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none"
                        >
                          {categories.map((s) => (
                            <option key={s.id} value={s.id} className="py-2 text-sm"> {s.name} </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                      
                    {/* Lesson section */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">មេរៀន</label>
                      <div className="relative">             
                        <select value={selectedLesson}
                          onChange={(e) => setSelectedLesson(e.target.value)}
                          className="w-full appearance-none bg-white border-2 border-gray-200  focus:ring-blue-200 py-3 px-4 pr-10 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 font-medium outline-none"
                        >
                          {lessons.map((l) => (
                            <option className="py-2 text-sm" key={l.id} value={l.id}> {l.name} </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                      
                    <button onClick={() => setOpenPanel(false)}
                      className="w-full flex hover:bg-blue-400 items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold transition-all duration-300"
                    >
                      <Filter className="w-5 h-5" />
                      Filter
                    </button>
                  </div>
                )}
            </div>    
        </>
    )
}