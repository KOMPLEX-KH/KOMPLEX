'use client';

import NoteCard from "./NoteCards";
import EmptyState from "../utils/EmptyState";
import { Search } from "lucide-react";

interface NoteContainerProps {
  notes: any[];
  searchQuery: string;
  selectedFilter: string;
  selectedTag: string;
  sortBy: string;
  viewMode: string;
  onAddNote: () => void;
}

export default function NoteContainer({ 
  notes, 
  searchQuery, 
  selectedFilter,
  selectedTag,
  sortBy,
  viewMode,
  onAddNote 
}: NoteContainerProps) {

  // Filter by search query
  let filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter by date
  if (selectedFilter !== "all") {
    const now = new Date();
    filteredNotes = filteredNotes.filter(note => {
      const noteDate = new Date(note.createdAt);
      
      if (selectedFilter === "today") {
        return noteDate.toDateString() === now.toDateString();
      } else if (selectedFilter === "week") {
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return noteDate >= weekAgo;
      } else if (selectedFilter === "month") {
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return noteDate >= monthAgo;
      }
      return true;
    });
  }

  // Filter by tag
  if (selectedTag !== "all") {
    filteredNotes = filteredNotes.filter(note => 
      note.tags && note.tags.includes(selectedTag)
    );
  }

  // Sort notes
  filteredNotes.sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  if (notes.length === 0 && searchQuery === "") {
    return <EmptyState onAddNote={onAddNote} />;
  }

  if (filteredNotes.length === 0) {
    return (
      <div className="text-center py-20">
        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          រកមិនឃើញ
        </h3>
        <p className="text-gray-400">
          គ្មានកំណត់ត្រាដែលត្រូវនឹងការស្វែងរករបស់អ្នក
        </p>
      </div>
    );
  }

  return (
    <div className={
      viewMode === "grid"
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        : "space-y-3"
    }>
      {filteredNotes.map(note => (
        <NoteCard 
          key={note.id}
          note={note}
          viewMode={viewMode}
          onClick={() => console.log("Open note:", note.id)}
        />
      ))}
    </div>
  );
}
