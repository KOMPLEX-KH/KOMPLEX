"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, Eye, BookOpen, User, GraduationCap, Tag, FileText } from "lucide-react";
import BookCard from "./BookCard";
import { extraScrollRef } from "@/app/extra/page";
import { feedLibraryService } from "@/services";
import type { Book, Subject } from "@core-types/content/library";

export default function BookSelectedPage({ bookId }: { bookId: string }) {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [bookResponse, subjectsResponse] = await Promise.all([
          feedLibraryService.getBookById(bookId),
          feedLibraryService.getAllSubjects(),
        ]);
        setSelectedBook(bookResponse);
        setSubjects(subjectsResponse);

        // Fetch related books
        if (bookResponse.categoryId) {
          const relatedResponse = await feedLibraryService.getBooksBySubject(bookResponse.categoryId);
          setRelatedBooks(relatedResponse.books.filter(b => b.id !== bookId).slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    if (extraScrollRef.current) {
      extraScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [bookId]);


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

  if (!selectedBook) {
    return (
      <div className="w-full text-center py-20">
        <p className="text-gray-500 text-lg">រកមិនឃើញសៀវភៅ</p>
      </div>
    );
  }

  const handleDownload = async () => {
    try {
      alert("Testing download...");
    } catch (error) {
      alert("Download failed.");
      console.error(error);
    }
  };

  const subjectInfo = subjects.find(subject => subject.id === selectedBook.categoryId);

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => router.push("?tab=library")}
          type="button"
          className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none rounded-lg px-4 py-2 font-semibold transition duration-200 select-none shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          {/* ត្រឡប់ក្រោយ */}
        </button>
      </div>

      {/* Book Detail Section */}
      <div className="rounded-2xl border-1 border-gray-200 overflow-hidden mb-4 mt-4">
        <div className="grid md:grid-cols-5 gap-8 p-5">
          {/* Book Cover */}
          
          <div className="md:col-span-2">
            <div className="relative h-70 md:h-full rounded-xl overflow-hidden">
              {/* <img
                src={selectedBook.imageSrc || "/placeholder-book.jpg"}
                alt={selectedBook.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full bg-gray-300"></div>
            </div>
          </div>

          {/* Book Information */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedBook.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg font-medium">
                  <Tag className="w-4 h-4" />
                  {subjectInfo?.name || selectedBook.categoryId}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 rounded-lg font-medium">
                  <GraduationCap className="w-4 h-4" />
                  ថ្នាក់ទី {selectedBook.grade}
                </span>
                
              </div>

              <div className="space-y-4 mb-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">អ្នកនិពន្ធ</p>
                    <p className="text-[15px] font-medium text-gray-900">{selectedBook.author}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">ចំនួនអ្នកមើល</p>
                    <p className="text-[15px] font-medium text-gray-900">{selectedBook.views.toLocaleString()} នាក់</p>
                  </div>
                </div>
              </div>

              <div className="">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">ពិពណ៌នា</h2>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>

                <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => window.open(selectedBook.pdfSrc, '_blank')}
                      className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                    >
                      ចាប់ផ្តេីមអាន
                    </button>
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition duration-200"
                    >
                      រក្សាទុក
                    </button>
                </div>
            </div>   
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (

        <section className="flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-3xl p-4 border-1 border-gray-200">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            សៀវភៅពាក់ព័ន្ធផ្សេងៗទៀត
          </h2>
          <div className="
            grid grid-flow-col
            auto-cols-[65%]
            sm:auto-cols-[33%]
            lg:auto-cols-[25%]
            gap-4 pb-2 scroll-smooth
            overflow-x-auto whitespace-nowrap scrollbar-hide">
            
            {relatedBooks.map((book) => (
              <BookCard key={book.id} book={book} onClick={handleBookSelected} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}