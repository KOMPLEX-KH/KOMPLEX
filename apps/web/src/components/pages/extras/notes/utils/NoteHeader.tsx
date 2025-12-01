'use client';

import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";


export default function NoteHeader({
    searchQuery,
    setSearchQuery,
    openPanel,
    setOpenPanel,
    filterRef,
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
            </div>    
        </>
    )
}