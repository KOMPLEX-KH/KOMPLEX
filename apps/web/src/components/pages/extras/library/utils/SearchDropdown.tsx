import { BookOpen, Search, User } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Book } from "@core-types/content/library";

interface SearchDropdownProps {
  isOpen: boolean;
  searchQuery: string;
  books: Book[];
  onBookClick: (bookId: string) => void;
  onClose?: () => void;
  currentSubjectId?: number | null; // Add this prop to filter by subject
}

export default function SearchDropdown({
  isOpen,
  searchQuery,
  books,
  onBookClick,
  onClose,
  currentSubjectId, // Add this
}: SearchDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger the expansion animation
      setTimeout(() => setIsExpanded(true), 10);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      setIsExpanded(false);
      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter books based on search query
  const filteredBooks = searchQuery.trim()
    ? books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : currentSubjectId
      ? books.filter(book => book.subjectId === currentSubjectId).slice(0, 6) // Show books from current subject
      : books.filter(book => book.isRecommended).slice(0, 6); // Show recommended books when no search query

  return (
    <>
      {/* Backdrop overlay to prevent scrolling */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      <div
        className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out z-50 ${isExpanded
          ? "max-h-[500px] opacity-100 scale-100"
          : "max-h-12 opacity-0 scale-95"
          }`}
        style={{
          transformOrigin: "top center",
        }}
      >
        <div className="p-4">

          {/* Books List */}
          <div className="max-h-[400px] overflow-y-auto space-y-2">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <button
                  key={book.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookClick(String(book.id));
                    onClose?.();
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-3xl hover:bg-gray-50 transition-all duration-200 text-left group"
                >
                  {/* Book Cover Placeholder */}
                  <div className="relative w-20 h-28 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                    <Image
                      src={book.imageUrl}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      unoptimized
                    />
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-indigo-600 transition-colors">
                      {book.title}
                    </h4>
                    <div className="flex items-center">
                      <User className="w-3 h-3 inline-block text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500 truncate">{book.author}</p>
                    </div>

                  </div>

                  {/* Arrow Icon // ! use lucide icon*/}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-bold text-[20px]">មិនមានលទ្ធផល</p>
                <p className="text-gray-400 text-[14px] mt-1">សូមព្យាយាមស្វែងរកម្តងទៀត</p>
              </div>
            )}
          </div>

          {/* Footer - Show more link */}
          {filteredBooks.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium py-2 rounded-full hover:bg-indigo-50 transition-colors">
                មើលទាំងអស់ ({filteredBooks.length})
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
