'use client';


import { useState } from "react";
import NoteContainer from "./components/NotePage";
import NoteHeader from "./utils/NoteHeader";
import FilterPanel from "./utils/FilterPanel";
import NoteForm from "./form/NoteForm";

// Simple modal component
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-xl p-5 w-full max-w-lg relative border border-gray-100"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default function NotesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [notes, setNotes] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const availableTags = ["សំខាន់", "ការងារ", "សិក្សា" , "ផ្សេងៗ"];

  const handleAddNote = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNoteSubmit = (note: { title: string; content: string; tags: string[] }) => {
    setNotes(prev => [
      {
        ...note,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setModalOpen(false);
  };

  return (
    <div className="">
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
          availableTags={["គ្រប់ប្រភេទ", ...availableTags]}
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

        <Modal open={modalOpen} onClose={handleModalClose}>
          <NoteForm onSubmit={handleNoteSubmit} onCancel={handleModalClose} availableTags={availableTags} />
        </Modal>

      </div>
    </div>
  );
}
