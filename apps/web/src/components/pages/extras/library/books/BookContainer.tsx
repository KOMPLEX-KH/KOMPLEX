"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import BookCard from "./BookCard";
import { categories, Books } from "@/types/library/library";
import ViewAllByCategory from "./ViewAllBooks";
import BookSelectedPage from "./BookSelected";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";

export default function BookContainer({ books = Books, loading = false }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const bookSelectedFromUrl = searchParams.get("book");

  if (categoryFromUrl) {
    return (
      <ViewAllByCategory key={categoryFromUrl} />
    );
  }
  if (bookSelectedFromUrl) {
    return (
      <BookSelectedPage key={bookSelectedFromUrl} />
    );
  }

  const recommendedBooks = books.filter((b) => b.isRecommended);

  const handleBookSelected = (bookId)=>{
    router.push(`?tab=library&book=${bookId}`);
    // router.push(`/book/${bookId}`);
  }

  return (
    <div className="flex flex-col gap-10 pt-3">

      {/* ===== Recommended Section ===== */}
      <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
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
          {recommendedBooks.length > 0 ? (
            recommendedBooks.map((b) => <BookCard key={b.id} book={b} onClick={handleBookSelected} />)
          ) : (
            <p className="text-gray-500 text-center w-full py-6">គ្មានសៀវភៅណែនាំសម្រាប់បង្ហាញ</p>
          )}
        </div>
      </section>


      {categories.map((cat) => {
        if (cat.id === "all") return null;

        const booksInCategory = books.filter((b) => b.category === cat.id);
        if (booksInCategory.length === 0) return null;

        return (
          <section key={cat.id}
            className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{cat.name}</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">សៀវភៅដែលមានការពេញនិយម</p>
                </div>
              </div>

              <button
                onClick={() => router.push(`?tab=library&category=${cat.id}`)}
                className="text-indigo-600 bg-indigo-50/80 font-semibold px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors flex items-center gap-2 group text-sm sm:text-base"
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
              {booksInCategory.map((b) => (
                <BookCard key={b.id} book={b} onClick={handleBookSelected} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}