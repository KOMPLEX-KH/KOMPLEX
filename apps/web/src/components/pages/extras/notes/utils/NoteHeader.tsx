'use client';

import { Search, Plus, Grid, List } from "lucide-react";

interface NoteHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddNote: () => void;
  viewMode: string;
  setViewMode: (mode: string) => void;
}

export default function NoteHeader({ 
  searchQuery, 
  setSearchQuery, 
  onAddNote,
  viewMode,
  setViewMode
}: NoteHeaderProps) {
  return (
    <div className="mb-6">
      {/* Title Section */}
      {/* <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">កំណត់ត្រារបស់ខ្ញុំ</h1>
        <p className="text-gray-500 text-sm">រៀបចំ និងគ្រប់គ្រងកំណត់ត្រារបស់អ្នក</p>
      </div> */}

      {/* Search and Actions */}
      <div className="flex items-center gap-3">
        
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            placeholder="ស្វែងរកកំណត់ត្រា..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-blue-500 outline-none transition-colors"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-2xl p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "grid"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "list"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* Add Note Button */}
        <button
          onClick={onAddNote}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">បង្កើតថ្មី</span>
        </button>

      </div>
    </div>
  );
}
