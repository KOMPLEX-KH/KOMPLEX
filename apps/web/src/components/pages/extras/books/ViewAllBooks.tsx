"use client";

import React, { useMemo } from "react";
import BookCard from "./BookCard";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Book } from "@core-types/content/books";
import type { Grade } from "@core-types/docs/curriculum";

interface ViewAllByCategoryProps {
  books: Book[];
  curriculum: Grade[];
  categoryId: string;
}

export default function ViewAllByCategory({ books, curriculum, categoryId }: ViewAllByCategoryProps) {
  const router = useRouter();

  // Filter books by category
  const booksInCategory = useMemo(() => {
    return books.filter(book => book.subjectId === Number(categoryId));
  }, [books, categoryId]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryId]);

  if (!categoryId) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">មិនមានប្រភេទសៀវភៅនេះ</p>
      </div>
    );
  }

  const subject = curriculum
    .flatMap(g => g.subjects)
    .find(s => s.id === Number(categoryId));

  if (!subject) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">រកមិនឃើញប្រភេទសៀវភៅ</p>
        <button
          onClick={() => router.push("/extra/books")}
          className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          ត្រឡប់ទៅទំព័រដើម
        </button>
      </div>
    );
  }

  const handleBookSelected = (bookId: number) => {
    router.push(`/extra/books?book=${bookId}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("/extra/books")}
          type="button"
          className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-100 hover:bg-indigo-200 rounded-full px-2 py-2 shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {booksInCategory.length === 0 ? (
        <p className="text-gray-500 p-4">គ្មានសៀវភៅសម្រាប់ប្រភេទនេះ</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {booksInCategory.map(b => (
            <BookCard key={b.id} book={b} onClick={handleBookSelected} />
          ))}
        </div>
      )}
    </div>
  );
}
