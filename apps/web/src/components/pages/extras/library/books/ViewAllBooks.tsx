"use client";

import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { feedLibraryService, feedCurriculumsService } from "@/services";
import type { Book } from "@core-types/content/library";
import type { Grade } from "@/types/docs/curriculum";

export default function ViewAllByCategory() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const [booksInCategory, setBooksInCategory] = useState<Book[]>([]);
  const [curriculum, setCurriculum] = useState<Grade[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryId) return;
      
      try {
        setLoading(true);
        const [booksResponse] = await Promise.all([
          feedLibraryService.getBooksBySubject(categoryId),
        ]);
        setBooksInCategory(booksResponse.books);
        
        // Fetch curriculum if not in localStorage
        if (curriculum.length === 0) {
          const curriculumData = await feedCurriculumsService.getCurriculum();
          setCurriculum(curriculumData);
          localStorage.setItem('curriculum', JSON.stringify(curriculumData));
        }
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

  // Get subject from curriculum
  const allSubjects = curriculum.flatMap(grade => grade.subjects);
  const subject = allSubjects.find((s) => s.id === Number(categoryId));

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500 text-lg">កំពុងផ្ទុក...</p>
      </div>
    );
  }

  if (!subject) {
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

  const handleBookSelected = (bookId: string) => {
    router.push(`?tab=library&book=${bookId}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("?tab=library")}
          type="button"
          className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none rounded-lg px-4 py-2 font-semibold transition duration-200 select-none shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          ត្រឡប់ក្រោយ
        </button>
        
      </div>

      {booksInCategory.length === 0 ? (
        <p className="text-gray-500 p-4">គ្មានសៀវភៅសម្រាប់ប្រភេទនេះ</p>
      ) : (
        <section className="flex flex-col gap-4">
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