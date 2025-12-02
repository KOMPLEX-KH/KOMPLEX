'use client';

import NoteCard from "./NoteCards";
import EmptyState from "../utils/EmptyState";
import { Search } from "lucide-react";

export default function NoteContainer({ notes, searchQuery, onAddNote }) {

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredNotes.map(note => (
        <NoteCard 
          key={note.id}
          note={note}
          onClick={() => console.log("Open note:", note.id)}
        />
      ))}
    </div>
  );
}
