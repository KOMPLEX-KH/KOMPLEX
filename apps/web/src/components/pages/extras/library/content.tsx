'use client';

import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BookContainer from "./books/BookContainer";
import { ViewAllByCategorySkeleton, BookSelectedSkeleton } from "./utils/BookSkeleton";
import ExtraHeader from "./utils/LibrayHeader";
import { feedLibraryService } from "@/services";
import type { Subject, Book } from "@core-types/content/library";

export default function LibraryContent() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  const [loading, setLoading] = useState(true);

  const [openPanel, setOpenPanel] = useState(false);
  const [openSubjectDropdown, setOpenSubjectDropdown] = useState(false);
  const [openLessonDropdown, setOpenLessonDropdown] = useState(false);

  const filterRef = useRef(null);
  const panelRef = useRef(null);

  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const bookSelectedFromUrl = searchParams.get("book");

  const prevCategoryRef = useRef(null);
  const prevBookRef = useRef(null);

  // Fetch subjects and books on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksData] = await Promise.all([
          feedLibraryService.getAllBooks(),
        ]);
        setSubjects([]); // Empty until backend is ready
        setBooks(booksData.books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const categoryChanged = prevCategoryRef.current !== categoryFromUrl;
    const bookChanged = prevBookRef.current !== bookSelectedFromUrl;

    prevCategoryRef.current = categoryFromUrl;
    prevBookRef.current = bookSelectedFromUrl;

    if ((categoryChanged && categoryFromUrl) || (bookChanged && bookSelectedFromUrl)) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timer);
    } else {
      // When navigating back to base (no category/book), disable loading immediately
      setLoading(false);
    }
  }, [categoryFromUrl, bookSelectedFromUrl]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        panelRef.current &&
        filterRef.current &&
        !panelRef.current.contains(e.target) &&
        !filterRef.current.contains(e.target)
      ) {
        setOpenPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // lesson list (for now, you can add lesson fetching later if needed)
  const lessons = [{ id: "all", name: "គ្រប់មេរៀន" }];

  const handleBookClick = (bookId: string) => {
    router.push(`?tab=library&book=${bookId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">

      {/* Header */}
      {!bookSelectedFromUrl && (
        <ExtraHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedLesson={selectedLesson}
          setSelectedLesson={setSelectedLesson}
          openSubjectDropdown={openSubjectDropdown}
          setOpenSubjectDropdown={setOpenSubjectDropdown}
          openLessonDropdown={openLessonDropdown}
          setOpenLessonDropdown={setOpenLessonDropdown}
          filterRef={filterRef}
          panelRef={panelRef}
          openPanel={openPanel}
          setOpenPanel={setOpenPanel}
          lessons={lessons}
          subjects={subjects}
          books={books}
          onBookClick={handleBookClick}
          currentSubjectId={categoryFromUrl ? Number(categoryFromUrl) : null}
        />
      )}

      <div className="max-w-6xl mx-auto pt-5">
        {loading ? (
          categoryFromUrl ? (
            <ViewAllByCategorySkeleton />
          ) : bookSelectedFromUrl ? (
            <BookSelectedSkeleton />
          ) : (
            null
          )
        ) : (
          <BookContainer />
        )}
      </div>
    </div>
  );
}
