"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import BookCard from "./BookCard";
import ViewAllByCategory from "./ViewAllBooks";
import BookSelectedPage from "./BookSelected";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import EmptyState from "../utils/EmptyState";
import { feedLibraryService } from "@/services";
import { subjectNameMap } from "@core-types/content/library";
import type { Book, Subject } from "@core-types/content/library";

export default function BookContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const bookSelectedFromUrl = searchParams.get("book");

  const [books, setBooks] = useState<Book[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResponse] = await Promise.all([
          feedLibraryService.getAllBooks(),
        ]);
        setBooks(booksResponse.books);
        setSubjects([]);
        
      } catch (error) {
        console.error("Error fetching library data:", error);
      }
    };

    fetchData();
  }, []);

  if (categoryFromUrl) {
    return (
      <ViewAllByCategory key={categoryFromUrl} />
    );
  }
  if (bookSelectedFromUrl) {
    return (
      <BookSelectedPage key={bookSelectedFromUrl} bookId={bookSelectedFromUrl} />
    );
  }


  const recommendedBooks = books.filter((b) => b.isRecommended);


  const displaySubjects = subjects.length > 0 
    ? subjects 
    : Array.from(new Set(books.map(b => b.subjectId)))
        .filter(id => id)
        .map(id => ({ 
          id, 
          name: subjectNameMap[id] || id
        }));

  console.log('📊 Display subjects:', displaySubjects);
  console.log('📊 Total books:', books.length);
  console.log('📊 Recommended books:', recommendedBooks.length);

  const handleBookSelected = (bookId: string) => {
    router.push(`?tab=library&book=${bookId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="flex flex-col pt-3">

      {/* Recommended Section - Only show if there are recommended books */}
      {recommendedBooks.length > 0 ? (
        <section className="flex flex-col gap-4 rounded-3xl border-none pb-4">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 bg-blue-600 rounded-3xl">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">ណែនាំ</h2>
                <p className="text-gray-500 text-xs sm:text-sm">សៀវភៅដែលអ្នកនឹងចូលចិត្ត</p>
              </div>
            </div>
          </div>

          {/* Books Row (horizontal scroll) */}
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

      {/* Empty state when no books at all */}
      {books.length === 0 && <EmptyState />}

      {displaySubjects.map((subject) => {
        if (subject.id === "all") return null;

        const booksInSubject = books.filter((b) => b.subjectId === subject.id);
        if (booksInSubject.length === 0) return null;
        return (
          <section key={subject.id}
            className="flex flex-col gap-4 rounded-3xl border-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-3xl">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{subject.name}</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">សៀវភៅដែលមានការពេញនិយម</p>
                </div>
              </div>

              <button
                onClick={() => router.push(`?tab=library&category=${subject.id}`)}
                className="text-indigo-600 bg-indigo-50/80 font-semibold px-4 py-2 rounded-3xl hover:bg-indigo-100 transition-colors flex items-center gap-2 group text-sm sm:text-base"
              >
                <span className="hidden sm:inline">មើលទាំងអស់</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Books Row for this category */}
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
  );
}