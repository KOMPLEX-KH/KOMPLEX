'use client';

import { Search, BookOpen, ChevronDown, Filter, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import BookContainer from "./books/BookContainer";
import ExtraHeader from "./utils/ExtraHeader";
import { categories, lessonsBySubject, Books } from "@/types/library/library";

export default function LibraryContent() {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [openPanel, setOpenPanel] = useState(false);

  const filterRef = useRef(null);   
  const panelRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const searchParams = useSearchParams();
  const bookSelectedFromUrl = searchParams.get("book");


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

  // lesson list
  const lessons = selectedSubject === "all" 
      ? [{ id: "all", name: "គ្រប់មេរៀន" }]
      : [{ id: "all", name: "គ្រប់មេរៀន" }, ...(lessonsBySubject[selectedSubject] || [])];

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
          openPanel={openPanel}
          setOpenPanel={setOpenPanel}
          filterRef={filterRef}
          panelRef={panelRef}
          lessons={lessons}
        />
      )}
      
      <div className="max-w-6xl mx-auto pt-5">
        <BookContainer books={Books}/>
      </div>
    </div>
  );
}
