'use client';

import { FileText } from "lucide-react";

export default function NoteCard({ note, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-blue-400 
      hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="bg-blue-50 p-3 rounded-lg">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-800 mb-1 truncate">
            {note.title}
          </h4>

          <p className="text-sm text-gray-500 line-clamp-2">
            {note.content}
          </p>

          <p className="text-xs text-gray-400 mt-2">
            {note.date}
          </p>
        </div>
      </div>
    </div>
  );
}
