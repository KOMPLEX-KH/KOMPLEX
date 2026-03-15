'use client';

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BookOpen, ArrowRight } from "lucide-react";
import BookCard from "@/components/pages/extras/books/BookCard";
import ViewAllByCategory from "@/components/pages/extras/books/ViewAllBooks";
import { ViewAllByCategorySkeleton } from "@/components/pages/extras/books/BookSkeleton";
import { feedBooksService, feedCurriculumsService } from "@/services";
import BooksHeader from "@/components/pages/extras/books/BooksHeader";
import BookSelectedPage from "@/components/pages/extras/books/BookSelected";
import type { Book } from "@core-types/api-types/books";
import type { Grade, Subject } from "@core-types/api-types/curriculum";

export default function BooksContent() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);


  // URL parameters for routing
  const category = searchParams.get("category");
  const bookId = searchParams.get("book");


  // fetch curriculum from local storage
  const [curriculum, setCurriculum] = useState<Grade[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const filterRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);


  // Initial books data fetch
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    async function fetchBooks() {
      setLoading(true);

      try {
        const data = await feedBooksService.getAllBooks();
        setBooks(data.data);
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

  // Curriculum data fetch with caching
  useEffect(() => {
    const fetchCurriculum = async () => {
      if (curriculum.length === 0) {
        try {
          const curriculumData = await feedCurriculumsService.getCurriculum();
          setCurriculum(curriculumData.data);
          localStorage.setItem('curriculum', JSON.stringify(curriculumData.data));
        } catch (error) {
          console.error("Error fetching curriculum data:", error);
        }
      }
    };

    fetchCurriculum();
  }, [curriculum.length]);

  // Handle book selection
  const handleBookSelected = (bookId: number) => {
    router.push(`/extra/books?book=${bookId}`);
  };


  // Handle category view
  if (category) {
    return (
      <div className="relative">
        <div className="max-w-6xl mx-auto pt-5">
          <ViewAllByCategory
            key={category}
            books={books}
            curriculum={curriculum}
            categoryId={category}
          />
        </div>
      </div>
    );
  }

  // Handle book selection view
  if (bookId) {
    const selectedBook = books.find(book => book.id === Number(bookId));
    if (selectedBook) {
      const relatedBooks = books.filter(book =>
        book.subjectId === selectedBook.subjectId &&
        book.id !== selectedBook.id
      ).slice(0, 10);

      return (
        <div className="relative">
          <div className="max-w-6xl mx-auto pt-5">
            <BookSelectedPage
              book={selectedBook}
              relatedBooks={relatedBooks}
              curriculum={curriculum}
            />
          </div>
        </div>
      );
    }
  }

  // filter recommended books
  // should have filter
  const recommendedBooks = books.filter((b) => b.isRecommended);

  // flat subjects from all grade into single array
  const allSubjects = curriculum.flatMap(grade =>
    grade.subjects.map(subject => ({
      id: subject.id,
      name: subject.name,
      icon: subject.icon
    }))
  );

  // Only show subjects that have associated books
  const displaySubjects = allSubjects.filter(subject =>
    books.some(book => book.subjectId === subject.id)
  );

  return (
    <div className="relative">
      <BooksHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterRef={filterRef}
        panelRef={panelRef}
        books={books}
        onBookClick={handleBookSelected}
        currentSubjectId={category ? Number(category) : null}
      />

      <div className="max-w-6xl mx-auto pt-5">
        {loading ? (
          <ViewAllByCategorySkeleton />
        ) : (
          <div className="flex flex-col pt-3">

            {/* recommendation book */}
            {recommendedBooks.length > 0 ? (
              <section className="flex flex-col gap-4 rounded-3xl border-none pb-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-indigo-600  dark:text-white dark:bg-indigo-900/80 rounded-3xl">
                      <BookOpen className="w-5 h-5 text-white dark:text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-zinc-400">ណែនាំ</h2>
                      <p className="text-gray-500 dark:text-zinc-400 text-xs sm:text-sm">សៀវភៅដែលអ្នកនឹងចូលចិត្ត</p>
                    </div>
                  </div>
                </div>

                <div className="
                  grid grid-flow-col
                  auto-cols-[65%]
                  sm:auto-cols-[33%]
                  lg:auto-cols-[25%]
                  gap-4 pb-2 scroll-smooth
                  overflow-x-auto whitespace-nowrap scrollbar-hide
                ">
                  {recommendedBooks.map((b) => <BookCard key={b.id} book={b} onClick={handleBookSelected} />)}
                </div>
              </section>
            ) : null}


            {/* display all book by category */}
            {displaySubjects.map((subject) => {
              const booksInSubject = books.filter((b) => b.subjectId === subject.id);
              if (booksInSubject.length === 0) return null;
              return (
                <section key={subject.id}
                  className="flex flex-col gap-4 rounded-3xl border-none mb-3"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-600 dark:bg-indigo-900/80 rounded-3xl">
                        <BookOpen className="w-5 h-5 text-white dark:text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-zinc-400">{subject.name}</h2>
                        <p className="text-gray-500 dark:text-zinc-400 text-xs sm:text-sm">សៀវភៅដែលមានការពេញនិយម</p>
                      </div>
                    </div>

                    <button
                      onClick={() => router.push(`/extra/books?category=${subject.id}`)}
                      className="text-indigo-600 bg-indigo-50/80 font-semibold px-4 py-2 rounded-3xl hover:bg-indigo-100 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline">មើលទាំងអស់</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="
                    grid grid-flow-col
                    auto-cols-[65%]
                    sm:auto-cols-[33%]
                    lg:auto-cols-[25%]
                    gap-4 pb-2 scroll-smooth
                    overflow-x-auto whitespace-nowrap scrollbar-hide
                  ">
                    {booksInSubject.map((b) => (
                      <BookCard key={b.id} book={b} onClick={handleBookSelected} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}