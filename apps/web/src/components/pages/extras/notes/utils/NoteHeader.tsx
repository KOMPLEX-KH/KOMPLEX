'use client';

import { Search, Plus } from "lucide-react";

export default function NoteHeader({ searchQuery, setSearchQuery, onAddNote }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          placeholder="ស្វែងរកកំណត់ត្រា..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none"
        />
      </div>

      <button
        onClick={onAddNote}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition-all"
      >
        <Plus className="w-5 h-5" />
      </button>

    </div>
  );
}
