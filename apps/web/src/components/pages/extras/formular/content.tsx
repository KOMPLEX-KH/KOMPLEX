'use client';

import { useState, useEffect } from "react";
import FormularHeader from "./components/FormularHeader";
import FormularPage from "./components/FormularPage";
import { feedCurriculumsService } from "@/services";
import { Grade } from "@/types/docs/curriculum";
import { mockFormulas } from "@core-types/content/formular";


export default function FormularContent() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedSubject, setSelectedSubject] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      if (stored) {
        const parsed = JSON.parse(stored) as Grade[];
        const grade12 = parsed.find(g => g.name.includes("១២")) || parsed[parsed.length - 1];
        if (grade12 && grade12.subjects.length > 0) {
          return String(grade12.subjects[0].id);
        }
      }
    }
    return "";
  });

  const [selectedGrade, setSelectedGrade] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      if (stored) {
        const parsed = JSON.parse(stored) as Grade[];
        const grade12 = parsed.find(g => g.name.includes("១២")) || parsed[parsed.length - 1];
        return grade12 ? String(grade12.id) : "4";
      }
    }
    return "4";
  });

  const [formulas, setFormulas] = useState(mockFormulas);
  const [loading, setLoading] = useState(false);

  const [curriculum, setCurriculum] = useState<Grade[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      const parsed = stored ? JSON.parse(stored) : [];
      console.log('Loaded curriculum from localStorage:', parsed.length, 'grades');
      return parsed;
    }
    return [];
  });

  useEffect(() => {
    if (curriculum.length === 0) {
      console.log('Fetching curriculum from API...');
      const fetchCurriculum = async () => {
        try {
          const curriculumData = await feedCurriculumsService.getCurriculum();
          console.log('Fetched curriculum:', curriculumData.length, 'grades');
          setCurriculum(curriculumData);
          localStorage.setItem('curriculum', JSON.stringify(curriculumData));
        } catch (error) {
          console.error('Error fetching curriculum:', error);
        }
      };
      fetchCurriculum();
    }
  }, [curriculum.length]);

  // Filter formulas based on search and filters
  const filteredFormulas = formulas.filter((formula) => {
    const matchesSearch = 
      searchQuery === "" ||
      formula.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(formula.formula).toLowerCase().includes(searchQuery.toLowerCase());

    // Get the selected subject name from curriculum
    const currentGrade = curriculum.find(g => String(g.id) === selectedGrade);
    const currentSubject = currentGrade?.subjects.find(s => String(s.id) === selectedSubject);
    
    // Map subject names to formula subject codes
    const subjectMapping: { [key: string]: string } = {
      "គណិតវិទ្យា": "math",
      "រូបវិទ្យា": "physics", 
      "គីមីវិទ្យា": "chemistry",
      "ជីវវិទ្យា": "biology"
    };
    
    const matchesSubject = currentSubject 
      ? formula.subject === subjectMapping[currentSubject.name]
      : true;

    const matchesCategory = 
      selectedCategory === "all" || 
      String(formula.category) === selectedCategory;


    return matchesSearch && matchesSubject && matchesCategory;
  });

  return (
    <div className="relative">
      <div className="flex flex-col pt-3 ">
          <FormularHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
          />

          {/* Formulas Page with Grid and Detail View */}
          <FormularPage
            loading={loading}
            filteredFormulas={filteredFormulas}
            searchQuery={searchQuery}
            selectedSubject={selectedSubject}
          />
      </div>   
    </div>
  );
}
