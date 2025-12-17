'use client';

import { FileText } from "lucide-react";

export default function NoteCard({ note, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-lg text-gray-800 mb-1 truncate group-hover:text-blue-700 transition">
            {note.title}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            {note.tags && note.tags.length > 0 && (
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                {note.tags[0]}
              </span>
            )}
            <span className="text-xs text-gray-400 ml-auto">{note.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
