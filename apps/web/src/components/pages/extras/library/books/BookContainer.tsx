"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import BookCard from "./BookCard";
import ViewAllByCategory from "./ViewAllBooks";
import BookSelectedPage from "./BookSelected";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { feedCurriculumsService } from "@/services";
import type { Book } from "@core-types/content/library";
import type { Grade } from "@/types/docs/curriculum";

interface BookContainerProps {
  books: Book[];
}

export default function BookContainer({ books }: BookContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const categoryFromUrl = searchParams.get("category");
  const bookSelectedFromUrl = searchParams.get("book");
  
  // fetch curriculum from local stroage
  const [curriculum, setCurriculum] = useState<Grade[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // fetch curriculum once
  useEffect(() => {
    const fetchCurriculum = async () => {
      if (curriculum.length === 0) {
        try {
          const curriculumData = await feedCurriculumsService.getCurriculum();
          setCurriculum(curriculumData);
          localStorage.setItem('curriculum', JSON.stringify(curriculumData));
        } catch (error) {
          console.error("Error fetching curriculum data:", error);
        }
      }
    };

    fetchCurriculum();
  }, [curriculum.length]);

  if (categoryFromUrl) {
    return (
      <ViewAllByCategory 
        key={categoryFromUrl} 
        books={books}
        curriculum={curriculum}
        categoryId={categoryFromUrl}
      />
    );
  }

  const selectedBook = books.find((b) => String(b.id) === bookSelectedFromUrl) || null;
  const relatedBooks =
    selectedBook && selectedBook.subjectId
      ? books.filter((b) => b.subjectId === selectedBook.subjectId && String(b.id) !== String(selectedBook.id)).slice(0, 5)
      : [];
  
  if (bookSelectedFromUrl && selectedBook) {
    return (
      <BookSelectedPage
        key={bookSelectedFromUrl}
        book={selectedBook}
        relatedBooks={relatedBooks}
        curriculum={curriculum}
      />
    );
  }


  const recommendedBooks = books.filter((b) => b.isRecommended);


  // flat subjects from all grade into single array
  const allSubjects = curriculum.flatMap(grade =>
    grade.subjects.map(subject =>({
      id : subject.id,
      name: subject.name,
      icon: subject.icon
    }))
  );
  
  const displaySubjects = allSubjects.filter(subject =>
    books.some(book => book.subjectId === subject.id)
  );

  const handleBookSelected = (bookId: number) => {
    router.push(`?tab=library&book=${bookId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="flex flex-col pt-3">

      {/* display recommendation book */}
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