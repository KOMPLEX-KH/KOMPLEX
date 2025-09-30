import React from "react";
import { InlineMath } from "react-katex";


const Acid_Base_Tables = () => {
  return (
    <div className="flex flex-col items-start gap-2">

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">ឈ្មោះនិងរូបមន្តរបស់អុីដ្រូអាសុីត</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr >
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white ">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតភ្លុយអរីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HF" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតក្លរីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HCl" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតប្រូមីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HBr" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអុីយ៉ូឌីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HI" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស៊ុលភីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{2}S" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">ឈ្មោះអុកសុីអាសុីតនិងអាញ៉ុង់របស់វា</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះអាសុីត</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">អាញ៉ុង</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HNO_{3}" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតនីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="NO_{3}^{-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{2}SO_{4}" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស៊ុលផួរិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="SO_{4}^{2-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{3}PO_{4}" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតផូស្វរិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="PO_{4}^{3-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HOCl" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអុីប៉ូក្លរុឺ</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="ClO^{-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HClO_{2}" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតក្លរុឺ</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="ClO_{2}^{-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{2}CO_{3}" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតកាបូនិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="CO_{3}^{2-}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="CH_{3}COOH" /></td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអាសេទិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="CH_{3}COO^{-}" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">អាសុីតខ្លាំងមួយចំនួន</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតក្លរីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HCl" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតប្រូមីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HBr" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអុីយ៉ូឌីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HI" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតនីទ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HNO_{3}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស៊ុលផួរិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{2}SO_{4}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតពែក្លរិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HClO_{4}" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">អាសុីតខ្សោយមួយចំនួន</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអាសេទិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="CH_{3}COOH" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស្យានីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HCN" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតភ្លុយអរីឌ្រិច</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HF" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតនីត្រឺ</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HNO_{2}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតស៊ុលផួរុឺ</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="H_{2}SO_{3}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាសុីតអុីប៉ូក្លរុឺ</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="HClO" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">បាសខ្លាំងមួយចំនួន</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">សូដ្យូមអុីដ្រុកសុីត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="NaOH" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">ប៉ូតាស្យូមអុីដ្រូកសុីត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="KOH" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">កាល់ស្យូមអុីដ្រូកសុីត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="Ca(OH)_{2}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">បារ្យូមអុីដ្រូកសុីត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="Ba(OH)_{2}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">សូដ្យូមផូស្វាត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="Na_{2}PO_{4}" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6 w-full">
        <p className="text-lg font-semibold mb-3">បាសខ្សោយមួយចំនួន</p>
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden shadow-md text-xs sm:text-sm md:text-base">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">ឈ្មោះ</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 text-left">រូបមន្ត</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អាម៉ូញ៉ាក់</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="NH_{3}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">សូដ្យូមកាបូណាត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="Na_{2}CO_{3}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">ប៉ូតាស្យូមកាបូណាត</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="K_{2}CO_{3}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">អានីលីន</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="C_{6}H_{5}NH_{2}" /></td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-2 py-2 sm:px-4 sm:py-3">ទ្រីមេទីលអាមីន</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 text-[12px] sm:text-sm"><InlineMath math="(CH_{3})_{3}N" /></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Acid_Base_Tables;
