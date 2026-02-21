'use client';

import { useState, useEffect } from "react";
import FormularHeader from "@/components/pages/extras/formular/FormularHeader";
import FormularContainer from "@/components/pages/extras/formular/FormularContainer";
import { feedCurriculumsService } from "@/services";
import { Grade } from "@core-types/docs/curriculum";
import { subjectMapping } from "@core-types/content/formular";
import { mockFormulas } from "@core-types/content/formular";


// read curriculum from localStorage
const getStoredCurriculum = (): Grade[] =>{
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("curriculum");
  return stored ? JSON.parse(stored) : [];
}

export default function FormularPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [curriculum , setCurriculum] = useState<Grade[]>(getStoredCurriculum);

  // default Grade
  const [selectedGrade, setSelectedGrade] = useState(() => {
    const grades = getStoredCurriculum();
    const grade12 = grades.find(g => g.name.includes("១២"));
    return grade12 ? String(grade12.id) : "4";
  });

  // default Subject
  const [selectedSubject, setSelectedSubject] = useState(()=>{
    const grades = getStoredCurriculum();
    const grade12 = grades.find(g => g.name.includes("១២"));
    return grade12?.subjects[0]?.id?.toString() || "";
  })

  const [formulas, setFormulas] = useState(mockFormulas);

  // Fetch curriculum data if not available in localStorage
  useEffect(() => {
    if (!curriculum.length) {
      const fetchCurriculum = async () => {
        const data = await feedCurriculumsService.getCurriculum();
        setCurriculum(data.data);
        localStorage.setItem("curriculum", JSON.stringify(data.data));
      };
      fetchCurriculum();
    }
  }, [curriculum.length]);

  // Filter formulas
  const filteredFormulas = formulas.filter((formula) => {
    
    const matchesSearch = 
      searchQuery === "" ||
      formula.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(formula.formula).toLowerCase().includes(searchQuery.toLowerCase());

    const currentGrade = curriculum.find(g => String(g.id) === selectedGrade);
    const currentSubject = currentGrade?.subjects.find(s => String(s.id) === selectedSubject);
    
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
            curriculum = {curriculum}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
          />
          
          {/* content */}
          <FormularContainer
            filteredFormulas={filteredFormulas}
            searchQuery={searchQuery}
            selectedSubject={selectedSubject}
          />
      </div>   
    </div>
  );
}