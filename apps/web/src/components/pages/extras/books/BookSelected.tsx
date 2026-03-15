"use client";

import { ArrowLeft, User, GraduationCap } from "lucide-react";
import BookCard from "./BookCard";
import { useRouter } from "next/navigation";
import type { Book } from "@core-types/api-types/books";
import type { Grade, Subject } from "@core-types/api-types/curriculum";

type Props = {
  book: Book;
  relatedBooks: Book[];
  curriculum: Grade[];
};

export default function BookSelectedPage({ book, relatedBooks, curriculum }: Props) {
  const router = useRouter();

  const gradeInfo = curriculum.find((grade) => grade.id === book.gradeId);

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => router.push("/extra/books")}
          type="button"
          className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none rounded-full px-2 py-2 font-semibold transition duration-200 select-none shadow-sm dark:text-white dark:bg-indigo-900/80"
        >
          <ArrowLeft className="w-5 h-5 text-indigo-600 dark:text-white" />
        </button>
      </div>

      {/* Book Detail Section */}
      <div className="rounded-3xl border-1 border-gray-200 dark:border-zinc-800 overflow-hidden mb-4 mt-4">
        <div className="grid md:grid-cols-5 gap-8 p-5">
          {/* Book Cover */}
          <div className="md:col-span-2">
            <div className="relative aspect-[9/13] rounded-3xl overflow-hidden">
              <img
                src={book.imageUrl || "/placeholder-book.jpg"}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-zinc-400 mb-4">{book.title}</h1>

              <div className="mb-4 flex items-center gap-5 ">
                <div className="flex items-center gap-3 ">
                  <User className="w-5 h-5 text-gray-500 dark:text-zinc-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-zinc-400">អ្នកនិពន្ធ</p>
                    <p className="text-[15px] font-medium text-gray-900 dark:text-zinc-400">{book.author}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 dark:text-zinc-400 rounded-full font-medium">
                  <GraduationCap className="w-4 h-4 text-green-700 dark:text-zinc-400" />
                  {gradeInfo?.name || `ថ្នាក់ទី ${gradeInfo.name}`}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-400 mb-3">ពិពណ៌នា</h2>
                <p className="text-gray-700 dark:text-zinc-400 leading-relaxed text-[15px]">{book.description}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => window.open(book.pdfUrl, "_self")}
                  className="flex-1 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
                >
                  ចាប់ផ្តេីមអាន
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <section className="flex flex-col gap-4 bg-white dark:bg-zinc-900 shadow-sm rounded-3xl p-4 border-1 border-gray-200 dark:border-zinc-800">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-zinc-400">សៀវភៅពាក់ព័ន្ធផ្សេងៗទៀត</h2>
          <div
            className="
              grid grid-flow-col
              auto-cols-[65%]
              sm:auto-cols-[33%]
              lg:auto-cols-[25%]
              gap-4 pb-2 scroll-smooth
              overflow-x-auto whitespace-nowrap scrollbar-hide
            "
          >
            {relatedBooks.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => router.push(`/extra/books?book=${book.id}`)} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
