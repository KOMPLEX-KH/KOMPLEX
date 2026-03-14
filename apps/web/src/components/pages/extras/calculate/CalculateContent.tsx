'use client';

import { useEffect, useState } from "react";
import { Calculator } from "lucide-react";
import { Subject, SubjectKey } from "@core-types/extra/calculation";
import SubjectCard from "@/components/pages/extras/calculate/SubjectCard";
import { ScienceSubjects, SocialScienceSubjects, getSubjectScienceGrade, getSubjectSocialScienceGrade } from "@core-types/extra/calculation";
import ResultCard from "@/components/pages/extras/calculate/ResultCard";
import { Scores } from "@core-types/extra/calculation";
import { calculateTotalGrade } from "@core-types/extra/calculation";


export default function CalculatePage() {

  const [tempScores, setTempScores] = useState<Scores>({});
  const [scores, setScores] = useState<Scores>({});
  const [result, setResult] = useState<{ average: number; grade: string } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [subjectType, setSubjectType] = useState("science");
  const activeSubjects: Subject[] = subjectType === "science" ? ScienceSubjects : SocialScienceSubjects;

  const canCalculate = activeSubjects.every(
    s => tempScores[s.key]?.trim()
  );

  // scroll user to result section
  useEffect(() => {
    if (result) {
      const resultSection = document.getElementById("result-section");
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [result]);


  const handleScoreChange = (key: SubjectKey, value: string) => {
    const max = activeSubjects.find(s => s.key === key)!.maxScore;
    const numValue = Number(value);

    if (value === "" || (numValue >= 0 && numValue <= max)) {
      setTempScores(prev => ({ ...prev, [key]: value }));
    }
  };

  const onCalculateClick = () => {
    if (!canCalculate) return;
    setIsCalculating(true);

    setTimeout(() => {
      setScores(tempScores);
      calculateGrade(tempScores);
      setIsCalculating(false);

    }, 1000);
  };

  const calculateGrade = (scoreParam: Scores) => {
    let requiredSum = 0;
    let englishBonus = 0;


    activeSubjects.forEach((sub) => {
      const value = Number(scoreParam[sub.key]) || 0;

      if (sub.key === "english") {
        if (value > 25) englishBonus = value - 25;
      } else {
        requiredSum += value;
      }
    });

    if (requiredSum === 0) {
      setResult(null);
      return;
    }

    const totalPoint = englishBonus + requiredSum;
    const grade = calculateTotalGrade(totalPoint);


    setResult({ average: Math.round(totalPoint), grade });
  };


  const getSubjectGrade = (key: SubjectKey, score: number) => {
    return subjectType === "science"
      ? getSubjectScienceGrade(key, score)
      : getSubjectSocialScienceGrade(key, score);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto mt-3">

        <div className="bg-indigo-600 dark:bg-indigo-900 text-white py-12 px-4 rounded-t-3xl">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-between items-center">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-8 h-8" />
              <h1 className="text-4xl font-bold">គណនាពិន្ទុបាក់ឌុប</h1>
            </div>

            <div className="flex items-center justify-center mt-4 lg:mt-0 lg:justify-end rounded-md w-full lg:w-auto">
              <div className="bg-gray-200 dark:bg-zinc-800 rounded-3xl p-1 w-full lg:w-[260px] flex gap-2">
                <button
                  onClick={() => setSubjectType("science")}
                  className={`flex-1 py-2 rounded-3xl text-sm font-medium transition-all duration-300 border border-transparent
                    ${subjectType === "science"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-600 dark:text-zinc-400 hover:bg-indigo-50 hover:border-indigo-600"
                    }
                  `}
                >
                  វិទ្យាសាស្រ្តពិត
                </button>

                <button
                  onClick={() => setSubjectType("social")}
                  className={`flex-1 py-2 rounded-3xl text-sm font-medium transition-all duration-300 border border-transparent
                    ${subjectType === "social"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-600 dark:text-zinc-400 hover:bg-indigo-50 hover:border-indigo-600"
                    }
                  `}
                >
                  វិទ្យាសាស្រ្តសង្គម
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Subject Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max  my-12">
          {activeSubjects.map((subject, idx) => (
            <div key={subject.key} className="w-full" >
              <SubjectCard
                subject={subject}
                index={idx}
                value={tempScores[subject.key] || ""}
                onChange={(v) => handleScoreChange(subject.key, v)}
              />
            </div>
          ))}
        </div>


        {/* Calculate Button */}
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={onCalculateClick}
            disabled={!canCalculate || isCalculating}
            className={`
              px-16 py-4 rounded-full text-xl font-bold shadow-sm  transition-all duration-300
              ${canCalculate && !isCalculating
                ? "bg-indigo-600 dark:bg-indigo-900 hover:bg-indigo-500 text-white active:scale-95 hover:scale-105"
                : "bg-blue-300 dark:bg-zinc-800 text-white cursor-not-allowed"
              }
            `}
            style={{ cursor: (!canCalculate || isCalculating) ? "not-allowed" : "pointer" }}
          >
            {isCalculating ? "កំពុងគណនា..." : "គណនាពិន្ទុ"}
          </button>
        </div>

        {/* Result */}
        <ResultCard
          result={result}
          scores={scores}
          getSubjectGrade={getSubjectGrade}
          subjects={activeSubjects}
        />
      </div>
    </div>
  );
}