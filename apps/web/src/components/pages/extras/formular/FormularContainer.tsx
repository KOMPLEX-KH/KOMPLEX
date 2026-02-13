'use client';

import { useState, useCallback  } from "react";
import FormularCard from "./FormularCard";
import EmptyState from "./EmptyState";
import { Formula } from "@core-types/content/formular";
import { X, BookOpen, Tag, Calculator, Copy, Check } from "lucide-react";

interface FormularPageProps {
  filteredFormulas: Formula[];
  searchQuery: string;
  selectedSubject: string;
}

export default function FormularPage({
  filteredFormulas,
  searchQuery,
  selectedSubject
}: FormularPageProps) {
  
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);

  const handleFormulaClick = useCallback((id: string) => {
    setSelectedFormula(filteredFormulas.find(f => f.id === id) || null);
  }, [filteredFormulas]);

  const handleCloseDetail = () => {
    setSelectedFormula(null);
  };
  
  // pop  up
  if (selectedFormula) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleCloseDetail}
      >
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-indigo-600  text-white p-6 rounded-t-3xl">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedFormula.title}</h2>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>


          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Formula Display */}
            <div className="bg-gray-50 rounded-3xl p-6 border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-indigo-600" />
                  រូបមន្ត
                </h3>               
              </div>
              <div className="text-2xl font-mono text-center py-4 text-gray-800 z-10 relative">
                {selectedFormula.formula}
              </div>
            </div>

            {/* Description  */}
            {selectedFormula.description && selectedFormula.description.trim() !== '' && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">ពណ៌នា</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedFormula.description}
                </div>
              </div>
            )}

            {selectedFormula.variables && selectedFormula.variables.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">អថេរ</h3>
                <div className="space-y-3">
                  {selectedFormula.variables.map((variable, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-3xl"
                    >
                      <span className="font-mono font-bold text-indigo-600 text-lg min-w-[40px]">
                        {variable.symbol}
                      </span>
                      <div>
                        <p className="font-medium text-gray-800">{variable.name}</p>
                        {variable.unit && (
                          <p className="text-sm text-gray-600 mt-1">
                            ឯកតា: <span className="font-mono">{variable.unit}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }

  return (
    <>
      {filteredFormulas.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredFormulas.map((formula) => (
            <FormularCard
              key={formula.id}
              formula={formula}
              onClick={handleFormulaClick}
            />
          ))}
        </div>
      ) : (
        <EmptyState searchQuery={searchQuery} selectedSubject={selectedSubject} />
      )}
    </>
  );
}
