'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubjectCard from "./components/SubjectCard";
import { ScienceSubjects, SocialScienceSubjects, getSubjectScienceGrade, getSubjectSocialScienceGrade } from "@/types/extra/calculation";
import ResultCard from "./components/ResultCard";
import { Calculator } from "lucide-react";

type Scores = {
  [key: string]: string;
};

export default function CalculateContent() {
  const [tempScores, setTempScores] = useState<Scores>({});

  const [scores, setScores] = useState<Scores>({});
  const [result, setResult] = useState<{ average: number; grade: string } | null>(null);

  const [isCalculating, setIsCalculating] = useState(false);

  const [subjectType, setSubjectType] = useState("science");
  const activeSubjects = subjectType === "science" ? ScienceSubjects : SocialScienceSubjects;

  const requiredKeys =
    subjectType === "science"
      ? ["math", "physics", "biology", "chemistry", "khmer", "history"]
      : ["math", "khmer", "history", "geography", "ethics", "earth"];

  const canCalculate = requiredKeys.every(key => tempScores[key] && tempScores[key].trim() !== "");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScores = localStorage.getItem("scores");
      const savedResult = localStorage.getItem("result");
      if (savedScores) setScores(JSON.parse(savedScores));
      if (savedResult) setResult(JSON.parse(savedResult));
      if (savedScores) setTempScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("scores");
      localStorage.removeItem("result");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const newScores: Scores = {};
    activeSubjects.forEach(subject => {
      newScores[subject.key] = "";
    });
    setTempScores(newScores);
    setScores({});
    setResult(null);
    localStorage.removeItem("scores");
    localStorage.removeItem("result");
  }, [subjectType]);

  useEffect(() => {
    if (result) {
      const resultSection = document.getElementById("result-section");
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [result]);

  const handleScoreChange = (key: string, value: string) => {
    const subject = activeSubjects.find(s => s.key === key);
    const max = subject ? subject.maxScore || 100 : 100;
    const numValue = parseFloat(value);

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

  const calculateGrade = (scoresParam: Scores) => {
    const s = scoresParam;

    const math = Number(s.math) || 0;
    const physics = Number(s.physics) || 0;
    const biology = Number(s.biology) || 0;
    const chemistry = Number(s.chemistry) || 0;
    const khmer = Number(s.khmer) || 0;
    const history = Number(s.history) || 0;
    const english = Number(s.english) || 0;

    const requiredSum = math + physics + biology + chemistry + khmer + history;
    const englishBonus = english > 25 ? english - 25 : 0;

    if (requiredSum === 0) {
      setResult(null);
      return;
    }

    const totalPoints = requiredSum + englishBonus;

    let grade = "";

    if (totalPoints >= 427) grade = "A";
    else if (totalPoints >= 380) grade = "B";
    else if (totalPoints >= 332) grade = "C";
    else if (totalPoints >= 285) grade = "D";
    else if (totalPoints >= 237) grade = "E";
    else grade = "F";

    setResult({ average: Math.round(totalPoints), grade });
  };

  const getSubjectGrade = (key: string, score: number) => {
    return subjectType === "science"
      ? getSubjectScienceGrade(key, score)
      : getSubjectSocialScienceGrade(key, score);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">

        <div className="bg-indigo-600 text-white py-12 px-4 rounded-t-3xl">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-between items-center">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-8 h-8" />
              <h1 className="text-4xl font-bold">គណនាពិន្ទុបាក់ឌុប</h1>
            </div>

            <div className="flex items-center justify-center mt-4 lg:mt-0 lg:justify-end rounded-md w-full lg:w-auto">
              <div className="bg-gray-200 rounded-3xl p-1 w-full lg:w-[260px] flex gap-2">
                <button
                  onClick={() => setSubjectType("science")}
                  className={`flex-1 py-2 rounded-3xl text-sm font-medium transition-all duration-300 border border-transparent
                    ${subjectType === "science"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-600 hover:bg-indigo-50 hover:border-indigo-600"
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
                      : "text-gray-600 hover:bg-indigo-50 hover:border-indigo-600"
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
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12
            md:[&>*:last-child]:col-span-2
            lg:[&>*:last-child]:col-start-2
            lg:[&>*:last-child]:col-span-1
            md:[&>*:last-child]:max-w-[350px]
            md:[&>*:last-child]:mx-auto"
        >


          {activeSubjects.map((subject, idx) => (
            <SubjectCard
              key={subject.key}
              subject={subject}
              index={idx}
              value={tempScores[subject.key] || ""}
              onChange={(v) => handleScoreChange(subject.key, v)}
            />
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
                ? "bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 hover:scale-105"
                : "bg-blue-300 text-white cursor-not-allowed"
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
