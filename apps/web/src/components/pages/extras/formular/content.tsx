'use client';

import { useState, useEffect } from "react";
import FormularHeader from "./components/FormularHeader";
import FormularCard from "./components/FormularCard";
import FormularSkeleton from "./utils/FormularSkeleton";
import EmptyState from "./utils/EmptyState";

// Mock data - replace with actual API call
const mockFormulas = [
  {
    id: "1",
    title: "ទ្រឹស្តីបទពីតាហ្គោរ៉ាស",
    formula: "a² + b² = c²",
    description: "រូបមន្តគណនាប្រវែងជ្រុងទ្រេតក្នុងត្រីកោណកែង",
    subject: "math",
    category: "geometry",
    views: 1250,
    isSaved: true,
  },
  {
    id: "2",
    title: "ច្បាប់នូតុនទី២",
    formula: "F = ma",
    description: "កម្លាំង = ម៉ាស់ × ឩស្សាហភាព",
    subject: "physics",
    category: "mechanics",
    views: 980,
    isSaved: false,
  },
  {
    id: "3",
    title: "ទ្រឹស្តីបទអេស្តាញ",
    formula: "E = mc²",
    description: "ទំនាក់ទំនងរវាងថាមពល និងម៉ាស់",
    subject: "physics",
    category: "mechanics",
    views: 2100,
    isSaved: true,
  },
  {
    id: "4",
    title: "រូបមន្តទឹកគីមី",
    formula: "H₂O",
    description: "ទឹក = ២អ៊ីដ្រូសែន + ១អុកស៊ីសែន",
    subject: "chemistry",
    category: "organic",
    views: 750,
    isSaved: false,
  },
  {
    id: "5",
    title: "រូបមន្តគណនាផ្ទៃក្រាស",
    formula: "A = πr²",
    description: "គណនាផ្ទៃរង្វង់ដោយប្រើកាំ",
    subject: "math",
    category: "geometry",
    views: 1450,
    isSaved: false,
  },
  {
    id: "6",
    title: "ច្បាប់ចាលឡេស",
    formula: "PV = nRT",
    description: "ទំនាក់ទំនងរវាងសម្ពាធ حجម និងសីតុណ្ហភាព",
    subject: "chemistry",
    category: "inorganic",
    views: 890,
    isSaved: false,
  },
  {
    id: "7",
    title: "រូបមន្តរីកតុង",
    formula: "ax² + bx + c = 0",
    description: "សមីការកូនិគ្រីនីក",
    subject: "math",
    category: "algebra",
    views: 1680,
    isSaved: true,
  },
  {
    id: "8",
    title: "ច្បាប់ផតូស៊ីនតេស",
    formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
    description: "ដំណើរការផលិតអាហារក្នុងរុក្ខជាតិ",
    subject: "biology",
    category: "ecology",
    views: 1120,
    isSaved: false,
  },
  {
    id: "9",
    title: "ច្បាប់អូម",
    formula: "V = IR",
    description: "ទំនាក់ទំនងរវាងវ៉ុល អំពែរ និងធនាធាន",
    subject: "physics",
    category: "electricity",
    views: 1340,
    isSaved: true,
  },
];

export default function FormularContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formulas, setFormulas] = useState(mockFormulas);
  const [loading, setLoading] = useState(false);

  // Filter formulas based on search and filters
  const filteredFormulas = formulas.filter((formula) => {
    const matchesSearch = 
      searchQuery === "" ||
      formula.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formula.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formula.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject = 
      selectedSubject === "all" || formula.subject === selectedSubject;

    const matchesCategory = 
      selectedCategory === "all" || formula.category === selectedCategory;

    return matchesSearch && matchesSubject && matchesCategory;
  });

  const handleFormulaClick = (id: string) => {
    console.log("Formula clicked:", id);
    // Navigate to formula detail page or open modal
  };

  return (
    <div className="flex flex-col pt-3">
      <FormularHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-4 text-gray-600 text-sm">
          រកឃើញ <span className="font-semibold text-blue-600">{filteredFormulas.length}</span> រូបមន្ត
        </div>
      )}

      {/* Formulas Grid */}
      {loading ? (
        <FormularSkeleton />
      ) : filteredFormulas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
