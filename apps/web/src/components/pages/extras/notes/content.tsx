'use client';

import { useState } from "react";
import NoteContainer from "./components/NotePage";
import NoteHeader from "./utils/NoteHeader";

export default function NotesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: `កំណត់ត្រាថ្មី ${notes.length + 1}`,
      content: "នេះគឺជាកំណត់ត្រាថ្មី។ អ្នកអាចកែប្រែវាបាន។",
      date: new Date().toLocaleDateString('km-KH', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      })
    };

    setNotes([newNote, ...notes]);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">

        <NoteHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddNote={handleAddNote}
        />

        <NoteContainer
          notes={notes}
          searchQuery={searchQuery}
          onAddNote={handleAddNote}
        />

      </div>
    </div>
  );
}
