'use client';

import { Search, BookOpen, User, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import type { Book } from "@core-types/content/library";

interface Props {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  filterRef: React.RefObject<HTMLButtonElement>;
  panelRef: React.RefObject<HTMLDivElement>;
  books: Book[];
  onBookClick: (id: string) => void;
  currentSubjectId?: number | null;
}

export default function LibraryHeader({
  searchQuery,
  setSearchQuery,
  books,
  onBookClick,
  currentSubjectId,
}: Props) {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Filter books
  const filteredBooks = useMemo(() => {
    if (searchQuery.trim()) {
      return books.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (currentSubjectId) {
      return books.filter(b => b.subjectId === currentSubjectId).slice(0, 6);
    }

    return books.filter(b => b.isRecommended).slice(0, 6);
  }, [books, searchQuery, currentSubjectId]);

  return (
    <div ref={wrapperRef} className="relative">

      <div className="relative mt-3">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="ស្វែងរកសៀវភៅ..."
          className="w-full pl-12 pr-4 py-3 border-1 border-gray-400 rounded-full outline-none "
        />
      </div>


      {/* pop up */}
      {open && (
        <div className="absolute animate-slide-down transition-all top-full mt-2 w-full bg-white rounded-3xl shadow-xl border border-gray-300 z-50">

          <div className="p-4 max-h-[400px] overflow-y-auto space-y-2 scrollbar-hide">

            {filteredBooks.length ? filteredBooks.map(book => (

              <button
                key={book.id}
                onClick={() => onBookClick(String(book.id))}
                className="w-full flex gap-3 p-3 rounded-3xl hover:bg-gray-50 group"
              >
                <div className="relative w-20 h-28 overflow-hidden rounded-md">
                  <Image src={book.imageUrl} alt={book.title} fill className="object-cover" unoptimized />
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold text-sm truncate group-hover:text-indigo-600">
                        {book.title}
                      </h4>

                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {book.author}
                      </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100" />
                </div>
              </button>

            )) : (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="font-bold">មិនមានលទ្ធផល</p>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
