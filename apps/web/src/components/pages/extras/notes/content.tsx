'use client';

import { useRef, useState } from "react";
import NoteHeader from "./utils/NoteHeader";
import { Plus } from "lucide-react";

export default function NotesContent() {

  const [searchQuery, setSearchQuery] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const filterRef = useRef(null);

  return (
    <div className="flex flex-col gap-3 relative min-h-screen">
      <NoteHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openPanel={openPanel}
        setOpenPanel={setOpenPanel}
        filterRef={filterRef}
      />

      <div className="absolute bottom-5 right-5">
         <button ref={filterRef}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
          </button>  
      </div>
    </div>
  );
}
