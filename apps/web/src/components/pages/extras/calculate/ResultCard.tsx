'use client';

import React from 'react';
import {Award } from "lucide-react";

export default function ResultCard({ result, scores, getSubjectGrade, subjects }) {
  if (!result) return null;

  return (
    <div id="result-section" className="w-full flex flex-col shadow-2xl rounded-xl p-4">

      <div className="flex items-center justify-center mt-4">
        <h1 className={`text-3xl font-bold mb-4 ${result.grade === "F" ? "text-red-500" : "text-green-600"}`}>
          {result.grade === "F" ? "សូមចូលរួមសោកស្តាយ" : "សូមអបអរសាទរ !!"}
        </h1>
      </div>

      <div className="flex items-center justify-center w-full p-4">
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 
                        rounded-3xl shadow-sm p-4 bg-white 
                        scale-90 sm:scale-95 md:scale-100">

          {/* Final Result */}
          <div className="flex flex-col justify-center items-center gap-2 w-20 sm:w-24 md:w-28">
            <p className="text-gray-400 text-lg sm:text-xl">លទ្ធផល</p>
            <p className="text-indigo-500 text-3xl sm:text-4xl font-bold">
              {result.grade === "F" ? "ធ្លាក់" : "ជាប់"}
            </p>
          </div>

          {/* Total Score */}
          <div className="flex flex-col justify-center items-center gap-2 
                          bg-indigo-600 rounded-3xl p-3 sm:p-4 w-28 sm:w-32 md:w-35 shadow-lg">
            <p className="text-white text-lg sm:text-xl">ពិន្ទុសរុប</p>
            <p className="text-white text-3xl sm:text-4xl font-bold">{result.average}</p>
          </div>

          {/* Final Grade */}
          <div className="flex flex-col justify-center items-center gap-2 w-20 sm:w-24 md:w-28">
            <p className="text-gray-400 text-lg sm:text-xl">និទ្ទេស</p>
            <p className="text-indigo-500 text-3xl sm:text-4xl font-bold">{result.grade}</p>
          </div>

        </div>
      </div>

      {/* Each Subject Result */}
      <div className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subj) => {
            const score = Number(scores[subj.key]) || 0;
            const grade = getSubjectGrade(subj.key, score);

            return (
              <div key={subj.key}
                className="bg-white rounded-3xl shadow-sm p-5 flex relative flex-col items-start"
              >
                {/* Icon and subject name */}
                <div className='flex gap-2 items-center'>
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <Award size={22} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-600">{subj.name}</p>
                  </div>
                </div>

                {/* Score and grade */}
                <div className="flex items-center justify-end w-full">
                  <p className="text-3xl text-red-500 font-semibold">{grade}</p>
                </div>

                <div className='absolute left-0 bottom-0 bg-indigo-600 p-2 rounded-bl-3xl w-17 rounded-tr-[80px]'>
                  <p className="text-xl font-bold text-white">{score}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
