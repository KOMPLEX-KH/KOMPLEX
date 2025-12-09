'use client';

import { useState } from "react";
import NoteContainer from "./components/NotePage";
import NoteHeader from "./utils/NoteHeader";
import FilterPanel from "./utils/FilterPanel";

export default function NotesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // all, today, week, month
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("recent"); // recent, oldest, alphabetical
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    // TODO: Implement add note functionality
  };

  const availableTags = ["គ្រប់ប្រភេទ", "សំខាន់", "ការងារ", "សិក្សា"];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">

        <NoteHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddNote={handleAddNote}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <FilterPanel
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          sortBy={sortBy}
          setSortBy={setSortBy}
          availableTags={availableTags}
          notesCount={notes.length}
        />

        <NoteContainer
          notes={notes}
          searchQuery={searchQuery}
          selectedFilter={selectedFilter}
          selectedTag={selectedTag}
          sortBy={sortBy}
          viewMode={viewMode}
          onAddNote={handleAddNote}
        />

      </div>
    </div>
  );
}
