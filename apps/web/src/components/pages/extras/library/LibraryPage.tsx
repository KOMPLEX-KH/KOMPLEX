'use client';

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BookContainer from "./books/BookContainer";
import { ViewAllByCategorySkeleton, BookSelectedSkeleton } from "./BookSkeleton";
import { feedLibraryService } from "@/services";
import LibraryHeader from "./LibrayHeader";
import type { Subject, Book } from "@core-types/content/library";

export default function LibraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const filterRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const category = searchParams.get("category");
  const book = searchParams.get("book");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    async function fetchBooks() {
      setLoading(true);

      try {
        const data = await feedLibraryService.getAllBooks();
        setBooks(data.books);
        setSubjects([]);
      } catch (err) {
        console.error(err);
      }

      timer = setTimeout(() => setLoading(false), 1000);
    }

    fetchBooks();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);



  const handleBookClick = (id: string) => {
    router.push(`?tab=library&book=${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {!book && (
        <LibraryHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterRef={filterRef}
          panelRef={panelRef}
          books={books}
          onBookClick={handleBookClick}
          currentSubjectId={category ? Number(category) : null}
        />
      )}

      <div className="max-w-6xl mx-auto pt-5">
        {loading ? (
          <ViewAllByCategorySkeleton />
        ) : (
          <BookContainer books={books} />
        )}
      </div>
    </div>
  );
}
