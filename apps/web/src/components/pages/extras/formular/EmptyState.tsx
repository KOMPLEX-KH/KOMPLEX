'use client';

import { Search, BookOpen } from "lucide-react";

interface EmptyStateProps {
  searchQuery?: string;
  selectedSubject?: string;
}

export default function EmptyState({ searchQuery, selectedSubject }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gray-100 rounded-full p-8 mb-6">
        {searchQuery ? (
          <Search className="w-16 h-16 text-gray-400" />
        ) : (
          <BookOpen className="w-16 h-16 text-gray-400" />
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {searchQuery ? "រកមិនឃើញរូបមន្ត" : "មិនទាន់មានរូបមន្ត"}
      </h3>
      <p className="text-gray-500 text-center max-w-md">
        {searchQuery 
          ? `ពុំមានលទ្ធផលសម្រាប់ "${searchQuery}"។ សូមសាកល្បងស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង។`
          : "រូបមន្តនឹងត្រូវបានបន្ថែមក្នុងពេលឆាប់ៗនេះ។"
        }
      </p>
    </div>
  );
}
