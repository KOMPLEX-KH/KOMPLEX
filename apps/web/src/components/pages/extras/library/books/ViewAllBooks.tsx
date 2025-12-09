"use client";

import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { feedLibraryService } from "@/services";
import type { Book, Subject } from "@core-types/content/library";

export default function ViewAllByCategory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const [booksInCategory, setBooksInCategory] = useState<Book[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryId) return;
      
      try {
        setLoading(true);
        const [booksResponse, subjectsResponse] = await Promise.all([
          feedLibraryService.getBooksBySubject(categoryId),
          feedLibraryService.getAllSubjects(),
        ]);
        setBooksInCategory(booksResponse.books);
        setSubjects(subjectsResponse);
      } catch (error) {
        console.error("Error fetching category books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryId]);

  if (!categoryId) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">មិនមានប្រភេទសៀវភៅនេះ</p>
      </div>
    );
  }

  const category = subjects.find((c) => c.id === categoryId);

  const handleBookSelected = (bookId: string) => {
    router.push(`?tab=library&book=${bookId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">រកមិនឃើញប្រភេទសៀវភៅ</p>
        <button
          onClick={() => router.push("?tab=library")}
          className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          ត្រឡប់ទៅទំព័រដើម
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => router.push("?tab=library")}
          type="button"
          className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none rounded-lg px-4 py-2 font-semibold transition duration-200 select-none shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          ត្រឡប់ក្រោយ
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
        </div>
      </div>

      {booksInCategory.length === 0 ? (
        <p className="text-gray-500 p-4">គ្មានសៀវភៅសម្រាប់ប្រភេទនេះ</p>
      ) : (
        <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border border-indigo-100">
          <div
            className="
            grid 
            grid-cols-2         
            sm:grid-cols-3   
            lg:grid-cols-4    
            gap-4
          "
          >
            {booksInCategory.map((b) => (
              <BookCard key={b.id} book={b} onClick={handleBookSelected} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
