import React from "react";
import { InlineMath } from "react-katex";


const Acid_tables = () => {
  return (
    <div className="overflow-x-auto my-6">
      <p className="text-lg font-semibold mb-3">ឈ្មោះនិងរូបមន្តរបស់អុីដ្រូអាសុីត</p>
      <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
            <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3">អុីដ្រូអាសុីត</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="HF" /></td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតក្លរីឌ្រិច</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="HCl" /></td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស៊ុលផួរិច</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-[10px] sm:text-sm"><InlineMath math="HBr" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Acid_tables;
